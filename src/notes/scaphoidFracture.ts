import type { Note } from '../data/notes'

export const scaphoidFracture: Note = {
  id: 'scaphoid-fracture',
  title: 'Scaphoid Fracture & Common Fractures',
  subtitle: 'The occult scaphoid injury, anatomical snuffbox tenderness, and other easily missed fractures',
  tags: ['msk'],

  body: `scaphoid fracture anatomical snuffbox fall on outstretched hand FOOSH avascular necrosis non-union occult fracture immobilise cast MRI fifth metacarpal boxer's fracture radial head elbow fat pad clavicle fracture buckle torus fracture stress fracture`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Some fractures are notorious for being missed on initial X-ray or dismissed as sprains — and the scaphoid is the classic example, because a missed fracture risks avascular necrosis and non-union with lasting wrist disability. The safe principle across these injuries is to treat clinically suspicious cases AS a fracture even when the first X-ray is normal, and re-image or refer.',
    },

    { type: 'heading', level: 2, text: 'Scaphoid Fracture' },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Normal X-ray Does NOT Exclude It',
      items: [
        'Mechanism: a fall on the outstretched hand (FOOSH). Suspect with tenderness in the ANATOMICAL SNUFFBOX, over the scaphoid tubercle, or pain on telescoping/axial loading of the thumb.',
        'The scaphoid has a RETROGRADE blood supply (distal to proximal), so a proximal fracture risks avascular necrosis and non-union — hence the caution.',
        'If clinically suspected but the X-ray is normal: immobilise (a wrist splint/scaphoid cast), and either repeat X-ray in ~10–14 days or arrange early MRI (increasingly first-line — most sensitive) per local pathway.',
        'Confirmed fractures need orthopaedic management (cast vs fixation); warn of the non-union/AVN risk and the need for follow-up.',
      ],
    },

    { type: 'heading', level: 2, text: 'Other Commonly Missed / Managed Fractures' },
    {
      type: 'table',
      headers: ['Fracture', 'Clue & management'],
      rows: [
        ['5th metacarpal neck ("boxer\'s fracture")', 'After punching; check rotational deformity/scissoring of the fingers — neighbour-strap/splint; refer if significant angulation/rotation or an associated "fight bite" (human-bite wound over the knuckle — high infection risk)'],
        ['Radial head fracture', 'Elbow pain after FOOSH; limited extension/painful pronation-supination; a raised/displaced fat pad ("sail sign") on X-ray implies fracture even if the line is not seen — sling and early mobilisation; refer if displaced/blocked'],
        ['Clavicle fracture', 'Fall onto the shoulder; middle-third commonest — broad-arm sling, early mobilisation; refer if open, skin-tenting, neurovascular compromise, or significant displacement/shortening'],
        ['Buckle (torus) fracture', 'Common paediatric distal radius injury from FOOSH — stable; a removable splint/wrist support for ~3 weeks, no routine follow-up needed'],
        ['Stress fracture', 'Overuse (e.g. metatarsal, tibia); focal bony tenderness with normal early X-ray — MRI most sensitive; relative rest'],
      ],
    },

    { type: 'heading', level: 2, text: 'General Principles' },
    {
      type: 'list',
      items: [
        'Assess neurovascular status distal to any injury; look for open fractures, deformity, and joint involvement.',
        'When an X-ray is normal but clinical suspicion is high (bony tenderness, unable to weight-bear/use), treat as a fracture, immobilise, and re-image or refer — do not label it a sprain and discharge.',
        'Analgesia, elevation, and safety-netting for compartment syndrome (increasing pain, pain on passive stretch, paraesthesiae) in limb injuries.',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG38 — Fractures (Non-Complex)', url: 'https://www.nice.org.uk/guidance/ng38' },
        { label: 'BOA/BSSH — Scaphoid Fracture Guidance', url: 'https://www.bssh.ac.uk/patients/conditions/' },
        { label: 'NICE CKS — Fractures', url: 'https://cks.nice.org.uk/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'hand-wrist-conditions', label: 'Hand & Wrist Conditions', subtitle: 'Non-traumatic wrist/hand problems' },
        { id: 'osteoporosis', label: 'Osteoporosis', subtitle: 'Fragility fractures — assess bone health after a low-trauma fracture' },
        { id: 'elderly-falls', label: 'Falls in the Elderly', subtitle: 'FOOSH and fragility-fracture context' },
        { id: 'shoulder-problems', label: 'Shoulder Problems', subtitle: 'Clavicle/shoulder-girdle injury overlap' },
      ],
    },

  ],
}
