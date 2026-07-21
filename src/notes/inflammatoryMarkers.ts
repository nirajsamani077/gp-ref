import type { Note } from '../data/notes'

export const inflammatoryMarkers: Note = {
  id: 'inflammatory-markers',
  title: 'Inflammatory Markers (CRP, ESR & PV)',
  subtitle: 'Interpreting and — crucially — when NOT to request them; the raised marker with no obvious cause',
  tags: ['haematology'],

  body: `inflammatory markers CRP C-reactive protein ESR erythrocyte sedimentation rate plasma viscosity PV acute phase response false positive false negative anaemia myeloma GCA PMR temporal arteritis unexplained raised inflammatory marker`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE — Inflammatory Markers (Diagnostics)', url: 'https://www.nice.org.uk/' },
        { label: 'BMJ — Using Inflammatory Markers Wisely', url: 'https://www.bmj.com/' },
        { label: 'NICE CKS — Suspected Cancer Recognition', url: 'https://cks.nice.org.uk/topics/suspected-cancer-recognition-referral/' },
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Request With a Question, Not as a Screen',
      items: [
        'Inflammatory markers are non-specific — a "routine" or panel test frequently produces mildly abnormal results that generate anxiety and cascades of further tests',
        'Only request when you have a specific clinical question (e.g. suspected GCA/PMR, monitoring a known inflammatory disease, assessing infection severity)',
        'Requesting more than one marker together rarely adds value; CRP is usually sufficient and responds fastest',
      ],
    },

    { type: 'heading', level: 2, text: 'The Three Markers Compared' },

    {
      type: 'table',
      headers: ['Marker', 'Kinetics', 'Notes'],
      rows: [
        ['CRP', 'Rises within 6–8h, peaks ~48h, falls quickly as inflammation resolves', 'Best for acute infection/inflammation and monitoring response; not affected by age/anaemia'],
        ['ESR', 'Rises and falls slowly (days–weeks)', 'Influenced by age, sex, anaemia, pregnancy, paraproteins; rough age-adjusted upper limit — men age/2, women (age+10)/2'],
        ['Plasma viscosity (PV)', 'Similar role to ESR, more stable', 'Less affected by anaemia; used interchangeably with ESR by some labs'],
      ],
    },

    { type: 'heading', level: 2, text: 'Pitfalls' },

    {
      type: 'list',
      items: [
        'A normal CRP does not exclude serious disease — some conditions (e.g. SLE, indolent malignancy) may have a normal or only mildly raised CRP',
        'A very high ESR with a normal/near-normal CRP raises the possibility of a paraproteinaemia (myeloma) — check protein electrophoresis if clinically indicated',
        'Obesity, smoking and diabetes cause chronic low-grade CRP elevation; ESR rises with age',
        'Do not treat a number — always interpret in the clinical context',
      ],
    },

    { type: 'heading', level: 2, text: 'The Unexplained Raised Marker' },

    {
      type: 'list',
      items: [
        'If found incidentally with no clear cause: repeat after ~1–3 months (many normalise spontaneously) and take a focused history/examination',
        'If persistently raised or the patient is unwell/has red flags, investigate for the "serious three": infection, inflammation/autoimmune disease, and malignancy',
        'Consider a targeted panel guided by symptoms: FBC, U&E, LFT, calcium, bone profile, protein electrophoresis, urinalysis, TFTs, and imaging as directed',
        'GCA is a can\'t-miss: new headache/visual symptoms over 50 with a raised ESR/CRP → start steroids immediately and refer (do not wait for the result)',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'gca', label: 'Giant Cell Arteritis', subtitle: 'Raised ESR/CRP with new headache — a sight-threatening emergency' },
        { id: 'pmr', label: 'Polymyalgia Rheumatica', subtitle: 'Raised markers with shoulder/hip girdle stiffness' },
        { id: 'haem-malignancies', label: 'Haematological Malignancies', subtitle: 'Very high ESR — consider myeloma' },
        { id: 'normocytic-anaemia', label: 'Normocytic Anaemia', subtitle: 'Anaemia of chronic disease accompanies raised markers' },
        { id: 'inflammatory-arthritis', label: 'Inflammatory Arthritis', subtitle: 'Markers used in diagnosis and monitoring' },
      ],
    },

  ],
}
