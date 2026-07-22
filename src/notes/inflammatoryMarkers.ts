import type { Note } from '../data/notes'

export const inflammatoryMarkers: Note = {
  id: 'inflammatory-markers',
  title: 'Inflammatory Markers (CRP, ESR & PV)',
  subtitle: 'Interpreting them — and, crucially, when NOT to request them; the raised marker with no obvious cause',
  tags: ['haematology'],

  body: `inflammatory markers CRP C-reactive protein ESR erythrocyte sedimentation rate plasma viscosity PV acute phase response false positive false negative anaemia myeloma paraprotein GCA PMR temporal arteritis unexplained raised inflammatory marker overtesting`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'CRP, ESR and plasma viscosity are non-specific markers of the acute-phase response. Their biggest pitfall in primary care is over-requesting: a marker sent "to be safe", or as part of a panel, frequently returns mildly abnormal and triggers anxiety and a cascade of further tests. Requested with a specific clinical question, and interpreted in context, they are useful; requested as a screen, they mostly generate noise.',
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Request With a Question, Not as a Screen',
      items: [
        'Only request when you have a specific question — suspected GCA/PMR, monitoring known inflammatory disease, or assessing infection severity.',
        'Requesting more than one marker together rarely adds value; CRP is usually sufficient and responds fastest.',
        'A mildly raised marker in a well patient with no localising features usually warrants a repeat rather than an immediate cascade.',
      ],
    },

    { type: 'heading', level: 2, text: 'The Three Markers Compared' },
    {
      type: 'table',
      headers: ['Marker', 'Kinetics', 'Notes'],
      rows: [
        ['CRP', 'Rises within 6–8h, peaks ~48h, falls quickly as inflammation resolves', 'Best for acute infection/inflammation and monitoring response; unaffected by age/anaemia'],
        ['ESR', 'Rises and falls slowly (days–weeks)', 'Influenced by age, sex, anaemia, pregnancy and paraproteins; rough age-adjusted upper limit — men age/2, women (age+10)/2'],
        ['Plasma viscosity (PV)', 'Similar role to ESR but more stable', 'Less affected by anaemia; used interchangeably with ESR by some labs'],
      ],
    },

    { type: 'heading', level: 2, text: 'Pitfalls' },
    {
      type: 'list',
      items: [
        'A NORMAL CRP does not exclude serious disease — SLE, some indolent malignancies and localised infection can have a normal/mildly raised CRP.',
        'A very high ESR with a normal/near-normal CRP raises the possibility of a PARAPROTEINAEMIA (myeloma) → check serum protein electrophoresis and free light chains if clinically indicated.',
        'Chronic low-grade CRP elevation occurs with obesity, smoking and diabetes; ESR rises physiologically with age.',
        'Do not treat a number in isolation — always interpret in the clinical context.',
      ],
    },

    { type: 'heading', level: 2, text: 'The Unexplained Raised Marker' },
    {
      type: 'list',
      items: [
        'Found incidentally with no clear cause: repeat after ~1–3 months (many normalise) alongside a focused history and examination.',
        'If persistently raised, or the patient is unwell / has red flags, investigate the "serious three": infection, inflammation/autoimmune disease, and malignancy.',
        'A targeted, symptom-guided panel: FBC, U&E, LFT, calcium/bone profile, protein electrophoresis + free light chains, urinalysis, TFTs, and imaging as directed (± CXR).',
        'GCA is the can\'t-miss: new headache/visual/jaw symptoms over 50 with a raised ESR/CRP → START steroids immediately and refer (do NOT wait for the result).',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE — Inflammatory Markers (Guidance)', url: 'https://www.nice.org.uk/guidance/conditions-and-diseases/blood-and-immune-system-conditions' },
        { label: 'NICE CKS — Suspected Cancer Recognition', url: 'https://cks.nice.org.uk/topics/suspected-cancer-recognition-referral/' },
        { label: 'BMJ — Making Sense of Inflammatory Markers', url: 'https://www.bmj.com/' },
        { label: 'Lab Tests Online UK — CRP/ESR', url: 'https://www.labtestsonline.org.uk/' },
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
