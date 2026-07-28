import type { Note } from '../data/notes'

export const paediatricSleepOsa: Note = {
  id: 'paediatric-sleep-osa',
  title: 'Sleep Problems & OSA in Children',
  subtitle: 'Behavioural sleep problems, obstructive sleep apnoea (adenotonsillar), and the obesity link',
  tags: ['paediatrics'],

  body: `paediatric sleep problems behavioural insomnia sleep hygiene bedtime routine melatonin obstructive sleep apnoea children snoring adenotonsillar hypertrophy adenotonsillectomy obesity ADHD neurodisability parasomnia night terrors`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Childhood sleep problems are common and split into two broad groups: behavioural sleep problems (difficulty settling/frequent waking, driven by routine and sleep associations) and obstructive sleep apnoea (a physical airway problem, usually from big tonsils and adenoids). Both affect behaviour, learning and family wellbeing, and both are very treatable — the key is distinguishing them and recognising OSA, which needs referral.',
    },

    { type: 'heading', level: 2, text: 'Behavioural Sleep Problems' },
    {
      type: 'list',
      items: [
        'Difficulty settling, frequent night waking, and needing a parent/feed to fall asleep — usually a learned sleep-association or limit-setting problem rather than pathology.',
        'First-line is behavioural: a consistent bedtime routine, a regular sleep/wake schedule, an appropriate sleep-conducive environment (dark, screen-free before bed), positive-reinforcement and gradual-withdrawal/"controlled comforting" techniques, and managing daytime naps.',
        'Melatonin is NOT first-line and is not for typical behavioural insomnia — it is used (specialist-initiated) for sleep-onset problems in children with neurodevelopmental conditions (ADHD, autism, learning disability) after behavioural measures.',
        'Consider and treat contributors: eczema/itch, reflux, ADHD/anxiety, and screen use; screen for parental exhaustion/mental health.',
      ],
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Parasomnias (Usually Benign)',
      items: [
        'Night terrors: sudden arousal from deep sleep with screaming/terror in the first few hours, the child inconsolable and not truly awake, with no memory next day — reassure; ensure safety; consider scheduled awakening if frequent. Distinct from nightmares (later in the night, child wakes and remembers).',
        'Sleepwalking: keep the environment safe; usually outgrown.',
      ],
    },

    { type: 'heading', level: 2, text: 'Obstructive Sleep Apnoea (OSA)' },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Snoring With Pauses → Refer ENT',
      items: [
        'Suspect OSA with habitual SNORING plus witnessed apnoeas/gasping, restless sleep, mouth-breathing, and unusual sleep positions (neck extended); daytime effects in children are often behavioural — hyperactivity, poor concentration and irritability — rather than sleepiness.',
        'The commonest cause is adenotonsillar hypertrophy; other risk factors include obesity, Down syndrome, craniofacial anomalies and neuromuscular disease.',
        'Refer to ENT (± sleep studies); adenotonsillectomy is often curative. Untreated OSA can cause growth impairment, behavioural/learning problems and (rarely) cor pulmonale.',
      ],
    },

    { type: 'heading', level: 2, text: 'The Obesity Link' },
    {
      type: 'list',
      items: [
        'Childhood obesity both causes and worsens OSA and is associated with poorer sleep — address weight as part of management (see Obesity), and screen obese children who snore for OSA.',
        'Conversely, poor sleep contributes to weight gain and behavioural difficulty — a bidirectional relationship worth addressing together.',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Insomnia (Children)', url: 'https://cks.nice.org.uk/topics/insomnia/' },
        { label: 'ENT UK — Paediatric OSA / Sleep-Disordered Breathing', url: 'https://www.entuk.org/patients/conditions/' },
        { label: 'The Sleep Charity', url: 'https://thesleepcharity.org.uk/' },
        { label: 'NHS — Sleep Tips for Children', url: 'https://www.nhs.uk/live-well/sleep-and-tiredness/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'osa', label: 'Obstructive Sleep Apnoea (Adults)', subtitle: 'Adult OSA — diagnosis and CPAP' },
        { id: 'obesity', label: 'Obesity & Weight Management', subtitle: 'Childhood obesity and its bidirectional sleep link' },
        { id: 'adhd-child', label: 'ADHD (Children)', subtitle: 'Sleep problems overlap; melatonin use' },
        { id: 'autism-asd', label: 'Autism (ASD)', subtitle: 'Neurodevelopmental sleep problems and melatonin' },
        { id: 'ome-glue-ear', label: 'Otitis Media with Effusion', subtitle: 'Adenotonsillar disease overlap' },
      ],
    },

  ],
}
