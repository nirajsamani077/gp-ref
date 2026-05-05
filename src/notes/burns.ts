import type { Note } from '../data/notes'

export const burns: Note = {
  id: 'burns',
  title: 'Burns Management',
  subtitle: "First aid, depth classification, Wallace's Rule of Nines and referral criteria",
  tags: ['urgent', 'dermatology'],

  body: "burns first aid cool water Wallace rule of nines TBSA total body surface area depth superficial partial thickness deep dermal full thickness 1st 2nd 3rd degree CRT capillary refill blister non-adherent dressing cling film refer burns unit NAI non-accidental injury chemical electrical inhalation paediatric children scalds",

  content: [
    {
      type: 'callout',
      variant: 'danger',
      title: 'First Aid — Must Be Done BEFORE Assessment',
      items: [
        'Thermal burns: COOL with running water for 20 minutes — starts the clock from when cooling begins, NOT when the burn occurred',
        'Cover loosely with clean cling film (layers, not wrapped) — do NOT use ice, butter, toothpaste or creams',
        'Remove jewellery and clothing (if not stuck) — reduces constriction as oedema develops',
        'Elevate burned limb — reduces oedema',
        'Chemical burns: remove source, prolonged irrigation ≥20 minutes; specific antidotes only where indicated',
        'Electrical burns: SAFE to approach only after power is off; may need cardiac monitoring (risk of arrhythmia)',
        'Inhalation injury: high-flow oxygen, 999 — rapid airway oedema can develop',
      ],
    },

    { type: 'heading', level: 2, text: 'TBSA Estimation' },

    {
      type: 'table',
      headers: ['Method', 'Area', 'Notes'],
      rows: [
        ["Wallace's Rule of Nines (adults)", 'Head & neck = 9%; Each arm = 9%; Anterior trunk = 18%; Posterior trunk = 18%; Each leg = 18% (9% anterior + 9% posterior); Genitalia = 1%', 'Use for adults; LESS accurate in children (head larger, legs smaller proportionally)'],
        ["Lund & Browder chart (children)", 'Age-corrected — use specific chart for paediatrics', 'More accurate in children — head 19% at birth, decreases with age'],
        ['Palm method', '1 palm (with fingers) ≈ 1% TBSA', 'Quick estimate for scattered or irregular burns; useful for BOTH adults and children'],
      ],
      caption: "Do NOT count superficial (1st degree) erythema (like sunburn) in TBSA calculation — only partial thickness and deeper burns.",
    },

    { type: 'heading', level: 2, text: 'Burn Depth Assessment' },

    {
      type: 'table',
      headers: ['Depth', 'Appearance', 'Sensation', 'Blanchability', 'Healing'],
      rows: [
        ['Superficial (1st degree)', 'Red, dry, no blisters (e.g. sunburn)', 'Painful', 'Blanches', '3–5 days; no scarring'],
        ['Superficial partial thickness (2nd degree)', 'Pale pink, moist, blistered', 'Very painful', 'Blanches', '10–14 days; usually no scarring'],
        ['Deep dermal (deep partial thickness)', 'Red/white mottled, may have blisters, less moist', 'Reduced sensation', 'Does NOT blanch (capillary refill test with sterile swab — fixed staining)', '>3 weeks; significant scarring; may need grafting'],
        ['Full thickness (3rd degree)', 'White, waxy, leathery, or charred', 'Painless (nerve destruction)', 'Does NOT blanch', 'Does not heal without surgery — requires grafting'],
      ],
      caption: 'Capillary refill test (CRT) using the blunt end of a sterile swab: press gently — if blanches = superficial partial; if staining remains = deep dermal or full thickness. Accurate depth assessment is difficult in the first 48 hours — often reassess at 48h.',
    },

    { type: 'heading', level: 2, text: 'Referral Criteria — When to Refer to Burns Unit' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Refer to Burns Unit / Hospital if ANY of the Following',
      items: [
        'ALL deep dermal or full thickness burns regardless of size',
        'Superficial partial thickness: >3% TBSA in adults; >2% TBSA in children',
        'Any burn involving: face, hands, feet, genitalia, perineum, major joints, circumferential burns',
        'Inhalation injury suspected: singed nasal hairs, hoarse voice, carbonaceous sputum, stridor',
        'Electrical burns (any depth) — risk of deep internal injury and cardiac arrhythmia',
        'Chemical burns (any depth) — ongoing damage, specialist decontamination',
        'IV fluids indicated: >15% TBSA in adults; >10% TBSA in children',
        'Non-accidental injury (NAI) suspected: atypical pattern, delayed presentation, inconsistent history — safeguarding referral',
        'Co-morbidities increasing risk: DM, immunosuppression, peripheral vascular disease',
        'Extremes of age: all burns in infants and elderly warrant low threshold for referral',
      ],
    },

    { type: 'heading', level: 2, text: 'Primary Care Management — Minor Burns' },

    {
      type: 'table',
      headers: ['Burn Type', 'Management'],
      rows: [
        ['Superficial (1st degree)', 'Simple emollients (e.g. aloe vera or aqueous cream), analgesic, keep moist; advise sun protection once healed'],
        ['Superficial partial thickness — small (<3%)', 'Leave blisters intact (remove only if very tense or infected); non-adherent dressing (Mepitel One, Urgotul, Adaptic). Change dressing at 48 hours then 2–3× weekly; avoid topical creams (risk of maceration)'],
        ['Wound care', 'Clean gently with saline or clean water; no antiseptic routinely'],
        ['Analgesia', 'Regular paracetamol and ibuprofen (if not contraindicated) — burns are very painful'],
        ['Follow-up', 'Review at 48 hours (often easier to assess depth); consider referral if not healing by 14 days'],
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'Minor burns (advice): NHS 111 or GP practice',
        'Burns requiring specialist assessment: UHDB Queen\'s Hospital Burton A&E — for burns that meet referral criteria above',
        'Major burns / burns unit: West Midlands Regional Burns Unit — Queen Elizabeth Hospital Birmingham (UHQEB) — 0121 371 2000; all complex burns should be referred or discussed with burns unit',
        'Chemical/electrical/inhalation: 999 → UHDB Burton A&E; then transfer to QEHB burns unit if required',
        'NAI (non-accidental injury): Staffordshire Childrens Safeguarding 0800 1313 126 — document and refer regardless of burns severity',
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Safety Netting',
      items: [
        '999: airway burns, inhalation injury, large burns (>15% TBSA), circumferential burns, electrical or chemical burns',
        'Same-day A&E: any burn in a child, burns to face/hands/genitals, NAI suspicion, unsure of depth',
        'Red flags: increasing pain (suggests deepening), signs of infection (increasing redness/warmth/pus/fever), wound not healing at 14 days (refer burns unit)',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Burns', url: 'https://cks.nice.org.uk/topics/burns-and-scalds/' },
        { label: 'ISBI — Burn Practice Guidelines', url: 'https://www.burns-trauma.org/' },
        { label: 'NHS — Burns', url: 'https://www.nhs.uk/conditions/burns-and-scalds/' },
        { label: 'Child Safeguarding — NAI Burns', url: 'https://www.nspcc.org.uk/' },
      ],
    },
  ],
}
