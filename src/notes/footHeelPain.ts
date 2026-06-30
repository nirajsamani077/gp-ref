import type { Note } from '../data/notes'

export const footHeelPain: Note = {
  id: 'foot-heel-pain',
  title: 'Foot & Heel Pain',
  subtitle: 'Plantar fasciitis, Morton\'s neuroma, metatarsalgia, bunions and forefoot pain',
  tags: ['msk'],

  body: `plantar fasciitis heel pain enthesopathy Morton's neuroma Mulder's click metatarsalgia hallux valgus bunion hallux rigidus sesamoiditis turf toe stress fracture forefoot pain orthotics steroid injection night splint`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Plantar Fasciitis', url: 'https://cks.nice.org.uk/topics/plantar-fasciitis/' },
        { label: 'NICE CKS — Morton\'s Neuroma', url: 'https://cks.nice.org.uk/topics/mortons-neuroma/' },
        { label: 'Versus Arthritis — Foot Pain', url: 'https://versusarthritis.org/about-arthritis/conditions/foot-pain/' },
      ],
    },

    { type: 'heading', level: 2, text: 'Plantar Fasciitis' },

    {
      type: 'list',
      items: [
        'Common overuse enthesopathy of the plantar fascia → pain UNDER the heel, worst on the first few steps in the morning and after rest, and on walking barefoot on hard floors',
        'Clinical diagnosis; tenderness at the medial calcaneal tubercle',
        'Differentials: Achilles tendinopathy (pain behind, not under, the heel), subtalar OA, calcaneal stress fracture / Sever\'s (children), S1 radiculopathy',
        'Management (no single best treatment): activity/footwear modification, weight loss, calf and plantar-fascia stretching (towel/step stretches), gel heel cups/orthotics, night splints; a corticosteroid injection may help short-term (~1 month) but risks fat-pad atrophy and plantar fascia rupture',
        'Most resolve within ~1 year; extracorporeal shockwave therapy for refractory cases',
      ],
    },

    { type: 'heading', level: 2, text: 'Morton\'s Neuroma' },

    {
      type: 'list',
      items: [
        'A benign perineural fibrosis of an intermetatarsal nerve (most often the 3rd web space) → forefoot pain like "walking on a pebble", often with burning/tingling into the toes; worse in tight/high-heeled shoes and relieved by removing the shoe',
        'Examination: pain on lateral metatarsal squeeze and a palpable Mulder\'s click (one hand squeezes the metatarsals while the other presses the neuroma)',
        'Clinical diagnosis (ultrasound if uncertain); conservative management for ~3 months — wide footwear, avoid high heels, metatarsal dome pads/orthotics',
        'If persistent: corticosteroid injection or surgical excision (neurectomy)',
      ],
    },

    { type: 'heading', level: 2, text: 'Forefoot Pain — Other Causes' },

    {
      type: 'table',
      headers: ['Condition', 'Features & management'],
      rows: [
        ['Hallux valgus (bunion)', 'Lateral deviation of the great toe ± medial bursitis; roomy/broad shoes, bunion pads, toe spreaders, orthotics; X-ray and refer if severe/painful/recurrent'],
        ['Hallux rigidus/limitus (1st MTP OA)', 'Stiff, painful big toe; rigid-soled/rocker shoes, orthotics, analgesia, injection; fusion surgery if severe'],
        ['Metatarsalgia', '"Ball of foot" pain, like walking on pebbles, tender plantar metatarsal heads (often synovitis); metatarsal pads/orthotics, NSAIDs, avoid triggers'],
        ['Sesamoiditis', 'Plantar pain under the 1st MT head on toe-off; cushioned insoles, offloading'],
        ['Turf toe (1st MTP sprain)', 'Acute hyperextension injury (sport/astroturf); rest, taping, sometimes a boot; refer OTS if severe'],
        ['Stress fracture', 'Overuse; commonly 2nd MT (or high-risk 5th MT base); constant focal pain and tenderness; MRI is most sensitive; stiff-soled footwear, activity modification ± orthopaedics'],
      ],
    },

    {
      type: 'callout',
      variant: 'info',
      title: 'Lesser Toe Deformities & Corns',
      items: [
        'Mallet (distal flexion), hammer (PIP flexion), and claw toes — manage with footwear, padding and orthotics; surgery if severe',
        'Corns/calluses are friction-related (NOT viral warts — warts have pinpoint black dots and disrupt skin lines): warm-water soaks, pumice/paring, podiatry, address the pressure source',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'achilles-tendinopathy', label: 'Achilles Tendinopathy & Rupture', subtitle: 'Pain BEHIND the heel — key differential' },
        { id: 'osteoarthritis', label: 'Osteoarthritis', subtitle: '1st MTP OA (hallux rigidus) and midfoot OA' },
        { id: 'gout', label: 'Gout', subtitle: 'Acute 1st MTP (podagra) — exclude in big-toe pain' },
        { id: 'diabetic-foot', label: 'Diabetic Foot', subtitle: 'Neuropathic foot — different risk assessment and ulceration' },
      ],
    },

  ],
}
