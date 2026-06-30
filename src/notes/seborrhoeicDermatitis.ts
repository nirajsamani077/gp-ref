import type { Note } from '../data/notes'

export const seborrhoeicDermatitis: Note = {
  id: 'seborrhoeic-dermatitis',
  title: 'Seborrhoeic Dermatitis, Pompholyx & Perioral Dermatitis',
  subtitle: 'Ketoconazole for seb derm, pompholyx eczema and steroid-induced perioral dermatitis',
  tags: ['dermatology'],

  body: `seborrhoeic dermatitis dandruff Malassezia ketoconazole shampoo Nizoral central face eyebrows nasolabial scalp pompholyx dyshidrotic eczema vesicular palms soles perioral dermatitis topical steroid induced HIV Parkinson's`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Seborrhoeic Dermatitis', url: 'https://cks.nice.org.uk/topics/seborrhoeic-dermatitis/' },
        { label: 'PCDS — Seborrhoeic Dermatitis', url: 'https://www.pcds.org.uk/clinical-guidance/seborrhoeic-dermatitis' },
        { label: 'NICE CKS — Perioral Dermatitis', url: 'https://cks.nice.org.uk/topics/perioral-dermatitis/' },
      ],
    },

    { type: 'heading', level: 2, text: 'Seborrhoeic Dermatitis' },

    {
      type: 'list',
      items: [
        'A chronic relapsing rash of sebum-rich ("seborrhoeic") skin, driven by an inflammatory response to Malassezia yeast: red, greasy scaling of the central face (eyebrows, nasolabial folds, behind the ears), scalp (dandruff), and sometimes the chest and flexures',
        'Infantile seborrhoeic dermatitis = "cradle cap" — benign, self-limiting',
        'Think bigger than the skin if widespread or treatment-resistant: consider HIV and Parkinson\'s disease (both associated with severe/refractory seb derm)',
      ],
    },

    {
      type: 'table',
      headers: ['Site', 'Treatment'],
      rows: [
        ['Scalp', 'Ketoconazole 2% shampoo (Nizoral) — lather in, leave ~5 min, twice weekly for 2–4 weeks then maintenance every 1–2 weeks; for inflammation/itch add a short course of a topical steroid scalp application (e.g. betamethasone/fluocinolone)'],
        ['Face / chest', 'Ketoconazole 2% cream (or the shampoo as a wash); a mild topical steroid (e.g. hydrocortisone) or a combined antifungal/steroid (e.g. Daktacort) for flares — use steroids in short courses; topical calcineurin inhibitor (tacrolimus/pimecrolimus) as a steroid-sparing option for the face'],
        ['Severe / resistant', 'Oral itraconazole; consider lymecycline and dermatology referral'],
      ],
    },

    { type: 'heading', level: 2, text: 'Pompholyx (Dyshidrotic Eczema)' },

    {
      type: 'list',
      items: [
        'An intensely itchy vesicular eczema of the palms and soles (deep "tapioca" blisters) that crack and dry; often related to heat/sweating and irritant exposure',
        'Management is as for eczema: identify and avoid irritants (gloves for wet work), generous emollients and a soap substitute; potent topical steroids for flares; a potassium permanganate soak can help acute weepy/blistered flares; treat secondary bacterial infection',
        'Refer if severe/recurrent or not responding (consider patch testing for contact allergy)',
      ],
    },

    { type: 'heading', level: 2, text: 'Perioral Dermatitis' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Stop the Steroid',
      items: [
        'Papules, vesicles and pustules around the mouth (characteristically SPARING the vermilion border/lip margin); also periocular/perinasal',
        'Classically triggered or worsened by topical (or inhaled/nasal) corticosteroids — the key step is to STOP the steroid (warn the rash may flare initially before improving)',
        'Treat with a topical antibiotic (erythromycin/clindamycin/metronidazole) or, if more severe, an oral tetracycline (doxycycline/lymecycline) for several weeks',
        'Avoid heavy cosmetics/occlusive creams while it settles',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'atopic-eczema', label: 'Atopic Eczema', subtitle: 'Eczema management principles — emollients and steroids' },
        { id: 'topical-steroid-ladder', label: 'Topical Steroid Ladder', subtitle: 'Choosing potency and safe use' },
        { id: 'fungal-skin-infections', label: 'Fungal Skin Infections', subtitle: 'Malassezia overlap; scaly-rash differentials' },
        { id: 'hiv', label: 'HIV', subtitle: 'Severe/refractory seb derm — consider underlying HIV' },
        { id: 'parkinsons-pd', label: "Parkinson's Disease", subtitle: 'Associated with troublesome seborrhoeic dermatitis' },
      ],
    },

  ],
}
