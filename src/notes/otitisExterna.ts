import type { Note } from '../data/notes'

export const otitisExterna: Note = {
  id: 'otitis-externa',
  title: 'Otitis Externa (OE)',
  subtitle: 'Ear canal infection — diagnosis, ear drops prescribing guide & when to refer',
  tags: ['ent'],

  body: `Otitis externa OE outer ear infection ear canal otalgia earache itch pruritus otorrhoea discharge tragal tenderness narrowed canal conductive hearing loss CHL swimmer's ear eczema skin diabetes immunocompromised acetic acid EarCalm Otex Otomize dexamethasone neomycin generic aminoglycoside ciprofloxacin ciprodex Betnesol betamethasone prednesol clotrimazole antifungal pseudomonas malignant necrotising otitis externa microsuction ear wick ribbon gauze tympanic membrane perforation TM perf cholesteatoma CSOM chronic otitis media otorrhoea Notts APC Nottinghamshire prescribing self care keep ear dry`,

  content: [
    {
      type: 'heading',
      level: 2,
      text: 'Overview',
    },
    {
      type: 'para',
      text: 'Otitis externa is an infection and/or inflammation of the external auditory canal (EAC). It is one of the most common causes of ear discharge (otorrhoea) seen in primary care. Most cases are bacterial; fungal OE accounts for around 2% of cases. Swimmer\'s ear and hearing aid use are common precipitants.',
    },
    {
      type: 'table',
      headers: ['Feature', 'Detail'],
      rows: [
        ['Pain (otalgia)', 'Often severe and disproportionate; worsened by jaw movement or pulling the pinna'],
        ['Tragal tenderness', 'Key sign — pain on pressing the tragus or pulling the ear; distinguishes OE from AOM'],
        ['Itch (pruritus)', 'Often prominent, especially in eczematous or fungal OE'],
        ['Discharge', 'Clear, purulent, or cheesy white (fungal); may crust at the meatus'],
        ['Conductive hearing loss', 'If canal is swollen shut; often subtle'],
        ['Otoscopy', 'Swollen, erythematous, narrowed canal; debris; TM may be difficult or impossible to visualise'],
      ],
      caption: 'Clinical features of otitis externa',
    },
    {
      type: 'image',
      src: '/images/Otitis-externa1.jpg',
      alt: 'Video otoscopy images showing swollen ear canal, whitish discharge and fungal ear infection in otitis externa',
      caption: 'OE video otoscopy: swollen, erythematous canal (top left), whitish discharge in canal (top right), fungal OE with spores/hyphae (bottom left). Note: TM often not visible in OE.',
    },

    {
      type: 'heading',
      level: 2,
      text: 'Differential Diagnosis of Otorrhoea',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Always consider these before treating as simple OE',
      items: [
        'AOM with perforation — discharge follows pain + URTI; TM perforated; treat with ciprofloxacin drops (safe with perf)',
        'Chronic suppurative otitis media (CSOM) — chronic painless discharge through a central perforation; refer to ENT',
        'Cholesteatoma — attic crust, sensorineural hearing loss, CN VII involvement; patient looks well despite significant disease; refer urgently',
        'Foreign body — especially in children',
        'Fungal OE (~2%) — itchy, white/grey cheesy debris, hyphae or spores on otoscopy; consider if not responding to standard treatment',
        'Malignant (necrotising) OE — deep-seated pain, granulation tissue at bony-cartilaginous junction, in diabetics/immunocompromised; refer immediately',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Self-Care',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Advise all patients',
      items: [
        'Keep the ear dry — avoid swimming and submerging the ear until fully resolved',
        'When showering, plug the ear loosely with cotton wool lightly coated in Vaseline',
        'Do not insert cotton buds, fingers, or any objects into the ear canal — this worsens the condition',
        'Avoid hearing aids in the affected ear where possible while inflamed',
        'Analgesia — paracetamol and/or ibuprofen for pain; a cold flannel held over the ear may help',
        'If mild: acetic acid spray (EarCalm/Otex) is available OTC as first-line',
      ],
    },
    {
      type: 'image',
      src: '/images/1600px-Otitis_externa.jpg',
      alt: 'External ear showing eczematous otitis externa with peeling erythematous skin around the pinna',
      caption: 'Eczematous OE: erythema, skin breakdown and scaling around the pinna — treat with steroid drops (Betnesol) rather than antibiotic drops.',
    },
    {
      type: 'image',
      src: '/images/otitis-externa.jpg',
      alt: 'External ear showing acute otitis externa with inflammation and discharge',
      caption: 'Acute OE with visible erythema, periauricular inflammation and discharge at the meatus.',
    },

    {
      type: 'heading',
      level: 2,
      text: 'Ear Drop Prescribing Guide',
    },
    {
      type: 'para',
      text: 'Choice of ear drops depends on whether the tympanic membrane is intact, the likely cause (bacterial, fungal, inflammatory), and severity. Aminoglycosides (neomycin, gentamicin, framycetin) are contraindicated if the TM is perforated due to risk of ototoxicity.',
    },
    {
      type: 'table',
      headers: ['Scenario', 'First Choice', 'Dose', 'Duration', 'Notes'],
      rows: [
        [
          'Mild OE — TM intact',
          'Acetic acid 2% spray (EarCalm / Otex)',
          '1 spray TDS',
          '7 days',
          'OTC; mild antibacterial & antifungal; good for mild or recurrent OE prevention',
        ],
        [
          'Moderate infective OE — TM intact',
          'Dexamethasone/Neomycin/Acetic acid ear spray (generic Otomize)',
          '1 spray TDS',
          '7 days (extend to 14 if improving)',
          'Prescribe as GENERIC (see below). Contains aminoglycoside — do NOT use if TM perforated',
        ],
        [
          'Eczematous / inflammatory OE (no clear infection)',
          'Betamethasone 0.1% (Betnesol) or Prednisolone 0.5% (Prednesol) drops',
          '2–3 drops every 2–3 hours until relief, then reduce',
          'Until resolved',
          'Steroid only — no antibiotic; use when skin inflammation predominates',
        ],
        [
          'OE with confirmed or suspected TM perforation',
          'Ciprofloxacin 0.3% ear drops (Cetraxal / Ciloxan)',
          '0.25 ml (approx. 6 drops) BD',
          '7 days',
          'Only topical antibiotic safe to use with TM perforation; non-ototoxic',
        ],
        [
          'OE with TM perforation + inflammation',
          'Ciprofloxacin/Dexamethasone (CiproDex) ear drops',
          '4 drops QDS',
          '7 days',
          'Antibiotic + steroid; safe with perf; often initiated by specialist',
        ],
        [
          'Fungal OE (otomycosis)',
          'Clotrimazole 1% ear drops or solution',
          '2–3 drops TDS',
          '14 days',
          'Swab first if possible. Consider after standard treatment fails or if hyphae/spores seen. Acetic acid spray also has antifungal activity',
        ],
        [
          'Pseudomonal / resistant OE not responding after 14 days',
          'Ciprofloxacin drops + refer to ENT',
          '—',
          '—',
          'Oral antibiotics alone are insufficient for OE — refer if systemic features or not improving',
        ],
      ],
      caption: 'Ear drop selection guide — based on Nottinghamshire APC guidance',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Prescribing Generic Otomize (Dex/Neomycin/Acetic Acid Ear Spray)',
      items: [
        'Otomize is now available as a cost-effective generic — prescribe as: "Dexamethasone 0.1% w/w / Neomycin sulfate 0.5% w/w / Acetic acid 2% w/w ear spray" (5ml)',
        'Dose: 1 spray into the affected ear(s) three times daily',
        'Age restriction: licensed for children >2 years and adults',
        'CONTRAINDICATED if tympanic membrane is perforated — aminoglycoside (neomycin) is ototoxic',
        'Evidence suggests ototoxicity risk is mainly with prolonged use (>2 weeks) or repeated courses — single 7-day course considered low risk in practice if TM intact',
      ],
    },
    {
      type: 'image',
      src: '/images/e7932c4cf78bd2ca262c767bc6977a98607bcade-800x800.jpg',
      align: 'full',
      alt: 'Box of Ennogen Dexamethasone/Neomycin sulfate/Acetic acid ear spray — generic equivalent of Otomize',
      caption: 'Generic Otomize: Dexamethasone 0.1% / Neomycin sulfate 0.5% / Acetic acid 2% ear spray (Ennogen, 5ml). Prescribe generically for cost saving.',
    },
    {
      type: 'callout',
      variant: 'danger',
      title: 'Aminoglycoside Drops — Contraindicated with TM Perforation',
      items: [
        'Neomycin (in generic Otomize, Sofradex, Neo-Cortef) — AVOID with TM perf',
        'Gentamicin (Genticin HC) — AVOID with TM perf',
        'Framycetin (Sofradex — usually specialist use only) — AVOID with TM perf',
        'SAFE alternative with TM perforation: ciprofloxacin 0.3% drops (Cetraxal) or CiproDex',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Management Summary',
    },
    {
      type: 'table',
      headers: ['Step', 'Action'],
      rows: [
        ['All patients', 'Self-care: keep ear dry, analgesia, no cotton buds'],
        ['Mild OE', 'Acetic acid spray (EarCalm OTC) 1 spray TDS × 7 days'],
        ['Moderate/severe OE, TM intact', 'Generic dex/neomycin/acetic acid spray 1 spray TDS × 7 days'],
        ['No improvement at 7 days', 'Repeat further 7 days of drops; swab if not done; consider fungal OE'],
        ['No improvement at 14 days topical', 'Refer to ENT — do NOT start oral antibiotics alone; needs microsuction or ear wick'],
        ['Needs microsuction / canal blocked by debris', 'Refer ENT — drops cannot penetrate if canal blocked'],
        ['Malignant OE suspected', 'Urgent ENT referral same day — granulation tissue + diabetic/immunocompromised + severe pain'],
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Ear Wick (Ribbon Gauze)',
    },
    {
      type: 'para',
      text: 'When the canal is severely swollen and drops cannot reach the medial canal, an ear wick (ribbon gauze soaked in acetic acid or steroid drops) can be inserted to splint the canal open and deliver medication directly. This is typically performed in ENT but may be done by experienced GPs or nurses. The wick is replaced every 1–2 days until swelling subsides enough for drops to penetrate.',
    },

    {
      type: 'heading',
      level: 2,
      text: 'When to Refer to ENT',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Refer to ENT if any of:',
      items: [
        'No improvement after 14 days of appropriate topical treatment',
        'Canal completely stenosed — drops cannot reach the medial canal (needs microsuction)',
        'Dense debris requiring clearance (especially fungal OE)',
        'Suspected malignant (necrotising) OE — diabetic/immunocompromised with severe pain, granulation tissue, facial nerve involvement → urgent same-day ENT',
        'Suspected cholesteatoma or CSOM',
        'Pinna cellulitis requiring IV antibiotics',
      ],
    },
    {
      type: 'linkrow',
      links: [
        { label: '📄 Nottinghamshire APC — Otitis Externa (Acute & Chronic)', url: '/pdfs/otitis-externa-acute-and-chronic.pdf' },
      ],
    },
  ],
}
