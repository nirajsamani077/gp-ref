import type { Note } from '../data/notes'

export const nph: Note = {
  id: 'nph',
  title: 'Normal Pressure Hydrocephalus (NPH)',
  subtitle: 'A potentially reversible cause of dementia — the classic triad, the tap test and shunt response',
  tags: ['neurology'],

  body: `normal pressure hydrocephalus NPH triad gait apraxia magnetic gait shuffling urinary incontinence cognitive impairment subcortical dementia ventriculomegaly Evans index CSF tap test large volume lumbar puncture ventriculoperitoneal shunt VP shunt reversible dementia wet wobbly wacky`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Normal pressure hydrocephalus is a syndrome of ventricular enlargement with a normal or only intermittently raised CSF pressure. It matters because it is one of the few POTENTIALLY REVERSIBLE causes of a dementia/gait syndrome — a well-selected subgroup improves markedly after CSF shunting. It is under-recognised and frequently mislabelled as Alzheimer\'s or Parkinson\'s disease; gait disturbance is usually the earliest and most shunt-responsive feature.',
    },

    { type: 'heading', level: 2, text: 'The Classic Triad — "Wet, Wobbly, Wacky"' },
    {
      type: 'table',
      headers: ['Feature', 'Description'],
      rows: [
        ['Gait disturbance ("wobbly")', 'Broad-based, shuffling, "magnetic"/glue-footed gait with poor turning and falls — typically the FIRST and most reversible feature'],
        ['Urinary incontinence ("wet")', 'Urinary urgency progressing to incontinence, usually later in the course'],
        ['Cognitive impairment ("wacky")', 'A subcortical/frontal pattern — slowed thinking (bradyphrenia), apathy, poor attention and executive function; less amnestic than Alzheimer\'s'],
      ],
    },

    { type: 'heading', level: 2, text: 'Assessment & Diagnosis' },
    {
      type: 'list',
      items: [
        'Suspect in an older patient with a prominent gait disorder plus cognitive and/or urinary change — a careful, documented gait assessment (speed, step length, turning) is central and provides a baseline.',
        'CT/MRI shows ventriculomegaly out of proportion to cortical atrophy (a raised Evans index, ± transependymal changes) — but imaging alone does NOT confirm NPH.',
        'Refer to neurology/neurosurgery: a large-volume ("tap test") lumbar puncture — assessing gait and cognition before and after removing ~30–50 mL CSF — helps predict shunt response; extended lumbar drainage is used in some centres.',
        'Screen for and treat coexisting/mimicking conditions: cerebrovascular disease, Parkinsonism, B12 deficiency, thyroid disease, depression and medication effects.',
      ],
    },

    { type: 'heading', level: 2, text: 'Management' },
    {
      type: 'callout',
      variant: 'info',
      title: 'Shunting — and Who Responds',
      items: [
        'Ventriculoperitoneal (VP) shunt insertion is the definitive treatment in selected, tap-test-positive patients.',
        'GAIT typically responds best; urinary and cognitive symptoms improve variably and less so if long-standing — hence the value of EARLY referral before irreversible change.',
        'Shunt complications (infection, over/under-drainage, subdural haematoma, blockage) require ongoing neurosurgical follow-up; a new headache or deterioration after shunting needs assessment.',
        'For those unsuitable for surgery, manage supportively as for other dementias — falls prevention, continence support, and carer support.',
      ],
    },

    { type: 'heading', level: 2, text: 'Referral Criteria' },
    {
      type: 'table',
      headers: ['Situation', 'Refer to', 'Urgency'],
      rows: [
        ['Triad (gait + cognitive/urinary) with ventriculomegaly on imaging', 'Neurology / neurosurgery', 'Routine (do not delay — gait recovery is time-sensitive)'],
        ['Isolated unexplained gait disorder in an older person', 'Neurology / falls service', 'Routine'],
        ['Deterioration after known shunt', 'Neurosurgery / ED', 'Urgent'],
      ],
    },

    { type: 'heading', level: 2, text: 'Patient Information Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Dementia', url: 'https://cks.nice.org.uk/topics/dementia/' },
        { label: 'Brain & Spine Foundation — NPH', url: 'https://www.brainandspine.org.uk/information-and-support/neurological-conditions/' },
        { label: 'Shine — Hydrocephalus Support', url: 'https://www.shinecharity.org.uk/' },
        { label: 'NHS — Hydrocephalus', url: 'https://www.nhs.uk/conditions/hydrocephalus/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'dementia', label: 'Dementia', subtitle: 'Reversible causes and the wider assessment' },
        { id: 'parkinsons-pd', label: 'Parkinson\'s Disease', subtitle: 'Gait and cognitive overlap — a key differential' },
        { id: 'elderly-falls', label: 'Falls in the Elderly', subtitle: 'Gait disturbance and falls assessment' },
        { id: 'urinary-incontinence', label: 'Urinary Incontinence & Prolapse', subtitle: 'Incontinence component of the triad' },
        { id: 'vitamin-b12', label: 'Vitamin B12 Deficiency', subtitle: 'A reversible cause to exclude' },
      ],
    },

  ],
}
