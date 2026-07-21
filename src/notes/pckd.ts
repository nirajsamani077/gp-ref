import type { Note } from '../data/notes'

export const pckd: Note = {
  id: 'pckd',
  title: 'Polycystic Kidney Disease (ADPKD)',
  subtitle: 'Inherited cystic kidney disease, extrarenal features, tight BP control and tolvaptan',
  tags: ['renal'],

  body: `autosomal dominant polycystic kidney disease ADPKD PKD1 PKD2 renal cysts CKD ESRF hypertension haematuria cyst infection berry aneurysm subarachnoid haemorrhage hepatic cysts tolvaptan ACE inhibitor genetics`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — CKD', url: 'https://cks.nice.org.uk/topics/chronic-kidney-disease/' },
        { label: 'PKD Charity', url: 'https://pkdcharity.org.uk/' },
        { label: 'Kidney Care UK', url: 'https://www.kidneycareuk.org/' },
      ],
    },

    { type: 'heading', level: 2, text: 'Overview' },

    {
      type: 'list',
      items: [
        'Autosomal dominant polycystic kidney disease (ADPKD) is the commonest inherited kidney disease (~1 in 1000) and a major cause of end-stage renal failure — multiple cysts progressively destroy renal tissue, often reaching ESRF in the 50s–60s (variable)',
        'Genetics: PKD1 (chromosome 16) — more common and more severe/faster progression; PKD2 (chromosome 4) — rarer, milder. Each child of an affected parent has a 50% risk → refer for genetic counselling/screening',
      ],
    },

    { type: 'heading', level: 2, text: 'Features' },

    {
      type: 'table',
      headers: ['Renal', 'Extrarenal'],
      rows: [
        ['Hypertension (early and common), CKD with its complications (anaemia, secondary hyperparathyroidism, renal bone disease), haematuria, renal stones, and cyst pain/infection', 'Hepatic (and pancreatic) cysts; intracranial "berry" aneurysms (risk of subarachnoid haemorrhage); mitral valve prolapse/aortic root dilatation; diverticular disease; abdominal wall hernias'],
      ],
      caption: 'Consider screening for intracranial aneurysms (MRA) in those with a family history of SAH/aneurysm or high-risk occupations — a specialist decision.',
    },

    { type: 'heading', level: 2, text: 'Management' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Slowing Progression & Managing Complications',
      items: [
        'Tight blood-pressure control with an ACE inhibitor (or ARB) is the cornerstone — aim for a low target (per specialist, e.g. ≤130/80, tighter in the young with albuminuria)',
        'Cardiovascular risk: low salt (<6 g/day), stop smoking, avoid NSAIDs (nephrotoxic), statin if eGFR <60',
        'Tolvaptan (a vasopressin V2 antagonist) slows cyst growth and eGFR decline in selected rapidly-progressing ADPKD — specialist-initiated; causes marked thirst/polyuria and needs LFT monitoring (hepatotoxicity)',
        'Treat cyst infections and stones; manage cyst pain; prepare for renal replacement therapy (dialysis/transplant) as ESRF approaches',
        'Offer genetic counselling and screening of at-risk family members',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'ckd', label: 'Chronic Kidney Disease', subtitle: 'Staging, renal protection and complications' },
        { id: 'hypertension', label: 'Hypertension', subtitle: 'Tight BP control with ACEi/ARB' },
        { id: 'haematuria', label: 'Haematuria', subtitle: 'Cyst haemorrhage and stone-related bleeding' },
        { id: 'stroke-tia', label: 'Stroke & TIA', subtitle: 'Berry aneurysm rupture → subarachnoid haemorrhage' },
      ],
    },

  ],
}
