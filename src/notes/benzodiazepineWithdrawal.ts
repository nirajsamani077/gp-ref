import type { Note } from '../data/notes'

export const benzodiazepineWithdrawal: Note = {
  id: 'benzodiazepine-withdrawal',
  title: 'Benzodiazepine & Z-Drug Withdrawal',
  subtitle: 'Dependence, switching to diazepam, staged tapering regimens and managing withdrawal',
  tags: ['mental'],

  body: `benzodiazepine dependence Z-drug zopiclone zolpidem diazepam equivalent dose tapering withdrawal rebound insomnia anxiety seizure deprescribing long-term prescribing Ashton manual gradual reduction driving`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Benzodiazepines and Z-drugs (zopiclone, zolpidem) are effective short-term but cause tolerance and dependence within weeks, and long-term use brings cognitive impairment, falls, road-traffic accidents and a difficult withdrawal. Most guidance limits them to 2–4 weeks. A large legacy population remains on long-term prescriptions; helping them withdraw safely — through a slow, individualised taper — is a common and worthwhile deprescribing task.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Why and When to Withdraw',
      items: [
        'Harms of long-term use: sedation, cognitive impairment/pseudodementia, falls and fractures (elderly), tolerance, dependence, road-traffic accidents, and paradoxical disinhibition.',
        'Abrupt cessation of high-dose/long-term use can cause a serious withdrawal syndrome including SEIZURES and delirium — never stop suddenly.',
        'Motivate rather than coerce: explain the risks, agree the patient is in control of the pace, and frame it as a supported, gradual reduction.',
      ],
    },

    { type: 'heading', level: 2, text: 'Step 1 — Switch to Diazepam (Usually)' },
    {
      type: 'list',
      items: [
        'Convert the current drug to an equivalent daily dose of DIAZEPAM — its long half-life gives smoother blood levels and an easier taper (especially from short-acting agents like lorazepam, or Z-drugs).',
        'Approximate diazepam 5 mg equivalents: lorazepam 0.5 mg; temazepam 10 mg; nitrazepam 5 mg; zopiclone 7.5 mg; zolpidem 10 mg (use a conversion table and check the BNF/local guidance).',
        'Give the dose split or at night depending on symptoms; some patients (e.g. on stable low-dose short-acting) can taper the original drug directly.',
      ],
    },

    { type: 'heading', level: 2, text: 'Step 2 — Taper Slowly' },
    {
      type: 'table',
      headers: ['Element', 'Approach'],
      rows: [
        ['Rate', 'Reduce by ~1–2 mg diazepam (or ~1/8–1/10 of the dose) every 1–4 weeks, guided by symptoms — slower at lower doses'],
        ['Pace', 'Patient-led — pause (don\'t reverse) if withdrawal is troublesome; a taper can take months to a year, and that is fine'],
        ['Support', 'Regular review, small/frequent prescriptions, sleep hygiene and CBT/relaxation; treat underlying anxiety/insomnia with non-drug measures'],
        ['Avoid', 'Do NOT swap one dependence for another (e.g. Z-drug for benzo); avoid propranolol/antidepressants as routine substitutes unless separately indicated'],
      ],
      caption: 'The single most important principle is FLEXIBILITY and slowness — the exact schedule matters less than sustaining a downward direction the patient can tolerate.',
    },

    { type: 'heading', level: 2, text: 'Managing Withdrawal & Safety' },
    {
      type: 'list',
      items: [
        'Withdrawal symptoms: rebound anxiety and insomnia, irritability, tremor, sweating, perceptual disturbance, and (severe/abrupt) seizures/psychosis.',
        'Distinguish withdrawal (settles as the taper stabilises) from re-emergence of the original condition (persists) — the former supports continuing to reduce, the latter may need specific treatment.',
        'Counsel on DRIVING (impairment; DVLA implications) and interactions (alcohol, opioids — additive respiratory depression/overdose risk).',
        'Refer to specialist/community drug services for high-dose, illicit, or complex dependence, or where the patient cannot tolerate primary-care-led reduction.',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Benzodiazepine & Z-Drug Withdrawal', url: 'https://cks.nice.org.uk/topics/benzodiazepine-z-drug-withdrawal/' },
        { label: 'BNF — Hypnotics & Anxiolytics (Dependence)', url: 'https://bnf.nice.org.uk/treatment-summaries/hypnotics-and-anxiolytics/' },
        { label: 'The Ashton Manual', url: 'https://www.benzo.org.uk/manual/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'insomnia', label: 'Insomnia', subtitle: 'Non-drug management and the short-term hypnotic role' },
        { id: 'anxiety-gad', label: 'Generalised Anxiety Disorder', subtitle: 'Treat the underlying anxiety without long-term benzodiazepines' },
        { id: 'substance-misuse', label: 'Substance Use & Misuse', subtitle: 'Complex/illicit dependence pathways' },
        { id: 'polypharmacy', label: 'Polypharmacy & Deprescribing', subtitle: 'Structured deprescribing principles' },
      ],
    },

  ],
}
