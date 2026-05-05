import type { Note } from '../data/notes'

export const psoriasis: Note = {
  id: 'psoriasis',
  title: 'Psoriasis — Diagnosis & Management',
  subtitle: 'PCDS-based management by subtype: plaque, scalp, flexural, guttate and systemic',
  tags: ['dermatology'],

  body: 'psoriasis plaque psoriasis scalp psoriasis guttate psoriasis flexural genital pustular erythrodermic psoriatic arthritis calcipotriol calcipotriene betamethasone Enstilar Wynzora Dovobet Diprosalic salicylic acid coal tar Exorex Sebco T-gel emollient DLQI BSA body surface area severity PEST questionnaire methotrexate MTX ciclosporin acitretin biologic anti-TNF biologics roflumilast tapinarof annual review CVD cardiovascular risk PEST psoriatic arthritis screen dermatology referral',

  content: [

    // ── OVERVIEW & SEVERITY ──────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'info',
      title: 'Psoriasis — Initial Assessment and Severity',
      items: [
        'Chronic autoimmune skin condition — accelerated skin cell turnover causing plaques, scales and inflammation',
        'Assess severity to decide: treat in primary care OR refer to dermatology',
        'Mild/moderate: BSA <10% in easily treatable areas → treat in primary care, refer if treatment fails',
        'Severe — refer to dermatology: BSA ≥10%, OR difficult area (scalp, genitals, flexures, face, nails, palms/soles), OR nail changes (pitting, onycholysis, subungual hyperkeratosis), OR psoriatic arthritis, OR significant QOL impact (DLQI ≥10), OR generalised pustular/erythrodermic psoriasis, OR child with psoriasis',
        'DLQI (Dermatology Life Quality Index): patient-completed; available free online — score 0–30; ≥10 = very/extremely large impact on life = severe',
      ],
    },

    // ── PLAQUE PSORIASIS ──────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: '1. Plaque Psoriasis' },

    {
      type: 'list',
      items: [
        'Appearance: silvery scaly, red, well-demarcated, itchy plaques — typically elbows, knees, scalp, lower back',
        'Adequate emollients are essential — reduce scaling and allow topical treatments to penetrate',
      ],
    },

    {
      type: 'table',
      headers: ['Product', 'Composition', 'Dose / Regimen', 'Notes'],
      rows: [
        ['Enstilar foam (or Wynzora cream / Dovobet gel)', 'Calcipotriol 50 mcg/g + Betamethasone dipropionate 0.5 mg/g', 'Apply thinly OD. Review at 4 weeks. Max continuous potent steroid use: 8 weeks (up to 12-week trial), then maintenance twice weekly', 'First-line for plaque psoriasis. Apply thinly — thick application increases steroid side effects. Calcipotriol prevents tachyphylaxis to steroid'],
        ['Exorex lotion', 'Coal tar 1% preparation', 'Apply BD/TDS', 'Steroid-sparer — no steroid side effects. Suitable for thin skin, smaller plaques. Messy — can stain skin and clothes. Useful for maintenance between steroid courses'],
        ['Dovonex cream', 'Calcipotriol only (no steroid)', 'OD–BD', 'Vitamin D analogue alone — use as maintenance after active treatment phase or as steroid-sparing adjunct'],
        ['Dithranol (short contact)', 'Dithranol 0.1–2%', 'Apply 20–30 mins then wash off; increase concentration weekly', 'Older treatment; stains skin/clothing; rarely used; reserve for specialist or patient with previous good response'],
        ['Tazarotene gel (Zorac)', 'Retinoid 0.05–0.1%', 'OD, apply to plaque only', 'Effective but irritant; avoid on face/flexures; teratogenic — avoid in women of childbearing age without contraception'],
      ],
      caption: 'Calcipotriol (vitamin D analogue) + betamethasone dipropionate (potent steroid) combination is the first-line treatment. Avoid continuous potent steroids >8 weeks on the same site — risk of skin atrophy. After active treatment, switch to calcipotriol alone or twice-weekly combination maintenance.',
    },

    // ── SCALP PSORIASIS ───────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: '2. Scalp Psoriasis' },

    {
      type: 'table',
      headers: ['Scale Thickness', 'Treatment', 'Instructions'],
      rows: [
        ['Thin scale', 'Diprosalic scalp application (betamethasone + salicylic acid)', 'Apply OD, leave on dry scalp 15 minutes, wash off. Use other end of bottle as shampoo end of day. Use daily for 4 weeks, then reduce to maintenance twice weekly. Diprosalic also suitable for hyperkeratotic hand/foot psoriasis'],
        ['Thin scale alternative', 'Betamethasone 0.1% scalp application alone', 'As above'],
        ['Itching (acute)', 'Dermovate scalp application (clobetasol propionate — very potent) or Betnovate scalp foam/shampoo', 'OD for maximum 2 weeks (very potent steroid — use short term only for severe itch)'],
        ['Thick scale', 'Sebco ointment (coal tar + coconut oil)', 'Apply overnight, leave in, wash out with tar shampoo (T-gel) next morning. Use for 4 weeks, then step down to Diprosalic when scale thinner. Can cause temporary hair loss which will recover'],
        ['Thick scale — soften first', 'Coconut oil / olive oil / arachis oil', 'Apply overnight to soften; wash out with tar shampoo morning. Helps scale removal before medicated products'],
      ],
      caption: 'Non-scarring alopecia occurs in scalp psoriasis — reassure patient hair loss is temporary and will regrow with treatment. Tar shampoos (T-gel, Polytar) used for ongoing maintenance after acute treatment.',
    },

    // ── FACIAL, FLEXURAL, GENITAL ─────────────────────────────────────────────
    { type: 'heading', level: 2, text: '3. Facial, Flexural and Genital Psoriasis' },

    {
      type: 'list',
      items: [
        'Use ONLY low-potency or moderate-potency steroids in these areas — thin skin at high risk of atrophy and telangiectasia',
        'Emollients + Eumovate (clobetasone butyrate 0.05% — moderate) OD–BD; maximum 2 weeks per month',
        'In the ears: Betnovate 0.1% drops (not cream in ear canal)',
        'Best alternative if steroid needed long-term: Protopic (tacrolimus 0.1%) — calcineurin inhibitor, no skin atrophy risk, licenced for psoriasis; apply OD/BD; may cause initial burning',
        'Genital psoriasis: often responds well to mild/moderate steroid; sexual dysfunction common — address sensitively',
        'Avoid potent steroids (dermovate/betnovate) on face/flexures/genitals long-term',
      ],
    },

    // ── GUTTATE PSORIASIS ─────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: '4. Guttate Psoriasis' },

    {
      type: 'list',
      items: [
        'Characterised by abrupt onset of small (0.5–2 cm) teardrop-shaped scaly lesions scattered over most of the body',
        'Usually triggered by a streptococcal URTI (throat swab to confirm; treat with penicillin if positive)',
        'Most cases resolve spontaneously — reassure patient',
        'Treatment: generous emollients + Exorex lotion (coal tar) — treat like smaller plaques',
        'Natural sunlight (carefully) may help — consider referral for narrowband UVB (phototherapy) if not improving after 3 months',
        'Some cases progress to chronic plaque psoriasis — arrange dermatology follow-up if not resolving',
      ],
    },

    // ── SYSTEMIC TREATMENTS ───────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Systemic Treatments — Specialist Initiated' },

    {
      type: 'table',
      headers: ['Drug', 'Indication', 'Key Monitoring / Notes'],
      rows: [
        ['Methotrexate (MTX)', 'Moderate-severe plaque psoriasis — first-line systemic', 'SE: pancytopenia, hepatotoxicity, pneumonitis, infections. Requires baseline LFT, FBC, U&E; weekly FBC for first 4 weeks; LFT 3-monthly. Folate 5 mg once weekly (not same day as MTX). AVOID in pregnancy — teratogenic; stop 3 months before conception. Hepatitis B/C serology before starting'],
        ['Acitretin (systemic retinoid)', 'Severe plaque, pustular or erythrodermic psoriasis', 'Highly teratogenic — AVOID in women of childbearing age; stop 3 years before conception. Regular LFTs and lipids monitoring'],
        ['Ciclosporin', 'Severe or rapidly worsening psoriasis; useful short-term to induce remission', 'Nephrotoxic — U&E, creatinine, urate monitoring; hypertension, drug interactions (avoid NSAIDs). Usually limited to 1–2 year courses'],
        ['Biologics (anti-TNF, anti-IL-17, anti-IL-23)', 'Severe psoriasis failing MTX/ciclosporin; or psoriatic arthritis', 'NHS England criteria — specialist prescription only. Adalimumab, secukinumab, ixekizumab, guselkumab, risankizumab etc. TB screening, hepatitis B/C, FBC before starting. Avoid live vaccines'],
        ['Roflumilast cream (topical — newer)', 'Moderate plaque psoriasis', 'PDE4 inhibitor; approved as topical option; no skin atrophy risk unlike steroids'],
        ['Tapinarof cream (topical — newer)', 'Moderate plaque psoriasis', 'AhR modulator; non-steroid topical; check local formulary availability'],
      ],
      caption: 'Systemic therapies and biologics: avoid live vaccines at least 4 weeks before starting and during treatment. Ensure annual flu + pneumococcal vaccination. Pre-conception advice: MTX — stop 3 months before; acitretin — stop 3 years before; ciclosporin — may be used in pregnancy under specialist guidance.',
    },

    // ── ANNUAL REVIEW ─────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Annual Review — "Deeper Than Skin"' },

    {
      type: 'list',
      items: [
        'Cardiovascular risk: psoriasis is an independent cardiovascular risk factor (similar to DM) — assess and document QRISK; manage hypertension, dyslipidaemia, obesity, smoking, T2DM aggressively',
        'Trigger review: ask about medications worsening psoriasis — beta-blockers, lithium, NSAIDs, antimalarials (hydroxychloroquine), ACE inhibitors',
        'Psoriatic arthritis screening: occurs in 10–30% of psoriasis patients; can precede skin disease by 3–10 years; causes irreversible destructive arthropathy',
        'PEST questionnaire: 5 questions — score ≥3 = refer early to rheumatology (UHDB Burton)',
        'Alcohol: worsens psoriasis and impairs treatment response — advise reduction',
        'Psychological impact: depression, anxiety and stigma are common — screen using PHQ-9/GAD-7; DLQI to assess QOL impact',
        'Infection: if severe — consider HIV test (can precipitate or worsen psoriasis), check immunosuppression level',
        'Vaccination: annual flu, 5-yearly pneumococcal for all patients on systemic therapy',
      ],
    },

    // ── LOCAL REFERRAL ───────────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'Dermatology (routine): UHDB Queen\'s Hospital Burton OR Cannock Chase Hospital (local procedures, minor surgery) — primary dermatology referral for South Staffordshire',
        'Dermatology (urgent — erythrodermic or generalised pustular): UHDB Burton A&E or urgent dermatology via e-RS',
        'Psoriatic arthritis (PEST ≥3): rheumatology at UHDB Queen\'s Hospital Burton — refer early to prevent joint damage',
        'Phototherapy (narrowband UVB): check availability at UHDB Burton dermatology or Cannock Chase; patient may need to travel to Good Hope (UHB) for phototherapy',
        'Biologics: initiated by specialist dermatology at UHDB Burton or Birmingham (Good Hope); patient may attend Birmingham for biologic clinic',
        'Patient may prefer alternative local site — discuss at consultation',
        'Psoriasis Association support: signpost to psoriais.org.uk and DLQI patient decision aid',
      ],
    },

    // ── SAFETY NETTING ───────────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'danger',
      title: 'Safety Netting — When to Act Urgently',
      items: [
        '999 / A&E: erythrodermic psoriasis (widespread skin redness >90% BSA — at risk of hypothermia, infection, high-output cardiac failure)',
        'Same-day GP / urgent dermatology: generalised pustular psoriasis (fever, widespread sterile pustules — systemic emergency), rapid widespread spread with systemic features',
        'Red flags: sudden massive flare after stopping systemic steroids (can trigger generalised pustular psoriasis — avoid oral steroids in psoriasis unless under specialist guidance), new joint pain + skin disease (psoriatic arthritis)',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'PCDS — Psoriasis Guidelines', url: 'https://www.pcds.org.uk/clinical-guidance/psoriasis' },
        { label: 'NICE CKS — Psoriasis', url: 'https://cks.nice.org.uk/topics/psoriasis/' },
        { label: 'BAD — Psoriasis Guidelines', url: 'https://www.bad.org.uk/healthcare-professionals/clinical-standards/clinical-guidelines/psoriasis' },
        { label: 'DLQI Calculator', url: 'https://www.dlqi.net/' },
        { label: 'Psoriasis Association', url: 'https://www.psoriasis-association.org.uk/' },
        { label: 'NHS — Psoriasis', url: 'https://www.nhs.uk/conditions/psoriasis/' },
      ],
    },
  ],
}
