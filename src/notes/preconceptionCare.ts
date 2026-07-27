import type { Note } from '../data/notes'

export const preconceptionCare: Note = {
  id: 'preconception-care',
  title: 'Preconception Care & Folic Acid',
  subtitle: 'Optimising health before pregnancy — folic acid dosing, medication review, chronic disease and vaccination',
  tags: ['obstetrics'],

  body: `preconception care folic acid 400 micrograms 5 mg neural tube defect vitamin D rubella smoking alcohol BMI diabetes epilepsy medication review teratogenic ACE inhibitor sodium valproate rubella MMR carrier screening optimise chronic disease`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Much of the value of antenatal care actually happens BEFORE conception — the neural tube closes and organogenesis is largely complete before many women even know they are pregnant. Preconception care is the opportunity to optimise folate status, review teratogenic and unsuitable medicines, control chronic disease, check immunity, and address lifestyle. Every contact with a woman of reproductive age who might conceive is a chance to raise it.',
    },

    { type: 'heading', level: 2, text: 'Folic Acid' },
    {
      type: 'table',
      headers: ['Dose', 'Who', 'When'],
      rows: [
        ['400 micrograms daily', 'All women planning/able to conceive', 'From before conception until 12 weeks'],
        ['5 mg daily', 'Higher-risk of neural tube defect', 'From before conception (ideally ~3 months) until 12 weeks'],
      ],
      caption: 'High-dose (5 mg) indications: previous NTD-affected pregnancy, diabetes, BMI ≥30, antiepileptic drugs, coeliac/malabsorption, sickle cell/thalassaemia, and those on certain medicines (e.g. methotrexate — which must be stopped). All women should also take vitamin D 10 micrograms daily.',
    },

    { type: 'heading', level: 2, text: 'Medication Review — Stop/Switch Teratogens' },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Review Every Regular Medicine',
      items: [
        'Sodium valproate: must NOT be used in girls/women of childbearing potential unless the Pregnancy Prevention Programme conditions are met — highly teratogenic (neural tube defects, neurodevelopmental harm); review with neurology/psychiatry.',
        'ACE inhibitors/ARBs, statins, warfarin, retinoids (isotretinoin/acitretin), methotrexate, and many others need stopping/switching before conception — plan ahead.',
        'Optimise essential medicines to the safest effective option (e.g. antiepileptics, antidepressants, thyroid, asthma) rather than stopping abruptly — the risk of uncontrolled disease often outweighs drug risk.',
        'Use bumps (medicinesinpregnancy.org) and specialist advice for individual drugs.',
      ],
    },

    { type: 'heading', level: 2, text: 'Chronic Disease, Immunity & Lifestyle' },
    {
      type: 'list',
      items: [
        'Diabetes: aim for good glycaemic control (target HbA1c per guidance, ideally <48 if achievable safely) BEFORE conception — reduces congenital anomaly and miscarriage risk; high-dose folic acid; review medicines (metformin/insulin usually continued).',
        'Epilepsy, hypertension, thyroid disease, mental illness, SLE/APS: optimise and pre-plan with the relevant specialist.',
        'Check rubella/MMR immunity and offer MMR if non-immune (a LIVE vaccine — avoid pregnancy for 1 month after); ensure cervical screening is up to date; offer chlamydia screening.',
        'Lifestyle: stop smoking, avoid alcohol, aim for a healthy BMI, review recreational drugs, and food-safety advice.',
        'Offer preconception carrier screening/genetic counselling where relevant (e.g. haemoglobinopathy, family history, consanguinity).',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Pre-conception Advice & Management', url: 'https://cks.nice.org.uk/topics/pre-conception-advice-management/' },
        { label: 'bumps — Medicines in Pregnancy', url: 'https://www.medicinesinpregnancy.org/' },
        { label: 'MHRA — Valproate Pregnancy Prevention', url: 'https://www.gov.uk/guidance/valproate-use-by-women-and-girls' },
        { label: 'Tommy\'s — Planning a Pregnancy', url: 'https://www.tommys.org/pregnancy-information/planning-a-pregnancy' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'gestational-diabetes', label: 'Gestational Diabetes', subtitle: 'Preconception glycaemic optimisation in diabetes' },
        { id: 'epilepsyAdults', label: 'Epilepsy (Adults)', subtitle: 'Valproate and antiepileptic planning before pregnancy' },
        { id: 'anaemia-pregnancy', label: 'Anaemia in Pregnancy', subtitle: 'Folate/iron and haemoglobinopathy screening' },
        { id: 'immunisation-schedule', label: 'Immunisation Schedule', subtitle: 'Rubella/MMR immunity check' },
        { id: 'antenatal-screening', label: 'Antenatal & Newborn Screening', subtitle: 'The screening pathway once pregnant' },
      ],
    },

  ],
}
