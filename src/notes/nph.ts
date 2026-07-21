import type { Note } from '../data/notes'

export const nph: Note = {
  id: 'nph',
  title: 'Normal Pressure Hydrocephalus (NPH)',
  subtitle: 'A potentially reversible cause of dementia — the classic triad and the shunt-responsive patient',
  tags: ['neurology'],

  body: `normal pressure hydrocephalus NPH triad gait apraxia magnetic gait urinary incontinence cognitive impairment dementia ventriculomegaly Evans index tap test large volume lumbar puncture ventriculoperitoneal shunt reversible dementia`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Dementia', url: 'https://cks.nice.org.uk/topics/dementia/' },
        { label: 'Brain & Spine Foundation — NPH', url: 'https://www.brainandspine.org.uk/' },
        { label: 'BMJ Best Practice — Normal Pressure Hydrocephalus', url: 'https://bestpractice.bmj.com/' },
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'Worth Recognising — Sometimes Reversible',
      items: [
        'NPH is a syndrome of ventricular enlargement with normal CSF pressure; a subgroup improves dramatically with a shunt',
        'It is under-diagnosed and often mislabelled as "just" Alzheimer\'s or Parkinson\'s — recognising it opens a treatable pathway',
        'Gait disturbance is usually the earliest and most shunt-responsive feature',
      ],
    },

    { type: 'heading', level: 2, text: 'The Classic Triad — "Wet, Wobbly, Wacky"' },

    {
      type: 'table',
      headers: ['Feature', 'Description'],
      rows: [
        ['Gait disturbance (wobbly)', 'Broad-based, shuffling, "magnetic"/glue-footed gait; falls — usually the first and most reversible feature'],
        ['Urinary incontinence (wet)', 'Urgency progressing to incontinence, later in the course'],
        ['Cognitive impairment (wacky)', 'Subcortical/frontal pattern — slowed thinking, apathy, poor attention; less amnestic than Alzheimer\'s'],
      ],
    },

    { type: 'heading', level: 2, text: 'Assessment & Diagnosis' },

    {
      type: 'list',
      items: [
        'Suspect in an older patient with a prominent gait disorder plus cognitive/urinary change; a careful gait assessment is key',
        'CT/MRI shows ventriculomegaly out of proportion to cortical atrophy (raised Evans index); this alone does not confirm NPH',
        'Refer to neurology/neurosurgery: a large-volume lumbar puncture ("tap test") — measuring gait/cognition before and after CSF removal — predicts shunt response',
        'Exclude and treat coexisting conditions (vascular disease, Parkinsonism, B12 deficiency, thyroid disease)',
      ],
    },

    { type: 'heading', level: 2, text: 'Management' },

    {
      type: 'list',
      items: [
        'Ventriculoperitoneal (VP) shunt insertion is the definitive treatment in selected, tap-test-positive patients',
        'Gait typically responds best; urinary and cognitive symptoms improve variably, and less so if long-standing — hence value in early referral',
        'Shunt complications (infection, over/under-drainage, subdural haematoma) require ongoing neurosurgical follow-up',
        'For those unsuitable for surgery, manage supportively as for other dementias — falls prevention, continence support, carer support',
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
