import type { Note } from '../data/notes'

export const childSensoryScreening: Note = {
  id: 'child-sensory-screening',
  title: 'Childhood Hearing, Vision, Speech & Skull Problems',
  subtitle: 'The screening programmes, red flags for hearing/vision/speech delay, and abnormal head shape',
  tags: ['paediatrics'],

  body: `newborn hearing screening otoacoustic glue ear vision screening red reflex squint amblyopia speech language delay plagiocephaly positional craniosynostosis head circumference macrocephaly microcephaly referral`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Early detection of hearing, vision and speech problems is critical because timely treatment prevents lasting developmental impact (a "critical window" applies to amblyopia and to language). National screening catches much, but GPs must act on parental concern — which is a sensitive marker — and know the referral thresholds. Head-shape concerns are common and usually benign positional plagiocephaly, but a minority signal craniosynostosis.',
    },

    { type: 'heading', level: 2, text: 'Hearing' },
    {
      type: 'list',
      items: [
        'The Newborn Hearing Screening Programme (otoacoustic emissions ± automated ABR) detects congenital hearing loss early; later, acquired hearing loss (commonly glue ear) affects speech/behaviour/schooling.',
        'Refer for audiology if: parental concern about hearing, delayed or regressing speech, not responding to sound/name, or recurrent glue ear (see OME) — never rely on "he\'ll grow out of it".',
        'Higher-risk groups (family history, syndromes, NICU graduates, meningitis, Down syndrome/cleft) need a lower threshold and structured surveillance.',
      ],
    },

    { type: 'heading', level: 2, text: 'Vision' },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Red Reflex & Squint',
      items: [
        'Check the RED REFLEX at newborn and 6–8-week checks — an absent/white reflex (leucocoria) → SAME-DAY ophthalmology to exclude congenital cataract and retinoblastoma.',
        'A constant squint at any age, or any squint persisting beyond ~3 months, → refer (risk of amblyopia — the "lazy eye" that must be treated within the critical period).',
        'School-entry vision screening detects reduced acuity/amblyopia; refer any concern about vision, a family history of childhood eye problems, or abnormal eye appearance/movements.',
      ],
    },

    { type: 'heading', level: 2, text: 'Speech & Language' },
    {
      type: 'list',
      items: [
        'Know the broad milestones and act on delay: e.g. no babble/gesture by ~12 months, few words by ~18 months, not joining words by ~2 years, or LOSS of previously acquired speech (regression is a red flag → urgent referral).',
        'First check hearing (glue ear is a common, treatable cause), then refer to speech & language therapy; consider autism/global developmental delay where language delay is part of a wider picture.',
      ],
    },

    { type: 'heading', level: 2, text: 'Head Shape & Size' },
    {
      type: 'list',
      items: [
        'Positional plagiocephaly/brachycephaly (flat spot from lying position, common since "back to sleep") is benign — reassure; advise repositioning, tummy time and varying head position; it improves with growth. Helmet therapy is not routinely recommended.',
        'CRANIOSYNOSTOSIS (premature fusion of a suture) causes an ABNORMAL/asymmetrical head shape with a RIDGED suture, not improving with repositioning → refer to paediatrics/craniofacial. A key distinguishing feature: plagiocephaly typically gives a parallelogram head (ear pushed forward on the flat side); synostosis gives a trapezoid shape.',
        'Plot HEAD CIRCUMFERENCE serially: a rapidly crossing-up centile (macrocephaly — hydrocephalus/raised ICP) or crossing-down (microcephaly) needs assessment; a bulging fontanelle or developmental regression is a red flag.',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'GOV.UK — Newborn Hearing / Vision Screening', url: 'https://www.gov.uk/topic/population-screening-programmes' },
        { label: 'NICE CKS — Speech & Language Delay', url: 'https://cks.nice.org.uk/' },
        { label: 'RCPCH — Development & Screening', url: 'https://www.rcpch.ac.uk/' },
        { label: 'NDCS — Deaf Children\'s Society', url: 'https://www.ndcs.org.uk/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'child-development', label: 'Child Development & Delay', subtitle: 'Milestones and global developmental delay' },
        { id: 'ome-glue-ear', label: 'Otitis Media with Effusion', subtitle: 'The commonest cause of childhood hearing loss' },
        { id: 'hearing-loss', label: 'Hearing Loss', subtitle: 'Audiology pathways' },
        { id: 'lacrimal-duct-obstruction', label: 'Watery/Sticky Eye in Infancy', subtitle: 'Red reflex and paediatric eye red flags' },
        { id: 'autism-asd', label: 'Autism (ASD)', subtitle: 'Language delay/regression in the wider picture' },
      ],
    },

  ],
}
