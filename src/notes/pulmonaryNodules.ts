import type { Note } from '../data/notes'

export const pulmonaryNodules: Note = {
  id: 'pulmonary-nodules',
  title: 'Incidental Pulmonary Nodules',
  subtitle: 'The incidental nodule pathway — BTS/Fleischner surveillance, risk scoring, and the GP safety-netting role',
  tags: ['respiratory'],

  body: `pulmonary nodule incidental lung nodule solitary pulmonary nodule SPN CT surveillance Fleischner criteria British Thoracic Society BTS Brock model Herder model volumetry PET-CT ground glass subsolid part-solid nodule hamartoma granuloma lung cancer 2WW smoking`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'A pulmonary nodule is a rounded opacity ≤3 cm surrounded by aerated lung (anything >3 cm is a "mass" and is treated as malignant until proven otherwise → urgent referral). With the rise in CT scanning, incidental nodules are increasingly common and the overwhelming majority are benign (granuloma, intrapulmonary lymph node, hamartoma). The specialist team sets the surveillance plan; the GP\'s job is to make sure follow-up is not lost, to safety-net symptoms, and to address smoking.',
    },

    { type: 'heading', level: 2, text: 'Risk Stratification (BTS Pathway)' },
    {
      type: 'list',
      items: [
        'Nodules <5 mm (or <80 mm³ by volumetry), or with clearly benign features (fat = hamartoma; a benign pattern of calcification), need no follow-up.',
        'Solid nodules ≥5–6 mm enter CT surveillance; the Brock model estimates malignancy risk from size, morphology and patient factors.',
        'If risk is intermediate/high, the Herder score (adds PET-CT avidity) refines it and guides biopsy vs excision vs continued surveillance.',
        'Subsolid (ground-glass/part-solid) nodules grow slowly, but a solid component or interval enlargement raises concern for adenocarcinoma — longer surveillance (up to ~4 years).',
      ],
    },
    {
      type: 'table',
      headers: ['Feature', 'Lower risk', 'Higher risk'],
      rows: [
        ['Size', '<6 mm', 'Larger / growing on serial CT'],
        ['Margin', 'Smooth', 'Spiculated / lobulated'],
        ['Location', 'Lower lobe', 'Upper lobe'],
        ['Density', 'Solid with benign calcification, or fat', 'Part-solid with a growing solid component'],
        ['Patient', 'Never-smoker, younger', 'Smoker/ex-smoker, older, prior cancer, family history, emphysema/fibrosis'],
      ],
      caption: 'Growth on serial CT (or a new/growing solid component in a subsolid nodule) is the key trigger for biopsy or resection.',
    },

    { type: 'heading', level: 2, text: 'The GP Role' },
    {
      type: 'callout',
      variant: 'info',
      title: 'Don\'t Let the Follow-Up Slip',
      items: [
        'Confirm the surveillance interval from the radiology report and ensure the follow-up CT is actually booked — lost follow-up of nodules is a recognised cause of delayed lung-cancer diagnosis.',
        'Safety-net: haemoptysis, unexplained weight loss, persistent cough or new/worsening symptoms → lung cancer 2WW regardless of the surveillance timeline.',
        'Optimise SMOKING CESSATION at every contact — the single most valuable intervention.',
        'Reassure appropriately: most small incidental nodules are benign and surveillance is precautionary; acknowledge the anxiety a "spot on the lung" causes.',
      ],
    },

    { type: 'heading', level: 2, text: 'Patient Information Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'BTS — Pulmonary Nodules Guideline', url: 'https://www.brit-thoracic.org.uk/quality-improvement/guidelines/pulmonary-nodules/' },
        { label: 'Fleischner Society 2017 Criteria', url: 'https://pubs.rsna.org/doi/10.1148/radiol.2017161659' },
        { label: 'NICE NG12 — Suspected Cancer (Lung)', url: 'https://www.nice.org.uk/guidance/ng12' },
        { label: 'Roy Castle Lung Cancer Foundation', url: 'https://roycastle.org/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'lung-cancer', label: 'Lung Cancer', subtitle: '2WW criteria, staging and the malignant end of the pathway' },
        { id: 'two-week-wait', label: '2WW Referral Guide', subtitle: 'When a nodule/mass warrants urgent referral' },
        { id: 'smoking-cessation', label: 'Smoking Cessation', subtitle: 'The key modifiable risk factor' },
        { id: 'chronicCough', label: 'Chronic Cough', subtitle: 'Symptom that may prompt the CT finding a nodule' },
        { id: 'interstitial-lung-disease', label: 'Interstitial Lung Disease', subtitle: 'Fibrosis raises malignancy risk in nodules' },
      ],
    },

  ],
}
