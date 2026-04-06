import type { Note } from '../data/notes'

export const epilepsyChildhood: Note = {
  id: 'epilepsyChildhood',
  title: 'Epilepsy & Seizures in Childhood',
  subtitle: 'Childhood epilepsy syndromes, febrile seizures, infantile spasms, and AEDs in children',
  tags: ['neurology', 'paediatrics'],

  body: 'childhood epilepsy seizures paediatrics febrile seizure infantile spasms west syndrome lennox gastaut absence childhood CAE juvenile myoclonic epilepsy JME benign rolandic BECTS neonatal seizures BRUE reflex anoxic seizure breath holding syncope tics AED valproate ethosuximide lamotrigine levetiracetam vigabatrin hypsarrhythmia salaam attacks vigabatrin visual field DVLA referral paediatric neurology buccal midazolam rectal diazepam febrile convulsion hyperventilation 3Hz spike wave centrotemporal spikes polyspike wave ketogenic diet clobazam pyridoxine B6',

  content: [
    // ── REFERRAL ──────────────────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'danger',
      title: 'Referral \u2014 When to Act Urgently',
      items: [
        'Any loss of consciousness in a child under 12 months requires same-day or urgent paediatric assessment',
        'Suspected infantile spasms \u2192 same-day referral to paediatrics (do not wait for outpatient appointment)',
        'First febrile seizure \u2192 refer ALL children acutely to paediatrics for assessment',
      ],
    },

    // ── DDX TABLE ─────────────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Differential Diagnosis of Childhood Seizures / Funny Turns',
    },
    {
      type: 'table',
      headers: ['Condition', 'Key Features', 'Action'],
      rows: [
        [
          'Epilepsy (various types)',
          'Stereotyped events; \u00b1 post-ictal phase; EEG abnormal',
          'Refer to paediatric neurology',
        ],
        [
          'Febrile seizures',
          'Age 6 months\u20136 years; fever >38\u00b0C; GTC; usually self-resolving',
          'See febrile seizure section below',
        ],
        [
          'Reflex anoxic seizures (breath-holding attacks)',
          'Painful or emotional trigger \u2192 loss of tone \u2192 brief seizure; may lose continence; usually resolves by age 5',
          'Rule out cardiac cause; ECG; refer if uncertainty persists',
        ],
        [
          'BRUE (Brief Resolved Unexplained Event)',
          'Age <1 year; apnoea, colour change, tone change lasting <1 minute; self-resolving',
          'Admit all BRUEs urgently for investigation',
        ],
        [
          'Cardiac / vasovagal syncope',
          'Prodrome (nausea, pallor, sweating); positional or triggered; no post-ictal phase',
          'ECG, echocardiogram, tilt table test',
        ],
        [
          'Sleep myoclonus / tics',
          'Occur during sleep or at rest; no LOC; stereotyped movements',
          'Reassure if isolated; refer if clinically concerning',
        ],
      ],
    },

    // ── INFANTILE SPASMS ──────────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'danger',
      title: 'Infantile Spasms (West Syndrome) \u2014 Do Not Miss',
      items: [
        'Onset in first 6\u201312 months of life',
        'Repetitive \u2018salaam\u2019 attacks: sudden head nodding, arm jerking, knees pulling up \u2014 more common on waking',
        'EEG pattern: hypsarrhythmia (chaotic high-amplitude slow waves with multifocal spikes)',
        'Occurs in approximately 1 in 2000 births; poor prognosis if untreated',
        'Refer same day to paediatrics for urgent EEG',
        'Treatment: vigabatrin + steroids (UKISS trial regimen)',
      ],
    },

    // ── CHILDHOOD EPILEPSY SYNDROMES ──────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Childhood Epilepsy Syndromes',
    },
    {
      type: 'table',
      headers: ['Syndrome', 'Age of Onset', 'Key Features', 'EEG', 'Treatment', 'Prognosis'],
      rows: [
        [
          'Infantile spasms (West syndrome)',
          '<12 months',
          'Salaam attacks; developmental regression',
          'Hypsarrhythmia',
          'Vigabatrin + steroids',
          'Poor without prompt treatment',
        ],
        [
          'Lennox-Gastaut syndrome',
          '1\u20135 years (often follows West)',
          'Atypical absences, drop attacks (atonic), severe intellectual disability',
          'Slow spike-and-wave (<2.5 Hz)',
          'Ketogenic diet, valproate, clobazam',
          'Poor; usually lifelong epilepsy',
        ],
        [
          'Childhood absence epilepsy (CAE)',
          '3\u201310 years',
          'Brief blank stares (seconds); no post-ictal phase; reliably provoked by hyperventilation',
          '3 Hz generalised spike-and-wave',
          'Ethosuximide (first-line) or valproate',
          'Good \u2014 ~95% remit by adulthood',
        ],
        [
          'Juvenile myoclonic epilepsy (JME / Janz syndrome)',
          'Adolescence (10\u201325 years)',
          'Morning myoclonic jerks; absence seizures; GTC often triggered by sleep deprivation; more common in teenage girls',
          'Generalised polyspike-and-wave',
          'Valproate (avoid in females), lamotrigine',
          'Lifelong \u2014 rarely remits but usually well controlled with medication',
        ],
        [
          'Benign Rolandic epilepsy (BECTS)',
          '4\u201312 years (M > F)',
          'Facial and tongue paraesthesia; focal seizures around sleep\u2013wake transition; normal development and intelligence',
          'Centrotemporal spikes',
          'Often no treatment required',
          'Excellent \u2014 resolves by mid-teens',
        ],
        [
          'Neonatal seizures',
          'Newborn period',
          'Secondary to meningitis, hypoglycaemia, birth trauma, pyridoxine (B6) dependency',
          'Variable',
          'Treat underlying cause; pyridoxine (B6) if dependency suspected',
          'Depends on underlying cause',
        ],
      ],
    },

    // ── FEBRILE SEIZURES ──────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Febrile Seizures',
    },
    {
      type: 'list',
      items: [
        'Most common childhood seizure type \u2014 affects approximately 5% of children',
        'Peak incidence at 18 months; age range 6 months to 6 years',
        'Fever >38\u00b0C associated with a generalised tonic-clonic seizure; usually self-resolving within 5 minutes',
        '1 in 3 children will have a recurrence, usually within 1 year of the first episode',
        'Risk of recurrence is not necessarily related to the rate of temperature rise',
        'No evidence that paracetamol or ibuprofen prevents febrile seizures \u2014 use for comfort only',
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'When to Refer Urgently',
      items: [
        'Refer ALL children with a first febrile seizure to paediatrics same day',
        'Signs of sepsis or meningitis (neck stiffness, non-blanching rash, photophobia)',
        'Complex febrile seizure: focal onset, duration >10 minutes, or >1 seizure in 24 hours',
        'Focal neurological deficit or failure to recover to baseline within 1 hour',
        'No obvious source of fever identified',
      ],
    },
    {
      type: 'para',
      text: 'Long-term risk of developing epilepsy after a febrile seizure: 2\u20138% (compared to ~1% in the general population). Risk is higher if the febrile seizure was complex, focal, or if there are underlying neurodevelopmental concerns. Overall risk is very low \u2014 parents should be reassured.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Recurrent Febrile Seizure \u2014 Acute Management',
      items: [
        'Maintain airway; place in safe position; do not restrain the child',
        'Place in recovery position as soon as the seizure stops',
        'If seizure lasts >5 minutes: give buccal midazolam (preferred) or rectal diazepam, then call 999',
        'Check for source of infection: urine, chest; consider meningitis if any doubt',
        'Call 999 for all prolonged, complex, or first febrile seizures',
      ],
    },

    // ── AEDs IN CHILDHOOD ─────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'AEDs in Childhood',
    },
    {
      type: 'list',
      items: [
        'Valproate: effective for many childhood epilepsies (generalised, JME, Lennox-Gastaut) \u2014 AVOID in girls and women of childbearing potential (teratogen); use only with extreme caution and mandatory Pregnancy Prevention Programme (PPP) if prescribed',
        'Ethosuximide: first-line for childhood absence epilepsy (CAE); not effective for other seizure types',
        'Lamotrigine: broad-spectrum; slow titration essential (risk of severe rash / Stevens-Johnson syndrome); first-line for focal seizures',
        'Levetiracetam: broad-spectrum; watch closely for behavioural side effects in children (aggression, irritability)',
        'Vigabatrin: used for infantile spasms only; causes irreversible visual field defects \u2014 regular ophthalmology monitoring is mandatory throughout treatment',
      ],
    },

    // ── LINKS ─────────────────────────────────────────────────────────────────
    {
      type: 'linkrow',
      links: [
        { label: '\uD83D\uDD17 UK Infantile Spasms Trust', url: 'https://www.ukist.co.uk' },
        { label: '\uD83D\uDD17 RCH Melbourne \u2014 Febrile Seizures (parent info)', url: 'https://www.rch.org.au/kidsinfo/fact_sheets/Febrile_convulsions/' },
        { label: '\uD83D\uDD17 Epilepsy Society', url: 'https://epilepsysociety.org.uk' },
      ],
    },
  ],
}
