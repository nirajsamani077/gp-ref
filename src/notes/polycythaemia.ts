import type { Note } from '../data/notes'

export const polycythaemia: Note = {
  id: 'polycythaemia',
  title: 'Polycythaemia (Raised Haematocrit)',
  subtitle: 'Relative vs absolute, primary (PV) vs secondary, JAK2 testing, thrombosis risk and venesection',
  tags: ['haematology'],

  body: `polycythaemia raised haematocrit high haemoglobin erythrocytosis polycythaemia vera PV JAK2 V617F exon 12 secondary polycythaemia hypoxia EPO erythropoietin apparent relative Gaisbock venesection aspirin hydroxycarbamide ruxolitinib thrombosis smoking OSA testosterone aquagenic pruritus splenomegaly`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Polycythaemia (erythrocytosis) is a raised haemoglobin/haematocrit. The clinical task is to work out whether it is APPARENT (reduced plasma volume, normal red-cell mass) or ABSOLUTE (a true increase in red cells), and — if absolute — whether it is PRIMARY (a marrow disorder, polycythaemia vera) or SECONDARY (driven by erythropoietin). This matters because polycythaemia vera carries a significant thrombosis risk that is modifiable with treatment.',
    },

    {
      type: 'callout',
      variant: 'info',
      title: 'First Steps',
      items: [
        'Confirm a persistently raised Hct/Hb on a repeat, well-taken sample (dehydration and prolonged tourniquet time falsely raise it).',
        'A sustained Hct > 0.52 (men) / > 0.48 (women), or Hb above the reference range, warrants investigation.',
        'Apparent (relative) polycythaemia: normal red-cell mass but low plasma volume — obesity, alcohol, smoking, diuretics ("Gaisböck\'s syndrome"). Address the cause and recheck.',
      ],
    },

    { type: 'heading', level: 2, text: 'Primary vs Secondary' },
    {
      type: 'table',
      headers: ['Type', 'Mechanism', 'Clues'],
      rows: [
        ['Polycythaemia vera (PV)', 'Clonal myeloproliferative neoplasm; JAK2 V617F mutation in ~95% (exon 12 in most of the rest)', 'Aquagenic pruritus (itch after a hot bath), erythromelalgia (burning red hands/feet), splenomegaly, raised WCC/platelets, LOW serum EPO'],
        ['Secondary — appropriate EPO', 'Hypoxia drives EPO', 'Smoking (carboxyhaemoglobin), COPD, OSA, cyanotic heart disease, high altitude, obesity-hypoventilation'],
        ['Secondary — inappropriate EPO', 'EPO-secreting pathology', 'Renal cysts/carcinoma, hepatocellular, uterine fibroids, cerebellar haemangioblastoma; exogenous testosterone or EPO/doping'],
      ],
    },

    { type: 'heading', level: 2, text: 'Investigation' },
    {
      type: 'list',
      items: [
        'Repeat FBC with blood film; check ferritin, U&E, LFTs and oxygen saturation.',
        'JAK2 V617F mutation and serum EPO are the key discriminators: low EPO + JAK2-positive = PV; a high EPO points to a secondary cause.',
        'Address obvious secondary drivers — smoking cessation, treat OSA/COPD, review testosterone/anabolic-steroid use.',
        'Refer to haematology if PV is suspected (JAK2-positive, unexplained persistent absolute erythrocytosis, splenomegaly, or associated high platelets/WCC).',
      ],
    },

    { type: 'heading', level: 2, text: 'Management of Polycythaemia Vera' },
    {
      type: 'table',
      headers: ['Intervention', 'Detail'],
      rows: [
        ['Venesection', 'Regular venesection to a target haematocrit < 0.45 — reduces hyperviscosity and thrombosis risk'],
        ['Low-dose aspirin', '75 mg daily (unless contraindicated) to reduce thrombotic risk'],
        ['Cardiovascular risk control', 'BP, lipids, glucose, smoking cessation — thrombosis is the main hazard'],
        ['Cytoreduction', 'Hydroxycarbamide (first-line), or interferon/ruxolitinib — for higher-risk patients (age >60, prior thrombosis, very high counts); specialist-led'],
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Longer-Term Points',
      items: [
        'Manage the aquagenic pruritus (antihistamines, avoid hot baths; specialist options if severe).',
        'Monitor for transformation to myelofibrosis or, less commonly, acute leukaemia.',
        'Ensure the diagnosis is communicated before any surgery (peri-operative thrombosis risk needs planning).',
      ],
    },

    { type: 'heading', level: 2, text: 'Referral Criteria' },
    {
      type: 'table',
      headers: ['Situation', 'Refer to', 'Urgency'],
      rows: [
        ['Suspected PV (JAK2-positive / low EPO / splenomegaly / high counts)', 'Haematology', 'Urgent–routine'],
        ['Unexplained persistent absolute erythrocytosis', 'Haematology', 'Routine'],
        ['Thrombosis with polycythaemia', 'Acute care + haematology', 'Emergency'],
        ['Apparent polycythaemia', 'Manage cause in primary care; recheck', 'Routine'],
      ],
    },

    { type: 'heading', level: 2, text: 'Patient Information Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'BSH — Investigation & Management of Erythrocytosis (Guideline)', url: 'https://b-s-h.org.uk/guidelines/' },
        { label: 'MPN Voice — Polycythaemia Vera', url: 'https://www.mpnvoice.org.uk/' },
        { label: 'Blood Cancer UK — PV', url: 'https://bloodcancer.org.uk/' },
        { label: 'NICE CKS — Polycythaemia/Erythrocytosis', url: 'https://cks.nice.org.uk/' },
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
        { id: 'pruritus', label: 'Generalised Pruritus', subtitle: 'Aquagenic itch as a PV clue' },
      ],
    },

  ],
}
