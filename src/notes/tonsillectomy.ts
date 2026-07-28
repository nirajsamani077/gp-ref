import type { Note } from '../data/notes'

export const tonsillectomy: Note = {
  id: 'tonsillectomy',
  title: 'Tonsillectomy — Indications',
  subtitle: 'The SIGN/"paradise" frequency criteria for recurrent tonsillitis, other indications, and post-op bleeding',
  tags: ['ent'],

  body: `tonsillectomy recurrent tonsillitis SIGN criteria 7 5 3 episodes obstructive sleep apnoea quinsy peritonsillar abscess unilateral tonsil malignancy post-tonsillectomy haemorrhage primary secondary bleeding referral`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Tonsillectomy is one of the commonest ENT operations, but referral for RECURRENT tonsillitis should meet defined frequency criteria — most sore throats are self-limiting and the benefit of surgery is modest and must outweigh the operative risks (notably bleeding). Other indications (obstruction, suspected malignancy) are separate. This note summarises when to refer and how to manage post-operative bleeding.',
    },

    { type: 'heading', level: 2, text: 'Recurrent Tonsillitis — Frequency Criteria' },
    {
      type: 'callout',
      variant: 'info',
      title: 'The SIGN "7-5-3" Rule',
      items: [
        'Consider referral for tonsillectomy when sore throats are due to TONSILLITIS, are DISABLING and prevent normal functioning, AND meet the frequency threshold: ≥7 adequately documented episodes in the preceding year, OR ≥5 per year for 2 years, OR ≥3 per year for 3 years.',
        'Episodes should be well documented (ideally attended/recorded) — encourage a symptom diary during a period of "watchful waiting", as many patients improve.',
        'The decision balances a modest reduction in sore-throat frequency against the risks and recovery of surgery — shared decision-making.',
      ],
    },

    { type: 'heading', level: 2, text: 'Other Indications' },
    {
      type: 'table',
      headers: ['Indication', 'Note'],
      rows: [
        ['Obstructive sleep apnoea (esp. children)', 'Adenotonsillar hypertrophy causing OSA — often adenotonsillectomy'],
        ['Recurrent quinsy (peritonsillar abscess)', 'Usually ≥2 episodes → consider tonsillectomy'],
        ['Suspected tonsillar malignancy', 'A persistently ENLARGED UNILATERAL tonsil, ulceration, or a neck node → 2WW head & neck referral (not a routine tonsillectomy)'],
        ['Other', 'Tonsillar stones/halitosis (relative), guttate psoriasis, and some periodic-fever syndromes (PFAPA)'],
      ],
    },

    { type: 'heading', level: 2, text: 'Post-Tonsillectomy Haemorrhage' },
    {
      type: 'callout',
      variant: 'danger',
      title: 'Any Post-Op Bleeding → Refer to ENT/ED',
      items: [
        'Primary haemorrhage (within 24 hours) is a surgical emergency; secondary haemorrhage (typically days 5–10, often with infection) is common and can be serious.',
        'ANY bleeding after tonsillectomy should be assessed urgently by ENT/ED — even a small self-limited bleed can herald a larger one; children can swallow blood and under-report the volume.',
        'Advise good analgesia, hydration and eating normally (helps prevent secondary infection/bleeding); treat secondary infection with antibiotics.',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'SIGN 117 — Management of Sore Throat / Tonsillectomy', url: 'https://www.sign.ac.uk/our-guidelines/management-of-sore-throat-and-indications-for-tonsillectomy/' },
        { label: 'ENT UK — Tonsillectomy Patient Info', url: 'https://www.entuk.org/patients/conditions/' },
        { label: 'NICE CKS — Sore Throat (Acute)', url: 'https://cks.nice.org.uk/topics/sore-throat-acute/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'sorethroat-tonsillitis', label: 'Sore Throat & Tonsillitis', subtitle: 'FeverPAIN/Centor and acute management' },
        { id: 'ent-emergencies', label: 'ENT Emergencies', subtitle: 'Quinsy and airway problems' },
        { id: 'paediatric-sleep-osa', label: 'Sleep Problems & OSA in Children', subtitle: 'Adenotonsillar OSA as an indication' },
        { id: 'neck-lumps', label: 'Neck Lumps', subtitle: 'Unilateral tonsil/malignancy — 2WW pathway' },
      ],
    },

  ],
}
