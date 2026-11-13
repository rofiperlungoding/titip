# Handoff: Titip (AccessED Hacks entry)

For the next agent or developer picking this up. Read this first, then README.md, TEST.md, RESEARCH.md.

## Status on 13 November 2026

- Hackathon: AccessED Hacks, runs October 17 to November 20, 2026. Submission goes on Devpost.
- App is upgraded with Interactive Learning Lab (`renderLab` manipulative SVG simulations for fractions, equal sharing/division, water cycle, plant parts, clean water hygiene), interactive Flashcard flip deck (`deckOf`), Overview lab sandbox, 9 UI languages + Arabic RTL, 12 lessons incl. TaRL Numeracy Diagnostic, language/topic filters, worked examples, typed short-answer questions with choice fallback, learner TaRL bands + teacher TaRL Group A/B/C placement, shared-phone queue + batch SMS, offline `TITIP1:` text codes, and 2-up paper-saver worksheets. Live at `https://titip.rofihosted.space/` and `/app/` (`198,771` bytes raw / `65,977` bytes gzipped).
- Public GitHub repo `https://github.com/rofiperlungoding/titip` pushed on `master`.
- Not done: verifying Interactive Lab, Flashcards, and Arabic RTL visuals in Chrome, real-user field test (protocol in TEST.md), recording demo video.

## Files

| File | Role |
|---|---|
| `index.html` | The whole app: HTML, CSS, JS in one file (~193 KB raw, ~64 KB gzipped). Deployed as `/app/` |
| `sw.js` | Service worker, network first with cache fallback. Deployed next to the app |
| `site/index.html` | Landing page. Deployed as `/` |
| `README.md` | Public project description |
| `DEVPOST.md` | Devpost submission write-up |
| `DEMO.md` | Under-3-minute demo video script |
| `TEST.md` | What was checked vs predicted vs made-up, plus the field-test protocol |
| `RESEARCH.md` | Evidence base. Source IDs `P1`..`P29` (papers), `N1`..`N59` (global/regional/national surveys & reports). Cite by ID |

Deploy: automatic. Every push to `master` runs `.github/workflows/deploy.yml`: `selfTest()`, ES5 parse, 9-language key parity and size check, then upload over cloudflared SSH with the `TITIP_DEPLOY_KEY` secret. That key is locked on the server to `/root/apps/titip/deploy.sh` (`begin`, `push` or `fail`; the script and its server setup live in the author's `gtawifi-vps` repo). While a deploy runs, the landing page reads `/status.json` and shows an "Updating" banner. The job fails unless the public site serves the exact commit. Manual fallback: `scripts/deploy_titip.sh` in the same server repo.

## Code map (`index.html`)

Pure logic (pure ES5 section before `/*DOM*/`), covered by `selfTest()`:
- `fromLesson` / `toLesson`: lesson text format to object and back (incl. optional `cat`, `lvl`, `fig`, `ex`, `type`). `validate` checks a lesson.
- `canon`, `lessonId`, `checkDigit`, `makeCode`, `readCode`: result codes like `HI-1132-0` (lesson id, first answers, check digit). Paper form `2 1 3 2 = 8` uses the total as check.
- `tally`, `classPct`, `topWrong`, `withRetries`, `matchInp`, `tarlBand`, `packLesson`, `unpackLesson`, `fracInfo`, `deckOf`: per-question results, most common wrong answer, retry queue, typed-input matcher, TaRL band estimator, `TITIP1:` packer/unpacker, fraction equivalence helper, flashcard deck builder.
- `selfTest()`: run in browser console or Node, must return `ok`.

UI (`/*DOM*/` section): `load`/`save` (localStorage, wrapped), `t` (i18n lookup), `view` (hash router), `renderLab` (interactive SVG manipulatives for `frac`, `div`, `water`, `plant`, `wash`), one `showX` per page (`showHome`, `showLearn`, `showLib`, `showMake`, `showRes`, `showSaved`, `showWhy`, `showHelp`). `sheet` builds 1-up or 2-up printable worksheets, `recSheet` the class record sheet, `download` the hand-out file, `demoCodes` the made-up class. `applyLang`, `setPref`, `net` handle language, settings, offline chip.

Routes: `#/` overview (with live interactive lab sandbox), `#/learn` (Lesson & Lab / Flashcards / Practice Quiz), `#/demo` (made-up results), plus the other pages via `view`.

## Hard rules (do not break)

1. One file, no dependencies, no build, no external images. The downloaded lesson file is the app itself; kept compact (~193 KB raw, ~64 KB gzipped after 9-language, 12-lesson, Interactive Lab, Flashcards, and TaRL grouping support).
2. Old-browser JS only: no arrow functions, `let`/`const`, classes, template strings, spread. Target Android 4.4-era browsers.
3. No outside requests on phones. The one Google Fonts load is wide screen + no Save-Data only.
4. Accessibility: native controls only, every input labelled, feedback by symbol + words + live region, focus moves to new heading, works at 320 px, lesson content carries its `lang` (and `dir="rtl"` for `ar`).
5. Honesty: never claim learning gains. Keep TEST.md's three categories (checked / predicted / made-up) separate. Any new number needs a source in RESEARCH.md. Made-up demo data stays labelled.
6. Result codes hold no names. `Next learner` clears the screen (and shared-phone queue can be cleared anytime).
7. After any logic change: `selfTest()` returns `ok`, then update TEST.md's Checked table with date and method.

## Open work, in priority order

1. Done 13 Nov in desktop Chrome (see TEST.md): Lab, Flashcards, quiz flow, 320 px, Arabic RTL, dark theme. Still open: deploy the polished build, then check Interactive Lab manipulatives, Flashcard flip deck, typed-input scaffold, shared-phone queue, TaRL groups, Arabic RTL layout, and offline SW cache (`skipWaiting`/`clients.claim`) on the live 198,771-byte build.
3. Field test (TEST.md, 30 min, 3 learners, 1 old phone). Record results honestly in TEST.md, update README Limits.
4. Record demo video (< 3 min using DEMO.md).
5. Native-teacher review of `es`/`fr`/`pt`/`sw`/`hi`/`bn`/`ar` UI + sample lessons; TalkBack & physical printer check.

Do not add: accounts, a backend, frameworks, new question types, analytics. All out of scope for the deadline.
