import type { Note } from '../data/notes'

export const omeGlueEar: Note = {
  id: 'ome-glue-ear',
  title: 'Otitis Media with Effusion (Glue Ear)',
  subtitle: 'Middle-ear effusion in children, watchful waiting, autoinflation, grommets/hearing aids and the adult red flag',
  tags: ['ent', 'paediatrics'],

  body: `otitis media with effusion OME glue ear middle ear fluid conductive hearing loss retracted tympanic membrane air fluid level watchful waiting active observation Otovent autoinflation pure tone audiometry tympanometry type B grommet ventilation tube hearing aid Eustachian tube dysfunction Down syndrome cleft palate nasopharyngeal carcinoma speech language delay`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Otitis media with effusion (OME, "glue ear") is a collection of non-infected fluid in the middle-ear cleft, usually following acute otitis media or arising with Eustachian tube dysfunction. It is extremely common in young children (a peak around age 2 and again at school entry) and is usually self-limiting. Its importance lies in the conductive hearing loss it causes, which — if persistent during language acquisition — can affect speech, behaviour and schooling.',
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Adult Unilateral OME — Exclude Nasopharyngeal Cancer',
      items: [
        'Persistent UNILATERAL middle-ear effusion in an ADULT is a red flag — a post-nasal space (nasopharyngeal) carcinoma can obstruct the Eustachian tube.',
        'Examine/refer to visualise the nasopharynx; use the suspected head-and-neck cancer pathway, especially with unilateral nasal obstruction/bleeding, a neck node, or cranial-nerve signs, or in at-risk groups (Southern Chinese ancestry, EBV).',
      ],
    },

    { type: 'heading', level: 2, text: 'Diagnosis' },
    {
      type: 'list',
      items: [
        'Otoscopy: a dull, retracted or amber/grey tympanic membrane, often with a visible air–fluid level or bubbles and reduced mobility; the ear is NOT acutely inflamed or painful (contrast acute otitis media).',
        'Tympanometry (a flat, type B trace) supports an effusion; pure-tone (or age-appropriate) audiometry quantifies the conductive hearing loss.',
        'Assess functional impact: ask about hearing, speech/language, listening behaviour, balance and school performance.',
      ],
    },

    {
      type: 'callout',
      variant: 'info',
      title: 'Higher-Risk Groups — Lower Threshold to Refer',
      items: [
        'Down syndrome and cleft palate: OME is more common, more persistent and more functionally significant — refer early for specialist audiological/ENT input rather than prolonged watchful waiting.',
        'Also consider earlier referral where there is significant developmental, behavioural or educational impact.',
      ],
    },

    { type: 'heading', level: 2, text: 'Management in Children' },
    {
      type: 'table',
      headers: ['Step', 'Detail'],
      rows: [
        ['Active observation (watchful waiting)', '~3 months of review — most effusions resolve spontaneously. Reassure, optimise the listening environment (face the child, reduce background noise), and treat coexisting allergic rhinitis'],
        ['Autoinflation', 'e.g. Otovent nasal balloon — equalises middle-ear pressure via the Eustachian tube; cheap, non-invasive, worth trying if the child (usually ≥3–4 years) can do it'],
        ['Reassess at 3 months', 'Arrange audiometry ± tympanometry if symptoms persist'],
        ['ENT referral', 'For grommets (ventilation tubes) or hearing aids if bilateral persistent OME with a hearing loss ~25–30 dB, or lesser loss with significant functional impact'],
      ],
    },
    {
      type: 'list',
      items: [
        'Grommets improve hearing while in place and typically extrude spontaneously over ~6–12 months; adenoidectomy may be added for recurrent disease or nasal symptoms.',
        'Hearing aids are an effective alternative, particularly where surgery is unsuitable, or in Down syndrome/cleft palate.',
        'Do NOT use antibiotics, antihistamines, decongestants or intranasal/oral steroids to treat OME — they are ineffective.',
      ],
    },

    { type: 'heading', level: 2, text: 'Referral Criteria' },
    {
      type: 'table',
      headers: ['Situation', 'Refer to', 'Urgency'],
      rows: [
        ['Adult persistent unilateral OME', 'ENT (head & neck cancer pathway)', 'Urgent (2WW)'],
        ['Child: persistent bilateral OME with hearing loss/functional impact (≥3 months)', 'ENT / audiology', 'Routine'],
        ['Down syndrome or cleft palate with OME', 'ENT / audiology (specialist pathway)', 'Earlier/routine'],
        ['Diagnostic uncertainty or suspected structural problem', 'ENT', 'Routine'],
      ],
    },

    { type: 'heading', level: 2, text: 'Patient Information Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG12 — Suspected Cancer (Adult Unilateral OME)', url: 'https://www.nice.org.uk/guidance/ng12' },
        { label: 'NICE CKS — Otitis Media with Effusion', url: 'https://cks.nice.org.uk/topics/otitis-media-with-effusion/' },
        { label: 'ENT UK — Glue Ear Patient Leaflet', url: 'https://www.entuk.org/patients/conditions/' },
        { label: 'NDCS — Deaf Children\'s Society', url: 'https://www.ndcs.org.uk/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'acute-otitis-media', label: 'Acute Otitis Media', subtitle: 'The infection that often precedes glue ear' },
        { id: 'hearing-loss', label: 'Hearing Loss', subtitle: 'Conductive vs sensorineural; audiology pathways' },
        { id: 'rhinosinusitis', label: 'Rhinosinusitis & Rhinitis', subtitle: 'Eustachian tube dysfunction and upper-airway causes' },
        { id: 'child-development', label: 'Child Development & Delay', subtitle: 'Hearing loss and speech/language delay' },
        { id: 'two-week-wait', label: '2WW Referral Guide', subtitle: 'Adult unilateral OME — head & neck cancer pathway' },
      ],
    },

  ],
}
