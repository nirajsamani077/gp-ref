import type { Note } from '../data/notes'

export const myofascialPain: Note = {
  id: 'myofascial-pain',
  title: 'Myofascial Pain, Winged Scapula, Foot Drop & Charcot Foot',
  subtitle: 'A grab-bag of MSK/neuro problems — trigger points, nerve-related weakness patterns and the neuropathic foot',
  tags: ['msk'],

  body: `myofascial pain trigger points referred pain winged scapula long thoracic nerve serratus anterior foot drop common peroneal fibular nerve L5 radiculopathy Charcot foot neuroarthropathy diabetes hot swollen foot`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'This note groups several distinct MSK/neurological patterns that are easily missed or misattributed. The unifying theme is recognising a characteristic pattern — a referred-pain trigger point, a scapular winging, a foot drop, or a hot diabetic foot — and knowing which need reassurance/physiotherapy and which are red flags.',
    },

    { type: 'heading', level: 2, text: 'Myofascial Pain & Trigger Points' },
    {
      type: 'list',
      items: [
        'Regional muscle pain arising from hyperirritable "trigger points" — taut bands within muscle that are locally tender and REFER pain in a characteristic pattern (e.g. trapezius trigger points referring to the head/neck).',
        'Common in the neck/shoulder girdle and low back; associated with posture, overuse, stress and poor sleep; overlaps with (but is more localised than) fibromyalgia.',
        'Management: address the cause (posture/ergonomics, activity), stretching and physiotherapy, heat, simple analgesia; trigger-point injection/dry needling can help refractory cases. Reassurance that it is benign.',
      ],
    },

    { type: 'heading', level: 2, text: 'Winged Scapula' },
    {
      type: 'list',
      items: [
        'The medial scapular border lifts off the chest wall (obvious on pushing against a wall) — classically from long thoracic nerve palsy weakening serratus anterior (after trauma, carrying heavy loads, viral illness/brachial neuritis, or surgery).',
        'Causes shoulder ache and weakness of overhead activity; most nerve-related cases recover over many months.',
        'Management: physiotherapy; refer for confirmation (nerve conduction studies) and if not recovering — some need surgery (nerve or tendon transfer).',
      ],
    },

    { type: 'heading', level: 2, text: 'Foot Drop' },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Localise the Lesion',
      items: [
        'Foot drop = weak ankle DORSIFLEXION (trips, high-stepping gait, catching the toe). The commonest cause is COMMON PERONEAL (fibular) nerve compression at the fibular head (leg crossing, plaster casts, weight loss, prolonged squatting) — usually painless, with sensory loss over the dorsum of the foot; often recovers with removal of the compression.',
        'But foot drop can also be an L5 radiculopathy (with back/leg pain), or part of a more widespread neurological disorder (peripheral neuropathy, MND, MS, stroke) — assess reflexes, sensation and the wider picture.',
        'A rapidly progressive, bilateral, or painful foot drop, or one with other neurology (esp. bladder/bowel or cord signs), needs urgent assessment; isolated peroneal palsy can be managed with an ankle-foot orthosis, physiotherapy and treating the cause.',
      ],
    },

    { type: 'heading', level: 2, text: 'Charcot Foot (Neuroarthropathy)' },
    {
      type: 'callout',
      variant: 'danger',
      title: 'A Hot, Swollen Diabetic Foot → Same-Day Diabetic Foot Team',
      items: [
        'Charcot neuroarthropathy is progressive destruction of the bones/joints of a NEUROPATHIC foot (usually diabetes) — presenting as a warm, red, swollen, often relatively PAINLESS foot, frequently mistaken for cellulitis, gout or a sprain.',
        'It is a limb-threatening emergency: unrecognised, it leads to bony collapse, deformity ("rocker-bottom" foot), ulceration and amputation.',
        'Any hot, swollen foot in a person with diabetic neuropathy → immediate referral to the multidisciplinary diabetic foot service and OFFLOADING (non-weight-bearing/total-contact cast) while assessed — do not simply treat as an infection.',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG19 — Diabetic Foot Problems', url: 'https://www.nice.org.uk/guidance/ng19' },
        { label: 'Versus Arthritis — Back/Neck & MSK Pain', url: 'https://versusarthritis.org/' },
        { label: 'NICE CKS — Sciatica / Radiculopathy', url: 'https://cks.nice.org.uk/topics/sciatica-lumbar-radiculopathy/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'diabetic-foot', label: 'Diabetic Foot', subtitle: 'Charcot foot and the neuropathic foot pathway' },
        { id: 'lower-back-pain', label: 'Lower Back Pain', subtitle: 'L5 radiculopathy as a cause of foot drop' },
        { id: 'fibromyalgia', label: 'Fibromyalgia', subtitle: 'Widespread pain — contrast with localised myofascial pain' },
        { id: 'shoulder-problems', label: 'Shoulder Problems', subtitle: 'Scapular/shoulder-girdle dysfunction' },
        { id: 'diabetic-neuropathy', label: 'Diabetic Neuropathy', subtitle: 'The loss of protective sensation underlying Charcot foot' },
      ],
    },

  ],
}
