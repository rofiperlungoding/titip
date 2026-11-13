// Minimal checks for Titip Go server logic. Run: node go/test.js
const assert = require('assert');
process.env.DATA = require('os').tmpdir() + '/titip-go-test';
const { cleanLesson, stats, demoClass } = require('./server.js');
const L = cleanLesson({ title: 'T', lang: 'xx', text: ['a'], q: [{ q: 'Q', c: ['x', 'y'], a: 1, h: 'h' }, { q: 'bad', c: ['x'], a: 0 }, { q: 'O', type: 'open', r: 'r' }] });
assert.strictEqual(L.lang, 'en'); assert.strictEqual(L.q.length, 2); assert.strictEqual(L.q[1].type, 'open');
assert.throws(() => cleanLesson({ q: [] }));
const c = demoClass(); const st = stats(c);
assert.strictEqual(st.n, 12); assert.strictEqual(st.per[0].first, 4); assert.ok(st.per[0].reteach); assert.ok(!st.per[1].reteach);
assert.deepStrictEqual(st.per[0].top[0], ['One quarter', 7]);
assert.ok(st.learners.every((l) => 'ABC'.includes(l.group)));
console.log('go test ok');
