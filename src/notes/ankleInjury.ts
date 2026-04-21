import type { Note } from '../data/notes'

export const ankleInjury: Note = {
  id: 'ankle-injury',
  title: 'Ankle Injury',
  subtitle: 'Ottawa ankle rules, sprain management, and when to X-ray',
  tags: ['symptoms', 'msk'],

  body: 'ankle injury sprain fracture Ottawa rules malleolar midfoot zone ATFL anterior talofibular calcaneofibular ligament navicular fifth metatarsal base weight bearing tenderness RICE moonboot crutches lateral medial malleolus bony point',

  content: [

    {
      type: 'callout',
      variant: 'info',
      title: 'Overview',
      items: [
        'Most ankle injuries in primary care are lateral ligament sprains — anterior talofibular ligament (ATFL) most commonly, ± calcaneofibular ligament (CFL)',
        'Key clinical task: distinguish sprain (no fracture → manage conservatively) from fracture (needs X-ray ± ED referral)',
        'Ottawa Ankle Rules are the validated decision tool — near 100% sensitive for clinically significant fractures; use to safely rule out the need for X-ray',
        'Ligaments generally heal within 6–12 weeks with appropriate conservative management',
      ],
    },

    { type: 'heading', level: 2, text: 'Ottawa Ankle Rules' },

    {
      type: 'image',
      src: '/images/ottowa-ankle-rule-orig_orig.jpg',
      alt: 'Ottawa Ankle Rules diagram showing lateral and medial views of the foot. Malleolar zone: X-ray needed if pain in malleolar zone AND bone tenderness at point A (posterior edge/tip of lateral malleolus — 6 cm) or point B (posterior edge/tip of medial malleolus — 6 cm), or inability to bear weight immediately and in ED. Mid-foot zone: X-ray needed if pain in mid-foot zone AND bone tenderness at point C (base of 5th metatarsal) or point D (navicular), or inability to bear weight immediately and in ED.',
      caption: 'Ottawa Ankle Rules — validated clinical decision tool to determine need for X-ray. Apply only in adults and children >5 years; not applicable if intoxicated, multiple painful injuries, pregnancy, or diminished sensation.',
    },

    {
      type: 'table',
      headers: ['Zone', 'X-ray indicated if pain in zone AND…'],
      rows: [
        [
          'Malleolar zone',
          'Bony tenderness at posterior edge or tip of lateral malleolus (point A) OR medial malleolus (point B) — palpate the posterior 6 cm of each malleolus\nOR inability to bear weight both immediately after injury AND in the clinic/ED (4 steps)',
        ],
        [
          'Mid-foot zone',
          'Bony tenderness at base of 5th metatarsal (point C) OR navicular (point D)\nOR inability to bear weight both immediately after injury AND in the clinic/ED (4 steps)',
        ],
      ],
      caption: 'Ottawa Ankle Rules summary. "Bear weight" = taking 4 steps, even if limping. Inability to bear weight at EITHER time point is sufficient.',
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Ottawa rules — important caveats',
      items: [
        'Rules apply to adults and children >5 years; use clinical judgement in younger children',
        'Not applicable if: intoxicated, altered consciousness, multiple injuries distracting from ankle pain, pregnancy, or diminished peripheral sensation',
        'Rules rule OUT the need for X-ray — a positive rule means X-ray is indicated, but a negative rule does not guarantee no fracture',
        'If in doubt, refer to ED or arrange X-ray — Ottawa rules are a guide, not a substitute for clinical judgement',
        'High-risk fractures to consider: base of 5th metatarsal (avulsion, Jones fracture), posterior malleolus, Lisfranc injury (mid-foot), growth plate injury in children',
      ],
    },

    {
      type: 'image',
      src: '/images/ankle-anatomy.gif',
      alt: 'Lateral view of ankle anatomy with numbered structures: 1. 5th metatarsal, 2. Base of 5th metatarsal (tender site for Ottawa Rule), 3. Peroneus Brevis Tendon, 4. Fibula, 5. Anterior Talofibular Ligament (ATFL), 6. Calcaneofibular Ligament, 7. Posterior Talofibular Ligament, 8. Posterior aspect of lateral malleolus (tender site for Ottawa Rule)',
      caption: 'Lateral ankle anatomy. The ATFL (5) is the most commonly injured ligament in ankle sprains. Ottawa palpation points are the base of the 5th metatarsal (2) and the posterior aspect of the lateral malleolus (8).',
    },

    { type: 'heading', level: 2, text: 'Management — Ankle Sprain (No Fracture)' },

    {
      type: 'callout',
      variant: 'tip',
      title: 'RICE + early mobilisation',
      items: [
        'Rest — relative rest; avoid aggravating activities but encourage early movement',
        'Ice — 20 minutes every 2 hours for at least the first 2 days; wrap in cloth (never direct skin contact)',
        'Compression — tubigrip or compression bandage to reduce swelling',
        'Elevation — foot above hip level when resting to reduce oedema',
        'Analgesia — regular paracetamol ± ibuprofen (if no contraindications) for the first few days',
        'Early weight bearing — encourage as soon as pain allows; early mobilisation speeds recovery',
        'Crutches — offer if unable to weight bear initially; wean off as pain improves',
        'Moonboot / air cast — can help maintain the foot in a neutral position and improve comfort, especially for moderate/severe sprains',
      ],
    },

    {
      type: 'list',
      items: [
        'Gentle range-of-motion exercises from day 1–2: ankle circles, alphabet writing with the foot',
        'Progress to proprioception/balance exercises (e.g. single-leg standing) as swelling settles — key for preventing re-injury',
        'Most lateral ligament sprains heal within 6–12 weeks; severe sprains or those with persistent instability may take longer',
        'Advise patient: some swelling and bruising for 2–4 weeks is normal; if not improving by 4–6 weeks, review',
        'Physiotherapy referral for persistent pain, instability, or high-demand patients (athletes)',
        'Recurrent ankle sprains or functional instability → consider physio for proprioception rehab; may need MRI or orthopaedic referral if chronic instability',
      ],
    },

    { type: 'heading', level: 2, text: 'When to Refer / Safety-Net' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Refer to ED / arrange X-ray if:',
      items: [
        'Ottawa rules positive — bony tenderness at malleoli, 5th metatarsal base, or navicular, OR unable to weight bear',
        'Suspected Lisfranc injury: mid-foot pain/bruising especially on the plantar surface, mechanism of twisting/compression',
        'Open wound or neurovascular compromise',
        'Significant deformity',
        'Not improving as expected by 4–6 weeks → review diagnosis, arrange X-ray if not already done, consider MRI',
        'High-velocity or sports mechanism with significant swelling and inability to weight bear — lower threshold for imaging',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Ankle Sprain', url: 'https://cks.nice.org.uk/topics/sprains-ankle/' },
        { label: 'Ottawa Ankle Rules (BMJ)', url: 'https://www.bmj.com/content/326/7386/417' },
        { label: 'Patient.info — Sprained Ankle', url: 'https://patient.info/bones-joints-muscles/ankle-problems/sprained-ankle' },
      ],
    },

  ],
}
