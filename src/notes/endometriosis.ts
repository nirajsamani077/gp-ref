import type { Note } from '../data/notes'

export const endometriosis: Note = {
  id: 'endometriosis',
  title: 'Endometriosis',
  subtitle: 'Diagnosis, medical and surgical management, infertility and dyspareunia',
  tags: ['gynaecology'],

  body: 'endometriosis dysmenorrhoea painful periods dyspareunia deep chronic pelvic pain cyclical pain infertility endometrioma chocolate cyst peritoneal adenomyosis deep infiltrating TV USS MRI pelvis diagnostic laparoscopy diathermy ablation COCP continuous POP desogestrel norethisterone Mirena IUS GnRH analogue prostap zoladex add-back HRT hysterectomy oestrogen dependent WCBA',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Endometriosis — Key Points',
      items: [
        'Endometrial-like tissue outside the uterus — oestrogen-dependent; does not regress without intervention',
        'Affects ~10% of women of childbearing age (WCBA); at least 1 in 3 women at infertility clinic have endometriosis',
        'Major cause of infertility: 2× the general population average risk',
        'Average diagnostic delay in UK: 7–8 years — frequently missed and minimised',
        'Types: superficial peritoneal (most common, 80%), ovarian endometrioma ("chocolate cyst"), deep infiltrating endometriosis (bowel, bladder, uterosacral ligaments)',
        'Genetic predisposition and association with chronic health conditions (fibromyalgia, autoimmune)',
      ],
    },

    { type: 'heading', level: 2, text: 'Symptoms' },

    {
      type: 'list',
      items: [
        'Dysmenorrhoea: primary symptom — often severe, cyclical, and may become less cyclical over time',
        'Deep dyspareunia: pain during and after intercourse — deep penetration pain',
        'Chronic pelvic pain: constant or cyclical; may affect function and quality of life significantly',
        'Cyclical bowel or bladder symptoms: dyschezia (pain on defaecation), diarrhoea, bloating, cyclical haematuria (rare)',
        'Infertility: may be the presenting complaint in asymptomatic women',
        'Fatigue: chronic, debilitating fatigue — often underappreciated',
      ],
    },

    { type: 'heading', level: 2, text: 'Diagnosis' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Normal PV Exam and USS Do NOT Rule Out Endometriosis',
      items: [
        'Bimanual pelvic examination: may be normal in superficial peritoneal disease; fixed retroverted uterus or tender nodules in POD suggest deep disease',
        'Transvaginal ultrasound (TV USS): can detect endometriomas and some deep lesions — but misses superficial peritoneal disease',
        'MRI pelvis: better than USS for deep infiltrating disease, rectovaginal and uterosacral lesions',
        'Definitive diagnosis: diagnostic laparoscopy with histological confirmation (biopsy) — the gold standard; also allows therapeutic treatment at same procedure',
        'Nearly half of diagnostic laparoscopies find no pathology — explain this to patients before procedure',
      ],
    },

    { type: 'heading', level: 2, text: 'Primary Care Management (Before Referral)' },

    {
      type: 'table',
      headers: ['Treatment', 'Detail'],
      rows: [
        ['NSAIDs', 'Mefenamic acid 500 mg TDS or naproxen 500 mg BD — non-hormonal; effective for dysmenorrhoea; use with food; start before expected onset of pain'],
        ['COCP (continuous)', 'Combined oral contraceptive pill taken continuously (no pill-free interval) — reduces cyclical pain by suppressing ovulation and menstruation; try for 3–6 months'],
        ['Progestogen-only options', 'Desogestrel (Cerazette) 75 mcg OD; norethisterone (NET) 5 mg TDS (VTE risk); medroxyprogesterone acetate (Provera) 10 mg TDS; all cause ovarian suppression; may cause irregular bleeding initially'],
        ['LARC', 'Mirena IUS: highly effective for endometriosis-related pain; reduces menstrual loss; etonogestrel implant — all effective; NOT copper IUD (no hormonal effect)'],
        ['Biopsychosocial approach', 'Pain diary, lifestyle modifications, address psychological distress, pacing, mindfulness; DO NOT dismiss symptoms'],
      ],
      caption: 'If trying to conceive: do NOT give hormonal suppression — refer directly to gynaecology/fertility. Hormonal treatments suppress pain but do NOT treat underlying disease or improve fertility.',
    },

    { type: 'heading', level: 2, text: 'Referral and Secondary Care Management' },

    {
      type: 'list',
      items: [
        'Refer if: symptoms persisting despite 3–6 months of primary care management; infertility; suspected endometrioma on USS; unable to tolerate hormonal options; severe symptoms',
        'GnRH analogues (specialist initiation): goserelin (Zoladex) or leuprorelin (Prostap) — monthly/3-monthly SC/IM injections; induces medical menopause; highly effective for pain suppression; add-back combined HRT or COCP to prevent menopausal symptoms and bone loss',
        'Laparoscopic surgery: diagnostic + therapeutic; ablation or excision of lesions; adhesiolysis; ovarian cystectomy for endometrioma',
        'Pre-surgical treatment: GnRH analogue for 3 months to debulk disease before surgery (MRI-guided)',
        'Hysterectomy ± bilateral salpingo-oophorectomy (BSO): for severe, refractory disease with adenomyosis; last resort in reproductive-age women; after BSO — use combined HRT (NOT oestrogen-only — risk of stimulating residual endometriosis)',
        'MDT approach: gynaecology, urology (bladder disease), colorectal surgery (bowel disease), pain clinic, psychologist',
      ],
    },

    { type: 'heading', level: 2, text: 'Dyspareunia — Other Causes to Consider' },

    {
      type: 'table',
      headers: ['Type', 'Causes'],
      rows: [
        ['Superficial dyspareunia', 'Candida, herpes simplex, contact dermatitis, lichen sclerosus, atrophic vaginitis (low oestrogen in pregnancy, breastfeeding, post-menopause), vulvodynia, vaginismus, FGM'],
        ['Deep dyspareunia', 'Endometriosis, PID/salpingitis sequelae, fibroid/polyp/cervical CA, ovarian cyst, prolapse, non-gynaecological (IBS, musculoskeletal), pelvic congestion syndrome'],
      ],
      caption: 'Practical management for superficial dyspareunia: coconut oil BD as lubricant, avoid irritants, topical lubricants; topical steroids (lichen sclerosus); topical oestrogen cream (atrophy); referral to psychosexual therapy for vaginismus.',
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'Gynaecology referral (suspected endometriosis): UHDB Queen\'s Hospital Burton gynaecology — via e-RS; include symptom duration, treatments tried, TV USS result, fertility status',
        'Alternative: Good Hope Hospital (UHB) gynaecology',
        'Fertility referral (if trying to conceive with suspected endometriosis): UHDB Burton fertility or Birmingham Women\'s Hospital fertility centre',
        'Endometriosis specialist centre: UHDB or QEHB Birmingham — for severe/deep infiltrating disease requiring MDT',
        'Patient support: Endometriosis UK (endometriosis-uk.org) — excellent resources, helpline, local support groups',
        'RCOG patient leaflet: available for patients (rcog.org.uk)',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG73 — Endometriosis', url: 'https://www.nice.org.uk/guidance/ng73' },
        { label: 'NICE CKS — Endometriosis', url: 'https://cks.nice.org.uk/topics/endometriosis/' },
        { label: 'Endometriosis UK', url: 'https://www.endometriosis-uk.org/' },
        { label: 'RCOG — Endometriosis Green-Top Guideline', url: 'https://www.rcog.org.uk/guidance/browse-all-guidance/green-top-guidelines/endometriosis-investigation-and-management-green-top-guideline-no-24/' },
      ],
    },
  ],
}
