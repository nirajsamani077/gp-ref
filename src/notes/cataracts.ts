import type { Note } from '../data/notes'

export const cataracts: Note = {
  id: 'cataracts',
  title: 'Cataracts',
  subtitle: 'Types, causes, optometrist referral, surgical indications, IOLs and driving standards',
  tags: ['ophthalmology'],

  body: 'cataract lens opacity visual loss glare halos night vision refractive change nuclear sclerosis cortical posterior subcapsular optometrist visual acuity VA red reflex slit lamp biometry fundoscopy cataract surgery phacoemulsification endophthalmitis posterior capsule rupture floppy iris syndrome IFIS tamsulosin alpha blocker IOL intraocular lens monofocal multifocal toric YAG laser PCO driving group 1 group 2 DVLA RNIB congenital cataract amblyopia',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Cataracts — Overview',
      items: [
        'Opacity of the crystalline lens — most common cause of reversible blindness worldwide; predominantly age-related',
        'Presentation: gradual visual blurring, glare and halos (especially around lights or oncoming headlights), monocular diplopia, frequent changes to glasses prescription, colours appear faded or yellow',
        'Onset: typically over months to years — rarely sudden; sudden visual change raises concern for other pathology (retinal detachment, CRVO, AACG)',
        'Refer to optometrist as first step — they assess visual acuity, red reflex, slit-lamp morphology, intraocular pressure, and initiate NHS referral for cataract assessment',
      ],
    },

    { type: 'heading', level: 2, text: 'Types of Age-Related Cataract' },

    {
      type: 'table',
      headers: ['Type', 'Morphology', 'Symptoms', 'Notes'],
      rows: [
        ['Nuclear sclerosis', 'Yellowing and hardening of central lens nucleus; most common age-related type', 'Blurred distance vision; may initially improve near vision ("index myopia") — patient notices they can read without glasses', 'Progressive; tends to be bilateral; glare a prominent symptom'],
        ['Cortical', 'Spoke-like opacities from lens cortex radiating inward; associated with diabetes and UV exposure', 'Glare, halos, contrast reduction; variable visual loss depending on position of opacities', 'More common in women; associated with UVB exposure; associated with DM'],
        ['Posterior subcapsular (PSC)', 'Opacity at the back of the lens; most visually disabling type', 'Marked glare (especially in bright light or oncoming headlights); reduced near vision; reading difficulty; affects visual acuity disproportionately', 'Associated with: steroids (systemic and high-dose inhaled), diabetes, uveitis, trauma; may affect younger patients'],
      ],
    },

    { type: 'heading', level: 2, text: 'Causes of Cataract' },

    {
      type: 'list',
      items: [
        'Age-related (most common): nuclear sclerosis, cortical, or PSC',
        'Systemic: diabetes mellitus (cortical, snowflake), Wilson\'s disease (sunflower cataract), hypothyroidism',
        'Drugs: long-term systemic, high-dose inhaled, or topical corticosteroids — PSC pattern',
        'Trauma: unilateral; consider non-accidental injury in children; blunt trauma → stellate cataract; penetrating → localised opacity',
        'Secondary to eye disease: uveitis, glaucoma, high myopia (may develop PSC earlier)',
        'Lifestyle: smoking (nuclear sclerosis); excess alcohol; excessive UV light exposure (cortical)',
        'Genetic/congenital: Down\'s syndrome (zonular cataract), Marfan\'s syndrome, rubella syndrome, galactosaemia — congenital cataracts require urgent paediatric ophthalmology (risk of amblyopia)',
      ],
    },

    { type: 'heading', level: 2, text: 'Surgical Management' },

    {
      type: 'table',
      headers: ['Aspect', 'Detail'],
      rows: [
        ['Indication', 'Patient-led decision based on functional impairment not corrected by glasses and significantly affecting quality of life — no fixed VA threshold'],
        ['Procedure', 'Phacoemulsification: ultrasound emulsification and aspiration of the lens + insertion of a foldable intraocular lens (IOL) implant; day case under topical or peribulbar local anaesthetic'],
        ['Bilateral cataracts', 'First eye first; typically wait 6–12 weeks before second eye (allows assessment of outcome, biometry calculation, and recovery)'],
        ['Pre-operative assessment', 'Biometry (IOL power calculation — A-scan ultrasound or optical coherence); retinal assessment; IOP check; general health assessment; medication review (tamsulosin — IFIS risk)'],
        ['Post-operative drops', 'Chloramphenicol antibiotic drops QDS for 2 weeks; dexamethasone or prednisolone steroid drops QDS tapering over 4–6 weeks; sometimes combined preparation (Maxitrol)'],
        ['Post-op restrictions', 'No driving until vision meets standard (usually 1–3 days to 2 weeks); avoid swimming 4 weeks; avoid strenuous activity/heavy lifting 2 weeks; eye shields at night for 1 week'],
        ['PCO (posterior capsule opacification)', 'Occurs in 20–50% within 2 years — capsule behind IOL thickens, causing gradual visual blurring; YAG laser capsulotomy (5-minute outpatient procedure) restores vision immediately'],
        ['Main complications', 'Endophthalmitis (rare, ~0.03% but devastating); posterior capsule rupture (most common intra-op, ~2%); corneal oedema; CMO (cystoid macular oedema); IFIS (see below)'],
      ],
    },

    { type: 'heading', level: 2, text: 'Intraocular Lens (IOL) Options' },

    {
      type: 'list',
      items: [
        'Monofocal IOL (standard NHS): corrects for one distance — usually optimised for distance vision; patient will need reading glasses post-op (this is normal and expected)',
        'Multifocal / EDOF IOL (extended depth of focus): reduces dependence on glasses for distance and near; not universally suitable — poor performance in low light; may have halos; available privately or in some NHS centres for selected patients',
        'Toric IOL: corrects co-existing corneal astigmatism at the time of cataract surgery; reduces residual spectacle dependence; standard at NHS centres for significant astigmatism',
        'Discuss patient expectations pre-operatively: glasses may still be needed, especially for reading (monofocal IOL); explain PCO risk and YAG availability; counsel re: glare and halo (worse initially, usually resolves)',
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Tamsulosin / Alpha-1 Blockers — IFIS Warning',
      items: [
        'Intraoperative Floppy Iris Syndrome (IFIS): tamsulosin (and other alpha-1 blockers — alfuzosin, silodosin, doxazosin) cause loss of iris dilator tone, resulting in iris prolapse during surgery',
        'Even if tamsulosin has been STOPPED before surgery, IFIS risk remains — the iris muscle does not recover',
        'CRITICAL: inform the ophthalmologist at pre-assessment that patient is or has been on an alpha-1 blocker — allows surgeon to use modified technique (smaller pupil dilators, iris hooks, specific viscoelastics)',
        'Do NOT routinely stop tamsulosin without specialist advice — stopping does not eliminate IFIS risk and causes urinary symptom recurrence',
        'Document tamsulosin use clearly in the referral letter to ophthalmology',
      ],
    },

    { type: 'heading', level: 2, text: 'Driving Standards (DVLA)' },

    {
      type: 'table',
      headers: ['Licence Type', 'Visual Standard', 'Action'],
      rows: [
        ['Group 1 (car/motorcycle)', 'Must read a number plate at 20 metres in good daylight (with correction if used); binocular visual acuity ≥6/12', 'If visual standard not met, must stop driving; inform DVLA if permanent impairment; may resume once VA meets standard post-operatively'],
        ['Group 2 (HGV/bus/lorry/PSV)', 'Each eye separately: ≥6/7.5 (corrected); binocular VA ≥6/9; no significant field defect', 'Higher standards — must inform DVLA; licence typically revoked if standards not met; reapply after successful cataract surgery'],
      ],
      caption: 'Patient must inform DVLA if their vision does not meet Group 1 driving standards. GP does not need to notify DVLA unless patient refuses to stop driving despite advice — then use GMC duty-to-disclose pathway.',
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Safety Netting',
      items: [
        'Painful red eye after cataract surgery: same-day emergency ophthalmology — possible endophthalmitis; vision-threatening emergency',
        'Sudden visual loss or visual field defect at any time: same-day ophthalmology to exclude CRVO, retinal detachment, or AACG',
        'Congenital cataract in a child (absent red reflex): urgent next-day paediatric ophthalmology — deprivation amblyopia develops rapidly; lens clarity critical for visual development',
        'Driving: advise patient clearly not to drive if vision falls below Group 1 standard',
        'Gradual visual deterioration in known cataract patient: reassure but ensure optical review every 1–2 years to monitor progression',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG77 — Cataracts in Adults', url: 'https://www.nice.org.uk/guidance/ng77' },
        { label: 'NICE CKS — Cataracts', url: 'https://cks.nice.org.uk/topics/cataracts/' },
        { label: 'Radiopaedia — Cataract Types', url: 'https://radiopaedia.org/articles/cataract' },
        { label: 'RNIB — Cataracts', url: 'https://www.rnib.org.uk/eye-health/eye-conditions/cataracts/' },
        { label: 'DVLA — Visual Disorders Guidance', url: 'https://www.gov.uk/guidance/visual-disorders-assessing-fitness-to-drive' },
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'Step 1: Optometrist — all suspected cataracts assessed by optometrist first (NHS sight test); optometrist initiates ophthalmology referral via local pathway',
        'NHS cataract surgery: UHDB Queen\'s Hospital Burton — primary ophthalmology referral; include IFIS risk (tamsulosin history) prominently in referral',
        'Alternative: Good Hope Hospital (UHB) ophthalmology or Walsall Manor Hospital eye unit',
        'Congenital cataracts in children: urgent referral to Birmingham Children\'s Hospital ophthalmology — within 24 hours if significant opacity or absent red reflex in a neonate',
        'RNIB helpline: 0303 123 9999 — sight loss support, daily living aids, rehabilitation',
      ],
    },
  ],
}
