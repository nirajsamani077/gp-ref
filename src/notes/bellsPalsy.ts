import type { Note } from '../data/notes'

export const bellsPalsy: Note = {
  id: 'bells-palsy',
  title: "Bell's Palsy",
  subtitle: 'LMN facial palsy — diagnosis, prednisolone, eye care and ENT referral',
  tags: ['neurology', 'ent'],

  body: "Bell's palsy facial nerve CN7 LMN lower motor neurone UMN upper motor neurone forehead sparing facial droop prednisolone aciclovir Ramsay Hunt VZV varicella zoster ophthalmology eye care lubricating drops exposure keratopathy parotid tumour MS multiple sclerosis bilateral facial palsy House-Brackmann grade",

  content: [
    {
      type: 'callout',
      variant: 'danger',
      title: "Distinguish LMN from UMN Facial Palsy — Critical",
      items: [
        "Bell's palsy = LMN (lower motor neurone) facial palsy — involves the FOREHEAD (inability to raise eyebrow, wrinkle forehead)",
        "Stroke = UMN (upper motor neurone) — FOREHEAD SPARED (forehead muscles have bilateral cortical representation)",
        "If forehead is SPARED → it's UMN (stroke/tumour) — this is NOT Bell's palsy → treat as stroke (999)",
        "LMN features: droop of entire face (including brow and forehead), unable to close eye, unable to raise eyebrow, unilateral drooping of mouth with dribbling",
        "Also may have: altered taste (ageusia), hyperacusis (sounds louder), numbness (CN5 overlap), reduced tearing",
      ],
    },

    { type: 'heading', level: 2, text: "Causes of LMN Facial Palsy — Not Always Bell's" },

    {
      type: 'table',
      headers: ['Cause', 'Features', 'Management'],
      rows: [
        ["Bell's palsy (idiopathic)", 'Sudden onset, unilateral, no other cause found', 'Prednisolone ± aciclovir (see below)'],
        ['Ramsay Hunt syndrome (VZV CN7)', 'Painful vesicular rash in ear (concha/external canal), severe pain, poor prognosis', 'Aciclovir 800 mg 5× daily for 7 days + prednisolone; urgent ENT'],
        ['Parotid tumour', 'Ipsilateral hearing loss, otalgia, parotid swelling or lump', 'Urgent CT/MRI; refer ENT or OMFS urgently'],
        ['Multiple sclerosis', 'Bilateral or recurrent palsy, other neurological features, younger patient', 'Refer neurology'],
        ['Lyme disease', 'Tick exposure, arthritis, erythema migrans rash, bilateral', 'Doxycycline; refer infectious diseases'],
        ['Sarcoidosis', 'Bilateral palsy, uveitis, lymphadenopathy', 'Refer respiratory/rheumatology'],
        ['Children/immunocompromised/atypical', 'Any atypical features — bilateral, recurrent, other CN involvement', 'Refer urgent — exclude Lyme, CNS lesion'],
      ],
    },

    { type: 'heading', level: 2, text: 'Management — Timing is Critical' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Start Prednisolone Within 72 Hours of Onset',
      items: [
        'Prednisolone 50 mg OD for 10 days — start within 72 hours for best outcome; after 72 hours benefit is reduced but can still give',
        'Increases chance of full recovery and reduces residual weakness',
        'Aciclovir: ONLY if Ramsay Hunt suspected (vesicles in ear/mouth) — 800 mg 5× daily for 7 days alongside prednisolone',
        'Aciclovir NOT routinely given in idiopathic Bell\'s palsy (no additional benefit over prednisolone alone)',
      ],
    },

    { type: 'heading', level: 2, text: 'Eye Care — Essential to Prevent Corneal Damage' },

    {
      type: 'list',
      items: [
        'Inability to fully close the eye = risk of exposure keratopathy (corneal damage from drying) — can be permanent',
        'Lubricating eye drops (e.g. Hylo-Forte, Systane) during the day — instil frequently (4–6× daily or more)',
        'Lubricating eye ointment at night (e.g. Lacri-Lube) — tape or pad eye shut overnight',
        'Moisture chamber glasses or swim goggles for wind/air exposure',
        'Ophthalmology referral: if any corneal symptoms (pain, redness, photophobia, visual changes) — same-day urgent',
        'Advise patient to cover eye in wind/bright sunlight and when sleeping until eye can close fully',
      ],
    },

    { type: 'heading', level: 2, text: 'Prognosis and Follow-Up' },

    {
      type: 'list',
      items: [
        '70–85% of Bell\'s palsy patients recover completely — most improvement within 3 weeks, full recovery by 3 months',
        '~15% have residual weakness; <5% have permanent significant deficit',
        'Ramsay Hunt has worse prognosis (~50% full recovery)',
        'Review at 3 weeks: if no improvement at all on prednisolone → refer ENT (to consider MRI, exclusion of space-occupying lesion)',
        'If residual weakness at 3–6 months → refer for plastic surgery/facial nerve assessment',
        'Synkinesis (involuntary movements, e.g. eye closing when smiling): facial physiotherapy and biofeedback can help',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'ENT (if no improvement at 3 weeks or Ramsay Hunt): UHDB Queen\'s Hospital Burton — primary ENT referral',
        'Alternative: Good Hope Hospital (UHB) or Walsall Manor Hospital for ENT follow-up',
        'Urgent ophthalmology (corneal involvement): UHDB Burton eye department or UHB Good Hope — same-day if cornea affected',
        'Neurology (bilateral, recurrent, or MS suspected): New Cross Hospital, Wolverhampton',
        'Plastic surgery (residual weakness >3–6 months): typically via ENT → tertiary referral',
        'Patient may prefer alternative local site — discuss at consultation',
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Safety Netting',
      items: [
        '999: sudden new facial drooping with arm weakness, speech difficulty, or UMN pattern (forehead spared) = stroke',
        'Same-day urgent: new eye pain, redness, photophobia, or visual disturbance in Bell\'s palsy (corneal ulceration)',
        'Same-day urgent: vesicles in ear or mouth canal (Ramsay Hunt — needs aciclovir urgently)',
        'Red flags requiring urgent ENT: parotid swelling/mass, bilateral palsy, hearing loss, children with atypical features',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: "NICE CKS — Bell's Palsy", url: 'https://cks.nice.org.uk/topics/bells-palsy/' },
        { label: "Patient.info — Bell's Palsy", url: "https://patient.info/ear-nose-throat/bell-s-palsy-leaflet" },
        { label: "NHS — Bell's Palsy", url: 'https://www.nhs.uk/conditions/bells-palsy/' },
      ],
    },
  ],
}
