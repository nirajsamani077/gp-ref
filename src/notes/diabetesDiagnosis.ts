import type { Note } from '../data/notes'

export const diabetesDiagnosis: Note = {
  id: 'diabetes-diagnosis',
  title: 'Diabetes — Diagnosis & Types',
  subtitle: 'HbA1C thresholds, prediabetes, diabetes types, MODY, GDM, Ramadan & screening',
  tags: ['endocrinology', 'symptoms'],

  body: 'diabetes diagnosis HbA1C fasting glucose OGTT prediabetes impaired fasting glucose IFG impaired glucose tolerance IGT type 1 T1DM type 2 T2DM MODY maturity onset diabetes young LADA latent autoimmune adults gestational GDM Ramadan fasting C-peptide anti-GAD screening risk score pancreatic cancer weight loss new diagnosis steroid-induced secondary diabetes Healthier You NHS DPP diabetes prevention programme',

  content: [
    {
      type: 'heading',
      level: 2,
      text: 'Diagnostic Criteria',
    },
    {
      type: 'table',
      headers: ['Test', 'Normal', 'Prediabetes', 'Diabetes'],
      rows: [
        ['HbA1C', '<42 mmol/mol (<6.0%)', '42–47 mmol/mol (6.0–6.4%)', '≥48 mmol/mol (≥6.5%)'],
        ['Fasting plasma glucose', '<6.1 mmol/L', '6.1–6.9 mmol/L (IFG)', '≥7.0 mmol/L'],
        ['Random plasma glucose', '—', '—', '≥11.1 mmol/L + symptoms'],
        ['OGTT 2-hour glucose', '<7.8 mmol/L', '7.8–11.0 mmol/L (IGT)', '≥11.1 mmol/L'],
      ],
      caption: 'If asymptomatic: TWO abnormal results required (same or different test, ideally 2 weeks apart). If symptomatic (polyuria, polydipsia, weight loss): ONE result sufficient. OGTT now used mainly for GDM and borderline cases.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'HbA1C unreliable in:',
      items: [
        'Haemolytic anaemia, haemoglobinopathies, iron deficiency, recent blood transfusion — use glucose instead',
        'T1DM (newly presenting) — rapid glucose fluctuations not reflected in HbA1C',
        'Pregnancy / GDM — use OGTT',
        'Acute illness or on steroids — can give falsely elevated results',
        'Splenectomy — falsely high HbA1C',
      ],
    },
    {
      type: 'callout',
      variant: 'danger',
      title: 'New diabetes >60 years + unexplained weight loss → CT abdomen/pelvis to exclude pancreatic cancer',
      items: [
        '2WW referral if: new T2DM age >60 with weight loss, or any age with jaundice + new diabetes',
        'Pancreatic exocrine insufficiency: steatorrhoea, weight loss, fat-soluble vitamin deficiencies',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Types of Diabetes',
    },
    {
      type: 'image',
      src: '/images/diabetes-types.jpg',
      alt: 'Types of diabetes — T1DM, T2DM, MODY, LADA, GDM, secondary diabetes',
      caption: 'Overview of diabetes types. T2DM accounts for ~90% of all diabetes. T1DM ~8%. MODY, LADA, GDM and secondary diabetes make up the remainder.',
    },
    {
      type: 'table',
      headers: ['Type', 'Key Features', 'Diagnosis Pointer', 'Treatment Clue'],
      rows: [
        ['T2DM (90%)', 'Progressive insulin resistance + relative insulin deficiency. Linked to obesity, lifestyle, ethnicity, FHx', 'HbA1C ≥48 on 2 occasions (asymptomatic) or once if symptomatic', 'Lifestyle → metformin → SGLT2i → stepwise. See T2DM note'],
        ['T1DM (8%)', 'Autoimmune destruction of β-cells. Any age but peak <30. Thin, rapid onset, ketosis-prone', 'Random glucose >11 + symptoms = diagnostic. Check anti-GAD, anti-IA2, C-peptide (low)', 'Insulin always required. Never use SGLT2i. See T1DM note'],
        ['LADA (Type 1.5)', 'Latent autoimmune diabetes in adults. Thin adult presenting like T2DM but rapid insulin requirement. GAD antibodies positive', 'Consider if thin, no strong T2DM RFs, fails OHAs quickly. Check GAD antibodies, C-peptide', 'Insulin needed relatively quickly. Do not delay'],
        ['MODY (1–2%)', 'Monogenic — autosomal dominant. Strong FHx. Often lean. Not obese. HNF1-alpha (60%) or Glucokinase (20%) most common', 'T2DM in young person (<25) without typical T2DM RFs. FHx diabetes in multiple generations. Refer genetics', 'HNF1-alpha: very sensitive to gliclazide (low doses effective). Glucokinase MODY: often no treatment needed'],
        ['Steroid-induced', 'Glucocorticoids cause hyperglycaemia; predominantly postprandial. Can resolve if steroids stopped', 'Check BMs in any patient on long-term or high-dose steroids. HbA1C may be normal fasting', 'Often managed with gliclazide or insulin; metformin less effective for postprandial spike'],
        ['GDM', 'Gestational DM. Diagnosed by OGTT 24–28 weeks. See GDM note', 'Fasting ≥5.6 or 2h ≥7.8 on OGTT', 'Diet → metformin → insulin. Resolves post-partum but high T2DM risk long-term'],
        ['Pancreatic DM', 'CF, chronic pancreatitis, pancreatectomy — exocrine + endocrine failure', 'Thin patient with malabsorption + diabetes. Check FE-1 (elastase) for exocrine function', 'Often insulin-requiring. Careful monitoring — brittle; also need Creon'],
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Prediabetes — Management',
    },
    {
      type: 'para',
      text: 'HbA1C 42–47 mmol/mol: ONE result sufficient to diagnose prediabetes (non-diabetic hyperglycaemia). Recheck annually. Fully reversible with sustained lifestyle change. Primary care role is lifestyle support, risk factor optimisation, and monitoring.',
    },
    {
      type: 'list',
      items: [
        'Refer to NHS Diabetes Prevention Programme (DPP) — "Healthier You": 9-month evidence-based programme (diet, exercise, weight loss, sleep, stress). Shown to reduce T2DM onset by 40–50%',
        'Lifestyle: low carb / Mediterranean diet best evidence; simple calorie restriction if preferred; reduce ETOH; Unwin sugar charts for GI education',
        'Exercise: sit less, 5–10k steps/day, aerobic + resistance training (improves insulin sensitivity and glycogen storage), better sleep',
        'Weight management: refer if BMI >30 (or >27.5 BAME). Even 5–10% weight loss significantly reduces T2DM risk',
        'Address other CVD risk factors: BP, lipids, smoking, QRISK',
        'Consider metformin if: BMI >35, age <60, previous GDM, or rising HbA1C near diabetic range after 6–12 months lifestyle failure → titrate to 1.5–2g; repeat HbA1C 3-monthly',
        'Consider orlistat if BMI >28 and HbA1C >42 after 3 months lifestyle — aim 5% weight loss; review at 12 months',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Gestational Diabetes (GDM)',
    },
    {
      type: 'list',
      items: [
        'Offer OGTT at 24–28 weeks if risk factors present (16–18 weeks if previous GDM)',
        'Risk factors: BMI >30, previous macrosomic baby (>4.5 kg), FHx diabetes (first-degree), BAME ethnicity',
        'GDM criteria ("5678 rule"): Fasting glucose ≥5.6 mmol/L OR 2-hour ≥7.8 mmol/L',
        'Refer to antenatal diabetes team if confirmed',
        'Fasting <7: trial of dietary change with CGM monitoring; if targets not met within 1–2 weeks → metformin → insulin (short-acting)',
        'Fasting ≥7 or >6 with macrosomia → start insulin immediately',
        'CGM targets: fasting 5.3, 1h post-meal 7.8, 2h post-meal 6.4 mmol/L',
        'Intrapartum: consider elective delivery; BM monitoring (target 4–7); check neonatal glucose 2–4h post-delivery',
      ],
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'GDM — postnatal follow-up',
      items: [
        'Stop all diabetes treatment immediately post-delivery',
        'Fasting plasma glucose at 6–13 weeks post-partum: >7 = T2DM, 6.1–6.9 = prediabetes, <6 = normal',
        'If tested >13 weeks post-partum: use HbA1C (threshold for prediabetes is lower: >39 mmol/mol)',
        'ALL women with previous GDM: annual HbA1C for life — 50% develop T2DM within 10 years',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Diabetes & Ramadan',
    },
    {
      type: 'list',
      items: [
        '~80% of Muslims with T2DM choose to fast during Ramadan despite medical advice',
        'Risks: hypoglycaemia (especially with sulfonylureas/insulin), hyperglycaemia (large Iftar meals), DKA, dehydration (VTE risk)',
        'Use IDF-DAR risk stratification tool: low risk = can fast with adjustment; moderate/high risk = advise against fasting',
        'Pre-Ramadan review (4–6 weeks before): adjust medications, provide BM monitoring plan, dietary advice',
        'Diet: slow-release carbohydrates at Suhoor (pre-dawn meal) for sustained energy; balanced Iftar; avoid excess',
        'Break fast immediately if BM <4.0 or >16.5 mmol/L, or if unwell, dizzy, or symptomatic',
        'Metformin: give the larger dose (two-thirds) with evening Iftar meal',
        'Gliclazide: switch to once-daily dose taken with Iftar (evening); dose reduction often needed',
        'SGLT2i: can continue with caution — ensure adequate hydration; increased DKA risk',
        'Insulin: complex adjustments needed — refer to DSN or specialist for individual plan',
        'BM monitoring: 1–2 times per day during fast (does not break the fast in most Islamic scholarly opinion)',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Screening for T2DM',
    },
    {
      type: 'list',
      items: [
        'Opportunistic screening: check HbA1C in high-risk groups (BMI >25, BAME ethnicity, FHx, previous GDM, hypertension, polycystic ovary syndrome, known CVD)',
        'NHS Health Check (40–74 years): includes diabetes risk assessment and HbA1C if high-risk',
        'Use the Diabetes UK Risk Score (or Leicester Practice Risk Score) for population-level identification',
        'If HbA1C <42 but risk factors present: rescreen every 3–5 years; offer brief lifestyle advice',
        'BAME populations: lower BMI thresholds apply (>23 kg/m² = risk, >27.5 = high risk); higher T2DM risk at lower BMI',
      ],
    },

    {
      type: 'calclink',
      calculators: [
        { id: 'qrisk3', label: 'QRISK3 — Cardiovascular Risk', subtitle: '10-year CVD risk — statin threshold ≥10%' },
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NHS Diabetes Prevention Programme (Healthier You)', url: 'https://www.england.nhs.uk/diabetes/diabetes-prevention/' },
        { label: 'Diabetes UK — Know Your Risk Tool', url: 'https://riskscore.diabetes.org.uk' },
        { label: 'IDF-DAR Ramadan Risk Calculator', url: 'https://www.idf.org/our-activities/education/diabetes-and-ramadan.html' },
        { label: 'Unwin Low Carb Diet Leaflet (PDF)', url: '/pdfs/low-carb-diet-unwin.pdf' },
      ],
    },
  ],
}
