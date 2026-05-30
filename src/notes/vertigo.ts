import type { Note } from '../data/notes'

export const vertigo: Note = {
  id: 'vertigo',
  title: 'Vertigo & Dizziness',
  subtitle: 'BPPV, Menière\'s, vestibular migraine, neuronitis — Dix-Hallpike, Epley, HINTS exam',
  tags: ['ent', 'neurology', 'vestibular'],

  body: 'vertigo dizziness BPPV benign paroxysmal positional vestibular neuronitis labyrinthitis Meniere\'s disease tinnitus SNHL sensorineural hearing loss vestibular migraine acoustic neuroma CPA cerebellopontine angle Dix-Hallpike Epley manoeuvre Brandt-Daroff HINTS head impulse test nystagmus test of skew PPPD postural perceptual persistent dizziness stroke POCS posterior circulation cerebellar lightheadedness postural hypotension betahistine prochlorperazine stemitil',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'First: Is it True Vertigo?',
      items: [
        '**Vertigo** = spinning sensation (rotational illusion) — vestibular pathology',
        '**Lightheadedness / presyncope** → think postural hypotension, arrhythmia, vasovagal — check BP lying/standing, ECG',
        'Always check **postural BP & HR**, examine for **cerebellar signs** (past pointing, nystagmus, dysdiadochokinesia, tone)',
      ],
    },

    // ── CLASSIFICATION ───────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Clinical Classification',
    },
    {
      type: 'table',
      headers: ['Pattern', 'Likely Diagnosis', 'Action'],
      rows: [
        ['Single sudden episode, doesn\'t settle, elderly, neurological signs', '**Posterior circulation stroke (POCS)**', '**ADMIT — 999**'],
        ['Single prolonged episode (days) with viral history', 'Vestibular neuronitis (no hearing loss) or Labyrinthitis (with SNHL)', 'Prochlorperazine (stemitil), vestibular rehab; consider ototoxics (gentamicin)'],
        ['Episodic — seconds, triggered by head position, normal between attacks', '**BPPV** (most common)', 'Dix-Hallpike → Epley manoeuvre'],
        ['Episodic — 20 min–2 hours, tinnitus, fluctuating SNHL, aural fullness', '**Menière\'s disease**', 'Refer ENT for diagnosis; betahistine (limited evidence)'],
        ['Episodic — hours/days, migraine history, headache, photo/phonophobia', '**Vestibular migraine**', 'Treat as migraine (prochlorperazine); prophylaxis if frequent'],
        ['Gradual progressive + unilateral SNHL', 'Acoustic neuroma / CPA tumour', '**2WW referral** (rare: ~1 in 100k/year)'],
        ['Long-standing "unsteady" without spinning, worse with visual distractors', '**PPPD** (Persistent Postural-Perceptual Dizziness)', 'Vestibular rehab + low-dose SSRI; avoid long-term prochlorperazine'],
      ],
      caption: 'PPPD = functional/central sensitisation; do not use vestibular sedatives long-term',
    },

    // ── DIX-HALLPIKE & EPLEY ─────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Dix-Hallpike Test (BPPV Diagnosis)',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Dix-Hallpike — Step by Step',
      items: [
        '1. Patient sits upright on couch; turn head **45° to one side**',
        '2. Lower patient rapidly to lying with head supported **below flat (head hanging)**',
        '3. Hold position — ask about vertigo, watch for **rotational nystagmus** (geotropic = towards ground = posterior canal BPPV)',
        '4. Slowly return to sitting, allow recovery',
        '5. Repeat on **other side** to identify affected ear (positive side = nystagmus on that side)',
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: 'Epley Manoeuvre (BPPV Treatment)',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Epley — Dislodges Crystal from Semicircular Canal',
      items: [
        '1. Start in Dix-Hallpike position (affected ear down) — **wait for nystagmus to resolve**',
        '2. Turn head back to **neutral** (facing ceiling)',
        '3. Roll body & head **all the way to opposite side** (affected ear now up, nose facing floor)',
        '4. Wait, then slowly sit up keeping control of head — **chin to chest** as you rise',
        '**Success rate ~75%** — commonly recurs; 2nd Epley + home Epley exercises improve nearly all',
        '**Brandt-Daroff exercises** if Epley fails — rapid side-to-side lying in repetitions',
      ],
    },

    // ── HINTS EXAM ───────────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'HINTS Exam — Peripheral vs Central (Acute Continuous Vertigo)',
    },
    {
      type: 'para',
      text: 'Used in **acute continuous vertigo** to differentiate peripheral (labyrinthitis/neuronitis) from central (stroke). More sensitive than MRI in first 48 hours.',
    },
    {
      type: 'table',
      headers: ['Test', 'Peripheral (Reassuring)', 'Central (Concerning — ADMIT)'],
      rows: [
        [
          '**H**ead Impulse Test (HIT)',
          '**Positive** — corrective saccade after rapid head turn (abnormal vestibulo-ocular reflex → peripheral)',
          '**Negative** — eyes stay on target smoothly (normal VOR suggests central lesion)',
        ],
        [
          '**I**mpulse (Nystagmus direction)',
          'Unidirectional nystagmus (one direction only)',
          'Bidirectional or vertical nystagmus',
        ],
        [
          '**T**est of Skew',
          'No skew deviation — cover each eye in turn, uncovered eye stays still',
          'Vertical skew deviation — uncovered eye moves up or diagonally (= brainstem/cerebellar sign)',
        ],
      ],
      caption: 'HINTS: HIT positive + unidirectional nystagmus + no skew = peripheral. Any "central" feature → urgent stroke pathway.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Head Impulse Test — Technique',
      items: [
        'Place hands on patient\'s cheeks, ask them to **fix gaze on your nose**',
        'Rapidly turn head to one side whilst they maintain fixation, then slowly return to centre',
        'Repeat to other side',
        '**Positive (peripheral):** eye flicks away then makes a corrective saccade back to nose — suggests abnormal VOR (peripheral vestibular pathology)',
        '**Negative (central):** eye stays on nose throughout — normal VOR, suggests central lesion',
      ],
    },

    // ── MENIERE'S ────────────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Menière\'s Disease',
    },
    {
      type: 'list',
      items: [
        'Caused by **excess endolymphatic fluid** in semicircular canals (compare BPPV = crystals/otoconia lodged in canals)',
        '**Diagnosis by ENT** (pure tone audiometry, electrocochleography)',
        'No curative treatment — **vestibular rehab**, hearing aids, psychological support',
        'Betahistine is licensed but **limited evidence** of benefit',
        'Surgery can help with hearing loss in severe cases',
        'Low-salt diet sometimes recommended (reduces endolymph)',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS – Vertigo', url: 'https://cks.nice.org.uk/topics/vertigo/' },
        { label: 'NICE CKS – Menière\'s disease', url: 'https://cks.nice.org.uk/topics/menieres-disease/' },
        { label: 'Epley UK — patient leaflet', url: 'https://patient.info/ears-nose-throat-mouth/benign-paroxysmal-positional-vertigo-bppv/epley-manoeuvre' },
      ],
    },
  ],
}
