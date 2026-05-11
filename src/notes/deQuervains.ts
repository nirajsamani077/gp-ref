import type { Note } from '../data/notes'

export const deQuervains: Note = {
  id: 'de-quervains',
  title: "De Quervain's Tenosynovitis",
  subtitle: 'Radial wrist pain, Finkelstein test, thumb spica and steroid injection',
  tags: ['msk'],

  body: "de quervain tenosynovitis DQTS radial styloid thumb APL EPB abductor pollicis longus extensor pollicis brevis Finkelstein test finkelstein thumb spica splint corticosteroid steroid injection 1st dorsal extensor compartment OTS orthopaedic surgery trigger thumb CMC OA trapeziometacarpal pregnancy postpartum new mother",

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'De Quervain\'s Tenosynovitis — Overview',
      items: [
        'Inflammation and thickening of the tendon sheath of abductor pollicis longus (APL) and extensor pollicis brevis (EPB) — the two tendons passing through the 1st dorsal extensor compartment',
        'Pain and tenderness over the radial styloid, often with swelling',
        'Common in: new mothers, pregnancy, postpartum, "gamer\'s thumb", occupational repetitive tasks involving thumb movement',
        'Main differential: 1st CMC (trapeziometacarpal) osteoarthritis — distinguished by the grind test',
      ],
    },

    { type: 'heading', level: 2, text: 'Clinical Assessment' },

    {
      type: 'table',
      headers: ['Test', 'Technique', 'Positive If...'],
      rows: [
        ['Finkelstein test', 'Ask patient to fold the thumb into the palm, flex fingers over it, then passively (or actively) ulnar deviate the wrist over the edge of a table', 'Sharp pain over radial styloid = positive (highly sensitive for DQTS)'],
        ['Selfie test', 'Pain in the "selfie position" — wrist ulnar-deviated with thumb flexed', 'Reproduces symptoms = supports DQTS diagnosis'],
        ['Grind test (CMC OA)', 'Apply axial load and rotation to the base of the thumb (at the trapeziometacarpal joint)', 'Pain and/or crepitus at the base of the thumb = CMC OA (NOT DQTS)'],
        ['Tenderness', 'Palpate over the radial styloid and APL/EPB tendons', 'Point tenderness just proximal to radial styloid = DQTS'],
      ],
    },

    { type: 'heading', level: 2, text: 'Management' },

    {
      type: 'list',
      items: [
        'First line: thumb spica splint (immobilises thumb and wrist, worn most of the time initially) + NSAIDs (oral or topical)',
        'Second line (if no improvement after 4–6 weeks): corticosteroid injection into the tendon sheath of the 1st dorsal extensor compartment — often very effective; may be performed by GP with appropriate skills or refer to MSK/orthopaedics',
        'Review at 6 weeks: if no improvement after splint + injection, refer to orthopaedic hand surgery',
        'Surgical: release of the 1st dorsal extensor compartment — day case procedure; good outcomes',
        'Activity modification: avoid aggravating tasks (repetitive thumb movements) during treatment',
        'Postpartum cases: reassure that often self-limiting; ergonomic advice for infant handling (holding baby to avoid thumb strain)',
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Key Differentials',
      items: [
        '1st CMC (trapeziometacarpal) OA: pain at base of thumb; positive grind test; X-ray shows joint space narrowing; manage with splint, topical NSAIDs, intra-articular steroid, refer hand surgery if severe',
        'Intersection syndrome: pain 4–6 cm proximal to Lister\'s tubercle (further up the forearm); crepitus on tendon movement; rarer',
        'Scaphoid fracture: FOOSH (fall on outstretched hand) history; anatomical snuffbox tenderness; X-ray + CT/MRI if suspected',
        'Trigger thumb: locking, snapping or clicking of the thumb at the MCP joint; palpable nodule at A1 pulley',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'First Contact Practitioner (FCP): available at Darwin Practice for direct MSK assessment — can arrange splint, injection or refer',
        'Orthopaedic/hand surgery referral: UHDB Queen\'s Hospital Burton orthopaedic hand surgery — via e-RS if failing conservative management at 6 weeks',
        'Alternative: Good Hope Hospital (UHB) hand surgery; New Cross Hospital, Wolverhampton hand unit',
        'Physiotherapy (splinting guidance and exercise): via UHDB community physiotherapy or FCP direct referral',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Wrist Pain', url: 'https://cks.nice.org.uk/topics/wrist-pain/' },
        { label: 'BSSH — Hand Surgery Guidelines', url: 'https://www.bssh.ac.uk/patients/conditions/de_quervain_s_tenosynovitis.aspx' },
        { label: 'BMJ Best Practice — De Quervain\'s', url: 'https://bestpractice.bmj.com/topics/en-gb/568' },
      ],
    },
  ],
}
