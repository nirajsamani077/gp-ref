import type { Note } from '../data/notes'

export const restlessLegs: Note = {
  id: 'restless-legs',
  title: 'Restless Legs Syndrome (RLS)',
  subtitle: 'Clinical diagnosis, the crucial ferritin check, secondary causes and dopaminergic vs gabapentinoid treatment',
  tags: ['neurology'],

  body: `restless legs syndrome RLS Willis-Ekbom disease urge to move legs ferritin iron deficiency dopamine agonist pramipexole ropinirole rotigotine augmentation impulse control gabapentin pregabalin gabapentinoid periodic limb movements pregnancy uraemia neuropathy akathisia`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Restless Legs Syndrome', url: 'https://cks.nice.org.uk/topics/restless-legs-syndrome/' },
        { label: 'Patient.info — Restless Legs', url: 'https://patient.info/doctor/restless-legs-syndrome-pro' },
      ],
    },

    { type: 'heading', level: 2, text: 'Diagnosis — Clinical (No Test Confirms It)' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Essential Diagnostic Criteria (all required)',
      items: [
        'An urge to move the legs, usually with an uncomfortable/unpleasant sensation',
        'Begins or worsens during rest or inactivity',
        'Partially or totally relieved by movement (walking, stretching)',
        'Worse in the evening or at night than during the day',
        'Not solely explained by another condition (e.g. leg cramps, positional discomfort, akathisia)',
        'It is a clinical diagnosis — no test is needed to confirm it, but check ferritin in everyone (see below)',
      ],
    },

    { type: 'heading', level: 2, text: 'Check Ferritin — Iron Deficiency Is a Key Reversible Cause' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Iron Studies in All RLS',
      items: [
        'Iron deficiency is a common, treatable driver of RLS — check ferritin (and transferrin saturation) in everyone',
        'In RLS, aim for a ferritin well above the usual "normal" floor — supplement if ferritin is <75 µg/L (or TSAT <20%), as brain iron deficiency can exist despite a "normal" level',
        'Oral iron replacement (e.g. ferrous sulfate/fumarate, ideally with vitamin C, alternate-day dosing improves absorption) often improves symptoms; recheck ferritin',
        'Also check U&E (uraemia) and glucose/HbA1c (diabetic neuropathy), and review the drug history',
      ],
    },

    { type: 'heading', level: 2, text: 'Secondary Causes & Aggravating Factors' },

    {
      type: 'list',
      items: [
        'Iron deficiency (± anaemia) — the most important to identify and treat',
        'Pregnancy (especially third trimester — usually resolves after delivery; check/treat iron)',
        'Chronic kidney disease / uraemia (RLS is common in dialysis patients)',
        'Peripheral neuropathy (e.g. diabetes)',
        'Drugs that worsen RLS: antidepressants (SSRIs, SNRIs, mirtazapine, TCAs), antipsychotics and other dopamine antagonists, antihistamines, metoclopramide, and caffeine/alcohol/nicotine',
      ],
    },

    { type: 'heading', level: 2, text: 'Differential Diagnosis' },

    {
      type: 'table',
      headers: ['Condition', 'Distinguishing Feature'],
      rows: [
        ['Nocturnal leg cramps', 'Painful, palpable muscle contraction; not an urge to move; relieved by stretching the cramp'],
        ['Akathisia', 'Drug-induced (antipsychotics) inner restlessness affecting the whole body, not relieved by leg movement, no circadian pattern'],
        ['Peripheral neuropathy', 'Persistent burning/tingling, not relieved by movement, no strong circadian variation'],
        ['Periodic limb movements of sleep (PLMS)', 'Involuntary leg jerks during sleep — often coexists with RLS; reported by bed partner'],
        ['Positional discomfort / vascular claudication', 'Related to posture or walking distance rather than rest'],
      ],
    },

    { type: 'heading', level: 2, text: 'Management' },

    {
      type: 'list',
      items: [
        'Most people do NOT need drug treatment — only ~1 in 5 require medication; treat the cause first',
        'Non-drug measures: correct iron deficiency; sleep hygiene; reduce caffeine, alcohol and nicotine; review/stop aggravating drugs; leg massage, stretching, walking, warm/cool packs, moderate exercise',
        'Gabapentinoids (gabapentin or pregabalin): increasingly preferred first-line drug treatment — NOT associated with augmentation; useful if pain/neuropathy coexists; caution re: sedation, dependence',
        'Dopamine agonists (non-ergot — pramipexole, ropinirole, rotigotine patch): effective but carry two important risks — augmentation (symptoms become earlier, more intense and spread to other body parts with long-term use, paradoxically worsened by increasing the dose) and impulse-control disorders (gambling, hypersexuality, compulsive shopping — screen at every review)',
        'Use the lowest effective dose; warn patients about augmentation and impulse-control disorder; avoid escalating dopamine agonist doses to chase worsening symptoms (suggests augmentation)',
        'Refer to neurology if refractory, diagnostic uncertainty, augmentation, or severe disease',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'microcytic-anaemia', label: 'Microcytic Anaemia', subtitle: 'Iron deficiency — investigation and replacement (key reversible cause)' },
        { id: 'parkinsons-pd', label: "Parkinson's Disease", subtitle: 'Dopamine agonists — augmentation and impulse-control disorder pearls' },
        { id: 'ckd', label: 'Chronic Kidney Disease', subtitle: 'Uraemia is a common secondary cause of RLS' },
        { id: 'insomnia', label: 'Insomnia', subtitle: 'RLS as a cause of disrupted sleep; sleep hygiene overlap' },
      ],
    },

  ],
}
