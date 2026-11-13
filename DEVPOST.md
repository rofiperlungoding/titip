# Titip

## Inspiration

A primary pupil wants to practise today's lesson at home, but the practice lives behind an online link and the family phone is not connected.

Globally, 2.2 billion people were still offline in 2025, 96% of them in low- and middle-income countries [N39]. Rural internet use sits at 58% against 85% in urban areas [N40], and overall use ranges from 94% in high-income countries down to 23% in low-income countries [N41]. In the latest global estimate for children, two in three school-age children—around 1.3 billion—had no internet access at home [N42, N43].

Titip was built in Indonesia, where it will also first be tested. News reports across the country still document pupils and teachers climbing hills or borrowing other schools' rooms for online assessments [N1–N14, N16–N21]. At home, BPS data from March 2025 shows 27.74% of primary pupils do not use the internet (`72.26%` do), compared with 8.96% in junior secondary and 2.53% in senior secondary [N44, N45]. Rural internet use is 70.14% versus 82.72% in cities [N47], and much lower in eastern provinces such as Papua Pegunungan (15.40%), Papua Tengah (32.64%), Papua Selatan (50.02%), and Nusa Tenggara Timur (62.91%) [N49]. Meanwhile, 93.50% of households have a mobile phone while only 70.75% of individuals have their own, and only 5% of primary pupils use a computer (`10.42%` of rural households own one) [N44, N47, N48]. In Indonesia's 2025 providers' association survey, the top reasons for being offline were having no adequate device (43.62%) and not knowing how to connect (40.77%), while data cost accounted for 2.88% [N31, N51].

The phone is often in the house, shared across the family, and offline when the child needs to practise. *Titip* is Indonesian for handing something to someone so they can carry it to someone else.

## What it does

- **Teacher writes once, downloads one file:** In *Make*, a teacher writes a lesson title, language, paragraphs, optional word meanings (`word = meaning`), multiple-choice questions (2–9 choices each), and a one-sentence hint per question—or opens/copies one of six ready-made lessons in English, Indonesian, Spanish, and French. Clicking *Download lesson file* exports a single self-contained `.html` file (~79 KB) that embeds the lesson and opens directly into it.
- **Travels without internet:** The file passes phone-to-phone via Bluetooth, WhatsApp (as a document), or memory card and runs in the phone's browser offline. Titip is also hosted at `https://titip.rofihosted.space/` and `/app/` with a service worker (`sw.js`) for offline caching after one visit [P10].
- **Learner practises with hints and audio:** The learner reads the text (tapping underlined words for plain meanings) or presses *Listen* to hear it read aloud via the device's speech engine in any of eight supported lesson languages (`en`, `id`, `es`, `fr`, `pt`, `sw`, `hi`, `bn`) [P7, P8]. Wrong answers show the one-sentence hint [P5, P6, P11] and stay disabled so the learner tries again; missed questions return once at the end under *One more try* [P3].
- **Anonymous code back to the teacher:** At the end, the learner gets a short result code such as `HI-1132-0` (a two-letter lesson ID, the first answer picked for each question, and a check digit). It holds no name. *Send by SMS* pre-fills the phone's messaging app, and *Next learner* clears the screen for a shared family phone [N31, N47].
- **Printable worksheet for homes with no phone:** Where there is no phone at home [N31], *Print worksheet* formats the same lesson for paper, with the answer key and hints printed upside down at the bottom. Learners copy their answer numbers and add them up as a check total (e.g., `2 1 3 2 = 8`).
- **Teacher results and follow-up loop:** In *Results*, the teacher pastes phone codes and paper numbers into one box, sees per-question first-try accuracy and the most common wrong answer, spots questions below 50% flagged *Teach again* with the classroom hint alongside, builds a follow-up lesson from just those weak questions in one tap, and compares a second round side by side after a line of `---` [P1, P2]. Teachers can also save rounds locally on their device, export CSV, or print a 25-row class record sheet.

## How we built it

- **Single-file architecture, zero dependencies:** Everything—HTML, CSS, SVG icons (24 px grid), UI strings in four languages (`en`, `id`, `es`, `fr`), six sample lessons, editor, worksheet builder, results analyser, and `selfTest()`—lives inside `index.html` (79,443 bytes raw; 29,114 bytes gzip-compressed). No framework, no bundler, no images, no backend, no accounts, and no analytics.
- **Self-replicating export:** On startup, `index.html` captures its own markup (`SRC = document.documentElement.outerHTML`). When a teacher downloads a lesson, `download()` slices `<script id="lesson">`, injects the new lesson JSON with `"handout": true`, and writes a new standalone `.html` file. Because the editor travels inside every handout, any receiving teacher can adapt and pass the lesson on.
- **Old-browser ES5 JavaScript:** Written without arrow functions, `let`/`const`, classes, template literals, or spread syntax to target Android 4.4-era browsers.
- **Zero phone network requests:** Phones use system fonts only and make zero external requests. A Google Fonts stylesheet loads only on screens `>= 56em` wide when `navigator.connection.saveData` is off.
- **Accessibility built in:** All controls are native `<button>`, `<input type="radio">`, `<select>`, and labelled inputs; feedback uses symbols (`✓` / `✗`), text, and a `role="status"` live region; focus moves to each new `<h2>` on navigation; lesson text carries its own `lang` attribute for screen-reader pronunciation; *Larger text* (`125%`) and a dark high-contrast theme persist in `localStorage`; layout fits 320 px without horizontal scrolling; and colour contrast meets WCAG formulas (body text 15.76:1, primary buttons 6.39:1, field borders 4.53:1).

## Challenges we ran into

- **Avoiding hardware and training bottlenecks:** Access to technology alone does not raise learning [P4], and a randomized evaluation of the offline Kolibri platform on tablets across 102 schools in Honduras found no impact on test scores, pointing to late hardware delivery and insufficient teacher training [P12]. We constrained Titip to one file on phones already in the household, with one form and no installation.
- **Preventing empty SMS loops:** In Botswana, SMS messages to parents alone had no detectable effect, whereas phone calls targeted to each child's level raised learning by 0.12 SD [P1] (replicated across five countries in [P2]); in Sierra Leone, phone calls had no effect where underlying lesson take-up was low [P9]. Simply returning a total score was not enough, so we designed the result code to capture the exact first answer picked on each question—revealing the most common wrong answer—and let teachers count returned codes directly.
- **Keeping feedback short:** A 2025 classroom experiment found simpler immediate feedback outperformed more elaborate feedback and took less time, even though 85.71% of surveyed instructors expected the opposite [P11]. We limited hints to one short sentence and disabled wrong options in place rather than showing long explanations.
- **Paper feedback and copying errors:** Paper worksheets give no immediate feedback and can be miscopied [N31]. Printing the answer key and hints upside down at the foot gives offline self-checking, and adding the answer numbers into a sum (`2 1 3 2 = 8`) catches single miscopied digits when entered into *Results*.

## Accomplishments we're proud of

- Packing a complete learner experience, six-lesson multi-language library, lesson authoring tool, printable worksheet and class record generator, two-round misconception analyser, CSV export, dark high-contrast mode, and unit self-tests into 79,443 bytes with zero build tools.
- Maintaining strict epistemic honesty in both the app and `TEST.md`: **Checked** facts (measured file size, Chrome and Node `selfTest()`, keyboard navigation, 320 px layout, contrast ratios), **Predicted / assumed** behaviour (Android 4.4 support, 3–6 minute completion, TalkBack usability, learning effect), and **Made-up** demo data (labelled visibly on screen until edited) are never mixed.
- Handling phone codes (`HI-1132-0`) and paper answers (`2 1 3 2 = 8`) in the exact same teacher results pipeline.

## What we learned

- Research supports the individual ingredients—practice quizzing (`g = 0.499` across 222 studies [P3]), explanatory feedback (`0.49` vs `0.05` [P5, P6]), read-aloud support for students with reading disabilities (`d = 0.35` [P7, P8]), offline-first service-worker architectures [P10], and targeted re-teaching [P1, P2]—but combining them does not prove Titip improves learning without real-learner testing [P4, P9, P12].
- Aggregate household statistics hide shared-device reality: 91.66% household internet access [N46] does not mean a primary pupil can study online when phones are shared (93.50% of households vs 70.75% of individuals [N47]) and non-use stems mainly from device availability (43.62%) and know-how (40.77%) [N31, N51].
- Known technical limits must stay explicit: iPhones do not open local HTML files in Safari easily (mitigated by caching the hosted copy via `sw.js`), the paper sum check catches one wrong digit but not two swapped digits, *Listen* depends on voices installed on the device, Spanish/French copy needs native-teacher review, and no real old phone, printer, screen reader, or classroom has tested Titip yet.

## What's next

1. Run the 30-minute, 3-learner, 1-old-phone field test protocol in `TEST.md`—including Bluetooth/memory-card transfer, flight-mode opening, worksheet pencil run, two-round re-teaching, and TalkBack check—and publish both successes and failures in `TEST.md` and `README.md`.
2. Have native-speaking teachers review the Spanish and French interface text and sample lessons.
3. Verify the printable worksheet and class record sheet on a physical printer and test TalkBack end-to-end on Android.
4. Run classroom before-and-after cycles using the built-in `---` two-round comparison.
