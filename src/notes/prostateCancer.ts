import type { Note } from '../data/notes'

export const prostateCancer: Note = {
  id: 'prostate-cancer',
  title: 'Prostate Cancer',
  subtitle: 'PSA, mpMRI & PIRADS, Gleason/Grade Group, treatment by risk, hormonal therapy and GP monitoring',
  tags: ['cancer', 'urology'],

  body: `prostate cancer PSA prostate specific antigen DRE digital rectal examination mpMRI multiparametric MRI PIRADS Likert TRUS biopsy transperineal Gleason score grade group active surveillance watchful waiting radical prostatectomy radiotherapy EBRT brachytherapy androgen deprivation therapy ADT LHRH agonist goserelin Zoladex bicalutamide tumour flare orchidectomy docetaxel abiraterone enzalutamide bone mets osteoporosis hot flushes gynaecomastia BRCA2 PREDICT prostate`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG131 — Prostate Cancer', url: 'https://www.nice.org.uk/guidance/ng131' },
        { label: 'NICE NG12 — Suspected Cancer (PSA referral)', url: 'https://www.nice.org.uk/guidance/ng12' },
        { label: 'PREDICT Prostate', url: 'https://prostate.predict.cam/' },
        { label: 'Prostate Cancer UK', url: 'https://prostatecanceruk.org/' },
      ],
    },

    { type: 'heading', level: 2, text: 'Risk Factors & Background' },

    {
      type: 'list',
      items: [
        'Risk factors: increasing age, family history (first-degree relative), Black ethnicity (~2× risk; earlier onset), BRCA2 mutation (rare but more aggressive disease), possibly smoking',
        'Most men diagnosed with prostate cancer will not die from it — many are indolent; the challenge is distinguishing clinically significant from insignificant disease',
        'Usually detected via raised PSA and/or abnormal DRE, then referred on the suspected cancer pathway',
        'Most cancers arise in the peripheral zone (palpable on DRE), unlike BPH which affects the transitional zone',
      ],
    },

    { type: 'heading', level: 2, text: 'PSA Testing — Practical Points' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Before & When Interpreting a PSA',
      items: [
        'Counsel before testing: a raised PSA may lead to MRI/biopsy and detect insignificant cancers; a normal PSA does not exclude cancer',
        'Avoid spuriously raising PSA: defer test after recent ejaculation (48h), vigorous exercise/cycling, UTI/prostatitis (wait ~4–6 weeks), urinary retention, recent DRE, catheterisation, or prostate biopsy',
        'Use age-specific reference ranges (rise with age); any abnormal DRE warrants referral regardless of PSA',
        'Finasteride/dutasteride (5-ARIs) roughly HALVE PSA — double the measured value when interpreting',
        'A single borderline PSA can be repeated after addressing reversible causes before referral',
      ],
    },

    { type: 'heading', level: 2, text: 'Diagnosis — mpMRI First, Then Biopsy' },

    {
      type: 'list',
      items: [
        'Multiparametric MRI (mpMRI) is now first-line in suspected localised prostate cancer (before biopsy) and is scored using Likert or PI-RADS (1–5)',
        'This stratifies who needs a biopsy and reduces unnecessary biopsies and overdiagnosis of insignificant disease',
        'Biopsy route: transperineal biopsy increasingly preferred over transrectal ultrasound-guided (TRUS) biopsy — lower infection/sepsis risk',
        'Biopsy risks: pain, haematuria, haematospermia (can persist weeks), infection/sepsis (especially TRUS), urinary retention',
      ],
    },

    {
      type: 'table',
      headers: ['Likert / PI-RADS', 'Interpretation', 'Action'],
      rows: [
        ['1–2', 'Clinically significant cancer unlikely', 'May avoid biopsy — PSA surveillance under specialist; if PSA velocity stable or prior negative biopsy, discharged to GP for PSA monitoring (1–2 yearly)'],
        ['3', 'Equivocal / borderline', 'Biopsy usually offered (consider PSA density to refine decision)'],
        ['4–5', 'Likely / highly likely significant cancer', 'Targeted biopsy'],
      ],
    },

    { type: 'heading', level: 2, text: 'Gleason Score & Grade Group' },

    {
      type: 'list',
      items: [
        'Gleason score is derived from the two most prevalent cell patterns on biopsy, each graded 1–5 for atypia, then summed (e.g. 3+4 = 7)',
        'The lowest score reported as cancer is 3+3 = 6 (patterns 1–2 are not reported as cancer)',
        'Order matters: 4+3 (predominant pattern 4) carries a worse prognosis than 3+4',
        'Now reported as ISUP Grade Groups 1–5: Grade Group 1 = Gleason 6; GG2 = 3+4; GG3 = 4+3; GG4 = 8; GG5 = 9–10',
        'Higher grade group = more aggressive disease and stronger indication for radical treatment',
      ],
    },

    { type: 'heading', level: 2, text: 'Treatment by Category' },

    {
      type: 'table',
      headers: ['Approach', 'When Used', 'Notes'],
      rows: [
        ['Watchful waiting', 'Asymptomatic men opting not to have curative treatment (e.g. comorbidity, frailty, patient choice); any risk category', 'PSA-led, less intensive monitoring usually in primary care; aims to treat palliatively if/when symptomatic'],
        ['Active surveillance', 'Low-risk (and selected intermediate-risk) localised disease where curative treatment is appropriate but immediate intervention can be safely deferred', 'More intensive monitoring in secondary care: serial PSA, DRE, repeat mpMRI ± biopsy; switch to radical treatment if progression'],
        ['Radical prostatectomy', 'Localised disease, curative intent, fit patient', 'Laparoscopic/robotic; PSA should become undetectable by ~8 weeks; S/E: erectile dysfunction (common), urinary incontinence, infertility'],
        ['Radical radiotherapy (EBRT or brachytherapy)', 'Localised or locally advanced disease (curative)', 'Alternative to surgery; often combined with androgen deprivation; S/E: bowel/bladder toxicity, ED, secondary malignancy (rare)'],
        ['Hormonal therapy (ADT)', 'Neoadjuvant/adjuvant to radiotherapy (~2–3 years), or metastatic disease (lifelong)', 'See below'],
        ['Chemotherapy (docetaxel) ± abiraterone/enzalutamide', 'Metastatic / hormone-sensitive or castration-resistant disease', 'Specialist oncology'],
      ],
    },

    { type: 'heading', level: 2, text: 'Androgen Deprivation Therapy (ADT) — Pearls' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Hormonal Therapy — Tumour Flare & Side Effects',
      items: [
        'LHRH agonists (goserelin/Zoladex, leuprorelin) suppress androgens that drive prostate cancer; bilateral orchidectomy is an alternative',
        'Tumour flare: LHRH agonists cause an initial transient testosterone surge → can worsen bone pain, urinary obstruction, or even spinal cord compression. Co-prescribe an anti-androgen (bicalutamide or cyproterone acetate) starting ~1 week before and continuing ~2 weeks after the first injection',
        'LHRH antagonists (degarelix) do not cause flare',
        'Side effects of androgen suppression ("male menopause"): hot flushes, erectile dysfunction, loss of libido, fatigue, gynaecomastia, weight gain, metabolic syndrome, osteoporosis, mood change',
        'Manage: offer sperm storage before treatment (infertility); hot flushes — consider short MPA or cyproterone (VTE risk); gynaecomastia — prophylactic breast radiotherapy or tamoxifen; bone health — FRAX/DEXA and bone protection; address cardiovascular and metabolic risk',
      ],
    },

    { type: 'heading', level: 2, text: 'GP Role & Monitoring' },

    {
      type: 'list',
      items: [
        'PSA surveillance for men on watchful waiting or discharged after negative mpMRI/biopsy — refer back if significant or rapid PSA rise',
        'Monitor men on long-term ADT: bone health (FRAX/DEXA, calcium/vitamin D, bisphosphonate if indicated), cardiovascular and metabolic risk, mood, hot flushes',
        'Be alert to metastatic complications: new back pain with neurology → suspect metastatic spinal cord compression (MSCC) → urgent MRI + dexamethasone + same-day oncology; bone pain from skeletal metastases',
        'Use PREDICT Prostate to communicate prognosis and treatment trade-offs',
        'Signpost Prostate Cancer UK and Macmillan for support; population PSA screening is not currently recommended in the UK',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'bph-luts', label: 'BPH & LUTS', subtitle: 'Benign cause of LUTS and raised PSA — overlapping presentation' },
        { id: 'two-week-wait', label: '2WW Referral Guide', subtitle: 'Suspected prostate cancer referral criteria' },
        { id: 'osteoporosis', label: 'Osteoporosis', subtitle: 'ADT causes bone loss — FRAX, DEXA, bone protection' },
        { id: 'erectile-dysfunction', label: 'Erectile Dysfunction', subtitle: 'Common after prostatectomy, radiotherapy and ADT' },
        { id: 'palliativeEOL', label: 'Palliative & End of Life Care', subtitle: 'Metastatic disease — symptom control, MSCC, anticipatory care' },
      ],
    },

  ],
}
