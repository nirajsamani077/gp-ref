import type { Note } from '../data/notes'

export const hyperhidrosis: Note = {
  id: 'hyperhidrosis',
  title: 'Hyperhidrosis',
  subtitle: 'Primary focal vs secondary sweating, the treatment ladder from antiperspirants to Botox, and red flags',
  tags: ['dermatology'],

  body: `hyperhidrosis excessive sweating primary focal secondary generalised aluminium chloride Driclor iontophoresis glycopyrronium botulinum toxin oxybutynin sympathectomy axillary palmar plantar night sweats malignancy hyperthyroidism`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Hyperhidrosis is sweating beyond what is needed for thermoregulation. The key split is primary focal hyperhidrosis — symmetrical, localised (axillae, palms, soles, face), starting in youth, with a family history and stopping during sleep — which is benign but can be socially disabling, versus secondary hyperhidrosis, which is generalised, may occur at night, and can signal an underlying condition that must be excluded.',
    },

    { type: 'heading', level: 2, text: 'Primary vs Secondary' },
    {
      type: 'table',
      headers: ['Feature', 'Primary focal', 'Secondary'],
      rows: [
        ['Distribution', 'Symmetrical, focal (axillae/palms/soles/face)', 'Generalised (whole body)'],
        ['Onset', 'Childhood/adolescence, family history', 'Any age, new onset'],
        ['During sleep', 'Stops (dry at night)', 'Can occur at night (night sweats)'],
        ['Cause', 'Idiopathic (overactive sympathetic response)', 'Drugs, endocrine, infection, malignancy, menopause, anxiety'],
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Exclude a Secondary Cause',
      items: [
        'Generalised sweating, especially with NIGHT SWEATS, weight loss, fever or lymphadenopathy → investigate for infection (TB, HIV), lymphoma/malignancy, hyperthyroidism, and diabetes (see Night Sweats).',
        'Review drugs (antidepressants — especially SSRIs/venlafaxine, opioids, cholinesterase inhibitors), menopause, anxiety, and alcohol.',
        'Take a focused history/examination and targeted bloods (TFTs, glucose, FBC, inflammatory markers) if secondary sweating is suspected.',
      ],
    },

    { type: 'heading', level: 2, text: 'Treatment Ladder (Primary Focal)' },
    {
      type: 'table',
      headers: ['Step', 'Treatment'],
      rows: [
        ['First-line', 'Topical aluminium chloride 20% (e.g. Driclor) applied at night to dry skin, washed off in the morning — reduce frequency once controlled; skin irritation is common (apply to dry skin, use an emollient)'],
        ['Adjuncts', 'Absorbent/loose clothing, sweat shields, avoid triggers; manage coexisting anxiety'],
        ['Palms/soles', 'Tap-water iontophoresis (a home or clinic device) is effective for palmar/plantar disease'],
        ['Systemic', 'An oral anticholinergic (e.g. glycopyrronium or oxybutynin) for generalised/refractory cases — limited by dry mouth, blurred vision, constipation'],
        ['Specialist', 'Intradermal botulinum toxin (very effective for axillary hyperhidrosis; NHS availability varies), and, rarely, endoscopic thoracic sympathectomy (risk of compensatory sweating) for severe refractory palmar disease'],
      ],
      caption: 'Refer to dermatology if not controlled by topical treatment/iontophoresis, or for botulinum toxin/systemic options.',
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Hyperhidrosis', url: 'https://cks.nice.org.uk/topics/hyperhidrosis/' },
        { label: 'PCDS — Hyperhidrosis', url: 'https://www.pcds.org.uk/clinical-guidance/hyperhidrosis' },
        { label: 'Hyperhidrosis UK Support', url: 'https://hyperhidrosisuk.org/' },
        { label: 'BAD — Hyperhidrosis Leaflet', url: 'https://www.bad.org.uk/pils/hyperhidrosis/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'night-sweats', label: 'Night Sweats & Flushing', subtitle: 'Generalised/nocturnal sweating work-up' },
        { id: 'hyperthyroidism', label: 'Hyperthyroidism', subtitle: 'A secondary endocrine cause' },
        { id: 'menopause', label: 'Menopause', subtitle: 'Vasomotor sweating in perimenopause' },
        { id: 'anxiety-gad', label: 'Anxiety Disorders', subtitle: 'A common contributor to focal sweating' },
      ],
    },

  ],
}
