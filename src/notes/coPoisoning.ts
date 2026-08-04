import type { Note } from '../data/notes'

export const coPoisoning: Note = {
  id: 'co-poisoning',
  title: 'Carbon Monoxide Poisoning',
  subtitle: 'The great mimic — flu-like symptoms that improve away from home, carboxyhaemoglobin and 100% oxygen',
  tags: ['general'],

  body: `carbon monoxide poisoning CO headache flu-like nausea faulty boiler gas fire cherry red COHb carboxyhaemoglobin pulse oximetry falsely normal 100% oxygen hyperbaric occupancy alarm winter delayed neurological`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Carbon monoxide is a colourless, odourless gas produced by incomplete combustion (faulty boilers, gas fires, blocked flues, BBQs/generators indoors). It binds haemoglobin with ~250× the affinity of oxygen, causing tissue hypoxia. It is easily missed because the symptoms are non-specific and flu-like — so it is a "must-think-of" diagnosis, especially in winter, in multiple household members, or when symptoms improve away from home.',
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Think of It — the Clues',
      items: [
        'Non-specific: headache (the commonest symptom), nausea/vomiting, dizziness, fatigue, confusion, and flu-like malaise — but WITHOUT fever, and often affecting several people (or pets) in the same building.',
        'Classic pointers: symptoms that IMPROVE when away from home/workplace and RECUR on returning; a faulty/poorly serviced appliance; and living in shared/rented accommodation.',
        'The "cherry-red" skin sign is rare and late — do not rely on it. Standard pulse oximetry is FALSELY NORMAL (it cannot distinguish carboxyhaemoglobin from oxyhaemoglobin).',
        'Ask specifically: any headaches/symptoms in others at home? Do symptoms ease when out? Any CO alarm? Recently serviced boiler?',
      ],
    },

    { type: 'heading', level: 2, text: 'Assessment & Immediate Action' },
    {
      type: 'list',
      items: [
        'If suspected and the patient is symptomatic: remove them from the source, give HIGH-FLOW 100% oxygen (via a non-rebreathe mask), and refer to hospital urgently — 999 if significantly unwell (drowsiness, chest pain, neurological signs, pregnancy).',
        'Diagnosis is confirmed by a carboxyhaemoglobin (COHb) level (venous or arterial blood gas / co-oximeter) — but treatment should not wait for it. Note COHb is higher in smokers at baseline.',
        'Hospital: 100% oxygen reduces the CO half-life from ~4–6 hours to ~1 hour; hyperbaric oxygen is considered in severe cases (loss of consciousness, neurological signs, cardiac involvement, pregnancy) — a specialist decision.',
      ],
    },

    { type: 'heading', level: 2, text: 'Complications & Prevention' },
    {
      type: 'list',
      items: [
        'Severe poisoning risks cardiac ischaemia/arrhythmia, seizures and coma; DELAYED neurological/neuropsychiatric sequelae (cognitive impairment, movement disorders, personality change) can appear days to weeks later — arrange follow-up.',
        'Pregnancy: the fetus is especially vulnerable (fetal haemoglobin binds CO avidly) — treat promptly and involve obstetrics.',
        'Prevention: advise fitting an audible CO alarm, annual servicing of gas appliances by a registered engineer, adequate ventilation, and never using BBQs/generators indoors. A faulty appliance is a public-safety issue — advise disconnection and professional inspection.',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Carbon Monoxide Poisoning', url: 'https://cks.nice.org.uk/' },
        { label: 'TOXBASE (registered clinicians)', url: 'https://www.toxbase.org/' },
        { label: 'NHS — Carbon Monoxide Poisoning', url: 'https://www.nhs.uk/conditions/carbon-monoxide-poisoning/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'headache-assessment', label: 'Headache Assessment', subtitle: 'CO poisoning in the headache differential' },
        { id: 'feverish-child', label: 'Feverish Child Under 5', subtitle: 'Flu-like illness WITHOUT fever should prompt thoughts of CO' },
        { id: 'syncope', label: 'Syncope & Collapse', subtitle: 'Collapse/altered consciousness differential' },
      ],
    },

  ],
}
