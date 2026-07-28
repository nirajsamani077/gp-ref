import type { Note } from '../data/notes'

export const keratosisPilaris: Note = {
  id: 'keratosis-pilaris',
  title: 'Keratosis Pilaris',
  subtitle: '"Chicken skin" — a very common benign follicular condition, reassurance and emollient-based care',
  tags: ['dermatology'],

  body: `keratosis pilaris chicken skin follicular keratin plugs upper arms thighs cheeks rough bumps benign emollient urea salicylic acid lactic acid atopic dry skin reassurance`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Keratosis pilaris is an extremely common, entirely benign condition in which keratin plugs the hair follicles, producing rough, small, skin-coloured or reddish bumps ("chicken skin"). It is harmless and often improves with age. The main role of the GP is confident reassurance and simple skin-care advice — it does not need investigation or referral.',
    },

    { type: 'heading', level: 2, text: 'Recognition' },
    {
      type: 'list',
      items: [
        'Symmetrical, rough, follicular papules — like permanent goose-bumps or fine sandpaper — typically on the outer upper arms, thighs, buttocks and (in children) the cheeks.',
        'Usually asymptomatic, occasionally mildly itchy; more noticeable in dry/winter skin and associated with atopic (dry) skin/eczema and ichthyosis.',
        'Common in children and adolescents; frequently improves in adulthood.',
      ],
    },

    { type: 'heading', level: 2, text: 'Management' },
    {
      type: 'callout',
      variant: 'info',
      title: 'Reassure — Cosmetic, Not Curable',
      items: [
        'Explain it is harmless and common, and that treatment improves texture/appearance but does not "cure" it — set realistic expectations.',
        'General skin care: regular emollients, gentle washing (avoid harsh soaps/over-scrubbing), and avoid picking (causes post-inflammatory marks/scarring).',
        'For those bothered by it: a keratolytic emollient containing UREA, salicylic acid or lactic acid (or a mild topical retinoid) can smooth the skin; a light exfoliant may help.',
        'No investigations or referral are needed for typical keratosis pilaris.',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Keratosis Pilaris', url: 'https://cks.nice.org.uk/' },
        { label: 'BAD — Keratosis Pilaris Leaflet', url: 'https://www.bad.org.uk/pils/keratosis-pilaris/' },
        { label: 'DermNet — Keratosis Pilaris', url: 'https://dermnetnz.org/topics/keratosis-pilaris' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'atopic-eczema', label: 'Atopic Eczema', subtitle: 'Associated dry-skin condition; emollient principles' },
        { id: 'topical-steroid-ladder', label: 'Topical Steroid Ladder', subtitle: 'For coexisting eczema (not for KP itself)' },
        { id: 'skin-lesion-morphology', label: 'Describing Skin Lesions', subtitle: 'Follicular papules in the morphology primer' },
      ],
    },

  ],
}
