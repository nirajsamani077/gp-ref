import type { Note } from '../data/notes'

export const fetalAlcohol: Note = {
  id: 'fetal-alcohol',
  title: 'Fetal Alcohol Spectrum Disorder & Infantile Spasms',
  subtitle: 'A preventable neurodevelopmental disorder, plus the "must-not-miss" infantile spasms (West syndrome)',
  tags: ['paediatrics'],

  body: `fetal alcohol spectrum disorder FASD facial features growth restriction neurodevelopment prevention no safe amount pregnancy infantile spasms West syndrome hypsarrhythmia salaam attacks vigabatrin developmental regression`,

  content: [

    { type: 'heading', level: 2, text: 'Fetal Alcohol Spectrum Disorder (FASD)' },
    {
      type: 'para',
      text: 'FASD is a range of lifelong physical, developmental and behavioural effects caused by prenatal alcohol exposure — and it is entirely preventable. It is under-recognised. The GP\'s role is prevention (there is NO known safe amount of alcohol in pregnancy — advise abstinence), recognition, and supporting affected children and families.',
    },
    {
      type: 'list',
      items: [
        'Features (variable, and many children have no facial features): the classic facial signs are a smooth philtrum, thin upper lip and short palpebral fissures; plus growth restriction and — most importantly — CNS/neurodevelopmental effects: learning difficulties, poor attention/impulse control, executive-function and social difficulties, and later mental-health/behavioural problems.',
        'Diagnosis requires specialist multidisciplinary assessment (confirming exposure where possible, and the neurodevelopmental profile); refer children with a suggestive picture and known/suspected prenatal alcohol exposure.',
        'Management is supportive and multiagency: developmental/educational support (often an EHCP), managing coexisting ADHD/behaviour, and family support; early intervention improves outcomes.',
        'Prevention is key — advise all women planning or in pregnancy that the safest approach is to avoid alcohol entirely; support alcohol reduction (see Alcohol).',
      ],
    },

    { type: 'heading', level: 2, text: 'Infantile Spasms (West Syndrome)' },
    {
      type: 'callout',
      variant: 'danger',
      title: 'A Neurological Emergency — Same-Day Referral',
      items: [
        'Infantile spasms are a serious epileptic encephalopathy of infancy (peak onset 3–12 months), NOT benign — early treatment improves the developmental outcome, so recognise and refer SAME-DAY.',
        'The spasms are clusters of sudden, brief flexion (or extension) of the trunk and limbs — "SALAAM attacks" (arms fling out, head/body bow) — often on waking, in runs, and easily mistaken for colic, startle or reflux.',
        'A crucial clue is developmental REGRESSION or plateau (loss of skills, reduced social interaction) alongside the movements.',
        'The EEG shows HYPSARRHYTHMIA (a chaotic pattern). Treatment (specialist) is with vigabatrin and/or high-dose steroids/ACTH; refer any suspected case urgently to paediatric neurology.',
      ],
    },

    { type: 'heading', level: 2, text: 'Rare Syndromes — General Approach' },
    {
      type: 'list',
      items: [
        'A child with an unusual combination of dysmorphism, developmental delay, growth abnormality, and congenital anomalies may have a genetic/rare syndrome — refer to paediatrics/clinical genetics for assessment (and consider microarray/genetic testing via the specialist).',
        'Signpost families to condition-specific and umbrella support organisations (e.g. Unique, SWAN UK for undiagnosed conditions).',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE QS204 — Fetal Alcohol Spectrum Disorder', url: 'https://www.nice.org.uk/guidance/qs204' },
        { label: 'NICE CKS — Epilepsy in Children (Infantile Spasms)', url: 'https://cks.nice.org.uk/topics/epilepsy/' },
        { label: 'National FASD', url: 'https://nationalfasd.org.uk/' },
        { label: 'SWAN UK — Undiagnosed Genetic Conditions', url: 'https://www.undiagnosed.org.uk/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'alcohol-etoh', label: 'Alcohol', subtitle: 'Prevention — no safe amount in pregnancy' },
        { id: 'preconception-care', label: 'Preconception Care', subtitle: 'Alcohol advice before and during pregnancy' },
        { id: 'epilepsyChildhood', label: 'Childhood Epilepsy', subtitle: 'Infantile spasms in the wider epilepsy context' },
        { id: 'child-development', label: 'Child Development & Delay', subtitle: 'Recognising delay/regression' },
        { id: 'learning-disability', label: 'Learning Disability & Neurodiversity', subtitle: 'Lifelong support for neurodevelopmental disorders' },
      ],
    },

  ],
}
