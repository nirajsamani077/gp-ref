import type { Note } from '../data/notes'

export const bleedingOnContraception: Note = {
  id: 'bleeding-on-contraception',
  title: 'Unscheduled Bleeding on Contraception',
  subtitle: 'Assessment, management by contraception type and when to refer',
  tags: ['contraception', 'gynaecology'],

  body: 'unscheduled bleeding breakthrough bleeding contraception COCP combined pill POP progestogen-only pill implant depot injection Depo-Provera IUS Mirena levonorgestrel IUD copper coil LNG-IUS endometrial cancer risk smear STI chlamydia transvaginal ultrasound TVUSS tranexamic acid compliance check threads',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Unscheduled Bleeding — Overview',
      items: [
        'Common in first 3 months of starting or changing any hormonal contraception — often self-resolving',
        'Always: check compliance (missed doses are the most common cause), exclude pregnancy, check smear, screen for STI',
        'Assess: type of contraception, duration of use, bleeding pattern, associated symptoms',
        'If IUS/IUD: check threads are present (displaced coil can cause bleeding + pain + pregnancy risk)',
        'Endometrial cancer risk factors: BMI ≥30, DM, PCOS, tamoxifen — lower threshold for investigation',
      ],
    },

    { type: 'heading', level: 2, text: 'Management by Contraception Type' },

    {
      type: 'table',
      headers: ['Type', 'First 3 Months', 'After 3 Months', 'Bleeding Pattern Notes'],
      rows: [
        ['COCP', 'Reassure + check compliance; offer tranexamic acid for heavy bleeding; run packs back-to-back ×3 months; can increase oestrogen (30→35 mcg) or change progestogen', 'Examine; swabs; smear if due; TVUSS pelvis + referral if persistent', '1 in 5 women have changes in first 3 months; usually settles long-term'],
        ['POP (desogestrel / traditional)', 'Reassure; check compliance; can try different POP (desogestrel vs. traditional norethisterone)', 'Consider switching to COCP (if suitable), LARC, or adding 30 mcg COCP continuously to existing POP; gynaecology if persistent', '1 in 3 women have change which may not settle; desogestrel (Cerazette) may have more breakthrough bleeding than traditional POP'],
        ['Implant (etonogestrel)', 'Reassure (very common in first 3 months); can add 30 mcg COCP continuous for 3 months to stabilise bleeding', 'TVUSS if persistent; check compliance with any other guidance; consider removal if unacceptable to patient', 'About half become amenorrhoeic at 1 year; unpredictable bleeding initially very common'],
        ['Depot injection (Depo-Provera)', 'Reassure; spotting common in first 3 months', 'Consider stopping after 2 injections if persistent and unacceptable; TVUSS if investigation needed', 'Similar pattern to implant; amenorrhoea rate ~50% at 1 year; fertility may take up to 18 months to return'],
        ['IUS (Mirena LNG-IUS)', 'Reassure; spotting and light irregular bleeding very common for first 3–6 months', 'Check threads; examine; smear; TVUSS; referral if persistent or abnormal', 'High eventual amenorrhoea rate; similar spotting pattern to implant initially; threads check essential'],
        ['IUD (copper)', 'Reassure (copper IUD often makes periods heavier and more painful)', 'If unacceptable: consider switching to LNG-IUS (Mirena) — reduces bleeding significantly; TVUSS if irregular', 'No hormonal effect; regular periods continue but often heavier; tranexamic acid can help with heavy periods'],
      ],
      caption: 'Adding 30 mcg COCP (e.g. Microgynon 30) continuously to a LARC (implant, Depo-Provera or Mirena): a useful short-term strategy to stabilise bleeding in first 3 months — check UKMEC criteria and drug interactions first.',
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'When to Investigate Further (>3 months or Red Flags)',
      items: [
        'Examination: pelvic exam + speculum (exclude cervical ectropion, polyp, STI)',
        'Swabs: high vaginal swab + endocervical (chlamydia/gonorrhoea screen)',
        'Smear: ensure up to date (abnormal smear could explain irregular bleeding)',
        'TVUSS: if symptoms persist >3 months, any endometrial cancer risk factors, or intermenstrual bleeding with IUS/IUD',
        'Gynaecology referral: persistent bleeding >3 months despite modification, TVUSS showing thickened endometrium, or postcoital bleeding',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Resources — Darwin Practice, Lichfield',
      items: [
        'TVUSS: radiology at UHDB Queen\'s Hospital Burton or Walsall Manor Hospital',
        'Gynaecology referral: UHDB Burton or Walsall Manor Hospital via e-RS',
        'STI screening: Staffordshire Sexual Health Service — 01543 444100 (Lichfield) or online at umbrella.nhs.uk',
        'Complex contraception advice: FSRH helpline 0300 300 0014; SRH clinic Lichfield',
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Safety Netting',
      items: [
        '2WW urgent gynaecology: post-menopausal bleeding at any time; intermenstrual bleeding >45 years not responding to treatment; high BMI + irregular bleeding + DM/PCOS',
        'Same-day: heavy bleeding causing haemodynamic instability, unable to feel IUS threads (exclude pregnancy and displaced coil)',
        'Red flags: postcoital bleeding (PV bleeding after sex) — exclude cervical pathology; blood-tinged discharge with IUS',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'FSRH — Unscheduled Bleeding Guidance', url: 'https://www.fsrh.org/standards-and-guidance/documents/fsrh-clinical-guidance-unscheduled-bleeding-on-hormonal-contraception/' },
        { label: 'NICE CKS — Contraception', url: 'https://cks.nice.org.uk/topics/contraception-progestogen-only-methods/' },
        { label: 'NHS — Contraception Guide', url: 'https://www.nhs.uk/conditions/contraception/' },
      ],
    },
  ],
}
