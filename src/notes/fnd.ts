import type { Note } from '../data/notes'

export const fnd: Note = {
  id: 'fnd',
  title: 'Functional Neurological Disorder (FND)',
  subtitle: 'A rule-in diagnosis based on positive signs — explaining it well and directing rehab',
  tags: ['neurology'],

  body: `functional neurological disorder FND conversion disorder functional weakness dissociative non-epileptic seizures NEAD Hoover sign tremor entrainment positive signs rule-in diagnosis physiotherapy CBT explanation software hardware`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'FND Guide (neurosymptoms.org)', url: 'https://www.neurosymptoms.org/' },
        { label: 'NICE CKS — Functional Neurological Symptoms', url: 'https://cks.nice.org.uk/' },
        { label: 'FND Society', url: 'https://www.fndsociety.org/' },
      ],
    },

    {
      type: 'callout',
      variant: 'info',
      title: 'A Positive Diagnosis — Not One of Exclusion',
      items: [
        'FND is a common cause of neurological symptoms (weakness, movement disorders, sensory change, dissociative "non-epileptic" seizures) where symptoms are genuine but arise from altered nervous-system functioning, not structural damage',
        'It is diagnosed by POSITIVE clinical signs of internal inconsistency, not merely because tests are normal — this matters for credibility and treatment',
        'Symptoms are real and involuntary; framing it as "all in the mind" or malingering is inaccurate and harmful',
      ],
    },

    { type: 'heading', level: 2, text: 'Positive Signs (Rule-In)' },

    {
      type: 'table',
      headers: ['Sign', 'What it shows'],
      rows: [
        ['Hoover\'s sign', 'Hip extension weakness that normalises with contralateral hip flexion — inconsistent functional weakness'],
        ['Tremor entrainment', 'A functional tremor changes frequency or stops when the patient copies a rhythmic tapping task'],
        ['Give-way weakness', 'Weakness that fluctuates or gives way, inconsistent with pyramidal patterns'],
        ['Dissociative seizures', 'Prolonged episodes with eye closure, fluctuating course, no post-ictal confusion/acidosis'],
      ],
    },

    { type: 'heading', level: 2, text: 'Explaining the Diagnosis' },

    {
      type: 'list',
      items: [
        'Use a "software not hardware" analogy: the nervous system is not damaged (hardware intact) but is not running the program correctly (software problem) — and software problems can improve',
        'Show the patient a positive sign (e.g. Hoover\'s) to demonstrate the potential for movement — this is both diagnostic and therapeutic',
        'Acknowledge the symptoms are real and distressing; avoid implying they are imagined or deliberate',
        'Signpost self-help resources (neurosymptoms.org) and explain the treatment route',
      ],
    },

    { type: 'heading', level: 2, text: 'Management' },

    {
      type: 'list',
      items: [
        'Multidisciplinary rehabilitation is the mainstay: specialist FND-informed physiotherapy for motor symptoms, and psychological therapy (CBT) — particularly for dissociative seizures',
        'Treat comorbid depression, anxiety, PTSD and chronic pain, which commonly coexist and worsen prognosis',
        'Avoid unnecessary repeated investigations and referrals, which reinforce illness beliefs; provide continuity and a consistent explanation across the team',
        'Early diagnosis and a clear, believed explanation improve outcomes',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'epilepsyAdults', label: 'Epilepsy (Adults)', subtitle: 'Distinguishing dissociative from epileptic seizures' },
        { id: 'mus', label: 'Medically Unexplained Symptoms', subtitle: 'Overlapping functional-symptom framework' },
        { id: 'chronic-pain', label: 'Chronic Pain', subtitle: 'Common comorbidity affecting prognosis' },
        { id: 'anxiety-gad', label: 'Generalised Anxiety Disorder', subtitle: 'Frequently coexists and contributes' },
        { id: 'cfs-me', label: 'CFS/ME', subtitle: 'Related functional/rehabilitation approach' },
      ],
    },

  ],
}
