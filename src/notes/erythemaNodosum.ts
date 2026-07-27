import type { Note } from '../data/notes'

export const erythemaNodosum: Note = {
  id: 'erythema-nodosum',
  title: 'Erythema Nodosum & Reactive Skin Signs',
  subtitle: 'Painful shin nodules and their systemic associations, plus pyoderma gangrenosum, necrobiosis lipoidica & erythema ab igne',
  tags: ['dermatology'],

  body: `erythema nodosum panniculitis painful shin nodules streptococcal sarcoidosis IBD tuberculosis drugs pregnancy Lofgren pyoderma gangrenosum pathergy ulcer necrobiosis lipoidica diabetes erythema ab igne heat exposure reactive dermatosis`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Several "reactive" skin signs are important less for the skin itself than for the systemic disease they flag. Erythema nodosum is the archetype — a panniculitis whose real significance is the underlying cause it points to. This note groups it with three other pattern-recognition dermatoses: pyoderma gangrenosum, necrobiosis lipoidica and erythema ab igne — each a visible clue to look deeper.',
    },

    { type: 'heading', level: 2, text: 'Erythema Nodosum' },
    {
      type: 'list',
      items: [
        'Crops of tender, red-purple, ill-defined nodules, typically over the SHINS (anterior shins), which do not ulcerate and resolve like a bruise over weeks; often with fever/arthralgia. It is a panniculitis (inflammation of subcutaneous fat).',
        'It is a reactive process — always look for the cause.',
      ],
    },
    {
      type: 'table',
      headers: ['Cause category', 'Examples'],
      rows: [
        ['Infection', 'Streptococcal (commonest — check ASO/throat), tuberculosis, Chlamydia, Yersinia, fungal'],
        ['Inflammatory', 'Sarcoidosis (with hilar lymphadenopathy = Löfgren\'s syndrome), inflammatory bowel disease, Behçet\'s'],
        ['Drugs', 'Combined oral contraceptive, sulfonamides, penicillins'],
        ['Other', 'Pregnancy; often idiopathic (~half)'],
      ],
      caption: 'Work-up: history/exam, FBC, ESR/CRP, ASO/throat swab, chest X-ray (sarcoid/TB), and consider IBD/pregnancy testing. Management is treating the cause plus rest, leg elevation, NSAIDs and analgesia; usually self-limiting.',
    },

    { type: 'heading', level: 2, text: 'Pyoderma Gangrenosum' },
    {
      type: 'callout',
      variant: 'danger',
      title: 'A Rapidly Enlarging Painful Ulcer — Do NOT Debride',
      items: [
        'Starts as a pustule/nodule that rapidly breaks down into a painful ulcer with a characteristic violaceous, undermined, overhanging edge.',
        'Associated with inflammatory bowel disease, inflammatory arthritis, and haematological malignancy — screen for these.',
        'Shows PATHERGY (worsens with trauma/surgery) — so avoid debridement/surgery; it is often misdiagnosed as infection.',
        'Refer urgently to dermatology; treatment is immunosuppression (potent topical/intralesional or systemic corticosteroids, ciclosporin, biologics) — not antibiotics or surgery.',
      ],
    },

    { type: 'heading', level: 2, text: 'Necrobiosis Lipoidica & Erythema Ab Igne' },
    {
      type: 'list',
      items: [
        'Necrobiosis lipoidica: shiny, atrophic, yellow-brown plaques with telangiectasia, usually on the shins; strongly associated with DIABETES (though may precede it) — can ulcerate. Manage with skin care, potent topical steroids to the active edge, and diabetic control; refer if diagnostic doubt or ulceration.',
        'Erythema ab igne: a reticulate (net-like) brown/pigmented rash from chronic heat exposure (sitting by a fire, hot-water bottles, laptops on the lap). Usually benign and fades on removing the heat source — but consider WHY the person is applying heat (e.g. chronic pain from an undiagnosed cause, hypothyroidism) and note a small long-term risk of skin malignancy at the site.',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'PCDS — Erythema Nodosum', url: 'https://www.pcds.org.uk/clinical-guidance/erythema-nodosum' },
        { label: 'PCDS — Pyoderma Gangrenosum', url: 'https://www.pcds.org.uk/clinical-guidance/pyoderma-gangrenosum' },
        { label: 'BAD — Erythema Nodosum Leaflet', url: 'https://www.bad.org.uk/pils/erythema-nodosum/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'sarcoidosis', label: 'Sarcoidosis', subtitle: 'Löfgren\'s syndrome — EN + hilar lymphadenopathy' },
        { id: 'ibd', label: 'Inflammatory Bowel Disease', subtitle: 'Associated with EN and pyoderma gangrenosum' },
        { id: 'tuberculosis', label: 'Tuberculosis', subtitle: 'An infective cause of erythema nodosum' },
        { id: 'diabetes-t2dm', label: 'Type 2 Diabetes', subtitle: 'Necrobiosis lipoidica association' },
        { id: 'leg-ulcers', label: 'Leg Ulcers & Wounds', subtitle: 'Pyoderma gangrenosum in the leg-ulcer differential' },
      ],
    },

  ],
}
