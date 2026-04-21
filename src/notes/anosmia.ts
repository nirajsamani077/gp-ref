import type { Note } from '../data/notes'

export const anosmia: Note = {
  id: 'anosmia',
  title: 'Anosmia',
  subtitle: 'Loss of smell — causes, olfactory training, nasal steroids, and when to refer',
  tags: ['ent'],

  body: 'anosmia hyposmia loss of smell olfaction post-COVID post-viral sensorineural olfactory training AbScent Fifth Sense nasal steroids INCS parosmia phantosmia taste flavour retronasal olfactory bulb turbinate ENT referral 2WW MRI stroke Parkinson Alzheimer Kallmann space occupying lesion epistaxis otalgia neck lump postnasal space',

  content: [

    {
      type: 'callout',
      variant: 'info',
      title: 'Overview',
      items: [
        'Anosmia = complete loss of smell; hyposmia = reduced smell; parosmia = distorted smell (common after post-viral anosmia)',
        'Loss of "taste" is often actually loss of flavour perception — retronasal olfaction (smell travelling up from the mouth) accounts for most of what we perceive as taste; true taste (sweet/sour/salt/bitter/umami) is rarely affected',
        'Most common cause in primary care: post-viral (COVID-19, influenza, other URTI) — sensorineural loss from damage to olfactory epithelium',
        'Other causes: nasal/sinonasal disease (polyps, rhinosinusitis, turbinate hypertrophy), head trauma, medications, neurodegenerative disease, congenital (Kallmann syndrome)',
        'Most post-viral anosmia resolves spontaneously within weeks to months; olfactory training improves recovery rates',
      ],
    },

    {
      type: 'image',
      src: '/images/anosmia-anatomy.webp',
      alt: 'Anatomy of olfaction: frontal view showing olfactory mucosa on superior nasal septum and olfactory bulbs; lateral view showing distribution of olfactory mucosa on lateral wall, with superior, middle, and inferior turbinates, and the olfactory bulb above',
      caption: 'Olfactory anatomy. Olfactory receptor neurons in the superior nasal mucosa (superior septum and superior turbinate) transmit signals to the olfactory bulb. Post-viral damage occurs at this epithelial level. Nasal obstruction from lower turbinate swelling or polyps can cause conductive anosmia.',
    },

    { type: 'heading', level: 2, text: 'Causes' },

    {
      type: 'table',
      headers: ['Category', 'Causes', 'Notes'],
      rows: [
        ['Post-viral (sensorineural)', 'COVID-19, influenza, rhinovirus, other URTI', 'Most common. Damage to olfactory neuroepithelium. Parosmia common during recovery. Usually improves — olfactory training recommended.'],
        ['Sinonasal / conductive', 'Nasal polyps, chronic rhinosinusitis, allergic rhinitis, turbinate hypertrophy, structural deviation', 'Often associated with nasal blockage/congestion. Treat underlying cause — INCS, saline rinse; refer ENT if persistent.'],
        ['Head trauma', 'Shearing injury to olfactory nerves at cribriform plate', 'Often persistent. Refer ENT/neurology.'],
        ['Neurodegenerative', 'Parkinson\'s disease, Alzheimer\'s disease, Lewy body dementia', 'Anosmia can precede motor/cognitive symptoms by years. Consider if new unexplained anosmia in older patient.'],
        ['Medications', 'Intranasal zinc, ACE inhibitors, methotrexate, some antivirals, heavy metals (occupational)', 'Review medication list. Nasal zinc sprays (not recommended in UK) well-documented cause.'],
        ['Congenital', 'Kallmann syndrome (hypogonadotrophic hypogonadism + anosmia)', 'Rare. Consider if anosmia from birth with delayed puberty/hypogonadism. Refer endocrinology.'],
        ['Intracranial / malignant', 'Olfactory groove meningioma, anterior skull base tumour, cribriform plate lesion', 'Red flag — new anosmia with neurological symptoms warrants MRI.'],
      ],
      caption: 'Causes of anosmia by category. Post-viral (especially COVID-19) and sinonasal disease are by far the most common in primary care.',
    },

    { type: 'heading', level: 2, text: 'Assessment' },

    {
      type: 'list',
      items: [
        'Onset: sudden (post-viral, trauma) vs gradual (sinonasal disease, neurodegenerative)',
        'Unilateral vs bilateral — unilateral anosmia is more concerning for structural cause',
        'Associated nasal symptoms: blockage, congestion, discharge, rhinorrhoea, facial pain → sinonasal cause likely',
        'Associated neurological symptoms: headache, visual changes, personality change, cognitive decline, motor symptoms → urgent/semi-urgent investigation',
        'COVID-19 or recent URTI history → post-viral most likely',
        'Parosmia (distorted/unpleasant smells) — common during recovery from post-viral anosmia; reassure but olfactory training still helpful',
        'Drug history — ACE inhibitors, nasal preparations',
        'Occupation — chemical/solvent/heavy metal exposure',
        'No examination findings needed to make diagnosis in typical post-viral presentation; consider nasal examination if sinonasal disease suspected',
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Red flags — act urgently',
      items: [
        'New anosmia + new neurological symptoms (headache, visual disturbance, limb weakness, facial droop) → same-day referral; ?stroke, ?intracranial lesion',
        'Unilateral anosmia + nasal obstruction + epistaxis + otalgia + neck lump → 2WW referral for ?postnasal space tumour / skull base malignancy',
        'Progressive anosmia + cognitive decline / personality change / motor symptoms → consider space-occupying lesion, Parkinson\'s, Alzheimer\'s — arrange MRI and appropriate referral',
        'Anosmia following head trauma — especially if bilateral, persistent, or with CSF rhinorrhoea',
      ],
    },

    { type: 'heading', level: 2, text: 'Management' },

    { type: 'heading', level: 3, text: 'Post-Viral Anosmia (Including Post-COVID)' },

    {
      type: 'callout',
      variant: 'tip',
      title: 'Olfactory training — recommended for all',
      items: [
        'Olfactory training is RECOMMENDED for all patients with loss of smell >2 weeks — improves recovery rates and shortens duration',
        'Involves sniffing 4 distinct scents (classically: rose, lemon, eucalyptus, cloves) twice daily for at least 3–4 months',
        'Mechanism: promotes neuroplasticity and regeneration of olfactory receptor neurons',
        'Kits and detailed instructions available free from AbScent (abscent.org) and Fifth Sense (fifthsense.org.uk)',
        'Advise patient to concentrate actively during each sniff — mindful engagement improves outcomes',
        'Safe, low-risk, can be started immediately',
      ],
    },

    {
      type: 'list',
      items: [
        'Reassure: most post-viral anosmia improves spontaneously — median recovery ~4–5 weeks for COVID-19, though some take months',
        'Oral corticosteroids (OCS) — OPTIONAL; only if no active COVID-19 symptoms or after full resolution; short course only; evidence is weak',
        'Omega-3 supplements — OPTIONAL; some evidence for benefit; may be offered after COVID-19 resolution',
        'Do NOT prescribe INCS for isolated post-viral anosmia without nasal congestion — no evidence of benefit for sensorineural loss',
        'Parosmia: common and distressing; reassure it is a sign of nerve regeneration and usually resolves; olfactory training continues to help',
        'If no improvement after 12 weeks post-COVID (or 6 weeks if not post-COVID) → refer to ENT',
      ],
    },

    { type: 'heading', level: 3, text: 'Sinonasal Anosmia (With Nasal Symptoms)' },

    {
      type: 'list',
      items: [
        'Intranasal corticosteroid spray (INCS) — first-line; use as drops or rinse formulation if possible as these reach the superior nasal cavity where olfactory epithelium is located (e.g. Nasonex drops, betamethasone drops)',
        'Saline nasal rinse (e.g. Sterimar, BBNR) — useful adjunct to clear mucus and improve steroid penetration',
        'If symptoms persist >4–6 weeks despite INCS → refer ENT; endoscopy to guide further management',
        'ENT referral recommended for suspected nasal polyps, chronic rhinosinusitis not responding to treatment',
        'Topical steroid drops or rinses are OPTIONAL in addition to sprays for more severe or refractory cases',
      ],
    },

    {
      type: 'image',
      src: '/images/anosmia-covid-pathway.jpg',
      alt: 'COVID-19 anosmia management pathway: For all patients — establish COVID status, offer advice sheet, direct to AbScent and Fifth Sense, olfactory training recommended if >2 weeks. Check for additional neurological symptoms — if positive, MRI brain recommended. Check for nasal symptoms (blockage/congestion) — if positive: check duration >4–6 weeks; if short-duration recommend INCS; if >4–6 weeks recommend ENT referral. If no nasal symptoms: check for other COVID symptoms; if no COVID symptoms OCS and omega-3 are optional; check duration of anosmia >4–6 weeks; if >4–6 weeks refer for ENT assessment with possible MRI.',
      caption: 'ENT UK / British Rhinological Society pathway for managing anosmia (including post-COVID). Key decision points: neurological symptoms → MRI; nasal obstruction → INCS ± ENT; duration >4–6 weeks without nasal symptoms → ENT referral.',
    },

    { type: 'heading', level: 2, text: 'Referral Summary' },

    {
      type: 'table',
      headers: ['Situation', 'Action'],
      rows: [
        ['New anosmia + neurological symptoms', 'Same-day assessment — ?stroke, ?intracranial lesion; MRI brain recommended'],
        ['Unilateral anosmia + nasal obstruction/epistaxis/otalgia/neck lump', '2WW referral — ?postnasal space tumour / skull base malignancy'],
        ['Post-viral anosmia, no improvement at 12 weeks (COVID) or 6 weeks (non-COVID)', 'Refer ENT'],
        ['Sinonasal anosmia + nasal blockage, failing INCS at 4–6 weeks', 'Refer ENT — endoscopy to guide further management'],
        ['Long-standing anosmia + cognitive/motor symptoms', 'Consider neurodegenerative cause — MRI, refer neurology if appropriate'],
        ['Suspected Kallmann syndrome', 'Refer endocrinology'],
      ],
      caption: 'Anosmia referral pathways. Most post-viral cases managed in primary care with olfactory training; refer if not improving or red flags present.',
    },

    {
      type: 'linkrow',
      links: [
        { label: 'BNSSG Remedy — Anosmia', url: 'https://remedy.bnssg.icb.nhs.uk/adults/ent/anosmia/' },
        { label: 'AbScent — Olfactory Training', url: 'https://abscent.org' },
        { label: 'Fifth Sense — Smell & Taste Disorders', url: 'https://www.fifthsense.org.uk' },
        { label: 'NICE CKS — Anosmia', url: 'https://cks.nice.org.uk/topics/anosmia/' },
        { label: 'ENT UK — Anosmia Guidance', url: 'https://www.entuk.org/anosmia' },
      ],
    },

  ],
}
