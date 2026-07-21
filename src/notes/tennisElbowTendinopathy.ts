import type { Note } from '../data/notes'

export const tennisElbowTendinopathy: Note = {
  id: 'tennis-elbow-tendinopathy',
  title: 'Tennis Elbow & Tendinopathy',
  subtitle: 'Lateral/medial epicondylalgia and the load-based approach to overuse tendinopathy — protocols, bracing and injections',
  tags: ['msk'],

  body: `tennis elbow lateral epicondylitis epicondylalgia golfer's elbow medial tendinopathy eccentric loading exercises Tyler twist FlexBar overuse degenerative tendon Achilles patellar topical NSAID counterforce brace Masalo cuff epicondylitis clasp wrist splint steroid injection PRP shockwave ESWT radial tunnel syndrome Cozen's Mill's Maudsley's test`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Tennis Elbow', url: 'https://cks.nice.org.uk/topics/tennis-elbow/' },
        { label: 'CSP — Elbow Pain Video Exercises', url: 'https://www.csp.org.uk/conditions/elbow-pain/video-exercises-elbow-pain' },
        { label: 'BESS — Tennis Elbow Patient Guide', url: 'https://www.bess.ac.uk/patient-information/' },
        { label: 'Versus Arthritis — Elbow Pain', url: 'https://versusarthritis.org/about-arthritis/conditions/elbow-pain/' },
      ],
    },

    { type: 'heading', level: 2, text: 'Tendinopathy — the Key Concept' },

    {
      type: 'list',
      items: [
        'Tendinopathy is a DEGENERATIVE overuse problem (collagen disorganisation, micro-tears and failed healing with neovascularisation), NOT primarily inflammatory — the "-itis" names are misnomers ("-opathy" is preferred). This is why the treatment is progressive LOADING, not rest and anti-inflammatories',
        'Common sites: tennis elbow (lateral epicondyle — common extensor origin), golfer\'s elbow (medial epicondyle — common flexor origin), Achilles, patellar ("jumper\'s knee"), gluteal and rotator cuff',
        'Classic pattern: localised pain that often "warms up" and eases during activity but is much worse afterwards and the next morning, with focal tenderness at the tendon origin',
        'Risk factors: repetitive gripping/wrist work, sudden increases in load, poor technique/ergonomics, and being aged 35–55; smoking, obesity and diabetes impair tendon healing',
      ],
    },

    { type: 'heading', level: 2, text: 'Lateral vs Medial Epicondylalgia' },

    {
      type: 'table',
      headers: ['Feature', 'Tennis elbow (lateral)', 'Golfer\'s elbow (medial)'],
      rows: [
        ['Tendon', 'Common extensor origin (esp. ECRB)', 'Common flexor–pronator origin'],
        ['Pain site', 'Lateral epicondyle, radiating down forearm', 'Medial epicondyle, radiating to forearm'],
        ['Aggravated by', 'Gripping, resisted wrist/finger EXTENSION, supination', 'Resisted wrist FLEXION and pronation'],
        ['Provocation test', 'Cozen\'s / Mill\'s / Maudsley\'s', 'Resisted wrist flexion with elbow extended'],
        ['Watch for', 'Radial (posterior interosseous) nerve entrapment', 'Ulnar nerve involvement (Tinel\'s at cubital tunnel)'],
      ],
      caption: 'Tennis elbow is ~5–10× more common than golfer\'s elbow and is now seen more in manual workers than in tennis players.',
    },

    { type: 'heading', level: 2, text: 'Assessment & Special Tests' },

    {
      type: 'list',
      items: [
        'Cozen\'s test: with the elbow extended and forearm pronated, resist wrist extension — pain at the lateral epicondyle is positive',
        'Mill\'s test: passively flex the wrist and pronate with the elbow extended (stretching the extensors) — reproduces lateral pain',
        'Maudsley\'s test: resisted extension of the middle finger provokes lateral pain (loads ECRB)',
        'It is a clinical diagnosis — imaging is rarely needed. Consider USS/MRI only if diagnosis is uncertain, a tear is suspected, or symptoms are refractory',
        'Check the neck and shoulder (referred pain), and screen for radial tunnel syndrome (pain ~4 cm distal to the epicondyle, worse on resisted supination, no epicondyle tenderness)',
      ],
    },

    {
      type: 'table',
      headers: ['Differential', 'Discriminating feature'],
      rows: [
        ['Radial tunnel syndrome', 'Tenderness over the radial tunnel (distal to epicondyle), pain on resisted supination/middle-finger extension'],
        ['Elbow osteoarthritis', 'Reduced/painful range of movement, crepitus, radiographic changes'],
        ['Cervical radiculopathy (C6/C7)', 'Neck pain, dermatomal radiation, neuro signs'],
        ['Posterior interosseous nerve palsy', 'Motor weakness of finger/thumb extension'],
        ['Ulnar neuropathy (medial pain)', 'Paraesthesiae in little/ring fingers, positive Tinel\'s at cubital tunnel'],
      ],
    },

    { type: 'heading', level: 2, text: 'Management — Load, Don\'t Rest' },

    {
      type: 'callout',
      variant: 'info',
      title: 'The Exercise Protocol (Mainstay of Treatment)',
      items: [
        'Eccentric/heavy-slow resistance loading is the cornerstone — controlled lengthening of the tendon under progressive load. Evidence is strongest for a structured, progressive programme continued for 6–12 weeks',
        'Basic eccentric: forearm supported on a table/chair arm, wrist over the edge holding a light weight (~0.5–1 kg or a filled water bottle); use the OTHER hand to lift the weight up, then slowly lower it over 3–4 seconds using the affected side. 3 sets of 10–15, once or twice daily; increase load gradually as pain allows',
        'The "Tyler Twist" using a rubber FlexBar is a well-evidenced eccentric progression for lateral epicondylalgia (and reverse-twist for medial)',
        'Expect some discomfort during exercise (acceptable if it settles within ~24h and does not progressively worsen) — this is normal and not harmful',
        'Add wrist-extensor and grip strengthening plus scapular/shoulder work as it settles; the CSP video-exercise resource (linked above) is a good patient handout',
        'Refer to physiotherapy if not improving by ~6 weeks of self-directed exercise, or sooner if severe/occupational impact',
      ],
    },

    {
      type: 'list',
      items: [
        'Activity modification: RELATIVE rest — reduce but don\'t completely stop aggravating loads; correct technique and ergonomics (mouse/keyboard set-up, tool grip size, backhand technique, lifting with the palm up)',
        'Analgesia: topical NSAID first-line for symptom relief; a short course of oral NSAID or paracetamol if needed — these ease pain but do not treat the underlying tendinopathy',
        'Bracing: a counterforce brace/epicondylitis clasp (e.g. a Masalo cuff) worn over the proximal forearm offloads the tendon origin during activity; some use a night wrist splint (wrist in slight extension) to rest the extensors — reasonable adjuncts alongside loading, not substitutes for it',
      ],
    },

    { type: 'heading', level: 2, text: 'Injections & Refractory Disease' },

    {
      type: 'table',
      headers: ['Option', 'Evidence / role'],
      rows: [
        ['Corticosteroid injection', 'NO LONGER routinely recommended — good short-term (weeks) relief but WORSE outcomes at 6–12 months and higher recurrence vs exercise/wait-and-see'],
        ['Extracorporeal shockwave therapy (ESWT)', 'Considered for refractory symptoms; NICE supports use with normal arrangements for governance/consent'],
        ['Platelet-rich plasma (PRP)', 'Some evidence in refractory cases but not standard NHS care; specialist-led'],
        ['Surgery', 'Reserved for genuinely refractory cases (>6–12 months) failing conservative care — open/arthroscopic ECRB debridement'],
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'Prognosis & Expectation-Setting',
      items: [
        'Tennis elbow is self-limiting but SLOW — the majority recover within months (up to a year) regardless of treatment',
        'Framing this at the first consultation reduces repeat attendances and demand for injections; the goal of treatment is to speed recovery and control symptoms, not to "cure" overnight',
        'Recurrence is common if the provoking load/technique is not addressed — build in prevention (graded return, ergonomics, ongoing strengthening)',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'achilles-tendinopathy', label: 'Achilles Tendinopathy & Rupture', subtitle: 'Same eccentric-loading principle; rupture red flags' },
        { id: 'shoulder-problems', label: 'Shoulder Problems', subtitle: 'Rotator cuff tendinopathy and injection cautions' },
        { id: 'trochanteric-bursitis', label: 'Greater Trochanteric Pain Syndrome', subtitle: 'Gluteal tendinopathy — same load-management approach' },
        { id: 'hand-wrist-conditions', label: 'Hand & Wrist Conditions', subtitle: 'Cubital tunnel and other elbow/forearm differentials' },
        { id: 'osteoarthritis', label: 'Osteoarthritis', subtitle: 'Elbow OA as a differential' },
        { id: 'nsaids', label: 'NSAIDs', subtitle: 'Topical-first analgesia and safe prescribing' },
      ],
    },

  ],
}
