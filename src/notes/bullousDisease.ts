import type { Note } from '../data/notes'

export const bullousDisease: Note = {
  id: 'bullous-disease',
  title: 'Bullous Disease — Pemphigoid vs Pemphigus',
  subtitle: 'Tense vs flaccid blisters, the Nikolsky sign, immediate dermatology referral and the wider blister differential',
  tags: ['dermatology'],

  body: `bullous pemphigoid pemphigus vulgaris tense flaccid blisters mucosal erosions Nikolsky sign direct immunofluorescence skin biopsy corticosteroids doxycycline azathioprine rituximab blistering rash drug-induced gliptin dermatitis herpetiformis SJS TEN eczema herpeticum`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'The autoimmune (immunobullous) blistering diseases — chiefly bullous pemphigoid and pemphigus vulgaris — are uncommon but important because they need urgent specialist diagnosis (biopsy with immunofluorescence) and immunosuppression. The GP\'s job is to recognise the pattern, distinguish the two clinically, screen the drug history, and refer without delay. A wide range of other conditions also blister, some of which are emergencies.',
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Suspected Pemphigoid or Pemphigus → Urgent/Same-Day Dermatology',
      items: [
        'Both need urgent dermatology referral for biopsy (including direct immunofluorescence) and immunosuppression.',
        'Pemphigus vulgaris is the more dangerous — mucosal erosions and extensive superficial skin loss (like a burn) with fluid loss and infection risk → treat as urgent.',
        'Extensive blistering/skin loss with systemic upset is a dermatological emergency → admit.',
      ],
    },

    { type: 'heading', level: 2, text: 'Pemphigoid vs Pemphigus' },
    {
      type: 'table',
      headers: ['Feature', 'Bullous pemphigoid', 'Pemphigus vulgaris'],
      rows: [
        ['Blister', 'TENSE, firm (deeper, sub-epidermal)', 'FLACCID, rupture easily (superficial, intra-epidermal)'],
        ['Mucosa', 'Usually spared', 'Commonly involved (mouth erosions often first)'],
        ['Nikolsky sign', 'Negative', 'Positive (skin shears with lateral pressure)'],
        ['Typical age', 'Elderly (70s–80s)', 'Middle-aged'],
        ['Symptom', 'Often itchy (may have an urticarial prodrome)', 'Painful erosions'],
        ['Severity', 'Less severe; may be drug-related', 'More severe, potentially life-threatening'],
      ],
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Principles of Treatment (Specialist-Led)',
      items: [
        'Diagnosis: skin biopsy — one for histology (edge of a fresh blister) and one of perilesional skin for direct immunofluorescence.',
        'Localised bullous pemphigoid: potent/very potent topical corticosteroid (e.g. clobetasol) is often effective and safer than systemic steroids.',
        'Extensive pemphigoid: oral corticosteroids ± doxycycline (steroid-sparing, useful in the frail) and other immunosuppressants (azathioprine, methotrexate).',
        'Pemphigus: systemic corticosteroids plus a steroid-sparing agent; rituximab is now first-line adjunct for moderate–severe disease.',
      ],
    },

    { type: 'heading', level: 2, text: 'The Wider Blister Differential' },
    {
      type: 'table',
      headers: ['Category', 'Examples'],
      rows: [
        ['Infection', 'Herpes simplex/zoster (grouped/dermatomal vesicles), bullous impetigo, hand-foot-and-mouth, eczema herpeticum'],
        ['Drug reactions', 'Fixed drug eruption; Stevens-Johnson syndrome / toxic epidermal necrolysis (mucosal involvement, skin detachment, systemic upset → admit)'],
        ['Immunobullous', 'Bullous pemphigoid, pemphigus, dermatitis herpetiformis (intensely itchy blisters on extensors — associated with coeliac disease)'],
        ['Other', 'Bullous insect bites, pompholyx (palms/soles), friction/burns, porphyria cutanea tarda (photosensitive blistering on the hands)'],
      ],
    },
    {
      type: 'list',
      items: [
        'Always review new drugs — bullous pemphigoid can be drug-induced (notably DPP-4 inhibitors/"gliptins", some antibiotics, and immune-checkpoint inhibitors); stop suspected culprits.',
        'Dermatitis herpetiformis warrants coeliac serology and a gluten-free diet (plus dapsone) — see Coeliac Disease.',
      ],
    },

    { type: 'heading', level: 2, text: 'Patient Information Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'PCDS — Immunobullous Disease', url: 'https://www.pcds.org.uk/clinical-guidance/bullous-pemphigoid' },
        { label: 'BAD — Bullous Pemphigoid Leaflet', url: 'https://www.bad.org.uk/pils/bullous-pemphigoid/' },
        { label: 'BAD — Pemphigus Vulgaris Leaflet', url: 'https://www.bad.org.uk/pils/pemphigus-vulgaris/' },
        { label: 'International Pemphigus & Pemphigoid Foundation', url: 'https://www.pemphigus.org/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'shingles-chickenpox', label: 'Shingles & Chickenpox', subtitle: 'Vesicular/blistering viral rashes' },
        { id: 'impetigo', label: 'Impetigo & Folliculitis/Boils', subtitle: 'Bullous impetigo — a common differential' },
        { id: 'coeliac-disease', label: 'Coeliac Disease', subtitle: 'Dermatitis herpetiformis association' },
        { id: 'topical-steroid-ladder', label: 'Topical Steroid Ladder', subtitle: 'Potent topical steroids for localised pemphigoid' },
        { id: 'burns', label: 'Burns', subtitle: 'Extensive skin loss — analogous fluid/infection management' },
      ],
    },

  ],
}
