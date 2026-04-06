import type { Note } from '../data/notes'

export const twoWeekWait: Note = {
  id: 'two-week-wait',
  title: '2 Week Wait (2WW) Referral Criteria',
  subtitle: 'Urgent cancer referral criteria by specialty — NICE NG12 / NG117',
  tags: ['oncology'],

  body: `2WW two week wait urgent cancer referral criteria NICE NG12 prostate PSA DRE bladder haematuria renal testicular penile upper GI oesophageal gastric dysphagia pancreatic jaundice HPB colorectal FIT bowel PR bleeding CIBH IDA lung haemoptysis CXR chest X-ray dermatology melanoma ABCD 7 point checklist myeloma paraprotein leukaemia lymphoma lymphadenopathy B symptoms ovarian CA125 endometrial PMB postmenopausal bleeding breast lump nipple HNSCC head neck thyroid hoarseness leucoplakia erythroplakia vulval weight loss anaemia thrombocytosis`,

  content: [
    {
      type: 'linkrow',
      links: [
        { label: '📄 UHDB Patient Information — 2WW Referral (PDF)', url: '/pdfs/2ww-patient-info-uhdb.pdf' },
      ],
    },

    // ── COLORECTAL ──────────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Colorectal Cancer',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'FIT Update 2023',
      items: [
        'Abdominal / anorectal mass OR positive FIT screening → direct 2WW (no further FIT needed)',
        'Unexplained symptoms below → do symptomatic FIT first → 2WW only if FIT positive',
        'Still do FIT for abdominal mass to help determine source',
      ],
    },
    {
      type: 'table',
      headers: ['Criterion', 'Threshold', 'Action'],
      rows: [
        ['Abdominal or anorectal mass', 'Any age', '2WW directly'],
        ['Positive FIT (screening programme)', 'Any age', '2WW directly'],
        ['PR bleeding', '>50, or <50 with another symptom', 'FIT → 2WW if positive'],
        ['Weight loss + abdominal pain', '>40', 'FIT → 2WW if positive'],
        ['Weight loss', '>50 (single symptom)', 'FIT → 2WW if positive'],
        ['Change in bowel habit (CIBH)', '>60', 'FIT → 2WW if positive'],
        ['Iron deficiency anaemia (IDA)', '>60 (any anaemia, not just IDA)', 'FIT → 2WW if positive'],
        ['CIBH — younger patients', 'Any age', 'FIT; if younger also calprotectin; if older CT abdomen; if female CA125/USS'],
      ],
    },

    // ── UPPER GI ─────────────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Upper GI — Oesophageal & Gastric',
    },
    {
      type: 'table',
      headers: ['Criterion', 'Threshold', 'Notes'],
      rows: [
        ['Dysphagia', 'Any age', 'Direct 2WW — do not delay for investigations'],
        ['Upper abdominal mass', 'Any age', 'Direct 2WW'],
        ['Weight loss + upper abdominal pain OR reflux', '>55', 'Direct 2WW'],
        ['Other symptoms / abnormal FBC (Hb or platelets)', 'Any age', 'Non-urgent referral or investigate first'],
      ],
    },

    // ── PANCREATIC / HPB ─────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Pancreatic & HPB',
    },
    {
      type: 'table',
      headers: ['Criterion', 'Threshold', 'Action'],
      rows: [
        ['New painless jaundice', '>40', '2WW'],
        ['Weight loss + any GI symptom OR new diabetes mellitus', '>60', '2WW with direct access CT abdomen'],
        ['Upper abdominal mass (e.g. palpable liver edge)', 'Any age', 'UGI 2WW'],
      ],
    },

    // ── LUNG ──────────────────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Lung Cancer',
    },
    {
      type: 'table',
      headers: ['Criterion', 'Threshold', 'Action'],
      rows: [
        ['Haemoptysis', '>40', 'Direct 2WW'],
        ['CXR findings suggestive of lung cancer', '>40', 'Direct 2WW'],
        ['1 symptom/sign if smoker or asbestos-exposed', '>40', 'Urgent CXR within 2 weeks'],
        ['2 symptoms/signs if non-smoker', '>40', 'Urgent CXR within 2 weeks'],
      ],
      caption: 'Symptoms/signs: cough, SOB, chest pain, weight loss, recurrent LRTI, cervical/supraclavicular LN, finger clubbing, thrombocytosis (raised platelets on FBC)',
    },

    // ── BLADDER / RENAL ───────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Bladder & Renal (Urothelial)',
    },
    {
      type: 'table',
      headers: ['Criterion', 'Threshold', 'Notes'],
      rows: [
        ['Unexplained visible haematuria (frank haematuria)', '>45', '2WW — even a single episode'],
        ['Unexplained non-visible haematuria + dysuria OR raised WBC', '>60', '2WW — check FBC; exclude UTI first'],
      ],
    },

    // ── PROSTATE ──────────────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Prostate Cancer',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Consider if: back pain, LUTS, haematuria, or erectile dysfunction',
      items: [
        'Abnormal DRE — hard, craggy, nodular, or asymmetric prostate',
        'Raised PSA above age-related thresholds (without other clear cause)',
      ],
    },
    {
      type: 'table',
      headers: ['Age', 'PSA Threshold (µg/L)'],
      rows: [
        ['<40', 'Use clinical judgement'],
        ['40–49', '>2.5'],
        ['50–59', '>3.5'],
        ['60–69', '>4.5'],
        ['70–79', '>6.5'],
        ['>80', 'Use clinical judgement'],
      ],
    },

    // ── TESTICULAR / PENILE ───────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Testicular & Penile Cancer',
    },
    {
      type: 'table',
      headers: ['Criterion', 'Notes'],
      rows: [
        ['Unexplained testicular lump or persistent pain', '2WW; consider direct access urgent USS as part of assessment'],
        ['Non-resolving epididymo-orchitis or hydrocele', 'Image and ensure follow-up/safety-net'],
        ['Unexplained penile lump or ulcerated lesion', '2WW; consider STI as differential first'],
      ],
    },

    // ── GYNAECOLOGICAL ────────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Gynaecological Cancers',
    },
    {
      type: 'table',
      headers: ['Cancer', 'Criterion', 'Action'],
      rows: [
        ['Ovarian', 'Obvious pelvic/abdominal mass or ascites', '2WW directly'],
        ['Ovarian', '>50 with persistent/frequent bloating, early satiety, abdo/pelvic pain, or LUTS', 'CA125 → if >35: urgent direct access USS abdomen + TV USS pelvis'],
        ['Ovarian', 'Suspicious scan result after CA125 pathway', '2WW'],
        ['Ovarian', 'Negative scan but symptoms persist', 'Continue looking: FIT, CT abdomen, urine'],
        ['Endometrial', 'Postmenopausal bleeding (>1 year post LMP, usually >55, not on HRT)', '2WW'],
        ['Endometrial', 'On HRT with bleeding persisting >6 weeks after stopping', '2WW'],
        ['Vulval', 'Unexplained irregular ulcer, bleeding, or lump (complex = fungating mass or lymphadenopathy)', '2WW'],
      ],
    },

    // ── BREAST ────────────────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Breast Cancer',
    },
    {
      type: 'table',
      headers: ['Criterion', 'Threshold', 'Notes'],
      rows: [
        ['Unexplained breast lump, skin change, or axillary lump', '>30', '2WW'],
        ['Unilateral nipple discharge or nipple changes', '>50', '2WW'],
      ],
    },

    // ── HAEMATOLOGICAL ────────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Haematological Cancers',
    },
    {
      type: 'table',
      headers: ['Cancer', 'Criterion', 'Action'],
      rows: [
        ['Myeloma', 'Any paraprotein (IgA/M >10 or IgG >15) or abnormal κ:λ ratio (<0.1 or >7)', '2WW — check CRAB criteria, FBC, ESR, calcium'],
        ['Myeloma', '>60 with persistent bone/back pain or unexplained fracture', 'Start 2-step pathway — check SPEP, Bence-Jones protein'],
        ['Lymphoma', 'Persistent lymphadenopathy >6 weeks at any site (cervical, axillary, inguinal, abdominal), especially with B symptoms', '2WW — threshold in practice ~3 weeks if unexplained'],
        ['Lymphoma', 'B symptoms: fever, drenching night sweats, unexplained weight loss >10%', 'Lower threshold for 2WW with LN'],
        ['Leukaemia', 'Pancytopenia symptoms, B symptoms, or lymphadenopathy/hepatosplenomegaly', 'Urgent FBC and film within 48h — admit if blasts or pancytopenia; flow cytometry if isolated lymphocytosis'],
      ],
      caption: 'CRAB: hyperCalcaemia, Renal failure, Anaemia, Bone lesions',
    },

    // ── HNSCC / THYROID ───────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Head & Neck / Thyroid',
    },
    {
      type: 'table',
      headers: ['Site', 'Criterion', 'Threshold / Notes'],
      rows: [
        ['Oropharyngeal (MaxFax)', 'Unexplained neck lump or red/white patch (erythroplakia/leucoplakia) in mouth or on lip', '>3 weeks — 2WW'],
        ['Laryngeal', 'Persistent unexplained hoarseness', '>45, >3 weeks — 2WW + urgent CXR'],
        ['Laryngeal', 'Persistent unexplained neck lump', '>45, >3 weeks — 2WW'],
        ['Thyroid', 'Any unexplained thyroid lump', 'Any age — 2WW'],
      ],
    },

    // ── DERMATOLOGY ───────────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Dermatology — Melanoma & Skin Cancer',
    },
    {
      type: 'table',
      headers: ['Tool', 'Criteria', 'Action'],
      rows: [
        ['ABCD rule', 'Asymmetry, Border irregular, Colour inconsistent, Diameter >6mm or changing Dimensions', '2WW if ≥1 feature suspicious'],
        ['7-Point Checklist', 'Major (score 2): change in size, irregular shape, irregular colour\nMinor (score 1): diameter >7mm, inflammation, oozing, altered sensation', '2WW if total score ≥3 or any major criterion'],
        ['EFG (nodular)', 'Elevated, Firm, Growth (persistent) — for nodular melanoma and SCC', '2WW — do not mistake for BCC'],
        ['Exception — BCC', 'Slow-growing, rolled/pearly edge, telangiectasia — typically non-urgent', 'Routine if clearly superficial/nodular BCC'],
      ],
    },
  ],
}
