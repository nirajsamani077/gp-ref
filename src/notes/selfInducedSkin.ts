import type { Note } from '../data/notes'

export const selfInducedSkin: Note = {
  id: 'self-induced-skin',
  title: 'Self-Induced Skin Conditions',
  subtitle: 'Dermatitis artefacta, skin-picking (excoriation) disorder and neurotic excoriations — a compassionate approach',
  tags: ['dermatology', 'mental'],

  body: `dermatitis artefacta factitious skin excoriation disorder skin picking neurotic excoriations acne excoriee trichotillomania psychodermatology bizarre shapes accessible sites CBT SSRI safeguarding`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'A group of conditions in which skin lesions are produced or perpetuated by the person\'s own actions — ranging from compulsive skin-picking (which the person acknowledges) to dermatitis artefacta (denied, factitious). They sit at the interface of dermatology and mental health, and are best managed with a non-confrontational, compassionate approach that addresses the underlying distress rather than "catching out" the patient.',
    },

    { type: 'heading', level: 2, text: 'The Spectrum' },
    {
      type: 'table',
      headers: ['Condition', 'Features'],
      rows: [
        ['Skin-picking (excoriation) disorder', 'Recurrent picking causing lesions, with attempts to stop; a body-focused repetitive behaviour related to OCD-spectrum disorders; the person acknowledges the behaviour'],
        ['Neurotic excoriations / acné excoriée', 'Picking/scratching of real or minor lesions (e.g. minimal acne) producing crusted erosions and scarring, often driven by anxiety'],
        ['Dermatitis artefacta', 'Lesions consciously self-inflicted but the causation is DENIED; often bizarre, geometric or angular shapes with sharp borders, in ACCESSIBLE sites, appearing "fully formed"; usually reflects psychological distress rather than external gain'],
        ['Malingering (distinct)', 'Deliberate production of lesions for a clear external gain — not a mental-health disorder'],
      ],
    },

    { type: 'heading', level: 2, text: 'Recognition' },
    {
      type: 'list',
      items: [
        'Clues to a self-induced/factitious cause: lesions in an unusual distribution/shape that does not fit any recognised dermatosis, confined to sites the hands can reach, with a history that "doesn\'t add up" and a curiously calm or vague account.',
        'Always EXCLUDE a genuine underlying skin or systemic disease first — and remember pruritus (an itch driving scratching) has many treatable causes (see Pruritus).',
        'Explore psychosocial stressors, anxiety/depression, OCD features, and — importantly — the possibility of self-harm or, in children, non-accidental injury (safeguarding).',
      ],
    },

    { type: 'heading', level: 2, text: 'Management' },
    {
      type: 'callout',
      variant: 'info',
      title: 'Compassion, Not Confrontation',
      items: [
        'Avoid direct confrontation/accusation, which ruptures the relationship — instead build trust, treat the skin (dress wounds, prevent infection/scarring), and gently explore stress and mood.',
        'Skin-picking/excoriation disorder: habit-reversal/CBT and treating comorbid anxiety/OCD (an SSRI may help); barrier measures (occlusive dressings) to interrupt the behaviour.',
        'Dermatitis artefacta: supportive dermatology-psychiatry (psychodermatology) input; occlusive dressings that lesions heal under can be both therapeutic and diagnostic; do not "trap" the patient.',
        'Refer to dermatology (diagnostic support, wound care) and to mental-health services/psychodermatology; manage any self-harm risk and safeguarding.',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'PCDS — Dermatitis Artefacta', url: 'https://www.pcds.org.uk/clinical-guidance/dermatitis-artefacta' },
        { label: 'BAD — Psychodermatology', url: 'https://www.bad.org.uk/' },
        { label: 'DermNet — Skin Picking Disorder', url: 'https://dermnetnz.org/topics/skin-picking-disorder' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'pruritus', label: 'Generalised Pruritus', subtitle: 'Exclude a genuine itch driving excoriation' },
        { id: 'ocd-bdd', label: 'OCD & BDD', subtitle: 'Body-focused repetitive behaviours and body image' },
        { id: 'suicide-self-harm', label: 'Suicide & Self-Harm', subtitle: 'Assess self-harm risk' },
        { id: 'mus', label: 'Medically Unexplained Symptoms', subtitle: 'Overlapping consultation challenges' },
        { id: 'acne-vulgaris', label: 'Acne Vulgaris', subtitle: 'Acné excoriée — picking of minimal acne' },
      ],
    },

  ],
}
