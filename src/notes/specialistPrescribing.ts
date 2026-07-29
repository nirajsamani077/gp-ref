import type { Note } from '../data/notes'

export const specialistPrescribing: Note = {
  id: 'specialist-prescribing',
  title: 'Niche Prescribing — Cannabis-Based Medicines, Nefopam & Long-Term Azithromycin',
  subtitle: 'Three less-common prescribing questions GPs field — what they are, who initiates them, and the cautions',
  tags: ['prescribing'],

  body: `cannabis-based medicinal products CBPM CBD epidyolex nabilone sativa specialist initiation nefopam non-opioid analgesic anticholinergic pink urine long-term azithromycin macrolide bronchiectasis COPD anti-inflammatory QT audiometry`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'A quick reference to three prescribing topics that come up occasionally and cause uncertainty. The common thread is knowing what the drug is for, who should INITIATE it (usually a specialist), and the specific cautions/monitoring — so that GPs can answer patient questions and manage shared care appropriately.',
    },

    { type: 'heading', level: 2, text: 'Cannabis-Based Medicinal Products (CBPMs)' },
    {
      type: 'list',
      items: [
        'Unlicensed CBPMs can only be INITIATED by a specialist (on the GMC specialist register) — not by GPs. NHS access is very limited and mostly restricted to a few conditions.',
        'Licensed cannabinoid medicines have specific niches: cannabidiol (Epidyolex) for certain severe childhood epilepsies (Dravet, Lennox-Gastaut) and tuberous sclerosis; nabiximols (Sativex) for MS spasticity; nabilone for chemotherapy-induced nausea.',
        'Over-the-counter "CBD" wellness products are food supplements — not medicines, unregulated in dose/quality, and not evidence-based for medical conditions; advise caution.',
        'The GP role is usually shared-care/monitoring under a specialist plan and managing expectations, not initiating.',
      ],
    },

    { type: 'heading', level: 2, text: 'Nefopam' },
    {
      type: 'callout',
      variant: 'info',
      title: 'A Non-Opioid Analgesic With Distinctive Cautions',
      items: [
        'A centrally-acting non-opioid analgesic occasionally used for moderate pain not responding to standard non-opioids, and as an opioid-sparing option.',
        'It has ANTICHOLINERGIC and sympathomimetic effects — avoid in the elderly, and in those with glaucoma, urinary retention/prostatism, or convulsive disorders; can cause nausea, dizziness, insomnia and palpitations.',
        'Warn patients it can turn the urine PINK (harmless). Avoid with MAOIs; caution with other anticholinergic/serotonergic drugs. Use is limited by its side-effect profile.',
      ],
    },

    { type: 'heading', level: 2, text: 'Long-Term (Prophylactic) Azithromycin' },
    {
      type: 'list',
      items: [
        'Low-dose azithromycin (typically three times a week) is used long-term for its anti-inflammatory/immunomodulatory effect (not as an acute antibiotic) in selected patients with frequent exacerbations — e.g. bronchiectasis, some COPD, and cystic fibrosis — usually SPECIALIST-initiated.',
        'Before starting: check LFTs, exclude non-tuberculous mycobacterial infection (send sputum — long-term monotherapy risks resistance), and do a baseline ECG.',
        'Cautions/monitoring: QT prolongation (avoid with other QT-prolonging drugs; check for palpitations/syncope), hepatotoxicity (monitor LFTs), hearing loss/tinnitus (ask about hearing — audiometry if concern), and antimicrobial resistance/GI upset.',
        'The GP role is usually monitoring and vigilance for adverse effects under the specialist plan.',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG144 — Cannabis-Based Medicinal Products', url: 'https://www.nice.org.uk/guidance/ng144' },
        { label: 'BNF — Nefopam / Azithromycin', url: 'https://bnf.nice.org.uk/' },
        { label: 'BTS — Bronchiectasis Guideline (Long-Term Macrolides)', url: 'https://www.brit-thoracic.org.uk/quality-improvement/guidelines/bronchiectasis-in-adults/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'bronchiectasis', label: 'Bronchiectasis', subtitle: 'Long-term azithromycin to reduce exacerbations' },
        { id: 'chronic-pain', label: 'Chronic Pain', subtitle: 'Where nefopam/CBPMs are sometimes considered' },
        { id: 'multiple-sclerosis', label: 'Multiple Sclerosis', subtitle: 'Nabiximols (Sativex) for spasticity' },
        { id: 'drug-monitoring', label: 'Drug Monitoring Quick Reference', subtitle: 'Shared-care monitoring principles' },
      ],
    },

  ],
}
