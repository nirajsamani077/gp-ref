import type { Note } from '../data/notes'

export const nocturia: Note = {
  id: 'nocturia',
  title: 'Nocturia',
  subtitle: 'Waking to void — nocturnal polyuria vs low capacity vs global polyuria, and a targeted work-up',
  tags: ['urology'],

  body: `nocturia nocturnal polyuria frequency volume chart bladder diary nocturnal polyuria index global polyuria reduced bladder capacity OSA heart failure peripheral oedema diuretic timing desmopressin hyponatraemia BPH LUTS overactive bladder diabetes fluid caffeine`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Nocturia — waking to pass urine, each void preceded and followed by sleep — is a symptom, not a diagnosis, and becomes bothersome usually at ≥2 voids per night. It is a common cause of disturbed sleep in older people and is frequently, but wrongly, attributed to the prostate alone. A 3-day frequency-volume (bladder) diary is the single most useful investigation because it classifies the underlying mechanism and directs treatment.',
    },

    { type: 'heading', level: 2, text: 'Classify the Mechanism (from the Diary)' },
    {
      type: 'table',
      headers: ['Pattern', 'Definition', 'Typical causes'],
      rows: [
        ['Nocturnal polyuria', '>20–33% of the 24h urine volume produced at night', 'Peripheral oedema (evening fluid redistribution), heart failure, OSA, evening fluid/caffeine/alcohol, late diuretic dosing'],
        ['Global polyuria', 'High output day and night (>40 mL/kg/24h)', 'Diabetes mellitus, diabetes insipidus, primary polydipsia, hypercalcaemia'],
        ['Reduced bladder capacity', 'Small, frequent voids', 'BPH/LUTS, overactive bladder, prostatitis, UTI, bladder stone/tumour'],
        ['Mixed / sleep-related', 'Combination, or waking for other reasons then voiding', 'OSA, insomnia, chronic pain'],
      ],
    },

    { type: 'heading', level: 2, text: 'Assessment' },
    {
      type: 'list',
      items: [
        'History: timing/volume of fluids, caffeine and alcohol; drug timing (diuretics, calcium-channel blockers → ankle oedema); LUTS/storage symptoms; snoring and daytime somnolence (OSA); ankle swelling/breathlessness/orthopnoea (heart failure).',
        'Examine for peripheral oedema and, in men, the prostate; check urine dip (glucose, blood, leucocytes/nitrites).',
        'Bloods: HbA1c/glucose, U&E (sodium — important before considering desmopressin), calcium; discuss PSA if prostatic symptoms.',
      ],
    },

    { type: 'heading', level: 2, text: 'Management by Cause' },
    {
      type: 'table',
      headers: ['Approach', 'Detail'],
      rows: [
        ['Behavioural (first-line)', 'Reduce evening fluids, caffeine and alcohol; take diuretics in the afternoon (not at night); afternoon leg elevation / compression stockings for dependent oedema'],
        ['Treat the underlying condition', 'Optimise heart failure; treat OSA; control diabetes/hypercalcaemia; treat BPH (alpha-blocker/5-ARI) or overactive bladder (antimuscarinic/mirabegron)'],
        ['Desmopressin', 'Considered for troublesome nocturnal polyuria when other measures fail — careful patient selection; CHECK baseline sodium and monitor (hyponatraemia risk, especially in older people; avoid if hyponatraemic, heart failure or on high hyponatraemia-risk drugs)'],
      ],
    },
    {
      type: 'list',
      items: [
        'Manage expectations: some age-related nocturia persists; the realistic aim is fewer nocturnal voids and better sleep, not necessarily zero.',
      ],
    },

    { type: 'heading', level: 2, text: 'Patient Information Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG97 — LUTS in Men', url: 'https://www.nice.org.uk/guidance/ng97' },
        { label: 'NICE CKS — LUTS in Men', url: 'https://cks.nice.org.uk/topics/luts-in-men/' },
        { label: 'Bladder & Bowel UK — Bladder Diary', url: 'https://www.bbuk.org.uk/' },
        { label: 'NHS — Frequent Urination at Night', url: 'https://www.nhs.uk/conditions/' },
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
        { id: 'hyponatraemia', label: 'Hyponatraemia', subtitle: 'Key risk to monitor with desmopressin' },
      ],
    },

  ],
}
