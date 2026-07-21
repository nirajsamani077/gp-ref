import type { Note } from '../data/notes'

export const trochantericBursitis: Note = {
  id: 'trochanteric-bursitis',
  title: 'Greater Trochanteric Pain Syndrome (Trochanteric Bursitis)',
  subtitle: 'Lateral hip pain from gluteal tendinopathy — diagnosis, load management, injection and what to exclude',
  tags: ['msk'],

  body: `greater trochanteric pain syndrome GTPS trochanteric bursitis gluteus medius minimus tendinopathy lateral hip pain point tenderness single leg stance FADER load management physiotherapy corticosteroid injection shockwave hip osteoarthritis meralgia paraesthetica`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Greater trochanteric pain syndrome (GTPS) is the modern term for what used to be called trochanteric bursitis. Most cases are actually a gluteus medius/minimus TENDINOPATHY (± secondary bursal irritation) rather than a primary inflamed bursa — which is why the treatment mirrors other tendinopathies: education and progressive load management rather than rest and steroids. It is common in women aged 40–60 and with obesity, and often coexists with hip/knee osteoarthritis and low back pain.',
    },

    { type: 'heading', level: 2, text: 'Clinical Features' },
    {
      type: 'list',
      items: [
        'Lateral hip pain over the greater trochanter, often radiating down the outer thigh (rarely below the knee).',
        'Worse lying on the affected side (disturbs sleep), on prolonged standing, climbing stairs, and rising from sitting.',
        'Point tenderness directly over the greater trochanter is the key sign; pain is reproduced by resisted hip abduction, single-leg stance (30-second test), and the FADER/FABER positions.',
        'Hip range of movement is preserved (contrast hip OA, which restricts and pains internal rotation and causes groin pain).',
      ],
    },

    { type: 'heading', level: 2, text: 'Differential Diagnosis' },
    {
      type: 'table',
      headers: ['Condition', 'Discriminating feature'],
      rows: [
        ['Hip osteoarthritis', 'Groin pain, restricted/painful internal rotation'],
        ['Lumbar radiculopathy', 'Back pain, dermatomal radiation, neurological signs'],
        ['Meralgia paraesthetica', 'Burning anterolateral thigh, purely sensory (lateral cutaneous nerve of thigh)'],
        ['Hip fracture (after a fall)', 'Unable to weight-bear, shortened/externally rotated leg → urgent imaging'],
        ['Gluteal tendon tear', 'Marked weakness/Trendelenburg gait, refractory pain — consider USS/MRI'],
      ],
    },

    { type: 'heading', level: 2, text: 'Management — Load, Don\'t Rest' },
    {
      type: 'table',
      headers: ['Measure', 'Detail'],
      rows: [
        ['Education & activity modification', 'Explain the good long-term prognosis; relative rest from aggravating loads but avoid inactivity; avoid hip-ADDUCTED positions (crossing legs, standing "hanging" on one hip, side-lying on the sore side)'],
        ['Load management / physiotherapy', 'Progressive gluteal strengthening and isometrics is the most effective treatment — the mainstay; a physiotherapy programme if not self-managing'],
        ['Adjuncts', 'Simple analgesia / topical NSAID; weight loss where relevant; a pillow between the knees when side-lying'],
        ['Corticosteroid injection', 'Gives useful SHORT-term relief for significant pain but does not outperform exercise in the medium term — reserve for severe symptoms and always combine with rehab'],
        ['Refractory', 'Consider shockwave therapy or specialist referral (and imaging) after ~3–6 months of good rehab — exclude a gluteal tendon tear'],
      ],
    },

    { type: 'heading', level: 2, text: 'Patient Information Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Greater Trochanteric Pain Syndrome', url: 'https://cks.nice.org.uk/topics/greater-trochanteric-pain-syndrome/' },
        { label: 'Versus Arthritis — Hip Pain & Exercises', url: 'https://versusarthritis.org/about-arthritis/conditions/hip-pain/' },
        { label: 'CSP — Hip Pain Exercises', url: 'https://www.csp.org.uk/conditions/hip-pain' },
        { label: 'NHS — Hip Pain in Adults', url: 'https://www.nhs.uk/conditions/hip-pain/' },
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
