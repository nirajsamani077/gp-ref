import type { Note } from '../data/notes'

export const challengingBehaviour: Note = {
  id: 'challenging-behaviour',
  title: 'Challenging Behaviour & Feeding Problems (Children)',
  subtitle: 'Behaviour as communication, common feeding difficulties, and when a behavioural problem is a red flag',
  tags: ['paediatrics'],

  body: `challenging behaviour children tantrums defiance ODD feeding problems fussy eating picky eater faltering growth ARFID behaviour communication parenting programme autism ADHD safeguarding sleep`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Behavioural and feeding concerns are among the commonest reasons parents seek help. Most are normal developmental variation or reflect the child\'s environment and are managed with reassurance, parenting support and simple strategies. The GP\'s job is to normalise and support, to spot the physical and safeguarding red flags, and to recognise when behaviour signals an underlying neurodevelopmental or mental-health condition.',
    },

    { type: 'heading', level: 2, text: 'Challenging Behaviour' },
    {
      type: 'list',
      items: [
        'Behaviour is COMMUNICATION — tantrums, defiance and aggression are often developmentally normal (toddler tantrums, adolescent boundary-testing) or a response to unmet needs, tiredness, hunger, inconsistency, or distress.',
        'Take a history of the behaviour (antecedents–behaviour–consequences), sleep, screen time, family stress/parental mental health, and school; examine for physical causes of distress (pain, constipation, hearing/vision) in younger/non-verbal children.',
        'First-line support: consistent boundaries, routine, positive reinforcement, and evidence-based PARENTING PROGRAMMES (e.g. Triple P, Incredible Years); address sleep and screen habits; support parental wellbeing.',
        'Consider referral where behaviour is severe, persistent, pervasive across settings, or associated with developmental concerns — for possible ADHD, autism (see those notes), oppositional defiant/conduct disorder, anxiety or attachment difficulties.',
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Red Flags — Don\'t Miss',
      items: [
        'Safeguarding: a sudden behaviour change, regression, sexualised behaviour, marked fear of a person, or unexplained injuries → consider abuse/neglect and follow safeguarding pathways.',
        'A physical cause of "behaviour": pain, constipation, hearing loss, or a medical illness in a child who cannot articulate it.',
        'Behaviour with developmental regression, or with new neurological features, needs urgent assessment.',
      ],
    },

    { type: 'heading', level: 2, text: 'Feeding Problems' },
    {
      type: 'list',
      items: [
        'Fussy/"picky" eating is extremely common in toddlers/preschoolers and usually resolves — reassure, and advise a low-pressure, structured approach (regular family meals, repeated non-coercive exposure to foods, avoid battles/bribery, model eating, limit grazing/juice).',
        'CHECK GROWTH: plot on a growth chart. Feeding concern WITH faltering growth, or with choking/coughing on feeds, vomiting, or specific food avoidance/weight loss, warrants assessment (see Faltering Growth) — consider reflux, cow\'s milk protein allergy, coeliac, oromotor/swallowing problems, and ARFID (avoidant/restrictive food intake disorder, often with autism).',
        'Refer to health visitor/dietitian for persistent feeding difficulty, and to paediatrics/SLT for suspected swallowing or organic problems.',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG26 — Children\'s Attachment', url: 'https://www.nice.org.uk/guidance/ng26' },
        { label: 'NICE CG158 — Antisocial Behaviour & Conduct Disorders', url: 'https://www.nice.org.uk/guidance/cg158' },
        { label: 'NHS — Toddler Behaviour & Fussy Eating', url: 'https://www.nhs.uk/conditions/baby/toddler-development/' },
        { label: 'Family Lives', url: 'https://www.familylives.org.uk/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'adhd-child', label: 'ADHD (Children)', subtitle: 'When behaviour reflects ADHD' },
        { id: 'autism-asd', label: 'Autism (ASD)', subtitle: 'Behaviour/feeding difficulties and ARFID' },
        { id: 'faltering-growth', label: 'Faltering Growth', subtitle: 'Feeding problems affecting weight' },
        { id: 'child-safeguarding', label: 'Child Safeguarding', subtitle: 'Behaviour change as a red flag' },
        { id: 'child-anxiety-depression', label: 'Child Anxiety & Depression', subtitle: 'Emotional causes of behaviour' },
      ],
    },

  ],
}
