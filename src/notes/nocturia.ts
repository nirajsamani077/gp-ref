import type { Note } from '../data/notes'

export const nocturia: Note = {
  id: 'nocturia',
  title: 'Nocturia',
  subtitle: 'Waking to void — nocturnal polyuria vs low capacity vs global polyuria, and a targeted work-up',
  tags: ['urology'],

  body: `nocturia nocturnal polyuria frequency volume chart bladder diary nocturnal polyuria index global polyuria OSA heart failure oedema diuretic timing desmopressin BPH LUTS diabetes fluid restriction`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG97 — LUTS in Men', url: 'https://www.nice.org.uk/guidance/ng97' },
        { label: 'NICE CKS — LUTS in Men', url: 'https://cks.nice.org.uk/topics/luts-in-men/' },
        { label: 'ICS — Nocturia Standardisation', url: 'https://www.ics.org/' },
      ],
    },

    {
      type: 'callout',
      variant: 'info',
      title: 'Define the Problem First',
      items: [
        'Nocturia = waking ≥1 time to void, each preceded and followed by sleep; it becomes bothersome usually at ≥2 voids/night',
        'A frequency-volume (bladder) diary over 3 days is the single most useful investigation — it classifies the mechanism and directs treatment',
        'It is a symptom of many systemic conditions, not just a prostate problem',
      ],
    },

    { type: 'heading', level: 2, text: 'Classify the Mechanism (from the Diary)' },

    {
      type: 'table',
      headers: ['Pattern', 'Meaning', 'Typical causes'],
      rows: [
        ['Nocturnal polyuria', '>20–33% of 24h urine produced at night', 'Peripheral oedema (evening fluid shift), heart failure, OSA, evening fluid/caffeine/alcohol, late diuretic'],
        ['Global polyuria', 'High output day and night (>40 mL/kg/24h)', 'Diabetes mellitus, diabetes insipidus, primary polydipsia'],
        ['Reduced bladder capacity', 'Small frequent voids', 'BPH/LUTS, overactive bladder, prostatitis, UTI, bladder pathology'],
        ['Mixed / sleep disorder', 'Combination or waking for other reasons', 'Insomnia, chronic pain, OSA'],
      ],
    },

    { type: 'heading', level: 2, text: 'Assessment' },

    {
      type: 'list',
      items: [
        'History: fluid/caffeine/alcohol timing, drug timing (diuretics, evening fluids), symptoms of BPH/OAB, snoring/daytime somnolence (OSA), ankle swelling/breathlessness (heart failure)',
        'Examine for oedema and, in men, the prostate; check urine dip (glucose, blood, infection)',
        'Bloods: HbA1c/glucose, U&E, and consider calcium; PSA discussion if prostate symptoms',
      ],
    },

    { type: 'heading', level: 2, text: 'Management by Cause' },

    {
      type: 'list',
      items: [
        'Behavioural first: reduce evening fluids, caffeine and alcohol; take diuretics in the afternoon rather than at night; leg elevation/compression and an afternoon rest for dependent oedema',
        'Treat the underlying condition — optimise heart failure, treat OSA, control diabetes, treat BPH/OAB (alpha-blocker, antimuscarinic/beta-3 agonist as appropriate)',
        'Desmopressin can be considered for troublesome nocturnal polyuria when other measures fail — but only with careful patient selection and sodium monitoring (hyponatraemia risk, especially in older people)',
        'Manage expectations: some age-related nocturia persists; the aim is to reduce nocturnal voids and improve sleep',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'bph-luts', label: 'BPH & LUTS', subtitle: 'Prostatic causes of storage/voiding symptoms' },
        { id: 'heart-failure', label: 'Heart Failure', subtitle: 'Nocturnal polyuria from fluid redistribution' },
        { id: 'osa', label: 'Obstructive Sleep Apnoea', subtitle: 'An under-recognised cause of nocturnal polyuria' },
        { id: 'diabetes-diagnosis', label: 'Diabetes Mellitus — Diagnosis', subtitle: 'Osmotic diuresis causing global polyuria' },
        { id: 'diabetes-insipidus', label: 'Diabetes Insipidus', subtitle: 'Dilute polyuria differential' },
      ],
    },

  ],
}
