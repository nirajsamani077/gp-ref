import type { Note } from '../data/notes'

export const headInjury: Note = {
  id: 'head-injury',
  title: 'Head Injury & CT Head Criteria',
  subtitle: 'NICE risk stratification, when to send for CT, anticoagulant rules and safety-netting',
  tags: ['neurology'],

  body: `head injury concussion CT head NICE NG232 GCS loss of consciousness amnesia vomiting basal skull fracture anticoagulant DOAC warfarin post-concussion syndrome safety-net red flags children admission`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Head injury is a very common presentation, and the clinical task is to identify the minority with (or at risk of) significant intracranial injury who need a CT head and hospital assessment, while safely reassuring and safety-netting the majority. NICE provides clear criteria for who needs imaging and referral — and anticoagulation substantially lowers the threshold.',
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Refer to ED Immediately (999/urgent) if:',
      items: [
        'GCS <15 at assessment, or any deterioration in consciousness; a fall in GCS is an emergency.',
        'Focal neurological deficit, seizure, or suspected skull fracture (boggy scalp, signs of a basal skull fracture — "panda eyes", Battle\'s sign, CSF/blood from ear or nose, haemotympanum).',
        'A penetrating injury, high-energy mechanism, or any concern about a non-accidental injury in a child.',
      ],
    },

    { type: 'heading', level: 2, text: 'Who Needs a CT Head (NICE)' },
    {
      type: 'table',
      headers: ['CT within 1 hour (adults) if any of:', 'CT within 8 hours if:'],
      rows: [
        ['GCS <13 on initial assessment (or <15 at 2h)', 'Age ≥65 with any loss of consciousness or amnesia'],
        ['Suspected open/depressed or basal skull fracture', 'Dangerous mechanism (pedestrian/cyclist vs vehicle, ejection, fall >1 m or 5 stairs) with LOC or amnesia'],
        ['Post-traumatic seizure', 'Any LOC or amnesia in a patient on an anticoagulant or with a bleeding disorder'],
        ['Focal neurological deficit', '≥30 min retrograde amnesia of events before the injury'],
        ['>1 episode of vomiting', ''],
      ],
      caption: 'This is a summary — always apply the current full NICE NG232 pathway. Children have their own (lower-threshold) criteria and the presence of a suspected non-accidental injury is itself an indication for assessment.',
    },

    { type: 'heading', level: 2, text: 'Anticoagulants & Antiplatelets' },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Lower the Threshold',
      items: [
        'Any patient on a DOAC, warfarin, or with a bleeding disorder who has a head injury with LOC/amnesia (and, per local policy, often ANY head injury on an anticoagulant) should have a CT head within 8 hours — delayed intracranial haemorrhage is a real risk.',
        'Have a low threshold to refer/observe anticoagulated patients even with a minor mechanism; discuss reversal if bleeding is confirmed.',
      ],
    },

    { type: 'heading', level: 2, text: 'Minor Head Injury — Safety-Netting' },
    {
      type: 'list',
      items: [
        'For a well patient with GCS 15, no red flags and no CT indication: discharge with WRITTEN head-injury advice and a responsible adult to observe them.',
        'Advise return/999 for: worsening or persistent headache, repeated vomiting, drowsiness/confusion, weakness or numbness, visual disturbance, seizures, clear fluid from ears/nose, or unusual behaviour.',
        'Advise no alcohol/sedatives, not to be left alone for 24 hours, and to avoid contact sport until fully recovered.',
        'Post-concussion syndrome (headache, dizziness, poor concentration, irritability, sleep disturbance) is common and usually settles over weeks — reassure, graded return to activity, and follow graduated return-to-sport/"if in doubt, sit it out" concussion guidance.',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG232 — Head Injury: Assessment & Early Management', url: 'https://www.nice.org.uk/guidance/ng232' },
        { label: 'NICE CKS — Head Injury', url: 'https://cks.nice.org.uk/topics/head-injury/' },
        { label: 'Headway — Brain Injury Association', url: 'https://www.headway.org.uk/' },
        { label: 'UK Concussion Guidelines for Grassroots Sport', url: 'https://www.gov.uk/government/publications/uk-concussion-guidelines-for-non-elite-grassroots-sport' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'headache-assessment', label: 'Headache Assessment', subtitle: 'Post-traumatic headache and red flags' },
        { id: 'doacs', label: 'DOACs', subtitle: 'Anticoagulant reversal and bleeding risk' },
        { id: 'elderly-falls', label: 'Falls in the Elderly', subtitle: 'A common mechanism, often on anticoagulants' },
        { id: 'child-safeguarding', label: 'Child Safeguarding', subtitle: 'Consider non-accidental injury in children' },
        { id: 'stroke-tia', label: 'Stroke & TIA', subtitle: 'Neurological deficit differential' },
      ],
    },

  ],
}
