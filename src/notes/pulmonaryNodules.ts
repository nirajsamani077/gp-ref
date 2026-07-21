import type { Note } from '../data/notes'

export const pulmonaryNodules: Note = {
  id: 'pulmonary-nodules',
  title: 'Incidental Pulmonary Nodules',
  subtitle: 'The incidental nodule pathway — BTS/Fleischner surveillance, risk scoring and when to refer',
  tags: ['respiratory'],

  body: `pulmonary nodule incidental lung nodule solitary pulmonary nodule SPN CT surveillance Fleischner criteria British Thoracic Society BTS Brock model Herder model volumetry PET-CT ground glass subsolid nodule lung cancer 2WW`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'BTS — Pulmonary Nodules Guideline', url: 'https://www.brit-thoracic.org.uk/quality-improvement/guidelines/pulmonary-nodules/' },
        { label: 'NICE NG12 — Suspected Cancer (Lung)', url: 'https://www.nice.org.uk/guidance/ng12' },
        { label: 'Fleischner Society 2017 Criteria', url: 'https://pubs.rsna.org/doi/10.1148/radiol.2017161659' },
      ],
    },

    {
      type: 'callout',
      variant: 'info',
      title: 'What a Pulmonary Nodule Is',
      items: [
        'A rounded opacity ≤3 cm surrounded by aerated lung; >3 cm is a "mass" and is treated as malignant until proven otherwise → urgent 2WW referral',
        'Overwhelmingly found incidentally on CT done for another reason — most are benign (granuloma, intrapulmonary lymph node, hamartoma)',
        'The radiology report usually states the surveillance plan; the GP role is to ensure the follow-up CT is not lost, safety-net symptoms, and address smoking',
      ],
    },

    { type: 'heading', level: 2, text: 'Risk Stratification (BTS Pathway)' },

    {
      type: 'list',
      items: [
        'Nodules <5 mm (or <80 mm³ by volumetry) or clearly benign (fat = hamartoma; benign pattern of calcification) → no follow-up needed',
        'Solid nodules ≥5–6 mm get CT surveillance; the Brock model estimates malignancy risk from size, morphology and patient factors',
        'If risk is intermediate/high, a Herder score (adds PET-CT avidity) refines it and guides biopsy vs excision vs continued surveillance',
        'Subsolid (ground-glass/part-solid) nodules grow slowly but a solid component or enlargement raises concern for adenocarcinoma — longer surveillance (up to 4 years)',
      ],
    },

    {
      type: 'table',
      headers: ['Feature', 'Lower risk', 'Higher risk'],
      rows: [
        ['Size', '<6 mm', 'Larger / growing on serial CT'],
        ['Margin', 'Smooth', 'Spiculated / lobulated'],
        ['Location', 'Lower lobe', 'Upper lobe'],
        ['Density', 'Solid, benign calcification, fat', 'Part-solid with growing solid component'],
        ['Patient', 'Never-smoker, young', 'Smoker/ex-smoker, older, prior cancer, FHx, emphysema/fibrosis'],
      ],
      caption: 'Growth on serial CT (or a new solid component in a subsolid nodule) is the key trigger for biopsy/resection.',
    },

    { type: 'heading', level: 2, text: 'The GP Role' },

    {
      type: 'list',
      items: [
        'Confirm the surveillance interval from the report and ensure it is booked — failed follow-up of nodules is a recognised cause of delayed lung-cancer diagnosis',
        'Safety-net: haemoptysis, weight loss, persistent cough, or new symptoms → 2WW regardless of the surveillance timeline',
        'Optimise smoking cessation at every contact — the single most valuable intervention',
        'Reassure appropriately: the majority of small incidental nodules are benign and surveillance is precautionary',
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
