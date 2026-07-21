import type { Note } from '../data/notes'

export const systemicSclerosis: Note = {
  id: 'systemic-sclerosis',
  title: 'Systemic Sclerosis (Scleroderma) & CREST',
  subtitle: 'Limited (CREST) vs diffuse, autoantibodies, the renal-crisis danger and organ surveillance',
  tags: ['rheumatology'],

  body: `systemic sclerosis scleroderma morphoea CREST calcinosis Raynaud's oesophageal dysmotility sclerodactyly telangiectasia limited diffuse anticentromere Scl-70 topoisomerase RNA polymerase III ANA nailfold capillaroscopy interstitial lung disease pulmonary arterial hypertension renal crisis nifedipine iloprost`,

  content: [

    { type: 'heading', level: 2, text: 'Overview & Classification' },
    {
      type: 'para',
      text: 'Systemic sclerosis is a rare multisystem autoimmune connective-tissue disease defined by skin thickening (scleroderma), a vasculopathy (Raynaud\'s, digital ulcers, pulmonary and renal vascular disease) and fibrosis. The GP\'s role is to recognise it early — usually presenting as new Raynaud\'s with puffy/tightening hands in middle age — refer promptly, and remain alert to the organ complications that determine prognosis, above all scleroderma renal crisis.',
    },
    {
      type: 'table',
      headers: ['Subtype', 'Skin', 'Antibody', 'Key risks'],
      rows: [
        ['Localised (morphoea)', 'Skin plaques only, no internal organs', 'Usually antibody-negative', 'Cosmetic/functional (if over joints)'],
        ['Limited cutaneous (CREST)', 'Face and distal to elbows/knees', 'Anti-centromere', 'Pulmonary arterial hypertension (late)'],
        ['Diffuse cutaneous', 'Proximal limbs and trunk; rapid progression', 'Anti-Scl-70 (topoisomerase); anti-RNA polymerase III', 'Interstitial lung disease; renal crisis'],
      ],
      caption: 'CREST = Calcinosis, Raynaud\'s, oEsophageal dysmotility, Sclerodactyly, Telangiectasia. Abnormal nailfold capillaries on capillaroscopy are an early clue.',
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Think Systemic Sclerosis — Refer Rheumatology',
      items: [
        'New Raynaud\'s in middle age with puffy hands/feet, skin tightening, and fatigue → consider systemic sclerosis (do not dismiss as primary Raynaud\'s, which starts young and has normal nailfolds/antibodies).',
        'Send ANA, ENA (including centromere/Scl-70), inflammatory markers and urinalysis; refer to rheumatology.',
        'Early diagnosis matters — organ complications determine prognosis and some are preventable/treatable.',
      ],
    },

    { type: 'heading', level: 2, text: 'Organ Complications & Surveillance' },
    {
      type: 'callout',
      variant: 'danger',
      title: 'Scleroderma Renal Crisis — Emergency',
      items: [
        'Abrupt severe/malignant hypertension with acute kidney injury (± headache, visual disturbance, encephalopathy) — a rheumatological emergency treated with ACE inhibitors (which are the treatment even as renal function falls).',
        'Highest risk in EARLY DIFFUSE disease, anti-RNA-polymerase-III positive, and those on corticosteroids — CORTICOSTEROIDS can precipitate renal crisis, so use them cautiously and monitor BP/renal function.',
      ],
    },
    {
      type: 'table',
      headers: ['Organ', 'Problem', 'Monitoring'],
      rows: [
        ['Lung', 'Interstitial lung disease and pulmonary arterial hypertension — leading causes of death', 'Baseline and serial PFTs/HRCT; annual echo for PAH'],
        ['GI', 'Reflux, oesophageal dysmotility/strictures, small-bowel bacterial overgrowth, malabsorption', 'Symptom review; PPI; nutrition'],
        ['Heart', 'Myocardial fibrosis, arrhythmia, pericardial effusion', 'ECG/echo as indicated'],
        ['Kidney', 'Renal crisis (see above)', 'Regular BP and renal function'],
      ],
    },

    { type: 'heading', level: 2, text: 'Management (Specialist-Led)' },
    {
      type: 'list',
      items: [
        'No cure; treatment is organ-directed — immunosuppression (e.g. mycophenolate) for skin/lung disease and antifibrotics (nintedanib) for progressive ILD.',
        'Raynaud\'s/digital vasculopathy: keep the whole body warm, stop smoking, nifedipine first-line; specialist vasodilators (iloprost infusions, sildenafil, and endothelin antagonists e.g. bosentan for recurrent digital ulcers).',
        'Reflux/dysmotility: PPIs and prokinetics; rotating antibiotics for bacterial overgrowth; physiotherapy, hand therapy and emollients/skin care.',
        'Ensure BP and renal monitoring; use ACE inhibitors for hypertension/renal protection; signpost SRUK.',
      ],
    },

    { type: 'heading', level: 2, text: 'Patient Information Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Raynaud\'s Phenomenon', url: 'https://cks.nice.org.uk/topics/raynauds-phenomenon/' },
        { label: 'Scleroderma & Raynaud\'s UK (SRUK)', url: 'https://www.sruk.co.uk/' },
        { label: 'BSR — Systemic Sclerosis Guideline', url: 'https://www.rheumatology.org.uk/practice-quality/guidelines' },
        { label: 'NHS — Scleroderma', url: 'https://www.nhs.uk/conditions/scleroderma/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'raynauds', label: "Raynaud's Phenomenon", subtitle: 'The commonest presenting feature; primary vs secondary' },
        { id: 'sle-sjogrens', label: "SLE & Sjögren's", subtitle: 'Other connective tissue diseases in the differential' },
        { id: 'interstitial-lung-disease', label: 'Interstitial Lung Disease', subtitle: 'A leading cause of death in diffuse disease' },
        { id: 'inflammatory-arthritis', label: 'Inflammatory Arthritis', subtitle: 'Overlap and shared DMARD monitoring' },
        { id: 'gord-dyspepsia', label: 'GORD & Dyspepsia', subtitle: 'Oesophageal dysmotility and reflux management' },
      ],
    },

  ],
}
