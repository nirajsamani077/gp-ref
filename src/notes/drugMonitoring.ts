import type { Note } from '../data/notes'

export const drugMonitoring: Note = {
  id: 'drug-monitoring',
  title: 'Drug Monitoring Quick Reference',
  subtitle: 'Baseline and ongoing monitoring for the high-risk drugs GPs share-care — DMARDs, amiodarone, lithium and more',
  tags: ['prescribing'],

  body: `drug monitoring shared care DMARD methotrexate azathioprine TPMT amiodarone lithium level thyroid FBC LFT U&E therapeutic drug monitoring seizure threshold drugs digoxin ciclosporin sodium valproate blood tests`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'A number of high-risk drugs require structured baseline and ongoing monitoring, usually under a shared-care agreement between specialist and GP. Missed monitoring is a recognised cause of avoidable harm and a common source of significant-event and medicolegal problems. This is a quick reference — always follow the specific shared-care protocol and current SmPC/BNF, which take precedence.',
    },

    { type: 'heading', level: 2, text: 'Common Shared-Care Drugs' },
    {
      type: 'table',
      headers: ['Drug', 'Baseline', 'Ongoing (typical)'],
      rows: [
        ['Methotrexate', 'FBC, U&E, LFTs; TPMT not needed (that\'s azathioprine); CXR if lung disease; pregnancy status', 'FBC/U&E/LFTs every ~2–4 weeks until stable then ~2–3 monthly; watch for cytopenia, hepatotoxicity, pneumonitis; folic acid; ONCE-weekly dosing (never daily)'],
        ['Azathioprine', 'TPMT activity, FBC, U&E, LFTs', 'FBC/LFTs frequently at first then ~3-monthly; myelosuppression risk (esp. low TPMT); interaction with allopurinol'],
        ['Leflunomide / sulfasalazine / biologics', 'FBC, U&E, LFTs (BP for leflunomide); screening before biologics (TB, hepatitis)', 'Per DMARD protocol; biologics need infection vigilance'],
        ['Lithium', 'U&E, eGFR, TFTs, calcium, weight/BMI, ECG if cardiac risk', 'Lithium LEVEL 12h post-dose — weekly after any dose change until stable, then every 3 months; TFTs, U&E, calcium every 6 months (see Lithium note)'],
        ['Amiodarone', 'TFTs, LFTs, U&E, CXR, ECG (± lung function)', 'TFTs and LFTs every 6 months (thyroid dysfunction — both hypo and hyper — and hepatotoxicity); watch for pulmonary/eye/skin effects; many interactions'],
        ['Digoxin', 'U&E (esp. potassium), renal function', 'Clinical (toxicity: nausea, visual changes, arrhythmia); level only if toxicity/poor response suspected; hypokalaemia potentiates toxicity'],
      ],
    },

    { type: 'heading', level: 2, text: 'Principles of Shared Care' },
    {
      type: 'callout',
      variant: 'info',
      title: 'Safe Shared-Care Prescribing',
      items: [
        'Only accept shared care with a clear agreement, the patient stable, a named specialist contact, and a defined monitoring schedule you can deliver.',
        'Ensure a robust recall/failsafe system so monitoring bloods are not missed; act on abnormal results (withhold and discuss) rather than simply filing them.',
        'Give patients the relevant monitoring booklet/alert (e.g. methotrexate, lithium, anticoagulant) and safety advice on symptoms to report.',
        'Check for interactions whenever adding/stopping a drug (see CYP450 primer) — e.g. NSAIDs/ACE-i raise lithium and methotrexate toxicity; trimethoprim + methotrexate risks profound cytopenia.',
      ],
    },

    { type: 'heading', level: 2, text: 'Drugs That Lower the Seizure Threshold' },
    {
      type: 'list',
      items: [
        'Be cautious combining or prescribing seizure-threshold-lowering drugs, especially in people with epilepsy: tramadol, bupropion, some antidepressants and antipsychotics, quinolones (esp. with NSAIDs), theophylline, and mefenamic acid in overdose.',
        'Abrupt withdrawal of benzodiazepines, alcohol or antiepileptics can also provoke seizures.',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'BNF — Monitoring Requirements (individual drugs)', url: 'https://bnf.nice.org.uk/' },
        { label: 'BSR — DMARD Monitoring Guideline', url: 'https://www.rheumatology.org.uk/practice-quality/guidelines' },
        { label: 'SPS — Specialist Pharmacy Service (Shared Care)', url: 'https://www.sps.nhs.uk/' },
        { label: 'MHRA — Drug Safety Update', url: 'https://www.gov.uk/drug-safety-update' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'dmards', label: 'DMARDs & Biologics', subtitle: 'Detailed DMARD monitoring and cautions' },
        { id: 'lithium-bipolar', label: 'Lithium & Bipolar Disorder', subtitle: 'Lithium level and organ monitoring in detail' },
        { id: 'cyp450-interactions', label: 'Drug Interactions & CYP450', subtitle: 'Interactions relevant to monitored drugs' },
        { id: 'polypharmacy', label: 'Polypharmacy & Deprescribing', subtitle: 'Monitoring burden in multimorbidity' },
        { id: 'atrialFibrillation', label: 'Atrial Fibrillation', subtitle: 'Amiodarone/digoxin use and monitoring' },
      ],
    },

  ],
}
