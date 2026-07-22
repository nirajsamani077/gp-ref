import type { Note } from '../data/notes'

export const serotoninNms: Note = {
  id: 'serotonin-nms',
  title: 'Serotonin Syndrome & Neuroleptic Malignant Syndrome',
  subtitle: 'Two drug-induced hyperthermic emergencies — how to tell them apart, manage and prevent them',
  tags: ['mental', 'drugs'],

  body: `serotonin syndrome neuroleptic malignant syndrome NMS hyperthermia rigidity clonus hyperreflexia mydriasis autonomic instability SSRI SNRI MAOI tramadol linezolid triptan antipsychotic metoclopramide dopamine withdrawal cyproheptadine dantrolene bromocriptine raised CK rhabdomyolysis AKI benzodiazepine`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Serotonin syndrome and neuroleptic malignant syndrome (NMS) are two drug-induced hyperthermic emergencies that share a final common picture — fever, rigidity, autonomic instability and altered mental state — but differ in trigger, onset and neuromuscular signs. Both can be fatal and both are managed by stopping the culprit and urgent supportive care. The GP\'s role is early recognition, immediate drug cessation, and prevention through careful prescribing.',
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Both Are Medical Emergencies — 999 / Admit',
      items: [
        'Immediate action: STOP the causative drug, call 999/admit for supportive care (IV fluids, active cooling, benzodiazepines) and monitoring (temperature, CK, U&E, clotting).',
        'Complications: rhabdomyolysis (very high CK) → acute kidney injury, DIC, seizures, and death from hyperthermia/autonomic collapse.',
      ],
    },

    { type: 'heading', level: 2, text: 'Telling Them Apart' },
    {
      type: 'table',
      headers: ['Feature', 'Serotonin syndrome', 'Neuroleptic malignant syndrome (NMS)'],
      rows: [
        ['Trigger', 'Serotonergic drugs — SSRIs/SNRIs, MAOIs, tramadol/fentanyl/pethidine, triptans, ondansetron, St John\'s Wort, linezolid, ecstasy/amphetamines (often a second added agent)', 'Dopamine antagonists — antipsychotics (typical > atypical), metoclopramide; or abrupt WITHDRAWAL of a dopaminergic drug (Parkinson\'s medication)'],
        ['Onset', 'Rapid — within hours of the drug change', 'Slower — over days (often after starting/increasing an antipsychotic)'],
        ['Neuromuscular', 'HYPER-reactivity: clonus (esp. lower limbs), hyperreflexia, myoclonus, tremor, agitation', '"Lead-pipe" RIGIDITY, bradyreflexia, akinesia'],
        ['Pupils', 'Dilated (mydriasis)', 'Normal'],
        ['Offset', 'Resolves quickly once the drug is stopped/treated', 'Resolves slowly (days–weeks)'],
      ],
      caption: 'Clonus + hyperreflexia + rapid onset → serotonin syndrome; "lead-pipe" rigidity + very high CK + slow onset → NMS.',
    },

    { type: 'heading', level: 2, text: 'Management (Hospital)' },
    {
      type: 'list',
      items: [
        'Both: stop the offending drug, supportive care — IV fluids, cooling, benzodiazepines for agitation/rigidity, and monitoring of CK, U&E, temperature and clotting.',
        'Serotonin syndrome: cyproheptadine (a serotonin antagonist) in moderate/severe cases.',
        'NMS: dantrolene (muscle relaxant) and/or a dopamine agonist (bromocriptine) in severe cases.',
        'Do NOT simply restart the culprit; obtain specialist psychiatry input on future prescribing (rechallenge/alternatives) after recovery.',
      ],
    },

    { type: 'heading', level: 2, text: 'Prevention in Primary Care' },
    {
      type: 'list',
      items: [
        'Be alert when COMBINING serotonergic drugs (e.g. an SSRI + tramadol, or an SSRI + triptan/linezolid) and when switching antidepressants — observe washout periods, especially with MAOIs.',
        'Introduce and change antipsychotics gradually; do NOT abruptly stop Parkinson\'s dopaminergic medication (a recognised NMS-like trigger).',
        'Counsel patients on red-flag symptoms (fever, stiffness, confusion, agitation, sweating) and to seek urgent help.',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'TOXBASE (registered clinicians)', url: 'https://www.toxbase.org/' },
        { label: 'NICE CKS — Depression (Antidepressants)', url: 'https://cks.nice.org.uk/topics/depression/' },
        { label: 'NICE CKS — Psychosis & Schizophrenia', url: 'https://cks.nice.org.uk/topics/psychosis-schizophrenia/' },
        { label: 'BNF — Antipsychotics & NMS', url: 'https://bnf.nice.org.uk/treatment-summaries/antipsychotic-drugs/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'antidepressants', label: 'Antidepressants', subtitle: 'Serotonergic drugs, switching and washout periods' },
        { id: 'antipsychotics-smi', label: 'Antipsychotics & SMI', subtitle: 'NMS risk; starting/changing antipsychotics' },
        { id: 'parkinsons-pd', label: "Parkinson's Disease", subtitle: 'Abrupt dopaminergic withdrawal can trigger an NMS-like crisis' },
        { id: 'neuropathic-pain', label: 'Neuropathic Pain & Gabapentinoids', subtitle: 'Tramadol as a serotonergic contributor' },
      ],
    },

  ],
}
