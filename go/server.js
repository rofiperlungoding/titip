// Titip Go server. Node 18+, no dependencies.
// Serves the static site (landing, /app/, /go/) and the Titip Go API under /go/api/.
// The Gemini key stays on this server; the browser never sees it.
//
// Env: PORT (8093), WEB (static root), DATA (class storage dir), GEMINI_API_KEY, GEMINI_MODEL.
'use strict';
const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const PORT = +process.env.PORT || 8093;
const WEB = path.resolve(process.env.WEB || path.join(__dirname, '..', 'web'));
const DATA = path.resolve(process.env.DATA || path.join(__dirname, 'data'));
const KEY = process.env.GEMINI_API_KEY || '';
const MODEL = process.env.GEMINI_MODEL || 'gemini-2.5-flash';
fs.mkdirSync(DATA, { recursive: true });

// ---------- small helpers ----------
const MIME = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.json': 'application/json', '.ico': 'image/x-icon', '.webmanifest': 'application/manifest+json', '.txt': 'text/plain; charset=utf-8' };
const ALPHA = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // no 0/O, 1/I
const rand = (n) => Array.from(crypto.randomBytes(n), (b) => ALPHA[b % ALPHA.length]).join('');
const str = (v, max) => String(v == null ? '' : v).replace(/[\u0000-\u0008\u000b-\u001f]/g, '').trim().slice(0, max);
const LANGS = { en: 'English', id: 'Bahasa Indonesia', es: 'Spanish', fr: 'French', pt: 'Portuguese', sw: 'Swahili', hi: 'Hindi', bn: 'Bengali', ar: 'Arabic' };

class HttpError extends Error {
  constructor(code, msg) { super(msg); this.code = code; }
}
const fail = (code, msg) => { throw new HttpError(code, msg); };

// ---------- storage: one JSON file per class ----------
const classFile = (code) => {
  if (!/^[A-Z2-9]{6}$/.test(code)) fail(404, 'No class with that code.');
  return path.join(DATA, code + '.json');
};
const load = (code) => {
  try { return JSON.parse(fs.readFileSync(classFile(code), 'utf8')); } catch (e) { if (e instanceof HttpError) throw e; fail(404, 'No class with that code.'); }
};
const save = (c) => {
  const f = classFile(c.code), tmp = f + '.tmp';
  fs.writeFileSync(tmp, JSON.stringify(c));
  fs.renameSync(tmp, f);
};
const hashPin = (pin, salt) => crypto.scryptSync(pin, salt, 32).toString('hex');
const newToken = () => crypto.randomBytes(24).toString('hex');
const tokenHash = (t) => crypto.createHash('sha256').update(t).digest('hex');

function teacher(req) {
  const m = /^Bearer ([a-f0-9]{48})$/.exec(req.headers.authorization || '');
  const code = str(req.headers['x-class'], 6).toUpperCase();
  if (!m || !code) fail(401, 'Please log in again.');
  const c = load(code);
  if (!c.tokens.includes(tokenHash(m[1]))) fail(401, 'Please log in again.');
  return c;
}

// ---------- limits ----------
const hits = new Map(); // key -> [timestamps]
function limit(key, max, windowMs) {
  const now = Date.now(), a = (hits.get(key) || []).filter((t) => now - t < windowMs);
  if (a.length >= max) fail(429, 'Too many requests. Please wait a minute.');
  a.push(now); hits.set(key, a);
}
let aiDay = '', aiCount = 0;
const AI_DAILY = +process.env.AI_DAILY || 3000;
function aiBudget(ip) {
  const d = new Date().toISOString().slice(0, 10);
  if (d !== aiDay) { aiDay = d; aiCount = 0; }
  if (aiCount >= AI_DAILY) fail(503, 'The AI helper is resting for today. Everything else still works.');
  limit('ai:' + ip, 40, 10 * 60 * 1000);
  aiCount++;
}

// ---------- lesson validation (same shape as offline Titip) ----------
function cleanLesson(L) {
  if (!L || typeof L !== 'object') fail(400, 'Lesson is missing.');
  const lang = LANGS[L.lang] ? L.lang : 'en';
  const out = {
    title: str(L.title, 90) || 'Untitled lesson',
    lang,
    text: (Array.isArray(L.text) ? L.text : []).map((t) => str(t, 400)).filter(Boolean).slice(0, 12),
    g: (Array.isArray(L.g) ? L.g : []).map((p) => [str(p && p[0], 40), str(p && p[1], 160)]).filter((p) => p[0] && p[1]).slice(0, 12),
    q: [],
  };
  if (L.ex) out.ex = str(L.ex, 160);
  for (const q of (Array.isArray(L.q) ? L.q : []).slice(0, 12)) {
    const type = q && ['inp', 'open'].includes(q.type) ? q.type : undefined;
    const item = { q: str(q && q.q, 300), h: str(q && q.h, 240) };
    if (!item.q) continue;
    if (type === 'open') {
      item.type = 'open';
      item.r = str(q.r, 400) || 'A clear, correct answer in the learner\'s own words.';
      out.q.push(item);
      continue;
    }
    const c = (Array.isArray(q.c) ? q.c : []).map((x) => str(x, 120)).filter(Boolean).slice(0, 6);
    const a = Math.floor(+q.a);
    if (c.length < 2 || !(a >= 0 && a < c.length)) continue;
    Object.assign(item, { c, a });
    if (type === 'inp') item.type = 'inp';
    out.q.push(item);
  }
  if (!out.q.length) fail(400, 'A lesson needs at least one complete question.');
  return out;
}

// ---------- Gemini ----------
async function gemini(system, user, schema, temperature = 0.4) {
  if (!KEY) fail(503, 'The AI helper is not set up on this server.');
  const body = {
    systemInstruction: { parts: [{ text: system }] },
    contents: [{ role: 'user', parts: [{ text: user }] }],
    generationConfig: { temperature, responseMimeType: 'application/json', responseSchema: schema, maxOutputTokens: 4096, thinkingConfig: { thinkingBudget: 0 } },
    safetySettings: ['HARASSMENT', 'HATE_SPEECH', 'SEXUALLY_EXPLICIT', 'DANGEROUS_CONTENT'].map((c) => ({ category: 'HARM_CATEGORY_' + c, threshold: 'BLOCK_LOW_AND_ABOVE' })),
  };
  const ctl = new AbortController();
  const timer = setTimeout(() => ctl.abort(), 30000);
  try {
    const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`, {
      method: 'POST', signal: ctl.signal,
      headers: { 'content-type': 'application/json', 'x-goog-api-key': KEY },
      body: JSON.stringify(body),
    });
    const j = await r.json();
    const text = j && j.candidates && j.candidates[0] && j.candidates[0].content && j.candidates[0].content.parts && j.candidates[0].content.parts.map((p) => p.text || '').join('');
    if (!r.ok || !text) { console.log('gemini error', r.status, JSON.stringify(j).slice(0, 300)); fail(502, 'The AI helper could not answer. Please try again.'); }
    return JSON.parse(text);
  } catch (e) {
    if (e instanceof HttpError) throw e;
    console.log('gemini exception', e.message);
    fail(502, 'The AI helper could not answer. Please try again.');
  } finally { clearTimeout(timer); }
}
const S = (props, req) => ({ type: 'OBJECT', properties: props, required: req || Object.keys(props) });
const STR = { type: 'STRING' }, INT = { type: 'INTEGER' };
const ARR = (items) => ({ type: 'ARRAY', items });

const SAFE = 'You help primary-school teachers and learners in low-connectivity communities. Use short, plain sentences a 9-year-old can read. Never ask for or include personal information. Stay strictly on the lesson topic.';

async function aiLesson({ topic, notes, lang, grade, n, open }) {
  const L = LANGS[lang] || 'English';
  const out = await gemini(
    SAFE + ' You write practice lessons. Facts must be correct and age-appropriate. Each multiple-choice question has exactly one correct answer, and every wrong choice reflects a real, common misconception. Hints point toward the idea without giving the answer away.',
    `Write a short practice lesson in ${L}.
Topic: ${topic}
Learner level: ${grade || 'primary school'}
${notes ? 'Teacher notes or text to base it on:\n' + notes + '\n' : ''}
Return: title; 3 to 5 short lesson sentences in "text"; one worked example in "ex"; 2 to 4 key words with plain meanings in "g"; and ${n} multiple-choice questions (3 or 4 choices, "a" = index of the correct choice, "h" = one-sentence hint, "why" = the misconception behind each wrong choice is not needed).${open ? ' Also add one short open question ("open" = its text, "rubric" = what a full-credit answer must contain).' : ''} Mark a question with "typed": true when its answer is a single number that a learner could type.`,
    S({
      title: STR, text: ARR(STR), ex: STR,
      g: ARR(S({ word: STR, meaning: STR })),
      q: ARR(S({ q: STR, c: ARR(STR), a: INT, h: STR, typed: { type: 'BOOLEAN' } }, ['q', 'c', 'a', 'h'])),
      open: STR, rubric: STR,
    }, ['title', 'text', 'g', 'q']),
    0.6,
  );
  const q = (out.q || []).map((x) => ({ q: x.q, c: x.c, a: x.a, h: x.h, type: x.typed && x.c && /^\s*-?\d+([.,]\d+)?\s*$/.test(x.c[x.a] || '') ? 'inp' : undefined }));
  if (open && out.open) q.push({ q: out.open, type: 'open', r: out.rubric, h: '' });
  return cleanLesson({ title: out.title, lang, text: out.text, ex: out.ex, g: (out.g || []).map((x) => [x.word, x.meaning]), q });
}

const choiceText = (q, i) => (i >= 0 && q.c && q.c[i] != null ? q.c[i] : '');

async function aiHint(lesson, q, picked, typed, tries) {
  const L = LANGS[lesson.lang] || 'English';
  const wrong = typed != null && typed !== '' ? `typed "${str(typed, 40)}"` : `chose "${choiceText(q, picked)}"`;
  const out = await gemini(
    SAFE + ' You are a patient tutor. Give one hint that responds to the specific wrong answer the learner gave. Do NOT state or reveal the correct answer, its number, or which choice is right. At most 2 sentences and 35 words.',
    `Lesson: ${lesson.title}\nLesson text: ${lesson.text.join(' ')}\nQuestion: ${q.q}\nChoices: ${(q.c || []).join(' | ')}\nCorrect answer (secret, never reveal): ${choiceText(q, q.a)}\nThe learner ${wrong}. This is try number ${tries}.\nWrite the hint in ${L}.`,
    S({ hint: STR }),
    0.5,
  );
  let hint = str(out.hint, 300);
  const ans = String(choiceText(q, q.a)).toLowerCase();
  if (!hint || (ans.length > 1 && hint.toLowerCase().includes(ans))) hint = q.h || ''; // never leak the answer
  return hint;
}

async function aiExplain(lesson, items) {
  const L = LANGS[lesson.lang] || 'English';
  const out = await gemini(
    SAFE + ' You explain mistakes kindly. For each item, say in at most 2 sentences why the right answer is right and why the learner\'s answer was a natural mistake.',
    `Lesson: ${lesson.title}\nLesson text: ${lesson.text.join(' ')}\nItems:\n${items.map((it, i) => `${i + 1}. Question: ${it.q} | Learner answered: ${it.mine || '(no answer)'} | Right answer: ${it.right}`).join('\n')}\nWrite in ${L}. Return one explanation per item, in order.`,
    S({ explanations: ARR(STR) }),
    0.4,
  );
  return (out.explanations || []).map((s) => str(s, 400));
}

async function aiGradeOpen(lesson, q, answer) {
  const L = LANGS[lesson.lang] || 'English';
  const out = await gemini(
    SAFE + ' You grade a short answer against a rubric. Score 0 (missing or wrong), 1 (partly right) or 2 (fully right). Be fair to spelling mistakes and simple language. Feedback: one encouraging sentence that says what to add or fix, without writing the full model answer.',
    `Question: ${q.q}\nRubric: ${q.r}\nLearner answer: ${str(answer, 400)}\nWrite feedback in ${L}.`,
    S({ score: INT, feedback: STR }),
    0.2,
  );
  return { score: Math.max(0, Math.min(2, Math.round(+out.score || 0))), feedback: str(out.feedback, 300) };
}

// ---------- class statistics (deterministic, no AI) ----------
function stats(c) {
  const L = c.lesson, subs = c.subs || [];
  const per = L ? L.q.map((q) => ({ q: q.q, type: q.type || 'mc', n: 0, first: 0, wrong: {}, open: [] })) : [];
  const learners = subs.map((s) => {
    let right = 0, total = 0, pts = 0, max = 0;
    s.ans.forEach((a, i) => {
      const p = per[i]; if (!p) return;
      const q = L.q[i];
      p.n++;
      if (q.type === 'open') { max += 2; pts += a.score || 0; p.open.push({ nick: s.nick, text: a.text, score: a.score, feedback: a.feedback }); return; }
      total++; max += 1;
      if (a.first === q.a) { right++; pts++; p.first++; }
      else { const w = a.first >= 0 ? q.c[a.first] : 'Typed: ' + (a.typed || '?'); p.wrong[w] = (p.wrong[w] || 0) + 1; }
    });
    const pct = max ? Math.round((pts / max) * 100) : 0;
    return { nick: s.nick, right, total, pct, group: pct < 50 ? 'A' : pct < 80 ? 'B' : 'C', at: s.at, demo: !!s.demo };
  });
  per.forEach((p) => {
    p.pct = p.n ? Math.round((p.first / p.n) * 100) : 0;
    p.top = Object.entries(p.wrong).sort((a, b) => b[1] - a[1]).slice(0, 3);
    p.reteach = p.type !== 'open' && p.n > 0 && p.pct < 50;
  });
  return { per, learners, n: subs.length };
}

async function aiAnalyse(c) {
  const st = stats(c), L = c.lesson;
  if (!st.n) fail(400, 'No answers yet.');
  const lines = st.per.map((p, i) => `Q${i + 1}: ${p.q} | right first try ${p.first}/${p.n} | common wrong: ${p.top.map((t) => `"${t[0]}" x${t[1]}`).join(', ') || 'none'}${p.open.length ? ' | open answers scored ' + p.open.map((o) => o.score).join(',') : ''}`).join('\n');
  const out = await gemini(
    SAFE + ' You help a teacher decide what to reteach. Base every statement only on the numbers given. Do not invent learners or numbers.',
    `Lesson: ${L.title} (${LANGS[L.lang] || 'English'})\nLesson text: ${L.text.join(' ')}\nClass results (${st.n} learners):\n${lines}\n\nReturn in ${LANGS[L.lang] || 'English'}: "summary" (2 sentences), "misconceptions" (up to 3: what learners seem to believe and which question shows it), "plan" (3 short steps to reteach tomorrow, 5 minutes each), and "followup": 3 new multiple-choice questions that target those misconceptions (3 choices, "a" = correct index, "h" = one-sentence hint).`,
    S({
      summary: STR,
      misconceptions: ARR(S({ belief: STR, question: INT })),
      plan: ARR(STR),
      followup: ARR(S({ q: STR, c: ARR(STR), a: INT, h: STR })),
    }),
    0.4,
  );
  let follow = null;
  try { follow = cleanLesson({ title: L.title + ' — follow-up', lang: L.lang, text: L.text, g: L.g, q: out.followup || [] }); } catch (e) { follow = null; }
  return { summary: str(out.summary, 500), misconceptions: (out.misconceptions || []).slice(0, 3).map((m) => ({ belief: str(m.belief, 240), question: +m.question || 0 })), plan: (out.plan || []).slice(0, 4).map((s) => str(s, 240)), followup: follow };
}

// ---------- demo data (made up, labelled) ----------
const DEMO_LESSON = {
  title: 'Fractions: half and quarter', lang: 'en',
  text: ['A fraction is a part of a whole thing.', 'Cut one cake into 2 equal parts. Each part is one half. We write it 1/2.', 'Cut one cake into 4 equal parts. Each part is one quarter. We write it 1/4.', 'Two quarters are the same as one half.'],
  ex: '1 cake ÷ 2 equal parts = 1/2 each',
  g: [['equal', 'the same size'], ['whole', 'complete, with no part missing']],
  q: [
    { q: 'You cut a cake into 2 equal parts. What is one part called?', c: ['One quarter', 'One half', 'One whole'], a: 1, h: 'Half means 2 equal parts.' },
    { q: 'Which piece of cake is bigger?', c: ['1/2', '1/4', 'They are the same'], a: 0, h: 'A cake cut into 4 parts has smaller pieces than a cake cut into 2 parts.' },
    { q: 'How many quarters make one half?', c: ['1', '4', '2'], a: 2, h: 'A quarter is 1 of 4 parts. A half is 2 of those 4 parts.' },
    { q: 'There are 8 mangoes. You take half. How many mangoes do you take?', c: ['2', '4', '6'], a: 1, type: 'inp', h: 'Half means 2 equal groups.' },
    { q: 'Explain in your own words why 2/4 is the same as 1/2.', type: 'open', r: 'Says that 2 quarters cover the same amount as 1 half, or that both are half of the whole.', h: '' },
  ],
};
function demoClass() {
  const code = rand(6), salt = rand(8);
  const picks = [[0, 0, 2, 1], [1, 0, 2, 1], [0, 0, 2, 1], [0, 1, 2, 1], [0, 0, 0, 1], [0, 0, 2, 1], [0, 2, 2, 0], [1, 0, 2, 1], [2, 0, 2, 1], [1, 0, 1, 1], [0, 0, 2, 2], [1, 0, 2, 1]];
  const opens = [['They are the same size because two quarters make one half.', 2, 'Clear and correct.'], ['Because 2 and 4 are even.', 0, 'Think about how much of the cake each one covers.'], ['2 small pieces are like 1 big half piece.', 2, 'Good: you compared the amounts.'], ['It is the same.', 1, 'Say why: how many quarters fit in a half?']];
  const subs = picks.map((p, i) => ({
    nick: 'Demo learner ' + (i + 1), at: Date.now() - (12 - i) * 60000, demo: true,
    ans: p.map((x, qi) => ({ first: x, tries: x === DEMO_LESSON.q[qi].a ? 1 : 2 })).concat([{ text: opens[i % 4][0], score: opens[i % 4][1], feedback: opens[i % 4][2] }]),
  }));
  const c = { code, name: 'Demo class (made-up data)', demo: true, salt, pin: hashPin('0000', salt), tokens: [], created: Date.now(), lesson: cleanLesson(DEMO_LESSON), subs };
  return c;
}
// Remove demo classes after a day.
setInterval(() => {
  for (const f of fs.readdirSync(DATA)) {
    if (!f.endsWith('.json')) continue;
    try { const c = JSON.parse(fs.readFileSync(path.join(DATA, f), 'utf8')); if (c.demo && Date.now() - c.created > 864e5) fs.unlinkSync(path.join(DATA, f)); } catch (e) { /* ignore */ }
  }
}, 36e5).unref();

// ---------- API ----------
const pub = (c) => ({ code: c.code, name: c.name, demo: !!c.demo, lesson: c.lesson || null });
async function api(req, route, body, ip) {
  const M = req.method;
  if (M === 'POST' && route === 'class') { // create class
    limit('create:' + ip, 10, 36e5);
    const pin = str(body.pin, 12);
    if (!/^\d{4,12}$/.test(pin)) fail(400, 'Choose a PIN of 4 to 12 digits.');
    const salt = rand(8), t = newToken();
    let code; do { code = rand(6); } while (fs.existsSync(path.join(DATA, code + '.json')));
    const c = { code, name: str(body.name, 60) || 'My class', salt, pin: hashPin(pin, salt), tokens: [tokenHash(t)], created: Date.now(), lesson: null, subs: [] };
    save(c);
    return { token: t, ...pub(c) };
  }
  if (M === 'POST' && route === 'login') {
    limit('login:' + ip, 20, 6e5);
    const code = str(body.code, 6).toUpperCase(), c = load(code);
    if (hashPin(str(body.pin, 12), c.salt) !== c.pin) fail(401, 'Wrong class code or PIN.');
    const t = newToken(); c.tokens = [tokenHash(t)].concat(c.tokens).slice(0, 5); save(c);
    return { token: t, ...pub(c) };
  }
  if (M === 'POST' && route === 'demo') {
    limit('demo:' + ip, 20, 36e5);
    const c = demoClass(), t = newToken(); c.tokens = [tokenHash(t)]; save(c);
    return { token: t, ...pub(c) };
  }
  if (M === 'GET' && route === 'teacher') { const c = teacher(req); return { ...pub(c), stats: stats(c) }; }
  if (M === 'POST' && route === 'teacher/lesson') {
    const c = teacher(req); c.lesson = cleanLesson(body.lesson); if (!body.keep) c.subs = []; save(c);
    return { ...pub(c), stats: stats(c) };
  }
  if (M === 'POST' && route === 'teacher/clear') { const c = teacher(req); c.subs = []; save(c); return { ...pub(c), stats: stats(c) }; }
  if (M === 'POST' && route === 'ai/lesson') {
    teacher(req); aiBudget(ip);
    const topic = str(body.topic, 200); if (!topic) fail(400, 'Write a topic first.');
    const n = Math.max(2, Math.min(8, Math.floor(+body.n) || 4));
    return { lesson: await aiLesson({ topic, notes: str(body.notes, 3000), lang: LANGS[body.lang] ? body.lang : 'en', grade: str(body.grade, 60), n, open: !!body.open }) };
  }
  if (M === 'POST' && route === 'ai/analyse') { const c = teacher(req); if (!c.lesson) fail(400, 'Publish a lesson first.'); aiBudget(ip); return await aiAnalyse(c); }

  // learner side: class code only, no account
  const jm = /^join\/([A-Za-z2-9]{6})$/.exec(route);
  if (M === 'GET' && jm) {
    limit('join:' + ip, 120, 6e5);
    const c = load(jm[1].toUpperCase()); if (!c.lesson) fail(404, 'Your teacher has not published a lesson yet.');
    const L = c.lesson;
    // learners get questions without answers or rubrics
    return { code: c.code, name: c.name, demo: !!c.demo, lesson: { ...L, q: L.q.map((q) => ({ q: q.q, c: q.c, type: q.type })) } };
  }
  const cm = /^learn\/([A-Za-z2-9]{6})\/(check|hint|open|finish)$/.exec(route);
  if (M === 'POST' && cm) {
    limit('learn:' + ip, 300, 6e5);
    const c = load(cm[1].toUpperCase()), L = c.lesson; if (!L) fail(404, 'No lesson.');
    const qi = Math.floor(+body.qi), q = L.q[qi];
    if (cm[2] === 'finish') {
      const nick = str(body.nick, 24).replace(/[<>]/g, '') || 'Learner';
      const ans = L.q.map((qq, i) => {
        const a = (Array.isArray(body.ans) && body.ans[i]) || {};
        if (qq.type === 'open') return { text: str(a.text, 400), score: a.score == null ? null : Math.max(0, Math.min(2, Math.round(+a.score) || 0)), feedback: str(a.feedback, 300) };
        const first = Math.floor(+a.first);
        return { first: first >= -1 && first < qq.c.length ? first : -1, typed: str(a.typed, 20), tries: Math.max(1, Math.min(9, Math.floor(+a.tries) || 1)) };
      });
      c.subs = (c.subs || []).concat([{ nick, at: Date.now(), ans }]).slice(-200); save(c);
      const missed = L.q.map((qq, i) => ({ qq, a: ans[i], i })).filter((x) => x.qq.type !== 'open' && x.a.first !== x.qq.a);
      let explain = [];
      if (missed.length && body.explain !== false) {
        try { aiBudget(ip); explain = await aiExplain(L, missed.map((x) => ({ q: x.qq.q, mine: x.a.first >= 0 ? x.qq.c[x.a.first] : x.a.typed, right: x.qq.c[x.qq.a] }))); } catch (e) { explain = []; }
      }
      return { ok: true, missed: missed.map((x, k) => ({ qi: x.i, q: x.qq.q, right: x.qq.c[x.qq.a], why: explain[k] || x.qq.h })) };
    }
    if (!q) fail(400, 'No such question.');
    if (cm[2] === 'check') { // grade one answer; reveal correctness, not the answer
      let pick = Math.floor(+body.pick);
      if (q.type === 'inp' && body.typed != null) { const t = str(body.typed, 20).replace(',', '.'); pick = q.c.findIndex((x) => x.replace(',', '.').trim() === t); }
      return { right: pick === q.a, pick };
    }
    if (cm[2] === 'hint') {
      let hint = q.h, ai = false;
      try { aiBudget(ip); hint = await aiHint(L, q, Math.floor(+body.pick), body.typed, Math.floor(+body.tries) || 1) || q.h; ai = hint !== q.h; } catch (e) { /* static hint */ }
      return { hint, ai };
    }
    if (cm[2] === 'open') {
      if (q.type !== 'open') fail(400, 'Not an open question.');
      const text = str(body.text, 400); if (text.length < 2) fail(400, 'Write an answer first.');
      aiBudget(ip);
      return await aiGradeOpen(L, q, text);
    }
  }
  fail(404, 'Not found.');
}

// ---------- static files ----------
function serveStatic(req, res, url) {
  let p = decodeURIComponent(url.pathname);
  if (p.endsWith('/')) p += 'index.html';
  const f = path.join(WEB, path.normalize(p).replace(/^([/\\])+/, ''));
  if (!f.startsWith(WEB + path.sep) && f !== WEB) { res.writeHead(403); return res.end(); }
  fs.stat(f, (err, st) => {
    if (!err && st.isDirectory()) { res.writeHead(301, { location: url.pathname + '/' }); return res.end(); }
    if (err) { res.writeHead(404, { 'content-type': 'text/plain' }); return res.end('Not found'); }
    const ext = path.extname(f).toLowerCase();
    res.writeHead(200, { 'content-type': MIME[ext] || 'application/octet-stream', 'cache-control': /status\.json$|\.html$|sw\.js$/.test(f) ? 'no-cache' : 'public, max-age=300', 'x-content-type-options': 'nosniff', 'referrer-policy': 'no-referrer' });
    if (req.method === 'HEAD') return res.end();
    fs.createReadStream(f).pipe(res);
  });
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://x');
  const ip = String(req.headers['cf-connecting-ip'] || req.socket.remoteAddress || '');
  if (!url.pathname.startsWith('/go/api/')) {
    if (req.method !== 'GET' && req.method !== 'HEAD') { res.writeHead(405); return res.end(); }
    return serveStatic(req, res, url);
  }
  const send = (code, obj) => { res.writeHead(code, { 'content-type': 'application/json', 'cache-control': 'no-store', 'x-content-type-options': 'nosniff' }); res.end(JSON.stringify(obj)); };
  let raw = '';
  req.on('data', (d) => { raw += d; if (raw.length > 64e3) { req.destroy(); } });
  req.on('end', async () => {
    try {
      let body = {};
      if (raw) { try { body = JSON.parse(raw); } catch (e) { fail(400, 'Bad request.'); } }
      send(200, await api(req, url.pathname.slice(8).replace(/\/$/, ''), body || {}, ip));
    } catch (e) {
      if (!(e instanceof HttpError)) console.log('error', e.stack);
      send(e.code || 500, { error: e instanceof HttpError ? e.message : 'Something went wrong.' });
    }
  });
});
if (require.main === module) server.listen(PORT, '127.0.0.1', () => console.log(`titip on 127.0.0.1:${PORT}, web=${WEB}, ai=${KEY ? MODEL : 'off'}`));

module.exports = { cleanLesson, stats, demoClass };
