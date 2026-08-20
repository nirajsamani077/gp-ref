/**
 * High-confidence links from a clinical note → the matching UHDB shared-care
 * result/abnormality protocol (opens the PDF in the Forms tab).
 *
 * Centralised here so the note files stay untouched; NotesTab appends a
 * "Local UHDB shared-care protocol" link block when a note id appears below.
 * Keys are note ids; values are shared-care doc ids (see src/data/sharedCare.ts).
 */
export const NOTE_SHARED_CARE: Record<string, { id: string; label: string }[]> = {
  'abnormal-lft':          [{ id: 'uhdb-abnormal-lfts-adults', label: 'Abnormal LFTs (adults)' }],
  'ckd':                   [{ id: 'uhdb-ckd-referral-guidance', label: 'CKD referral guidance' }],
  'aki':                   [{ id: 'uhdb-aki-in-primary-care', label: 'AKI in primary care' }, { id: 'uhdb-post-inpatient-aki', label: 'Post-inpatient AKI' }],
  'coeliac-disease':       [{ id: 'uhdb-coeliac-disease', label: 'Coeliac disease' }],
  'gord-dyspepsia':        [{ id: 'uhdb-dyspepsia-gord', label: 'Dyspepsia / GORD' }],
  'colorectal-cancer':     [{ id: 'uhdb-change-in-bowel-habit', label: 'Change in bowel habit' }],
  'hepatitis':             [{ id: 'uhdb-hepatitis-serology', label: 'Hepatitis serology' }],
  'hyperthyroidism':       [{ id: 'uhdb-hyperthyroidism', label: 'Hyperthyroidism' }],
  'hypothyroidism':        [{ id: 'uhdb-hypothyroidism', label: 'Hypothyroidism' }],
  'hypercalcaemia':        [{ id: 'uhdb-hypercalcaemia', label: 'Hypercalcaemia' }],
  'hyperparathyroidism':   [{ id: 'uhdb-primary-hyperparathyroidism', label: 'Primary hyperparathyroidism' }, { id: 'uhdb-hypercalcaemia', label: 'Hypercalcaemia' }],
  'menopause':             [{ id: 'uhdb-menopause', label: 'Menopause' }],
  'pcos':                  [{ id: 'uhdb-pcos', label: 'PCOS' }],
  'amenorrhoea':           [{ id: 'uhdb-prolactin', label: 'Raised prolactin' }],
  'cushings-syndrome':     [{ id: 'uhdb-overnight-dexamethasone-test', label: 'Overnight dexamethasone test' }],
  'erectile-dysfunction':  [{ id: 'uhdb-male-hypogonadism-testosterone-deficiency', label: 'Male hypogonadism / low testosterone' }],
  'vitamin-b12':           [{ id: 'uhdb-b12-folate', label: 'B12 / folate' }],
  'gout':                  [{ id: 'uhdb-gout', label: 'Gout' }],
  'haematuria':            [{ id: 'uhdb-haematuria', label: 'Haematuria' }],
  'hyponatraemia':         [{ id: 'uhdb-hyponatraemia', label: 'Hyponatraemia' }],
  'hyperkalaemia':         [{ id: 'uhdb-hyperkalaemia', label: 'Hyperkalaemia' }],
  'diabetes-diagnosis':    [{ id: 'uhdb-diabetes-diagnosis-adults', label: 'Diabetes diagnosis (adults)' }, { id: 'uhdb-glucose-tolerance-test', label: 'Glucose tolerance test' }],
  'heart-failure':         [{ id: 'uhdb-heart-failure', label: 'Heart failure' }, { id: 'uhdb-cardiac-markers-in-primary-care', label: 'Cardiac markers' }],
  'hypertension':          [{ id: 'uhdb-secondary-hypertension', label: 'Secondary hypertension' }, { id: 'uhdb-suspected-hyperaldosteronism-primary-care', label: 'Suspected hyperaldosteronism' }],
  'dvt':                   [{ id: 'uhdb-suspected-dvt-primary-care', label: 'Suspected DVT' }],
  'haemochromatosis':      [{ id: 'uhdb-raised-ferritin', label: 'Raised ferritin' }],
  'prostate-cancer':       [{ id: 'uhdb-psa-testing', label: 'PSA testing' }],
  'fungal-skin-infections':[{ id: 'uhdb-onychomycosis-fungal-nail', label: 'Onychomycosis / fungal nail' }],
  'haem-malignancies':     [{ id: 'uhdb-myeloma', label: 'Myeloma' }, { id: 'uhdb-mgus', label: 'MGUS / paraprotein' }],
  'sle-sjogrens':          [{ id: 'uhdb-ana-testing', label: 'ANA testing' }],
}
