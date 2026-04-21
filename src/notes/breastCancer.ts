import type { Note } from '../data/notes'

export const breastCancer: Note = {
  id: 'breast-cancer',
  title: 'Breast Cancer',
  subtitle: 'Recognition, referral, types, treatment and post-treatment GP management',
  tags: ['oncology', 'womens-health'],

  body: 'breast cancer lump mass nipple discharge retraction skin change peau d\'orange dimpling 2WW two week wait urgent referral NICE NG12 mammogram ultrasound USS biopsy triple test invasive ductal carcinoma IDC DCIS ductal carcinoma in situ lobular carcinoma in situ LCIS invasive lobular carcinoma ILC triple negative ER PR HER2 oestrogen receptor hormone receptor BRCA1 BRCA2 family history risk factors screening NHS breast screening programme tamoxifen anastrozole letrozole aromatase inhibitor trastuzumab Herceptin chemoradiotherapy WLE wide local excision mastectomy axillary lymph node clearance lymphoedema sentinel node PREDICT tool menopausal symptoms vaginal dryness FRAX DEXA QRISK inflammatory breast cancer male breast cancer gynaecomastia Klinefelter QUEST genomics familial breast cancer',

  content: [

    {
      type: 'callout',
      variant: 'info',
      title: 'Key facts',
      items: [
        'Most common cancer in women in the UK — lifetime risk 1 in 8',
        'Age is the single biggest risk factor; the majority of cases occur after the menopause',
        'Early-stage breast cancer is highly treatable — 5-year survival >85% for stage I/II',
        'Inflammatory breast cancer mimics mastitis — safety-net all cases not resolving as expected',
        'Triple test (clinical examination + imaging + biopsy) is the diagnostic gold standard',
        'Male breast cancer accounts for ~1% of all cases but incidence is rising',
      ],
    },

    // ── REFERRAL ───────────────────────────────────────────────────────────────

    { type: 'heading', level: 2, text: 'Referral — 2-Week Wait (2WW)' },

    {
      type: 'image',
      src: '/images/suspected-cancer-referral-breast-lumps.jpg',
      alt: 'NICE referral table for breast lumps: age under 30 — non-urgent referral for unexplained lump; age 30 to 50 — always 2WW for unexplained lump with or without pain; age over 50 — always 2WW for nipple changes including discharge and retraction; all ages — consider 2WW for skin changes suggestive of breast cancer',
      caption: 'NICE NG12 breast referral criteria. Age ≥30 unexplained lump → always 2WW. Age ≥50 unilateral nipple changes → always 2WW. Skin changes → consider 2WW at any age.',
    },

    {
      type: 'table',
      headers: ['Finding', 'Age', 'Action'],
      rows: [
        ['Unexplained breast lump (± pain)', '≥30', '2WW — always'],
        ['Unexplained breast lump (± pain)', '<30', 'Consider non-urgent referral'],
        ['Unilateral nipple changes (discharge, retraction, other change of concern)', '≥50', '2WW — always'],
        ['Skin changes suggestive of breast cancer (e.g. peau d\'orange, dimpling, erythema)', 'Any age', 'Consider 2WW'],
        ['Unexplained axillary lump', 'Any age', 'Refer'],
        ['Blood-stained or watery single-duct nipple discharge', 'Any age', 'Refer'],
        ['Eccentric hard breast mass or painful unilateral gynaecomastia', 'Male, any age', 'Refer'],
      ],
      caption: 'NICE NG12 / NG117. If inflammatory breast cancer is suspected (erythema, warm, peau d\'orange not settling as mastitis), refer urgently regardless of age.',
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Safety-net: inflammatory breast cancer',
      items: [
        'Presents with rapid onset erythema, warmth, peau d\'orange, oedema — easily mistaken for mastitis',
        'If mastitis is not resolving within 2 weeks of antibiotics, arrange urgent review and consider 2WW referral',
        'Skin changes alone (without a discrete lump) are sufficient to trigger 2WW',
      ],
    },

    // ── RISK FACTORS ──────────────────────────────────────────────────────────

    { type: 'heading', level: 2, text: 'Risk Factors' },

    {
      type: 'table',
      headers: ['Risk factor', 'Notes'],
      rows: [
        ['Age', 'Single biggest risk factor — ~80% of cases occur in women >50'],
        ['Obesity', 'One of the largest modifiable risk factors — post-menopausal especially'],
        ['Alcohol', 'One of the largest modifiable risk factors — dose-dependent relationship'],
        ['HRT — continuous combined', 'Highest risk among HRT types; risk persists ~10 years after stopping; longer duration (>5 years) carries higher risk; doubles relative background risk but this is still low absolute risk; micronised progesterone carries lower risk than synthetic progestogens'],
        ['BRCA1 / BRCA2 mutations', 'Affect a small proportion of women but confer high individual lifetime risk (~70% for BRCA1, ~45–65% for BRCA2); associated with earlier onset and triple-negative subtype (BRCA1)'],
        ['Family history', 'See screening / familial risk section below'],
        ['Previous breast cancer or DCIS', 'Increased risk of contralateral cancer'],
        ['Dense breast tissue', 'Increases risk and reduces mammographic sensitivity'],
        ['Early menarche / late menopause', 'Longer lifetime oestrogen exposure'],
        ['Nulliparity / late first pregnancy', 'Modest increase in risk'],
        ['Ionising radiation', 'Prior chest radiotherapy (e.g. for Hodgkin lymphoma)'],
      ],
      caption: 'HRT risk: although relative risk is roughly doubled, the absolute additional risk from HRT is considerably smaller than from obesity or alcohol. Women should be counselled in this context.',
    },

    // ── DIAGNOSIS ─────────────────────────────────────────────────────────────

    { type: 'heading', level: 2, text: 'Diagnosis — Triple Test' },

    {
      type: 'callout',
      variant: 'tip',
      title: 'Triple test (all three components needed for definitive diagnosis)',
      items: [
        '1. Clinical examination — site, size, consistency, fixation, skin changes, axillary nodes',
        '2. Imaging — mammogram (preferred ≥35–40 years) or ultrasound (preferred <35–40 years); USS is particularly useful for dense breasts and younger women',
        '3. Biopsy with tissue diagnosis — core biopsy preferred over fine needle aspiration (FNA); sentinel axillary lymph node biopsy to assess nodal spread',
      ],
    },

    {
      type: 'image',
      src: '/images/breast-quadrants.png',
      alt: 'Breast anatomy diagram showing the four quadrants: upper outer quadrant (most common site for breast cancer), upper inner quadrant, lower outer quadrant, and lower inner quadrant, with the axillary tail labelled',
      caption: 'Breast quadrant anatomy. The upper outer quadrant (including the axillary tail) is the most common site for breast cancer, accounting for approximately 50% of tumours. Lesion location should be documented using clock position and distance from the nipple.',
    },

    // ── TYPES ─────────────────────────────────────────────────────────────────

    { type: 'heading', level: 2, text: 'Types of Breast Cancer' },

    {
      type: 'image',
      src: '/images/breast-ca-types.jpg',
      alt: 'Pie chart of breast cancer subtypes by hormone receptor and HER2 status: HR-positive HER2-negative most common at 73 percent, triple positive HR-positive HER2-positive at 10 percent, triple negative HR-negative HER2-negative at 13 percent, and HR-negative HER2-positive at 5 percent',
      caption: 'Breast cancer subtypes by receptor status. HR+/HER2− accounts for 73% of cases and responds well to hormonal therapy. Triple-negative (ER−/PR−/HER2−) accounts for ~13% and is more aggressive with limited targeted therapy options.',
    },

    {
      type: 'table',
      headers: ['Type', 'Proportion', 'Key features'],
      rows: [
        ['Invasive ductal carcinoma (IDC)', '~80%', 'Most common; arises from ductal epithelium; forms a hard, irregular mass; treatment guided by ER/PR/HER2 receptor status'],
        ['HR+/HER2− subtype', '~73% of all', 'Most common subtype; oestrogen-receptor positive; responds to hormonal therapy; generally good prognosis'],
        ['Ductal carcinoma in situ (DCIS)', '~20% of screen-detected', 'Pre-invasive; usually asymptomatic and found on mammography; may present with nipple discharge; treated to prevent progression to invasive cancer'],
        ['Invasive lobular carcinoma (ILC)', '~10%', 'Arises from glandular milk-producing lobular cells; grows in a single-file pattern making it harder to detect on mammogram; may present as an ill-defined thickening rather than a discrete lump'],
        ['Triple-negative (ER−/PR−/HER2−)', '~13%', 'Rare and more aggressive; no targeted hormonal or anti-HER2 therapy; associated with BRCA1 mutations; chemotherapy is mainstay'],
        ['Triple-positive (HR+/HER2+)', '~10%', 'Responds to both hormonal therapy and anti-HER2 agents'],
        ['HR−/HER2+', '~5%', 'Responds to anti-HER2 therapy (e.g. trastuzumab); HER2 amplification drives proliferation'],
        ['Inflammatory breast cancer', '<5%', 'Aggressive; no discrete lump; presents with skin erythema, peau d\'orange, warmth — mimics mastitis; needs urgent 2WW'],
      ],
    },

    {
      type: 'image',
      src: '/images/lobular-breast-ca.jpg',
      alt: 'Diagram showing lobular breast cancer origin: lobules where milk is produced, ducts carrying milk to the nipple, and comparison of lobular carcinoma in situ (LCIS — cells confined within the lobule) versus invasive lobular carcinoma (ILC — cells breaking through the lobule wall into surrounding tissue)',
      caption: 'Lobular carcinoma in situ (LCIS) is a non-invasive precursor lesion confined within the lobule — considered a marker of increased risk rather than a direct precancer. Invasive lobular carcinoma (ILC) has broken through the lobular basement membrane. ILC is notoriously difficult to detect on mammography due to its diffuse growth pattern.',
    },

    // ── STAGING ───────────────────────────────────────────────────────────────

    { type: 'heading', level: 2, text: 'Staging' },

    {
      type: 'table',
      headers: ['Stage', 'Description', 'Notes'],
      rows: [
        ['Stage 1', 'Tumour localised to the breast; no lymph node involvement', '≤2 cm; excellent prognosis'],
        ['Stage 2', 'Breast tumour + ipsilateral axillary lymph node involvement', '2–5 cm or node-positive; good prognosis with treatment'],
        ['Stage 3', 'Locally advanced — tumour >5 cm, chest wall / skin involvement, or extensive nodal disease', 'May be treated with neoadjuvant chemotherapy to downstage before surgery'],
        ['Stage 4', 'Distant metastatic disease — bone, liver, lung, brain most common sites', 'Median survival ~2–3 years; treatment is palliative with intent to prolong life and control symptoms'],
      ],
      caption: 'Common metastatic sites: bone (most common — causes bone pain, hypercalcaemia, MSCC risk), liver, lung, brain. Bone metastases are particularly important to recognise early.',
    },

    // ── TREATMENT ─────────────────────────────────────────────────────────────

    { type: 'heading', level: 2, text: 'Treatment — MDT Approach' },

    {
      type: 'para',
      text: 'Breast cancer is managed by a dedicated MDT including a breast surgeon, oncologist (medical and clinical), breast clinical nurse specialist (CNS), radiologist, and pathologist. The PREDICT tool (University of Cambridge) is used to model the survival benefit of adjuvant chemotherapy and guide treatment decisions.',
    },

    {
      type: 'table',
      headers: ['Modality', 'Details', 'Side effects / notes'],
      rows: [
        ['Surgery', 'Wide local excision (WLE / lumpectomy) — breast-conserving; or mastectomy ± immediate/delayed reconstruction. Sentinel lymph node biopsy (SLNB) to assess axillary nodes; full axillary clearance if nodes positive.', 'Lymphoedema risk ~20% after axillary clearance; arm morbidity; altered body image'],
        ['Radiotherapy', 'Usually given after WLE to reduce local recurrence risk; hypofractionated regimens now standard (fewer, larger fractions)', 'Skin changes, soreness, fatigue, nausea; rare: pneumonitis, rib fractures, cardiac effects (left-sided tumours)'],
        ['Chemotherapy', 'Pre-operative (neoadjuvant) to downstage tumour or post-operative (adjuvant); PREDICT tool guides decision. Anthracyclines (FEC) and taxanes commonly used.', 'Bone marrow suppression (infection risk, anaemia, bleeding), alopecia, nausea, cardiotoxicity (anthracyclines), peripheral neuropathy (taxanes)'],
        ['Hormonal therapy — premenopausal', 'Tamoxifen (SERM) for ≥5 years; some patients also have GnRH agonist injections (e.g. goserelin) for ovarian suppression', 'Menopausal symptoms, VTE risk, endometrial hyperplasia; avoid HRT unless agreed with specialist; check tamoxifen–SSRI interactions'],
        ['Hormonal therapy — postmenopausal', 'Aromatase inhibitors: anastrozole or letrozole for ≥5 years (preferred over tamoxifen in postmenopausal women)', 'Menopausal symptoms, arthralgia, bone loss (DEXA monitoring needed), osteoporosis risk'],
        ['Biological — anti-HER2', 'Trastuzumab (Herceptin) IV 3-monthly for 1 year in HER2+ tumours; pertuzumab in some high-risk cases', 'Cardiotoxic — causes reversible ventricular dysfunction; echocardiogram monitoring every 3 months required'],
        ['Bone protection', 'IV zoledronate (bisphosphonate) reduces bone metastasis risk and treats established bone mets; useful for MSCC risk reduction', 'Osteonecrosis of the jaw risk; dental review before starting; monitor calcium and renal function'],
        ['CDK4/6 inhibitors', 'Palbociclib, ribociclib, abemaciclib — used in HR+/HER2− advanced/metastatic disease alongside aromatase inhibitors', 'Neutropenia, fatigue, GI side effects; require FBC monitoring'],
      ],
      caption: 'PREDICT tool available at: https://www.predict.nhs.uk — models 10-year survival benefit of chemotherapy and hormonal therapy to support shared decision-making.',
    },

    // ── SCREENING ─────────────────────────────────────────────────────────────

    { type: 'heading', level: 2, text: 'Screening' },

    { type: 'heading', level: 3, text: 'NHS Breast Screening Programme' },

    {
      type: 'list',
      items: [
        'Mammogram every 3 years, offered to all women aged 50–70 (being extended to 47–73 in some regions)',
        'Women over 70 are no longer automatically invited but can self-refer to continue 3-yearly screening — unlike cervical screening, which stops at 65',
        'Recalls for further assessment occur in ~4% of women screened; the majority of these are false positives',
        'Screening reduces breast cancer mortality by ~20% in those invited',
      ],
    },

    { type: 'heading', level: 3, text: 'Familial Breast Cancer — Earlier Screening Criteria' },

    {
      type: 'para',
      text: 'Refer for earlier or enhanced surveillance if the patient has a 1st- or 2nd-degree relative meeting any of the criteria below. Use the QUEST Genomics app for family history risk assessment.',
    },

    {
      type: 'table',
      headers: ['Criterion', 'Notes'],
      rows: [
        ['Breast cancer diagnosed <40 years in a 1st/2nd-degree relative', 'Earlier onset suggests higher-penetrance genetic risk'],
        ['Bilateral breast cancer where the 1st primary was diagnosed <50 years', 'Suggests bilateral/genetic predisposition'],
        ['Male breast cancer in a 1st/2nd-degree relative', 'Associated with BRCA2 mutation in particular'],
        ['Ovarian cancer in a 1st/2nd-degree relative', 'BRCA1/2 associated; ovarian cancer substantially raises familial risk'],
        ['Jewish (Ashkenazi) ancestry', 'Higher prevalence of BRCA1/2 founder mutations'],
        ['Numbers: ≥2 first-degree relatives with breast cancer', 'Or 1 first-degree + 1 second-degree relative, or ≥3 second-degree relatives'],
      ],
      caption: 'Referral to a genetics/familial breast cancer clinic allows formal risk stratification, BRCA testing where appropriate, and access to MRI screening or chemoprevention (e.g. tamoxifen for high-risk women).',
    },

    {
      type: 'callout',
      variant: 'info',
      title: 'Trans and non-binary patients',
      items: [
        'Trans women (registered male) will not be automatically invited to NHS breast screening — refer to the national breast screening programme if on high-dose oestrogen or if clinically indicated',
        'Trans men (registered female) will continue to be invited as per standard programme if registered female with GP',
        'Non-binary individuals registered as male should be offered screening proactively if they have significant breast tissue',
        'Discuss screening with all trans patients as part of routine health reviews',
      ],
    },

    // ── POST-TREATMENT GP ISSUES ───────────────────────────────────────────────

    { type: 'heading', level: 2, text: 'Post-Treatment Issues — GP Role' },

    {
      type: 'callout',
      variant: 'tip',
      title: 'All breast cancer survivors should have these reviewed in primary care',
      items: [
        'FRAX score — fracture risk (especially if on aromatase inhibitors or had premature menopause)',
        'DEXA scan — baseline bone density, repeated if on aromatase inhibitor or at high fracture risk',
        'QRISK assessment — cardiovascular risk (tamoxifen is cardioprotective; aromatase inhibitors may modestly increase risk)',
        'Psychological support — anxiety, depression, and fear of recurrence are common and often under-recognised',
        'Sexual health discussion — body image, libido, relationship impact; vaginal dryness is common and distressing',
      ],
    },

    { type: 'heading', level: 3, text: 'Lymphoedema' },

    {
      type: 'list',
      items: [
        'Fluid accumulation in the arm (or breast/trunk) due to damaged or removed axillary lymphatics',
        'Affects ~20% of patients who have had axillary node clearance; usually develops in the first 1–2 years after treatment',
        'Presents as swelling, heaviness, aching, or tightness in the arm; skin changes in chronic cases',
        'Management: refer to lymphoedema nurse or physiotherapy service',
        'Treatments: compression garments and bandaging, manual lymphatic drainage, pneumatic compression devices, exercise, skin care',
        'Advise patients to avoid blood pressure cuffs, blood draws, and injections in the affected arm',
        'Any signs of cellulitis in a lymphoedematous limb — treat promptly and consider prophylactic antibiotics if recurrent',
      ],
    },

    { type: 'heading', level: 3, text: 'Menopausal Symptoms from Hormonal Therapy' },

    {
      type: 'list',
      items: [
        'Hot flushes, night sweats, mood disturbance, arthralgia, and cognitive symptoms are common on tamoxifen and aromatase inhibitors',
        'Avoid HRT unless agreed with breast oncologist/gynaecologist — oestrogen-containing HRT is generally contraindicated in ER+ breast cancer survivors',
        'Non-hormonal options for flushes: SSRIs (sertraline or citalopram preferred over paroxetine due to CYP2D6 interaction with tamoxifen — see below), venlafaxine, gabapentin, clonidine',
        'Tamoxifen–SSRI interaction: paroxetine and fluoxetine strongly inhibit CYP2D6 (enzyme that converts tamoxifen to active endoxifen) — avoid; sertraline and citalopram are safer choices',
        'Oxybutynin (anticholinergic) can also be used for flushes but with caution in older patients',
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Tamoxifen and SSRI interaction',
      items: [
        'Tamoxifen is a pro-drug converted to active endoxifen by CYP2D6',
        'Paroxetine and fluoxetine are strong CYP2D6 inhibitors — significantly reduce endoxifen levels and may reduce tamoxifen efficacy',
        'Preferred SSRIs: sertraline or citalopram (weak CYP2D6 inhibitors)',
        'Always check interactions when prescribing psychotropics to patients on tamoxifen',
      ],
    },

    { type: 'heading', level: 3, text: 'Vaginal Dryness and Genitourinary Syndrome' },

    {
      type: 'list',
      items: [
        'Very common on aromatase inhibitors and in treatment-induced menopause',
        'First-line: non-hormonal vaginal lubricants (e.g. Replens, YES, Sylk) — applied regularly, not just during intercourse',
        'Vaginal oestrogen: generally avoided in ER+ breast cancer survivors unless agreed with oncologist/specialist; local absorption is low but evidence on safety is still evolving; a specialist consultation is needed before prescribing',
        'Ospemifene (SERM) and intravaginal DHEA (prasterone) — consider after specialist discussion',
        'Pelvic floor physiotherapy may also help with dyspareunia and urinary symptoms',
      ],
    },

    // ── MALE BREAST CANCER ────────────────────────────────────────────────────

    { type: 'heading', level: 2, text: 'Male Breast Cancer' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Male breast cancer — key points',
      items: [
        'Accounts for ~1% of all breast cancers in the UK; incidence is rising',
        'Mean age at diagnosis is ~65 years — typically older than female breast cancer',
        'Most are ER-positive invasive ductal carcinomas — treatment follows similar principles to female breast cancer',
        'Prognosis is similar stage-for-stage to female breast cancer; poorer outcomes reflect later presentation',
      ],
    },

    {
      type: 'table',
      headers: ['Risk factor', 'Notes'],
      rows: [
        ['BRCA2 mutation', 'Most significant genetic risk factor for male breast cancer; lifetime risk ~6–8%'],
        ['Klinefelter syndrome (47,XXY)', 'Raised oestrogen:testosterone ratio; ~20–50× increased risk'],
        ['Obesity', 'Increased peripheral aromatisation of androgens to oestrogen'],
        ['Alcohol', 'Impairs hepatic oestrogen metabolism'],
        ['Liver disease (e.g. cirrhosis)', 'Impaired oestrogen metabolism → raised oestrogen levels'],
        ['Exogenous oestrogen / androgen deprivation therapy', 'Used in prostate cancer treatment'],
        ['Gynaecomastia', 'NOT an independent risk factor per se — but refer if eccentric hard mass or unilateral painful gynaecomastia'],
      ],
    },

    { type: 'heading', level: 3, text: 'When to Refer vs Reassure in Male Breast Enlargement' },

    {
      type: 'table',
      headers: ['Presentation', 'Action'],
      rows: [
        ['Eccentric hard mass (not centred on nipple)', 'Refer — 2WW'],
        ['Painful unilateral gynaecomastia', 'Refer — 2WW'],
        ['Bilateral symmetrical gynaecomastia in adolescent or elderly man (physiological)', 'Reassure — do not refer routinely'],
        ['Drug-related gynaecomastia (e.g. spironolactone, cimetidine, anabolic steroids, finasteride)', 'Review medication; reassure if no hard mass'],
        ['Bilateral pseudo-gynaecomastia (fatty breast tissue, no glandular tissue on palpation)', 'Reassure; lifestyle advice'],
      ],
    },

    // ── LINKS ─────────────────────────────────────────────────────────────────

    { type: 'heading', level: 2, text: 'Resources' },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Breast Cancer Recognition & Referral', url: 'https://cks.nice.org.uk/topics/breast-cancer-recognition-referral/' },
        { label: 'Macmillan Rapid Referral Guidelines — Breast', url: 'https://www.macmillan.org.uk/healthcare-professionals/cancer-pathways/prevention-and-diagnosis/rapid-referral-guidelines/breast-cancer' },
        { label: 'Breast Cancer Now (patient resource)', url: 'https://breastcancernow.org' },
        { label: 'Cancer Research UK — Breast Cancer', url: 'https://www.cancerresearchuk.org/about-cancer/breast-cancer' },
      ],
    },

  ],
}
