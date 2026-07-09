import type { Note } from '../data/notes'

export const omeGlueEar: Note = {
  id: 'ome-glue-ear',
  title: 'Otitis Media with Effusion (Glue Ear)',
  subtitle: 'Middle-ear effusion in children, watchful waiting, autoinflation, grommets and the adult red flag',
  tags: ['ent', 'paediatrics'],

  body: `otitis media with effusion OME glue ear middle ear fluid conductive hearing loss retracted tympanic membrane watchful waiting Otovent autoinflation audiometry tympanometry grommet ventilation tube hearing aid Eustachian tube dysfunction nasopharyngeal carcinoma`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Otitis Media with Effusion', url: 'https://cks.nice.org.uk/topics/otitis-media-with-effusion/' },
        { label: 'NICE NG12 — Suspected Cancer (adult unilateral OME)', url: 'https://www.nice.org.uk/guidance/ng12' },
        { label: 'ENT UK — Glue Ear', url: 'https://www.entuk.org/patients/conditions/' },
      ],
    },

    { type: 'heading', level: 2, text: 'Overview' },

    {
      type: 'list',
      items: [
        'A collection of non-infected fluid in the middle ear, usually following acute otitis media or with Eustachian tube dysfunction; very common in young children',
        'Otoscopy: a dull, retracted tympanic membrane with a fluid level or bubbles (negative middle-ear pressure); the ear is not acutely inflamed/painful',
        'Effect: conductive hearing loss → speech/language delay, behavioural problems, and difficulties at school',
        'Higher risk/persistence in Down syndrome and cleft palate — these children need lower thresholds for assessment and specialist input',
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Adult Unilateral OME — Exclude Nasopharyngeal Cancer',
      items: [
        'Persistent unilateral OME/middle-ear effusion in an ADULT is a red flag — the nasopharynx must be examined to exclude a post-nasal space (nasopharyngeal) carcinoma obstructing the Eustachian tube',
        'Refer on the suspected head-and-neck cancer pathway, especially with other features (unilateral nasal obstruction/bleeding, neck node, cranial nerve signs) or in at-risk groups',
      ],
    },

    { type: 'heading', level: 2, text: 'Management in Children' },

    {
      type: 'list',
      items: [
        'Active observation ("watchful waiting") for ~3 months — most effusions resolve spontaneously; reassure and explain',
        'Autoinflation (e.g. Otovent — inflating a balloon through the nose) can help equalise middle-ear pressure via the Eustachian tube if the child is old enough to perform it; cheap and worth trying (also useful for Eustachian tube dysfunction)',
        'After 3 months of persistent symptoms → arrange audiometry (and tympanometry)',
        'Refer to ENT for grommets (ventilation tubes) or hearing aids if there is a hearing loss of ~25–30 dB (or <25 dB with significant functional impact on speech, development, education or behaviour)',
        'Grommets improve hearing while in place (typically extrude over ~6–12 months); hearing aids are an alternative, especially where surgery is unsuitable or in Down syndrome/cleft palate',
        'Do NOT use antibiotics, antihistamines, decongestants or steroids to treat OME (ineffective)',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'acute-otitis-media', label: 'Acute Otitis Media', subtitle: 'The infection that often precedes glue ear' },
        { id: 'hearing-loss', label: 'Hearing Loss', subtitle: 'Conductive vs sensorineural; audiology pathways' },
        { id: 'rhinosinusitis', label: 'Rhinosinusitis & Rhinitis', subtitle: 'Eustachian tube dysfunction and upper-airway causes' },
        { id: 'two-week-wait', label: '2WW Referral Guide', subtitle: 'Adult unilateral OME — head & neck cancer pathway' },
      ],
    },

  ],
}
