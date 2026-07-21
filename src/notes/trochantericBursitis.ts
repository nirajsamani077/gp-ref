import type { Note } from '../data/notes'

export const trochantericBursitis: Note = {
  id: 'trochanteric-bursitis',
  title: 'Greater Trochanteric Pain Syndrome (Trochanteric Bursitis)',
  subtitle: 'Lateral hip pain from gluteal tendinopathy — diagnosis, load management and injection',
  tags: ['msk'],

  body: `greater trochanteric pain syndrome GTPS trochanteric bursitis gluteal tendinopathy lateral hip pain point tenderness lying on side single leg stance load management physiotherapy corticosteroid injection abductor tendinopathy`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Greater Trochanteric Pain Syndrome', url: 'https://cks.nice.org.uk/topics/greater-trochanteric-pain-syndrome/' },
        { label: 'Arthritis & MSK — Hip Pain', url: 'https://www.versusarthritis.org/' },
        { label: 'BMJ — Lateral Hip Pain', url: 'https://www.bmj.com/' },
      ],
    },

    {
      type: 'callout',
      variant: 'info',
      title: 'It Is Usually a Tendinopathy',
      items: [
        'GTPS is the modern term — most cases are a gluteus medius/minimus tendinopathy rather than true bursal inflammation',
        'Common in women 40–60, and with obesity, sudden increases in activity, or coexisting hip/knee OA and low back pain',
        'Typically self-limiting but often protracted; the mainstay is education and load management, not passive treatment',
      ],
    },

    { type: 'heading', level: 2, text: 'Clinical Features' },

    {
      type: 'list',
      items: [
        'Lateral hip pain over the greater trochanter, often radiating down the outer thigh',
        'Worse lying on the affected side (disturbs sleep), on prolonged standing, climbing stairs, and rising from sitting',
        'Point tenderness over the greater trochanter is the key sign; pain is reproduced on resisted hip abduction and single-leg stance (30-second test)',
        'Hip range of movement is usually preserved (contrast with hip OA, which restricts internal rotation and causes groin pain)',
      ],
    },

    { type: 'heading', level: 2, text: 'Differential Diagnosis' },

    {
      type: 'table',
      headers: ['Condition', 'Discriminating feature'],
      rows: [
        ['Hip osteoarthritis', 'Groin pain, restricted/painful internal rotation'],
        ['Lumbar radiculopathy', 'Back pain, dermatomal radiation, neuro signs'],
        ['Meralgia paraesthetica', 'Burning anterolateral thigh, sensory only'],
        ['Hip fracture (after fall)', 'Inability to weight-bear, shortened/externally rotated leg'],
      ],
    },

    { type: 'heading', level: 2, text: 'Management' },

    {
      type: 'list',
      items: [
        'Explain the good long-term prognosis; relative rest from aggravating activities but avoid complete inactivity',
        'Load management and physiotherapy: progressive gluteal strengthening/isometrics is the most effective treatment; avoid hip-adducted positions (crossing legs, "hanging" on one hip)',
        'Simple analgesia/topical NSAID; weight loss where relevant; a pillow between the knees when side-lying',
        'Corticosteroid injection can give short-term relief for persistent pain but does not outperform exercise in the medium term — reserve for significant symptoms and combine with rehab',
        'Refer if diagnostic doubt, or symptoms persist despite ~3–6 months of good rehab (consider imaging/gluteal tendon tear, shockwave therapy)',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'osteoarthritis', label: 'Osteoarthritis', subtitle: 'Hip OA — the main differential for hip pain' },
        { id: 'tennis-elbow-tendinopathy', label: 'Tennis Elbow & Tendinopathy', subtitle: 'Shared load-management principles for tendinopathy' },
        { id: 'lower-back-pain', label: 'Lower Back Pain', subtitle: 'Referred pain differential' },
        { id: 'elderly-falls', label: 'Falls in the Elderly', subtitle: 'Exclude hip fracture after a fall' },
        { id: 'foot-heel-pain', label: 'Foot & Heel Pain', subtitle: 'Another common lower-limb tendinopathy/enthesopathy' },
      ],
    },

  ],
}
