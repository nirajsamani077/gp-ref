import type { Note } from '../data/notes'

export const neckPain: Note = {
  id: 'neck-pain',
  title: 'Neck Pain',
  subtitle: 'Red flags, cervical radiculopathy, myelopathy (DCM), whiplash, non-specific neck pain, management',
  tags: ['msk', 'pain'],

  body: 'neck pain cervical radiculopathy cervical spondylosis disc herniation myelopathy DCM degenerative cervical myelopathy whiplash WAD whiplash associated disorder non-specific neck pain red flags cancer malignancy fracture neurological deficit UMN LMN Lhermitte\'s sign Spurling test nerve root C5 C6 C7 C8 T1 dermatomal physiotherapy NSAIDs muscle relaxant cervical collar traction',

  content: [

    {
      type: 'callout',
      variant: 'danger',
      title: 'Red Flags — Same-Day Assessment / Emergency Referral',
      items: [
        'Progressive myelopathy (DCM): bilateral arm/hand weakness or clumsiness, gait unsteadiness, bladder/bowel dysfunction, UMN signs (hyperreflexia, Babinski, clonus) — urgent MRI ± same-day neurosurgery review',
        'Suspected malignancy: history of cancer, unexplained weight loss, night pain not relieved by rest, age >50 with new neck pain, no improvement after 4–6 weeks',
        'Fracture: significant trauma, osteoporosis, or steroid use — immobilise (rigid collar) and refer to ED/trauma',
        'Infection: fever, IV drug use, immunosuppression, recent neck procedure — exclude discitis, epidural abscess; urgent bloods + imaging',
        'Vertebral artery dissection: sudden severe neck pain after minor trauma or manipulation, associated with headache, Horner\'s syndrome, cerebellar signs — admit immediately',
        'Vascular: thoracic outlet syndrome with arm ischaemia, subclavian steal',
      ],
    },

    { type: 'heading', level: 2, text: 'The 3 Ns — Classification' },

    {
      type: 'table',
      headers: ['Category', 'Features', 'Management'],
      rows: [
        ['Nasty', 'Malignancy, fracture, infection, progressive myelopathy, vertebral artery dissection', 'Emergency referral or same-day assessment'],
        ['Nerve — Radiculopathy/Myelopathy', 'Unilateral arm pain/tingling in dermatomal pattern (radiculopathy), or bilateral signs with gait/bladder involvement (myelopathy)', 'Conservative initially for radiculopathy; urgent MRI ± neurosurgery for myelopathy or progressive neurology'],
        ['Non-specific', 'No red flags, no neurological signs; muscular, ligamentous, facet joint, fibromyalgia', 'Reassurance, early mobilisation, exercise, analgesia; most resolve within 6–12 weeks'],
      ],
    },

    { type: 'heading', level: 2, text: 'Cervical Nerve Root Level Reference' },

    {
      type: 'table',
      headers: ['Level', 'Pain Distribution', 'Sensory Loss', 'Weakness', 'Reflex'],
      rows: [
        ['C5', 'Neck → lateral shoulder → lateral upper arm', 'Lateral arm/shoulder', 'Shoulder abduction (deltoid), elbow flexion', 'Biceps reflex'],
        ['C6', 'Neck → lateral forearm → thumb and index finger', 'Thumb, index, lateral forearm', 'Wrist extension, elbow flexion', 'Supinator reflex'],
        ['C7 (most common)', 'Neck → posterior arm → middle finger', 'Middle finger, dorsum forearm', 'Elbow extension (triceps), wrist flexion, finger extension', 'Triceps reflex'],
        ['C8', 'Neck → medial forearm → ring and little finger', 'Ring and little fingers, medial forearm', 'Finger flexion, intrinsics', 'None reliable'],
        ['T1', 'Medial arm → medial forearm', 'Medial forearm', 'Intrinsic hand muscles (grip, spread fingers)', 'None reliable'],
      ],
      caption: 'Spurling\'s test: axial compression of head in lateral flexion towards symptomatic side reproduces arm pain — positive = cervical radiculopathy. Sensitivity ~50%, specificity ~85%.',
    },

    { type: 'heading', level: 2, text: 'Degenerative Cervical Myelopathy (DCM)' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'DCM — Do Not Miss',
      items: [
        'Most common cause of spinal cord dysfunction in adults >50 — caused by cervical spondylosis or disc herniation compressing the spinal cord',
        'Insidious onset: clumsy hands (difficulty with buttons, writing, handling utensils), gait disturbance (wide-based, unsteady), loss of balance, neck pain may be absent',
        'UMN signs below lesion: hyperreflexia, spasticity, Babinski sign, clonus — PLUS LMN signs at level of compression (wasting, fasciculations in hands)',
        'Lhermitte\'s sign: electric shock sensation down spine/limbs on flexing neck — also seen in MS',
        'Bladder: urgency and incomplete emptying (late sign)',
        'Urgent MRI cervical spine + neurosurgical referral — decompressive surgery stops progression and may improve symptoms',
      ],
    },

    { type: 'heading', level: 2, text: 'Cervical Radiculopathy — Management' },

    {
      type: 'list',
      items: [
        'Natural history: most cervical radiculopathy episodes resolve within 4–6 weeks with conservative management',
        'Analgesia: topical NSAID ± short course oral NSAID + PPI; paracetamol; short course diazepam 2 mg TDS if severe muscle spasm (max 1–2 weeks)',
        'Neuropathic pain: amitriptyline 10–25 mg nocte (may improve sleep), gabapentin/pregabalin — limited evidence for acute radiculopathy but may help if neurogenic features',
        'Physiotherapy: cervical mobilisation, muscle strengthening, posture correction — refer early; avoid prolonged collar use (weakens cervical muscles)',
        'Cervical epidural corticosteroid injection: secondary care — for refractory radiculopathy (>6–12 weeks, significant impairment); short-term benefit; does not alter long-term outcome',
        'Surgical referral (neurosurgery/OTS): progressive neurological deficit, severe pain not responding to conservative treatment >3 months, myelopathic features',
      ],
    },

    { type: 'heading', level: 2, text: 'Whiplash / Whiplash-Associated Disorder (WAD)' },

    {
      type: 'list',
      items: [
        'Hyperflexion-hyperextension injury — most commonly rear-end road traffic collisions; muscular and ligamentous injury',
        'WAD grading (Quebec Classification): Grade I (neck symptoms, no signs), Grade II (neck symptoms + musculoskeletal signs), Grade III (neck symptoms + neurological signs), Grade IV (fracture/dislocation)',
        'WAD I–II: active management — encourage early return to normal activity; avoid collar and rest; physiotherapy, analgesia; most recover within weeks to months',
        'WAD III: neurological assessment; MRI to exclude disc herniation or fracture; physiotherapy but monitor neurological signs',
        'WAD IV: emergency — fracture/dislocation; immobilise and admit',
        'Avoid: rigid cervical collar (unless fracture); prolonged sick leave; passive management — promotes chronicity',
        'Psychological factors: fear avoidance, catastrophising, and compensation claims can delay recovery — address yellow flags early',
        'Medicolegal: document mechanism, onset, duration, and neurological examination carefully',
      ],
    },

    { type: 'heading', level: 2, text: 'Non-Specific Neck Pain' },

    {
      type: 'list',
      items: [
        'Most neck pain seen in primary care is non-specific — muscular or ligamentous in origin, often related to posture (prolonged desk work, phone use), stress, or fibromyalgia',
        'Reassurance that most resolves within 6–12 weeks; address fear-avoidance beliefs',
        'Active management: continue normal activities; specific cervical exercises (chin tucks, isometric strengthening); refer physiotherapy if not improving',
        'Topical NSAIDs first line for analgesia; short oral NSAID course if needed; heat/ice for temporary relief',
        'Work modifications: ergonomic assessment for screen/desk height; avoid phone cradling; regular breaks',
        'Screen for psychological contributors: depression, anxiety, chronic stress — these worsen prognosis and should be addressed alongside physical treatment',
        'Referral for MRI: NOT routinely indicated for non-specific neck pain without red flags or neurology — degenerative changes on MRI are normal for age and do not correlate with symptoms',
      ],
    },

    { type: 'heading', level: 2, text: 'Differential Diagnoses for Neck Pain' },

    {
      type: 'table',
      headers: ['Diagnosis', 'Features'],
      rows: [
        ['Referred pain from cardiac ischaemia', 'Exertional jaw/neck pain — atypical MI presentation; ECG and troponin'],
        ['Subarachnoid haemorrhage', 'Sudden-onset "thunderclap" headache ± neck stiffness (meningism) — CT head urgently'],
        ['Meningitis', 'Fever, photophobia, rash, neck stiffness — emergency admission'],
        ['Thyroid disease', 'Goitre causing neck pressure; thyroiditis causing anterior neck pain + fever'],
        ['Carotid/vertebral artery dissection', 'Sudden neck pain post-manipulation/trauma + focal neurology; urgent CT angiography'],
        ['Pancoast tumour', 'Ipsilateral shoulder/neck/arm pain + Horner\'s syndrome in smoker; urgent CXR + CT'],
      ],
    },

  ],
}
