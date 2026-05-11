import type { Note } from '../data/notes'

export const essentialTremor: Note = {
  id: 'essential-tremor',
  title: 'Essential Tremor',
  subtitle: 'Diagnosis, distinction from Parkinson\'s, investigation and management',
  tags: ['neurology'],

  body: 'essential tremor benign ET BET postural action tremor bilateral upper limb head titubation vocal tremor propranolol primidone TETRAS functional tremor physiological tremor intention tremor cerebellar Parkinson disease resting tremor parkinsonian deep brain stimulation thalamotomy botox autosomal dominant familial alcohol responsive Wilson disease copper caeruloplasmin drug-induced tremor caffeine thyrotoxicosis TETRAS scale occupational therapy weighted utensils',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Essential Tremor — Key Features',
      items: [
        'Most common movement disorder — prevalence ~1% (higher in elderly: up to 5–14% in >65y)',
        'Postural and/or action tremor (tremor during voluntary muscle contraction or maintaining a posture against gravity)',
        'Bilateral upper limbs most common; can affect head (titubation — horizontal or vertical), voice (vocal tremor), or lower limbs',
        'NO other neurological features — no bradykinesia, rigidity, or postural instability',
        'May have positive family history (autosomal dominant in some families — "familial ET")',
        'Present for at least 3 years by definition; slowly progressive',
        'Classic clue: temporary improvement with small amount of alcohol — supports ET diagnosis (DOES NOT exclude it)',
      ],
    },

    { type: 'heading', level: 2, text: 'Differential Diagnosis' },

    {
      type: 'table',
      headers: ['Type', 'Characteristics', 'Key Distinction from ET'],
      rows: [
        ['Parkinson\'s tremor', 'Resting tremor (pill-rolling, 4–6 Hz); worse at rest, improves with movement; unilateral onset; bradykinesia, rigidity, postural instability', 'Resting not postural/action; unilateral onset; other Parkinson\'s features present'],
        ['Cerebellar/intention tremor', 'Intention tremor (worse as limb approaches target — finger-nose test); associated ataxia, dysarthria, dysdiadochokinesia', 'Worsens on goal-directed movement; cerebellar signs on examination'],
        ['Physiological tremor (enhanced)', 'Postural/action tremor; anxiety, thyrotoxicosis, hypoglycaemia, caffeine excess, drugs (SABA, sympathomimetics, SSRIs, lithium, valproate, amiodarone)', 'Identify and treat underlying cause; usually fine, fast tremor; very common'],
        ['Functional/psychogenic tremor', 'Variable frequency, direction-changing; distractible; sudden onset; positive entrainment sign', 'Entrainment: tremor adopts rhythm of voluntary tapping in other hand; typically sudden onset'],
        ['Drug-induced tremor', 'Postural — antipsychotics (dopamine blockade), metoclopramide, prochlorperazine, lithium, valproate, SSRIs, amiodarone', 'Detailed medication review — drug-induced tremor often resolves on dose reduction or cessation'],
        ['Wilson\'s disease tremor', 'Age <40; Kayser-Fleischer rings (slit-lamp); hepatic dysfunction; wing-beating tremor; psychiatric features', 'Must exclude in any tremor under age 40 — check copper, serum caeruloplasmin, liver function'],
      ],
    },

    { type: 'heading', level: 2, text: 'Investigation Protocol' },

    {
      type: 'table',
      headers: ['Investigation', 'Indication', 'Interpretation'],
      rows: [
        ['TFTs (TSH, free T4)', 'All patients with new tremor', 'Thyrotoxicosis causes enhanced physiological tremor; treat hyperthyroidism first'],
        ['FBC, glucose, U&E', 'Baseline; exclude metabolic causes', 'Hypoglycaemia, uraemia, hyponatraemia can all cause tremor'],
        ['Serum copper + caeruloplasmin', 'ESSENTIAL if age <40', 'Wilson\'s disease — low caeruloplasmin, raised free copper; requires specialist investigation (24h urine copper)'],
        ['Liver function tests', 'If Wilson\'s suspected or alcohol excess', 'Wilson\'s causes hepatic dysfunction; alcohol excess causes cerebellar tremor'],
        ['Medication review', 'All cases', 'Withdraw or reduce implicated drug and reassess tremor — allow 6 weeks'],
        ['MRI brain', 'If cerebellar features (intention tremor, ataxia, dysarthria) OR diagnostic uncertainty', 'Not routinely needed for typical ET; refer neurology to arrange — exclude MS, cerebellar atrophy, posterior fossa lesion'],
        ['DaTscan (DAT imaging)', 'Specialist use only — to distinguish ET from Parkinson\'s', 'Only if clinical uncertainty persists after examination; neurology-arranged'],
      ],
      caption: 'Routine MRI is NOT indicated for classical essential tremor. Refer to neurology if any atypical features, diagnostic uncertainty, young age, or failure of two pharmacological agents.',
    },

    { type: 'heading', level: 2, text: 'Management' },

    {
      type: 'table',
      headers: ['Treatment', 'Dose', 'Notes'],
      rows: [
        ['Propranolol (first-line)', 'Start 40 mg BD–TDS; titrate up to 160–320 mg/day in divided doses (or MR formulation 80–160 mg OD)', '~50% experience significant improvement. Caution: asthma (avoid), COPD (relative contraindication), DM, Raynaud\'s, depression. SE: fatigue, cold extremities, bradycardia, erectile dysfunction'],
        ['Primidone (first-line alternative)', 'Start 50 mg nocte; increase by 50 mg every 1–2 weeks up to max 750 mg/day TDS', 'Anticonvulsant — similar efficacy to propranolol. SE: sedation, dizziness, nausea on first dose ("ataxic crisis" — warn patient). Start VERY low and go slow'],
        ['Propranolol + Primidone (combination)', 'Full doses of each', 'Combination more effective than either alone in some patients; try if inadequate response to monotherapy'],
        ['Topiramate (third-line, off-label)', '25–100 mg OD–BD', 'Some evidence; neurologist-initiated; SE: cognitive dulling ("dopamax"), weight loss, renal stones'],
        ['Gabapentin (off-label)', '300–1800 mg/day TDS', 'Limited evidence; may be tried as adjunct; risk of dependence/misuse'],
      ],
      caption: 'Non-pharmacological: weighted utensils (pens, cutlery, mugs), wrist-worn weights, voice recognition software for writing difficulties, smartphone apps for tremor monitoring. Occupational therapy assessment for adaptive equipment.',
    },

    { type: 'heading', level: 2, text: 'Lifestyle and Self-Care' },

    {
      type: 'list',
      items: [
        'Caffeine: advise reduction — caffeine significantly worsens tremor via adenosine antagonism; limit to 1–2 cups/day or switch to decaffeinated',
        'Alcohol: small amounts may temporarily reduce tremor (hence patient may self-medicate); clearly counsel NOT to use alcohol to manage tremor — risk of dependence; explain effect is short-term and tremor returns',
        'Stress and fatigue: worsen tremor — adequate sleep, stress management, mindfulness; pacing activities',
        'Heat: hot weather and fever can worsen tremor; stay cool',
        'Heavy lifting and fine motor tasks: tremor typically worst during fine-motor tasks (writing, eating, threading needle); strategies to reduce impact (writing pens, modified cutlery)',
        'Work: if tremor affects job performance — referral to OT and occupational health for workplace adjustments',
        'Driving: if tremor affects ability to control vehicle safely — discuss DVLA obligation to declare conditions that may affect fitness to drive',
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'When to Refer to Neurology',
      items: [
        'Diagnostic uncertainty — especially to exclude Parkinson\'s disease, cerebellar disease, or functional tremor',
        'Age <40 — always refer to exclude Wilson\'s disease; urgent if Kayser-Fleischer rings or liver disease',
        'Not responding to maximum tolerated dose of ≥2 drug classes',
        'Functional impairment despite pharmacotherapy',
        'Rapid progression or asymmetrical tremor (raises concern for Parkinson\'s)',
        'Specialist options: botulinum toxin A (head/voice tremor); deep brain stimulation (thalamic DBS); MR-guided focused ultrasound thalamotomy — all require neurology/neurosurgery referral',
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Safety Netting',
      items: [
        'Any tremor with: gait disturbance, falls, sudden onset, or rapid progression → same-week GP review',
        'Tremor with Parkinson\'s features (bradykinesia, rigidity, shuffling gait, micrographia) → neurology referral',
        'Young patient (<40y) with tremor + jaundice + psychiatric symptoms → urgent neurology (Wilson\'s disease)',
        'Tremor after new medication → review medication and withdraw if implicated; tremor should improve within 6 weeks',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Tremor', url: 'https://cks.nice.org.uk/topics/tremor/' },
        { label: 'Essential Tremor Foundation UK', url: 'https://www.essentialtremor.org.uk/' },
        { label: 'TETRAS Scale — BCM Neurology', url: 'https://www.bcm.edu/neurology-apps/pdf/poster_other_TETRAS.pdf' },
        { label: 'Radiopaedia — Essential Tremor', url: 'https://radiopaedia.org/articles/essential-tremor' },
        { label: 'NHS — Tremor', url: 'https://www.nhs.uk/conditions/tremor/' },
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'Neurology: New Cross Hospital, Wolverhampton (Royal Wolverhampton NHS Trust) — primary neurology referral for South Staffordshire; include description of tremor type, onset, medications, examination findings',
        'Alternative: UHDB Queen\'s Hospital Burton (general neurology)',
        'Deep brain stimulation / specialist tremor clinic: via New Cross neurology → tertiary referral to Birmingham (QEHB) or Nottingham as needed',
        'OT for adaptive equipment: community OT via Staffordshire SPA (Single Point of Access) or ICOTT',
        'Wilson\'s disease: if age <40 and copper/caeruloplasmin abnormal → refer hepatology or metabolic medicine (UHDB or QEHB Birmingham)',
      ],
    },
  ],
}
