import type { Note } from '../data/notes'

export const osteoarthritis: Note = {
  id: 'osteoarthritis',
  title: 'Osteoarthritis (Hip, Knee & Hand)',
  subtitle: 'Clinical diagnosis, therapeutic exercise, topical NSAIDs, joint injection and when to refer for replacement',
  tags: ['msk', 'rheumatology'],

  body: `osteoarthritis OA hip knee hand DIP Heberden Bouchard nodes cartilage osteophytes subchondral exercise weight loss topical NSAID intra-articular steroid injection joint replacement THR TKR Baker's cyst trochanteric bursitis hallux rigidus thumb CMC clinical diagnosis motion is lotion`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG226 — Osteoarthritis', url: 'https://www.nice.org.uk/guidance/ng226' },
        { label: 'NICE CKS — Osteoarthritis', url: 'https://cks.nice.org.uk/topics/osteoarthritis/' },
        { label: 'Versus Arthritis — Osteoarthritis', url: 'https://versusarthritis.org/about-arthritis/conditions/osteoarthritis/' },
      ],
    },

    { type: 'heading', level: 2, text: 'Concept & Diagnosis' },

    {
      type: 'list',
      items: [
        'OA is an active process of joint damage and repair ("tear, wear and repair"), not passive "wear and tear" — multiple factors (mechanical load, obesity, inflammation, prior injury) tip the balance toward cartilage loss, subchondral bone change and osteophytes',
        'Diagnose clinically (no investigations needed) in a person ≥45 with activity-related joint pain and either no morning stiffness or stiffness lasting <30 minutes',
        'Imaging does NOT correlate well with symptoms — many with OA have normal X-rays and many without symptoms have radiographic OA; only image for atypical features (suspected alternative diagnosis, red flags)',
        'Key reassurance to give patients: staying active does NOT cause more damage — "motion is lotion"; exercise improves pain and function and may slow progression even in severe OA',
      ],
    },

    { type: 'heading', level: 2, text: 'Core Management — Same for All Joints' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Exercise and Weight Loss First',
      items: [
        'Therapeutic exercise (joint-specific muscle strengthening + aerobic activity) is the cornerstone — more effective than analgesia and does no harm; refer physiotherapy; benefit requires ongoing adherence',
        'Weight loss: aim for ≥10% in those overweight (especially knee > hip OA) — reduces pain and improves joint replacement outcomes',
        'Physiotherapy and occupational therapy: walking/mobility aids, joint supports, home/work adaptations, pacing',
        'Manage expectations and support self-management; address sleep and low mood which amplify pain',
      ],
    },

    { type: 'heading', level: 2, text: 'Analgesia — NICE Hierarchy' },

    {
      type: 'table',
      headers: ['Step', 'Detail'],
      rows: [
        ['Topical NSAID (first-line for knee/hand)', 'e.g. topical ibuprofen/diclofenac gel — try before oral; good safety profile'],
        ['Oral NSAID + PPI', 'Use lowest effective dose for the shortest time; review cardiovascular, renal and GI risk; co-prescribe a PPI'],
        ['Intra-articular corticosteroid injection', 'For short-term relief of an "inflamed"/flaring joint; benefit usually only 2–10 weeks and may diminish with repeated use; hip injections need ultrasound guidance; limit to ~3–4 per joint per year'],
        ['NOT routinely recommended', 'Paracetamol alone, oral codeine/other opioids, tramadol, and gabapentinoids (limited benefit, significant harms) — avoid routine use'],
        ['Topical capsaicin', 'An option for knee/hand OA'],
      ],
    },

    { type: 'heading', level: 2, text: 'Surgery — When to Refer' },

    {
      type: 'list',
      items: [
        'Refer for joint replacement when symptoms (pain, reduced function, sleep disturbance) substantially affect quality of life and are not controlled by core non-surgical treatment — do NOT base referral on X-ray severity alone, and do not delay until function is severely limited',
        'Total hip/knee replacements: most last 10–25 years; unicompartmental (partial) knee replacement is an option in isolated compartment knee OA',
        'Arthroscopic "washout"/debridement is NOT recommended for OA (no benefit over placebo) unless there is true mechanical locking',
        'Being overweight is not an absolute barrier to referral — discuss optimisation',
      ],
    },

    { type: 'heading', level: 2, text: 'Joint-Specific Points' },

    {
      type: 'table',
      headers: ['Joint', 'Pearls'],
      rows: [
        ['Knee', 'Often associated with a Baker\'s cyst (posterior knee/popliteal fossa swelling); a ruptured Baker\'s cyst causes acute calf swelling/pain mimicking a DVT — exclude DVT. Refer OTS for aspiration/injection if symptomatic'],
        ['Hip', 'Deep aching groin pain and stiffness, worse at end of day (rest/night pain when severe). Differentials: trochanteric bursitis (lateral hip pain), referred lumbar/sciatica, femoroacetabular impingement (younger patient, pain on hip flexion/activity)'],
        ['Hand', 'DIP involvement with Heberden\'s nodes (DIP) and Bouchard\'s nodes (PIP); thumb base (1st CMC) OA common. Note: RA spares the DIPs and has prolonged (>30–60 min) morning stiffness. Thumb splints help; steroid injection works mainly for IP joints and thumb CMC'],
        ['1st MTP (big toe)', 'Hallux rigidus/limitus — stiff painful big toe; footwear modification, rocker-sole shoes'],
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'inflammatory-arthritis', label: 'Inflammatory Arthritis', subtitle: 'RA/PsA — the key differential (DIP sparing, prolonged morning stiffness)' },
        { id: 'gout', label: 'Gout', subtitle: 'Acute monoarthritis differential; can coexist with OA' },
        { id: 'chronic-pain', label: 'Chronic Pain', subtitle: 'Persistent joint pain — exercise, pacing, avoiding opioids' },
        { id: 'dvt', label: 'DVT', subtitle: 'Ruptured Baker\'s cyst mimics DVT — exclude it' },
        { id: 'obesity', label: 'Obesity & Weight Management', subtitle: 'Weight loss reduces load and improves outcomes' },
        { id: 'knee-problems', label: 'Knee Problems', subtitle: 'Knee OA vs traumatic/overuse knee conditions' },
        { id: 'hand-wrist-conditions', label: 'Hand & Wrist Conditions', subtitle: 'Thumb-base OA overlaps with hand conditions' },
        { id: 'nsaids', label: 'NSAIDs', subtitle: 'Topical-first analgesia and safe prescribing' },
        { id: 'trochanteric-bursitis', label: 'Greater Trochanteric Pain Syndrome', subtitle: 'Lateral hip pain — distinguish from hip OA' },
      ],
    },

  ],
}
