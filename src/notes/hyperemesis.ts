import type { Note } from '../data/notes'

export const hyperemesis: Note = {
  id: 'hyperemesis',
  title: 'Nausea & Vomiting in Pregnancy / Hyperemesis',
  subtitle: 'PUQE score, ketones, antiemetic ladder and when to admit for hyperemesis gravidarum',
  tags: ['obstetrics'],

  body: `nausea vomiting pregnancy hyperemesis gravidarum PUQE score ketones dehydration cyclizine promethazine prochlorperazine metoclopramide ondansetron pyridoxine ginger weight loss electrolytes VTE prophylaxis thiamine`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'RCOG — Nausea/Vomiting & Hyperemesis (Green-top 69)', url: 'https://www.rcog.org.uk/guidance/browse-all-guidance/green-top-guidelines/' },
        { label: 'NICE CKS — Nausea/Vomiting in Pregnancy', url: 'https://cks.nice.org.uk/topics/nausea-vomiting-in-pregnancy/' },
        { label: 'Pregnancy Sickness Support', url: 'https://www.pregnancysicknesssupport.org.uk/' },
      ],
    },

    { type: 'heading', level: 2, text: 'Overview' },

    {
      type: 'list',
      items: [
        'Nausea and vomiting affect ~80% of early pregnancies (an hCG effect, usually settling by ~16–20 weeks) — common and usually self-limiting',
        'Hyperemesis gravidarum (HG) is the severe end (<1%): protracted vomiting with the triad of >5% pre-pregnancy weight loss, dehydration, and electrolyte disturbance',
        'Always consider OTHER causes of vomiting: UTI, gastroenteritis, other abdominal pathology, medication, and (in later pregnancy) pre-eclampsia and acute fatty liver',
      ],
    },

    { type: 'heading', level: 2, text: 'Assessment' },

    {
      type: 'list',
      items: [
        'Use the PUQE score (nausea, vomiting, retching over 24 hours) to grade severity',
        'Check urine for ketones and dipstick (exclude UTI); ketonuria ≥1+ indicates significant dehydration → consider antiemetics ± admission',
        'Bloods if unwell: FBC (raised haematocrit = dehydration), U&E (hypokalaemia, hyponatraemia), LFTs, TFTs (a raised hCG can cause biochemical thyrotoxicosis), and glucose/amylase',
        'Weigh the patient and assess hydration',
      ],
    },

    { type: 'heading', level: 2, text: 'Antiemetic Ladder' },

    {
      type: 'table',
      headers: ['Line', 'Options'],
      rows: [
        ['Non-pharmacological (mild)', 'Reassurance, small frequent bland meals, oral hydration; ginger; pyridoxine (vitamin B6); acupressure (P6/Sea-Bands)'],
        ['First-line antiemetics', 'Cyclizine 50 mg, or promethazine, or prochlorperazine (Stemetil), or chlorpromazine'],
        ['Second-line', 'Metoclopramide (max 5 days — extrapyramidal risk) or domperidone; ondansetron (effective; discuss the small possible risk of cleft palate if used in the first trimester — shared decision, often used when other agents fail)'],
        ['Third-line / specialist', 'Corticosteroids (e.g. oral/IV hydrocortisone/prednisolone) under obstetric guidance'],
      ],
      caption: 'All first-line antiemetics are considered safe in pregnancy. Combine agents from different classes if a single agent is insufficient.',
    },

    { type: 'heading', level: 2, text: 'When to Admit' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Admit if:',
      items: [
        'Unable to keep down oral fluids/antiemetics, significant ketonuria/dehydration, weight loss, or electrolyte disturbance',
        'Inpatient care: IV rehydration (normal saline with potassium — avoid dextrose-only, and give thiamine to prevent Wernicke\'s encephalopathy), IV antiemetics, and VTE prophylaxis (pregnancy + dehydration raises thrombosis risk)',
        'HG can be associated with fetal growth restriction and has a recurrence risk (~15%) in future pregnancies — arrange follow-up and support',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'pre-eclampsia', label: 'Pre-eclampsia & Gestational Hypertension', subtitle: 'Later-pregnancy vomiting — exclude PET/HELLP' },
        { id: 'anaemia-pregnancy', label: 'Anaemia in Pregnancy', subtitle: 'Other antenatal complications and monitoring' },
        { id: 'antiemetics-vertigo', label: 'Antiemetics & Vertigo Medications', subtitle: 'Antiemetic classes and mechanisms' },
        { id: 'gestational-diabetes', label: 'Gestational Diabetes', subtitle: 'Common antenatal condition requiring monitoring' },
      ],
    },

  ],
}
