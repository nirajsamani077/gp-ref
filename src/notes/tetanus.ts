import type { Note } from '../data/notes'

export const tetanus: Note = {
  id: 'tetanus',
  title: 'Tetanus & Wound Management',
  subtitle: 'Assessing tetanus-prone wounds, the immunisation-status decision, and immunoglobulin',
  tags: ['infection'],

  body: `tetanus Clostridium tetani tetanus-prone wound high-risk wound tetanus vaccine booster tetanus immunoglobulin TIG puncture wound contamination soil manure devitalised tissue trismus lockjaw risus sardonicus opisthotonus`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Tetanus is a rare but frequently fatal disease caused by the neurotoxin of Clostridium tetani, which enters through wounds contaminated with spores (soil, manure). Thanks to routine immunisation it is very uncommon in the UK, so the practical GP task is almost always the wound-management decision: classifying whether a wound is tetanus-prone, and combining that with the patient\'s immunisation status to decide on a vaccine booster and/or tetanus immunoglobulin.',
    },

    { type: 'heading', level: 2, text: 'Classifying the Wound' },
    {
      type: 'table',
      headers: ['Category', 'Features'],
      rows: [
        ['Tetanus-prone', 'Puncture wounds, wounds/burns with significant devitalised tissue, wounds contaminated with soil/manure, wounds requiring surgical intervention delayed >6h, and wounds with sepsis'],
        ['High-risk (need immunoglobulin regardless)', 'Heavy contamination with material likely to contain spores, extensive devitalised tissue, or wounds/burns with extensive tissue damage'],
        ['Clean', 'Non-tetanus-prone wounds — no soil/foreign body, presenting early, no significant tissue damage'],
      ],
    },

    { type: 'heading', level: 2, text: 'Wound Care First' },
    {
      type: 'list',
      items: [
        'Thorough cleaning and, where needed, debridement of devitalised tissue and removal of foreign bodies is the most important step — do not skip it in favour of relying on vaccine/immunoglobulin.',
        'Give the tetanus decision alongside general wound care and, where relevant, antibiotics (e.g. co-amoxiclav for a contaminated/bite wound) and consideration of other blood-borne/rabies risk.',
      ],
    },

    { type: 'heading', level: 2, text: 'Immunisation-Status Decision' },
    {
      type: 'table',
      headers: ['Immunisation status', 'Clean wound', 'Tetanus-prone / high-risk wound'],
      rows: [
        ['Fully immunised (5 doses, up to date)', 'No booster needed', 'No booster needed; immunoglobulin only if HIGH-risk'],
        ['Primary course complete but not up to date', 'No booster needed', 'Booster now; immunoglobulin if high-risk'],
        ['Incomplete / unknown / not fully immunised', 'Give a reinforcing dose (and plan to complete the course)', 'Vaccine dose NOW + tetanus immunoglobulin (TIG); complete the full course'],
      ],
      caption: 'When in doubt about status, treat as incomplete. Human tetanus immunoglobulin (or IV immunoglobulin per availability) provides immediate passive protection while the vaccine takes effect.',
    },

    { type: 'heading', level: 2, text: 'Recognising Established Tetanus' },
    {
      type: 'callout',
      variant: 'danger',
      title: 'Rare but an Emergency',
      items: [
        'Features: trismus ("lockjaw"), risus sardonicus (facial muscle spasm), neck/back stiffness and painful generalised muscle spasms/opisthotonus, and autonomic instability — with a preceding wound.',
        'Suspected tetanus is a medical emergency → admit for supportive care (ITU), wound debridement, antitoxin, metronidazole, and muscle-spasm control.',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'Green Book — Tetanus (Chapter 30)', url: 'https://www.gov.uk/government/publications/tetanus-the-green-book-chapter-30' },
        { label: 'UKHSA — Tetanus: Management of Wounds', url: 'https://www.gov.uk/government/publications/tetanus-advice-for-health-professionals' },
        { label: 'NICE CKS — Lacerations / Wounds', url: 'https://cks.nice.org.uk/topics/lacerations/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'immunisation-schedule', label: 'Immunisation Schedule', subtitle: 'The routine tetanus-containing vaccine schedule' },
        { id: 'cellulitis', label: 'Cellulitis & Skin Infections', subtitle: 'Wound infection and antibiotic choice' },
        { id: 'burns', label: 'Burns', subtitle: 'Burns are tetanus-prone wounds' },
        { id: 'notifiable-diseases', label: 'Notifiable Diseases', subtitle: 'Tetanus is notifiable' },
      ],
    },

  ],
}
