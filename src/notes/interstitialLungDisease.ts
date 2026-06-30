import type { Note } from '../data/notes'

export const interstitialLungDisease: Note = {
  id: 'interstitial-lung-disease',
  title: 'Interstitial Lung Disease (ILD)',
  subtitle: 'Progressive breathlessness + fine crackles, IPF vs causes, HRCT, antifibrotics and early referral',
  tags: ['respiratory'],

  body: `interstitial lung disease ILD pulmonary fibrosis IPF idiopathic pulmonary fibrosis UIP NSIP hypersensitivity pneumonitis connective tissue disease HRCT spirometry restrictive clubbing fine end-inspiratory crackles antifibrotic pirfenidone nintedanib lung transplant pulmonary rehabilitation LTOT occupational asbestos drug-induced`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CG163 — Idiopathic Pulmonary Fibrosis', url: 'https://www.nice.org.uk/guidance/cg163' },
        { label: 'NICE CKS — Breathlessness', url: 'https://cks.nice.org.uk/topics/breathlessness/' },
        { label: 'BTS — ILD Guidelines', url: 'https://www.brit-thoracic.org.uk/quality-improvement/guidelines/' },
        { label: 'Action for Pulmonary Fibrosis', url: 'https://www.actionpf.org/' },
      ],
    },

    { type: 'heading', level: 2, text: 'Overview' },

    {
      type: 'list',
      items: [
        'A heterogeneous group of disorders causing inflammation and/or fibrosis of the lung interstitium → progressive restrictive lung disease and impaired gas transfer',
        'Idiopathic pulmonary fibrosis (IPF) is the most common; it is progressive and carries a poor prognosis, but antifibrotic drugs can slow decline',
        'Key message for primary care: think ILD (or lung cancer) in any patient with breathlessness or cough that is not responding to usual treatment — and refer early',
      ],
    },

    { type: 'heading', level: 2, text: 'Clinical Features' },

    {
      type: 'callout',
      variant: 'info',
      title: 'History & Examination',
      items: [
        'History: progressive exertional breathlessness (over months), persistent dry cough, fatigue, weight loss',
        'Examination: finger clubbing, central cyanosis, and bilateral fine end-INSPIRATORY crackles (often described as "Velcro" crackles) at the lung bases',
        'Ask specifically about: occupational and environmental exposures (asbestos, coal/silica dust, birds/"bird fancier\'s lung", mould/farming), drug history, and connective tissue disease symptoms',
        'Look for features of an underlying connective tissue disease (Raynaud\'s, arthralgia, rash, sclerodactyly, dry eyes/mouth)',
      ],
    },

    { type: 'heading', level: 2, text: 'Causes & Classification' },

    {
      type: 'table',
      headers: ['Category', 'Examples'],
      rows: [
        ['Idiopathic', 'Idiopathic pulmonary fibrosis (IPF) — radiological/histological pattern usually UIP; non-specific interstitial pneumonia (NSIP)'],
        ['Connective tissue disease-associated', 'Rheumatoid arthritis, systemic sclerosis/scleroderma, SLE, polymyositis/dermatomyositis, Sjögren\'s; sarcoidosis'],
        ['Hypersensitivity pneumonitis', 'Inhaled organic antigens — birds (bird fancier\'s lung), mould (farmer\'s lung)'],
        ['Drug-induced', 'Amiodarone, methotrexate, nitrofurantoin, bleomycin, sulfasalazine ("BANS-Me" aide-mémoire); also radiotherapy'],
        ['Occupational / environmental (pneumoconioses)', 'Asbestosis, coal worker\'s pneumoconiosis, silicosis'],
      ],
    },

    { type: 'heading', level: 2, text: 'Investigations' },

    {
      type: 'list',
      items: [
        'Refer early with direct-access tests: chest X-ray and high-resolution CT (HRCT) — HRCT is central to diagnosis (UIP vs NSIP vs other patterns)',
        'Spirometry: a restrictive pattern (reduced FVC, FEV1/FVC ratio preserved or raised) with reduced gas transfer (DLCO/TLCO)',
        'Bloods including an autoimmune/connective-tissue screen: ANA, ENA, anti-CCP/RF, anti-dsDNA, complement, ESR/CRP; consider serum precipitins if hypersensitivity pneumonitis suspected',
        'Pulse oximetry (resting and on exertion) — desaturation on exertion is common',
        'Specialist: full pulmonary function tests, sometimes bronchoalveolar lavage or lung biopsy, and discussion at an ILD multidisciplinary team',
      ],
    },

    { type: 'heading', level: 2, text: 'Management' },

    {
      type: 'list',
      items: [
        'Specialist/ILD MDT-led; remove the cause where possible (stop the offending drug, antigen avoidance in hypersensitivity pneumonitis, occupational measures)',
        'Antifibrotics for IPF (and some progressive fibrosing ILDs): pirfenidone and nintedanib slow the decline in lung function — specialist-initiated, with monitoring (LFTs, GI side effects)',
        'Immunosuppression (corticosteroids ± steroid-sparing agents) is used in inflammatory/CTD-associated and hypersensitivity ILDs — but NOT in IPF (harmful in IPF)',
        'Supportive: pulmonary rehabilitation, smoking cessation, vaccination (flu, pneumococcal, COVID), treat reflux and comorbidities, ambulatory/long-term oxygen for hypoxia',
        'Lung transplantation for selected patients; early advance care planning given the prognosis of IPF',
        'Be alert: ILD increases the risk of lung cancer and acute exacerbations (sudden deterioration → urgent assessment)',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'sarcoidosis', label: 'Sarcoidosis', subtitle: 'Granulomatous cause of pulmonary fibrosis — overlapping presentation' },
        { id: 'inflammatory-arthritis', label: 'Inflammatory Arthritis', subtitle: 'RA and connective tissue disease-associated ILD; MTX pneumonitis' },
        { id: 'lung-cancer', label: 'Lung Cancer', subtitle: 'Consider in cough/breathlessness resistant to treatment; ILD raises risk' },
        { id: 'copd', label: 'COPD', subtitle: 'The other major chronic breathlessness diagnosis — different spirometry pattern' },
      ],
    },

  ],
}
