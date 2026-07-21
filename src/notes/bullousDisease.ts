import type { Note } from '../data/notes'

export const bullousDisease: Note = {
  id: 'bullous-disease',
  title: 'Bullous Disease — Pemphigoid vs Pemphigus',
  subtitle: 'Tense vs flaccid blisters, Nikolsky sign, immediate dermatology referral and causes of blistering',
  tags: ['dermatology'],

  body: `bullous pemphigoid pemphigus vulgaris tense blisters flaccid blisters mucosal Nikolsky sign direct immunofluorescence biopsy corticosteroids immunosuppression blistering rash drug-induced dermatitis herpetiformis`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Blistering Skin Conditions', url: 'https://cks.nice.org.uk/specialities/skin/' },
        { label: 'PCDS — Immunobullous Disease', url: 'https://www.pcds.org.uk/clinical-guidance/bullous-pemphigoid' },
        { label: 'BAD — Pemphigoid / Pemphigus', url: 'https://www.bad.org.uk/pils/bullous-pemphigoid/' },
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Suspected Pemphigoid or Pemphigus → Same-Day Dermatology',
      items: [
        'Both are autoimmune blistering diseases needing urgent dermatology referral/discussion for biopsy and immunosuppression',
        'Pemphigus VULGARIS is the more dangerous (mucosal involvement, extensive skin loss like a burn) — treat as urgent',
        'Extensive blistering/skin loss with systemic upset → treat as a dermatological emergency (fluid loss, infection risk)',
      ],
    },

    { type: 'heading', level: 2, text: 'Pemphigoid vs Pemphigus' },

    {
      type: 'table',
      headers: ['Feature', 'Bullous pemphigoid', 'Pemphigus vulgaris'],
      rows: [
        ['Blister', 'TENSE, firm blisters (deeper, sub-epidermal)', 'FLACCID blisters that rupture easily (superficial, intra-epidermal)'],
        ['Mucosa', 'Usually spared', 'Commonly involved (mouth erosions often first)'],
        ['Nikolsky sign', 'Negative', 'Positive (skin shears with lateral pressure — like TEN)'],
        ['Typical age', 'Elderly (80s)', 'Middle-aged'],
        ['Itch', 'Often itchy', 'Painful erosions'],
        ['Severity', 'Less severe; may be drug-related', 'More severe, potentially life-threatening'],
      ],
      caption: 'Diagnosis is by skin biopsy with direct immunofluorescence. Both are managed with corticosteroids (potent topical for localised pemphigoid; systemic for extensive disease/pemphigus) and steroid-sparing immunosuppression (e.g. azathioprine, rituximab for pemphigus) — specialist-led.',
    },

    { type: 'heading', level: 2, text: 'Other Causes of a Blistering Rash' },

    {
      type: 'list',
      items: [
        'Infection: herpes simplex/zoster (grouped vesicles, dermatomal in shingles), bullous impetigo, hand-foot-and-mouth, eczema herpeticum',
        'Drug reactions: fixed drug eruption, and the emergencies Stevens-Johnson syndrome / toxic epidermal necrolysis (mucosal involvement, skin detachment, systemic upset — admit)',
        'Immunobullous: bullous pemphigoid, pemphigus, dermatitis herpetiformis (intensely itchy blisters on extensors — associated with coeliac disease)',
        'Other: bullous insect bites, pompholyx (palms/soles), friction/burns, and porphyria cutanea tarda (photosensitive blistering)',
        'Review any new drugs (pemphigoid can be drug-induced — e.g. some antibiotics, gliptins) and stop suspected culprits',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'shingles-chickenpox', label: 'Shingles & Chickenpox', subtitle: 'Vesicular/blistering viral rashes' },
        { id: 'impetigo', label: 'Impetigo & Folliculitis/Boils', subtitle: 'Bullous impetigo — a common differential' },
        { id: 'coeliac-disease', label: 'Coeliac Disease', subtitle: 'Dermatitis herpetiformis association' },
        { id: 'topical-steroid-ladder', label: 'Topical Steroid Ladder', subtitle: 'Potent topical steroids for localised pemphigoid' },
      ],
    },

  ],
}
