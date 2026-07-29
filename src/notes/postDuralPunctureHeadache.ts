import type { Note } from '../data/notes'

export const postDuralPunctureHeadache: Note = {
  id: 'post-dural-puncture-headache',
  title: 'Post-Dural Puncture Headache',
  subtitle: 'The positional headache after LP/epidural/spinal — recognition, conservative care and the blood patch',
  tags: ['neurology'],

  body: `post-dural puncture headache PDPH low pressure headache lumbar puncture epidural spinal anaesthesia positional postural CSF leak blood patch caffeine conservative flat neck stiffness cranial nerve`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Post-dural puncture headache (PDPH) is a low-CSF-pressure headache caused by ongoing CSF leak through a dural puncture — after a lumbar puncture, spinal anaesthetic, or an accidental dural tap during epidural insertion (obstetrics is a common setting). The defining feature is that it is POSTURAL, and while most settle, a persistent case can be effectively treated with an epidural blood patch.',
    },

    { type: 'heading', level: 2, text: 'Recognition' },
    {
      type: 'callout',
      variant: 'info',
      title: 'A Positional Headache After a Dural Procedure',
      items: [
        'Onset typically within 5 days of the procedure; a headache that is markedly WORSE on sitting/standing and RELIEVED by lying flat — the postural nature is the hallmark.',
        'Often frontal/occipital, may radiate to the neck/shoulders, ± neck stiffness, nausea, photophobia, tinnitus or transient hearing/visual changes; young women and obstetric patients are higher risk.',
        'Distinguish from the far more serious causes of headache after neuraxial procedures — meningitis (fever, non-postural), subdural haematoma, and cerebral venous sinus thrombosis — a non-postural, progressive, or focal-neurology headache needs urgent assessment/imaging.',
      ],
    },

    { type: 'heading', level: 2, text: 'Management' },
    {
      type: 'list',
      items: [
        'Conservative measures for the first ~24–48h: bed rest as needed for comfort, good oral hydration, simple analgesia (paracetamol/NSAIDs), and caffeine (which may transiently help). Most mild PDPH improves within a few days.',
        'If it is severe, persists beyond ~48–72 hours, or is disabling → refer back to the anaesthetic team for an EPIDURAL BLOOD PATCH (autologous blood injected into the epidural space to seal the leak) — highly effective, often giving rapid relief.',
        'Safety-net: seek urgent review if the headache loses its postural character, becomes constant/worsening, or there is fever, neurological deficit, seizures or reduced consciousness (exclude meningitis, subdural, CVST).',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'OAA — Headache After an Epidural or Spinal (Patient Info)', url: 'https://www.labourpains.org/' },
        { label: 'RCoA — Post-Dural Puncture Headache', url: 'https://rcoa.ac.uk/patient-information' },
        { label: 'NICE CKS — Headache Assessment', url: 'https://cks.nice.org.uk/topics/headache-assessment/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'headache-assessment', label: 'Headache Assessment', subtitle: 'Red flags and the primary-headache differential' },
        { id: 'iih', label: 'Idiopathic Intracranial Hypertension', subtitle: 'The opposite — a HIGH-pressure headache' },
        { id: 'meningitis', label: 'Meningitis', subtitle: 'The can\'t-miss cause of headache after neuraxial procedures' },
      ],
    },

  ],
}
