import type { Note } from '../data/notes'

export const intertrigo: Note = {
  id: 'intertrigo',
  title: 'Intertrigo',
  subtitle: 'Inflammation of skin folds — the irritant/candidal/bacterial overlap, and weight/moisture management',
  tags: ['dermatology'],

  body: `intertrigo skin folds submammary groin abdominal apron axilla candida satellite lesions maceration friction moisture obesity diabetes antifungal clotrimazole barrier drying flexural psoriasis erythrasma`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Intertrigo is inflammation of skin folds (submammary, groin, axillae, abdominal apron, natal cleft, between toes) caused by moisture, friction, warmth and occlusion — the adult equivalent of the mechanism behind nappy rash. It frequently becomes secondarily infected with Candida (and sometimes bacteria), and is strongly linked to obesity, diabetes and immobility, so management combines treating the infection with reducing moisture and addressing the underlying factors.',
    },

    { type: 'heading', level: 2, text: 'Recognition' },
    {
      type: 'list',
      items: [
        'Well-demarcated erythema in a skin fold, often glazed/moist or macerated, with soreness/itch; candidal overlay is suggested by a beefy-red colour with SATELLITE papules/pustules and involvement deep in the crease.',
        'Consider the differentials in a fold: flexural (inverse) PSORIASIS (well-defined, less scaly in folds), seborrhoeic dermatitis, contact dermatitis, ERYTHRASMA (a bacterial, coral-red-fluorescing, brownish patch), and tinea (more common between toes/groin — an active scaly edge).',
        'Screen for and manage predisposing factors: obesity, diabetes (check glucose/HbA1c if recurrent), hyperhidrosis, incontinence and immobility.',
      ],
    },

    { type: 'heading', level: 2, text: 'Management' },
    {
      type: 'callout',
      variant: 'info',
      title: 'Treat the Infection, Keep It Dry',
      items: [
        'Reduce moisture/friction: keep folds clean and DRY, pat (don\'t rub) dry, use loose breathable clothing, and separate skin surfaces (e.g. a soft cloth/dry dressing in the fold); a barrier preparation protects the skin.',
        'Candidal intertrigo: a topical imidazole antifungal (e.g. clotrimazole/miconazole); a combined antifungal + mild corticosteroid (e.g. Daktacort) short-term if inflamed — avoid prolonged/potent steroids in occluded folds (atrophy).',
        'Bacterial infection/erythrasma: erythrasma responds to a topical antibacterial/imidazole (or oral macrolide if extensive); treat overt bacterial infection with antibiotics as needed.',
        'Address weight (a key modifiable factor), optimise diabetic control, and manage hyperhidrosis/incontinence to prevent recurrence.',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'PCDS — Intertrigo', url: 'https://www.pcds.org.uk/clinical-guidance/intertrigo' },
        { label: 'DermNet — Intertrigo', url: 'https://dermnetnz.org/topics/intertrigo' },
        { label: 'NICE CKS — Candida (Skin)', url: 'https://cks.nice.org.uk/topics/candida-skin/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'fungal-skin-infections', label: 'Fungal Skin Infections', subtitle: 'Candida and tinea in the flexures' },
        { id: 'nappy-rash', label: 'Nappy Rash', subtitle: 'The same occlusion/candida mechanism in infants' },
        { id: 'psoriasis', label: 'Psoriasis', subtitle: 'Flexural (inverse) psoriasis — a key differential' },
        { id: 'obesity', label: 'Obesity & Weight Management', subtitle: 'A major modifiable risk factor' },
        { id: 'hyperhidrosis', label: 'Hyperhidrosis', subtitle: 'Excess moisture predisposing to intertrigo' },
      ],
    },

  ],
}
