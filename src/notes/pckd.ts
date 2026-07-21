import type { Note } from '../data/notes'

export const pckd: Note = {
  id: 'pckd',
  title: 'Polycystic Kidney Disease (ADPKD)',
  subtitle: 'Inherited cystic kidney disease — ultrasound diagnostic criteria, extrarenal features, tight BP control and tolvaptan',
  tags: ['renal'],

  body: `autosomal dominant polycystic kidney disease ADPKD PKD1 PKD2 PKD1 gene renal cysts CKD ESRF hypertension haematuria cyst infection haemorrhage berry aneurysm subarachnoid haemorrhage MRA screening hepatic cysts tolvaptan ACE inhibitor ARB genetics Ravine criteria PROPKD score ARPKD`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Chronic Kidney Disease', url: 'https://cks.nice.org.uk/topics/chronic-kidney-disease/' },
        { label: 'UK Kidney Association — ADPKD Guideline', url: 'https://ukkidney.org/health-professionals/guidelines' },
        { label: 'PKD Charity', url: 'https://pkdcharity.org.uk/' },
        { label: 'Kidney Care UK', url: 'https://www.kidneycareuk.org/' },
      ],
    },

    { type: 'heading', level: 2, text: 'Overview & Genetics' },

    {
      type: 'list',
      items: [
        'Autosomal dominant polycystic kidney disease (ADPKD) is the commonest inherited kidney disease (~1 in 1000) and a major cause of end-stage renal failure — multiple cysts progressively replace functioning renal tissue',
        'PKD1 (chromosome 16, ~85%): more common and more severe — ESRF often in the 50s. PKD2 (chromosome 4, ~15%): milder, ESRF often in the 70s',
        'Autosomal dominant: each child of an affected parent has a 50% risk → offer genetic counselling and screening of at-risk relatives',
        'Autosomal RECESSIVE PKD (ARPKD) is a separate, rarer childhood disease (PKHD1) presenting in infancy with enlarged kidneys and congenital hepatic fibrosis',
      ],
    },

    { type: 'heading', level: 2, text: 'Diagnosis — Ultrasound (Ravine) Criteria' },

    {
      type: 'table',
      headers: ['Age (at-risk, +ve family history)', 'Cyst criterion for diagnosis'],
      rows: [
        ['15–39 years', '≥3 cysts (unilateral or bilateral)'],
        ['40–59 years', '≥2 cysts in EACH kidney'],
        ['≥60 years', '≥4 cysts in each kidney'],
      ],
      caption: 'Ultrasound is first-line. Genetic testing is used where imaging is equivocal, in potential living-related donors, or for younger at-risk individuals. MRI total kidney volume helps identify rapid progressors.',
    },

    { type: 'heading', level: 2, text: 'Renal & Extrarenal Features' },

    {
      type: 'table',
      headers: ['Renal', 'Extrarenal'],
      rows: [
        ['Hypertension (early and very common — often before eGFR falls), progressive CKD with its complications (anaemia, renal bone disease), loin/flank pain, haematuria (cyst haemorrhage), cyst infection, and renal stones', 'Hepatic cysts (commonest — rarely affect function) and pancreatic cysts; intracranial "berry" aneurysms → subarachnoid haemorrhage; mitral valve prolapse and aortic root dilatation; colonic diverticular disease; abdominal wall/inguinal hernias'],
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Intracranial Aneurysm Screening',
      items: [
        'Berry aneurysms are more common in ADPKD and can rupture (subarachnoid haemorrhage)',
        'Offer MR angiography screening to those with a family history of intracranial aneurysm/SAH, a previous aneurysm, high-risk occupations (e.g. pilots), or before major elective surgery — a specialist decision',
        'A thunderclap headache in an ADPKD patient is SAH until proven otherwise → emergency',
      ],
    },

    { type: 'heading', level: 2, text: 'Management' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Slowing Progression & Managing Complications',
      items: [
        'Tight blood-pressure control with an ACE inhibitor (or ARB) is the cornerstone — a lower target is used in the young with preserved function and albuminuria (e.g. ≤110/75 in selected patients per specialist), otherwise ≤130/80',
        'Lifestyle: low salt (<6 g/day, aids BP), good hydration, healthy weight, stop smoking, avoid NSAIDs (nephrotoxic), statin per CKD risk',
        'Tolvaptan (vasopressin V2 antagonist) slows cyst growth and eGFR decline in selected RAPIDLY-progressing ADPKD (identified by kidney volume / PROPKD score) — specialist-initiated; causes marked thirst/polyuria and requires monthly LFT monitoring (idiosyncratic hepatotoxicity)',
        'Treat cyst infections (need lipophilic antibiotics that penetrate cysts, e.g. ciprofloxacin) and stones; manage cyst pain; refer haematuria appropriately',
        'Plan renal replacement therapy (transplant/dialysis) as ESRF approaches; offer genetic counselling and family screening',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'ckd', label: 'Chronic Kidney Disease', subtitle: 'Staging, renal protection and complications' },
        { id: 'hypertension', label: 'Hypertension', subtitle: 'Tight BP control with ACEi/ARB' },
        { id: 'haematuria', label: 'Haematuria', subtitle: 'Cyst haemorrhage and stone-related bleeding' },
        { id: 'stroke-tia', label: 'Stroke & TIA', subtitle: 'Berry aneurysm rupture → subarachnoid haemorrhage' },
        { id: 'renal-stones', label: 'Renal Stones', subtitle: 'Increased stone risk in ADPKD' },
        { id: 'normocytic-anaemia', label: 'Normocytic Anaemia', subtitle: 'Anaemia of CKD as function declines' },
      ],
    },

  ],
}
