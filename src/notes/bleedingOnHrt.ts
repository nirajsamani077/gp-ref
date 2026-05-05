import type { Note } from '../data/notes'

export const bleedingOnHrt: Note = {
  id: 'bleeding-on-hrt',
  title: 'Bleeding on HRT',
  subtitle: 'Assessment, endometrial thickness thresholds, progestogen adjustment and referral',
  tags: ['gynaecology', 'menopause'],

  body: 'bleeding HRT hormone replacement therapy unscheduled breakthrough bleeding sequential combined continuous HRT endometrial thickness transvaginal ultrasound TVUSS endometrial cancer BMI PCOS tamoxifen endometrial hyperplasia referral gynaecology progestogen Utrogestan micronised progesterone Mirena IUS Femoston Premique side effects adherence',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Unscheduled Bleeding on HRT — Overview',
      items: [
        'Common in first 3–6 months of HRT — especially if heavy/irregular periods before starting',
        'Assess: type of HRT (sequential vs continuous combined), bleeding pattern, adherence, symptoms',
        'If bleeding within first 3–6 months and no risk factors: reassure and review',
        'If bleeding persists >6 months, is troublesome, or unexpected → investigate',
        'Always consider endometrial hyperplasia/carcinoma — especially with risk factors',
      ],
    },

    { type: 'heading', level: 2, text: 'Initial Assessment' },

    {
      type: 'list',
      items: [
        'Full history: type of HRT, duration, adherence (missed doses cause breakthrough bleeding)',
        'Examination: pelvic exam, speculum (exclude cervical or vaginal cause)',
        'Swabs: high vaginal swab and endocervical swab (exclude STI/infection)',
        'Smear status: ensure up to date',
        'Endometrial cancer risk factors: BMI ≥30, DM, PCOS, tamoxifen use, family history',
        'Consider a 6-week HRT-free trial to see if bleeding stops (if clinically appropriate)',
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Endometrial Cancer Risk Factors — Lower Threshold for Referral',
      items: [
        'BMI ≥30 (oestrogen produced peripherally in adipose tissue — unopposed effect)',
        'Type 2 diabetes',
        'PCOS (chronic anovulation → unopposed oestrogen)',
        'Tamoxifen use',
        'Family history of endometrial or Lynch syndrome-related cancer',
        'If any risk factor present: lower threshold for TVUSS and gynaecology referral',
      ],
    },

    { type: 'heading', level: 2, text: 'Endometrial Thickness Thresholds (TVUSS)' },

    {
      type: 'table',
      headers: ['HRT Type', 'Endometrial Thickness', 'Action'],
      rows: [
        ['Sequential combined HRT (oestrogen cycles + progestogen for part of cycle)', '>7 mm', 'Refer gynaecology — endometrial assessment (hysteroscopy ± biopsy)'],
        ['Sequential combined HRT', '≤7 mm', 'Modify progestogen: increase dose, extend duration to 21 days, or switch to Mirena IUS'],
        ['Continuous combined HRT (both hormones daily — for post-menopausal women)', '>5 mm', 'Refer gynaecology — especially if bleeding does NOT stop after stopping HRT (2WW referral)'],
        ['Continuous combined HRT', '≤5 mm', 'Modify progestogen: increase dose/strength, reduce oestrogen, consider switching to sequential or tibolone'],
      ],
      caption: 'TVUSS is the investigation of choice for assessment of endometrial thickness in HRT-related bleeding. Request urgently if >12 months post-menopause with any unscheduled bleeding.',
    },

    { type: 'heading', level: 2, text: 'Managing Progestogen Side Effects' },

    {
      type: 'list',
      items: [
        'Progestagenic side effects (often cyclical with sequential HRT): fluid retention, breast tenderness, headaches, mood changes',
        'Androgenic side effects (more with older progestogens — NET, levonorgestrel): acne, greasy skin, mood changes',
        'Solution: switch to micronised progesterone (Utrogestan 100–200 mg OD/BD, minimum 12 days per cycle) — more natural, fewer androgenic effects, better mood profile',
        'Adding Mirena IUS: provides progestogen locally (minimal systemic absorption) with excellent endometrial protection and high amenorrhoea rate',
        'Oestrogen SE (breast tenderness, bloating, nausea): try lower oestrogen dose (Femoston Conti 0.5/2.5 mg or Premique Low Dose)',
        'Adding oral progestogen to transdermal oestrogen: Utrogestan 100 mg OD for 12–14 days/cycle (sequential) or continuous 100 mg OD',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'TVUSS (transvaginal ultrasound): request via radiology at UHDB Queen\'s Hospital Burton or Walsall Manor Hospital',
        'Gynaecology referral (routine — abnormal TVUSS or persistent bleeding): UHDB Burton or Walsall Manor Hospital',
        'Urgent / 2WW gynaecology (post-menopausal bleeding not stopping after HRT cessation or ET >5 mm on continuous HRT): e-RS 2WW to gynaecology at UHDB Burton',
        'Patient may prefer alternative local site — discuss at consultation',
        'Complex HRT queries: British Menopause Society (BMS) recommendations; local menopause clinic if available',
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Safety Netting',
      items: [
        '2WW urgent gynaecology: post-menopausal bleeding (>12 months after last period) at any time — must be investigated even on HRT',
        'Urgent same-day: heavy post-menopausal bleed causing haemodynamic instability',
        'Red flags: bleeding not settling after modification of HRT, ET >5 mm on continuous HRT, any abnormal features on hysteroscopy',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Menopause', url: 'https://cks.nice.org.uk/topics/menopause/' },
        { label: 'NICE NG23 — Menopause', url: 'https://www.nice.org.uk/guidance/ng23' },
        { label: 'British Menopause Society', url: 'https://thebms.org.uk/' },
        { label: 'NHS — HRT Bleeding', url: 'https://www.nhs.uk/medicines/hormone-replacement-therapy-hrt/' },
      ],
    },
  ],
}
