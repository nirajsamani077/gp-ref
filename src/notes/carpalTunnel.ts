import type { Note } from '../data/notes'

export const carpalTunnel: Note = {
  id: 'carpal-tunnel',
  title: 'Carpal Tunnel Syndrome (CTS)',
  subtitle: 'Clinical diagnosis, conservative management and surgical referral criteria',
  tags: ['msk', 'neurology'],

  body: 'carpal tunnel syndrome CTS median nerve compression wrist splint nocturnal tingling paraesthesia lateral digits palm thumb index middle finger wrist splint steroid injection nerve conduction surgery carpal tunnel release decompression thyroid pregnancy rheumatoid arthritis RA overuse repetitive strain DDx cubital tunnel de Quervain DQTS Phalen Tinel',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Carpal Tunnel Syndrome — Key Features',
      items: [
        'Most common peripheral nerve entrapment; predominantly affects women (3:1); peak age 40–60 years',
        'Caused by compression of the median nerve under the flexor retinaculum at the wrist',
        'Classic symptoms: intermittent pain, tingling, and numbness in lateral 3½ digits (thumb, index, middle, half ring finger) and palm',
        'Typically worse at night (wakes patient) and with sustained wrist flexion (driving, holding phone, typing)',
        'Can get relief by shaking the hand (flicking sign — "shaking out" restores blood flow)',
        'Advanced: weakness and wasting of thenar eminence (LOAF muscles: lateral two lumbricals, opponens pollicis, abductor pollicis brevis, flexor pollicis brevis)',
        'Usually idiopathic; secondary causes: hypothyroidism (check TFTs), pregnancy, RA, diabetes, gout, acromegaly, wrist fracture/trauma, obesity',
      ],
    },

    { type: 'heading', level: 2, text: 'Clinical Tests' },

    {
      type: 'table',
      headers: ['Test', 'Technique', 'Sensitivity / Notes'],
      rows: [
        ['Tinel\'s sign', 'Tapping over carpal tunnel (flexor retinaculum) → tingling in median nerve distribution', 'Moderate sensitivity (~60%) — positive result supports diagnosis'],
        ['Phalen\'s test', 'Maximum passive wrist flexion (90°) for 60 seconds → reproduces symptoms', 'More sensitive than Tinel\'s (~75%); most useful clinical test'],
        ['Durkan\'s (carpal compression) test', 'Direct pressure over carpal tunnel for 30 seconds → symptoms reproduced', 'Highest sensitivity (~90%)'],
      ],
      caption: 'Clinical diagnosis — nerve conduction studies (NCS) are NOT routinely indicated and may not alter management. Reserve NCS for diagnostic uncertainty or before surgery.',
    },

    { type: 'heading', level: 2, text: 'Differential Diagnosis' },

    {
      type: 'list',
      items: [
        'Cervical radiculopathy (C6/C7): similar distribution but also neck pain, symptoms in dorsal hand, worsened by neck movement — especially if bilateral symptoms',
        'Thoracic outlet syndrome: whole hand tingling, worse with arm elevated, subclavian vein/artery compression signs',
        'Cubital tunnel syndrome (ulnar nerve): tingling in ring and little fingers (not thumb/index), wrist and elbow pain',
        'De Quervain\'s tenosynovitis (DQTS): pain over radial styloid (thumb base), Finkelstein positive — no sensory change, no tingling',
        'Thumb OA: pain at CMC joint, crepitus — no sensory change or tingling',
      ],
    },

    { type: 'heading', level: 2, text: 'Management' },

    {
      type: 'table',
      headers: ['Treatment', 'Detail', 'When'],
      rows: [
        ['Wrist splint (night splint)', 'Neutral position wrist splint worn at night — keeps wrist from flexing during sleep', 'First-line: trial for 4–6 weeks; available OTC; provides significant symptom relief in most; if improvement, continue'],
        ['Corticosteroid injection', 'Methylprednisolone 20–40 mg + lignocaine into carpal tunnel; can repeat once if good initial response', 'If splint fails at 6 weeks, or significant symptoms needing faster relief; maximum 2 injections before surgery considered'],
        ['Carpal tunnel decompression (surgery)', 'Division of the flexor retinaculum under local or general anaesthesia; open or endoscopic', 'If conservative treatment fails at 6 weeks, or thenar wasting, or severe/constant symptoms — do not delay surgery as can lead to permanent nerve damage'],
      ],
      caption: '1% recurrence rate after carpal tunnel release. Conservative measures should NOT be prolonged if thenar wasting or constant symptoms are present — surgical decompression urgently.',
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Address Secondary Causes Before or Alongside Treatment',
      items: [
        'Thyroid function tests (TFTs): hypothyroidism is common and treatable cause — CTS may resolve with thyroid replacement',
        'Pregnancy-associated CTS: usually resolves post-partum; conservative management (splint); steroid injection if severe',
        'Rheumatoid arthritis: optimise DMARD therapy through rheumatology',
        'Workplace ergonomics: avoid sustained wrist flexion, use ergonomic keyboard, wrist rests; occupational health if relevant',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'Orthopaedic / hand surgery (carpal tunnel decompression): UHDB Queen\'s Hospital Burton — primary hand surgery referral',
        'Alternative: Cannock Chase Hospital (day-case procedures including carpal tunnel release)',
        'Refer if: failed wrist splint + steroid injection, thenar wasting present, or constant symptoms at 6 weeks',
        'Corticosteroid injection: can be done in primary care (if trained clinician); alternatively refer to MSK service',
        'Patient may prefer alternative local site — discuss at consultation',
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Safety Netting',
      items: [
        'Urgent referral (same week): acute onset with thenar wasting or complete loss of thumb abduction — risk of permanent nerve damage',
        'Review at 6 weeks: if no improvement with splint → corticosteroid injection or surgical referral — do not delay',
        'Red flag: bilateral CTS should prompt investigation for systemic cause (hypothyroidism, RA, diabetes)',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Carpal Tunnel Syndrome', url: 'https://cks.nice.org.uk/topics/carpal-tunnel-syndrome/' },
        { label: 'NICE NG54 — Carpal Tunnel Syndrome', url: 'https://www.nice.org.uk/guidance/ng54' },
        { label: 'NHS — Carpal Tunnel', url: 'https://www.nhs.uk/conditions/carpal-tunnel-syndrome/' },
        { label: 'Patient.info — CTS', url: 'https://patient.info/bones-joints-muscles/carpal-tunnel-syndrome-leaflet' },
      ],
    },
  ],
}
