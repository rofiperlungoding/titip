# Testing status

Three kinds of statement appear in this project. They are kept apart on purpose.

- **Checked**: measured or run on 12–13 November 2026. Repeatable.
- **Predicted / assumed**: reasoned from the code or from published research. Not observed. Each one names its assumption.
- **Made-up**: demonstration data invented by the author. Says nothing about real learners.

## Checked

| What | Result | How |
|---|---|---|
| File size (13 Nov 2026 build) | 198,771 bytes raw; 65,977 bytes gzip-compressed | Measured via Node `Buffer.byteLength` and `zlib.gzipSync` on `index.html` after the 13 Nov UI polish pass, which followed adding Interactive Learning Lab manipulatives (`renderLab`), Flashcard deck (`deckOf`), Overview lab sandbox, TaRL diagnostic, typed input scaffold, shared-phone queue, and `TITIP1:` packer |
| Multi-language, RTL & feature logic (13 Nov 2026) | `selfTest()` returns `ok` (incl. `fracInfo`, `deckOf`, `matchInp`, `tarlBand`, `packLesson`/`unpackLesson`, `tally.learners`, Hindi boundary, Bengali, Arabic `dir="rtl"`, and HTML-entity skip); all 12 sample lessons validate cleanly and round-trip through `TITIP1:`; default lesson retains ID `HI` (`HI-1132-0` -> `[1,1,3,2]`); all 9 UI languages (`en`, `id`, `es`, `fr`, `pt`, `sw`, `hi`, `bn`, `ar`) contain all 207 keys | Node verification run against `index.html` on 13 November 2026 |
| JavaScript syntax level (13 Nov 2026) | Compiles cleanly via `vm.Script`; no arrow functions, `let`/`const`, classes, template strings or spread outside string literals | Node syntax + token scan on `index.html` on 13 November 2026 |
| Live hosting (13 Nov 2026 build) | Landing page, `196,970`-byte app, and updated service worker (`skipWaiting`/`clients.claim`) return HTTP 200 at `https://titip.rofihosted.space/`, `/app/`, and `/app/sw.js` | Deployed via `deploy_titip.sh` and verified over HTTPS via Node `fetch` on 13 November 2026 |
| Word meanings, saved rounds, CSV export, record sheet, dark theme, Evidence and Help pages (prior build) | Tapping a word shows its meaning; a round saves, reloads and deletes; CSV has one row per question; settings persist | Scripted run in desktop Chrome on 12 November 2026 (needs re-run for per-choice error chips & Arabic RTL layout) |
| Learner flow by keyboard only (prior build) | Start practice and answer question 1 with Tab, arrow, Enter; focus lands on each new heading | Real key presses in desktop Chrome on 12 November 2026 |
| Controls | Every control is a native button, radio or text box; every text box has a label | DOM scan on prior build |
| Colour contrast | Body text 15.76:1, secondary text 9.39:1, primary buttons 6.39:1, status banners above 10:1, text-field borders 4.53:1, chart bars 4.95:1 and 5.07:1 | WCAG contrast formula on stylesheet colours |
| Narrow screen (prior build) | No sideways scrolling at 360 px and 320 px, including with Larger text on; navigation sits at the bottom edge | Loaded in 360 px and 320 px desktop Chrome frame on 12 November 2026 |
| Lesson editor, results, follow-up lesson, worksheet content, downloaded file content (prior build) | Behave as described in README | Scripted run in desktop Chrome on 12 November 2026 |
| Rendered design (prior build) | Overview, Learn, Lessons, Make and Results pages inspected as screenshots | Headless Chrome at 1440 px and 500 px wide on 12 November 2026 (RTL layout not yet screenshotted) |
| Live build smoke check (13 Nov 2026, 196,970-byte build) | `selfTest()` returns `ok` in the page; service worker controls the page. Found two bugs: (1) Interactive Lab buttons were squashed into an 8 px strip because the lab reused the results-chart class `.bar`; (2) the language picker pushed the top bar 41 px past a 320 px screen | Desktop Chrome on `https://titip.rofihosted.space/app/`, DOM measurement in a 320 px frame |
| UI polish build (13 Nov 2026, 198,771-byte build) | Both bugs fixed. No sideways scrolling on any of 8 pages plus Flashcards at 320 px in English, Arabic and Hindi; no script errors. Arabic shows `dir="rtl"`, right-side navigation and mirrored segmented switch; fraction buttons keep `÷4` order. Flashcards switch and flip. Full quiz run: correct and wrong feedback with ✓/✗ and words, typed wrong answer turns into choices, missed question returns, result code and level shown, focus moves to each new heading. Made-up class renders in dark theme with TaRL groups as count tiles | Local server in desktop Chrome; scripted clicks and DOM checks plus screenshots at 1568 px and a 360 px frame. Not on a phone |

| Typed answers that match no choice (13 Nov 2026) | Before: typing `5` for "8 mangoes, half" was recorded as choice `6`, so Results showed a wrong answer nobody gave. Now it is code digit `0` (`HI-2130-3`), counts as wrong, and adds no fake choice to "most common wrong answer". `selfTest()` returns `ok` with a new check for this | Node and desktop Chrome on 13 November 2026 |

| Real phone (13 Nov 2026) | On a Sharp R8 (Android 16, Chrome, 485 CSS px wide, dark theme): `selfTest()` returns `ok`; no sideways scrolling on any page in English or Arabic. Found and fixed: every quiz answer drawn as a box inside a box (`.opt span` also matched the inner language span); fraction diagram unreadable in dark theme; number tiles stacked one per row; Arabic bottom-bar labels off-centre, `✓÷2` with no gap, and English lesson text right-aligned in the Arabic interface. Offline: with the network cut in Chrome DevTools, the live `/app/` reloaded from the service worker, `selfTest()` returned `ok` and the Offline chip showed | USB remote debugging, screenshots from the phone. A modern phone, so this says nothing about Android 4.4 |

Not checked by anyone: a real old phone, a printer, a screen reader, an offline file transfer, a real learner, a real teacher, Arabic RTL on a real phone, or native-teacher review of the 7 newly expanded UI languages.

## Predicted / assumed

None of these has been observed.

| Prediction | Basis | Assumption that could be wrong |
|---|---|---|
| First load takes ~10.5 seconds of transfer on a slow mobile connection if gzip-compressed (~31.7 seconds uncompressed) | 65,977 or 198,771 bytes divided by 50 kbit/s | Assumes 50 kbit/s steady throughput and ignores connection set-up time |
| The learner flow runs on Android 4.4-era browsers and later | The script uses only old syntax (checked above) and long-standing browser features | Assumed from general knowledge of browser support, not from a device. Download, Listen and offline caching need newer browsers and are optional for the learner |
| A learner finishes the sample lesson in 3 to 6 minutes | 49 words of lesson text and 56 words of questions and answers, four questions | Assumes an early reader at 60 to 100 words a minute and under a minute per question. The reading speed is the author's assumption, not a sourced figure |
| A screen reader user can complete a lesson | Native controls, labels, a live region for feedback, language tags on lesson content (structure checked above) | Structure does not guarantee a usable experience. Not tried with TalkBack or any screen reader |
| Listen works offline on most Android phones | Uses the phone's built-in speech engine | Depends on which voices the phone has installed |
| Effect on learning is positive but of unknown size | Practice quizzing averages g = 0.499 and explanatory feedback 0.49 in published meta-analyses (P3, P5 in RESEARCH.md) | Those are averages for other tools in studied settings. Two comparable programmes found no effect (P9, P12). Our assumption is that Titip falls between zero and those figures, and near zero where the teacher does not follow up |

### Field test, predicted step by step (not run)

Nobody has run the field test below. This is the author's prediction of each step, made from the checks above, so the real run can be compared against it. It is not evidence about learners.

| Step | Predicted outcome | Basis | Most likely way it goes wrong |
|---|---|---|---|
| 1. Send file by Bluetooth | Arrives, about 199 KB | File size checked above | Some phones block `.html` over Bluetooth; WhatsApp may rename it or open it in its own viewer |
| 2. Open in flight mode | Opens in Chrome in a few seconds | Single file, no outside requests; offline reload checked on a Sharp R8 | Files app opens it in an HTML viewer without JavaScript, or a very old browser |
| 3–4. Learner alone, then *Next learner* | Finishes; hesitates at the first typed-answer question | Full quiz run checked in Chrome and on a phone | Young readers stuck on English or long lesson text; not tested with any learner |
| 5. Paper worksheet | Completed; the total is the step most often wrong | Paper code needs addition | Learner skips the total or misses the upside-down key |
| 6. Type results | Question 1 or 4 flagged *Teach again* if any are | `tally` and `selfTest()` | Teacher mistypes a code; Titip rejects it as a typo, which is intended |
| 10. Listen offline | Uncertain | Uses the phone's speech engine | No offline voice for the lesson language |
| 11. TalkBack | Uncertain | Native controls and labels checked | Never tried with a screen reader |

## Made-up

The *Fill in a made-up class* button in *Read results* loads 12 invented learners over two rounds. In it, question 1 goes from 4 of 12 right to 10 of 12 right after "teaching again". The author chose those numbers to show how the table reads. They are not a prediction and not a result. The screen labels them as made-up, and the label disappears once anything is typed.

# First field test: 30 minutes, 3 learners, 1 old phone

Nobody has run this yet. Until someone does, Titip has no evidence from real learners. Record what happens, including what goes wrong; a failed step reported honestly is worth more to the judges than a claim.

Use made-up names or numbers for learners (Learner 1, 2, 3). Do not record real names, faces without permission, or school records.

## You need

- The oldest Android phone you can borrow. Note its model and Android version.
- A second phone or laptop holding the lesson file.
- Three primary-age learners with a parent's permission, or three people of any age if none are available. Say which in the write-up.
- One printed worksheet.

## Steps

| # | Do this | Write down |
|---|---|---|
| 1 | Download the sample lesson file. Send it to the old phone by Bluetooth or memory card | Did it arrive? File size shown? |
| 2 | Turn on flight mode on the old phone. Open the file | Did it open? In which app? How many seconds? |
| 3 | Learner 1 does the lesson alone. Do not help | Finished? Where did they hesitate? Their result code |
| 4 | Press *Next learner*. Learner 2 does the lesson | Same |
| 5 | Learner 3 does the printed worksheet with a pencil | Answer numbers and total as written. Did they find the upside-down key? |
| 6 | Type the three results into *Read results* | Which question is flagged "Teach again"? Which wrong answer is most common? |
| 7 | Explain that one question aloud for two minutes, using the hint | What you said |
| 8 | Press *Make a follow-up lesson*. All three do it | New codes |
| 9 | Put `---` under the first codes, add the new codes, press *Show results* | Screenshot of the two-round table |
| 10 | Press *Listen* on the old phone in flight mode | Did it speak? In the right language? |
| 11 | If you can: turn on TalkBack and do question 1 with the screen covered | Could you answer? What was read out? |

## What to report

- Phone model and Android version.
- For each step: worked, partly worked, or failed, in one line.
- The two-round table as a screenshot.
- One thing a learner said or did that you did not expect.

## What this test can and cannot show

It can show that the file travels, opens offline, and that three people could complete a lesson and return a result. With three learners and a few minutes between rounds it cannot show that learning lasts or that Titip beats a paper worksheet alone. Write it up that way.
