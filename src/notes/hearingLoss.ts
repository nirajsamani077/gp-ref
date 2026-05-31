import type { Note } from '../data/notes'

export const hearingLoss: Note = {
  id: 'hearing-loss',
  title: 'Hearing Loss',
  subtitle: 'Sudden SNHL, 2WW criteria, CHL vs SNHL, Rinne/Weber, ear wax, Ménière\'s and referral pathways',
  tags: ['ent'],

  body: 'hearing loss SNHL sensorineural conductive CHL audiogram Rinne Weber tuning fork sudden SNHL acoustic neuroma vestibular schwannoma cholesteatoma otosclerosis Meniere tinnitus vertigo audiometry hearing aids wax irrigation microsuction ototoxic gentamicin cisplatin AIED autoimmune inner ear',

  content: [

    { type: 'heading', level: 2, text: 'Classification' },

    {
      type: 'table',
      headers: ['Type', 'Problem', 'Common Causes', 'Rinne / Weber'],
      rows: [
        ['Conductive hearing loss (CHL)', 'Impaired sound transmission through outer/middle ear', 'Ear wax impaction, otitis media with effusion (OME/glue ear), otosclerosis, perforated TM, ossicular disruption, cholesteatoma, OE', 'Rinne negative (BC > AC) in affected ear; Weber lateralises to AFFECTED ear'],
        ['Sensorineural hearing loss (SNHL)', 'Damage to cochlea or VIII nerve', 'Age-related (presbyacusis), acoustic neuroma (vestibular schwannoma), noise-induced, Ménière\'s disease, ototoxic drugs, viral (mumps, meningitis, COVID), autoimmune inner ear disease', 'Rinne positive (AC > BC) but reduced bilaterally; Weber lateralises to UNAFFECTED ear'],
        ['Mixed', 'Both components present', 'Chronic otitis media, otosclerosis with cochlear involvement', 'Variable'],
      ],
    },

    { type: 'heading', level: 2, text: 'History and Examination' },

    {
      type: 'list',
      items: [
        'Duration and onset: sudden (<3 days) vs gradual; bilateral vs unilateral — unilateral SNHL red flag for acoustic neuroma',
        'Associated symptoms: tinnitus (ringing, buzzing — unilateral = acoustic neuroma/Ménière\'s), vertigo (Ménière\'s, labyrinthitis, BPPV), otalgia (OE, OM, referred pain), discharge/otorrhoea (OM, OE, cholesteatoma)',
        'Ear symptoms suggesting cholesteatoma: offensive discharge, painless progressive CHL, history of recurrent OM/perforations',
        'Drug history: ototoxic medications — aminoglycosides (gentamicin — cochleotoxic + vestibulotoxic), loop diuretics (furosemide at high dose), platinum chemotherapy (cisplatin — irreversible SNHL), NSAIDs, quinine, vancomycin',
        'Occupational and noise exposure: prolonged loud noise (concerts, industrial, firearm) → high-frequency SNHL (4 kHz notch)',
        'Family history: otosclerosis (familial), hereditary sensorineural HL (Usher, Pendred, Alport syndromes)',
        'Systemic disease: autoimmune (SLE, RA, Wegener\'s/GPA — autoimmune inner ear disease), diabetes (auditory neuropathy)',
        'Otoscopy: wax impaction, TM perforation, retraction pockets (OME), cholesteatoma (white keratinous debris), erythema/fluid level (AOM)',
      ],
    },

    { type: 'heading', level: 2, text: 'Tuning Fork Tests (512 Hz)' },

    {
      type: 'table',
      headers: ['Test', 'Normal', 'CHL', 'SNHL'],
      rows: [
        ['Rinne test (AC vs BC in same ear)', 'Positive: AC > BC', 'Negative: BC > AC (or Rinne negative) in affected ear', 'Positive: AC > BC (but both reduced)'],
        ['Weber test (midline, which ear hears louder)', 'Midline (equal bilateral)', 'Lateralises to WORSE hearing (affected) ear', 'Lateralises to BETTER hearing (unaffected) ear'],
      ],
      caption: 'Rinne test: strike tuning fork, place on mastoid (BC), then hold near ear canal (AC). "Which is louder?" — normal = AC louder (Rinne positive). Weber test: place vibrating fork on vertex or forehead — ask "which side is louder?". Mnemonic: SNHL = sound lateralises AWAY from bad ear; CHL = sound lateralises TO bad ear.',
    },

    { type: 'heading', level: 2, text: 'Urgent and 2WW Referral' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Sudden Sensorineural Hearing Loss (SSNHL) — Same-Day ENT',
      items: [
        'Definition: ≥30 dB SNHL across 3 frequencies within 72 hours (or perceived as sudden by patient)',
        'Treat as EMERGENCY — same-day ENT referral; window for treatment is narrow (ideally within 24–48 hours, but up to 2–4 weeks)',
        'Exclude central cause urgently: MRI brain/IAMs (internal auditory meatus) to rule out acoustic neuroma, cerebrovascular event — stroke can present with acute SNHL',
        'ENT treatment: high-dose oral or intratympanic corticosteroids (prednisolone 1 mg/kg/day for 10–14 days) — improves recovery if given promptly',
        'If >30 days since onset: 2WW ENT rather than same-day (too late for steroid benefit)',
        'Causes: idiopathic (most common, ? viral), viral (herpes simplex, EBV), vascular, acoustic neuroma, autoimmune',
      ],
    },

    {
      type: 'table',
      headers: ['Clinical Scenario', 'Referral', 'Urgency'],
      rows: [
        ['Sudden SNHL <3 days onset', '2WW ENT', 'Same day — urgent'],
        ['Rapidly progressive SNHL over weeks', '2WW ENT', '2WW (acoustic neuroma, cholesteatoma, AIED)'],
        ['Unilateral SNHL (any speed)', '2WW or urgent ENT', 'Depends on speed; all unilateral SNHL needs ENT referral — acoustic neuroma must be excluded'],
        ['Pulsatile tinnitus', 'Urgent ENT ± vascular', 'Routine–urgent; vascular cause (glomus tumour, AVM, carotid disease, hypertension)'],
        ['Asymmetric tinnitus (one side)', 'ENT', 'Routine unless associated with SNHL or vertigo'],
        ['Fluctuating SNHL + vertigo + fullness + tinnitus', 'ENT (Ménière\'s)', 'Routine'],
        ['CHL with offensive discharge / retraction pocket / cholesteatoma', 'ENT', 'Urgent'],
        ['BPPV / simple vestibular neuronitis', 'Management in primary care — Epley manoeuvre; antiemetics short term', 'Routine if typical'],
      ],
    },

    { type: 'heading', level: 2, text: 'Ménière\'s Disease' },

    {
      type: 'list',
      items: [
        'Triad: episodic vertigo (20 min–24h), fluctuating low-frequency SNHL, tinnitus (roaring/low-frequency) ± aural fullness',
        'Caused by endolymphatic hydrops (excess fluid in inner ear); often idiopathic',
        'Usually unilateral — bilateral Ménière\'s in ~15%; consider autoimmune cause if bilateral',
        'Acute attack: prochlorperazine 12.5 mg IM / 3–6 mg buccal (Buccastem) or cinnarizine 15–30 mg',
        'Long-term: low-salt diet (<2 g/day sodium); avoid caffeine, alcohol; betahistine 16 mg TDS (evidence modest but commonly used; takes 3–6 months); refer ENT for formal diagnosis and management',
        'Advanced: intratympanic gentamicin (ablates vestibular function — increases SNHL risk), endolymphatic sac surgery, vestibular neurectomy — specialist only',
      ],
    },

    { type: 'heading', level: 2, text: 'Ear Wax Management' },

    {
      type: 'list',
      items: [
        'Ear wax is physiological — self-cleaning mechanism (epithelial migration); only treat if symptomatic (hearing loss, discomfort, tinnitus, or required for otoscopy/hearing aids)',
        'Softening (first line): olive oil (medical grade) or sodium bicarbonate drops or carbamide peroxide (Otex) — 2–3 drops TDS for 5 days; lie with affected ear up for 10 minutes after instillation; wax should migrate out spontaneously',
        'Irrigation (ear syringing): NOT recommended if: TM perforation, history of otitis media/surgery, cleft palate, single hearing ear, foreign body, mastoid surgery — risk of TM rupture and OE; use only approved irrigators with controlled pressure (not large syringes)',
        'Microsuction: specialist ENT/audiology; sucks wax under direct vision — safest and most effective; increasingly available via Specsavers ear care, private audiologists, GP extended services',
        'Do NOT use: cotton buds (impaction, TM injury), ear candles (no evidence, thermal injury risk), fingers',
      ],
    },

    { type: 'heading', level: 2, text: 'Age-Related Hearing Loss (Presbyacusis)' },

    {
      type: 'list',
      items: [
        'Most common cause of bilateral SNHL in adults — affects >50% of adults >65 years',
        'Progressive bilateral high-frequency SNHL — difficulty understanding speech, especially in background noise',
        'Audiogram: sloping loss, worst at high frequencies; symmetrical',
        'Management: hearing aids — NHS provision via audiology (GP referral for audiology assessment); NHS hearing aids are digital and free of charge; private options also available',
        'First-line referral: GP → directly to NHS audiology (or ENT if any atypical features — unilateral, rapid onset, vertigo, tinnitus)',
        'Hearing loops, captioned telephones, assistive technology — signpost to RNID (Royal National Institute for Deaf People)',
        'Screen elderly patients for hearing loss as part of annual health check — impacts cognition, depression, falls, and social isolation',
      ],
    },

  ],
}
