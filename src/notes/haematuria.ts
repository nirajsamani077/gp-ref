import type { Note } from '../data/notes'

export const haematuria: Note = {
  id: 'haematuria',
  title: 'Haematuria',
  subtitle: '2WW criteria, visible vs non-visible, causes, renal vs urology referral pathway',
  tags: ['renal', 'urology', 'cancer'],

  body: 'haematuria visible frank macroscopic non-visible microscopic dipstick urology 2WW bladder cancer renal cancer prostate cancer IgA nephropathy glomerulonephritis UTI kidney stone renal calculi UACR proteinuria PSA DRE CA125 recurrent UTI ACR albumin creatinine ratio cystoscopy CT urogram renal ultrasound',

  content: [

    {
      type: 'callout',
      variant: 'danger',
      title: '2WW Urology Referral Criteria',
      items: [
        'Age ≥45 with VISIBLE haematuria (Frank/macroscopic — any amount of blood-coloured urine) WITHOUT a UTI',
        'Age ≥45 with visible haematuria that PERSISTS after treatment of a UTI',
        'Age ≥60 with NON-VISIBLE haematuria (dipstick ≥1+, confirmed on two occasions) AND either: dysuria OR raised WCC on dipstick/FBC',
        'Age ≥60 with RECURRENT or PERSISTENT non-visible haematuria without explanation',
        'Any age: visible haematuria + palpable bladder mass → same-day urology assessment',
      ],
    },

    { type: 'heading', level: 2, text: 'Definitions' },

    {
      type: 'table',
      headers: ['Type', 'Definition', 'Key Points'],
      rows: [
        ['Visible (VH / frank / macroscopic)', 'Blood visible to the naked eye in urine — pink, red, brown ("cola-coloured")', 'Any single episode in absence of UTI warrants investigation in ≥45s; ALL ages if palpable mass'],
        ['Non-visible (NVH / microscopic)', 'Blood detected on dipstick (≥1+ haemoglobin) NOT visible to naked eye', 'Confirm on two separate specimens; exclude UTI first; dipstick ≥1+ haemoglobin is significant (not trace)'],
        ['Dipstick false positives', 'Myoglobinuria (rhabdomyolysis), haemoglobinuria (haemolysis), menstrual contamination, beetroot ingestion, rifampicin', 'Confirm with microscopy if uncertain; send MSU to lab'],
        ['Transient haematuria', 'Single episode on dipstick, no UTI, asymptomatic', 'Recheck after 2 weeks; if persistent, investigate as NVH pathway'],
      ],
    },

    { type: 'heading', level: 2, text: 'Causes of Haematuria' },

    {
      type: 'table',
      headers: ['Category', 'Causes', 'Clues'],
      rows: [
        ['Urological — benign', 'UTI, urinary stones/calculi, benign prostatic hyperplasia (BPH), urethritis, trauma, vigorous exercise, catheterisation', 'Dysuria, frequency, loin-to-groin pain (stone), post-exercise resolves'],
        ['Urological — malignant', 'Bladder cancer (most common urological malignancy causing haematuria), renal cell carcinoma, urothelial cancer (renal pelvis, ureter), prostate cancer', 'Painless frank haematuria = bladder/renal CA until proven otherwise; check PSA + DRE in men'],
        ['Renal — medical', 'IgA nephropathy (most common glomerulonephritis; haematuria post-URTI, young), post-streptococcal GN, thin basement membrane disease, Alport syndrome (FHx, deafness), vasculitis (ANCA), lupus nephritis', 'Proteinuria + haematuria on dipstick; raised BP; impaired renal function; refer renal not urology'],
        ['Renal — structural', 'Polycystic kidney disease (PCKD), renal cysts, papillary necrosis (DM, analgesics, sickle cell)', 'Family history, flank pain, hypertension'],
        ['Systemic', 'Anticoagulation (warfarin, DOACs — unmasking underlying pathology), bleeding diathesis, sickle cell, infective endocarditis', 'Always investigate rather than attributing to anticoagulation alone'],
        ['Gynaecological', 'Menstrual contamination, cervical cancer, endometrial cancer (postmenopausal bleeding via shared opening)', 'Confirm urine sample is midstream, away from menstruation'],
      ],
      caption: 'Painless frank haematuria in adults = bladder cancer until proven otherwise. Always investigate even if UTI present — treat UTI first but recheck to confirm haematuria has resolved.',
    },

    { type: 'heading', level: 2, text: 'Investigations in Primary Care' },

    {
      type: 'list',
      items: [
        'Urine dipstick: ≥1+ haemoglobin on two occasions = significant NVH (trace may be insignificant)',
        'MSU for culture: exclude UTI; treat if positive and recheck haematuria post-treatment',
        'Bloods: U&E (eGFR), FBC (anaemia, thrombocytopenia), clotting (if on anticoagulation)',
        'UACR (urine albumin:creatinine ratio) or urine PCR: detects proteinuria — if significant proteinuria + haematuria → consider renal cause → refer nephrology',
        'BP measurement: hypertension + haematuria suggests renal glomerular cause',
        'PSA + DRE: in men >40 with haematuria to exclude prostate cancer',
        'CA125 + pelvic USS: in women >40 with persistent LUTS, haematuria, or pelvic symptoms — ovarian cancer screen',
        'Renal USS: first-line imaging in non-2WW haematuria — detects renal masses, PCKD, stones',
      ],
    },

    { type: 'heading', level: 2, text: 'Referral Pathways' },

    {
      type: 'table',
      headers: ['Scenario', 'Referral', 'Timescale'],
      rows: [
        ['VH ≥45 without UTI or persisting after UTI treatment', 'Urology 2WW', 'Within 2 weeks'],
        ['NVH ≥60 with dysuria or raised WCC', 'Urology 2WW', 'Within 2 weeks'],
        ['Palpable bladder or renal mass any age', 'Urology / Urology 2WW', 'Same day / 2WW'],
        ['Men ≥40 with recurrent UTI without obvious cause', 'Urology non-urgent', 'Routine'],
        ['Women ≥40 with recurrent/unexplained LUTS / haematuria', 'Urology non-urgent ± CA125', 'Routine'],
        ['Significant proteinuria (PCR >100 mg/mmol) + haematuria', 'Nephrology', 'Non-urgent unless rapidly deteriorating eGFR'],
        ['NVH + raised BP + impaired eGFR + proteinuria (any age)', 'Nephrology', 'Urgent if rapidly deteriorating; routine if stable'],
        ['Asymptomatic NVH ≥45 not meeting 2WW criteria', 'Annual haematuria review (AHR) in primary care — check BP, UACR, U&E, USS if not done; refer urology if persists', 'Annual monitoring'],
      ],
    },

    { type: 'heading', level: 2, text: 'What Happens in Secondary Care' },

    {
      type: 'list',
      items: [
        'Cystoscopy: direct visualisation of bladder — gold standard for detecting bladder cancer; can be flexible (outpatient, local anaesthetic) or rigid (GA, operative)',
        'CT urogram (CTU): CT of kidneys, ureters, bladder with contrast — detects renal tumours, urothelial cancers, and stones throughout the urinary tract; replaces IVU',
        'Renal USS: adequate first-line for renal parenchymal disease; less sensitive than CTU for small urothelial tumours',
        'Urine cytology: can detect high-grade urothelial malignancy; poor sensitivity for low-grade',
      ],
    },

    { type: 'heading', level: 2, text: 'Anticoagulation and Haematuria' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Haematuria on Anticoagulants — Always Investigate',
      items: [
        'Anticoagulation does NOT cause haematuria — it UNMASKS an underlying lesion',
        'All patients on warfarin, DOACs, or antiplatelet therapy with haematuria should be investigated according to the same criteria as patients not on anticoagulation',
        'Do NOT attribute haematuria to anticoagulation without investigation',
        'Check INR if on warfarin — supratherapeutic INR may precipitate bleeding from a pre-existing lesion but the lesion still needs to be found',
      ],
    },

    { type: 'heading', level: 2, text: 'IgA Nephropathy (Berger\'s Disease)' },

    {
      type: 'list',
      items: [
        'Most common primary glomerulonephritis worldwide — young adults, often post-URTI (concurrent or within 24–48 hours — unlike post-streptococcal GN which is 2–3 weeks later)',
        'Visible haematuria during upper respiratory tract infection (synpharyngitic haematuria), or persistent NVH on dipstick',
        'Diagnosis: renal biopsy showing IgA mesangial deposits',
        'Prognosis variable: 20–30% progress to ESRD over 20 years; risk factors = hypertension, proteinuria, impaired GFR at presentation',
        'Management: blood pressure control (ACE inhibitor first line — also reduces proteinuria), low-sodium diet; specialist immunosuppression if heavy proteinuria',
      ],
    },

  ],
}
