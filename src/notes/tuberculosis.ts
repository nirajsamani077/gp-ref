import type { Note } from '../data/notes'

export const tuberculosis: Note = {
  id: 'tuberculosis',
  title: 'Tuberculosis (TB)',
  subtitle: 'Active vs latent TB, RIPE therapy, contact tracing, IGRA/Mantoux and BCG',
  tags: ['infectious', 'respiratory'],

  body: `tuberculosis TB mycobacterium pulmonary extrapulmonary latent active RIPE rifampicin isoniazid pyrazinamide ethambutol directly observed therapy DOT sputum AFB acid fast bacilli CXR Mantoux tuberculin IGRA interferon gamma release assay BCG vaccination contact tracing notifiable PHE erythema nodosum lupus vulgaris miliary multidrug resistant MDR-TB pyridoxine HIV night sweats weight loss haemoptysis`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG33 — Tuberculosis', url: 'https://www.nice.org.uk/guidance/ng33' },
        { label: 'NICE CKS — Tuberculosis', url: 'https://cks.nice.org.uk/topics/tuberculosis/' },
        { label: 'Green Book Ch.32 — TB / BCG', url: 'https://www.gov.uk/government/publications/tuberculosis-the-green-book-chapter-32' },
      ],
    },

    { type: 'heading', level: 2, text: 'When to Consider TB' },

    {
      type: 'callout',
      variant: 'info',
      title: 'High-Risk Groups + Active Features',
      items: [
        'High-risk groups: previous TB, close contact of active TB, born in or extensive travel to a high-prevalence country (sub-Saharan Africa, South/East Asia, Eastern Europe), immunocompromised (HIV, anti-TNF biologics, transplant, chemotherapy), homeless, prison, alcohol/drug dependence, malnutrition',
        'Active pulmonary TB: chronic cough (>3 weeks), purulent or blood-stained sputum (haemoptysis), with constitutional "B symptoms" — fever, drenching night sweats, weight loss, anorexia, malaise',
        'Always ask about TB risk factors in anyone with a chronic cough and weight loss',
      ],
    },

    { type: 'heading', level: 2, text: 'Extrapulmonary TB' },

    {
      type: 'table',
      headers: ['Site', 'Features'],
      rows: [
        ['Lymph node (most common extrapulmonary)', 'Painless cervical/supraclavicular lymphadenopathy ("scrofula"), may discharge'],
        ['Skeletal', 'Bone/joint pain; Pott\'s disease = spinal TB (back pain, deformity, cord compression)'],
        ['Skin', 'Erythema nodosum, lupus vulgaris (reddish-brown facial plaques)'],
        ['Pericardial', 'Breathlessness, chest pain, effusion, constrictive pericarditis'],
        ['CNS', 'TB meningitis — headache, confusion, cranial nerve palsies; high mortality'],
        ['Miliary / disseminated', 'Widespread haematogenous spread; very unwell; "millet seed" appearance on CXR'],
      ],
      caption: 'Extrapulmonary and disseminated TB are more common in HIV-positive and immunocompromised patients.',
    },

    { type: 'heading', level: 2, text: 'Suspected Active TB — Action' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'If Active TB Suspected',
      items: [
        'Discuss with the local TB/respiratory/infectious diseases service; advise respiratory isolation; admit if unwell or significant infection risk',
        'Investigations: 3 early-morning sputum samples for acid-fast bacilli (AFB smear + culture + PCR/NAAT) and a chest X-ray',
        'TB is a NOTIFIABLE disease — notify local health protection team (UKHSA/PHE)',
        'HIV test should be offered to all patients with TB',
      ],
    },

    { type: 'heading', level: 2, text: 'Treatment of Active TB — RIPE' },

    {
      type: 'table',
      headers: ['Phase', 'Drugs', 'Duration'],
      rows: [
        ['Initial (intensive)', 'Rifampicin + Isoniazid + Pyrazinamide + Ethambutol (RIPE)', '2 months'],
        ['Continuation', 'Rifampicin + Isoniazid (RI)', 'A further 4 months (longer for CNS/bone TB — often 12 months)'],
      ],
      caption: 'Standard regimen = 6 months total. Treatment is specialist-led. Directly Observed Therapy (DOT) is offered to those at risk of non-adherence. Co-prescribe pyridoxine (vitamin B6) with isoniazid to prevent peripheral neuropathy.',
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Key Drug Side Effects (RIPE)',
      items: [
        'Rifampicin: orange/red discolouration of urine, tears and other secretions (warn re: soft contact lenses); potent CYP450 enzyme INDUCER (reduces efficacy of COCP, warfarin, DOACs, many drugs); hepatotoxicity',
        'Isoniazid: peripheral neuropathy (give pyridoxine); hepatotoxicity',
        'Pyrazinamide: hepatotoxicity; hyperuricaemia/gout; arthralgia',
        'Ethambutol: optic neuritis — check visual acuity and colour vision at baseline; warn to report visual changes',
        'Check baseline LFTs and visual acuity before treatment; monitor for drug-induced hepatitis',
        'Drug-resistant / MDR-TB requires specialist multidrug regimens and prolonged treatment',
      ],
    },

    { type: 'heading', level: 2, text: 'Latent TB' },

    {
      type: 'list',
      items: [
        'Latent TB = infection without active disease; asymptomatic; not infectious; risk of reactivation later (especially if immunosuppressed)',
        'Screen: household contacts of active cases, new entrants from high-prevalence countries, and before starting immunosuppression (e.g. anti-TNF biologics)',
        'Test: Mantoux (tuberculin skin test) or IGRA (interferon-gamma release assay) per Green Book criteria',
        'In BCG-vaccinated individuals the Mantoux is unreliable (false positives) — IGRA is preferred as it is not affected by prior BCG',
        'Before treating latent TB, exclude active disease (symptoms, sputum, CXR)',
        'Treatment of latent TB: e.g. 3 months of isoniazid (with pyridoxine) + rifampicin, or 6 months of isoniazid — specialist-guided',
      ],
    },

    { type: 'heading', level: 2, text: 'Contact Tracing & BCG' },

    {
      type: 'list',
      items: [
        'Contact tracing is coordinated by the TB service / health protection team — at minimum, household and other close contacts are screened',
        'BCG vaccination (live) — offered to: neonates with a parent or grandparent born in a high-incidence country (≥40/100,000) or living in a high-incidence area; previously unvaccinated children/new entrants from high-incidence countries (Mantoux-negative, aged <16, sometimes <35); and at-risk healthcare workers, prison/homeless-sector contacts',
        'BCG is generally not effective if given after age 35',
        'Check prior BCG status; if unclear, Mantoux test first and give BCG if negative (and within the eligible age range) — refer to the Green Book',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'hiv', label: 'HIV', subtitle: 'TB is a major HIV co-infection; offer HIV test to all TB patients' },
        { id: 'lung-cancer', label: 'Lung Cancer', subtitle: 'Overlapping presentation — chronic cough, haemoptysis, weight loss' },
        { id: 'notifiable-diseases', label: 'Notifiable Diseases', subtitle: 'TB notification duties and the UKHSA process' },
        { id: 'dmards', label: 'DMARDs', subtitle: 'Screen for latent TB before anti-TNF biologics' },
      ],
    },

  ],
}
