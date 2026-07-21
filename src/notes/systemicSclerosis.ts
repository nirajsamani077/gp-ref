import type { Note } from '../data/notes'

export const systemicSclerosis: Note = {
  id: 'systemic-sclerosis',
  title: 'Systemic Sclerosis (Scleroderma) & CREST',
  subtitle: 'Limited (CREST) vs diffuse, autoantibodies, the renal-crisis danger and urgent referral',
  tags: ['rheumatology'],

  body: `systemic sclerosis scleroderma morphoea CREST calcinosis Raynaud's oesophageal dysmotility sclerodactyly telangiectasia limited diffuse anticentromere Scl-70 nailfold capillaroscopy interstitial lung disease pulmonary hypertension renal crisis`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Raynaud\'s / Scleroderma', url: 'https://cks.nice.org.uk/topics/raynauds-phenomenon/' },
        { label: 'Scleroderma & Raynaud\'s UK (SRUK)', url: 'https://www.sruk.co.uk/' },
        { label: 'BSR — Systemic Sclerosis Guideline', url: 'https://www.rheumatology.org.uk/practice-quality/guidelines' },
      ],
    },

    { type: 'heading', level: 2, text: 'Overview & Classification' },

    {
      type: 'list',
      items: [
        'A rare multisystem autoimmune connective tissue disease characterised by skin thickening (scleroderma), vasculopathy and fibrosis',
        'Localised scleroderma = morphoea (skin only). Systemic sclerosis is either LIMITED (formerly CREST) or DIFFUSE (more extensive skin + higher risk of internal organ involvement)',
        'CREST features: Calcinosis, Raynaud\'s phenomenon, oEsophageal dysmotility, Sclerodactyly, Telangiectasia',
        'Abnormal nailfold capillaries on dermoscopy/capillaroscopy are an early clue',
        'Antibodies: anti-centromere (limited/CREST), anti-Scl-70/topoisomerase (diffuse), anti-RNA polymerase III (diffuse, renal crisis risk) — most are ANA-positive',
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Think Systemic Sclerosis — Refer Rheumatology Urgently',
      items: [
        'New Raynaud\'s in middle age with puffy hands/feet, skin tightening, and fatigue → consider systemic sclerosis (do not dismiss as primary Raynaud\'s)',
        'Send autoantibodies (ANA, ENA including centromere/Scl-70), inflammatory markers, and urinalysis; refer to rheumatology',
        'Early diagnosis matters — organ complications determine prognosis',
      ],
    },

    { type: 'heading', level: 2, text: 'Complications (Diffuse Disease)' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Scleroderma Renal Crisis — Emergency',
      items: [
        'Abrupt severe (often malignant) hypertension with acute kidney injury — a rheumatological emergency treated with ACE inhibitors; higher risk in early diffuse disease and on corticosteroids',
        'Other organ involvement: interstitial lung disease and pulmonary arterial hypertension (leading causes of death), cardiac fibrosis/heart failure, oesophageal dysmotility with reflux, and small-bowel bacterial overgrowth',
        'Monitor BP, renal function, lung function and echo (for pulmonary hypertension) under specialist care',
      ],
    },

    { type: 'heading', level: 2, text: 'Management (Specialist)' },

    {
      type: 'list',
      items: [
        'No cure; organ-directed treatment — immunosuppression/biologics for skin and lung disease; antifibrotics for progressive ILD',
        'Raynaud\'s: keep the whole body warm, stop smoking, calcium-channel blockers (nifedipine), and specialist vasodilators (e.g. iloprost, sildenafil, bosentan for digital ulcers)',
        'Reflux/dysmotility: PPIs, prokinetics; ACE inhibitors for hypertension/renal protection; physiotherapy and skin care',
        'Signpost SRUK',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'raynauds', label: "Raynaud's Phenomenon", subtitle: 'The commonest presenting feature; primary vs secondary' },
        { id: 'sle-sjogrens', label: "SLE & Sjögren's", subtitle: 'Other connective tissue diseases in the differential' },
        { id: 'interstitial-lung-disease', label: 'Interstitial Lung Disease', subtitle: 'A leading cause of death in diffuse disease' },
        { id: 'inflammatory-arthritis', label: 'Inflammatory Arthritis', subtitle: 'Overlap and shared DMARD monitoring' },
      ],
    },

  ],
}
