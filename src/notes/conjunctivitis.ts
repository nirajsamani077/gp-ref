import type { Note } from '../data/notes'

export const conjunctivitis: Note = {
  id: 'conjunctivitis',
  title: 'Conjunctivitis',
  subtitle: 'Bacterial vs viral, chloramphenicol drops, neonatal referral and red eye differentials',
  tags: ['ophthalmology', 'paediatrics'],

  body: 'conjunctivitis red eye bacterial viral chloramphenicol drops antibiotic delayed prescribing school nursery return neonatal ophthalmia neonatorum chlamydia STI nasolacrimal duct obstruction sticky eyes hand hygiene contagious adenovirus',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Conjunctivitis — Key Points',
      items: [
        'Usually bacterial rather than viral in children but clinically difficult to distinguish',
        'More likely bacterial if: purulent discharge, coexisting otitis media (common in children)',
        'Topical antibiotics (chloramphenicol) make little difference to outcome in either bacterial or viral — most self-resolve within 7–14 days',
        'Children CAN return to nursery/school even without antibiotic drops — no exclusion policy for infective conjunctivitis',
        'Available OTC: chloramphenicol 0.5% drops — reduces antibiotic waste if self-purchased',
        'Delayed prescribing strategy: issue prescription with instruction to use if not improving after 3 days',
      ],
    },

    { type: 'heading', level: 2, text: 'Treatment' },

    {
      type: 'table',
      headers: ['Preparation', 'Dose', 'Duration'],
      rows: [
        ['Chloramphenicol 0.5% eye drops', '2 hourly when severe; 4× daily (QDS) when improving', '7 days, or at least 48 hours after resolution'],
        ['Chloramphenicol 1% ointment', 'At night only (in addition to drops in daytime)', '7 days'],
        ['No treatment', 'If mild and improving spontaneously', 'Most resolve within 7–14 days without antibiotics'],
      ],
      caption: 'Chloramphenicol is safe and effective topically. Contraindicated systemically if family history of aplastic anaemia. Fusidic acid 1% (Fucithalmic) gel BD is an alternative if chloramphenicol sensitivity.',
    },

    { type: 'heading', level: 2, text: 'Viral Conjunctivitis' },

    {
      type: 'list',
      items: [
        'Usually adenovirus — watery discharge, follicular reaction, often associated with URTI',
        'Highly contagious — avoid sharing towels, face cloths, pillowcases; handwashing essential',
        'No antibiotic indicated — reassure and advise self-limiting course (7–14 days)',
        'Lubricating drops for comfort if required',
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Neonatal Conjunctivitis (Ophthalmia Neonatorum) — Refer All',
      items: [
        'Any red eye with discharge in first 28 days of life = refer to paediatric ophthalmology (or paediatrics for assessment)',
        'Do NOT swab or give antibiotic drops in primary care — diagnosis first',
        'Risk of chlamydia (Chlamydia trachomatis) and gonorrhoea — serious systemic implications',
        'Chlamydial: appears day 5–14; mucopurulent discharge; systemic treatment needed (azithromycin)',
        'Gonococcal: appears day 2–5; profuse purulent discharge; requires IV antibiotics urgently',
        'Most "sticky eyes" in neonates are nasolacrimal duct obstruction (NLDO): bilateral sticky eyes WITHOUT redness/inflammation — no antibiotic needed; resolves by 12 months; massage the lacrimal sac; refer if persistent beyond 12 months',
      ],
    },

    { type: 'heading', level: 2, text: 'Red Eye Differential — Do Not Miss' },

    {
      type: 'table',
      headers: ['Condition', 'Key Features', 'Action'],
      rows: [
        ['Acute angle-closure glaucoma', 'Severe eye pain, halos around lights, cloudy cornea, nausea, fixed mid-dilated pupil — unilateral', '999 / ophthalmology emergency'],
        ['Corneal ulcer/keratitis', 'Pain, photophobia, foreign body sensation, reduced vision, contact lens use', 'Same-day ophthalmology'],
        ['Uveitis/iritis', 'Dull aching eye pain, photophobia, irregular pupil, circumcorneal flush', 'Same-day ophthalmology'],
        ['Subconjunctival haemorrhage', 'Bright red patch, painless, no discharge, no vision change — often after coughing/straining', 'Reassure — self-resolving in 2–3 weeks; check BP if recurrent'],
        ['Episcleritis', 'Localised red sector, mild discomfort, no vision change, NSAID eye drops may help', 'Non-urgent — can manage in primary care; refer if not resolving'],
        ['Scleritis', 'Deep boring eye pain (worse at night), tender globe, associated systemic conditions (RA, vasculitis)', 'Urgent ophthalmology — can cause sight loss'],
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'Ophthalmology emergency: UHDB Queen\'s Hospital Burton eye department or Good Hope Hospital (UHB) eye casualty',
        'Neonatal conjunctivitis: UHDB Burton paediatric A&E — same day',
        'Routine ophthalmology: optometrist first; NHS sight test can screen for most ophthalmic conditions',
        'Keratitis/corneal ulcer/uveitis: same-day ophthalmology — UHDB Burton or Good Hope',
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Safety Netting',
      items: [
        'Same-day urgent ophthalmology: severe eye pain, reduced vision, photophobia, corneal opacity, fixed or irregular pupil — these are NOT conjunctivitis',
        'Contact lens wearers: any red eye = STOP wearing lenses immediately; same-day ophthalmology if pain or reduced vision (risk of Acanthamoeba/bacterial keratitis)',
        'Not improving after 7 days of antibiotics: review and consider alternative diagnosis (viral, chlamydial, refer ophthalmology)',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Conjunctivitis Infective', url: 'https://cks.nice.org.uk/topics/conjunctivitis-infective/' },
        { label: 'NHS — Conjunctivitis', url: 'https://www.nhs.uk/conditions/conjunctivitis/' },
        { label: 'RNIB — Eye Conditions', url: 'https://www.rnib.org.uk/eye-health/eye-conditions/' },
      ],
    },
  ],
}
