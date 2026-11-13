# Titip

Lessons that travel without internet. *Titip* is Indonesian for handing something to a person so they can carry it to someone else.

## The barrier

A primary pupil wants to practise today's lesson at home, but the practice lives behind a link, and the family phone is not online.

This is a worldwide problem. 2.2 billion people were still offline in 2025, and 96% of them live in low- and middle-income countries. Only 58% of people in rural areas use the internet, against 85% in cities (ITU, 2025). In the latest global estimate, two in three school-age children had no internet at home (UNICEF and ITU, 2020; no newer global figure for children was found).

Titip was built in Indonesia, which is also where it will first be tested. There, 27.74% of primary pupils do not use the internet, and 93.50% of households have a mobile phone but only 70.75% of people have their own (BPS, 2025). Nothing in the app is specific to Indonesia: lessons can be written in any language, and five ready-made lessons come in English, Indonesian, Spanish and French. Sources for every number are in [RESEARCH.md](RESEARCH.md).

**Before:** the teacher shares an online quiz link. At home the page does not load. The learner does no practice, and the teacher cannot tell who struggled.

**After:** the teacher types the lesson once and downloads one HTML file of about 79 KB. The file goes from phone to phone by Bluetooth, WhatsApp or memory card. It opens in the phone browser with no internet. The learner reads, listens, practises with hints, and gets a short result code such as `HI-1132-0`. The learner writes the code on paper or sends it by SMS. The teacher types the codes in and sees, for each question, how many got it right first time and which wrong answer was most common.

For a home with no phone, the teacher prints the same lesson as a worksheet. The learner writes answer numbers and their total, such as `2 1 3 2 = 8`, and the teacher types those into the same table. The answer key and hints are printed upside down at the foot of the sheet.

During practice, a question the learner missed comes back once more at the end. On the last screen, *Send by SMS* opens the phone's message app with the code filled in. Six ready-made lessons (English, Indonesian, Spanish, French) are included, and any of them can be opened or copied into the editor. A lesson can be in English, Indonesian, Spanish, French, Portuguese, Swahili, Hindi or Bengali; *Listen* reads it in that language if the device has a voice for it. Learner screens, the overview, help and the printed worksheet are in English, Indonesian, Spanish and French; teacher screens are in English and Indonesian, and show English when Spanish or French is chosen.

For any question most learners missed, the table shows the hint to use in class and one button builds a follow-up lesson from just those questions. After teaching again, the teacher adds the new codes under a line of `---` and sees both rounds side by side.

## What is in the app

| Page | For | What it does |
|---|---|---|
| Overview | Everyone | How it works in three steps, and a two-minute tour |
| Learn | Learner | Read or listen, tap an underlined word for its meaning, practise with hints, get a result code, send it by SMS |
| Lessons | Learner, teacher | Six ready-made lessons in four languages to open or copy |
| Make | Teacher | Form editor with word meanings; download, share or print the lesson |
| Results | Teacher | First-try results per question, most common wrong answer, two-round comparison, saved rounds, spreadsheet export, printable class record sheet |
| Evidence | Judges, teachers | The six figures the design rests on, what is not known, and sources |
| Help | Everyone | How to pass a file between phones, how to open one, privacy |

Text size, a dark high-contrast theme and the interface language are remembered on the device. A chip in the top bar shows when the device is offline.

## What this does and does not claim

Titip makes practice possible without a connection and tells the teacher what to teach again. It has not been tested with learners, so it does not claim to raise scores. The design follows what research supports (practice questions, short feedback, a route back to a teacher) and was changed in response to studies where similar tools failed. [RESEARCH.md](RESEARCH.md) lists both.

## Live

- Landing page: https://titip.rofihosted.space/
- The app: https://titip.rofihosted.space/app/
- Sample lesson: https://titip.rofihosted.space/app/#/learn · Made-up class results: https://titip.rofihosted.space/app/#/demo

Hosted as static files on the author's own server, kept online through the judging period (until at least November 22, 2026). After one visit the app keeps working offline. Deployed with `scripts/deploy_titip.sh` in the author's server repository: `site/index.html` becomes the landing page, `index.html` and `sw.js` become the app.

## Try it

1. Open `index.html` in a browser, or the live app above. No install, no build, no account. The Overview page has a two-minute tour.
2. **Learn:** read the sample lesson, press *Start practice*, answer one question wrongly on purpose, and note the result code at the end.
3. **Read results:** press *Fill in a made-up class* to see a full two-round table at once (labelled as made-up data). Or type the code. Add `1132 7` and `3132 9` on new lines, as if two learners had handed in paper worksheets. Press *Make a follow-up lesson*. Then add a line of `---` and `2132 8` twice to see a second round.
4. **Make a lesson:** change a question or add one in the form, then press *Download lesson file*. Open the downloaded file with your connection switched off. *Print worksheet* gives the paper version.

To check the logic, open the browser console and run `selfTest()`. It returns `ok`.

## Access choices

- Every task works with a keyboard alone. Focus moves to the new heading on each step.
- Feedback uses a symbol and words, not colour alone, and is announced through a live region.
- Lesson content carries its own language tag, so a screen reader pronounces it correctly inside an English or Indonesian interface.
- *Listen* reads the lesson and each question aloud using the voice already on the device.
- The interface is available in English and Indonesian. A *Larger text* button is on every screen.
- One file, no dependencies, no images. The layout fits a 320 px screen.
- Phones make no outside request at all and use their own system font. Only on a wide screen, and only when the browser has not asked to save data, the page loads one display font from Google Fonts.
- *Next learner* clears the screen for the next person on a shared phone. The result code holds no name.
- Every lesson file contains the lesson editor, so any teacher who receives a lesson can adapt it and pass it on.

## Limits

[TEST.md](TEST.md) separates what was checked, what is only predicted or assumed, and what is made-up demonstration data.

- Tested by the author in desktop Chrome only: an automated run of the learner flow, the results table, the worksheet content, the language switch and the file download. Not yet tested with real learners, a screen reader, an old phone, or a printer.
- On paper, the total catches one miscopied answer. It does not catch two answers written in the wrong order.
- The two-round comparison is a classroom before-and-after, not a controlled trial. [TEST.md](TEST.md) describes how to run the first one.
- *Listen* depends on the voices installed on the device. Some phones have no offline voice for some languages.
- iPhones do not open a local HTML file in Safari easily. The hosted copy caches itself after one visit instead.
- Questions are multiple choice only.
- Teacher screens are not translated into Spanish or French; they fall back to English. Right-to-left languages such as Arabic are not supported yet.
- The Spanish and French sample lessons and interface text were written by the author with AI help and have not been checked by a native-speaking teacher.
- Saved rounds and settings use the browser's local storage. Where that is unavailable, the app still works but forgets them.
- Tappable word meanings are a design choice taken from the hackathon brief. None of the cited studies tests them.
- The dark theme was looked at on the Overview, Learn, Evidence and Help pages only.
- The check digit in the result code catches most copying mistakes, not all of them.
- The result code records the first answer picked for each question. It does not record later tries.
- Titip tells the teacher what to reteach. It cannot make that happen.

## Credits

- Built during AccessED Hacks (October 17 to November 20, 2026). No pre-existing code.
- Visual style follows Google's Material Design 3 guidelines. Titip is not a Google product and uses no Google logo. Icons were drawn for this project.
- Fonts: Google Sans Flex and Google Sans Code, loaded from Google Fonts on wide screens only.
- No libraries or datasets. The sample fractions lesson was written for this project. All learner data in the demo is made up.
- AI assistance: Claude (Anthropic) helped write and test the code and draft this README.
