import type { Note } from '../data/notes'

export const tinnitus: Note = {
  id: 'tinnitus',
  title: 'Tinnitus',
  subtitle: 'Red flags for unilateral/pulsatile tinnitus, examination, when to scan and management',
  tags: ['ent'],

  body: `tinnitus pulsatile unilateral asymmetric acoustic neuroma vestibular schwannoma Meniere vestibular migraine sensorineural hearing loss otoscopy Rinne Weber MRI IAM audiology tinnitus retraining CBT British Tinnitus Association wax`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG155 — Tinnitus Assessment & Management', url: 'https://www.nice.org.uk/guidance/ng155' },
        { label: 'NICE CKS — Tinnitus', url: 'https://cks.nice.org.uk/topics/tinnitus/' },
        { label: 'British Tinnitus Association', url: 'https://www.tinnitus.org.uk/' },
      ],
    },

    {
      type: 'para',
      text: 'Tinnitus is very common and usually benign, so the central task is triage: picking out the few who need urgent assessment or imaging (sudden tinnitus with hearing loss, unilateral/asymmetric tinnitus, pulsatile tinnitus, or any neurology) from the many with harmless symmetrical tinnitus who need reassurance and support. Its close link with sleep, anxiety and low mood means the psychological impact should always be assessed and managed alongside the ear.',
    },
    {
      type: 'list',
      items: [
        'Very common and increases with age — usually distressing but harmless ("subjective" tinnitus heard only by the patient)',
        'Objective tinnitus (audible to the examiner) and pulsatile tinnitus warrant consideration of a vascular cause',
        'Assess the impact: sleep, concentration, mood — tinnitus is strongly linked to anxiety and depression (screen and treat)',
        'The key triage task is to identify the few who need urgent assessment/imaging among the many with benign tinnitus',
      ],
    },

    { type: 'heading', level: 2, text: 'Red Flags — Need Referral ± Imaging' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Refer Urgently if:',
      items: [
        'Sudden onset tinnitus with sudden sensorineural hearing loss → same-day ENT (treat as sudden SNHL)',
        'Tinnitus with neurological signs or sudden onset with vertigo → consider stroke',
        'Unilateral or markedly asymmetric tinnitus (especially with unilateral hearing loss) → MRI of the internal auditory meatus to exclude acoustic neuroma (vestibular schwannoma)',
        'Pulsatile tinnitus → consider a vascular cause (glomus tumour, AV malformation/fistula, carotid disease, raised intracranial pressure) — refer for imaging',
        'Tinnitus with significant distress, suicidal ideation, or severe impact on functioning → urgent support',
      ],
    },

    { type: 'heading', level: 2, text: 'Examination' },

    {
      type: 'list',
      items: [
        'Otoscopy — exclude wax, infection, or a middle-ear cause',
        'Tuning fork tests (Rinne/Weber) and a gross hearing test (whispered voice at arm\'s length, masking the other ear) to detect conductive vs sensorineural loss',
        'Cranial nerves (especially CN VII/VIII) and, for pulsatile tinnitus, auscultate for a bruit and check blood pressure',
        'Consider associated features: tinnitus + vertigo → think stroke (sudden), acoustic neuroma, Ménière\'s, or vestibular migraine',
      ],
    },

    { type: 'heading', level: 2, text: 'Investigations & Referral' },

    {
      type: 'list',
      items: [
        'Audiology assessment for most with persistent tinnitus, particularly if any hearing loss',
        'MRI IAM for unilateral/asymmetric tinnitus or asymmetric SNHL; tympanometry if a middle-ear/Eustachian tube problem is suspected',
        'Symmetrical, non-pulsatile tinnitus with normal examination and no neurology generally does NOT need a scan — reassure',
        'Refer (routine) for: persistent troublesome tinnitus, objective or pulsatile tinnitus, unilateral tinnitus with hearing loss/vertigo (not sudden, no neurology), or significant psychological impact',
      ],
    },

    { type: 'heading', level: 2, text: 'Management' },

    {
      type: 'list',
      items: [
        'Reassurance and explanation: most tinnitus improves or the brain habituates over time (can take months–years)',
        'Treat contributing factors: remove wax, treat ear infection, review ototoxic drugs, optimise sleep and reduce caffeine',
        'Hearing aids if there is associated hearing loss affecting communication (often improves tinnitus too)',
        'Tinnitus support, sound enrichment/therapy, and tinnitus-specific CBT for distress; signpost the British Tinnitus Association',
        'Manage co-existing anxiety/depression and insomnia',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'hearing-loss', label: 'Hearing Loss', subtitle: 'Sudden SNHL pathway, acoustic neuroma, Ménière\'s, audiology' },
        { id: 'vertigo', label: 'Vertigo & Dizziness', subtitle: 'Tinnitus + vertigo — Ménière\'s, vestibular migraine, stroke' },
        { id: 'anxiety-gad', label: 'Anxiety Disorders', subtitle: 'Common, treatable amplifier of tinnitus distress' },
      ],
    },

  ],
}
