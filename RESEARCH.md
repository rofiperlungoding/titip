# Titip: evidence base

Compiled 12 November 2026. Every source below was opened and read on that date unless marked otherwise. Numbers are copied from the source page. Where a source was only seen through a search snippet, the entry says so.

Use the IDs (P1, N1, ...) when citing in the Devpost story.

## 1. What the evidence says, and what it means for Titip

| Design decision | Evidence | What we may claim | What we may not claim |
|---|---|---|---|
| Lesson must work with no connection | N1–N15, N16–N21, N39–N43 | Many schools and homes still have no usable connection | That Titip fixes connectivity |
| Practice questions, not just reading | P3 | Quizzing raises achievement (g = 0.499 across 222 studies) | That Titip itself produces that effect; it is untested |
| A missed question comes back once at the end | P3 | More test repetitions increase the quizzing effect | That one extra try is enough; the number is our choice |
| A hint after a wrong answer | P5, P6 | Explanatory feedback beats "right/wrong" alone (0.49 vs 0.05) | That longer feedback is always better; see P11 |
| Hints kept to one short sentence | P11 | Simple feedback was faster and at least as effective in one 2025 trial | That this generalises beyond that task type |
| Result code goes back to the teacher | P1, P2 | Low-tech support works when a person targets teaching to the learner's level | That a code alone improves learning. In P1, SMS alone had no effect |
| Code records the first answer picked; table shows the most common wrong answer | P1, P2 | Targeting instruction is the active ingredient in the phone-tutoring trials | That teachers will act on it; untested |
| Printable worksheet, answers returned as numbers | N31, N47 | The top reason for being offline is no device; 29.25% of individuals have no phone of their own | That paper practice equals phone practice; no hints on paper |
| Sample lesson and pitch aimed at primary pupils | N44 | 27.74% of primary pupils do not use the internet | That older students have the same gap; they mostly do not |
| Listen button | P7, P8 | Read-aloud gives a small positive effect for students with reading disabilities (d = 0.35) | Benefit for all learners; the evidence is for reading disabilities |
| One small file plus service worker | P10 | Offline-first web apps with service workers are a validated pattern for low-connectivity learning | That one file is the best architecture |
| No claim of learning gains | P4, P9, P12 | Access alone is not enough; two well-run trials found no effect | Any outcome claim without our own test |
| "Next learner" button, no accounts | N31 | The top reason Indonesians are offline is having no device (43.62%) | That Titip helps a household with no phone at all |

**The honest one-line position:** the evidence supports the *ingredients* (offline delivery, retrieval practice, short explanatory feedback, a route back to a teacher). It does not show that Titip improves learning. That needs a test with real learners.

### Who exactly this is for

**Worldwide.** 2.2 billion people are offline, 96% of them in low- and middle-income countries (N39). Rural internet use is 58% against 85% urban (N40), and 94% in high-income against 23% in low-income countries (N41). Two in three school-age children had no internet at home in the latest global estimate (N42, 2020; no newer global figure for children was found). Five of the studies behind the design ran outside Indonesia: Botswana (P1), India, Kenya, Nepal, the Philippines and Uganda (P2), Sierra Leone (P9), Honduras (P12).

**Example country: Indonesia**, where Titip was built and will first be tested. The home-side numbers (N44–N49, BPS March 2025) show what the problem looks like in one country:

- **Primary pupils.** 27.74% of primary pupils do not use the internet (72.26% do). At junior secondary it is 8.96%, at senior secondary 2.53%. The sample lesson is a primary lesson for this reason.
- **Rural and eastern Indonesia.** 70.14% of rural residents use the internet against 82.72% urban. Papua Pegunungan 15.40%, Papua Tengah 32.64%, Nusa Tenggara Timur 62.91%.
- **Homes with one shared phone and no computer.** 93.50% of households have a mobile phone but only 70.75% of individuals do. Only 5% of primary pupils use a computer or laptop; 10.42% of rural households own one.

So the phone is usually in the house, it is usually someone else's, and for more than a quarter of primary pupils it is not being used online. Titip is not for the majority of Indonesian students, who are online. Say that plainly.

**Gap in the worldwide picture:** country-level home data was gathered only for Indonesia. The global child figure (N42) is from 2020. Other countries are covered by the global numbers and the trial sites in the papers, not by their own national statistics.

### Objections, and how the design answers each one

Each row is a finding that cuts against the idea, and the change made because of it. The last column is what is still open.

| Objection | Source | Answer in the product | Still open |
|---|---|---|---|
| Access to technology alone does not raise learning | P4 | Titip is not an access tool. Each lesson is retrieval practice (P3) with feedback (P5, P6) and a route back to the teacher (P1, P2). P4 names self-led practice and better instruction as the uses that do work | Not tested on learners |
| An offline platform on tablets in 102 schools had no effect; the study blames late hardware delivery and too little teacher training | P12 | Nothing to deliver and nothing to install: the lesson is one file on the phone already in the house. The teacher fills in one form and needs no training in a platform | Whether teachers find the form easy is untested |
| SMS alone had no effect; what worked was a person teaching to the child's level | P1 | The result code now records which answer the learner picked first, not just that it was wrong. The results table shows the most common wrong answer per question, so the teacher knows which misunderstanding to reteach | Titip informs the teacher; it does not make the teacher act |
| Teacher phone calls in Sierra Leone did not improve scores; take-up of the underlying lessons was low | P9 | The practice is inside the lesson file itself, so there is no separate programme the learner has to tune in to. The teacher can see take-up directly: learners counted = codes returned | Take-up in real homes is unknown |
| More elaborate feedback did worse than simple feedback | P11 | Hints are one short sentence. The hint field in the editor asks for exactly that. A wrong answer is disabled and the learner retries, so no long explanation is shown | Length is advised, not enforced |
| The top reason people are offline is having no device | N31 | A printable worksheet of the same lesson for homes with no phone. Answers come back as plain numbers ("2 1 3 2") and go into the same results table as phone codes. On a shared phone, "Next learner" resets the lesson and no account exists | A household needs a printer somewhere in the chain, usually the school |
| The government is connecting schools fast | N19–N26 | That is the school side. Titip covers the trip home, where 27.74% of primary pupils are not online (N44). A connected school can host the file; the learner still needs no connection to use it | No data on quota running out mid-month |
| Most students are already online | N44, N46 | Stated openly above. The target is primary pupils, rural areas and eastern provinces, not all students | None |
| Read-aloud evidence covers reading disabilities only | P7 | Listen is offered as an alternative way in, not claimed as a learning boost for everyone | Device voices vary |

### The four gaps that could not be argued away, and the workaround for each

| Gap | Workaround built | What it does not do |
|---|---|---|
| No evidence that Titip improves learning | The results table compares two rounds. The teacher puts a line of `---` between the codes collected before and after teaching again, and sees first-try results side by side per question. Every class that uses Titip produces its own before-and-after. [TEST.md](TEST.md) is a 30-minute protocol to get the first one | It is a classroom comparison, not a controlled trial. No result exists until someone runs it |
| Titip cannot make the teacher act | Acting is now one tap. Each "Teach again" row shows the hint to say in class, and one button builds a follow-up lesson containing only those questions, ready to download or print | The teacher still has to press it |
| Paper worksheet had no feedback and no error check | The answer key and hints are printed upside down at the foot of the sheet. The learner adds up their answer numbers and writes the total; a miscopied answer no longer matches the total and is rejected | Two answers swapped in order give the same total and are not caught |
| Data shows who is offline, not whose data runs out | Checked. In the 2025 internet providers' survey (N51), cost of data is 2.88% of the reasons given for not going online. No device is 43.62% and not knowing how is 40.77%. The pitch therefore says "the family phone is not online" and leads with the worksheet and the no-install file, not with data cost | A 2020 survey reporting 42.2% of students without data quota drew on students who had filed complaints, so it is not representative and is not cited |

**What stays true after all of this:** no test has shown that Titip improves learning. The tables remove reasons to expect failure and make the test cheap to run; they do not replace it.

## 2. Papers

Eleven peer-reviewed journal articles and one randomized evaluation summary. Years: 2026 (2), 2025 (1), 2023 (2), 2022 (3), 2021 (1), 2018 (1), 2015 (1). The two oldest are kept because they are the standard meta-analyses for their question.

**P1.** Angrist, N., Bergman, P., & Matsheng, M. (2022). Experimental evidence on learning using low-tech when school is out. *Nature Human Behaviour*, 6(7), 941–950. https://doi.org/10.1038/s41562-022-01381-z
Randomized trial, about 4,500 households in Botswana. SMS plus phone calls to parents raised learning by 0.12 standard deviations, or 0.89 SD per US$100. SMS alone had no effect.
*Verified:* bibliographic details and results confirmed across several index pages; the article page itself was not opened.

**P2.** Angrist, N., Ainomugisha, M., Bathena, S. P., Bergman, P., Crossley, C., Cullen, C., Letsomo, T., Matsheng, M., Panti, R. M., Sabarwal, S., & Sullivan, T. (2026). Mobile education builds resilience during shocks in five countries. *Nature*, 657, 689–696. https://doi.org/10.1038/s41586-026-10990-x
Five randomized trials in India, Kenya, Nepal, the Philippines and Uganda, over 16,000 children. Phone-call tutorials targeted to each child's level produced gains in all five countries, including when delivered by government teachers.
*Verified:* title, authors, journal and DOI read from the PDF metadata. Findings come from the Oxford Blavatnik School summary and the NBER working-paper version; the article body could not be read here. Read the abstract before quoting a number.

**P3.** Yang, C., Luo, L., Vadillo, M. A., Yu, R., & Shanks, D. R. (2021). Testing (quizzing) boosts classroom learning: A systematic and meta-analytic review. *Psychological Bulletin*, 147(4), 399–435. https://doi.org/10.1037/bul0000309
Meta-analysis of 222 studies, 48,478 students. Quizzing raises achievement to a medium extent (g = 0.499). Corrective feedback and more test repetitions increase the effect.
*Verified:* abstract confirmed on index pages.

**P4.** Rodriguez-Segura, D. (2022). EdTech in developing countries: A review of the evidence. *The World Bank Research Observer*, 37(2), 171–203. https://doi.org/10.1093/wbro/lkab011
Review of causal studies. Self-led learning and improvements to instruction are the most effective uses. Expanding access to technology alone is not sufficient to improve learning.
*Verified:* abstract confirmed on the World Bank repository listing.

**P5.** Van der Kleij, F. M., Feskens, R. C. W., & Eggen, T. J. H. M. (2015). Effects of feedback in a computer-based learning environment on students' learning outcomes: A meta-analysis. *Review of Educational Research*, 85. https://doi.org/10.3102/0034654314564881
40 studies, 70 effect sizes. Elaborated feedback 0.49; correct answer only 0.32; right/wrong only 0.05.
*Verified:* publication page opened. Issue and page numbers not confirmed.

**P6.** Mertens, U., Finn, B., & Lindner, M. A. (2022). Effects of computer-based feedback on lower- and higher-order learning outcomes: A network meta-analysis. *Journal of Educational Psychology*, 114(8), 1743–1772. https://doi.org/10.1037/edu0000764
163 effect sizes from 77 experiments. Elaborated feedback is most likely the most effective type for both recall and transfer. Right/wrong feedback is the least effective.
*Verified:* publication page opened.

**P7.** Wood, S. G., Moxley, J. H., Tighe, E. L., & Wagner, R. K. (2018). Does use of text-to-speech and related read-aloud tools improve reading comprehension for students with reading disabilities? A meta-analysis. *Journal of Learning Disabilities*, 51(1), 73–84. https://doi.org/10.1177/0022219416688170
22 studies. Average effect d = 0.35 (95% CI 0.14 to 0.56). Adjusted for publication bias, d = 0.24. Within-subject studies alone were not significant (d = 0.15).
*Verified:* full text opened on PubMed Central.

**P8.** Raffoul, S., & Jaber, L. (2023). Text-to-speech software and reading comprehension: The impact for students with learning disabilities. *Canadian Journal of Learning and Technology*, 49(2), 1–18. https://doi.org/10.21432/cjlt28296
Literature review. Text-to-speech helped students improve reading speed, fluency and content retention. No pooled numbers.
*Verified:* article page opened.

**P9.** Crawfurd, L., Evans, D. K., Hares, S., & Sandefur, J. (2023). Live tutoring calls did not improve learning during the COVID-19 pandemic in Sierra Leone. *Journal of Development Economics*, 164, 103114.
Randomized trial, 4,399 primary students. Teacher phone calls raised educational activity slightly but had no detectable effect on maths or language scores.
*Verified:* confirmed on the Center for Global Development and EdTech Hub listings.

**P10.** Febrianty, A., Majid, N. W. A., Azman, M. N. A., & Prestoza, M. J. R. (2026). Learning analytics in low-connectivity educational environments: A systematic review of offline-first and edge architectures. *Jurnal Varidika*, 39(1). https://doi.org/10.23917/varidika.v39i1.17273
PRISMA review, 1,539 records screened, 35 studies included. Three offline-first patterns are validated in the literature: local hardware servers, progressive web apps with service-worker buffers, and on-device inference.
*Verified:* article page opened. The page shows a March 2027 issue label with a 2026 publication date; cite the DOI.

**P11.** Lu, X., Yang, Q., Wei, J., & Heffernan, N. T. (2025). From belief to evidence: Simpler immediate feedback improves language learning and confidence in semi-open-ended questions. *Frontiers in Education*, 10, 1654809. https://doi.org/10.3389/feduc.2025.1654809
Randomized classroom experiment, 84 undergraduates analysed. Giving the correct response alone was more effective than more complex feedback, and took the least time. 85.71% of 60 surveyed instructors had believed the opposite.
*Verified:* full text opened. Small sample, one language, post-tests within one week.

**P12.** Barrera-Osorio, F., & Zoido, P. Evaluating the impact of a tablet-based learning platform in Honduras. Innovations for Poverty Action, study 2021–2022. https://poverty-action.org/impact-tablet-based-learning-platform-honduras
Randomized evaluation, 102 schools, grades 7–9, offline Kolibri platform on tablets. "The platform had no impact on test scores." Likely reasons given: late delivery and too little teacher training.
*Verified:* project page opened. This is an evaluation summary, not a journal article.

### Found but not usable yet

- Alordiah, C. (2025). Formative assessments in Africa: systematic review. *e-Kafkas Journal of Educational Research*, 12(2), 592–615. The reference list contains placeholder DOIs and stray machine-generated strings. Do not cite.
- An offline-first web app field study in Gunungkidul, Indonesia (Universitas Pamulang journal, 2026, 52 participants). Most relevant paper found, but the page refused access. Open it by hand: https://openjournal.unpam.ac.id/index.php/informatika/article/download/53720/30040/159028
- An Indonesian higher-education digital divide survey in *IRRODL* (457 students, six institutions). File downloaded but unreadable here: https://www.irrodl.org/index.php/irrodl/article/view/9277/6457
- An offline e-learning tablet study in *Journal of Learning for Development* (2024). File unreadable here: https://jl4d.org/index.php/ejl4d/article/download/1288/1054/12166

## 3. News and official releases

51 items, each opened and read. N38, N39 and N43 are press releases from the issuing body, not independent journalism.

### Learners and schools with no usable signal

| ID | Date | Outlet | Headline | Key fact |
|---|---|---|---|---|
| N1 | 12 Aug 2026 | InvestorTrust | [Warga Tak Lagi Naik Pohon, Internet BAKTI Buka Akses Pendidikan di Flores Timur](https://investortrust.id/business/112638/warga-tak-lagi-naik-pohon-internet-bakti-buka-akses-pendidikan-di-flores-timur) | Principal of SMAN 1 Titehena: teachers and students climbed trees for signal. School of 450–500 still lacks bandwidth for online assessment. |
| N2 | 17 Apr 2026 | Metro TV News | [Komdigi Hadirkan Internet Satelit Satria-1 untuk SMPN Lambitu Bima](https://www.metrotvnews.com/read/N4ECoER7-komdigi-hadirkan-internet-satelit-satria-1-untuk-smpn-lambitu-bima) | Students at SMPN 03 Lambitu, Bima, climbed hills for signal for lessons and tests until April 2026. |
| N3 | 13 Jun 2026 | detikInet | [Sekolah Terluar Terbantu Internet Gratis Pemerintah, Tapi...](https://inet.detik.com/telecommunication/d-8530261/sekolah-terluar-terbantu-internet-gratis-pemerintah-tapi) | SDN 001 Payung-Payung, Maratua: 94 students. Shared open Wi-Fi slows down during online exams. |
| N4 | 25 Sep 2025 | detikEdu | [ANBK SD di Jambi Terpaksa Digelar di Rumah Guru](https://www.detik.com/edu/foto/d-8129648/anbk-sd-di-jambi-terpaksa-digelar-di-rumah-guru) | 27 pupils sat the national assessment at a teacher's house 2 km away because school internet was poor. |
| N5 | 30 Oct 2024 | detikInet | [Di Depan Meutya Hafid, Guru di Pelosok RI Curhat Susah Sinyal](https://inet.detik.com/telecommunication/d-7614125/di-depan-meutya-hafid-guru-di-pelosok-ri-curhat-susah-sinyal) | SMPN 6 Amarasi, Kupang: pupils travelled to other schools with signal to sit the assessment. |
| N6 | 16 Nov 2024 | detikInet | [Nggak Numpang Lagi, SD di Anambas Bisa Ujian Online Mandiri](https://inet.detik.com/telecommunication/d-7640557/nggak-numpang-lagi-sd-di-anambas-bisa-ujian-online-mandiri) | SDN 005 Lembah Rewak used to borrow another school's facilities for online exams. |
| N7 | 2 May 2024 | detikSumbagsel | [Potret Pendidikan di Pesisir Barat Lampung, Harus Naik Bukit demi Internet](https://www.detik.com/sumbagsel/berita/d-7321250/potret-pendidikan-di-pesisir-barat-lampung-harus-naik-bukit-demi-internet) | Pupils of SDN 104 Krui walk about 1 km up a hill for a phone signal. |
| N8 | 27 Mar 2023 | detikSumut | [Berpayung, Siswa SMAN 4 Lingga Ujian di Atas Bukit karena Susah Sinyal](https://www.detik.com/sumut/berita/d-6641247/berpayung-siswa-sman-4-lingga-ujian-di-atas-bukit-karena-susah-sinyal) | About 130 students sat mid-semester exams on a hill 1 km from school. |
| N9 | 25 Oct 2022 | detikJateng | [Demi ANBK, Guru-Siswa SD di Pekalongan Naik Bukit Cari Sinyal Internet](https://www.detik.com/jateng/berita/d-6368561/demi-anbk-guru-siswa-sd-di-pekalongan-naik-bukit-cari-sinyal-internet) | SDN 2 Klesem: power cut ended the Wi-Fi; class moved to a hill to tether laptops to phones. |
| N10 | 25 Oct 2022 | detikJateng | [Susah Sinyal Internet, Siswa SDN Kutamendala Brebes Kerjakan ANBK di Gubuk](https://www.detik.com/jateng/berita/d-6367954/susah-sinyal-internet-siswa-sdn-kutamendala-brebes-kerjakan-anbk-di-gubuk) | Eight pupils sat the assessment in a roadside shack. None of them owned a laptop. |
| N11 | 25 Apr 2026 | ANTARA Jatim | [Kemendikdasmen: Pelaksanaan TKA lancar meski hadapi tantangan](https://jatim.antaranews.com/berita/1060473/kemendikdasmen-pelaksanaan-tka-lancar-meski-hadapi-tantangan) | Elementary academic test hit network and power problems; schools in Maybrat, Papua Barat, used satellite. |
| N12 | 8 Sep 2026 | InfoPublik | [Revitalisasi dan Digitalisasi Sekolah Buka Akses Pembelajaran Lebih Merata](https://infopublik.id/kategori/nasional-sosial-budaya/988011/revitalisasi-dan-digitalisasi-sekolah-buka-akses-pembelajaran-lebih-merata) | Education head of Intan Jaya, Papua: digital learning is still held back by limited internet and electricity. |
| N13 | 6 Jul 2026 | NU Online | [Kemendikdasmen Perkuat Sekolah 3T di Nias](https://nu.or.id/nasional/kemendikdasmen-perkuat-sekolah-3t-di-nias-dari-revitalisasi-hingga-hadirkan-listrik-dan-akses-internet-R29JK) | 4 primary and 7 junior secondary schools in Nias Utara had no internet before June 2026. |
| N14 | 19 Jun 2026 | Gebrak.id | [Starlink Hadir di Sekolah 3T Nias Utara](https://www.gebrak.id/?p=13244) | Same event as N13. Minister Abdul Mu'ti: "Sekolah yang belum ada internet, kita sambungkan internet." |
| N15 | 9 May 2025 | The Star (Malaysia) | [Education Ministry says internet access still limited near schools](https://www.thestar.com.my/news/nation/2025/05/09/education-ministry-says-internet-access-still-limited-near-schools) | Malaysia's education minister, in Sabah: internet in or near rural schools is limited or absent. |

### Indonesia: national numbers

| ID | Date | Outlet | Headline | Key fact |
|---|---|---|---|---|
| N16 | 21 Mar 2025 | Kompas.com | [Ribuan Sekolah di Indonesia Belum Punya Akses Internet dan Jaringan Listrik](https://www.kompas.com/edu/read/2025/03/21/193449071/ribuan-sekolah-di-indonesia-belum-punya-akses-internet-dan-jaringan-listrik) | 86% of schools lack fixed broadband (Minister Meutya Hafid). Search snippets of this article also give 27,650 education units without internet and 3,323 without electricity; confirm those two on the page before quoting. |
| N17 | 19 Sep 2025 | GoodStats | [Belum Semua Sekolah Dasar dan Menengah di Indonesia Terakses Internet](https://data.goodstats.id/statistic/belum-semua-sekolah-dasar-dan-menengah-di-indonesia-terakses-internet-KIQel) | Schools with internet, 2024: primary 77.47%, junior secondary 82.47%, senior 88.25%, vocational 91.32%. |
| N18 | 29 Jun 2025 | GoodStats | [Belum 100% Sekolah Dasar dan Menengah di Indonesia Punya Akses ke Listrik](https://data.goodstats.id/statistic/belum-100-sekolah-dasar-dan-menengah-di-indonesia-punya-akses-ke-listrik-cAVZ1) | 98.25% of primary schools have electricity. Only 3 of 38 provinces have it in every primary school. |
| N19 | 2 Jul 2026 | Metro TV News | [Target Akses Internet Sekolah Digandakan jadi 16.557 Satuan Pendidikan](https://www.metrotvnews.com/read/bw6C2zxQ-target-akses-internet-sekolah-digandakan-jadi-16557-satuan-pendidikan) | About 77% of schools adequately connected. The other 23% are mostly in remote regions. |
| N20 | 2 Jul 2026 | ANTARA (English) | [RI doubles target for schools receiving internet access in 2026](https://en.antaranews.com/news/421352/ri-doubles-target-for-schools-receiving-internet-access-in-2026) | 8,265 schools in 2025; target 16,557 in 2026. |
| N21 | 2 Jul 2026 | Metro TV News | [Pemerintah Perkuat Digitalisasi Sekolah di Wilayah 3T](https://www.metrotvnews.com/read/KRXCQoeA-pemerintah-perkuat-digitalisasi-sekolah-di-wilayah-3t) | Programme reached 13,838 remote schools. Government states it is hampered by unstable signal and limited electricity. |
| N22 | 27 Oct 2026 | InfoPublik | [Dua Tahun Pemerintahan Prabowo-Gibran, Kemendikdasmen Perkuat Mutu Pendidikan](https://infopublik.id/kategori/prioritas-nasional-2026/994717/dua-tahun-pemerintahan-prabowo-gibran-kemendikdasmen-perkuat-mutu-pendidikan-dari-digitalisasi-sekolah-hingga-kesejahteraan-guru) | Electricity provided to 2,389 schools, internet to 8,152; 288,865 schools received digital boards in 2025. |
| N23 | 20 Aug 2025 | ANTARA (English) | [Indonesia aims to provide internet access to 300,000 schools by 2025](https://en.antaranews.com/news/374517/indonesia-aims-to-provide-internet-access-to-300000-schools-by-2025) | Ministry target: 300,000 schools online by end of 2025. |
| N24 | 20 Aug 2025 | Medcom.id | [Kemendikdasmen Upayakan 300 Ribu Sekolah Tersedia Internet pada Akhir 2025](https://www.medcom.id/pendidikan/news-pendidikan/ybDjPwvK-kemendikdasmen-upayakan-300-ribu-sekolah-tersedia-internet-pada-akhir-2025) | Same target; ministry says it will keep working on remaining blank spots. |
| N25 | 14 Jan 2026 | Kompas TV | [Internet Satelit Gratis Kemendikdasmen Mulai Disalurkan](https://www.kompas.tv/pendidikan/643613/internet-satelit-gratis-kemendikdasmen-mulai-disalurkan-ribuan-sekolah-3t-jadi-penerima) | Free satellite internet for 8,265 units, of which 6,868 are primary schools. |
| N26 | 22 Jun 2026 | detikInet | [Bakti Komdigi Kerahkan Internet Satelit Buat Sekolah Rakyat-Koperasi Merah Putih](https://inet.detik.com/law-and-policy/d-8542044/bakti-komdigi-kerahkan-internet-satelit-buat-sekolah-rakyat-koperasi-merah-putih) | Satria-1 satellite serves 31,803 locations, 21,718 of them education sites. |
| N27 | 12 Feb 2026 | detikInet | [PR Prabowo: Internet ke 3.000 Desa Blankspot dan Perluasan Fixed Broadband](https://inet.detik.com/law-and-policy/d-8352835/pr-prabowo-internet-ke-3-000-desa-blankspot-dan-perluasan-fixed-broadband) | About 3,000 villages have no signal at all. |
| N28 | 18 Apr 2026 | detikInet | [Wilayah 3T Masih Sulit Internet, Teknologi Satelit Didorong Jadi Solusi](https://inet.detik.com/telecommunication/d-8450346/wilayah-3t-masih-sulit-internet-teknologi-satelit-didorong-jadi-solusi) | Internet penetration in Maluku and Papua about 69.26%, against 80.66% nationally. |
| N29 | 26 May 2026 | RRI | [Govt Combines Fiber, BTS, and LEO to Close Internet Blank Spots](https://rri.co.id/en/national/2442808/govt-combines-fiber-bts-and-leo-to-close-internet-blank-spots) | Ministry will combine fibre, towers and low-orbit satellites for remote, non-commercial areas. |
| N30 | 8 Aug 2025 | detikInet | [Pertambahan Pengguna Internet RI Melambat, Ini Sebabnya](https://inet.detik.com/telecommunication/d-8052039/pertambahan-pengguna-internet-ri-melambat-ini-sebabnya) | 80.66% penetration. Providers improve service where they already are instead of entering hard-to-reach villages. |
| N31 | 8 Aug 2025 | detikInet | [55 Juta Orang Indonesia Belum Terkoneksi Internet, Ini Sebabnya](https://inet.detik.com/telecommunication/d-8051257/55-juta-orang-indonesia-belum-terkoneksi-internet-ini-sebabnya) | 55,010,483 people offline. Top reason, 43.62%: no device that can connect. |
| N32 | 6 Aug 2025 | Kontan | [Penetrasi Internet di Indonesia Capai 80,66%, Pemerataan Masih Jadi Tantangan](https://industri.kontan.co.id/news/penetrasi-internet-di-indonesia-capai-8066-pemerataan-masih-jadi-tantangan) | Java holds 58.14% of connected users. Remote regions still need attention. |
| N33 | 2 Oct 2026 | ANTARA Megapolitan | [Membuka ruang belajar setara melalui layar pintar IFP](https://megapolitan.antaranews.com/berita/552703/membuka-ruang-belajar-setara-melalui-layar-pintar-ifp) | Smart panels sent to 288,865 education units including 2,360 special-needs schools. |
| N34 | 18 Jun 2026 | Medcom.id | [Ironi Kampus Inklusif: Mahasiswa Disabilitas Nambah Terus, Tapi...](https://www.medcom.id/pendidikan/news-pendidikan/Zke1aQrk-ironi-kampus-inklusif-mahasiswa-disabilitas-nambah-terus-tapi) | 3,128 university students with disabilities at 282 campuses; the largest group, 1,727, is blind. |

### Learning outcomes

| ID | Date | Outlet | Headline | Key fact |
|---|---|---|---|---|
| N35 | 6 Dec 2023 | detikEdu | [Capaian Anak Bangsa di PISA 2022](https://www.detik.com/edu/sekolah/d-7074916/capaian-anak-bangsa-di-pisa-2022) | Indonesia's reading score fell 12 points and maths 13 points from 2018. |
| N36 | 11 Dec 2023 | GoodStats | [Studi PISA 2022: Skor Literasi Membaca Indonesia Catatkan Rekor Terendah Sejak Tahun 2000](https://goodstats.id/article/studi-pisa-2022-skor-literasi-membaca-indonesia-catatkan-rekor-terendah-sejak-tahun-2000-Ekt0x) | Reading score 359, the lowest since Indonesia joined in 2000. |
| N37 | 25 Jan 2024 | Databoks | [PISA 2022: Indonesian Students' Math Skills Decline](https://databoks.katadata.co.id/en/education/statistics/169ba863e25c3d3/pisa-2022-indonesian-students-math-skills-decline) | Maths score 366, against an OECD average of 465–475. |
| N38 | 23 Jun 2022 | World Bank (release) | [70% of 10-Year-Olds now in Learning Poverty](https://www.worldbank.org/en/news/press-release/2022/06/23/70-of-10-year-olds-now-in-learning-poverty-unable-to-read-and-understand-a-simple-text) | 70% of 10-year-olds in low- and middle-income countries cannot understand a simple text, up from 57%. |

### Global connectivity

| ID | Date | Outlet | Headline | Key fact |
|---|---|---|---|---|
| N39 | 17 Nov 2025 | ITU (release) | [Global number of Internet users increases, but disparities deepen key digital divides](https://www.itu.int/en/mediacentre/Pages/PR-2025-11-17-Facts-and-Figures.aspx) | 2.2 billion people offline; 96% of them in low- and middle-income countries. |
| N40 | 17 Nov 2025 | TV Technology | [ITU: 6 Billion Now Online Globally](https://www.tvtechnology.com/news/itu-6b-now-online-globally) | 85% of urban residents online against 58% of rural residents. |
| N41 | 18 Nov 2025 | Advanced Television | [ITU: Internet users rise, but disparities deepen digital divides](https://www.advanced-television.com/2025/11/18/itu-global-internet-users-rise-but-disparities-deepen-digital-divides/) | 94% online in high-income countries against 23% in low-income countries. |
| N42 | 1 Dec 2020 | UN News | [A 'digital canyon': 1.3 billion school-aged children can't log on to internet at home](https://news.un.org/en/node/1078872) | Two-thirds of school-age children have no internet at home; 16% of the poorest households against 58% of the richest. Dated, and no newer global figure for children was found. |
| N43 | 1 Dec 2020 | UNICEF (release) | [Two thirds of the world's school-age children have no internet access at home](https://www.unicef.org/press-releases/two-thirds-worlds-school-age-children-have-no-internet-access-home-new-unicef-itu) | Source release for N42. |

### Students and households at home (BPS data, reported by data outlets)

| ID | Date | Outlet | Headline | Key fact |
|---|---|---|---|---|
| N44 | 25 Nov 2025 | Databoks | [Data on Indonesian Students Using Mobile Phones, Laptops, and the Internet in 2025](https://databoks.katadata.co.id/en/technology-telecommunications/statistics/69251fd00425f/data-on-indonesian-students-using-mobile-phones-laptops-and-the-internet-in-2025) | Students aged 5–23, March 2025 (BPS *Statistik Pendidikan 2025*): 83.80% use the internet, 85.78% a mobile phone, 19.80% a computer. Primary: 72.26% internet, 75.49% phone, 5% computer. |
| N45 | 6 May 2026 | GoodStats | [Persentase Penggunaan Perangkat Digital Peserta Didik 2025](https://data.goodstats.id/statistic/persentase-penggunaan-perangkat-digital-peserta-didik-2025-8DuTx) | Same BPS source by level. Junior secondary 91.04% internet; senior secondary 97.47%; higher education 99.29%. |
| N46 | 15 Sep 2026 | GoodStats | [Akses Internet Rumah Tangga Tembus 91%, Bagaimana Kepemilikan Komputernya?](https://data.goodstats.id/statistic/akses-internet-rumah-tangga-tembus-91-bagaimana-kepemilikan-komputernya-M9bTb) | 91.66% of households have internet access (2025); 19.94% own a computer. |
| N47 | 1 Sep 2026 | GoodStats | [77% Penduduk Indonesia Sudah Mengakses Internet pada 2025](https://data.goodstats.id/statistic/77-penduduk-indonesia-sudah-mengakses-internet-pada-2025-TSsJU) | 77.63% of residents use the internet: urban 82.72%, rural 70.14%. Mobile phone: 93.50% of households, 70.75% of individuals. |
| N48 | 16 Sep 2026 | GoodStats | [Kepemilikan Komputer Perkotaan Sentuh 26% pada 2025, Perdesaan Masih Tertinggal Jauh](https://data.goodstats.id/statistic/kepemilikan-komputer-perkotaan-sentuh-26-pada-2025-perdesaan-masih-tertinggal-jauh-bA492) | Households owning a computer: urban 26.49%, rural 10.42%. |
| N49 | 4 Sep 2026 | GoodStats | [10 Provinsi dengan Akses Internet Terendah pada 2025](https://data.goodstats.id/statistic/10-provinsi-dengan-akses-internet-terendah-pada-2025-60JTn) | Papua Pegunungan 15.40%, Papua Tengah 32.64%, Papua Selatan 50.02%, Nusa Tenggara Timur 62.91%. |
| N50 | 1 Sep 2024 | GoodStats | [Penggunaan Internet di Kalangan Siswa Semakin Marak, Ini Tujuan Utamanya](https://goodstats.id/article/penggunaan-internet-di-kalangan-siswa-semakin-marak-ini-tujuan-utamanya-kLS6W) | Of students who go online, 86.65% do so for entertainment and 27.46% for online learning. Earlier survey year than N44; do not mix the two. |

| N51 | 14 Sep 2025 | GoodStats | [Simak Alasan dan Tantangan Penggunaan Internet di Indonesia 2025](https://goodstats.id/article/simak-alasan-dan-hambatan-penggunaan-internet-di-indonesia-DHph7) | Reasons for not using the internet (providers' association survey, 8,700 respondents): no adequate device 43.62%, do not know how to connect 40.77%, see no benefit 3.24%, data too expensive 2.88%, no connection 2.59%. The page does not state the base for these shares. |

The percentages "do not use the internet" in section 1 are 100 minus the figures in N44 and N45.

## 4. Known problems in this evidence

- **Home versus school.** Most news cases describe schools without signal during online exams. Titip's barrier is practice at home. N44–N49 now give the home side, but they measure whether a student *uses* the internet, not whether data is affordable or lasts the month. N51 suggests data cost is a small part of the picture; device and know-how are the large parts.
- **"Household has internet access" is a loose measure.** N46's 91.66% counts a household if any member went online. It does not mean the child can use that connection for schoolwork.
- **Sources disagree.** Internet delivered to schools in 2025 is 8,265 in N19, N20 and N25 but 8,152 in N22. Maluku-Papua penetration is 69.26% in N28 and 69.74% in a Kontan snippet. N21 and N22 name different heads of the same government office.
- **Older items.** N8–N10 are from 2022–2023. They show the pattern is long-running, not that it is current. N1–N4 and N11–N13 are the current ones.
- **Not read.** Seven Bisnis.com articles and one VOI article refused access. They are left out.
- **No paper on Titip's exact mechanism.** Nothing found tests a paper or SMS result code sent back to a teacher from an offline lesson. That part is our own design and is untested.
