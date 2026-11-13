# Handoff: Titip (AccessED Hacks entry)

For the next agent or developer picking this up. Read this first, then README.md, TEST.md, RESEARCH.md.

## Status on 13 November 2026

- Hackathon: AccessED Hacks, runs October 17 to November 20, 2026. Submission goes on Devpost.
- App is feature-complete and live at https://titip.rofihosted.space/ (landing) and /app/ (app).
- Not done: real-user field test (protocol in TEST.md), Devpost story, demo video, first git commit (repo has no commits yet).

## Files

| File | Role |
|---|---|
| `index.html` | The whole app: HTML, CSS, JS in one file (~79 KB, 982 lines). Deployed as `/app/` |
| `sw.js` | Service worker, network first with cache fallback. Deployed next to the app |
| `site/index.html` | Landing page. Deployed as `/` |
| `README.md` | Public project description, Devpost source text |
| `TEST.md` | What was checked vs predicted vs made-up, plus the field-test protocol |
| `RESEARCH.md` | Evidence base. Source IDs P1..P12 (papers), N1..N49 (news/official). Cite by ID |

Deploy: `scripts/deploy_titip.sh` lives in the author's separate server repository, not here.

## Code map (`index.html`)

Pure logic (lines ~254-380), covered by `selfTest()`:
- `fromLesson` / `toLesson`: lesson text format to object and back. `validate` checks a lesson.
- `canon`, `lessonId`, `checkDigit`, `makeCode`, `readCode`: result codes like `HI-1132-0` (lesson id, first answers, check digit). Paper form `2 1 3 2 = 8` uses the total as check.
- `tally`, `classPct`, `topWrong`, `withRetries`: per-question first-try results, most common wrong answer, retry queue.
- `selfTest()`: run in browser console or Node, must return `ok`.

UI (lines ~599-910): `load`/`save` (localStorage, wrapped), `t` (i18n lookup), `view` (hash router), one `showX` per page: `showHome`, `showLearn`, `showLib`, `showMake`, `showRes`, `showSaved`, `showWhy`, `showHelp`. `sheet` builds the printable worksheet, `recSheet` the class record sheet, `download` the hand-out file, `demoCodes` the made-up class. `applyLang`, `setPref`, `net` handle language, settings, offline chip.

Routes: `#/` overview, `#/learn`, `#/demo` (made-up results), plus the other pages via `view`.

## Hard rules (do not break)

1. One file, no dependencies, no build, no images. The downloaded lesson file is the app itself, so every byte travels phone to phone. Keep it under ~80 KB.
2. Old-browser JS only: no arrow functions, `let`/`const`, classes, template strings, spread. Target Android 4.4-era browsers.
3. No outside requests on phones. The one Google Fonts load is wide screen + no Save-Data only.
4. Accessibility: native controls only, every input labelled, feedback by symbol + words + live region, focus moves to new heading, works at 320 px, lesson content carries its `lang`.
5. Honesty: never claim learning gains. Keep TEST.md's three categories (checked / predicted / made-up) separate. Any new number needs a source in RESEARCH.md. Made-up demo data stays labelled.
6. Result codes hold no names. `Next learner` clears the screen.
7. After any logic change: `selfTest()` returns `ok`, then update TEST.md's Checked table with date and method.

## Open work, in priority order

1. Git: make the first commit, push to GitHub (public repo needed for Devpost).
2. Field test (TEST.md, 30 min, 3 learners, 1 old phone). Record results honestly in TEST.md, update README Limits.
3. Devpost story: built from README + RESEARCH IDs. Sections: Inspiration, What it does, How we built it, Challenges, Accomplishments, What we learned, What's next.
4. Demo video, under 3 minutes: file transfer, flight mode open, lesson, code, results table, follow-up lesson.
5. Optional, only if time: native-speaker check of Spanish/French text; screen reader run (TalkBack); real printer check of the worksheet.

Do not add: accounts, a backend, frameworks, new question types, analytics. All out of scope for the deadline.
