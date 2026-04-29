import type { Note } from '../data/notes'

export const phimosisCircumcision: Note = {
  id: 'phimosis-circumcision',
  title: 'Phimosis & Circumcision',
  subtitle: 'Physiological vs pathological phimosis, steroid treatment, paraphimosis emergency, and NHS circumcision indications',
  tags: ['urology', 'paediatrics'],

  body: 'phimosis non-retractile foreskin physiological pathological paraphimosis betamethasone betnovate clobetasol dermovate circumcision preputioplasty dorsal slit lichen sclerosus BXO balanitis xerotica obliterans hypospadias frenulum ballooning tight prepuce foreskin retraction steroid cream urology referral',

  content: [

    // ── OVERVIEW ─────────────────────────────────────────────────────────────────
    {
      type: 'image',
      src: '/images/phimosis-image.png.webp',
      alt: 'Diagram comparing phimosis (non-retractile foreskin) with normal foreskin anatomy showing foreskin and glans',
      caption: 'Phimosis: the foreskin cannot be fully retracted over the glans. This is normal in young children (physiological) and only requires treatment when causing symptoms (pathological).',
      sensitive: true,
    },

    {
      type: 'callout',
      variant: 'info',
      title: 'Key Distinction — Physiological vs Pathological',
      items: [
        'Physiological phimosis: the foreskin is naturally non-retractile in infancy and childhood — this is NORMAL. The foreskin gradually becomes retractile with age; ~50% by age 1, ~90% by age 16.',
        'Pathological phimosis: the foreskin becomes tight due to scarring from lichen sclerosus (BXO), recurrent balanitis, forcible retraction injury, or poorly controlled diabetes.',
        'NEVER forcibly retract a child\'s foreskin — this causes pain, bleeding and scarring that creates the very pathological phimosis you are trying to prevent.',
        'Treat only if symptomatic: ballooning during urination, voiding difficulty, recurrent UTIs, recurrent balanitis, or pain during erection/intercourse.',
      ],
    },

    // ── GRADING ──────────────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Phimosis Grading (Kikiros Scale)' },

    {
      type: 'image',
      src: '/images/phimosis-grades.png',
      alt: 'Kikiros grading scale for phimosis: Grade 0 (full retraction) to Grade 5 (no retraction at all, pinhole)',
      caption: 'Phimosis grading 0–5. Grade 0 = full retraction; Grade 5 = complete non-retraction (pinhole). Grades 3–5 with symptoms warrant treatment. Useful for documenting severity and monitoring response to steroid treatment.',
      sensitive: true,
    },

    {
      type: 'table',
      headers: ['Grade', 'Description'],
      rows: [
        ['0', 'Full retraction — no phimosis'],
        ['1', 'Full retraction but tight behind glans'],
        ['2', 'Partial retraction — glans partially visible'],
        ['3', 'Partial retraction — meatus just visible'],
        ['4', 'Slight retraction only — meatus not visible'],
        ['5', 'No retraction at all (pinhole)'],
      ],
      caption: 'Grades 1–2 with no symptoms: reassure and monitor. Grades 3–5 with symptoms, or any grade with recurrent infections: consider steroid cream trial.',
    },

    // ── MANAGEMENT ───────────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Management' },

    {
      type: 'table',
      headers: ['Situation', 'Management'],
      rows: [
        ['Child <2 years — physiological non-retractile foreskin, no symptoms', 'Expectant — reassure parents this is entirely normal. No treatment, no referral. Foreskin will retract naturally with age.'],
        ['Child <2 — ballooning or UTI', 'Refer paediatric urology if recurrent UTIs or urinary obstruction. Ballooning alone without symptoms is generally not an indication for intervention.'],
        ['Child >2 — symptomatic (UTI, ballooning, pain)', 'Trial of topical steroid cream (betamethasone 0.1% or 0.05%) — apply BD for 4–8 weeks with gentle daily retraction as far as comfortable. If no improvement or lichen sclerosus suspected: refer urology.'],
        ['Adult — pathological phimosis', 'Topical steroid cream (betamethasone valerate 0.1% or betamethasone 0.05%) BD for 4–8 weeks + gentle stretching. If associated with candidal balanitis, add clotrimazole. If fails: refer urology for preputioplasty or circumcision.'],
        ['Lichen sclerosus (BXO)', 'Clobetasol propionate 0.05% (Dermovate) OD for 3 months — superpotent steroid is first-line. Refer urology for ongoing management and circumcision assessment. Long-term urology follow-up (risk of urethral stenosis).'],
      ],
      caption: 'Steroid cream treatment has ~65–75% success rate in children. Apply to the tip of the foreskin (the tight ring) — do not apply inside. Gentle daily stretching alongside the cream is essential.',
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'Steroid Cream Technique — What to Tell the Patient/Parents',
      items: [
        'Apply a small amount of betamethasone 0.1% cream to the tight ring at the tip of the foreskin — twice daily',
        'After applying, gently retract the foreskin as far as it will go without pain — hold for 30 seconds; do this with each application',
        'Continue for 4–8 weeks — do not give up before 4 weeks as response takes time',
        'If any fungal balanitis develops during treatment: add clotrimazole 1% cream (Canesten HC combined cream is convenient)',
        'Review at 4–8 weeks — if improved but not resolved, continue for another 4 weeks; if no improvement at 8 weeks, refer urology',
        'Prescribe: Betamethasone valerate 0.1% cream — 30g; apply small amount to tip of foreskin TWICE daily',
      ],
    },

    // ── PARAPHIMOSIS ─────────────────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'danger',
      title: 'Paraphimosis — Urological Emergency',
      items: [
        'The retracted foreskin becomes trapped behind the glans and cannot be returned to its normal position',
        'The constricting ring causes venous and lymphatic obstruction → progressive swelling of the glans → ischaemia → necrosis if untreated',
        'Presentation: swollen, painful glans with foreskin retracted behind it; foreskin ring appears as tight band',
        'Common causes: foreskin left retracted after catheterisation, examination or intercourse',
        '🔴 Send to A&E immediately — do NOT attempt reduction in primary care without training',
        'Hospital treatment: ice/compression to reduce oedema then manual reduction; if fails → surgical dorsal slit under local anaesthetic',
        'After resolution: arrange elective circumcision to prevent recurrence',
        'Prevention: always return the foreskin after catheterisation — document this in notes',
      ],
    },

    // ── CIRCUMCISION ─────────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Circumcision' },

    {
      type: 'image',
      src: '/images/Circumcision_illustration.jpg',
      alt: 'Circumcision surgery illustration showing dorsal slit technique with foreskin and frenulum',
      caption: 'Circumcision surgical technique. The NHS performs circumcision for medical indications only — not for cultural or religious reasons (available privately). Dorsal slit or full circumcision are the surgical options.',
      sensitive: true,
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'NHS Circumcision — Medical Indications Only',
      items: [
        'The NHS does NOT fund circumcision for cultural or religious reasons — direct to private services for non-medical requests',
        'Medical indications for NHS circumcision: pathological phimosis (including lichen sclerosus/BXO), recurrent balanoposthitis (≥3 episodes), paraphimosis, penile cancer',
        'Steroid cream should be trialled first for phimosis before surgical referral (unless lichen sclerosus or severe)',
        'IMPORTANT: Always exclude hypospadias before referring for circumcision — the foreskin may be needed for surgical repair; referring without this check can result in loss of reconstructive tissue',
      ],
    },

    {
      type: 'table',
      headers: ['Feature', 'Detail'],
      rows: [
        ['NHS indications', 'Pathological phimosis, lichen sclerosus (BXO), recurrent balanitis (≥3/year), paraphimosis, penile cancer'],
        ['NOT funded by NHS', 'Cultural circumcision, religious circumcision (Jewish, Muslim), personal preference — private referral only'],
        ['Before referral — check', 'Exclude hypospadias (urethral meatus not at tip of glans) — if present, foreskin needed for repair'],
        ['Benefits', 'Eliminates phimosis/paraphimosis risk; reduces recurrent balanitis; reduces UTI risk; small reduction in penile cancer risk; reduces STI/HIV risk (evidence from global data)'],
        ['Risks', 'Bleeding, infection, haematoma, skin bridge, meatal stenosis, reduced sensation — discuss in shared decision-making'],
        ['Surgical options', 'Full circumcision (most common); preputioplasty (foreskin-preserving widening — less common); dorsal slit (emergency)'],
        ['Recovery', 'Usually day-case. 2–4 weeks off contact sport/intercourse. Swelling and bruising expected for 1–2 weeks.'],
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'balanitis', label: 'Balanitis', subtitle: 'Causes, DDx and treatment of glans inflammation' },
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Phimosis', url: 'https://cks.nice.org.uk/topics/phimosis/' },
        { label: 'NICE CKS — Balanitis', url: 'https://cks.nice.org.uk/topics/balanitis/' },
        { label: 'RCH — The Penis and Foreskin', url: 'https://www.rch.org.au/clinicalguide/guideline_index/the_penis_and_foreskin/' },
        { label: 'Betamethasone Phimosis Handout', url: '/images/handout-betamethasone-phimosis-09-2020.pdf' },
        { label: 'BAUS — Circumcision in Adults', url: 'https://www.baus.org.uk/patients/surgical_procedures/circumcision_in_adults/' },
      ],
    },

  ],
}
