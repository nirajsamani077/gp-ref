import type { Note } from '../data/notes'

export const tourettesTics: Note = {
  id: 'tourettes-tics',
  title: 'Tics & Tourette Syndrome',
  subtitle: 'Transient tics, chronic tics vs Tourette\'s, comorbidities and when treatment is needed',
  tags: ['paediatrics', 'neurology'],

  body: `tics Tourette syndrome motor vocal tic premonitory urge transient tic disorder chronic tic ADHD OCD comorbidity habit reversal therapy comprehensive behavioural intervention CBIT clonidine antipsychotic reassurance childhood`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Tics are sudden, rapid, recurrent, non-rhythmic motor movements or vocalisations. They are common in childhood, usually transient and benign, and often need only reassurance. Tourette syndrome is the more persistent end of the spectrum (multiple motor tics plus at least one vocal tic, present >1 year). What most affects quality of life is often the associated conditions — ADHD and OCD — rather than the tics themselves.',
    },

    { type: 'heading', level: 2, text: 'The Spectrum' },
    {
      type: 'table',
      headers: ['Category', 'Definition'],
      rows: [
        ['Transient (provisional) tic disorder', 'Motor and/or vocal tics for <1 year — very common in children, usually resolves'],
        ['Chronic tic disorder', 'Motor OR vocal tics (not both) for >1 year'],
        ['Tourette syndrome', 'Multiple motor tics AND ≥1 vocal tic for >1 year, onset before age 18'],
      ],
    },
    {
      type: 'list',
      items: [
        'Tics wax and wane, change over time, are often preceded by a "premonitory urge" (an uncomfortable sensation relieved by the tic), can be briefly suppressed (at the cost of building tension), and worsen with stress, excitement or fatigue.',
        'Coprolalia (involuntary swearing) is actually UNCOMMON in Tourette\'s — a popular misconception; most tics are simple (blinking, throat-clearing, sniffing).',
        'Typical onset ~5–7 years, often peaking around puberty then improving into adulthood.',
      ],
    },

    { type: 'heading', level: 2, text: 'Comorbidities Matter Most' },
    {
      type: 'callout',
      variant: 'info',
      title: 'Screen for and Manage the Associations',
      items: [
        'ADHD and OCD are common comorbidities and frequently cause more impairment than the tics — screen for and treat them.',
        'Also consider anxiety, learning difficulties, sleep problems and low mood; assess the impact on school, self-esteem and social life.',
        'Educate the child, family and school: tics are involuntary, not "attention-seeking" or "naughtiness", and telling a child to "stop it" is unhelpful.',
      ],
    },

    { type: 'heading', level: 2, text: 'Management' },
    {
      type: 'list',
      items: [
        'Mild tics: reassurance and education is often all that is needed — most improve over time.',
        'When tics cause distress, pain or functional/social impairment: refer for behavioural therapy — habit-reversal training / Comprehensive Behavioural Intervention for Tics (CBIT) is first-line and effective.',
        'Medication (specialist-initiated) for more severe/impairing tics: alpha-2 agonists (clonidine/guanfacine — useful especially with coexisting ADHD) or antipsychotics (e.g. aripiprazole, risperidone) — balanced against side effects.',
        'Refer to paediatrics/neurology (or CAMHS for comorbidity) where the diagnosis is uncertain, tics are severe/impairing, or there are red flags (abrupt onset, focal neurology, or suspicion of a secondary cause).',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Tourette Syndrome / Tics', url: 'https://cks.nice.org.uk/' },
        { label: 'Tourettes Action', url: 'https://www.tourettes-action.org.uk/' },
        { label: 'Great Ormond Street — Tics & Tourette\'s', url: 'https://www.gosh.nhs.uk/conditions-and-treatments/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'adhd-child', label: 'ADHD (Children)', subtitle: 'The commonest comorbidity — often more impairing' },
        { id: 'ocd-bdd', label: 'OCD & BDD', subtitle: 'Frequently co-occurs with tics' },
        { id: 'child-anxiety-depression', label: 'Child Anxiety & Depression', subtitle: 'Associated mood/anxiety problems' },
        { id: 'autism-asd', label: 'Autism (ASD)', subtitle: 'Overlapping neurodevelopmental presentations' },
      ],
    },

  ],
}
