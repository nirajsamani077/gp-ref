import type { Note } from '../data/notes'

export const chilblains: Note = {
  id: 'chilblains',
  title: 'Chilblains (Perniosis)',
  subtitle: 'Cold-induced inflammatory lesions — self-care, prevention, and when to consider an underlying cause',
  tags: ['dermatology'],

  body: `chilblains perniosis cold damp itchy painful toes fingers purple red swelling nifedipine keep warm prevention lupus pernio connective tissue disease Raynaud's smoking`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Chilblains (perniosis) are common, benign, cold-induced inflammatory skin lesions — an abnormal vascular response to cold, damp (non-freezing) conditions. They are usually a self-limiting nuisance managed with warmth and prevention. The main clinical judgement is recognising the typical picture, and considering an underlying condition when they are severe, persistent, ulcerating, or occur outside a clear cold trigger.',
    },

    { type: 'heading', level: 2, text: 'Recognition' },
    {
      type: 'list',
      items: [
        'Itchy or painful/burning red-purple swellings, usually on the toes (and fingers, sometimes nose/ears), appearing hours after cold exposure and typically in winter.',
        'They may blister or, occasionally, ulcerate; usually resolve over 1–3 weeks.',
        'Risk factors: cold/damp climate, poor circulation, low body weight, smoking, and Raynaud\'s; more common in young women.',
      ],
    },

    { type: 'heading', level: 2, text: 'Management & Prevention' },
    {
      type: 'callout',
      variant: 'info',
      title: 'Keep Warm — Prevention Is the Mainstay',
      items: [
        'Prevention: keep the whole body and extremities warm and dry; warm (not hot) gradual rewarming — avoid direct heat on cold skin; warm footwear/gloves, layered clothing, and keep the home adequately heated.',
        'Stop smoking (vasoconstriction); gentle exercise to improve circulation.',
        'Symptomatic: soothing emollients; a topical corticosteroid can reduce itch/inflammation for troublesome lesions; treat any secondary infection/ulceration.',
        'For recurrent/severe chilblains, nifedipine (a calcium-channel blocker, off-licence) can help prevention and healing — as in Raynaud\'s.',
      ],
    },

    { type: 'heading', level: 2, text: 'When to Look Deeper' },
    {
      type: 'list',
      items: [
        'Atypical features — chilblains that are severe, persistent/year-round, ulcerating, or occur without cold exposure — should prompt consideration of an underlying cause: connective tissue disease (SLE — "chilblain lupus"), Raynaud\'s/vasculopathy, or (rarely) a haematological cause.',
        'Consider checking FBC, inflammatory markers and ANA if an underlying condition is suspected, and refer to dermatology/rheumatology.',
        'Distinguish from other acral problems (Raynaud\'s phenomenon, vasculitis, erythromelalgia).',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Chilblains', url: 'https://cks.nice.org.uk/topics/chilblains/' },
        { label: 'BAD — Chilblains Leaflet', url: 'https://www.bad.org.uk/pils/chilblains/' },
        { label: 'DermNet — Chilblains', url: 'https://dermnetnz.org/topics/chilblains' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'raynauds', label: 'Raynaud\'s Phenomenon', subtitle: 'Overlapping cold-induced vascular response; nifedipine' },
        { id: 'sle-sjogrens', label: 'SLE & Sjögren\'s', subtitle: 'Chilblain lupus — an underlying cause of atypical lesions' },
        { id: 'pvd', label: 'Peripheral Arterial Disease', subtitle: 'Circulatory contributors to cold extremities' },
        { id: 'smoking-cessation', label: 'Smoking Cessation', subtitle: 'Smoking worsens the vasoconstriction' },
      ],
    },

  ],
}
