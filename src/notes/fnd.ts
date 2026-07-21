import type { Note } from '../data/notes'

export const fnd: Note = {
  id: 'fnd',
  title: 'Functional Neurological Disorder (FND)',
  subtitle: 'A rule-in diagnosis based on positive signs — explaining it well and directing rehabilitation',
  tags: ['neurology'],

  body: `functional neurological disorder FND conversion disorder functional weakness dissociative non-epileptic attacks NEAD seizures functional tremor Hoover's sign tremor entrainment give-way weakness positive signs rule-in diagnosis physiotherapy CBT software hardware neurosymptoms`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Functional neurological disorder is a common cause of neurological symptoms — weakness, movement disorders, sensory disturbance and dissociative ("non-epileptic") attacks — in which the symptoms are genuine and involuntary but arise from altered functioning of the nervous system rather than structural damage. Crucially it is a POSITIVE diagnosis based on characteristic clinical signs, not a diagnosis of exclusion made when tests come back normal. Getting the diagnosis and its explanation right is itself therapeutic.',
    },

    {
      type: 'callout',
      variant: 'info',
      title: 'A Positive Diagnosis — Not "All in the Mind"',
      items: [
        'Symptoms are real, distressing and not deliberately produced — framing FND as malingering or imagination is inaccurate and harmful.',
        'It is diagnosed by positive signs of internal inconsistency (the symptom changes with attention/distraction), demonstrable at the bedside.',
        'FND can coexist with other neurological disease — its presence does not mean nothing else is wrong.',
      ],
    },

    { type: 'heading', level: 2, text: 'Positive Signs (Rule-In)' },
    {
      type: 'table',
      headers: ['Sign', 'What it demonstrates'],
      rows: [
        ['Hoover\'s sign', 'Hip extension weakness that NORMALISES when the opposite hip is flexed against resistance — inconsistent functional leg weakness'],
        ['Tremor entrainment', 'A functional tremor changes frequency or stops when the patient copies a rhythmic tapping task with the other hand'],
        ['Give-way / collapsing weakness', 'Weakness that fluctuates or gives way, inconsistent with a pyramidal pattern'],
        ['Dissociative (non-epileptic) attacks', 'Prolonged episodes with eye closure, fluctuating course, side-to-side head movement, and NO post-ictal confusion or lactate/prolactin rise'],
      ],
    },

    { type: 'heading', level: 2, text: 'Explaining the Diagnosis' },
    {
      type: 'list',
      items: [
        'Use a "software, not hardware" analogy: the nervous system is not damaged (hardware intact) but is not running the program correctly (a software problem) — and software problems can be retrained and improved.',
        'DEMONSTRATE a positive sign (e.g. Hoover\'s) to show the patient that the movement is physically possible — this is both diagnostic and reassuring.',
        'Acknowledge the symptoms are real and involuntary; avoid implying they are imagined or put on.',
        'Signpost self-help resources (neurosymptoms.org) and explain the treatment route — belief in the diagnosis predicts better outcome.',
      ],
    },

    { type: 'heading', level: 2, text: 'Management' },
    {
      type: 'list',
      items: [
        'Multidisciplinary, FND-informed rehabilitation is the mainstay: specialist physiotherapy for motor symptoms (retraining automatic movement), and psychological therapy (CBT) — particularly for dissociative attacks.',
        'Treat comorbid depression, anxiety, PTSD and chronic pain/fatigue, which commonly coexist and worsen prognosis.',
        'Avoid unnecessary repeated investigations and referrals, which reinforce illness beliefs; provide continuity and a consistent explanation across the whole team.',
        'For dissociative attacks, give the patient and family a clear management plan (safe space, avoid unnecessary emergency interventions/ambulance conveyance) and distinguish from epilepsy.',
      ],
    },

    { type: 'heading', level: 2, text: 'Patient Information Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'neurosymptoms.org — FND Self-Help Guide', url: 'https://www.neurosymptoms.org/' },
        { label: 'FND Hope UK', url: 'https://fndhope.org/' },
        { label: 'FND Society', url: 'https://www.fndsociety.org/' },
        { label: 'NHS — Functional Neurological Disorder', url: 'https://www.nhs.uk/conditions/' },
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
