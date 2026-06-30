import type { Note } from '../data/notes'

export const anaemiaPregnancy: Note = {
  id: 'anaemia-pregnancy',
  title: 'Anaemia in Pregnancy',
  subtitle: 'Trimester-specific Hb thresholds, iron replacement and haemoglobinopathy screening',
  tags: ['haematology', 'obstetrics'],

  body: `anaemia pregnancy iron deficiency haemoglobin trimester ferritin oral iron ferrous fumarate sulfate IV iron haemoglobinopathy thalassaemia sickle folate B12 postpartum`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Anaemia in Pregnancy', url: 'https://cks.nice.org.uk/topics/anaemia-iron-deficiency/' },
        { label: 'BSH — Anaemia in Pregnancy Guideline', url: 'https://b-s-h.org.uk/guidelines/' },
      ],
    },

    { type: 'heading', level: 2, text: 'Diagnostic Thresholds (Treat With Iron Below)' },

    {
      type: 'table',
      headers: ['Stage', 'Haemoglobin threshold'],
      rows: [
        ['First trimester', '<110 g/L'],
        ['Second & third trimester', '<105 g/L'],
        ['Postpartum', '<100 g/L'],
      ],
      caption: 'Physiological haemodilution lowers Hb in pregnancy, hence the trimester-specific cut-offs. Screening FBC is done at booking and at ~28 weeks.',
    },

    { type: 'heading', level: 2, text: 'Assessment' },

    {
      type: 'list',
      items: [
        'Iron deficiency is the commonest cause; a low MCV supports it. Ferritin is the most useful test but rises with inflammation — a normal ferritin does not exclude deficiency in pregnancy',
        'Also consider folate and B12 deficiency (check if macrocytic or poor response to iron)',
        'Ensure haemoglobinopathy screening has been done (antenatal screening for thalassaemia/sickle) — a low MCV with normal/replete iron may indicate thalassaemia trait',
        'Take a dietary history and ask about symptoms (fatigue, breathlessness, palpitations)',
      ],
    },

    { type: 'heading', level: 2, text: 'Management' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Iron Replacement',
      items: [
        'Oral iron first-line (e.g. ferrous fumarate or sulfate); a trial of iron is reasonable if iron deficiency is likely even without checking ferritin in an otherwise typical case',
        'Take with vitamin C (orange juice) to aid absorption; alternate-day dosing improves absorption and tolerability; counsel on GI side effects (constipation, black stools)',
        'Expect a Hb rise of ~10–20 g/L over ~3–4 weeks; continue iron for ~3 months after the Hb normalises to replenish stores',
        'IV iron if oral iron is not tolerated/ineffective, in the later stages of pregnancy when time is short, or for significant anaemia (per local pathway)',
        'Significant anaemia near term carries risks (peripartum transfusion, fatigue, postpartum haemorrhage tolerance) — optimise before delivery',
      ],
    },

    {
      type: 'list',
      items: [
        'Folate: all pregnant women should take folic acid (400 micrograms daily, or 5 mg if high-risk) — treat established folate deficiency with 5 mg daily',
        'Do not ignore a poor response to iron — reassess for ongoing blood loss, malabsorption, haemoglobinopathy, or B12/folate deficiency, and refer if unexplained',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'microcytic-anaemia', label: 'Microcytic Anaemia', subtitle: 'Iron deficiency work-up and replacement detail' },
        { id: 'macrocytic-anaemia', label: 'Macrocytic Anaemia', subtitle: 'B12/folate deficiency if macrocytic' },
        { id: 'sickle-cell', label: 'Sickle Cell Disease', subtitle: 'Haemoglobinopathy screening and pregnancy implications' },
        { id: 'gestational-diabetes', label: 'Gestational Diabetes', subtitle: 'Other key antenatal screening/monitoring' },
      ],
    },

  ],
}
