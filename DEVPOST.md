## The barrier

A pupil wants to practise today's lesson at home. The practice is behind a link, and the family phone has no data.

This is the normal case, not the edge case. In West and Central Africa 95% of school-age children have no internet at home; in South Asia, 88% (UNICEF and ITU, 2020). About 3.4 billion people worldwide do not use mobile internet (GSMA, 2024). Where a home does have a phone, it is often one phone shared by the whole family.

Most learning apps assume a connection, an account and a personal device. Titip assumes none of them.

> *Titip* is Indonesian for handing something to someone so they can carry it on to someone else.

## What Titip does

**1. The teacher makes a lesson once.**
Pick one of 12 ready lessons in 9 languages, or write a new one: short text, word meanings, a worked example, a small interactive diagram, and 2–9 choice or typed-answer questions. Titip saves it as **one 199 KB HTML file** (66 KB compressed), or as a text code to paste into a chat.

**2. The file travels without internet.**
Bluetooth, WhatsApp, a memory card. It opens in any phone browser in flight mode. No install, no account, no server.

**3. The learner practises with help.**
- A wrong answer shows a **one-sentence hint** and locks that choice.
- Typed-answer questions remove guessing; after a wrong try, choices appear as support.
- Missed questions come back once at the end.
- Tap an underlined word for its meaning, make the text bigger, or have it read aloud.

**4. The result goes back as a short code.**
The learner gets a code like `HI-1130-2`: no name, no account. It records the first answer to each question and carries a check digit. Siblings sharing one phone each take a turn and send all their codes in **one SMS**.

**5. No phone at home? Paper works too.**
Print the worksheet (answer key upside down at the bottom) or two copies per sheet to save paper. The learner writes their answers and their sum, `2 1 3 2 = 8`, so one miscopied digit is caught.

**6. The teacher sees what to reteach.**
Paste the codes from SMS and paper together. Titip shows, per question:
- how many got it right on the first try;
- the most common wrong answer;
- a **Teach again** flag when fewer than half got it right;
- three practice groups by score, in the spirit of Teaching at the Right Level.

One tap turns the flagged questions into a follow-up lesson. After reteaching, paste the new codes below `---` to compare both rounds side by side.

## Titip Go: AI where the teacher has signal

The learner side of Titip never needs a connection. When the teacher does have one, **Titip Go** adds an AI assistant (Google Gemini) on top. Nothing in the offline app depends on it, and every lesson made in Go can be copied out as a `TITIP1:` code that the offline app opens.

**For the teacher** (class code + PIN)
- **Draft a lesson with AI** from a topic and optional notes, in any of the 9 languages. The teacher edits every line before publishing.
- **Read the class with AI.** Titip Go counts first-try answers, common wrong answers, *Teach again* flags and A/B/C groups itself; Gemini then writes a short summary, the likely misconceptions, a three-step reteach plan and three follow-up questions, using only those numbers.

**For an online learner** (class code + nickname, no account)
- **A hint for their own mistake.** Pick *One quarter* for "2 equal parts" and the hint talks about counting the parts. The server checks that the hint never contains the answer.
- **Open answers graded with feedback** (0–2) against the teacher's rubric; the teacher sees every answer and score.
- **An explanation of each missed question** at the end.

If the AI is slow or down, Titip Go falls back to the teacher's own hint and keeps going.

**For judges:** [titip.rofihosted.space/go](https://titip.rofihosted.space/go/) has a one-click *Teacher demo* and *Learner demo*. Each makes a fresh class with made-up results, deleted after a day. No sign-up.

## Why it is built this way

Each design choice answers a finding from published research. Full sources are in [`RESEARCH.md`](https://github.com/rofiperlungoding/titip/blob/master/RESEARCH.md).

| Finding | What Titip does |
|---|---|
| Giving devices alone does not raise learning; an offline tablet platform in 102 Honduran schools had no effect on test scores | Runs on phones families already have. No new hardware, no training course |
| In Botswana, SMS to parents alone had no effect; calls targeted to each child's level did | The code tells the teacher *which* question and *which* wrong answer, so follow-up is targeted |
| Practice testing has a large average effect on learning (g ≈ 0.5) | Practice quiz with one more try at the end |
| In a 2025 trial, short simple feedback was faster and at least as effective as long explanations | One-sentence hints |

## How it is built

- **One file, zero dependencies.** HTML, CSS and ES5 JavaScript in a single `index.html`: app, editor, 9 languages, 12 lessons and self-test. No framework, no build step, no backend, no analytics.
- **The lesson file is the app.** A downloaded lesson carries the editor inside it, so any teacher who receives it can adapt it and pass it on.
- **Old-phone JavaScript.** No arrow functions, `let`/`const`, classes or template strings, aiming at Android 4.4-era browsers. Phones make no outside network requests.
- **Accessible by default.** Native buttons and labelled inputs; feedback as symbol + words + live region; focus moves to each new heading; lesson text keeps its own `lang`; Arabic runs right-to-left; works at 320 px wide; larger text and a high-contrast dark theme.
- **Titip Go** is a separate page and a small Node server with no dependencies. The Gemini key stays on the server; learners never receive answer keys; AI calls are rate-limited; demo classes expire.
- **Checked on every push.** GitHub Actions runs `selfTest()`, a language-key check, an ES5 parse and a size limit, then deploys and confirms the live site serves that exact commit.

## What we tested, and what we have not

We keep three lists apart in [`TEST.md`](https://github.com/rofiperlungoding/titip/blob/master/TEST.md): **checked**, **predicted**, and **made-up**.

**Checked**
- Full learner and teacher flow in desktop Chrome, in English, Arabic and Hindi, at 320 px.
- On a real Android phone over USB: every page, both directions of text, and an **offline reload with the network cut**. This found five layout bugs desktop testing missed; all are fixed.
- `selfTest()` passes; all 12 lessons validate and survive the text-code round trip.
- Titip Go on the live server: lesson draft in Indonesian, a hint for a chosen wrong answer and for a typed wrong number, open-answer grading, class analysis and end-of-lesson explanations all returned sensible output. Spot checks by the author, not a quality study.

**Not yet tested**
- With real learners or teachers. **We make no claim that Titip improves learning.** Comparable programmes have shown no effect where teachers did not follow up.
- On an Android 4.4-era phone, with a screen reader, or on a printer.
- Translations beyond English and Indonesian have not been reviewed by native-speaking teachers.

The class shown in *Results* and in the video is **made-up demonstration data**, and the app labels it on screen.

## Challenges

- **Keeping it one file.** Nine languages, twelve lessons, an editor and diagrams in 199 KB meant hand-drawn SVG and no libraries.
- **Making the code worth sending.** A score alone does not help a teacher. The code had to hold every first answer, survive hand-copying, and still be short enough for one SMS.
- **Desktop lies.** The real phone showed bugs no desktop check found: double borders on answers, an unreadable diagram in dark mode, and Arabic labels out of place.

## What's next

1. A 30-minute field test with three learners on the oldest phone we can borrow. The protocol is ready in `TEST.md`, and we will publish what fails as well as what works.
2. Native-teacher review of the seven newer languages.
3. Screen-reader and printer checks.

## Built during the event, and credits

- **All code, text, lessons, icons and diagrams were made during AccessED Hacks** (17 October – 20 November 2026). No pre-existing code or template.
- **AI assistance:** Claude (Anthropic) helped write and test the code and draft the text. Titip Go calls Google Gemini at run time. Translations beyond English and Indonesian were drafted with AI help.
- **Demo video:** voice by the author, cleaned with DeepFilterNet and VoiceFixer (noise and echo removed, pauses trimmed; no words changed). Edited in Remotion with Claude's help. Music: "Upbeat Advertising Funk" by FASSounds (Pixabay Content License). App screens are real screenshots; the phone's "Flight mode" bar is drawn.
- **Third-party material:** none bundled. Wide screens load Google Sans Flex from Google Fonts. Visual style follows Material Design 3; Titip is not a Google product.

## Try it

- **App:** https://titip.rofihosted.space/app/ (no sign-in, no personal data)
- **Offline test:** open it once, turn on flight mode, reload.
- **Titip Go (online, AI):** https://titip.rofihosted.space/go/
- **Code:** https://github.com/rofiperlungoding/titip
