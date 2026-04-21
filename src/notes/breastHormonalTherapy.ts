import type { Note } from '../data/notes'

export const breastHormonalTherapy: Note = {
  id: 'breast-hormonal-therapy',
  title: 'Tamoxifen & Anastrozole',
  subtitle: 'GP considerations for anti-oestrogen therapy in breast cancer and chemoprevention',
  tags: ['breast', 'cancer', 'prescribing'],

  body: `tamoxifen anastrozole letrozole aromatase inhibitor SERM oestrogen receptor positive ER+ breast cancer hormonal therapy anti-oestrogen chemoprevention familial breast cancer NICE CG164 high risk moderate risk premenopausal postmenopausal endometrial cancer VTE thrombosis osteoporosis bone density DEXA FRAX fracture bisphosphonate alendronate calcium vitamin D CYP2D6 fluoxetine paroxetine sertraline citalopram SSRI drug interaction hot flushes menopausal symptoms vaginal dryness arthralgia joint pain lipids cholesterol HRT vaginal oestrogen goserelin GnRH raloxifene endoxifen CYP2D6 inhibitor`,

  content: [

    // ── LINKS ────────────────────────────────────────────────────────────────
    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Tamoxifen: Managing Adverse Effects', url: 'https://cks.nice.org.uk/topics/tamoxifen-managing-adverse-effects/' },
        { label: 'NICE CG164 — Familial Breast Cancer', url: 'https://www.nice.org.uk/guidance/cg164' },
        { label: 'BNF — Anastrozole', url: 'https://bnf.nice.org.uk/drugs/anastrozole/' },
        { label: 'BNF — Tamoxifen', url: 'https://bnf.nice.org.uk/drugs/tamoxifen/' },
      ],
    },

    // ── OVERVIEW ─────────────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Overview — When Is Anti-Oestrogen Therapy Used?',
    },
    {
      type: 'list',
      items: [
        'TREATMENT: ER+ (hormone receptor positive) breast cancer — reduces recurrence and mortality risk',
        'CHEMOPREVENTION: women at moderate or high familial risk of breast cancer (NICE CG164)',
        'ER+ breast cancer accounts for ~73% of all breast cancers — the most common subtype',
        'GP role: ongoing prescribing, monitoring, managing side effects, and recognising interactions',
      ],
    },
    {
      type: 'image',
      src: '/images/breast-ca-types.jpg',
      alt: 'Breast cancer subtypes: HR+/HER2- most common 73%, Triple negative 13%, Triple positive 10%, HR-/HER2+ 5%',
      caption: 'Breast cancer subtypes — hormone receptor positive (HR+) disease is most common and most amenable to hormonal therapy',
    },

    // ── MECHANISM ────────────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Mechanism of Action',
    },
    {
      type: 'image',
      src: '/images/anastrozole-tamoxifen-gp.png',
      alt: 'Mechanism diagram: Androstenedione and Testosterone converted via Aromatase (in subcutaneous fat, liver, muscle, normal breast, breast cancer) to Estrone and Estradiol; Aromatase inhibitor (anastrozole) blocks this conversion; Tamoxifen blocks oestradiol acting on ER+ breast tumour cells',
      caption: 'Tamoxifen blocks oestrogen at the receptor; anastrozole prevents peripheral conversion of androgens to oestrogens',
    },
    {
      type: 'table',
      headers: ['Drug', 'Class', 'Mechanism', 'Works in'],
      rows: [
        ['Tamoxifen', 'SERM', 'Blocks oestrogen binding to ER+ tumour cells; partial agonist in endometrium and bone', 'Pre- and postmenopausal'],
        ['Anastrozole / Letrozole', 'Aromatase inhibitor (AI)', 'Blocks peripheral conversion of androgens (androstenedione) → oestrogens (oestrone/oestradiol) in fat, liver, muscle', 'Postmenopausal ONLY'],
      ],
      caption: 'Aromatase inhibitors have no effect on ovarian oestrogen production — they are ineffective and contraindicated premenopausally',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Key Point — Anastrozole Does NOT Increase Oestrogen',
      items: [
        'Anastrozole prevents peripheral conversion of androgens to oestrogens — it does not cause oestrogen excess',
        'Side effects are due to oestrogen deficiency (menopausal symptoms, bone loss, joint pain)',
        'In postmenopausal women, peripheral conversion in fat/muscle is the main source of oestrogen — hence AIs are very effective',
        'In premenopausal women, ovarian oestrogen production is unaffected — AIs are NOT effective',
      ],
    },

    // ── TREATMENT REGIMENS ───────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Treatment in ER+ Breast Cancer',
    },
    {
      type: 'list',
      items: [
        'Premenopausal: tamoxifen 20 mg OD for at least 5 years (some patients extended to 10 years)',
        'Postmenopausal: anastrozole 1 mg OD (or letrozole 2.5 mg OD) for at least 5 years',
        'Some premenopausal women also receive GnRH analogue (e.g. goserelin) for ovarian suppression alongside tamoxifen',
        'Switching: patients may switch agents if significant intolerance develops — discuss with oncologist',
        'Duration: oncologist-led decision; GP continues prescribing on shared care or follow-up letter instruction',
      ],
    },

    // ── CHEMOPREVENTION ──────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Chemoprevention in Familial Breast Cancer (NICE CG164)',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'GP Role in Chemoprevention',
      items: [
        'Risk assessment is done in specialist family history clinic — NOT in GP',
        'GP may be asked to initiate or continue prescribing once specialist has assessed and written to GP',
        'Duration: 5 years only — do NOT continue beyond 5 years in women without personal history of breast cancer',
        'Do NOT offer if bilateral risk-reducing mastectomy has already been performed',
      ],
    },
    {
      type: 'table',
      headers: ['Menopausal Status', 'First Choice', 'Alternatives / Special Circumstances'],
      rows: [
        ['Premenopausal (high or moderate risk)', 'Tamoxifen 20 mg OD for 5 years', 'Avoid if personal history of VTE or endometrial cancer'],
        ['Postmenopausal (high or moderate risk)', 'Anastrozole 1 mg OD for 5 years', 'Avoid if severe osteoporosis'],
        ['Postmenopausal + severe osteoporosis, or cannot tolerate anastrozole', 'Tamoxifen 20 mg OD for 5 years', 'Or raloxifene 60 mg OD for 5 years if no VTE history'],
      ],
      caption: 'NICE CG164 chemoprevention options — specialist assessment required before GP initiates',
    },

    // ══════════════════════════════════════════════════════════════════════════
    // TAMOXIFEN
    // ══════════════════════════════════════════════════════════════════════════
    {
      type: 'heading',
      level: 2,
      text: 'Tamoxifen — GP Prescribing Considerations',
    },

    // Side effects
    {
      type: 'heading',
      level: 3,
      text: 'Side Effects',
    },
    {
      type: 'list',
      items: [
        'Menopausal symptoms: hot flushes, night sweats, vaginal dryness, hair thinning',
        'Menstrual irregularity: oligomenorrhoea or amenorrhoea (may mask menopause)',
        'VTE: increased risk of deep vein thrombosis and pulmonary embolism',
        'Endometrial cancer: partial agonist effect on endometrium increases risk',
        'Ocular effects (rare): cataracts, visual disturbances — refer ophthalmology if new visual symptoms develop',
        'Mood changes and low libido: common and often undertreated',
      ],
    },

    // CRITICAL: CYP2D6 drug interaction
    {
      type: 'callout',
      variant: 'danger',
      title: 'Critical Drug Interaction — SSRIs and CYP2D6',
      items: [
        'Tamoxifen is a PRODRUG — it must be converted by CYP2D6 to its active metabolite endoxifen to work',
        'CYP2D6 inhibitors significantly reduce tamoxifen efficacy and may increase breast cancer recurrence risk',
        'AVOID: fluoxetine and paroxetine (potent CYP2D6 inhibitors) — do not co-prescribe',
        'AVOID: duloxetine and bupropion (moderate/strong CYP2D6 inhibitors)',
        'SAFE antidepressants with tamoxifen: sertraline, citalopram, escitalopram (minimal CYP2D6 interaction)',
        'AVOID: rifampicin (induces CYP3A4 — reduces tamoxifen levels)',
        'Warfarin: tamoxifen can increase INR — monitor closely if co-prescribed',
      ],
    },
    {
      type: 'table',
      headers: ['Antidepressant', 'CYP2D6 Effect', 'Use with Tamoxifen?'],
      rows: [
        ['Sertraline', 'Minimal inhibition', 'YES — preferred'],
        ['Citalopram', 'Minimal inhibition', 'YES — preferred'],
        ['Escitalopram', 'Minimal inhibition', 'YES — preferred'],
        ['Fluoxetine', 'Potent inhibitor', 'NO — avoid'],
        ['Paroxetine', 'Potent inhibitor', 'NO — avoid'],
        ['Duloxetine', 'Moderate inhibitor', 'NO — avoid'],
        ['Bupropion', 'Moderate inhibitor', 'NO — avoid'],
      ],
      caption: 'When depression or menopausal vasomotor symptoms require an antidepressant in a patient on tamoxifen, use sertraline, citalopram, or escitalopram',
    },

    // Monitoring
    {
      type: 'heading',
      level: 3,
      text: 'Monitoring on Tamoxifen',
    },
    {
      type: 'list',
      items: [
        'No routine blood monitoring required for tamoxifen itself',
        'Endometrial surveillance: NOT routine — only investigate if symptomatic',
        'Prompt urgent investigation if: vaginal bleeding, irregular discharge, pelvic pain or pressure → urgent gynaecology referral to exclude endometrial pathology',
        'Bone health: FRAX score and DEXA scan at baseline; review annually',
        'Cardiovascular risk: QRISK assessment',
        'Warfarin monitoring: check INR regularly if co-prescribed',
      ],
    },

    // When to stop tamoxifen
    {
      type: 'callout',
      variant: 'warning',
      title: 'When to Stop Tamoxifen',
      items: [
        'VTE occurs: stop immediately and initiate anticoagulation; discuss with oncologist urgently',
        'Unexplained vaginal bleeding: stop and investigate urgently (endometrial cancer)',
        'Before trying to conceive: stop at least 2 months beforehand (teratogenic)',
        'Before elective major surgery: stop at least 6 weeks before (VTE risk)',
        'Always discuss stopping with the oncologist or breast team before permanently discontinuing',
      ],
    },

    // HRT and vaginal oestrogen
    {
      type: 'heading',
      level: 3,
      text: 'HRT and Vaginal Oestrogen on Tamoxifen',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'HRT — Do Not Routinely Co-Prescribe',
      items: [
        'Do NOT routinely prescribe systemic HRT for menopausal symptoms in women taking tamoxifen',
        'Vaginal oestrogen: generally avoid — use non-hormonal vaginal lubricants first line',
        'Vaginal oestrogen may be considered in exceptional circumstances if quality of life is severely affected and oncologist has explicitly agreed',
        'First-line for vaginal dryness: lubricants — Replens, YES WB, Sylk',
      ],
    },

    // Managing menopausal symptoms
    {
      type: 'heading',
      level: 3,
      text: 'Managing Menopausal Symptoms on Tamoxifen',
    },
    {
      type: 'table',
      headers: ['Symptom', 'First-Line Option', 'Notes'],
      rows: [
        ['Vasomotor symptoms (hot flushes, night sweats)', 'Sertraline or citalopram', 'Do NOT use fluoxetine, paroxetine, or duloxetine — CYP2D6 interaction'],
        ['Vasomotor symptoms (second line)', 'Gabapentin or pregabalin', 'Evidence for hot flush reduction; titrate dose'],
        ['Vasomotor symptoms (third line)', 'Clonidine 50–75 mcg BD', 'Less commonly used; limited evidence'],
        ['Vaginal dryness', 'Replens, YES WB, or Sylk lubricants', 'Avoid vaginal oestrogen unless oncologist agrees'],
        ['Menopausal symptoms (non-pharmacological)', 'Acupuncture', 'NICE recommends as an option for menopausal symptoms'],
      ],
    },

    // ══════════════════════════════════════════════════════════════════════════
    // ANASTROZOLE / LETROZOLE
    // ══════════════════════════════════════════════════════════════════════════
    {
      type: 'heading',
      level: 2,
      text: 'Anastrozole / Letrozole — GP Prescribing Considerations',
    },
    {
      type: 'callout',
      variant: 'danger',
      title: 'Anastrozole is Contraindicated in Premenopausal Women',
      items: [
        'Aromatase inhibitors do NOT suppress ovarian oestrogen production',
        'They are ineffective in premenopausal women and must not be used unless ovarian suppression (e.g. goserelin) has been confirmed',
        'Do NOT co-prescribe anastrozole with tamoxifen — no clinical benefit and increased side effects',
        'Do NOT co-prescribe HRT or any oestrogen-containing therapy — directly counteracts the drug\'s action',
      ],
    },

    // Side effects
    {
      type: 'heading',
      level: 3,
      text: 'Side Effects',
    },
    {
      type: 'list',
      items: [
        'Arthralgia and joint stiffness: very common (up to 50%) — peaks at 3–6 months; major cause of non-adherence',
        'Myalgia: muscle aches and pain',
        'Osteoporosis: most serious long-term risk — bone density loss due to sustained oestrogen deficiency',
        'Menopausal symptoms: hot flushes, insomnia, vaginal dryness',
        'Hypercholesterolaemia: common — monitor lipid profile',
        'Hair thinning, headache, nausea',
        'Hypertension: listed as an adverse drug reaction — monitor blood pressure',
      ],
    },

    // Bone health
    {
      type: 'callout',
      variant: 'warning',
      title: 'Bone Health — Essential Monitoring on Aromatase Inhibitors',
      items: [
        'DEXA scan at baseline before starting (or within 6 months of starting)',
        'Prescribe calcium + vitamin D throughout treatment (e.g. Adcal-D3 one tablet twice daily)',
        'If T-score ≤ −2.5 (osteoporosis): prescribe bisphosphonate (e.g. alendronate 70 mg once weekly); refer bone clinic if needed',
        'Repeat DEXA at 2–3 years if baseline normal; annually if osteopenia or osteoporosis',
        'FRAX score at baseline for overall fracture risk stratification',
        'Encourage weight-bearing exercise throughout treatment',
      ],
    },

    // Monitoring
    {
      type: 'heading',
      level: 3,
      text: 'Monitoring on Anastrozole / Letrozole',
    },
    {
      type: 'list',
      items: [
        'Lipid profile: check at baseline and annually — hypercholesterolaemia is common',
        'Liver function tests: transient rises in ALT/AST/ALP may occur — usually not clinically significant',
        'Blood pressure: monitor at each review',
        'QRISK annually — CVD risk may increase with prolonged oestrogen suppression',
        'Bone health: DEXA, calcium + vitamin D, bisphosphonate if indicated (see above)',
      ],
    },

    // Arthralgia management
    {
      type: 'heading',
      level: 3,
      text: 'Managing Arthralgia on Aromatase Inhibitors',
    },
    {
      type: 'list',
      items: [
        'Very common; typically peaks at 3–6 months and may improve with time — reassure and encourage adherence',
        'Regular paracetamol — scheduled rather than PRN may help',
        'NSAIDs if no contraindication (PPI cover in at-risk patients)',
        'Exercise: evidence that regular physical activity reduces AI-associated arthralgia',
        'If arthralgia is severe and persistent: discuss with oncologist — consider switch to tamoxifen or letrozole',
      ],
    },

    // ══════════════════════════════════════════════════════════════════════════
    // SHARED MONITORING TABLE
    // ══════════════════════════════════════════════════════════════════════════
    {
      type: 'heading',
      level: 2,
      text: 'Quick Reference — Shared GP Monitoring Summary',
    },
    {
      type: 'table',
      headers: ['', 'Tamoxifen', 'Anastrozole / Letrozole'],
      rows: [
        ['Typical menopausal status', 'Premenopausal (mainly)', 'Postmenopausal'],
        ['Key serious risks', 'VTE, endometrial cancer', 'Osteoporosis, fractures'],
        ['Bone health', 'FRAX + DEXA at baseline; monitor annually', 'DEXA baseline essential; calcium + vit D throughout; bisphosphonate if T-score ≤ −2.5'],
        ['Blood tests', 'None routine; check INR if on warfarin', 'Lipids (baseline + annual), LFTs, blood pressure'],
        ['Safe antidepressants', 'Sertraline, citalopram, escitalopram ONLY — NOT fluoxetine/paroxetine/duloxetine', 'Any SSRI acceptable'],
        ['Vaginal oestrogen', 'Avoid; lubricants first line', 'Avoid; lubricants first line'],
        ['Systemic HRT', 'Avoid unless specialist agreement', 'Absolutely avoid — directly counteracts drug action'],
        ['Stop before surgery', 'At least 6 weeks before elective major surgery', 'No specific guidance'],
        ['If VTE occurs', 'Stop immediately; initiate anticoagulation; contact oncologist', 'Lower VTE risk than tamoxifen'],
        ['If vaginal bleeding', 'Stop and investigate urgently — endometrial cancer', 'Not an expected risk'],
        ['Premenopausal use', 'Yes — standard use', 'Contraindicated unless ovarian suppression confirmed'],
      ],
      caption: 'Summary for quick reference at the prescribing consultation',
    },

    // ── REFERRAL / ESCALATION ────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'danger',
      title: 'When to Contact Oncologist / Escalate Urgently',
      items: [
        'VTE occurs on tamoxifen — stop drug, initiate anticoagulation, contact oncologist same day',
        'Unexplained vaginal bleeding — stop tamoxifen, refer urgent gynaecology (2WW if suspected cancer)',
        'New visual disturbance on tamoxifen — refer ophthalmology',
        'Severe or worsening bone pain on AIs — review, investigate (fracture?), discuss with oncologist',
        'Patient wishes to stop treatment — advise against stopping unilaterally; facilitate urgent oncology review',
        'Significant drug interaction prescribed elsewhere — e.g. fluoxetine added to tamoxifen by another clinician',
      ],
    },

  ],
}
