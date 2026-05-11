import type { Note } from '../data/notes'

export const deQuervains: Note = {
  id: 'de-quervains',
  title: "De Quervain's Tenosynovitis",
  subtitle: 'Radial wrist pain, Finkelstein test, thumb spica, steroid injection and rehabilitation',
  tags: ['msk'],

  body: "de quervain tenosynovitis DQTS radial styloid thumb APL EPB abductor pollicis longus extensor pollicis brevis Finkelstein test selfie test thumb spica splint corticosteroid steroid injection triamcinolone 1st dorsal extensor compartment OTS orthopaedic surgery trigger thumb CMC OA trapeziometacarpal pregnancy postpartum new mother physiotherapy rehabilitation ergonomic gaming repetitive strain",

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: "De Quervain's Tenosynovitis — Overview",
      items: [
        'Inflammation and thickening of the tendon sheath of abductor pollicis longus (APL) and extensor pollicis brevis (EPB) — the two tendons passing through the 1st dorsal extensor compartment at the radial styloid',
        'Pain, tenderness and often swelling over the radial styloid, reproduced by thumb and wrist movements',
        'Common in: new mothers and postpartum women (repetitive infant lifting), pregnancy (fluid retention narrows compartment), "gamer\'s thumb" (excessive smartphone scrolling), occupational repetitive thumb tasks',
        'Affects women 6–10× more than men; peak incidence 30–50 years',
      ],
    },

    { type: 'heading', level: 2, text: 'Clinical Assessment' },

    {
      type: 'table',
      headers: ['Test', 'Technique', 'Positive If...'],
      rows: [
        ['Finkelstein test', 'Ask patient to fold the thumb into the palm, flex fingers over it, then ulnar deviate the wrist (passively by clinician or actively)', 'Sharp pain over radial styloid = positive (highly sensitive for DQTS)'],
        ['Selfie test', 'Pain reproduced in the classic smartphone "selfie position" — wrist ulnar-deviated with thumb abducted/extended', 'Reproduces radial wrist symptoms = supports DQTS diagnosis'],
        ['Grind test (CMC OA)', 'Apply axial load and rotation to the base of the thumb at the trapeziometacarpal joint', 'Pain and/or crepitus at base of thumb (NOT at radial styloid) = 1st CMC osteoarthritis, not DQTS'],
        ['Palpation', 'Point tenderness over the radial styloid, 1st extensor compartment, and APL/EPB tendons', 'Tenderness just proximal to radial styloid = supports DQTS; reproduce with resisted thumb abduction'],
        ['Crepitus', 'Palpate tendons during wrist movement', 'Creaking/grinding sensation in tendon sheath = confirms tenosynovitis'],
      ],
    },

    { type: 'heading', level: 2, text: 'Management — Step-Up Approach' },

    {
      type: 'table',
      headers: ['Step', 'Treatment', 'Detail'],
      rows: [
        ['Step 1 (all patients)', 'Activity modification + NSAIDs', 'Identify and modify aggravating activities (repetitive thumb movements); oral NSAIDs (ibuprofen 400 mg TDS with food) or topical NSAIDs (diclofenac gel BD–TDS); avoid in pregnancy'],
        ['Step 1B', 'Thumb spica splint', 'Immobilises the thumb (MP joint) and wrist — worn for most activities initially (3–6 weeks); can be removed at night; allows functional use of fingers; often available OTC or via physio; thermoplastic custom splints from OT/hand therapy'],
        ['Step 2 (if no improvement at 4–6 weeks)', 'Corticosteroid injection into the 1st dorsal extensor compartment', 'See injection detail below; highly effective (~80% improve); can be performed in primary care by trained clinician or via MSK service/FCP'],
        ['Step 3 (if no improvement after 1–2 injections)', 'Refer to orthopaedic hand surgery', 'Surgical release of the 1st dorsal extensor compartment; day-case under local anaesthetic; excellent results; relieves symptoms in >90%'],
      ],
    },

    { type: 'heading', level: 2, text: 'Corticosteroid Injection — Technique and Key Points' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Injection Technique for De Quervain\'s',
      items: [
        'Agent: triamcinolone acetonide 10 mg/1 mL (Kenalog) OR methylprednisolone acetate 40 mg/1 mL (Depo-Medrone)',
        'Mix with: 0.5–1 mL of 1% lidocaine in the same syringe to reduce post-injection pain and confirm intrasheath placement',
        'Approach: place thumb in gentle abduction; identify the APL/EPB tendons by asking patient to extend/abduct thumb against resistance — palpate just proximal to the tip of the radial styloid',
        'Inject intrasheath (NOT into the tendon itself) — angle needle parallel to tendon; correct placement produces visible linear tracking of the solution along the tendon sheath',
        'Post-injection: advise of post-injection flare (days 1–3); ice and rest; avoid strenuous thumb use for 48 hours; results typically apparent at 2–4 weeks',
        'Repeat injection: can repeat once if partial response at 6–8 weeks; if no response after 2 injections → refer for surgical release',
        'Caution in pregnancy: avoid systemic corticosteroids; local steroid injection relatively safe but discuss risks with patient and consider deferring until postpartum',
      ],
    },

    { type: 'heading', level: 2, text: 'Rehabilitation and Physiotherapy' },

    {
      type: 'list',
      items: [
        'Gentle range of motion exercises: thumb opposition and circumduction ×10 repetitions TDS — begin once acute pain settles (usually 2–4 weeks after injection)',
        'Thumb extension and abduction strengthening: pinch exercises with therapy putty; theraband thumb abduction; gradually increase resistance over 6–8 weeks',
        'Tendon gliding exercises: 5 positions of finger flexion (hook, fist, full fist, straight, tabletop) — to prevent tendon adhesion in sheath',
        'Postpartum mothers: ergonomic infant handling technique (hold baby with forearms/elbows not the hands/thumb); support baby\'s head with the forearm rather than the thumb/wrist; baby-carrying slings that reduce hand grip',
        'OT/hand therapy referral: for custom thumb spica, graded exercise programme, and ergonomic assessment; particularly useful for occupational or postpartum cases',
      ],
    },

    { type: 'heading', level: 2, text: 'Key Differentials' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Key Differentials — Do Not Miss',
      items: [
        '1st CMC (trapeziometacarpal) osteoarthritis: pain at base of thumb (not radial styloid); positive grind test; X-ray shows joint space narrowing at CMC; manage with thumb spica, topical NSAIDs, intra-articular steroid, hand surgery if severe',
        'Scaphoid fracture: FOOSH (fall on outstretched hand) history; anatomical snuffbox tenderness (NOT radial styloid); normal X-ray does not exclude — MRI or CT if suspected; immobilise while awaiting imaging',
        'Intersection syndrome: pain 4–6 cm proximal to radial styloid (further up the forearm at crossing point of APL/EPB with ECRB); crepitus and swelling proximal to wrist; rarer variant',
        'Trigger thumb: locking/snapping/clicking of the thumb at the MCP joint; palpable nodule at A1 pulley at base of thumb; injection into A1 pulley (not 1st compartment)',
        'Radial nerve compression: sensory symptoms (paraesthesia on dorsum of thumb and first web space); Wartenberg\'s sign',
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Safety Netting',
      items: [
        'Worsening pain or new neurological symptoms (numbness/tingling in thumb/index finger) after injection → same-week review; possible nerve injury or infection',
        'Signs of infection at injection site (increasing redness, warmth, discharge, fever) → same-day assessment; septic tenosynovitis requires urgent surgical washout',
        'Post-injection flare expected (days 1–3) — reassure; if pain worsening beyond 5 days → review',
        'Anatomical snuffbox tenderness after injury → X-ray + MRI to exclude scaphoid fracture — do NOT assume de Quervain\'s',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'BSSH — De Quervain\'s Patient Information', url: 'https://www.bssh.ac.uk/patients/conditions/de_quervain_s_tenosynovitis.aspx' },
        { label: 'Radiopaedia — De Quervain\'s', url: 'https://radiopaedia.org/articles/de-quervain-tenosynovitis' },
        { label: 'NICE CKS — Wrist Pain', url: 'https://cks.nice.org.uk/topics/wrist-pain/' },
        { label: 'BMJ Best Practice — De Quervain\'s', url: 'https://bestpractice.bmj.com/topics/en-gb/568' },
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'First Contact Practitioner (FCP): available at Darwin Practice for direct MSK assessment — can arrange splint, injection, or refer; ideal first step',
        'Hand therapy / OT (splinting and exercise): UHDB community occupational therapy; FCP can refer directly; custom thumb spica and graded programme',
        'Orthopaedic hand surgery (if failing conservative ×6 weeks + injection): UHDB Queen\'s Hospital Burton orthopaedic hand surgery — via e-RS; include Finkelstein test result, treatment tried, duration',
        'Alternative: Good Hope Hospital (UHB) hand surgery or New Cross Hospital Wolverhampton hand unit',
        'Postpartum cases: reassure self-limiting in most cases; community midwife / HV can advise on ergonomic handling techniques',
      ],
    },
  ],
}
