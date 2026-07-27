import type { Note } from '../data/notes'

export const personalityDisorders: Note = {
  id: 'personality-disorders',
  title: 'Personality Disorders',
  subtitle: 'The clusters, emotionally unstable PD, the GP relationship, risk and evidence-based therapies',
  tags: ['mental'],

  body: `personality disorder cluster A B C emotionally unstable borderline EUPD BPD antisocial narcissistic avoidant dependent DBT MBT mentalisation self-harm risk crisis plan trauma continuity boundaries prescribing`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Personality disorders are enduring, pervasive patterns of inner experience and behaviour that deviate markedly from cultural expectations, causing distress or impairment across many situations and beginning by adolescence/early adulthood. They are common, frequently rooted in developmental trauma, and often present through comorbidity, self-harm and difficult consultations rather than a neat label. The GP\'s role is a consistent, boundaried, non-judgemental relationship, risk-awareness, treating comorbidity, and facilitating access to the psychological therapies that actually help.',
    },

    { type: 'heading', level: 2, text: 'The Traditional Clusters' },
    {
      type: 'table',
      headers: ['Cluster', 'Theme', 'Types'],
      rows: [
        ['A ("odd/eccentric")', 'Odd beliefs, social detachment', 'Paranoid, schizoid, schizotypal'],
        ['B ("dramatic/erratic")', 'Emotional dysregulation, impulsivity', 'Emotionally unstable (borderline), antisocial, histrionic, narcissistic'],
        ['C ("anxious/fearful")', 'Anxiety, avoidance, control', 'Avoidant, dependent, obsessive-compulsive (anankastic)'],
      ],
      caption: 'ICD-11 has moved to a dimensional model (severity + trait domains) rather than named types, but the clusters remain a useful clinical shorthand.',
    },

    { type: 'heading', level: 2, text: 'Emotionally Unstable (Borderline) PD — the Commonest in Practice' },
    {
      type: 'list',
      items: [
        'Features: intense unstable relationships, fear of abandonment, marked mood instability, chronic emptiness, identity disturbance, impulsivity, recurrent self-harm and suicidal behaviour, and transient stress-related paranoia/dissociation.',
        'Strongly associated with childhood trauma; high comorbidity with depression, anxiety, PTSD, eating disorders and substance misuse — screen for and treat these.',
        'Self-harm and suicide risk are real and elevated — take every presentation seriously while avoiding both under- and over-reaction; a collaborative crisis plan is more useful than repeated risk-assessment alone.',
      ],
    },

    { type: 'heading', level: 2, text: 'The GP Approach' },
    {
      type: 'callout',
      variant: 'info',
      title: 'Consistency, Boundaries, Compassion',
      items: [
        'Offer continuity (same clinician where possible), clear and consistent boundaries, and a validating, non-judgemental stance — the therapeutic relationship itself is stabilising; avoid labelling that is used pejoratively.',
        'Agree a crisis/safety plan (who to contact, coping strategies, out-of-hours options) rather than escalating medication in crises.',
        'Prescribing: drugs do NOT treat the personality disorder itself — avoid initiating medication for the disorder, use short courses cautiously in crises, and be alert to overdose risk with what you prescribe. Treat genuine comorbid disorders on their own merits.',
        'Manage your own and the team\'s responses (splitting, frustration) — supervision and a shared management plan help.',
      ],
    },

    { type: 'heading', level: 2, text: 'Evidence-Based Treatment & Referral' },
    {
      type: 'list',
      items: [
        'Structured psychological therapies are the mainstay — e.g. Dialectical Behaviour Therapy (DBT) and Mentalisation-Based Therapy (MBT) for EUPD; refer to community mental health/specialist personality-disorder services.',
        'Refer urgently if acute suicidality, significant risk, or severe functional decline; involve crisis teams as needed.',
        'Support recovery, employment and relationships; signpost peer support (e.g. Mind, Rethink) — prognosis for EUPD improves over time with treatment.',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE CG78 — Borderline Personality Disorder', url: 'https://www.nice.org.uk/guidance/cg78' },
        { label: 'NICE CG77 — Antisocial Personality Disorder', url: 'https://www.nice.org.uk/guidance/cg77' },
        { label: 'Mind — Personality Disorders', url: 'https://www.mind.org.uk/information-support/types-of-mental-health-problems/personality-disorders/' },
        { label: 'Royal College of Psychiatrists', url: 'https://www.rcpsych.ac.uk/mental-health/mental-illnesses-and-mental-health-problems/personality-disorder' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'suicide-self-harm', label: 'Suicide & Self-Harm', subtitle: 'Risk assessment and crisis planning' },
        { id: 'ptsd', label: 'PTSD', subtitle: 'Trauma is central to many presentations' },
        { id: 'depression', label: 'Depression', subtitle: 'Common comorbidity to treat on its own merits' },
        { id: 'substance-misuse', label: 'Substance Use & Misuse', subtitle: 'Frequent co-occurring problem' },
        { id: 'mus', label: 'Medically Unexplained Symptoms', subtitle: 'Overlapping consultation challenges' },
      ],
    },

  ],
}
