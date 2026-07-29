import type { Note } from '../data/notes'

export const nappyRash: Note = {
  id: 'nappy-rash',
  title: 'Nappy Rash (Napkin Dermatitis)',
  subtitle: 'Irritant dermatitis vs candidal infection, barrier care, and the rashes that are NOT simple nappy rash',
  tags: ['dermatology', 'paediatrics'],

  body: `nappy rash napkin dermatitis irritant contact dermatitis candida satellite lesions barrier cream emollient clotrimazole hydrocortisone flexure sparing seborrhoeic eczema psoriasis safeguarding`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Nappy rash is usually an irritant contact dermatitis from prolonged skin contact with urine/faeces, friction and occlusion — very common and easily managed with barrier care. The key skills are distinguishing simple irritant rash from secondary candidal infection (which needs an antifungal), and recognising the less common rashes that present in the nappy area but are something else.',
    },

    { type: 'heading', level: 2, text: 'Irritant vs Candidal' },
    {
      type: 'table',
      headers: ['Feature', 'Irritant napkin dermatitis', 'Candidal infection'],
      rows: [
        ['Distribution', 'Affects the convex/exposed surfaces (buttocks, genitals) and SPARES the skin-fold creases', 'INVOLVES the flexures/creases'],
        ['Morphology', 'Erythema, sometimes glazed/eroded', 'Beefy-red with SATELLITE lesions (small papules/pustules beyond the main rash)'],
        ['Trigger', 'Wetness, friction, diarrhoea, infrequent changes', 'Often after antibiotics or persistent (>3 days) irritant rash'],
      ],
    },

    { type: 'heading', level: 2, text: 'Management' },
    {
      type: 'callout',
      variant: 'info',
      title: 'Barrier First',
      items: [
        'General measures: frequent nappy changes, thorough but gentle cleaning (water or fragrance-free wipes), nappy-free time to air the skin, high-absorbency nappies, and a thin BARRIER preparation (e.g. zinc & castor oil / white soft paraffin) at each change.',
        'Persistent inflammation: a short course of a MILD topical corticosteroid (hydrocortisone 1%) once daily for up to ~7 days.',
        'Suspected CANDIDA (flexural involvement, satellite lesions, or not settling): a topical imidazole antifungal (e.g. clotrimazole); a combined antifungal/mild-steroid can be used short-term if inflamed.',
        'Do NOT use potent steroids or combined potent-steroid products on infant skin under occlusion.',
      ],
    },

    { type: 'heading', level: 2, text: 'Not Simple Nappy Rash — Reconsider If…' },
    {
      type: 'list',
      items: [
        'Not responding to good barrier care and antifungal → reconsider the diagnosis.',
        'Well-demarcated red plaques (napkin PSORIASIS), or a greasy rash also in the scalp/face/other flexures (infantile SEBORRHOEIC dermatitis), or itchy rash elsewhere (atopic eczema — but eczema tends to SPARE the nappy area).',
        'Erosions/blistering/ulceration, perianal streptococcal infection, or an unusual distribution → consider infection, and rarely zinc deficiency (acrodermatitis enteropathica) or Langerhans cell histiocytosis if severe/refractory.',
        'Always keep safeguarding in mind for a severe, neglected, or unusual rash.',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Nappy Rash', url: 'https://cks.nice.org.uk/topics/nappy-rash/' },
        { label: 'BAD — Napkin Dermatitis', url: 'https://www.bad.org.uk/pils/napkin-dermatitis/' },
        { label: 'NHS — Nappy Rash', url: 'https://www.nhs.uk/conditions/nappy-rash/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'atopic-eczema', label: 'Atopic Eczema', subtitle: 'Tends to spare the nappy area — a discriminator' },
        { id: 'seborrhoeic-dermatitis', label: 'Seborrhoeic Dermatitis', subtitle: 'Infantile seb derm/cradle cap involving flexures' },
        { id: 'intertrigo', label: 'Intertrigo', subtitle: 'The same occlusion/candida mechanism in adult skin folds' },
        { id: 'fungal-skin-infections', label: 'Fungal Skin Infections', subtitle: 'Candida and its treatment' },
      ],
    },

  ],
}
