import type { Note } from '../data/notes'

export const essentialTremor: Note = {
  id: 'essential-tremor',
  title: 'Essential Tremor',
  subtitle: 'Diagnosis, distinction from Parkinson\'s and physiological tremor, and management',
  tags: ['neurology'],

  body: 'essential tremor benign ET BET postural action tremor bilateral upper limb head titubation vocal tremor propranolol primidone TETRAS functional tremor physiological tremor intention tremor cerebellar Parkinson disease resting tremor parkinsonian deep brain stimulation thalamotomy botox autosomal dominant familial alcohol responsive',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Essential Tremor — Key Features',
      items: [
        'Most common movement disorder — prevalence ~1% (higher in elderly)',
        'Postural and/or action tremor (tremor during voluntary muscle contraction or maintaining a posture)',
        'Bilateral upper limbs most common; can affect head (titubation), voice, or lower limbs',
        'No other neurological features (no bradykinesia, rigidity, or postural instability)',
        'May have positive family history (autosomal dominant in some families)',
        'Present for at least 3 years by definition',
        'Classic clue: improves with small amount of alcohol — does NOT rule out ET (pathologically inappropriate response)',
      ],
    },

    { type: 'heading', level: 2, text: 'Differential Diagnosis' },

    {
      type: 'table',
      headers: ['Type', 'Characteristics', 'Key Distinction from ET'],
      rows: [
        ["Parkinson's tremor", 'Resting tremor (pill-rolling, 4–6 Hz); worse at rest, improves with movement; unilateral onset; bradykinesia, rigidity, postural instability', 'Resting not postural/action; unilateral; associated Parkinson features'],
        ['Cerebellar/intention tremor', 'Intention tremor (worse as limb approaches target — finger-nose test); associated ataxia, dysarthria, dysdiadochokinesia', 'Worsens on goal-directed movement; cerebellar signs'],
        ['Physiological tremor (enhanced)', 'Postural/action tremor; anxiety, thyrotoxicosis, hypoglycaemia, caffeine excess, drugs (SABA, sympathomimetics, SSRIs, lithium)', 'Identify and treat underlying cause; usually fine, fast tremor'],
        ['Functional/psychogenic tremor', 'Variable frequency, direction-changing; distractible; often sudden onset; entrainment sign positive', 'Entrainment: when asked to tap rhythmically with other hand, tremor frequency adopts tapping rhythm'],
        ['Drug-induced tremor', 'Postural — antipsychotics (dopamine blockade), antiemetics (metoclopramide), lithium, valproate, SSRIs', 'Check medication history — review and withdraw if possible'],
      ],
      caption: 'TETRAS scale (The Essential Tremor Rating Assessment Scale) can be used to quantify severity and impact on ADLs — available at bcm.edu/neurology.',
    },

    { type: 'heading', level: 2, text: 'Management' },

    {
      type: 'table',
      headers: ['Treatment', 'Dose', 'Notes'],
      rows: [
        ['Propranolol (first-line)', 'Start 40 mg BD–TDS; increase to 160–320 mg/day as needed', 'Beta-blocker — most evidence. ~50% experience significant improvement. Caution: asthma (avoid), COPD (relative), DM, depression, Raynaud\'s. SE: fatigue, cold extremities, dizziness'],
        ['Primidone (first-line alt)', 'Start 50 mg nocte; increase slowly (50 mg every 2 weeks) up to 750 mg/day', 'Anticonvulsant — similar efficacy to propranolol. ~50% discontinuation due to SE (fatigue, dizziness — especially with first dose). Start very low and go slow'],
        ['Propranolol + Primidone', 'Combine if inadequate response to either alone', 'Combination more effective than either alone in some patients'],
      ],
      caption: 'Non-pharmacological aids: weighted utensils (pens, cutlery), weighted wristbands — reduce amplitude. Smartphone apps for tremor monitoring. Voice recognition software for writing difficulties.',
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'When to Refer to Neurology',
      items: [
        'Diagnostic uncertainty — especially to exclude Parkinson\'s disease or cerebellar disease',
        'Not responding to maximum tolerated dose of ≥2 drug classes',
        'Functional impairment despite pharmacotherapy',
        'Specialist options: botulinum toxin A (head or voice tremor); deep brain stimulation (thalamotomy); MR-guided focused ultrasound thalamotomy — all specialist-initiated',
        'Young onset tremor (consider Wilson\'s disease if <40y — check copper, caeruloplasmin)',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'Neurology: New Cross Hospital, Wolverhampton (Royal Wolverhampton NHS Trust) — primary neurology referral for South Staffordshire',
        'Alternative: UHDB Queen\'s Hospital Burton (general neurology)',
        'Deep brain stimulation / specialist tremor clinic: typically via New Cross neurology → tertiary referral to Birmingham (QEHB) or Nottingham',
        'Patient may prefer alternative local site — discuss at consultation',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Tremor', url: 'https://cks.nice.org.uk/topics/tremor/' },
        { label: 'International Essential Tremor Foundation', url: 'https://www.essentialtremor.org/' },
        { label: 'TETRAS Scale', url: 'https://www.bcm.edu/neurology-apps/pdf/poster_other_TETRAS.pdf' },
        { label: 'NHS — Tremor', url: 'https://www.nhs.uk/conditions/tremor/' },
      ],
    },
  ],
}
