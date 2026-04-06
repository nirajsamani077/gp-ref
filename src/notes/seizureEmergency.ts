import type { Note } from '../data/notes'

export const seizureEmergency: Note = {
  id: 'seizureEmergency',
  title: 'Seizure \u2014 Emergency Management',
  subtitle: 'Status epilepticus, benzodiazepine doses, 2nd-line IV drugs, and when to call 999',
  tags: ['neurology'],

  body: 'seizure emergency status epilepticus management buccal midazolam rectal diazepam lorazepam IV levetiracetam phenytoin valproate 999 call ambulance oxygen recovery position blood glucose hypoglycaemia Pabrinex thiamine alcohol withdrawal 5 minutes first dose second dose 10 minutes 15 minutes ITU general anaesthesia phenobarbital cardiac monitoring breakthrough seizure non-compliance AED infection alcohol drug withdrawal sleep deprivation electrolyte imbalance intracranial pathology drug interaction post-ictal recovery SUDEP first aid',

  content: [
    // ── IMMEDIATE MANAGEMENT ──────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'info',
      title: 'Immediate Management \u2014 All Seizures',
      items: [
        'Ensure scene safety \u2014 move hazards away from the patient; do not restrain',
        'Do not place anything in the patient\'s mouth',
        'Place in recovery position as soon as the seizure stops',
        'Give supplemental oxygen',
        'Time the seizure from onset \u2014 this is critical for clinical decision-making',
        'Call 999 if seizure lasts >5 minutes, if you are uncertain, or if this is a first-ever seizure',
      ],
    },

    // ── STEP BY STEP ──────────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Step-by-Step Management',
    },
    {
      type: 'list',
      items: [
        '0\u20135 min: Protect the patient \u2014 do not restrain; airway adjunct if needed; give oxygen; position semi-prone; time the seizure; gain IV access if possible; check blood glucose (BM) \u2014 if hypoglycaemic give 150\u2013200 ml of 10% glucose IV; if alcohol excess or malnutrition suspected, give Pabrinex (thiamine) IV before glucose to prevent Wernicke\'s encephalopathy',
        '5 min: If seizure is still ongoing \u2192 give FIRST DOSE benzodiazepine (see dose table below); call 999 if not already done',
        '10 min: If still seizing \u2192 give SECOND DOSE benzodiazepine; ensure 999 has been called',
        '15+ min: Status epilepticus \u2014 second-line IV drugs required (hospital setting only); escalate to critical care / anaesthetics',
      ],
    },

    // ── IMAGE ─────────────────────────────────────────────────────────────────
    {
      type: 'image',
      src: '/images/seizure-algorithm.jpg',
      alt: 'Treatment algorithm for tonic-clonic status epilepticus in adults: 0\u20135 min initial management, 5\u201315 min first line lorazepam or buccal midazolam, 15+ min second line levetiracetam/phenytoin/valproate IV',
      caption: 'Status epilepticus treatment algorithm \u2014 adult',
    },

    // ── BENZODIAZEPINE DOSES IN GP ────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Benzodiazepine Doses in Community / GP Setting',
    },
    {
      type: 'table',
      headers: ['Drug', 'Age / Weight', 'Dose', 'Route', 'Notes'],
      rows: [
        ['Buccal midazolam', 'Neonate / child <1 year', '2.5 mg (or 300 mcg/kg)', 'Buccal', 'Preferred in community \u2014 no rectal administration required'],
        ['Buccal midazolam', 'Child 1\u20134 years', '5 mg', 'Buccal', ''],
        ['Buccal midazolam', 'Child 5\u20139 years', '7.5 mg', 'Buccal', ''],
        ['Buccal midazolam', 'Child \u226510 years / adult', '10 mg', 'Buccal', ''],
        ['Rectal diazepam', 'Neonate', '2.5 mg', 'Rectal', 'Use if buccal midazolam not available'],
        ['Rectal diazepam', 'Child <1 year', '5 mg', 'Rectal', ''],
        ['Rectal diazepam', 'All others (child + adult)', '10 mg', 'Rectal', ''],
      ],
      caption: 'Repeat dose after 10 minutes if seizure continues. Do not give more than 2 doses in the community. Call 999.',
    },

    // ── ADULT FIRST-LINE HOSPITAL DOSES ──────────────────────────────────────
    {
      type: 'heading',
      level: 3,
      text: 'Adult First-Line Hospital Doses (for reference)',
    },
    {
      type: 'list',
      items: [
        'IV access available: lorazepam 4 mg IV bolus; repeat once after 5 minutes if seizure continues',
        'No IV access: buccal midazolam 10 mg',
      ],
    },

    // ── STATUS EPILEPTICUS 2ND LINE ───────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Status Epilepticus \u2014 2nd Line Drugs (Hospital Reference)',
    },
    {
      type: 'callout',
      variant: 'danger',
      title: '2nd Line Drugs \u2014 Hospital Setting Only',
      items: [
        'These drugs are IV and require hospital monitoring \u2014 for reference only in primary care',
        'IV Levetiracetam 60 mg/kg (max 4500 mg) in 100 ml sodium chloride 0.9% over 10 minutes \u2014 PREFERRED: fewest drug interactions, safest overall',
        'IV Phenytoin 20 mg/kg (max 2 g) at \u226450 mg/min \u2014 caution: requires cardiac monitoring and wide bore IV; avoid if known generalised epilepsy, cardiac disease, porphyria, or drug overdose',
        'IV Valproate 40 mg/kg (max 3000 mg) in 100 ml sodium chloride 0.9% over 5 minutes \u2014 preferred if known idiopathic generalised epilepsy; AVOID in women of childbearing potential',
        'If seizures persist after 2nd line: consider IV phenobarbital or repeat with a different 2nd-line agent',
        '>30 minutes ongoing seizure \u2192 general anaesthesia and ITU admission',
      ],
    },

    // ── WHEN TO CALL 999 ──────────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'danger',
      title: 'When to Call 999',
      items: [
        'Seizure lasting >5 minutes',
        'Second seizure occurring without full recovery between episodes',
        'First-ever seizure \u2014 regardless of duration',
        'Known epilepsy but seizure not responding as expected',
        'Any signs of head injury, meningism (neck stiffness), or hypoglycaemia',
        'Pregnancy',
        'Child with a complex or first febrile seizure',
      ],
    },

    // ── COMMON CAUSES OF BREAKTHROUGH SEIZURES ────────────────────────────────
    {
      type: 'callout',
      variant: 'info',
      title: 'Common Causes of Breakthrough Seizures',
      items: [
        'Non-compliance with AEDs \u2014 the most common cause; explore barriers to adherence',
        'Concurrent infection or acute illness (especially febrile illness)',
        'Alcohol or recreational drug use, or alcohol withdrawal',
        'Sleep deprivation',
        'Hypoglycaemia',
        'Electrolyte imbalance (hyponatraemia, hypomagnesaemia)',
        'New intracranial pathology (tumour, stroke, bleed)',
        'Drug interactions reducing AED plasma levels (enzyme inducers, antibiotics, etc.)',
      ],
    },

    // ── RECOVERY ──────────────────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'tip',
      title: 'Post-Seizure Recovery',
      items: [
        'Place in recovery position; monitor breathing and conscious level continuously',
        'Do not give anything by mouth until the patient is fully alert',
        'Stay with the patient until the ambulance arrives',
        'Provide post-ictal reassurance \u2014 confusion and drowsiness can last 30\u201360 minutes and are normal',
        'Document time of onset, duration, type of movements, and any treatment given',
      ],
    },

    // ── LINKS ─────────────────────────────────────────────────────────────────
    {
      type: 'linkrow',
      links: [
        { label: '\uD83D\uDD17 Epilepsy Society \u2014 First Aid for Seizures', url: 'https://epilepsysociety.org.uk/about-epilepsy/seizures/first-aid-seizures' },
        { label: '\uD83D\uDD17 SUDEP Action', url: 'https://sudep.org' },
      ],
    },
  ],
}
