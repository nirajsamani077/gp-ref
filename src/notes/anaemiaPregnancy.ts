import type { Note } from '../data/notes'

export const anaemiaPregnancy: Note = {
  id: 'anaemia-pregnancy',
  title: 'Anaemia in Pregnancy',
  subtitle: 'Trimester-specific Hb thresholds, iron replacement, IV iron, haemoglobinopathy screening and delivery planning',
  tags: ['haematology', 'obstetrics'],

  body: `anaemia pregnancy iron deficiency haemoglobin trimester booking 28 weeks ferritin oral iron ferrous fumarate sulfate alternate day IV iron ferric carboxymaltose haemoglobinopathy thalassaemia sickle folate B12 postpartum transfusion PPH low MCV`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Anaemia is the commonest medical problem in pregnancy. Plasma volume expands more than red-cell mass, causing a physiological dilutional fall in haemoglobin — hence trimester-specific thresholds are used. Iron deficiency is by far the commonest cause. Untreated anaemia increases the risks of preterm birth, low birthweight, poor tolerance of peripartum blood loss and postnatal depression, so it should be actively screened for and corrected.',
    },

    { type: 'heading', level: 2, text: 'Diagnostic Thresholds (Treat Below)' },
    {
      type: 'table',
      headers: ['Stage', 'Haemoglobin threshold'],
      rows: [
        ['First trimester', '<110 g/L'],
        ['Second & third trimester', '<105 g/L'],
        ['Postpartum', '<100 g/L'],
      ],
      caption: 'Screening FBC is offered at booking and at ~28 weeks (and additionally in multiple pregnancy). A low MCV supports iron deficiency but may indicate a haemoglobinopathy trait.',
    },

    { type: 'heading', level: 2, text: 'Assessment' },
    {
      type: 'list',
      items: [
        'Iron deficiency is the commonest cause; a low MCV/MCH supports it. Ferritin is the most useful test but is an acute-phase reactant — a NORMAL ferritin does not exclude deficiency in pregnancy (ferritin <30 µg/L confirms it).',
        'Consider folate and B12 deficiency if macrocytic or a poor response to iron.',
        'Ensure antenatal haemoglobinopathy screening (thalassaemia/sickle) has been done — a low MCV with replete iron suggests a thalassaemia trait; check partner status where relevant.',
        'Take a dietary history and ask about symptoms (fatigue, breathlessness, palpitations, pica, restless legs) and any bleeding.',
      ],
    },

    { type: 'heading', level: 2, text: 'Oral Iron — First Line' },
    {
      type: 'table',
      headers: ['Preparation', 'Elemental iron', 'Notes'],
      rows: [
        ['Ferrous fumarate 210 mg', '~68 mg', 'Common first choice; one tablet daily/alternate day'],
        ['Ferrous sulfate 200 mg', '~65 mg', 'Equivalent efficacy; choose by tolerability'],
        ['Ferrous gluconate 300 mg', '~35 mg', 'Lower elemental dose — sometimes better tolerated'],
      ],
      caption: 'A trial of oral iron is reasonable in typical iron-deficiency anaemia even before ferritin returns.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Getting the Best From Oral Iron',
      items: [
        'Take on an empty stomach with a source of vitamin C (e.g. orange juice); avoid tea/coffee/calcium around dosing (reduce absorption).',
        'ALTERNATE-DAY dosing (or once daily) improves fractional absorption and reduces GI side effects versus multiple daily doses — as effective and better tolerated.',
        'Counsel on side effects: constipation, nausea, black stools; switching preparation or to alternate-day dosing often helps adherence.',
        'Expect a Hb rise of ~10–20 g/L over ~3–4 weeks; recheck at 2–4 weeks. Continue iron for ~3 months after Hb normalises to replenish stores.',
      ],
    },

    { type: 'heading', level: 2, text: 'IV Iron & Transfusion' },
    {
      type: 'list',
      items: [
        'IV iron (e.g. ferric carboxymaltose) if oral iron is not tolerated or ineffective, when there is insufficient time before delivery, or for significant anaemia (per local pathway). Generally avoided in the FIRST trimester.',
        'Blood transfusion is reserved for severe/symptomatic anaemia, active bleeding, or imminent delivery where there is insufficient time to respond to iron — a specialist/obstetric decision.',
        'Aim to optimise Hb BEFORE delivery to improve tolerance of blood loss and reduce transfusion need (women with placenta praevia/previous PPH especially).',
      ],
    },

    { type: 'heading', level: 2, text: 'Folate, B12 & Poor Response' },
    {
      type: 'list',
      items: [
        'All pregnant women should take folic acid 400 micrograms daily until 12 weeks (5 mg daily if high-risk — e.g. previous NTD, diabetes, BMI ≥30, antiepileptics, sickle/thalassaemia). Treat established folate deficiency with 5 mg daily.',
        'A poor response to iron should NOT be ignored — reassess adherence and for ongoing blood loss, malabsorption (e.g. coeliac), haemoglobinopathy, or B12/folate deficiency, and refer if unexplained.',
      ],
    },

    { type: 'heading', level: 2, text: 'Referral / Escalation' },
    {
      type: 'table',
      headers: ['Situation', 'Action', 'Urgency'],
      rows: [
        ['Iron-deficiency anaemia below threshold', 'Oral iron + recheck at 2–4 weeks', 'Routine'],
        ['Intolerant/ineffective oral iron, or late in pregnancy', 'IV iron per pathway', 'Soon'],
        ['Severe/symptomatic anaemia or near delivery', 'Obstetric/haematology assessment ± transfusion', 'Urgent'],
        ['Non-iron-deficient or unresponsive anaemia', 'Haematology / obstetric medicine', 'Routine–urgent'],
      ],
    },

    { type: 'heading', level: 2, text: 'Patient Information Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Anaemia (Iron Deficiency)', url: 'https://cks.nice.org.uk/topics/anaemia-iron-deficiency/' },
        { label: 'BSH — Anaemia in Pregnancy (Guideline PDF)', url: 'https://b-s-h.org.uk/guidelines/guidelines/uk-guidelines-on-the-management-of-iron-deficiency-in-pregnancy/' },
        { label: 'RCOG — Blood Transfusion in Obstetrics', url: 'https://www.rcog.org.uk/guidance/browse-all-guidance/green-top-guidelines/' },
        { label: 'NHS — Vitamins & Iron in Pregnancy', url: 'https://www.nhs.uk/pregnancy/keeping-well/vitamins-minerals-and-supplements/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'microcytic-anaemia', label: 'Microcytic Anaemia', subtitle: 'Iron deficiency work-up and replacement detail' },
        { id: 'macrocytic-anaemia', label: 'Macrocytic Anaemia', subtitle: 'B12/folate deficiency if macrocytic' },
        { id: 'sickle-cell', label: 'Sickle Cell Disease', subtitle: 'Haemoglobinopathy screening and pregnancy implications' },
        { id: 'restless-legs', label: 'Restless Legs Syndrome', subtitle: 'Iron deficiency as a driver — common in pregnancy' },
        { id: 'gestational-diabetes', label: 'Gestational Diabetes', subtitle: 'Other key antenatal screening/monitoring' },
      ],
    },

  ],
}
