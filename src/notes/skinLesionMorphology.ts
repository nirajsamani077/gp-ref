import type { Note } from '../data/notes'

export const skinLesionMorphology: Note = {
  id: 'skin-lesion-morphology',
  title: 'Describing Skin Lesions (Morphology Primer)',
  subtitle: 'The vocabulary of dermatology — primary/secondary lesions, distribution and configuration for accurate referrals',
  tags: ['dermatology'],

  body: `skin lesion morphology macule papule plaque nodule vesicle bulla pustule wheal purpura petechiae ecchymosis erosion ulcer scale crust lichenification excoriation distribution configuration annular target dermatology referral description`,

  content: [

    { type: 'heading', level: 2, text: 'Why It Matters' },
    {
      type: 'para',
      text: 'Using precise dermatological vocabulary turns "a rash" into a describable, diagnosable problem — and makes referrals (and teledermatology photos) far more useful. Describe a skin problem in a consistent order: the primary lesion, any secondary change, the colour, the configuration, and the distribution. This primer is the shared language behind the specific dermatology notes.',
    },

    { type: 'heading', level: 2, text: 'Primary Lesions' },
    {
      type: 'table',
      headers: ['Term', 'Definition'],
      rows: [
        ['Macule', 'Flat area of altered colour, <1 cm (a larger flat lesion = patch)'],
        ['Papule', 'Raised solid lesion <1 cm'],
        ['Plaque', 'Raised flat-topped lesion >1 cm (e.g. psoriasis)'],
        ['Nodule', 'Raised solid lesion >1 cm, deeper than a papule'],
        ['Vesicle / bulla', 'Fluid-filled blister <1 cm (vesicle) / >1 cm (bulla)'],
        ['Pustule', 'Pus-filled lesion'],
        ['Wheal', 'Transient raised oedematous lesion (urticaria)'],
        ['Purpura / petechiae / ecchymosis', 'Non-blanching haemorrhage into skin — pinpoint (petechiae), larger (purpura), bruise-like (ecchymosis)'],
      ],
    },

    { type: 'heading', level: 2, text: 'Secondary Changes' },
    {
      type: 'table',
      headers: ['Term', 'Definition'],
      rows: [
        ['Scale', 'Flakes of stratum corneum (psoriasis, eczema, fungal)'],
        ['Crust', 'Dried exudate/serum (impetigo — golden crust)'],
        ['Erosion / ulcer', 'Loss of epidermis (erosion, heals without scar) / loss into dermis or deeper (ulcer, scars)'],
        ['Lichenification', 'Thickened skin with accentuated markings from chronic rubbing'],
        ['Excoriation', 'Scratch marks / loss of surface from scratching'],
        ['Fissure / atrophy', 'Linear crack / thinning of the skin'],
      ],
    },

    { type: 'heading', level: 2, text: 'Configuration & Distribution' },
    {
      type: 'list',
      items: [
        'Configuration (the arrangement): annular (ring — tinea, granuloma annulare), target (erythema multiforme), linear (contact/koebnerised), grouped (herpes vesicles), reticulate (net-like — erythema ab igne, livedo), discoid (coin-shaped).',
        'Distribution (where): symmetrical vs asymmetrical (a unilateral/asymmetric annular scaly plaque suggests tinea, not eczema); flexural (atopic eczema) vs extensor (psoriasis); photodistributed (face, dorsal hands, "V" of neck — spares shade); dermatomal (shingles); acral (hands/feet).',
        'Also note: colour, surface (scaly/smooth/warty), border (well- vs ill-defined), and whether purpura BLANCHES (vascular/erythema) or does NOT (haemorrhage — think vasculitis/thrombocytopenia/meningococcus).',
      ],
    },

    { type: 'heading', level: 2, text: 'Practical Tips for Referral' },
    {
      type: 'callout',
      variant: 'info',
      title: 'Make the Description (and Photo) Count',
      items: [
        'A good structured description: "Multiple well-defined erythematous plaques with silvery scale, symmetrically over the extensor knees and elbows" is instantly recognisable (psoriasis).',
        'For teledermatology, include a clear, well-lit close-up AND a wider view for distribution, plus a scale reference; document duration, symptoms (itch/pain), and change over time.',
        'Always record whether a lesion is changing, bleeding, or non-healing — the features that drive cancer referral (see the skin-cancer notes).',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'PCDS — Describing Skin Lesions', url: 'https://www.pcds.org.uk/' },
        { label: 'DermNet — Describing Skin Lesions', url: 'https://dermnetnz.org/topics/describing-skin-lesions' },
        { label: 'BAD — Clinical Resources', url: 'https://www.bad.org.uk/healthcare-professionals/clinical-standards/clinical-guidelines/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'atopic-eczema', label: 'Atopic Eczema', subtitle: 'Flexural, ill-defined, itchy — worked example' },
        { id: 'psoriasis', label: 'Psoriasis', subtitle: 'Extensor plaques with silvery scale — worked example' },
        { id: 'melanoma', label: 'Melanoma', subtitle: 'Applying morphology to pigmented-lesion red flags' },
        { id: 'fungal-skin-infections', label: 'Fungal Skin Infections', subtitle: 'Asymmetric annular scaly plaques' },
        { id: 'bullous-disease', label: 'Bullous Disease', subtitle: 'Vesicles vs bullae; tense vs flaccid' },
      ],
    },

  ],
}
