import type { Note } from '../data/notes'

export const febrileConvulsions: Note = {
  id: 'febrile-convulsions',
  title: 'Febrile Convulsions',
  subtitle: 'Simple vs complex, recurrence risk, epilepsy risk, emergency management and parent guidance',
  tags: ['paediatrics', 'neurology'],

  body: 'febrile convulsions febrile seizures simple complex prolonged focal status epilepticus paediatric child fever viral infection rectal diazepam buccal midazolam Stesolid Buccolam Epistatus recovery position epilepsy risk recurrence risk neurodevelopmental FHx family history',

  content: [

    { type: 'heading', level: 2, text: 'Background and Epidemiology' },

    {
      type: 'list',
      items: [
        'Age: 6 months to 5 years — peak incidence 18 months; very rare outside this age range',
        'Prevalence: ~3% of children will have at least one febrile seizure',
        'Most commonly triggered by viral infections (HHV-6/roseola infantum, influenza, URTI) — fever itself is the trigger, not the pathogen; seizure often occurs early in the illness, sometimes before fever is apparent to parents',
        'Pathophysiology: immature brain has lower seizure threshold when temperature rises rapidly; genetic predisposition in many cases',
        'Family history: positive in 25–40% — autosomal dominant pattern with variable penetrance; ask specifically about parental and sibling history of febrile seizures',
        'Usually self-limiting and benign — the vast majority of children who have febrile seizures suffer no long-term neurological harm',
      ],
    },

    { type: 'heading', level: 2, text: 'Simple vs Complex Febrile Seizures' },

    {
      type: 'table',
      headers: ['Feature', 'Simple (typical)', 'Complex (atypical)'],
      rows: [
        ['Duration', '<15 minutes', '>15 minutes (prolonged)'],
        ['Seizure type', 'Generalised tonic-clonic (GTC)', 'Focal onset OR generalised'],
        ['Recovery', 'Full recovery within 1 hour', 'NOT fully recovered within 1 hour OR any focal neurology post-ictally'],
        ['Recurrence within 24h', 'Does NOT recur in same febrile illness', 'Recurs within same febrile illness (within 24 hours)'],
        ['Frequency', '~80% of febrile seizures', '~20% of febrile seizures'],
        ['Management', 'Can be managed in community; observe; A&E if first episode', 'ADMIT to paediatrics — always'],
        ['Further investigation', 'EEG NOT routinely indicated', 'Consider EEG, MRI brain, specialist review'],
        ['Epilepsy risk', '~2–3%', 'Substantially higher (5–10%+ depending on features)'],
      ],
      caption: 'Any focal features, prolonged seizure (>15 min), failure to recover within 1 hour, or repeat within 24 hours = complex → admit to paediatrics.',
    },

    { type: 'heading', level: 2, text: 'Emergency Management' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Seizure >5 Minutes — Call 999',
      items: [
        'Call 999 if seizure lasting >5 minutes OR if child fails to regain consciousness within expected time',
        'Recovery position: place child on their side (left lateral decubitus) — protects airway; do NOT restrain movements; do NOT put anything in the mouth',
        'Time the seizure from onset',
        'Buccal midazolam (Buccolam / Epistatus): licensed rescue medication for children with known recurrent febrile seizures; given into the buccal space (between cheek and gum); dose by age — 2.5 mg (1–5 yrs), 5 mg (5–10 yrs), 7.5 mg (10–18 yrs)',
        'Rectal diazepam (Stesolid): alternative rescue benzodiazepine if buccal midazolam not available; dose 0.5 mg/kg (max 10 mg); inserted rectally via applicator; licensed for use in community',
        'Only prescribe rescue medication if: complex febrile seizures, recurrent episodes, prolonged seizures, or geographically remote — not for all first-time simple febrile seizures',
        'In hospital: IV/IO lorazepam first-line if cannula in situ; follow local status epilepticus protocol',
      ],
    },

    { type: 'heading', level: 2, text: 'Recurrence Risk' },

    {
      type: 'list',
      items: [
        'Overall recurrence rate: approximately 1 in 3 children (30–35%) will have at least one further febrile seizure',
        'Risk factors for recurrence: age <18 months at first seizure, family history of febrile seizures in first-degree relative, brief interval between fever onset and seizure onset, relatively low temperature at time of seizure, frequent febrile illnesses',
        'Most children with one recurrence will have no more than 2–3 total febrile seizures in their childhood',
        'Recurrences are most common within the first year after the initial episode',
        'Important: paracetamol and NSAIDs (ibuprofen) reduce fever and discomfort but do NOT prevent further febrile seizures — do not advise prophylactic antipyretics solely to prevent seizures',
        'Prophylactic anticonvulsants (valproate, clobazam): NOT recommended for simple febrile seizures due to side effect burden — the condition is self-limiting',
      ],
    },

    { type: 'heading', level: 2, text: 'Epilepsy Risk' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Epilepsy Risk After Febrile Seizures',
      items: [
        'Overall risk of developing epilepsy after one simple febrile seizure: approximately 2–3% (only marginally higher than background population risk of ~1%)',
        'Risk increases significantly if THREE major risk factors are present: (1) complex febrile seizure, (2) family history of epilepsy (NOT just febrile seizures — epilepsy specifically), (3) neurodevelopmental disorder (pre-existing delay, cerebral palsy, autism)',
        'With ALL three risk factors: epilepsy risk rises to approximately 50%',
        'Risk with one major risk factor: ~5–10%',
        'Most common epilepsy type following febrile seizures: GEFS+ (Genetic Epilepsy with Febrile Seizures Plus) — autosomal dominant; Dravet syndrome (severe form — SCN1A mutation; prolonged/complex febrile seizures in first year; should be investigated)',
        'Referral to paediatric neurology if: 3 or more febrile seizures, complex features, strong family history of epilepsy, developmental regression, or parent/clinician concern',
      ],
    },

    { type: 'heading', level: 2, text: 'Investigations' },

    {
      type: 'list',
      items: [
        'Routine bloods are NOT indicated for a typical simple febrile seizure in a child >18 months with an obvious source of fever — do not investigate unless clinically indicated',
        'Lumbar puncture: strongly consider if <18 months (signs of meningism may be absent), or if meningitis/encephalitis cannot be excluded clinically; fever + seizure + bulging fontanelle or purpuric rash → treat for bacterial meningitis immediately',
        'Blood glucose: check in all children — exclude hypoglycaemia as a cause of seizure; capillary glucose is adequate',
        'FBC, CRP, U&E: if source of fever not identified, child looks unwell, or to guide antibiotic decision — not routine for simple febrile seizure per se',
        'EEG: NOT routinely indicated for simple febrile seizures; consider for complex seizures or if epilepsy is suspected; a normal EEG does not exclude epilepsy',
        'MRI brain: not routine; consider for complex febrile seizures, focal features, Todd\'s paresis, or if Dravet syndrome suspected',
        'CT head: only if concern for raised intracranial pressure, focal neurology, or non-accidental injury',
      ],
    },

    { type: 'heading', level: 2, text: 'When to Admit' },

    {
      type: 'table',
      headers: ['Scenario', 'Action'],
      rows: [
        ['First febrile seizure, simple, child recovered, >18 months', 'Can discharge from A&E with safety netting and parent education; GP follow-up within 1 week'],
        ['Complex febrile seizure (any criterion)', 'Admit to paediatrics — always'],
        ['Age <18 months', 'Admit — LP to exclude meningitis unless clinically certain of benign cause'],
        ['Seizure still ongoing or not fully recovered', 'Resuscitate, call 999 / convey to ED immediately'],
        ['First febrile seizure in child <6 months', 'Admit — consider non-febrile cause (neonatal/infantile epilepsy, electrolyte disturbance)'],
        ['Source of fever not identified (especially meningism)', 'Admit for LP and further evaluation'],
        ['Parent extremely anxious or unable to observe child safely at home', 'Consider short observation admission'],
      ],
    },

    { type: 'heading', level: 2, text: 'Parent Education and Safety Netting' },

    {
      type: 'list',
      items: [
        'Reassure parents that simple febrile seizures are common, self-limiting, and do NOT cause brain damage — most parents witness their first episode in a state of extreme fear believing their child is dying',
        'Explain what to do if it happens again: stay calm, time the seizure, place in recovery position, call 999 if >5 minutes or child not recovering',
        'Do NOT put anything in the child\'s mouth; do NOT restrain; do NOT try to stop the shaking',
        'Manage the fever: paracetamol or ibuprofen for comfort — explain this reduces fever and distress but does NOT prevent another seizure',
        'Written safety netting: provide febrile seizure information leaflet (Epilepsy Action, NHS) — parents need written confirmation of what they were told; shock means verbal information is often not retained',
        'Return immediately if: seizure lasts >5 minutes, child has a second seizure in the same illness, focal weakness after the seizure, child not fully conscious within 30–60 minutes, child looks very unwell / purpuric rash / meningism',
        'Buccal midazolam or rectal diazepam prescription: consider for children with recurrent episodes or those living remotely from emergency services — teach parents how to administer; community paediatric nurse or specialist can provide training',
        'Prognosis: explain that most children outgrow febrile seizures by age 5–6; risk of epilepsy is low; majority have no long-term neurological consequences',
      ],
    },

  ],
}
