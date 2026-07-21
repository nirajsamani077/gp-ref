import type { Note } from '../data/notes'

export const serotoninNms: Note = {
  id: 'serotonin-nms',
  title: 'Serotonin Syndrome & Neuroleptic Malignant Syndrome',
  subtitle: 'Two drug-induced hyperthermic emergencies — how to tell them apart and manage them',
  tags: ['mental', 'drugs'],

  body: `serotonin syndrome neuroleptic malignant syndrome NMS hyperthermia rigidity clonus hyperreflexia autonomic instability SSRI MAOI tramadol antipsychotic dopamine cyproheptadine dantrolene raised CK AKI benzodiazepine`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Antipsychotics (NMS)', url: 'https://cks.nice.org.uk/topics/psychosis-schizophrenia/' },
        { label: 'NICE CKS — Antidepressants (Serotonin Syndrome)', url: 'https://cks.nice.org.uk/topics/depression/' },
        { label: 'TOXBASE', url: 'https://www.toxbase.org/' },
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Both Are Medical Emergencies — 999 / Admit',
      items: [
        'Both cause hyperthermia, rigidity, autonomic instability and altered mental state, and can be fatal',
        'Immediate action: stop the causative drug, call 999/admit for supportive care (IV fluids, active cooling, benzodiazepines) and monitoring (temperature, CK, renal function)',
        'Complications: rhabdomyolysis (very high CK) → acute kidney injury, DIC, seizures',
      ],
    },

    { type: 'heading', level: 2, text: 'Telling Them Apart' },

    {
      type: 'table',
      headers: ['Feature', 'Serotonin syndrome', 'Neuroleptic malignant syndrome (NMS)'],
      rows: [
        ['Trigger', 'Serotonergic drugs — SSRIs/SNRIs, MAOIs, tramadol/fentanyl/pethidine, triptans, ondansetron, St John\'s Wort, linezolid, ecstasy/amphetamines (often an added/second agent)', 'Dopamine antagonists — antipsychotics (typical > atypical), metoclopramide; or abrupt withdrawal of a dopaminergic drug (Parkinson\'s meds)'],
        ['Onset', 'Rapid — within hours of the drug change', 'Slower — over days (often after starting/increasing an antipsychotic)'],
        ['Neuromuscular', 'HYPER-reactivity: clonus (esp. lower limbs), hyperreflexia, myoclonus, tremor, agitation', '"Lead-pipe" RIGIDITY, bradyreflexia, akinesia'],
        ['Pupils', 'Dilated (mydriasis)', 'Normal'],
        ['Onset/offset', 'Resolves quickly once the drug is stopped/treated', 'Resolves slowly (days–weeks)'],
      ],
      caption: 'Clonus and hyperreflexia point to serotonin syndrome; "lead-pipe" rigidity with a very high CK and slow onset points to NMS.',
    },

    { type: 'heading', level: 2, text: 'Management (Hospital)' },

    {
      type: 'list',
      items: [
        'Both: stop the offending drug, supportive care — IV fluids, cooling, benzodiazepines for agitation/rigidity, and monitoring of CK, U&E, temperature and clotting',
        'Serotonin syndrome: cyproheptadine (a serotonin antagonist) in moderate/severe cases',
        'NMS: dantrolene (muscle relaxant) and/or a dopamine agonist (bromocriptine) in severe cases',
        'Do NOT simply restart the culprit; specialist psychiatry input on future prescribing (re-challenge/alternatives) after recovery',
      ],
    },

    { type: 'heading', level: 2, text: 'Prevention in Primary Care' },

    {
      type: 'list',
      items: [
        'Be alert when combining serotonergic drugs (e.g. an SSRI + tramadol, or an SSRI + triptan/linezolid) and when switching antidepressants (observe washout periods, especially with MAOIs)',
        'Introduce and change antipsychotics gradually; do not abruptly stop Parkinson\'s dopaminergic medication',
        'Counsel patients on red-flag symptoms (fever, stiffness, confusion, agitation) and to seek urgent help',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'antidepressants', label: 'Antidepressants', subtitle: 'Serotonergic drugs, switching and washout periods' },
        { id: 'antipsychotics-smi', label: 'Antipsychotics & SMI', subtitle: 'NMS risk; starting/changing antipsychotics' },
        { id: 'parkinsons-pd', label: "Parkinson's Disease", subtitle: 'Abrupt dopaminergic withdrawal can trigger NMS-like crisis' },
        { id: 'neuropathic-pain', label: 'Neuropathic Pain & Gabapentinoids', subtitle: 'Tramadol as a serotonergic contributor' },
      ],
    },

  ],
}
