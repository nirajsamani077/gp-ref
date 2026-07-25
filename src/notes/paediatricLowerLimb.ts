import type { Note } from '../data/notes'

export const paediatricLowerLimb: Note = {
  id: 'paediatric-lower-limb',
  title: 'Paediatric Lower-Limb Variants & Growing Pains',
  subtitle: 'Flat feet, in-toeing/out-toeing, bow legs, knock knees, growing pains and talipes',
  tags: ['paediatrics', 'msk'],

  body: `flat feet pes planus in-toeing femoral anteversion out-toeing bow legs genu varum knock knees genu valgum growing pains talipes equinovarus clubfoot Ponseti positional normal variant lower limb children`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Lower Limb (Children)', url: 'https://cks.nice.org.uk/specialities/children-and-young-people/' },
        { label: 'RCPCH — Paediatric MSK', url: 'https://www.rcpch.ac.uk/' },
        { label: 'STEPS — Lower Limb Conditions', url: 'https://www.steps-charity.org.uk/' },
      ],
    },

    {
      type: 'para',
      text: 'A large share of paediatric orthopaedic presentations are normal developmental variants — flat feet, in-toeing, bow legs and knock knees — that are symmetrical, painless and resolve with growth, needing only reassurance. The skill is knowing the expected age of resolution and the red flags (asymmetry, pain, regression, short stature) that separate a normal variant from pathology, and confidently distinguishing benign "growing pains" from the sinister causes of leg pain.',
    },
    { type: 'heading', level: 2, text: 'Normal Developmental Variants' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Reassure — Most Resolve With Growth',
      items: [
        'These are common, usually symmetrical, painless, and resolve spontaneously — reassurance is the mainstay',
        'Refer if: asymmetry, pain, functional limitation, regression, very short stature, or features suggesting an underlying condition (e.g. rickets, neuromuscular disease, skeletal dysplasia)',
      ],
    },

    {
      type: 'table',
      headers: ['Variant', 'Description', 'Usually resolves by'],
      rows: [
        ['Flat feet (pes planus)', 'Absent medial arch on standing; flexible (arch appears on tiptoe) is normal', '~8 years (flexible)'],
        ['In-toeing', 'Feet point inward — from femoral anteversion (commonest), internal tibial torsion, or metatarsus adductus', 'Mostly by ~8 years'],
        ['Out-toeing', 'Feet point outward — often external tibial torsion', '~2 years'],
        ['Bow legs (genu varum)', 'Knees apart when ankles together — normal in toddlers', '~4 years'],
        ['Knock knees (genu valgum)', 'Ankles apart when knees together — appears ~3–4 years', '~7–8 years'],
      ],
      caption: 'Red flags for referral: unilateral/asymmetric deformity, painful or worsening deformity, a rigid flat foot, very short stature, or intercondylar/intermalleolar distances outside the normal range (possible rickets/skeletal dysplasia).',
    },

    { type: 'heading', level: 2, text: 'Growing Pains' },

    {
      type: 'list',
      items: [
        'A benign diagnosis of exclusion: intermittent, bilateral leg pains (typically calves/thighs/behind the knees), in the evening or at night, in a well child aged ~3–12 years',
        'Key reassuring features: pain is NEVER present in the morning, never limits daytime activity, and there is no limp, swelling, or systemic upset — the child is otherwise completely well with a normal examination',
        'RED FLAGS against growing pains (investigate/refer): pain that is persistent, unilateral, worse in the morning, associated with a limp, joint swelling, fever, weight loss, night sweats, or systemic illness — consider juvenile idiopathic arthritis, malignancy (leukaemia/bone tumour), or infection',
        'Management: reassurance, massage, warmth, and simple analgesia as needed',
      ],
    },

    { type: 'heading', level: 2, text: 'Talipes Equinovarus (Clubfoot)' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Distinguish True vs Positional',
      items: [
        'Inward-turning, plantar-flexed feet ("in and under" — the sole rotated posteromedially), checked at the newborn (NIPE) and 6–8-week examinations; ~1 in 1000, M>F, ~50% bilateral',
        'True (structural) talipes is NOT passively correctable and is congenital — mostly idiopathic, but associated with spina bifida, cerebral palsy and Edwards syndrome',
        'Positional talipes IS passively correctable and only needs physiotherapy/stretching',
        'Refer suspected true talipes early to paediatric orthopaedics for the Ponseti method (serial casting/manipulation from the first weeks of life ± Achilles tenotomy), then a "boots and bar" foot abduction brace — parental compliance is crucial to prevent relapse',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'limpingChild', label: 'Limping Child', subtitle: 'The acutely painful/limping hip — DDH, Perthes, SUFE, septic arthritis' },
        { id: 'vitamin-d', label: 'Vitamin D', subtitle: 'Rickets — a cause of pathological bow legs' },
        { id: 'inflammatory-arthritis', label: 'Inflammatory Arthritis', subtitle: 'JIA — red-flag differential for "growing pains"' },
        { id: 'child-development', label: 'Child Development Milestones', subtitle: 'Gross-motor development and gait' },
      ],
    },

  ],
}
