import type { Note } from '../data/notes'

export const bleedingOnContraception: Note = {
  id: 'bleeding-on-contraception',
  title: 'Unscheduled Bleeding on Contraception',
  subtitle: 'Structured assessment, management by method, when to investigate and refer',
  tags: ['contraception', 'gynaecology'],

  body: 'unscheduled bleeding breakthrough bleeding contraception COCP combined pill POP progestogen-only pill implant depot injection Depo-Provera IUS Mirena levonorgestrel IUD copper coil LNG-IUS endometrial cancer risk smear STI chlamydia transvaginal ultrasound TVUSS tranexamic acid compliance check threads cervical ectropion cervical polyp postcoital bleeding IMB intermenstrual bleeding endometrial biopsy pipelle hysteroscopy FSRH 2WW referral',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Unscheduled Bleeding — Starting Principles',
      items: [
        'Unscheduled bleeding (USB) is extremely common in the first 3 months of any hormonal contraception — counsel ALL patients before starting that this is expected and usually self-limiting',
        'USB in the first 3 months: reassure, check compliance, exclude pregnancy — most cases do not require investigation',
        'USB persisting beyond 3 months OR at any time with risk factors for endometrial pathology (age >45, obesity/BMI ≥30, DM, PCOS, tamoxifen): always investigate',
        'Always think: is this a contraception side effect or does this patient have an underlying condition that the contraception was masking?',
      ],
    },

    { type: 'heading', level: 2, text: 'Structured Assessment — What Every GP Should Check First' },

    {
      type: 'table',
      headers: ['Check', 'Detail', 'Why'],
      rows: [
        ['Compliance', 'Missed pills? Late ring insertion? Irregular injection? Drug interactions (enzyme inducers)?', 'Most common cause of USB on hormonal contraception — must be excluded before investigating'],
        ['Pregnancy test', 'All patients — even on LARC', 'Rare but ectopic pregnancy must be excluded; heavy USB can be a presenting feature of miscarriage'],
        ['Cervical smear', 'Check smear status and result', 'Overdue or abnormal smear may explain bleeding; cervical ectropion and cervical polyps visible on speculum'],
        ['STI screen', 'Chlamydia + gonorrhoea NAAT swabs (endocervical)', 'Chlamydial cervicitis commonly causes IMB and PCB; a missed diagnosis with ongoing inflammation explains persistent USB'],
        ['IUS/IUD threads', 'Can patient feel threads? Any displacement?', 'Displaced or perforated IUS/IUD = irregular bleeding + failed contraception + risk of ectopic; urgent examination if threads not felt'],
        ['Pattern of bleeding', 'Intermenstrual (mid-cycle), postcoital, irregular, or heavy?', 'PCB = always refer for cervical assessment; IMB in older women = higher cancer risk; heavy USB = haematological cause possible'],
      ],
    },

    { type: 'heading', level: 2, text: 'Common Benign Findings at Speculum Exam' },

    {
      type: 'list',
      items: [
        'Cervical ectropion (erosion): columnar epithelium from the endocervix extends onto the visible ectocervix — red, velvety, bleeds on contact; very common on COCP (high oestrogen) and in pregnancy; NOT a premalignant condition',
        'Ectropion management: if asymptomatic → reassure; if causing significant PCB or discharge → refer gynaecology for cryotherapy or silver nitrate cautery; switching to lower-oestrogen COCP may reduce ectropion',
        'Cervical polyp: smooth, red, pedunculated; arises from cervical canal; usually benign but must be sent for histology after removal; causes IMB and PCB; remove by gynaecology (outpatient avulsion) or refer',
        'Cervicitis: inflamed, friable-looking cervix with mucopurulent discharge; check chlamydia/gonorrhoea; treat per STI result; do NOT cauterise cervicitis — treat the infection',
        'If anything appears suspicious on speculum (irregular, raised, bleeding contact lesion) → 2WW cervical cancer referral regardless of smear status',
      ],
    },

    { type: 'heading', level: 2, text: 'Management by Contraception Type' },

    {
      type: 'table',
      headers: ['Method', 'First 3 Months', 'After 3 Months (persistent USB)', 'Useful Strategies'],
      rows: [
        ['COCP', 'Reassure; check compliance; run packs back-to-back for 3 months to reduce withdrawal bleeds', 'Speculum + swabs + smear; consider TVUSS; refer if persists or PCB', 'Switch progestogen type (norethisterone → levonorgestrel → drospirenone); increase oestrogen dose (20→30→35 mcg EE)'],
        ['POP (desogestrel / norethisterone)', 'Reassure — spotting very common; check compliance', 'Speculum + swabs; consider switching POP type or to COCP/LARC if suitable', 'Desogestrel (Cerazette) causes more irregular bleeding than traditional POP; norethisterone-based POP has fewer bleeding irregularities for some'],
        ['Implant (etonogestrel)', 'Very common; up to 50% have irregular bleeding; reassure; can add COCP 30 mcg for 3 months if causing distress', 'Speculum + swabs; TVUSS if persisting; consider removal if unacceptable to patient', 'Adding COCP temporarily to stabilise pattern — check UKMEC and interactions first; ~50% eventually become amenorrhoeic'],
        ['Depot (Depo-Provera)', 'Spotting common in first injection cycle; reassure', 'Review after 2nd injection; TVUSS if persisting or changing pattern', 'High eventual amenorrhoea rate (70% by 2 years); fertility return may take up to 18 months after stopping — counsel before starting'],
        ['LNG-IUS (Mirena/Levosert)', 'Spotting and light irregular bleeding for first 3–6 months; very common; reassure; check threads', 'Check threads (exclude displacement); speculum + swabs; TVUSS; refer if endometrial thickness >4mm or persisting', 'High eventual amenorrhoea rate at 1 year; Mirena 52mg vs Levosert 52mg — both have equivalent efficacy; thread check at 6 weeks then annually'],
        ['IUD (copper)', 'Copper IUD does NOT affect bleeding in the same way — it tends to INCREASE period flow and cramping', 'If heavy/irregular — TVUSS to exclude displacement; consider switching to LNG-IUS (reduces blood loss by up to 90%)', 'Tranexamic acid 1g TDS days 1–4 of period for heavy periods; mefenamic acid for dysmenorrhoea; NSAIDs reduce blood loss by ~20%'],
      ],
      caption: 'Adding 30 mcg COCP (e.g. Microgynon 30) continuously to implant or Depo-Provera for 3 months is a useful short-term strategy. Always check UKMEC eligibility and enzyme-inducer interactions before doing so.',
    },

    { type: 'heading', level: 2, text: 'When to Investigate Further — The Decision Tree' },

    {
      type: 'list',
      items: [
        'Examination: pelvic examination + speculum (look for ectropion, polyp, STI, malposition of IUS)',
        'Swabs: endocervical NAAT for chlamydia and gonorrhoea + high vaginal swab for BV/candida — do alongside speculum',
        'TVUSS pelvis: if USB persists >3 months; if IMB + age >40; if any endometrial cancer risk factors (obesity, DM, PCOS, tamoxifen); if displaced IUS suspected',
        'Endometrial biopsy (Pipelle): if TVUSS shows endometrial thickness >4mm (postmenopausal) or >12mm (premenopausal with persistent IMB); arranged via gynaecology outpatient',
        'Hysteroscopy: gold standard for intrauterine pathology; direct visualisation and biopsy; arranged by gynaecology',
        'CA125: only if ovarian pathology suspected on USS or if >50 with bloating — not a routine test for USB on contraception',
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Red Flags — Refer Urgently',
      items: [
        '2WW gynaecology: postmenopausal bleeding (any bleeding ≥12 months after last period) at any time; intermenstrual bleeding in women ≥45 not responding to treatment or with risk factors; postcoital bleeding NOT explained by ectropion/STI',
        'Haemodynamic instability from heavy USB: same-day secondary care; IV access, FBC, cross-match',
        'Unable to feel IUS threads: examine + pregnancy test immediately; exclude ectopic; arrange USS same week to locate device',
        'Suspicious cervical lesion on speculum: 2WW cervical cancer referral regardless of recent normal smear',
        'Bloating + IMB + pelvic mass in woman over 50: urgent ovarian cancer pathway',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Resources — Darwin Practice, Lichfield',
      items: [
        'TVUSS: community radiology at UHDB Queen\'s Hospital Burton or Walsall Manor Hospital; request "transvaginal pelvic ultrasound; unscheduled bleeding on contraception; please assess endometrium and pelvis"',
        'Gynaecology referral (routine — USB not responding): UHDB Burton or Walsall Manor Hospital via e-RS; include TVUSS result, method, duration, smear status, swab results',
        'STI screening: Staffordshire Sexual Health Service Lichfield — 01543 444100; umbrella.nhs.uk',
        'Contraception advice: FSRH helpline 0300 300 0014; local LARC services — Darwin Practice or GUM clinic',
        '2WW gynaecology (urgent): UHDB Burton or Good Hope Hospital (UHB) 2WW pathway via e-RS',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'FSRH — Unscheduled Bleeding Guidance', url: 'https://www.fsrh.org/standards-and-guidance/documents/fsrh-clinical-guidance-unscheduled-bleeding-on-hormonal-contraception/' },
        { label: 'NICE CKS — Contraception', url: 'https://cks.nice.org.uk/topics/contraception-progestogen-only-methods/' },
        { label: 'NICE CKS — Intermenstrual Bleeding', url: 'https://cks.nice.org.uk/topics/intermenstrual-and-postcoital-bleeding/' },
        { label: 'NHS — Contraception Guide', url: 'https://www.nhs.uk/conditions/contraception/' },
      ],
    },
  ],
}
