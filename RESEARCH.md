# Titip: evidence base

Compiled 12 November 2026; expanded globally 13 November 2026. Every source below was opened and read on its compilation date unless marked otherwise (e.g. indexed summary or 1-page publisher preview). Numbers are copied directly from the source.

Use the IDs (P1, N1, ...) when citing in the Devpost story and README.

## 1. What the evidence says, and what it means for Titip

| Design decision | Evidence | What we may claim | What we may not claim |
|---|---|---|---|
| Lesson must work with no connection | N38, N42, N52, N53, N56, N57, N59 | Globally ~3.4B people are offline (N52); 88–95% of school-age children in Africa and South Asia and 49% in LatAm/Caribbean lack home internet (N53); offline gaps also persist in Peru (N56) and Indonesia (N38–N43) | That Titip fixes connectivity |
| Practice questions, not just reading | P3 | Quizzing raises achievement (g = 0.499 across 222 studies) | That Titip itself produces that effect; it is untested |
| A missed question comes back once at the end | P3 | More test repetitions increase the quizzing effect | That one extra try is enough; the number is our choice |
| A hint after a wrong answer | P5, P6 | Explanatory feedback beats "right/wrong" alone (0.49 vs 0.05) | That longer feedback is always better; see P11 |
| Hints kept to one short sentence | P11 | Simple feedback was faster and at least as effective in one 2025 trial | That this generalises beyond that task type |
| Result code goes back to the teacher | P1, P2, P19, P20 | Low-tech phone/SMS support raised learning in Botswana (P1), 5 countries (N=16,936, P2), 7 Latin American countries (P20), and Paraguay (P19) when a human targeted instruction; SMS alone had no effect in P1 | That a code alone improves learning |
| Code records the first answer picked; table + distractor chips show common wrong answers | P1, P2, P19, P20 | Targeting instruction to the learner's level is the active ingredient across multi-country phone-tutoring trials | That teachers will act on the table; untested |
| Printable worksheet, answers returned as numbers | N52, N55, N58, N31, N47 | Phone access is unevenly shared (~3.1B usage gap N52; 27–38% personal vs ~90% household ownership in rural India N55; 29.25% no phone in ID N47; declining school internet in Brazil N58) | That paper practice equals phone practice; no hints on paper |
| Sample lessons aimed at primary pupils in 9 languages | N53, N54, N55, N44 | Primary foundational gaps are severe globally (~10.8% primary proficiency in Africa N54; 23.4% Class 3 reading in rural India govt schools N55) and school-age connectivity lags (N53, N44) | That older students always have the same gap, or that Titip's sample lessons are validated |
| Listen button | P7, P8 | Read-aloud gives a small positive effect for students with reading disabilities (d = 0.35) | Benefit for all learners; the evidence is for reading disabilities |
| One small file plus service worker | P10 | Offline-first web apps with service workers are a validated pattern for low-connectivity learning | That one file is the best architecture |
| No claim of learning gains | P4, P9, P12 | Access or passive nudges alone are not enough; two well-run trials found no effect | Any outcome claim without our own test |
| "Next learner" button, no accounts | N52, N55, N31, N47 | Shared household phones are common where personal ownership lags household access (N55, N31) | That Titip helps a household with no phone at all |

**The honest one-line position:** the evidence supports the *ingredients* (offline delivery, retrieval practice, short explanatory feedback, a route back to a teacher). It does not show that Titip improves learning. That needs a test with real learners.

### Who exactly this is for

**Worldwide baseline.** 70% of 10-year-olds in low- and middle-income countries cannot read and understand a simple text (N38). Globally, 2.2 billion people remain offline—96% of them in LMICs (N39)—while GSMA estimates a 3.1 billion mobile internet usage gap (38% of the world population covered by mobile broadband yet not using it) plus a 300 million coverage gap, ~3.4 billion offline (N52). Two in three school-age children (~1.3 billion) have no internet access at home (N42, N53), and only 23% of people in low-income countries are online versus 94% in high-income countries (N41). Across Ethiopia, India, Peru, and Vietnam (P18, N = 10,301), home internet raised remote schooling probability by 8.4 to 41 percentage points (p < 0.001).

**Across four developing regions (and Titip's 9 languages: EN, ID, ES, FR, PT, SW, HI, BN, AR):**

- **Sub-Saharan Africa.** 95% of school-age children in West & Central Africa (194M) and 88% in East & Southern Africa (191M) lack home internet (N53). UNESCO's 2025 Africa Spotlight reports ~10.8% end-of-primary minimum proficiency and ~1 in 5 primary-age children out of school (N54), while 87% of 10-year-olds could not read a simple story pre-COVID (P17). Trials show connectivity, shared evening phones, and power cuts derail heavy ICT and voice-call programs (Sierra Leone N = 4,399, maths -0.008 SD, P9; Botswana secondary N = 252+86, P24; Kenya $40/pupil e-readers vs $0.10 tutor tablets, P13; Kenya Kiswahili offline need, P23), whereas low-tech targeted SMS/calls raised numeracy in Botswana (+0.12 SD, P1) and Kenya/Uganda (P2).
- **South Asia.** 88% of school-age children (449M) lack home internet (N53). Pratham's ASER 2024 (~650,000 children across 605 rural Indian districts, N55) finds only 23.4% of government-school Class 3 pupils and 44.8% of Class 5 pupils can read a Class 2 text, yet ~90% of 14–16-year-olds have a smartphone at home (only 27–38% own one). Rural adolescent girls' smartphone ownership in India is 38% vs 62% urban and internet access 25% vs 55%, with South Asian internet gaps at 23% Pakistan, 35% Bangladesh, and 40% Nepal (P22); 10% of Tamil Nadu youth relied on borrowed family phones (P27).
- **Latin America & Caribbean.** 49% of school-age children (74M) lack home internet (N53). In Peru (INEI ENAHO 2025), 58.9%–60.1% of households have internet nationally, dropping to 20.5% (Q1, N56) and 23.6% (Q2, N57) in rural areas, where secondary learners cite weak signal and missing mobile data (P26). Even where home connectivity is high—95.0% in Brazil (IBGE PNAD 2025, N59)—Cetic.br TIC Kids Online 2025 (n = 2,370, N58) shows school-environment internet access fell from 51% (2024) to 37% (2025) after classroom phone restrictions. Across seven Latin American countries (N ≈ 7,000, P20) and Paraguay (N = 3,334, P19), low-tech targeted tutoring raised maths by +0.20 SD and language by +0.113 SD ITT.
- **Southeast Asia (initial field test context: Indonesia).** Indonesia's BPS *Statistik Pendidikan 2025* (N44–N49) shows 75.49% of primary pupils use a mobile phone, 5% a computer, and 27.74% do not use the internet (rising in Papua Pegunungan 15.40% and NTT 62.91% household access), while Sumba vocational schools saw stable content access jump from 46.2% to 87.9% via an offline-first PWA (P25). In Malaysia (N = 162 Year 6 pupils, P21), low-device QR Paper Mode boosted participation without student phones (84% positive), but public leaderboards demotivated lower achievers (p < 0.001)—supporting Titip's private, non-ranked teacher summary.

### Objections, and how the design answers each one

Each row is a finding that cuts against the idea, and the change made because of it. The last column is what is still open.

| Objection | Source | Answer in the product | Still open |
|---|---|---|---|
| Access to technology alone does not raise learning | P4 | Titip is not an access tool. Each lesson is retrieval practice (P3, P14, P15) with feedback (P5, P6) and a route back to the teacher (P1, P2, P19, P20). P4 names self-led practice and better instruction as the uses that do work | Not tested on learners |
| Offline hardware rollouts (102 schools in Honduras, student e-readers in Kenya) failed on cost, delivery delays, or tech overhead | P12, P13, P24 | Nothing to buy, deliver, or maintain: the lesson is one HTML file on phones already in the household or passed via Bluetooth/WhatsApp (P29). Teacher fills one form; no logins (P13 noted 90-min login overhead on teacher tablets) | Whether teachers find the form easy is untested |
| SMS alone had no effect; live calls stalled on connection rates and evening phone sharing | P1, P9 | Asynchronous practice runs locally anytime without a live call; the result code records the first answer picked per question and the teacher table shows per-choice distractor counts + most common wrong answer | Titip informs the teacher; it does not make the teacher act |
| More elaborate feedback did worse than simple feedback, and leaderboards demoralised weaker pupils | P11, P21 | Hints are one short sentence. A wrong answer is disabled and the learner retries without punitive leaderboards or long explanations; teacher tallies stay private | Length is advised, not enforced; distraction from shared phones |
| Many rural homes and adolescent girls have no personal device | N31, N55, P18, P22, P27 | A printable worksheet of the same lesson covers no-device households, returning plain answer totals into the same results table; "Next learner" supports borrowed family phones with zero accounts | A household needs a printer somewhere in the chain, usually the school |
| Governments are connecting schools or restricting classroom phones | N19–N26, N58 | Titip covers the trip home and restricted classrooms: a school can share the file over Bluetooth/local LAN, and learners practise without data quota or campus Wi-Fi | Mid-month quota exhaustion & parental phone skepticism (P26) |
| Most urban secondary pupils in upper-middle-income areas are already online | N44, N46, N59 | Stated openly above. Target is primary/remedial foundational skills, rural districts, low-data households, and offline classrooms | None |
| Read-aloud evidence covers reading disabilities only | P7, P8 | Listen is offered as an optional scaffold, not claimed as a universal learning boost | Device voices vary across OS and languages (e.g., SW/BN/AR) |

### The four gaps that could not be argued away, and the workaround for each

| Gap | Workaround built | What it does not do |
|---|---|---|
| No evidence that Titip improves learning | The results table compares two rounds. The teacher puts a line of `---` between the codes collected before and after teaching again, and sees first-try results side by side per question. Every class that uses Titip produces its own before-and-after. [TEST.md](TEST.md) is a 30-minute protocol to get the first one | It is a classroom comparison, not a controlled trial. No result exists until someone runs it |
| Titip cannot make the teacher act | Acting is now one tap. Each "Teach again" row shows the hint to say in class + per-choice distractor counts, and one button builds a follow-up lesson containing only those questions, ready to download or print | The teacher still has to press it |
| Paper worksheet had no feedback and no error check | The answer key and hints are printed upside down at the foot of the sheet. The learner adds up their answer numbers and writes the total; a miscopied answer no longer matches the total and is rejected | Two answers swapped in order give the same total and are not caught |
| Global survey timing & uneven sub-national data | Paired 2020 UNICEF/ITU child baseline (N42, N53) with 2024–2026 national/regional surveys (GSMA N52, UNESCO 2025 N54, ASER 2024 N55, Peru ENAHO 2025 N56–N57, Brazil TIC Kids/IBGE 2025 N58–N59, Indonesia BPS 2025 N44–N51) | Country-level home child surveys remain missing for some Sub-Saharan African and South Asian states |

**What stays true after all of this:** no test has shown that Titip improves learning. The tables remove reasons to expect failure and make the test cheap to run; they do not replace it.

## 2. Papers

Twenty-seven peer-reviewed journal articles and two randomized evaluation/working paper summaries across Sub-Saharan Africa, South Asia, Latin America, East/Southeast Asia, and global meta-analyses. Exact verification depth is stated on every item.

**P1.** Angrist, N., Bergman, P., & Matsheng, M. (2022). Experimental evidence on learning using low-tech when school is out. *Nature Human Behaviour*, 6(7), 941–950. https://doi.org/10.1038/s41562-022-01381-z
Randomized trial, about 4,500 households in Botswana. SMS plus phone calls to parents raised learning by 0.12 standard deviations, or 0.89 SD per US$100. SMS alone had no effect.
*Verified:* bibliographic details and results confirmed across several index pages and cited in P19; the publisher page itself was not opened.

**P2.** Angrist, N., Ainomugisha, M., Bathena, S. P., Bergman, P., Crossley, C., Cullen, C., Letsomo, T., Matsheng, M., Panti, R. M., Sabarwal, S., & Sullivan, T. (2026). Mobile education builds resilience during shocks in five countries. *Nature*, 657, 689–696. https://doi.org/10.1038/s41586-026-10990-x
Five randomized trials totaling N = 16,936 children (India 850, Kenya 6,724, Nepal 3,732, the Philippines 3,492, Uganda 2,138). Phone-call tutorials targeted to each child's level improved learning by 0.30–0.35 SD across the trials (~4 years of high-quality schooling per US$100), including when delivered by government teachers and during climate shocks.
*Verified:* DOI and OpenAlex metadata verified; N breakdown and 0.30–0.35 SD confirmed via indexed NIH/NBER/Springer summaries and P19 citations (PDF host returned automated bot challenge).

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

**P9.** Crawfurd, L., Evans, D. K., Hares, S., & Sandefur, J. (2023). Live tutoring calls did not improve learning during the COVID-19 pandemic in Sierra Leone. *Journal of Development Economics*, 164, 103114. https://doi.org/10.1016/j.jdeveco.2023.103114
Cluster RCT across 25 schools in Sierra Leone (N = 4,399 primary pupils). Teacher calls + SMS raised educational activity indices (+0.268 / +0.288 SD) but yielded zero learning gain (maths -0.008 SD, language -0.027 SD). Call connection rates averaged 59% (government) and 41% (private), calls cost $40/pupil vs $2 for SMS, and shared household phones forced evening calls and parent answer-whispering.
*Verified:* full PDF read (21 pp).

**P10.** Febrianty, A., Majid, N. W. A., Azman, M. N. A., & Prestoza, M. J. R. (2026). Learning analytics in low-connectivity educational environments: A systematic review of offline-first and edge architectures. *Jurnal Varidika*, 39(1). https://doi.org/10.23917/varidika.v39i1.17273
PRISMA systematic review (1,539 screened, 35 studies included, 2020–2026). Documents three offline-first architectures (local hardware servers, PWA + service-worker buffers, on-device inference), finds 0/35 studies formally specified offline LA sync protocols or evaluated offline LA dashboards for secondary teachers in the Global South, and flags $300–500 smartphone assumptions that exclude rural pupils.
*Verified:* full PDF read (21 pp).

**P11.** Lu, X., Yang, Q., Wei, J., & Heffernan, N. T. (2025). From belief to evidence: Simpler immediate feedback improves language learning and confidence in semi-open-ended questions. *Frontiers in Education*, 10, 1654809. https://doi.org/10.3389/feduc.2025.1654809
Instructor survey (N = 60: 82.14% had platform access yet only 9.76% always gave immediate feedback; 85.71% believed CR+EF best vs 3.57% CR alone) + classroom RCT (N = 91 enrolled, 84 analysed). Simple correct-response (CR) feedback beat elaborated feedback (EF) on Posttest 2 (p = 0.03, effect size = 0.56; gain 25.00 vs 8.27) and took less time than answer-first (11.4s vs 18.8s, p = 0.01); EF negatively predicted gain on Posttest 2 (beta = -10.25, p = 0.04) and Posttest 3 (beta = -16.20, p = 0.02).
*Verified:* full PDF read (19 pp). Small sample, single task domain, short-term follow-up.

**P12.** Barrera-Osorio, F., & Zoido, P. Evaluating the impact of a tablet-based learning platform in Honduras. Innovations for Poverty Action, study 2021–2022. https://poverty-action.org/impact-tablet-based-learning-platform-honduras
Randomized evaluation, 102 schools, grades 7–9, offline Kolibri platform on tablets. "The platform had no impact on test scores." Likely reasons given: late delivery and too little teacher training.
*Verified:* project page opened. This is an evaluation summary, not a journal article.

**P13.** Piper, B., Zuilkowski, S. S., Kwayumba, D., & Strigel, C. (2016). Does technology improve reading outcomes? Comparing the effectiveness and cost-effectiveness of ICT interventions for early grade literacy in Kenya. *International Journal of Educational Development*, 49, 204–214. https://doi.org/10.1016/j.ijedudev.2016.03.006
Cluster RCT across 80 Kenyan schools (N = 1,560 endline Grade 2 pupils). Comparing structured pedagogy backed by low-cost instructional coach tablets ($0.10/pupil marginal ICT cost), teacher Tangerine:Class tablets ($3/pupil), and student e-readers ($40/pupil) showed all improved oral reading fluency (0.17–0.32 SD), but expensive student e-readers did not outperform the $0.10 coach-tablet structured pedagogy arm, and teacher tablets suffered ~90 minutes of login/password troubleshooting overhead.
*Verified:* full PDF read (11 pp).

**P14.** Sung, Y.-T., Chang, K.-E., & Liu, T.-C. (2016). The effects of integrating mobile devices with teaching and learning on students' learning performance: A meta-analysis and research synthesis. *Computers & Education*, 94, 252–275. https://doi.org/10.1016/j.compedu.2015.11.008
Meta-analysis of 110 experimental/quasi-experimental studies (108 analysed, N = 18,749 learners). Overall mobile learning effect g = 0.523; handhelds outperformed laptops (g = 0.591 vs g = 0.309, p < 0.001); primary/young pupils g = 0.636; CAI/self-directed testing g = 0.656; longer interventions (>6 months) dropped to g = 0.287 (p = 0.052).
*Verified:* full PDF read (24 pp).

**P15.** Outhwaite, L. A., Gulliford, A., & Pitchford, N. J. (2017). Closing the gap: Efficacy of a tablet intervention to support the development of early mathematical skills in UK primary school children. *Computers & Education*, 108, 43–58. https://doi.org/10.1016/j.compedu.2017.01.011
Four early-primary math studies (N = 133), building on Pitchford's Malawi RCT (d > 0.8), showed sustained 5-month gains (d = 0.3–3.3) with lowest-achieving pupils gaining most; identifies immediate feedback and retrieval-practice quizzes inside short structured sessions as key drivers.
*Verified:* full PDF read (16 pp). Small UK sample in the follow-up studies.

**P16.** Valk, J.-H., Rashid, A. T., & Elder, L. (2010). Using mobile phones to improve educational outcomes: An analysis of evidence from Asia. *International Review of Research in Open and Distributed Learning*, 11(1), 117–140. https://doi.org/10.19173/irrodl.v11i1.794
Synthesis of six mobile-learning projects across Asia (Philippines Project MIND +13.78% exam pass rate via SMS, Mongolia, Bangladesh, Thailand, India MILLEE). Shows mobile phones widen access where PCs/broadband are absent, while flagging handset cost, small screens, and English-script lock-in.
*Verified:* full PDF read (24 pp). Older pre-smartphone synthesis kept for cross-Asia baseline mechanisms.

**P17.** Angrist, N., de Barros, A., Bhula, R., Chakera, S., Cummiskey, C., DeStefano, J., Floretta, J., Kaffenberger, M., Piper, B., & Stern, J. (2021). Building back better to avert a learning catastrophe: Estimating learning loss from COVID-19 school shutdowns in Africa and facilitating short-term and long-term learning recovery. *International Journal of Educational Development*, 84, 102397. https://doi.org/10.1016/j.ijedudev.2021.102397
Models EGRA reading data across Ethiopia, Kenya, Liberia, Tanzania, and Uganda against a pre-COVID baseline where 87% of 10-year-olds in Sub-Saharan Africa could not read a simple story and 50% (67M) of ESAR children could not be reached remotely. Unmitigated 1-year grade-3 shocks compound to 2.8 years lost by grade 10, whereas targeted instruction (TaRL) and structured pedagogy deliver ~3 learning-adjusted years of schooling (LAYS) per US$100.
*Verified:* full PDF read (14 pp).

**P18.** Hossain, M. (2021). Unequal experience of COVID-induced remote schooling in four developing countries. *International Journal of Educational Development*, 85, 102446. https://doi.org/10.1016/j.ijedudev.2021.102446
Young Lives phone survey across Ethiopia (N = 4,010), India AP/TS (N = 2,464), Peru (N = 1,931), and Vietnam (N = 1,896). Logit regressions show having home internet increased the probability of experiencing remote schooling by 18 percentage points in Ethiopia, 16 in India, 8.4 in Peru, and 41 in Vietnam (all p < 0.001), alongside top-vs-bottom wealth gaps of 13, 16, 7.2, and 34 percentage points and rural disadvantages in all four countries.
*Verified:* full PDF read (10 pp).

**P19.** Acevedo Rebolledo, N., Almeyda Torres, G., Granada Donato, D., Lombardi, M., Oubiña, V., & Zoido Lobaton, P. (2026). Remote tutoring in language: Evidence from Paraguay. IDB / Universidad Torcuato Di Tella Working Paper 2026/02. https://doi.org/10.18235/0013975
Cluster RCT across 57 schools (171 school-grade clusters, N = 3,334 consented grades 4–6 students; 1,650 T / 1,684 C). Tutors sent SMS exercises 2 days prior, conducted twice-weekly 30-min phone sessions, and sent post-session SMS reflections (using WhatsApp only for families with data). Raised standardized Spanish scores by +0.113 SD ITT (+0.123 SD TOT, p < 0.01) across subgroups with 98% take-up; tutor value added explained 14.56% (~15%) of endline variance (top-quintile tutors +0.38 SD); cost $190/student ($137 marginal), benefit-cost ratio 34.7.
*Verified:* full PDF read (35 pp).

**P20.** Albornoz, F., Almeyda Torres, G., Lombardi, M., Oubiña, V., & Zoido Lobaton, P. (2026). Remote tutoring in Latin America. *Journal of Development Economics*, 179, 103687. https://doi.org/10.1016/j.jdeveco.2025.103687
Multi-country RCT across nearly 7,000 students in seven Latin American countries (Argentina, Brazil, El Salvador, Guatemala, Mexico, Paraguay, Peru; 2021–2023). Eight weeks of low-tech one-on-one phone/SMS differentiated tutoring improved mathematics scores by +0.20 SD across gender, age, and socioeconomic status, with lower baseline performers improving most on foundational operations.
*Verified:* DOI and OpenAlex metadata verified; results confirmed via IDB/RePEc working-paper summaries and P19 citations (repository PDF returned 403).

**P21.** Wong, L. J., & Mahmud, M. S. (2026). Technology acceptance of a low-device gamified learning approach in primary mathematics: Perceptions, attitudes, and achievement differences in Wayground Paper Mode. *International Journal of Learning, Teaching and Educational Research*, 25(8), 786–814. https://doi.org/10.26803/ijlter.25.8.31
Mixed-methods study of N = 162 Year 6 primary pupils in Kuala Lumpur using printed QR response cards without student devices. Overall acceptance was high (perception M = 4.03/5, attitude M = 4.07/5; 84% liked simultaneous no-device participation), yet Kruskal-Wallis tests (H = 39.48 and 23.29, p < 0.001) revealed sharp gaps where competitive leaderboards frustrated low/moderate achievers.
*Verified:* full PDF read (29 pp).

**P22.** George, S., Karalam, S. R. B., & Bhavana, S. (2026). Digital pathways to menstrual health education in India: Bridging urban-rural gaps through inclusive technologies. *Social Sciences & Humanities Open*, 103367. https://doi.org/10.1016/j.ssaho.2026.103367
Narrative review synthesizing NFHS-5, UNICEF, and UDISE+ indicators for India and South Asia: rural vs urban adolescent girls' smartphone ownership is 38% vs 62%, internet access is 25% vs 55%, school ICT labs stand at 24% rural vs 57% urban, and broader female/adolescent internet access lags across Pakistan (23%), Bangladesh (35%), and Nepal (40%) vs Sri Lanka (68%), compounded by male-supervised shared phones.
*Verified:* full PDF read (12 pp).

**P23.** Ndegwa, A., Gutiérrez-Colon, M., & Ngugi, P. (2026). Evaluating a gamified Kiswahili learning app: User perceptions, cultural integration, and engagement in digital language learning. *Social Sciences & Humanities Open*, 102987. https://doi.org/10.1016/j.ssaho.2026.102987
Qualitative evaluation of *Tusome na Tucheze*, a Kiswahili primary literacy app in Kenya (9 pre-use and 8 post-use Kenyan experts/teachers). Notes Kiswahili's 150M+ speakers remain underrepresented in digital early-grade tools; post-use evaluation identified continuous internet dependency as a critical barrier for rural schools and explicitly called for offline/low-data operation.
*Verified:* full PDF read (8 pp). Small expert panel, no pupil RCT.

**P24.** Mabalane, D. K. (2026). Digital schooling reform and human development outcomes: Evidence from Botswana's national mobile learning initiative. *Social Sciences & Humanities Open*, 103493. https://doi.org/10.1016/j.ssaho.2026.103493
Survey of Form 5 secondary students in Botswana (N = 252 + 86 cohort analysis). Daily mobile-learning users achieved higher academic scores than rare users (68.4% vs 59.7%, p = 0.001; digital literacy correlation r = 0.62), while qualitative/structural findings documented load-shedding power cuts and weak connectivity continuing to exclude poorer rural schools despite laptop rollouts.
*Verified:* full PDF read (10 pp).

**P25.** Mara, A. A. P. T., Surjono, H. D., & Yuniarti, N. (2026). Progressive web applications as a tool to achieve SDG 4 and SDG 8: Evidence from vocational schools in marginalized regions. *Journal of Education and e-Learning Research*, 13(2), 42–53. https://doi.org/10.20448/jeelr.v13i2.8562
Mixed-methods evaluation across 7 vocational schools in Sumba, Indonesia (327 students and 41 teachers/principals; 214 in quantitative pre/post sample). Deploying an offline-first PWA raised stable learning-material access from 46.2% to 87.9% (68.1% used offline mode), usability from 2.9 to 4.4/5, and female participation from 48% to 73% (p < 0.01), narrowing the digital divide from 41% to 12% (p < 0.001) on budget Android devices while noting stricter iOS PWA limits.
*Verified:* full PDF read (12 pp).

**P26.** Hernández, R. M., Garay Canales, H. B., Vértiz Querevalú, P. J., et al. (2026). Mobile learning as an intervention to address low English proficiency among high school students in Northern Peru. *World Journal of English Language*, 16(3), 205. https://doi.org/10.5430/wjel.v16n3p205
Quasi-experimental study of N = 120 public high-school students across Tumbes, Piura, and Tarapoto (60 experimental / 60 control). Contextualized mobile learning raised post-test scores from 10.2 to 14.0 (t = 6.23 vs control, p < 0.001), while student interviews highlighted unstable signal, lack of mobile data, and parental suspicion that phone use is merely play.
*Verified:* full PDF read (10 pp).

**P27.** Hoque, M. S., Poly, N. A., Khan, M. F. R., Dhanyamol, C., Ramesh, M., & Illakiya, K. (2026). Family Lingo: A tri-generational participant analysis of a mobile-mediated English language acquisition intervention for Generation Z learners in Tamil Nadu, India. *International Journal of Learning, Teaching and Educational Research*, 25(9), 424–450. https://doi.org/10.26803/ijlter.25.9.17
36-month single-arm intervention across 18 districts in Tamil Nadu (N = 383 learners aged 13–18 and 1,121 family members). Produced medium pre/post CEFR gains (d = 0.55–0.65, p < 0.001) equivalent across rural government (n = 186) and urban private schools (p = 0.955); 10% (38 pupils) depended on borrowed phones from family members, alongside electricity and connectivity interruptions.
*Verified:* full PDF read (27 pp). No untreated control group.

**P28.** Kotze, J., Fleisch, B., & Taylor, S. (2019). Alternative forms of early grade instructional coaching: Emerging evidence from field experiments in South Africa. *International Journal of Educational Development*, 66, 203–213. https://doi.org/10.1016/j.ijedudev.2018.09.004
Midline RCT evaluation of South Africa's Early Grade Reading Study II showing virtual instructional coaching paired with preloaded tablet teaching resources achieved similar instructional and literacy improvements after 1 year to costlier on-site human coaching.
*Verified:* Elsevier first-page PDF and abstract read (1-page subscription preview).

**P29.** Pimmer, C., Brühlmann, F., Odetola, T. D., Oluwasola, D. O., Dipeolu, O., & Ajuwon, A. J. (2019). Facilitating professional mobile learning communities with instant messaging. *Computers & Education*, 128, 102–112. https://doi.org/10.1016/j.compedu.2018.09.005
Quasi-experimental study in Nigeria (n = 114) demonstrating that instant messaging (WhatsApp) already acts as an accessible mobile distribution and peer-support channel in infrastructure-constrained settings.
*Verified:* Elsevier first-page PDF and abstract read (1-page subscription preview).

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

### Global and regional connectivity and foundational learning

| ID | Date | Organization / Survey | Report | Key verified figure |
|---|---|---|---|---|
| N52 | 2025–2026 | GSMA | [The State of Mobile Internet Connectivity](https://www.gsma.com/somic/) | ~3.1 billion people live inside mobile broadband coverage without using mobile internet (usage gap, 38% of world population); ~300 million live without coverage (3–4%); ~3.4 billion remain offline globally. |
| N53 | Dec 2020 | UNICEF & ITU | [How many children and young people have internet access at home?](https://www.unicef.org/reports/how-many-children-and-young-people-have-internet-access-at-home) | School-age children (3–17) lacking home internet by region: West & Central Africa 95% (194M), East & Southern Africa 88% (191M), South Asia 88% (449M), Latin America & the Caribbean 49% (74M). |
| N54 | 2025 | UNESCO GEM Report & African Union | Spotlight on Africa (*Lead for foundational learning*) | ~10.8% of children in Africa reach minimum proficiency in reading and mathematics by end of primary school; ~1 in 5 primary-age children are out of school. |
| N55 | Jan 2025 | Pratham | [ASER 2024 (Rural India)](https://asercentre.org/aser-2024/) | Nationwide rural survey (~650,000 children across 605 districts): government-school Class 3 pupils reading a Class 2 text rose to 23.4%, Class 5 to 44.8%; ~90% of 14–16-year-olds have a smartphone at home, but personal ownership is ~27% (age 14) to ~38% (age 16). |
| N56 | 2025 | INEI Peru | [ENAHO Q1 2025](https://www.gob.pe/institucion/inei/noticias/1018260-inei-58-9-de-los-hogares-del-pais-tiene-acceso-a-internet-en-el-primer-trimestre-de-2025) | 58.9% of Peruvian households had internet access nationally in Q1 2025, vs only 20.5% in rural areas. |
| N57 | 2025 | INEI Peru | [ENAHO Q2 2025](https://www.gob.pe/institucion/inei/noticias/1045237-el-60-1-de-los-hogares-tiene-conexion-a-internet) | 60.1% of Peruvian households had internet access nationally in Q2 2025, vs 23.6% in rural areas. |
| N58 | 2025 | Cetic.br / NIC.br | TIC Kids Online Brasil 2025 (n = 2,370, ages 9–17) | Overall youth internet use ~92%, while school-environment internet access fell from 51% (2024) to 37% (2025) after classroom mobile phone restrictions. |
| N59 | 2025 | IBGE (Brazil) | PNAD Contínua — Módulo TIC 2025 | 95.0% of Brazilian households (~76 million homes) had internet access in 2025 and >90% of population aged 10+ used the internet. |

The percentages "do not use the internet" in section 1 are 100 minus the figures in N44 and N45.

## 4. Known problems in this evidence

- **Home versus school.** Many news cases describe schools without signal during online exams, while classroom phone restrictions (e.g., Brazil N58) and household sharing (N55, P9, P27, N47) create offline bottlenecks even inside connected countries. Home access rates alone overstate student usability for study.
- **"Household has internet access" is a loose measure.** N46's 91.66% counts a household if any member went online, and ASER 2024 (N55) shows 90% household smartphone presence alongside 27–38% personal youth ownership.
- **Regional data gaps and aging baselines.** UNICEF/ITU child home-internet breakdowns (N42, N53) date from December 2020; we pair them with 2024–2026 national/regional surveys (N52, N54–N59, N44–N51) while noting not every Sub-Saharan African or South Asian country publishes annual rural pupil ICT microdata.
- **Paywalled subscription PDFs.** Elsevier previews for P28 and P29 gave first-page PDFs + full abstracts only, and P2/P20 OA repository hosts returned bot challenges (findings cross-checked via indexed working-paper/institutional summaries and citing full PDF P19).
- **No paper on Titip's exact mechanism.** Nothing found tests a compact checksummed SMS/paper result code (plus per-choice distractor counts) fed back to a teacher from a single self-contained HTML lesson. That integration is our design and remains untested on real learners.
