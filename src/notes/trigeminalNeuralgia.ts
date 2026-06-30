import type { Note } from '../data/notes'

export const trigeminalNeuralgia: Note = {
  id: 'trigeminal-neuralgia',
  title: 'Trigeminal Neuralgia',
  subtitle: 'Paroxysmal electric-shock facial pain, carbamazepine, red flags and when to image',
  tags: ['neurology'],

  body: `trigeminal neuralgia facial pain carbamazepine oxcarbazepine electric shock paroxysmal trigeminal nerve V1 V2 V3 vascular compression microvascular decompression multiple sclerosis cerebellopontine angle tumour HLA-B genetic Asian rash Stevens-Johnson hyponatraemia lamotrigine gabapentin baclofen MRI`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Trigeminal Neuralgia', url: 'https://cks.nice.org.uk/topics/trigeminal-neuralgia/' },
        { label: 'BASH — Headache Guidelines', url: 'https://www.bash.org.uk/guidelines/' },
        { label: 'Trigeminal Neuralgia Association UK', url: 'https://www.tna.org.uk/' },
      ],
    },

    { type: 'heading', level: 2, text: 'Clinical Features' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Characteristic Presentation',
      items: [
        'Unilateral, sudden, severe, brief (seconds) electric-shock or stabbing facial pain',
        'Confined to one or more divisions of the trigeminal nerve (V2/V3 most common; V1 less so)',
        'Occurs in paroxysms — recurrent attacks with pain-free intervals; may cluster over weeks then remit',
        'Triggered by innocuous stimuli: light touch, washing the face, shaving, brushing teeth, eating, talking, cold wind, a breeze',
        'Typical age 50–60+; the face is normal between attacks (no sensory loss in classical TN)',
        'Most are "classical" TN — usually due to neurovascular compression of the trigeminal root (or idiopathic)',
      ],
    },

    { type: 'heading', level: 2, text: 'Red Flags — Suggest a Secondary Cause' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Refer/Investigate (MRI) if Any of:',
      items: [
        'Age <50 at onset — multiple sclerosis is ~20× more likely (demyelination at the root entry zone); TN can be the presenting feature of MS',
        'Sensory loss in the trigeminal distribution, or other cranial nerve signs (e.g. hearing loss) — suggests a cerebellopontine angle (CPA) tumour → 2WW/urgent neurology',
        'Bilateral symptoms',
        'Pain confined to the ophthalmic (V1) division only',
        'Optic/other neurological features, deafness, or family history of a relevant condition',
        'Poor or no response to carbamazepine (atypical) — reconsider the diagnosis and refer',
      ],
    },

    { type: 'heading', level: 2, text: 'First-Line Treatment — Carbamazepine' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Carbamazepine — Prescribing & Monitoring',
      items: [
        'Start low: carbamazepine 100 mg OD or BD; titrate gradually to effect (typical 200 mg TDS–QDS; max ~1600 mg/day in divided doses)',
        '~90% achieve good initial pain control',
        'Check baseline FBC, U&E and LFTs before starting (and if symptomatic later)',
        'Side effects: dizziness, ataxia, diplopia, drowsiness, nausea; hyponatraemia (SIADH-like); leucopenia/agranulocytosis; deranged LFTs',
        'Rash: warn about serious skin reactions (Stevens-Johnson syndrome/TEN) — stop and seek help if rash develops; risk is higher in people of Han Chinese, Thai and other South-East Asian ancestry who carry HLA-B*15:02 — test before starting in these groups',
        'Potent enzyme inducer — reduces efficacy of COCP, DOACs, and many drugs (check interactions)',
        'Keep a pain diary; once pain-free for ~1 month, taper gradually (the condition is often relapsing-remitting)',
        'If carbamazepine is not tolerated: oxcarbazepine, lamotrigine, gabapentin, or baclofen are alternatives (often specialist-guided)',
      ],
    },

    { type: 'heading', level: 2, text: 'Differential Diagnosis' },

    {
      type: 'table',
      headers: ['Condition', 'Distinguishing Features'],
      rows: [
        ['Cluster headache / TACs', 'Longer attacks (minutes–hours), prominent ipsilateral autonomic features (lacrimation, rhinorrhoea), restlessness'],
        ['Dental pathology', 'Pain related to a specific tooth, worse with hot/cold, localised tenderness — exclude before diagnosing TN'],
        ['Temporomandibular joint dysfunction', 'Dull aching jaw pain, worse on chewing, joint clicking/tenderness'],
        ['Giant cell arteritis (age >50)', 'Temporal headache, jaw claudication, scalp tenderness, visual symptoms — urgent; check ESR/CRP'],
        ['Post-herpetic neuralgia', 'Continuous burning pain following shingles in a dermatome'],
        ['Sinusitis', 'Facial pressure/pain with nasal symptoms, worse on bending'],
      ],
    },

    { type: 'heading', level: 2, text: 'Referral & Specialist Options' },

    {
      type: 'list',
      items: [
        'Refer to neurology/specialist if: red flags, atypical features, age <50, diagnostic uncertainty, or failure to respond to/intolerance of carbamazepine',
        'MRI brain to exclude secondary causes (MS, CPA tumour, vascular compression) — particularly with any red flag',
        'Surgical/interventional options for refractory classical TN: microvascular decompression (most durable; addresses neurovascular conflict), or ablative procedures (stereotactic radiosurgery/Gamma Knife, percutaneous glycerol/balloon/radiofrequency rhizotomy)',
        'Safety-net: severe pain can impair eating and fluid intake and cause significant low mood — ask about both and support accordingly',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'cluster-headache', label: 'Cluster Headache & TACs', subtitle: 'Key facial-pain differential with autonomic features' },
        { id: 'multiple-sclerosis', label: 'Multiple Sclerosis', subtitle: 'Consider in TN under 50 — demyelination at the root entry zone' },
        { id: 'migraine', label: 'Migraine', subtitle: 'Other primary headache disorder in the differential' },
        { id: 'gca', label: 'Giant Cell Arteritis', subtitle: 'Facial/jaw pain in the over-50s — exclude this sight-threatening cause' },
      ],
    },

  ],
}
