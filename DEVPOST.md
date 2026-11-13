# Titip

## Inspiration

A primary pupil wants to practise today's lesson at home, but the practice lives behind an online link and the family phone is not connected.

This is a global constraint across Sub-Saharan Africa, South Asia, Latin America, and Southeast Asia. Globally, ~3.1 billion people live under mobile broadband coverage without using mobile internet (a 38% usage gap in 2024), alongside ~300 million outside any coverage (~3.4 billion offline worldwide [N52]). School-age children without home internet reach 95% in West and Central Africa, 88% in East and Southern Africa, 88% in South Asia, and 49% in Latin America and the Caribbean [N53]. Meanwhile, only ~10.8% of primary pupils across sampled African countries meet minimum reading and maths proficiency [N54], and only 23.4% of Class 3 rural government-school pupils in India can read a Class 2 text [N55].

Even where connectivity exists on paper, households share devices and schools hit bottlenecks: in rural India ~90% of 14–16-year-olds have a smartphone in the home yet only 27–38% own one [N55]; in rural Peru only 20.5%–23.6% of households have internet vs 58.9%–60.1% nationally [N56, N57]; in Brazil youth internet access in schools dropped from 51% to 37% after classroom mobile-phone restrictions [N58]; and in Indonesia—where Titip was built—27.74% of primary pupils do not use the internet [N44] while individual mobile ownership (70.75%) lags household presence (93.50%) [N47]. *Titip* is Indonesian for handing something to someone so they can carry it to someone else.

## What it does

- **Teacher writes once, shares as one file or text code:** In *Make*, a teacher sets title, language, topic, TaRL level tag, optional interactive SVG lab (`frac`, `water`, `plant`, `wash`, `div`), worked example, paragraphs, word meanings (`word = meaning`), and questions (2–9 choices each, plus an optional *typed answer first* mode that reveals choices as scaffolding after a first wrong try)—or filters and copies from 12 ready-made lessons across 9 languages (`en`, `id`, `es`, `fr`, `pt`, `sw`, `hi`, `bn`, `ar`), including a **TaRL Numeracy Diagnostic**. Clicking *Download lesson file* exports one self-contained `.html` file (~199 KB raw, ~66 KB gzipped), or *Copy text code* packs the lesson into an offline `TITIP1:...` string to paste into WhatsApp or any chat without sending a file. The sample lesson packs to 1,443 characters, which is about ten text messages, so the code suits chat better than SMS; the short result code is what goes by SMS.
- **Travels without internet:** The file passes phone-to-phone via Bluetooth, WhatsApp, or memory card (or via `TITIP1:` import in **Lessons**) and runs offline. Titip is also hosted at `https://titip.rofihosted.space/` and `/app/` with a service worker (`sw.js` with `skipWaiting` + `clients.claim`) for offline caching after one visit [P10, P25].
- **Learner explores Interactive Lab, Flashcards, hints, typed scaffold, and audio:** Learners manipulate interactive SVG simulations (fraction cake/bar slicer, TaRL equal-sharing dot counter, clickable water cycle, plant anatomy explorer, boiling/soap germ tracker), flip glossary + Q&A flashcards (`Flashcards` tab), view worked examples, read (tapping underlined words in Latin, Devanagari, Bengali, or Arabic script), or tap *Listen* [P7, P8]. Wrong answers show a one-sentence hint [P5, P6, P11] and disable picked choices (or reveal choices after a wrong typed answer); missed questions return once at the end under *One more try* [P3].
- **Anonymous code, TaRL band, and shared-phone queue:** At the end, the learner gets an estimated level band (`L1–L4`) and a short result code such as `HI-1132-0`. *Send by SMS* pre-fills one code, while *Save to phone queue* lets siblings sharing one household phone save consecutive scores locally and send them together in one SMS [N55, N47, P27].
- **Printable full or 2-up paper-saver worksheets:** Where there is no phone [N52, N31], *Print worksheet* prints one full worksheet with an upside-down answer key, while *Print 2-up slips* puts two compact copies on one page to cut apart and halve paper cost. Learners write answer numbers and their sum (`2 1 3 2 = 8`).
- **Teacher results, TaRL grouping, and follow-up loop:** In *Results*, the teacher pastes phone codes and paper numbers, sees per-question first-try accuracy, the top wrong answer, per-choice distractor chips, and **practice groups** (TaRL-style, by quiz score: Group A `<50%`, Group B `50–79%`, Group C `80–100%`; real TaRL groups by skill level from a one-to-one assessment, which this does not replace), spots questions below 50% flagged *Teach again*, builds a follow-up lesson in one tap, and compares two rounds side by side across `---` [P1, P2, P19, P20]. Teachers can save rounds locally, export CSV, or print a 25-row class record sheet.

## How we built it

- **Single-file architecture, zero dependencies:** Everything—HTML, CSS, interactive SVG manipulative labs and icons, UI strings in 9 languages (`en`, `id`, `es`, `fr`, `pt`, `sw`, `hi`, `bn`, `ar`, with `dir="rtl"` for Arabic), 12 sample lessons, flashcard deck, editor, `TITIP1:` packer, worksheet/2-up generator, TaRL grouping + results analyser, and `selfTest()`—lives inside `index.html` (199,088 bytes raw; 66,105 bytes gzip-compressed). No framework, no bundler, no external images, no backend, no accounts, and no analytics.
- **Self-replicating export:** On startup, `index.html` captures its own markup (`SRC = document.documentElement.outerHTML`). When a teacher downloads a lesson, `download()` slices `<script id="lesson">`, injects the new lesson JSON with `"handout": true`, and writes a new standalone `.html` file. Because the editor travels inside every handout, any receiving teacher can adapt and pass the lesson on.
- **Old-browser ES5 JavaScript:** Written without arrow functions, `let`/`const`, classes, template literals, or spread syntax to target Android 4.4-era browsers.
- **Zero phone network requests:** Phones use system fonts only and make zero external requests. A Google Fonts stylesheet loads only on screens `>= 56em` wide when `navigator.connection.saveData` is off.
- **Accessibility built in:** All controls are native `<button>`, `<input type="radio">`, `<select>`, and labelled inputs; feedback uses symbols (`✓` / `✗`), text, and a `role="status"` live region; focus moves to each new `<h2>` on navigation; lesson text carries its own `lang` attribute for screen-reader pronunciation; *Larger text* (`125%`) and a dark high-contrast theme persist in `localStorage`; layout fits 320 px without horizontal scrolling; and colour contrast meets WCAG formulas (body text 15.76:1, primary buttons 6.39:1, field borders 4.53:1).

## Challenges we ran into

- **Avoiding hardware and training bottlenecks:** Access to technology alone does not raise learning [P4], and a randomized evaluation of the offline Kolibri platform on tablets across 102 schools in Honduras found no impact on test scores, pointing to late hardware delivery and insufficient teacher training [P12]. We constrained Titip to one file on phones already in the household, with one form and no installation.
- **Preventing empty SMS loops:** In Botswana, SMS messages to parents alone had no detectable effect, whereas phone calls targeted to each child's level raised learning by 0.12 SD [P1]—replicated across 16,936 students in India, Kenya, Nepal, the Philippines, and Uganda (`0.30–0.35 SD` [P2]) and across ~7,000 students in 7 Latin American countries (`+0.20 SD` [P20], plus Paraguay `+0.113 SD` ITT [P19]); conversely, phone tutoring failed where call take-up/engagement lagged [P9]. Simply returning a total score was not enough, so we designed the result code to capture the exact first answer picked on each question—revealing the most common wrong answer and per-choice error chips—and let teachers count returned codes directly.
- **Keeping feedback short:** A 2025 classroom experiment found simpler immediate feedback outperformed more elaborate feedback and took less time, even though 85.71% of surveyed instructors expected the opposite [P11]. We limited hints to one short sentence and disabled wrong options in place rather than showing long explanations.
- **Paper feedback and copying errors:** Paper worksheets give no immediate feedback and can be miscopied [N31]. Printing the answer key and hints upside down at the foot gives offline self-checking, and adding the answer numbers into a sum (`2 1 3 2 = 8`) catches single miscopied digits when entered into *Results*.

## Accomplishments we're proud of

- Packing Interactive Learning Lab manipulatives (`renderLab`), interactive Flashcards (`deckOf`), worked examples, typed-answer scaffolding, audio, TaRL placement bands, a shared-phone sibling queue, a 12-lesson filterable library across 9 languages (Arabic RTL + Unicode glossary matching across Latin, Devanagari, Bengali, and Arabic), a lesson authoring tool, `TITIP1:` text-code packing, 1-up and 2-up paper-saver worksheets, a two-round TaRL classroom grouping and misconception analyser, CSV export, dark high-contrast mode, and unit self-tests into 199,088 bytes raw (~66 KB gzipped) with zero build tools.
- Maintaining strict epistemic honesty in both the app and `TEST.md`: **Checked** facts (measured file size, Node `selfTest()` with 9-language/Unicode/RTL/TaRL/`TITIP1:` assertions, desktop Chrome runs and a USB-debugged real phone, including an offline reload), **Predicted / assumed** behaviour (Android 4.4 support, 3–6 minute completion, TalkBack usability, learning effect), and **Made-up** demo data (labelled visibly on screen until edited) are never mixed.
- Handling phone codes (`HI-1132-0`) and paper answers (`2 1 3 2 = 8`) in the exact same teacher results pipeline.

## What we learned

- Research supports the individual ingredients—practice quizzing (`g = 0.499` across 222 studies [P3]), explanatory feedback (`0.49` vs `0.05` [P5, P6]), read-aloud support for students with reading disabilities (`d = 0.35` [P7, P8]), offline-first service-worker architectures [P10, P25], and targeted re-teaching [P1, P2, P19, P20]—but combining them does not prove Titip improves learning without real-learner testing [P4, P9, P12].
- Aggregate household statistics hide shared-device reality: ~90% household smartphone presence in rural India vs 27–38% personal youth ownership [N55], 91.66% household internet in Indonesia vs 70.75% individual mobile ownership [N46, N47], and school internet access dropping under classroom device restrictions in Brazil [N58] show why shared-phone queues, `Next learner` resets, and 2-up worksheets belong together.
- Known technical limits must stay explicit: iPhones do not open local HTML files in Safari easily (mitigated by `sw.js` offline cache and `TITIP1:` text import), the paper sum check catches one wrong digit but not two swapped digits, *Listen* depends on voices installed on the device, expanded UI translations/sample lessons (`es`, `fr`, `pt`, `sw`, `hi`, `bn`, `ar`) need native-teacher review, and the build has been checked in desktop Chrome and on one modern Android phone (Sharp R8, Android 16) but not yet on an old phone, a printer, a screen reader, or with any real learner. Testing on the real phone found five layout bugs that desktop checks missed; all are fixed and listed in `TEST.md`.

## What's next

1. Run the 30-minute, 3-learner, 1-old-phone field test protocol in `TEST.md`—including Bluetooth/memory-card transfer, flight-mode opening, worksheet pencil run, two-round re-teaching, and TalkBack check—and publish both successes and failures in `TEST.md` and `README.md`.
2. Have native-speaking teachers review the expanded UI translations and sample lessons (`es`, `fr`, `pt`, `sw`, `hi`, `bn`, `ar`).
3. Verify the printable worksheet and class record sheet on a physical printer and run classroom before-and-after cycles using the built-in `---` two-round comparison.


## Built during the event, and credits

- **Made during AccessED Hacks (October 17 to November 20, 2026):** all code, text, sample lessons, icons and SVG labs. No pre-existing code, template or starter kit.
- **AI assistance:** Claude (Anthropic) helped write and test the code and draft the documentation. Translations beyond English and Indonesian were drafted with AI help and have not been reviewed by native-speaking teachers.
- **Third-party material:** none bundled. Visual style follows Google's Material Design 3 guidelines (not a Google product, no Google logo). On wide screens only, the Google Sans Flex and Google Sans Code fonts load from Google Fonts. Every statistic is cited by ID to a public source in `RESEARCH.md`.
- **Demo video:** voice-over recorded by the author, then cleaned with the open-source tools DeepFilterNet and VoiceFixer (noise and room echo removed, pauses trimmed; no words added or removed). Edited in Remotion with Claude's help. Music: "Upbeat Advertising Funk" by FASSounds, from Pixabay, under the Pixabay Content License. Sound effects were generated for this project. Every app screen in the video is a screenshot of the real app; the "Flight mode" status bar on the phone frame is drawn, and the offline behaviour it illustrates is the check recorded in `TEST.md`.
- **Learner data:** none real. The *Fill in a made-up class* demo uses 12 invented learners and is labelled as made-up on screen.

## Try it

- Live app, no sign-in, no personal data asked: https://titip.rofihosted.space/app/
- Landing page: https://titip.rofihosted.space/
- Source code: https://github.com/rofiperlungoding/titip
- To test offline: open the app once, turn on flight mode, reload.
- Testing status (what was checked, what is only predicted, what is made-up): `TEST.md`.

## Built with

HTML, CSS, ES5 JavaScript, inline SVG, Web Speech API (speechSynthesis), Service Worker, GitHub Actions.
