import type { Note } from '../data/notes'

export const brainTumour: Note = {
  id: 'brain-tumour',
  title: 'Brain Tumour & Space-Occupying Lesion',
  subtitle: 'Red flag recognition, ICP features, 2WW criteria and urgent imaging',
  tags: ['neurology', 'cancer'],

  body: 'brain tumour glioma glioblastoma GBM astrocytoma meningioma cerebral metastases space occupying lesion SOL raised intracranial pressure ICP headache papilloedema seizure focal neurological deficit 2WW urgent cancer referral MRI brain CT head vomiting diplopia visual disturbance cognitive change children HeadSmart RCPCH',

  content: [
    {
      type: 'callout',
      variant: 'warning',
      title: 'Key Facts — Brain Tumours are Hard to Diagnose',
      items: [
        'Only 2% of brain tumours are diagnosed via 2WW — most present through acute admissions',
        'No single symptom has good positive predictive value — must look for combinations',
        'Most common types: gliomas (glioblastoma/astrocytoma) 60%, meningiomas 30% (usually benign, slow-growing), cerebral metastases (half of all SOLs — lung, breast, melanoma most common primary)',
        'Best symptom combinations for brain tumour: headache + other neurological symptoms; cognitive change + neurological symptoms; headache + cognitive change',
        'Always consider metastases in patients with any history of previous malignancy',
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Signs of Raised Intracranial Pressure (ICP) — URGENT',
      items: [
        'Headache: worse on lying down or in the morning; worse with coughing, sneezing or Valsalva; associated with vomiting or visual symptoms',
        'Papilloedema: swollen optic discs on fundoscopy — blurred disc margins, loss of venous pulsation, disc elevation; requires urgent same-day admission',
        'Diplopia: especially CN6 palsy (false localising sign from raised ICP)',
        'Pulsatile tinnitus: raised ICP; also consider idiopathic intracranial hypertension',
        'New seizures with any above features → same-day admission',
        'Malignant hypertension (BP >200/120): check BP in all severe headache — can cause papilloedema and raised ICP',
      ],
    },

    { type: 'heading', level: 2, text: 'When to Refer Urgently — Symptom Combinations' },

    {
      type: 'table',
      headers: ['Symptom Combination', 'Action'],
      rows: [
        ['Headache + any focal neurological deficit', 'MRI brain urgently (2WW or same-day if acute)'],
        ['Progressive cognitive change + any neurological symptom', '2WW brain tumour pathway'],
        ['Headache + cognitive change (new memory problems, personality change)', '2WW brain tumour pathway'],
        ['New seizure in adult ≥40 years', 'Urgent neurology assessment + MRI brain'],
        ['Weakness + confusion/cognitive change + visual symptoms', 'Same-day assessment / urgent admission'],
        ['Known previous malignancy + new neurological symptoms', 'Urgent MRI brain (suspected metastases)'],
        ['Signs of raised ICP (papilloedema, vomiting, positional headache)', 'Same-day admission'],
      ],
      caption: 'MRI is the imaging of choice — more sensitive than CT for posterior fossa, small lesions and early disease. CT with contrast is used in emergency (faster, available OOH). NICE NG12 (2WW): brain/CNS pathway for suspected cancer.',
    },

    { type: 'heading', level: 2, text: 'Headache Features — Raise or Lower Concern' },

    {
      type: 'list',
      items: [
        'Concerning headache features: NEW headache in patient >50, progressive over weeks, waking from sleep, positional (worse lying down), associated vomiting without nausea, postcoital/exertional, associated neurological deficit',
        'Reassuring headache features: longstanding pattern unchanged for years, episodic with symptom-free intervals, typical migraine or tension-type pattern, no red flag features',
        'DO perform fundoscopy in all new severe or progressive headache',
        'DO check BP — hypertensive emergency can cause headache with papilloedema',
        'Consider LP (CT first): unexplained acute severe headache even with normal CT (CT misses 5–10% of SAH)',
      ],
    },

    { type: 'heading', level: 2, text: 'Brain Tumours in Children' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'HeadSmart Tool — Use for Children with Headache',
      items: [
        'HeadSmart (bettersafethantumour.com) — RCPCH/RCOG validated tool for recognising brain tumours in children by age group',
        'Preschool (<5 years): behavioural changes, head circumference increase, head tilt, vomiting, balance/coordination problems, squint',
        'School age (5–15 years): recurrent/progressive headache (especially morning), delayed puberty, visual disturbance, balance problems, any focal neurological signs',
        'If signs of raised ICP, systemically unwell: same-day admission',
        'Otherwise: urgent paediatric 2WW referral or discuss with paediatrics on call',
        'Children median time to diagnosis = 11.5 weeks — early recognition improves outcomes',
      ],
    },

    { type: 'heading', level: 2, text: 'Management after Diagnosis' },

    {
      type: 'list',
      items: [
        'MDT approach: neurosurgery (surgical resection where possible), oncology (chemoradiotherapy), palliative care',
        'Glioblastoma (GBM): most common malignant primary brain tumour — 5-year survival <5%; temozolomide + radiotherapy standard',
        'Meningioma: usually benign, slow-growing — watch and wait if small/asymptomatic; surgery if large or symptomatic',
        'Seizure risk: prophylactic levetiracetam (Keppra) if resection, peri-tumoral oedema, or post-operatively (specialist decision)',
        'Dexamethasone: for peri-tumoral oedema causing mass effect — reduces symptoms short-term; specialist-initiated',
        'Neuropsychological rehabilitation and support: address cognitive effects, psychological impact, fertility post-treatment',
        'Brain Tumour Support (brainstumoursupport.co.uk): UK charity for patients and families',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'Urgent MRI brain (2WW): e-RS brain/CNS 2WW pathway — check which trust hosts imaging locally (UHDB Burton or New Cross Wolverhampton)',
        'Neurosurgery: Queen Elizabeth Hospital Birmingham (QEHB) — tertiary neurosurgical centre for West Midlands; all complex neurosurgery',
        'Neurology outpatient (non-urgent): New Cross Hospital, Wolverhampton — primary neurology referral for South Staffordshire',
        'Same-day admission for raised ICP: UHDB Queen\'s Hospital Burton A&E',
        'Children 2WW: paediatrics via e-RS; also discuss with UHDB Burton paediatrics on-call for urgent cases',
        'Patient may prefer alternative local site — discuss at consultation',
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Safety Netting',
      items: [
        '999 / A&E: new seizure, sudden severe headache (thunderclap), rapid neurological deterioration, confusion, papilloedema',
        'Same-day urgent: persistent headache with vomiting in morning, progressive focal weakness, new visual field defect',
        'For patients with known brain tumour: emergency contacts via neurosurgery/oncology team; steroid information card (Dexamethasone)',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG12 — Suspected Cancer (2WW)', url: 'https://www.nice.org.uk/guidance/ng12' },
        { label: 'HeadSmart — Children Brain Tumour Tool', url: 'https://www.bettersafethantumour.com/' },
        { label: 'Brain Tumour Research', url: 'https://www.braintumourresearch.org/' },
        { label: 'The Brain Tumour Charity', url: 'https://www.thebraintumourcharity.org/' },
        { label: 'NHS — Brain Tumours', url: 'https://www.nhs.uk/conditions/brain-tumours/' },
      ],
    },
  ],
}
