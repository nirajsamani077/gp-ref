import type { Note } from '../data/notes'

export const redEye: Note = {
  id: 'red-eye',
  title: 'Red Painful Eye',
  subtitle: 'Sight-threatening red flags, acute glaucoma vs uveitis vs scleritis, corneal disease and the benign causes',
  tags: ['ophthalmology'],

  body: `red eye acute angle closure glaucoma anterior uveitis iritis scleritis episcleritis corneal ulcer abrasion foreign body keratitis contact lens conjunctivitis blepharitis dry eyes subconjunctival haemorrhage hypopyon fluorescein photophobia visual loss orbital cellulitis chloramphenicol`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Red Eye', url: 'https://cks.nice.org.uk/topics/red-eye/' },
        { label: 'College of Optometrists — Clinical Guidance', url: 'https://www.college-optometrists.org/clinical-guidance' },
        { label: 'Moorfields — Eye Emergencies', url: 'https://www.moorfields.nhs.uk/' },
      ],
    },

    { type: 'heading', level: 2, text: 'Assessment' },

    {
      type: 'list',
      items: [
        'History: unilateral vs bilateral, onset, visual loss, pain vs gritty/itchy, discharge vs watering, photophobia, trauma, and contact lens wear',
        'Examination: visual acuity (Snellen), pupils (size/shape/reactivity), eye movements, and fluorescein staining with a blue light if available (corneal epithelial defects stain green/yellow)',
        'The two questions that triage urgency: is there visual loss, and is there significant pain or photophobia?',
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Same-Day Eye Casualty Referral if Any of:',
      items: [
        'Any reduction in visual acuity',
        'Significant eye pain (not just grittiness) or marked photophobia',
        'Trauma, chemical injury, or a contact lens wearer with a red painful eye (high risk of microbial keratitis)',
        'Abnormal pupil (fixed/irregular) — suggests acute angle-closure glaucoma or anterior uveitis',
        'Hazy cornea, hypopyon (fluid level of pus), or a corneal white spot/ulcer',
      ],
    },

    { type: 'heading', level: 2, text: 'Sight-Threatening Causes' },

    {
      type: 'table',
      headers: ['Condition', 'Key Features'],
      rows: [
        ['Acute angle-closure glaucoma', 'Severe pain, headache, nausea/vomiting, haloes around lights, often precipitated in the dark; fixed semi-dilated oval pupil, hazy cornea, hard "stony" globe, circumcorneal (ciliary) injection, raised IOP → emergency'],
        ['Anterior uveitis (iritis)', 'Painful, photophobic, watery red eye; small/irregular pupil; circumcorneal injection; hypopyon in severe cases; associated with HLA-B27 disease (AS, IBD, reactive arthritis, sarcoid) → same-day ophthalmology'],
        ['Scleritis', 'Severe deep "boring" pain, worse on eye movement, watering, may reduce vision; associated with RA, GPA/vasculitis, SLE → urgent ophthalmology'],
        ['Microbial keratitis / corneal ulcer', 'Contact lens wearer or trauma; pain, photophobia, watering, reduced vision; corneal stain/white infiltrate → emergency'],
        ['Chemical injury', 'Immediate copious saline/water irrigation BEFORE anything else, then urgent referral'],
        ['Orbital cellulitis', 'Painful proptosis, restricted/painful eye movements, reduced vision, systemic illness → emergency (distinct from preseptal cellulitis)'],
      ],
    },

    { type: 'heading', level: 2, text: 'Episcleritis vs Scleritis' },

    {
      type: 'list',
      items: [
        'Episcleritis: mild/no pain, localised redness, no visual loss, often self-limiting (~2–3 weeks); lubricants ± topical NSAID; refer only if not settling',
        'Scleritis: severe pain (worse on movement), generalised bluish scleral injection, possible visual loss — needs urgent ophthalmology and a systemic disease work-up',
      ],
    },

    { type: 'heading', level: 2, text: 'Common Benign Causes' },

    {
      type: 'table',
      headers: ['Condition', 'Management'],
      rows: [
        ['Conjunctivitis', 'Red, discharge, gritty, no visual loss/photophobia. Viral: supportive, strict hygiene (very contagious). Bacterial: usually self-limiting; topical chloramphenicol if needed. Allergic: cold compress, topical antihistamine/mast-cell stabiliser (sodium cromoglicate)'],
        ['Blepharitis', 'Gritty, crusted, itchy lid margins (meibomian gland dysfunction); warm compresses + lid hygiene; topical chloramphenicol to lid margins or oral tetracycline if persistent'],
        ['Dry eye', 'Foreign-body sensation; lubricating drops/artificial tears (hypromellose, carmellose, carbomer, sodium hyaluronate); consider Sjögren\'s/drugs'],
        ['Subconjunctival haemorrhage', 'Painless, well-demarcated bright red patch sparing the cornea; normal vision and pupil. Check BP and (if recurrent/on anticoagulants) clotting; reassure — resolves over ~2–3 weeks'],
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Neonatal Conjunctivitis (Ophthalmia Neonatorum)',
      items: [
        'Conjunctivitis in the first 28 days of life → refer; may be chlamydial or gonococcal with a high risk of complications (corneal perforation)',
        'A sticky eye with NO red eye in a baby is more often a blocked nasolacrimal duct (very common, usually self-resolves)',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'visual-loss', label: 'Sudden Visual Loss, Flashes & Floaters', subtitle: 'The other ophthalmic emergency pathway' },
        { id: 'conjunctivitis', label: 'Conjunctivitis', subtitle: 'Detailed management of the commonest benign red eye' },
        { id: 'glaucoma', label: 'Glaucoma', subtitle: 'Acute angle-closure vs chronic open-angle glaucoma' },
        { id: 'inflammatory-arthritis', label: 'Inflammatory Arthritis', subtitle: 'Uveitis/scleritis associations (HLA-B27, RA, vasculitis)' },
      ],
    },

  ],
}
