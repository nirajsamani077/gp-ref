import type { Note } from '../data/notes'

export const sarcoidosis: Note = {
  id: 'sarcoidosis',
  title: 'Sarcoidosis',
  subtitle: 'Multisystem non-caseating granulomas, bilateral hilar lymphadenopathy, Löfgren syndrome and monitoring',
  tags: ['respiratory'],

  body: `sarcoidosis non-caseating granuloma bilateral hilar lymphadenopathy BHL Lofgren syndrome erythema nodosum lupus pernio hypercalcaemia uveitis upper lobe fibrosis serum ACE HRCT corticosteroids fatigue multisystem pulmonary cardiac sarcoid neurosarcoidosis spontaneous remission`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Sarcoidosis', url: 'https://cks.nice.org.uk/topics/sarcoidosis/' },
        { label: 'BTS — Sarcoidosis Guideline', url: 'https://www.brit-thoracic.org.uk/quality-improvement/guidelines/' },
        { label: 'SarcoidosisUK', url: 'https://www.sarcoidosisuk.org/' },
      ],
    },

    { type: 'heading', level: 2, text: 'Overview' },

    {
      type: 'list',
      items: [
        'Multisystem inflammatory disorder characterised by non-caseating granulomas (no single pathognomonic feature — it is a diagnosis of exclusion supported by histology)',
        'Uncommon (~1/10,000 diagnosed per year); more common in younger adults and in people of African-Caribbean ancestry (who tend to have more severe disease)',
        '~50% are found incidentally on a chest X-ray (bilateral hilar lymphadenopathy in an asymptomatic patient)',
        'Course is variable — many remit spontaneously; a minority develop chronic progressive organ damage',
      ],
    },

    { type: 'heading', level: 2, text: 'Clinical Features by System' },

    {
      type: 'table',
      headers: ['System', 'Features'],
      rows: [
        ['Respiratory (most common)', 'Bilateral hilar lymphadenopathy (BHL), pulmonary infiltrates, upper-lobe fibrosis; dry cough, progressive breathlessness, chest discomfort'],
        ['Constitutional', 'Fatigue (often dominant and disabling), fever, weight loss, malaise; raised CRP/ESR'],
        ['Skin', 'Erythema nodosum (tender shin nodules — good prognosis), lupus pernio (violaceous nodules/plaques on nose and cheeks — chronic disease), other papules/plaques and scar infiltration'],
        ['Eyes', 'Anterior/posterior uveitis, keratoconjunctivitis sicca — refer ophthalmology; can threaten sight'],
        ['Metabolic', 'Hypercalcaemia (granulomas overproduce 1,25-dihydroxyvitamin D) and hypercalciuria → renal stones'],
        ['Other (less common, important)', 'Hepatosplenomegaly/deranged LFTs, lymphadenopathy, cardiac sarcoid (arrhythmia, heart block, cardiomyopathy — can be fatal), neurosarcoidosis (cranial nerve palsies, especially facial), parotid enlargement, arthralgia'],
      ],
    },

    {
      type: 'callout',
      variant: 'info',
      title: 'Löfgren Syndrome — A Favourable Acute Presentation',
      items: [
        'Triad of: bilateral hilar lymphadenopathy + erythema nodosum + arthralgia (often ankles), usually with fever',
        'An acute presentation that carries an excellent prognosis — most resolve spontaneously',
        'Often does not require biopsy when the presentation is classical',
      ],
    },

    { type: 'heading', level: 2, text: 'Investigations' },

    {
      type: 'list',
      items: [
        'Bloods: FBC, U&E, CRP/ESR, LFTs, bone profile (CALCIUM — hypercalcaemia is important), and immunoglobulins (often polyclonal rise)',
        'Do NOT rely on serum ACE for diagnosis — it is neither sensitive nor specific; it is sometimes used by specialists to monitor disease activity, not to diagnose',
        'Chest X-ray (staged 0–IV: from normal, to BHL, to BHL + infiltrates, to infiltrates alone, to fibrosis) and HRCT chest',
        'Specialist investigations: spirometry (restrictive pattern ± reduced gas transfer), tissue biopsy (showing non-caseating granulomas — e.g. bronchoscopic/EBUS-TBNA, skin, or lymph node), ECG/echo (cardiac sarcoid), eye assessment',
        'Always exclude TB and lymphoma (key mimics of BHL) before attributing to sarcoidosis',
        '24-hour urinary calcium if hypercalcaemia/stones',
      ],
    },

    { type: 'heading', level: 2, text: 'Management & Prognosis' },

    {
      type: 'list',
      items: [
        'Many patients need no treatment — ~50% remit spontaneously, especially Löfgren syndrome and isolated BHL; monitor with symptoms, lung function, imaging, calcium',
        'Indications for systemic corticosteroids: significant or progressive pulmonary disease, hypercalcaemia, cardiac or neurological involvement, sight-threatening eye disease, or other organ-threatening disease',
        'Typical regimen: oral prednisolone (specialist-guided), with steroid-sparing agents (methotrexate, azathioprine) or biologics (anti-TNF) for refractory/chronic disease',
        'Bone protection and gastroprotection if on long-term steroids; monitor for steroid side effects',
        'Symptomatic: erythema nodosum and arthralgia → NSAIDs; treat hypercalcaemia (hydration, reduce vitamin D/sunlight, steroids)',
        'Vitamin D supplementation needs caution — can worsen hypercalcaemia; check calcium first',
        'Overall good prognosis in most; chronic fibrotic pulmonary disease, cardiac and neurosarcoidosis carry higher morbidity; signpost SarcoidosisUK',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'interstitial-lung-disease', label: 'Interstitial Lung Disease', subtitle: 'Pulmonary fibrosis — overlapping presentation and a sarcoid sequela' },
        { id: 'hypercalcaemia', label: 'Hypercalcaemia', subtitle: 'Granulomatous hypercalcaemia — a non-PTH-driven cause' },
        { id: 'tuberculosis', label: 'Tuberculosis', subtitle: 'Key mimic of BHL — always exclude before diagnosing sarcoid' },
        { id: 'abnormal-lft', label: 'Abnormal LFTs', subtitle: 'Hepatic involvement and granulomatous liver disease' },
      ],
    },

  ],
}
