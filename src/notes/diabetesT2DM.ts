import type { Note } from '../data/notes'

export const diabetesT2DM: Note = {
  id: 'diabetes-t2dm',
  title: 'T2DM Management',
  subtitle: 'NICE 2026 algorithm, metformin, SGLT2i, GLP-1, DPP4i, insulin, targets & sick day rules',
  tags: ['endocrinology'],

  body: 'type 2 diabetes T2DM management NICE 2026 NG28 metformin SGLT2 inhibitor dapagliflozin empagliflozin canagliflozin GLP-1 semaglutide liraglutide tirzepatide Mounjaro Ozempic Wegovy dulaglutide Trulicity DPP4 inhibitor sitagliptin alogliptin gliptin sulfonylurea gliclazide pioglitazone insulin HbA1C target QRISK cardiovascular renal CKD heart failure obesity ASCVD frailty early onset diabetes sick day rules SADMAN metformin MR Sukkarto Forxiga Jardiance statin atorvastatin BP ACE ARB lipids weight loss bariatric surgery',

  content: [
    {
      type: 'heading',
      level: 2,
      text: 'NICE 2026 — Seven Treatment Pathways (NG28 Updated Feb 2026)',
    },
    {
      type: 'image',
      src: '/images/diabetes-nice-2026.png',
      alt: 'NICE 2026 T2DM seven treatment pathways — initial therapy, escalation by comorbidity',
      caption: 'NICE NG28 (Feb 2026): For ALL T2DM, assess CV status, renal status and frailty. Initial treatment: metformin M/R + SGLT2i for all. Then stratify by comorbidity: CKD, ASCVD, obesity, early-onset T2DM, frailty. Escalate with DPP4i → sulfonylurea/pioglitazone/insulin as needed.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Key NICE 2026 updates',
      items: [
        'SGLT2i now offered to ALL people with T2DM at initiation (not just those with high CV risk) — dapagliflozin preferred',
        'Metformin modified-release (M/R) preferred over standard release to reduce GI side effects',
        'GLP-1 RAs now include: liraglutide, dulaglutide, oral semaglutide, SC semaglutide (up to 1mg/week) — tirzepatide added for obesity/early-onset pathways',
        'Do not offer DPP4i if already on GLP-1 RA or tirzepatide',
        'Reinforce diet, behaviour change and weight optimisation at ALL stages',
        'If >1 comorbidity: discuss which to prioritise for treatment',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'HbA1C Targets',
    },
    {
      type: 'table',
      headers: ['Scenario', 'Target HbA1C', 'Notes'],
      rows: [
        ['Lifestyle only OR metformin alone (no hypo risk)', '48 mmol/mol (6.5%)', 'Personalise — tighter if younger, longer life expectancy'],
        ['On drug that can cause hypoglycaemia (SU, insulin) OR on ≥2 drugs', '53 mmol/mol (7.0%)', 'Balance hypo risk against complication prevention'],
        ['Intervention threshold on metformin (when to add next drug)', '58 mmol/mol (7.5%)', 'Add next drug when HbA1C rises to or above 58'],
        ['Elderly / frailty / limited life expectancy', 'Individualise — often 58–64 mmol/mol', 'Avoid hypoglycaemia. Simplify regimen. Less intensive targets'],
        ['T1DM', '48 mmol/mol (6.5%)', 'Measure 6-monthly. CGM preferred for self-monitoring'],
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Initial Therapy — All T2DM',
    },
    {
      type: 'table',
      headers: ['Drug', 'Dose & Titration', 'Key Counselling', 'When to avoid'],
      rows: [
        ['Metformin M/R (Sukkarto SR preferred)', 'Start 500mg OD with evening meal. Increase by 500mg every 2 weeks to target 1.5–2g/day (max 2g). Usual dose: 1g OD or 1g BD', 'Take with food to reduce GI side effects. MR has fewer GI side effects than standard. Review dose at eGFR <45 (max 1g/day); stop if eGFR <30', 'eGFR <30, acute illness/dehydration (hold — SADMAN), contrast media (hold 48h), hepatic impairment, alcohol excess'],
        ['Dapagliflozin (Forxiga) 10mg OD — SGLT2i preferred', 'Start 10mg OD any time of day. No titration needed', 'Common: genital fungal infections, UTI (urinating out glucose). Rare but serious: euglycaemic DKA (check ketones if unwell regardless of BM), Fournier\'s gangrene. Cardioprotective + renoprotective even in non-diabetic CKD/HFrEF', 'eGFR <15 (stop). Less glucose-lowering effect if eGFR <45 but still cardioprotective — continue. Also avoid in recurrent UTIs, high ketone risk'],
        ['Empagliflozin (Jardiance) 10mg OD — alternative SGLT2i', '10mg OD (can increase to 25mg for additional glucose-lowering)', 'As per dapagliflozin. Strong CV outcome data (EMPA-REG)', 'As per dapagliflozin'],
      ],
      caption: 'SADMAN drugs to hold if unwell/vomiting/dehydrated: Sulfonylureas, ACE inhibitors, Diuretics, Metformin, ARBs, NSAIDs, SGLT2 inhibitors.',
    },

    {
      type: 'heading',
      level: 2,
      text: 'Comorbidity-Specific Pathways (NICE 2026)',
    },
    {
      type: 'table',
      headers: ['Comorbidity', 'Initial Therapy', 'Escalation'],
      rows: [
        ['No relevant comorbidities', 'Metformin M/R + SGLT2i (dapagliflozin)', 'Add DPP4i → if insufficient: SU (if eGFR >30) or pioglitazone or insulin'],
        ['ASCVD (atherosclerotic CVD)', 'Triple therapy first-line: Metformin M/R + SGLT2i + SC semaglutide (up to 1mg/week)', 'If develops ASCVD after starting: add semaglutide + SGLT2i if not already. Further escalation: SU or pioglitazone or insulin'],
        ['Chronic kidney disease (CKD)', 'eGFR >30: Metformin M/R + SGLT2i. eGFR 20–30: Dapagliflozin or empagliflozin + DPP4i (alogliptin). eGFR <20: DPP4i; if contraindicated → pioglitazone or insulin', 'SGLT2i continue for cardioprotection even when glucose-lowering effect diminishes (eGFR 15–45)'],
        ['Heart failure (HFrEF)', 'Metformin M/R + SGLT2i (cardioprotective). Avoid pioglitazone (worsens HF)', 'DPP4i with care (saxagliptin associated with HF hospitalisation — avoid; alogliptin/sitagliptin safer)'],
        ['Obesity (BMI >35, or lower in BAME)', 'Metformin M/R + SGLT2i. Add GLP-1 RA (SC semaglutide, liraglutide, dulaglutide) or tirzepatide if initial therapy started ≥3 months ago and target not met', 'Avoid adding DPP4i if on GLP-1 RA. If GLP-1 contraindicated: DPP4i → SU or pioglitazone or insulin'],
        ['Early-onset T2DM (<40 years)', 'Consider triple therapy first-line: Metformin M/R + SGLT2i + GLP-1 RA (or tirzepatide). More aggressive targets due to longer duration of complication exposure', 'If already on GLP-1/tirzepatide: add SU, pioglitazone or insulin as needed'],
        ['Frailty', 'Metformin M/R. Add SGLT2i only if it does not place patient at risk of adverse events (e.g. hypotension). If at risk: DPP4i preferred. Avoid SU if fall/hypo risk high', 'Aim for smallest number and lowest effective doses. Avoid polypharmacy. Relax glycaemic targets'],
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'GLP-1 Receptor Agonists — Full Prescribing Guide',
    },
    {
      type: 'para',
      text: 'GLP-1 RAs mimic endogenous GLP-1 (released from small intestine after eating) → stimulate insulin release, suppress glucagon, slow gastric emptying, reduce appetite. Strong CV and renal outcome data. Licensed as per NICE for T2DM and weight management.',
    },
    {
      type: 'table',
      headers: ['Drug', 'Brand', 'Dose & Titration', 'Licensed for', 'Notes'],
      rows: [
        ['Semaglutide SC', 'Ozempic (T2DM), Wegovy (obesity)', 'T2DM: 0.25mg SC once weekly × 4 weeks → 0.5mg OW × 4 weeks → 1mg OW (max for T2DM). Obesity (Wegovy): 0.25→0.5→1→1.7→2.4mg OW (monthly increments)', 'T2DM (Ozempic up to 1mg). Obesity without T2DM (Wegovy ≥2.4mg)', 'Once weekly SC injection (abdomen/thigh/upper arm). Strong CV outcome data (SUSTAIN-6). Continue only if ≥3% weight loss at 6 months AND HbA1C improved ≥11 mmol/mol'],
        ['Oral semaglutide', 'Rybelsus', '3mg OD × 30 days → 7mg OD × 30 days → 14mg OD. Take fasting, ≥30 min before food/drink (small sip of water only)', 'T2DM as add-on or monotherapy if metformin not tolerated', 'Oral option — good for needle-phobic patients. Less weight loss than SC. Avoid if GI dysmotility'],
        ['Liraglutide', 'Victoza (T2DM), Saxenda (obesity)', 'T2DM (Victoza): 0.6mg SC OD × 1 week → 1.2mg → 1.8mg OD. Obesity (Saxenda): 0.6→1.2→1.8→2.4→3.0mg OD (weekly increments)', 'T2DM (Victoza). Obesity: BMI ≥30 with comorbidity, or ≥35 via tier 3 weight management', 'Daily SC injection. CV outcome data (LEADER trial). GI side effects common (nausea, vomiting)'],
        ['Dulaglutide', 'Trulicity', '0.75mg SC once weekly → can increase to 1.5mg → 3mg → 4.5mg OW', 'T2DM. CV risk reduction in T2DM with established CVD or multiple RFs (REWIND trial)', 'Once weekly pen. No dose adjustment for renal impairment down to eGFR 15. Less nausea than liraglutide'],
        ['Exenatide', 'Byetta (BD), Bydureon (OW)', 'Byetta: 5mcg SC BD before meals × 4 weeks → 10mcg BD. Bydureon: 2mg SC once weekly', 'T2DM add-on. Older agent — largely superseded by semaglutide/dulaglutide', 'Avoid if eGFR <30. More GI side effects. Bydureon requires reconstitution'],
        ['Tirzepatide', 'Mounjaro', 'T2DM: 2.5mg SC OW × 4 weeks → 5mg → 7.5mg → 10mg → 12.5mg → 15mg OW. Obesity (Mounjaro): same titration to max 15mg', 'T2DM (NICE approved). Obesity without T2DM (NICE TA approved May 2024)', 'Dual GIP+GLP-1 agonist — greater weight loss than GLP-1 alone. SURPASS trials. Continue if ≥5% weight loss at 6 months'],
      ],
      caption: 'All GLP-1 RAs/tirzepatide: main risk = pancreatitis (stop if severe abdominal pain). GI side effects (nausea, vomiting, diarrhoea) common — usually improve over weeks. Contraindicated in personal/family history of medullary thyroid carcinoma or MEN2. Avoid if eGFR <15 (most agents) or severe hepatic impairment.',
    },
    {
      type: 'linkrow',
      links: [
        { label: 'GLP-1 One-Page Summary (PDF)', url: '/pdfs/glp1-summary.pdf' },
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'SGLT2 Inhibitors — Full Guide',
    },
    {
      type: 'table',
      headers: ['Drug', 'Brand', 'Dose', 'Licensed indications', 'Special notes'],
      rows: [
        ['Dapagliflozin', 'Forxiga', '10mg OD', 'T2DM. CKD (eGFR 25–75 with ACR ≥22.6 — regardless of T2DM). HFrEF (regardless of T2DM). HFmrEF/HFpEF', 'PREFERRED SGLT2i on most formularies. Stop if eGFR <15. Cardio/renoprotective even without diabetes'],
        ['Empagliflozin', 'Jardiance', '10mg OD (increase to 25mg for glucose-lowering)', 'T2DM. CKD. HFrEF/HFpEF. CV risk reduction', 'Strong EMPA-REG OUTCOME data. Can use in HFpEF'],
        ['Canagliflozin', 'Invokana', '100mg OD (up to 300mg)', 'T2DM. CKD with ACR >300', 'Higher risk of DKA and amputations (toes) — less commonly used'],
        ['Ertugliflozin', 'Steglatro', '5mg OD (increase to 15mg)', 'T2DM only', 'Less outcome data — rarely first choice'],
      ],
      caption: 'SGLT2i class effects: euglycaemic DKA (check ketones if unwell regardless of blood glucose — stop and seek advice), genital thrush, UTIs, Fournier\'s gangrene (rare). All SADMAN drugs — hold if vomiting/dehydrated/sick. Hold 3 days before elective surgery. Check eGFR and U&E at initiation and 3-monthly.',
    },

    {
      type: 'heading',
      level: 2,
      text: 'DPP-4 Inhibitors (Gliptins)',
    },
    {
      type: 'table',
      headers: ['Drug', 'Brand', 'Dose', 'Renal adjustment', 'Notes'],
      rows: [
        ['Alogliptin', 'Vipidia', '25mg OD. Reduce to 12.5mg if CrCl <50; 6.25mg if CrCl <30', 'Yes — dose reduce in renal impairment', 'Preferred on many formularies. Weight/hypo neutral'],
        ['Sitagliptin', 'Januvia', '100mg OD. 50mg if eGFR 30–50; 25mg if eGFR <30', 'Yes', 'Commonly used. Can continue to eGFR <30 with dose reduction'],
        ['Linagliptin', 'Trajenta', '5mg OD — NO renal dose adjustment needed', 'No', 'Useful in CKD — no dose adjustment required. Renally excreted minimally'],
        ['Saxagliptin', 'Onglyza', '5mg OD (2.5mg if eGFR <50)', 'Yes', 'AVOID in heart failure (increased hospitalisation risk — SAVOR trial)'],
      ],
      caption: 'Do NOT combine DPP4i with GLP-1 RA or tirzepatide (same mechanism amplified, no added benefit, wasted cost). Weight neutral, no hypoglycaemia. Good in frailty and renal disease.',
    },

    {
      type: 'heading',
      level: 2,
      text: 'Sulfonylureas & Other Agents',
    },
    {
      type: 'table',
      headers: ['Drug', 'Dose', 'Key points'],
      rows: [
        ['Gliclazide (preferred SU)', '40–80mg OM (max 160mg BD). Start low. MR formulation available (30–120mg OD)', 'Risk of hypoglycaemia especially at higher doses and in CKD. Increase monitoring. Do not use in eGFR <30 (accumulates)'],
        ['Glibenclamide / glipizide', 'Avoid in elderly — long half-life, high hypo risk', 'Not recommended in UK for new starts'],
        ['Pioglitazone', '15mg OD increasing to 30–45mg OD', 'Useful in insulin resistance / high insulin doses not working. Avoid in HF (fluid retention), bladder cancer (monitor haematuria), osteoporosis, macular oedema. Can use in renal failure'],
        ['Acarbose', '50mg TDS with meals, increase to 100mg TDS', 'GI side effects limit use. Occasionally useful for postprandial spikes. Rarely used in UK'],
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Insulin in T2DM',
    },
    {
      type: 'list',
      items: [
        'Consider insulin when: HbA1C >86 mmol/mol despite triple therapy, symptomatic hyperglycaemia, GLP-1 unavailable/contraindicated, rapid glycaemic reduction needed',
        'First-line T2DM insulin: NPH intermediate-acting (Humulin I or Insulatard) OD or BD — fewer hypos and less weight gain vs analogues. OR premixed ordinary insulin (Humulin M3 BD)',
        'Second-line: long-acting analogues (Lantus/glargine, Levemir/detemir, Toujeo 300 units/ml OD) or premixed analogues (Novomix 30, Humalog Mix)',
        'Ultra-long acting (Tresiba/degludec 300 units/ml) — specialist initiation only',
        'Starting dose: typically 10 units NPH at bedtime; titrate by 2 units every 3 days based on fasting glucose',
        'Always continue metformin with insulin unless contraindicated (reduces insulin dose needed)',
        'Counsel: injection technique, site rotation to avoid lipodystrophy, hypo recognition and treatment, sick day rules, driving rules',
      ],
    },
    {
      type: 'image',
      src: '/images/insulin-types-table.png',
      alt: 'Insulin types table — rapid, short, intermediate, long-acting, premixed with onset peak and duration profiles',
      caption: 'Common insulins: rapid-acting analogues (NovoRapid, Humalog — onset 15–30 min, 4h duration); long-acting analogues (Lantus, Levemir — 18–24h, no peak); super-long (Toujeo, Tresiba — 36h+). See insulin guidelines PDF for full titration guidance.',
    },
    {
      type: 'linkrow',
      links: [
        { label: 'Insulin Guidelines (Adults & Children) PDF', url: '/pdfs/insulin-guidelines.pdf' },
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Cardiovascular & Metabolic Targets',
    },
    {
      type: 'table',
      headers: ['Parameter', 'Target', 'Drug of choice'],
      rows: [
        ['BP (clinic)', '<140/90 mmHg; <130/80 if ACR >70; <150/90 if age >80', 'ACE inhibitor (or ARB) first-line for ALL T2DM regardless of BP — especially if CKD'],
        ['BP (home)', '<135/85 mmHg; <125/75 if ACR >70', '—'],
        ['LDL / Non-HDL cholesterol', 'Primary prevention QRISK >10%: atorvastatin 20mg. Secondary prevention (CVD): atorvastatin 80mg. Target: >40% reduction in non-HDL at 3 months → increase dose (40mg, 60mg, 80mg)', 'CKD: 20mg atorvastatin, do not increase if eGFR <30 without specialist advice'],
        ['ACR (albuminuria)', 'ACR >3: start ACE/ARB regardless of BP. ACR >30: add dapagliflozin. ACR >70: BP target <130/80', 'ACE + SGLT2i combination most evidence for nephroprotection'],
        ['Weight', '>10% weight loss can achieve T2DM remission', 'GLP-1 RA / tirzepatide / bariatric surgery (BMI >35 or >30 with complications)'],
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Sick Day Rules — T2DM',
    },
    {
      type: 'table',
      headers: ['Drug', 'Action when unwell / vomiting / dehydrated'],
      rows: [
        ['Metformin', 'STOP — risk of AKI and lactic acidosis. Restart when eating/drinking normally and renal function stable'],
        ['SGLT2 inhibitors (dapagliflozin, empagliflozin)', 'STOP — risk of euglycaemic DKA. Check ketones if unwell. Restart when recovered'],
        ['ACE inhibitors / ARBs', 'STOP — risk of AKI (SADMAN)'],
        ['Diuretics', 'STOP — dehydration risk'],
        ['NSAIDs', 'STOP — AKI risk'],
        ['Sulfonylureas (gliclazide)', 'STOP or reduce — hypoglycaemia risk when eating poorly'],
        ['DPP4 inhibitors, pioglitazone', 'Generally safe to continue but review individually'],
        ['Insulin', 'NEVER stop insulin (even if not eating). May need to reduce dose if not eating. Monitor BMs every 4 hours. Corrective dose = TDD ÷ 6 (max 15 units)'],
        ['GLP-1 RAs', 'If vomiting/not tolerating: withhold. Risk of dehydration. Monitor closely'],
      ],
      caption: 'SADMAN = Sulfonylureas, ACE/ARBs, Diuretics, Metformin, NSAIDs, SGLT2i — all hold if vomiting/dehydrated. Increase BM monitoring to every 4 hours. Increase fluid intake. Monitor ketones.',
    },

    {
      type: 'heading',
      level: 2,
      text: 'Diet & Lifestyle',
    },
    {
      type: 'image',
      src: '/images/unwin-sugar-chart.jpg',
      alt: 'Unwin glycaemic index sugar chart — how foods affect blood glucose compared to teaspoons of sugar',
      caption: 'Unwin sugar equivalence charts: shows how common foods (cereals, bread, rice, pasta, fruit) affect blood glucose relative to teaspoons of table sugar. Useful patient education tool for low-carb dietary counselling.',
    },
    {
      type: 'list',
      items: [
        'Low-carbohydrate and Mediterranean diets have best evidence for glucose reduction and sustainability',
        'Simple calorie restriction has most evidence overall but long-term adherence is the challenge',
        'Intermittent fasting (16:8 or 5:2) — emerging evidence; discuss individually',
        'Avoid liquid calories — alcohol (especially beer), fruit juice, sugary drinks raise glucose rapidly',
        'Exercise (the 4 Ss): Sit less, Step more (5–10k steps), Sweat (aerobic = improves insulin sensitivity), Strength training (muscle stores glucose as glycogen)',
        'Sleep: poor sleep worsens insulin resistance — underrecognised',
        'Weight management: refer if BMI >30 (>27.5 BAME). GLP-1 or tirzepatide first-line pharmacological option. Bariatric surgery most effective (40% T2DM remission) — refer if BMI >35, consider at BMI >30',
      ],
    },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG28 T2DM Guideline (Feb 2026)', url: 'https://www.nice.org.uk/guidance/ng28' },
        { label: 'SSOT Formulary — Diabetes', url: 'https://www.staffordshiremedicinesoptimisation.com/' },
        { label: 'Diabetes UK — Patient Resources', url: 'https://www.diabetes.org.uk' },
        { label: 'Low Carb Diet Leaflet — Unwin (PDF)', url: '/pdfs/low-carb-diet-unwin.pdf' },
      ],
    },
  ],
}
