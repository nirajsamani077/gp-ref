import type { Note } from '../data/notes'

export const polycythaemia: Note = {
  id: 'polycythaemia',
  title: 'Polycythaemia (Raised Haematocrit)',
  subtitle: 'Relative vs absolute, primary (PV) vs secondary, JAK2 testing and thrombosis risk',
  tags: ['haematology'],

  body: `polycythaemia raised haematocrit high haemoglobin erythrocytosis polycythaemia vera PV JAK2 V617F secondary polycythaemia hypoxia EPO erythropoietin venesection aspirin hydroxycarbamide thrombosis smoking OSA`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'BSH — Investigation & Management of Erythrocytosis', url: 'https://b-s-h.org.uk/guidelines/' },
        { label: 'NICE CKS — Polycythaemia/Erythrocytosis', url: 'https://cks.nice.org.uk/' },
        { label: 'MPN Voice', url: 'https://www.mpnvoice.org.uk/' },
      ],
    },

    {
      type: 'callout',
      variant: 'info',
      title: 'First Step — Is It Real and Is It Absolute?',
      items: [
        'Confirm a persistently raised haematocrit (Hct) / haemoglobin on a repeat sample',
        'Relative (apparent) polycythaemia: normal red-cell mass but reduced plasma volume — dehydration, diuretics, alcohol, obesity, smoking ("Gaisböck\'s")',
        'Absolute polycythaemia: a genuine increase in red cells — divide into primary (marrow) and secondary (driven by EPO)',
      ],
    },

    { type: 'heading', level: 2, text: 'Primary vs Secondary' },

    {
      type: 'table',
      headers: ['Type', 'Mechanism', 'Clues'],
      rows: [
        ['Polycythaemia vera (PV)', 'Clonal myeloproliferative disorder; JAK2 V617F mutation in ~95%', 'Aquagenic pruritus (itch after a hot bath), erythromelalgia, splenomegaly, high WCC/platelets, low EPO'],
        ['Secondary — hypoxia-driven', 'Appropriate EPO rise', 'Smoking, COPD, OSA, cyanotic heart disease, high altitude'],
        ['Secondary — inappropriate EPO', 'Tumour EPO secretion', 'Renal cysts/carcinoma, hepatocellular, cerebellar haemangioblastoma; exogenous testosterone/EPO doping'],
      ],
    },

    { type: 'heading', level: 2, text: 'Investigation' },

    {
      type: 'list',
      items: [
        'Repeat FBC, review the blood film; check ferritin, U&E, LFTs, and oxygen saturation',
        'JAK2 V617F mutation and serum EPO are the key discriminators (low EPO + JAK2 positive = PV; high EPO suggests secondary)',
        'Address obvious secondary drivers: smoking cessation, treat OSA; review testosterone/anabolic steroid use',
        'Refer to haematology if PV is suspected (JAK2 positive, unexplained absolute erythrocytosis, splenomegaly, or associated high platelets/WCC)',
      ],
    },

    { type: 'heading', level: 2, text: 'Management of Polycythaemia Vera' },

    {
      type: 'list',
      items: [
        'The main risk is thrombosis (arterial and venous) — the aim is to reduce it',
        'Venesection to a target haematocrit (typically <0.45), low-dose aspirin (unless contraindicated), and cardiovascular risk-factor control',
        'Cytoreduction (e.g. hydroxycarbamide, or ruxolitinib/interferon) for higher-risk patients — specialist-led',
        'Long-term: monitor for transformation to myelofibrosis or acute leukaemia; ensure good communication of the diagnosis before surgery (thrombosis risk)',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'haem-malignancies', label: 'Haematological Malignancies', subtitle: 'Myeloproliferative neoplasms overview' },
        { id: 'platelets-bruising', label: 'Platelet Disorders', subtitle: 'Thrombocytosis often coexists in MPNs' },
        { id: 'osa', label: 'Obstructive Sleep Apnoea', subtitle: 'A common cause of secondary polycythaemia' },
        { id: 'copd', label: 'COPD', subtitle: 'Chronic hypoxia driving secondary erythrocytosis' },
        { id: 'dvt', label: 'DVT', subtitle: 'Thrombosis — the main complication to prevent' },
      ],
    },

  ],
}
