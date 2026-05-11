import type { Note } from '../data/notes'

export const endometrialCancer: Note = {
  id: 'endometrial-cancer',
  title: 'Endometrial Cancer',
  subtitle: '2WW criteria, endometrial thickness thresholds, HRT and Lynch syndrome',
  tags: ['gynaecology', 'oncology'],

  body: 'endometrial cancer uterine cancer PMB postmenopausal bleeding IMB intermenstrual bleeding TV USS transvaginal ultrasound endometrial thickness hysteroscopy 2WW two week wait oestrogen unopposed tamoxifen obesity PCOS anovulatory Lynch syndrome HNPCC colorectal cancer TAH BSO total abdominal hysterectomy bilateral salpingo-oophorectomy brachytherapy HRT hormone replacement risk',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Endometrial Cancer — Risk Factors',
      items: [
        'Rising incidence: driven by increasing obesity and aging population',
        'Key mechanism: UNOPPOSED OESTROGEN (without progestogen protection) — stimulates endometrial proliferation',
        'Risk factors: obesity (peripheral oestrogen conversion), tamoxifen use (oestrogen agonist in endometrium despite being antagonist in breast), late menopause, early menarche, anovulatory cycles (PCOS), nulliparity, diabetes mellitus, HRT (oestrogen-only in intact uterus)',
        'PROTECTIVE: combined HRT (reduces endometrial cancer risk by ~30%), COCP, progestogen-releasing IUS',
        'Lynch syndrome (HNPCC): MSH2/MLH1/MSH6/PMS2 mutations; up to 40–60% lifetime risk of endometrial cancer; also colorectal, ovarian, urinary tract cancers; screen ALL diagnosed endometrial cancers for Lynch',
      ],
    },

    { type: 'heading', level: 2, text: '2WW Referral Criteria' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'When to Refer Urgently',
      items: [
        '2WW referral: postmenopausal bleeding (PMB) — defined as >1 year after last menstrual period, usually in women >55, NOT on HRT; any PMB requires urgent investigation',
        '2WW referral: PMB in patient on HRT if bleeding persists >6 weeks after stopping HRT (bleeding in first 6 months of starting HRT is common — investigate if beyond this)',
        'Direct access urgent TV USS pelvis: unexplained postmenopausal vaginal discharge, visible haematuria, thrombocytosis (raised platelets) in postmenopausal woman',
        'Direct access urgent outpatient hysteroscopy: premenopausal women with IMB/irregular bleeding + endometrial cancer risk factors; or abnormal endometrial thickness on USS',
        'Consider USS premenopausal only if pain or clinical suspicion of structural pathology (fibroid, endometriosis, ovarian mass) — USS is less useful for endometrial assessment premenopausal',
      ],
    },

    { type: 'heading', level: 2, text: 'Transvaginal USS — Endometrial Thickness Thresholds' },

    {
      type: 'table',
      headers: ['Patient Group', 'Endometrial Thickness', 'Action'],
      rows: [
        ['Postmenopausal, NOT on HRT (symptomatic)', 'ET ≤4 mm', 'Reassuring — malignancy very unlikely; can manage in primary care if isolated PMB with ET ≤4 mm and normal uterus; safety-net for recurrent bleeding'],
        ['Postmenopausal, NOT on HRT', 'ET >4 mm (symptomatic)', 'Refer for direct-access outpatient hysteroscopy OR 2WW depending on clinical picture and risk factors'],
        ['Postmenopausal, SEQUENTIAL HRT', 'ET >7 mm', 'Refer for outpatient hysteroscopy'],
        ['Postmenopausal, CONTINUOUS HRT', 'ET >5 mm', 'Refer for outpatient hysteroscopy'],
        ['If below threshold but HRT implicated in symptoms', 'Any', 'Trial: stop HRT for 6 weeks, or modify (add/adjust progestogen or Mirena IUS); re-evaluate'],
        ['Premenopausal', 'Any', 'USS less useful; use symptoms + clinical context to guide hysteroscopy referral'],
      ],
      caption: 'The endometrial thickness measurement should always be interpreted alongside the clinical history and symptoms — not in isolation.',
    },

    { type: 'heading', level: 2, text: 'Treatment' },

    {
      type: 'list',
      items: [
        'Surgery: primary treatment for most endometrial cancer — total abdominal hysterectomy + bilateral salpingo-oophorectomy (TAH BSO) ± lymph node dissection (depending on stage and grade)',
        'Lymph node dissection + omentectomy: for higher-grade or advanced disease',
        'Adjuvant brachytherapy (internal vaginal radiotherapy): reduces local recurrence for intermediate-risk disease',
        'Chemotherapy: carboplatin + paclitaxel — for advanced or high-grade endometrial cancer',
        'Specialist follow-up: at least 5 years post-treatment',
        'Hormone therapy post-treatment: CANNOT use any form of HRT — hormone-sensitive cancer; risk of recurrence',
        'Lynch syndrome screening: immunohistochemistry + microsatellite instability (MSI) testing on ALL endometrial cancer specimens; genetic counselling and cascade testing for family members',
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'HRT Notes — Endometrial Risk',
      items: [
        'Oestrogen-only HRT in a woman with a uterus: significantly increased endometrial cancer risk — ALWAYS add progestogen (continuous or sequential)',
        'Combined HRT (E + P continuous): actually REDUCES endometrial cancer risk by ~30%',
        'Tamoxifen: ER antagonist in breast but ER agonist in endometrium — increases endometrial cancer risk; women on tamoxifen with any abnormal uterine bleeding must be referred urgently',
        'After endometrial cancer treatment: NO HRT permitted due to hormone-sensitive nature of the tumour',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        '2WW gynaecology (PMB): UHDB Queen\'s Hospital Burton gynaecology oncology — via e-RS 2WW pathway',
        'Alternative 2WW: Good Hope Hospital (UHB) gynaecology oncology',
        'Direct access TV USS: arrange via UHDB community radiology — request "transvaginal pelvic ultrasound; ?endometrial pathology; PMB"',
        'Outpatient hysteroscopy: UHDB Burton gynaecology clinic — refer via e-RS',
        'Lynch syndrome genetics: UHDB Burton or QEHB Birmingham genetics — via GP referral; include family history details',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG12 — Suspected Cancer 2WW', url: 'https://www.nice.org.uk/guidance/ng12' },
        { label: 'NICE NG121 — Endometrial Cancer', url: 'https://www.nice.org.uk/guidance/ng121' },
        { label: 'RCOG — PMB Guideline', url: 'https://www.rcog.org.uk/guidance/browse-all-guidance/green-top-guidelines/postmenopausal-bleeding-green-top-guideline-no-67/' },
        { label: 'Target Ovarian Cancer', url: 'https://targetovariancancer.org.uk/' },
      ],
    },
  ],
}
