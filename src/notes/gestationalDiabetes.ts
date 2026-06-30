import type { Note } from '../data/notes'

export const gestationalDiabetes: Note = {
  id: 'gestational-diabetes',
  title: 'Gestational Diabetes (GDM)',
  subtitle: 'OGTT criteria, the 5-6-7-8 rule, glucose targets, treatment escalation and postnatal follow-up',
  tags: ['obstetrics', 'endocrine'],

  body: `gestational diabetes GDM OGTT oral glucose tolerance test fasting glucose macrosomia metformin insulin neonatal hypoglycaemia continuous glucose monitoring CGM pregnancy BMI BAME polyhydramnios induction of labour postnatal fasting glucose HbA1c type 2 diabetes risk 5678 rule capillary blood glucose targets`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG3 — Diabetes in Pregnancy', url: 'https://www.nice.org.uk/guidance/ng3' },
        { label: 'NICE CKS — Diabetes in Pregnancy', url: 'https://cks.nice.org.uk/topics/diabetes-in-pregnancy/' },
        { label: 'Diabetes UK — Gestational Diabetes', url: 'https://www.diabetes.org.uk/diabetes-the-basics/gestational-diabetes' },
      ],
    },

    { type: 'heading', level: 2, text: 'Screening & Diagnosis' },

    {
      type: 'callout',
      variant: 'info',
      title: 'OGTT — Who and When',
      items: [
        'Offer a 75 g OGTT at 24–28 weeks to women with risk factors',
        'If previous GDM: offer OGTT earlier (at booking / 16–18 weeks) and repeat at 24–28 weeks if the first is normal (or offer early self-monitoring of glucose)',
        'Risk factors: BMI >30, previous macrosomic baby (≥4.5 kg), previous GDM, first-degree relative with diabetes, family origin with high diabetes prevalence (South Asian, Black Caribbean, Middle Eastern)',
        'Glycosuria (≥2+ once or ≥1+ twice) on routine antenatal testing should prompt consideration of GDM',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'Diagnostic Thresholds — the "5-6-7-8" Rule',
      items: [
        'Fasting plasma glucose ≥5.6 mmol/L, OR',
        '2-hour plasma glucose ≥7.8 mmol/L',
        '(Either value meets the diagnosis)',
        'Mnemonic: 5.6 fasting and 7.8 at 2 hours — "5-6 … 7-8"',
      ],
    },

    { type: 'heading', level: 2, text: 'Treatment — Escalation by Fasting Glucose' },

    {
      type: 'table',
      headers: ['Scenario', 'Initial Management'],
      rows: [
        ['Fasting glucose <7 mmol/L at diagnosis', 'Trial of diet and exercise for 1–2 weeks with glucose monitoring; if targets not met → add metformin; if still not met → add (short-acting) insulin'],
        ['Fasting glucose ≥7 mmol/L at diagnosis', 'Start insulin straight away (± metformin) — diet alone will not suffice'],
        ['Fasting glucose 6.0–6.9 WITH complications (e.g. macrosomia or polyhydramnios)', 'Start insulin immediately'],
        ['Metformin declined / not tolerated', 'Consider glibenclamide if insulin declined and metformin unsuitable (specialist decision)'],
      ],
      caption: 'Refer all women with GDM to the joint antenatal/diabetes clinic (most will already be under consultant-led care). Manage alongside the multidisciplinary team — diabetes specialist midwife/nurse, dietitian, obstetrician.',
    },

    { type: 'heading', level: 2, text: 'Capillary Glucose Targets' },

    {
      type: 'table',
      headers: ['Timing', 'Target'],
      rows: [
        ['Fasting', '<5.3 mmol/L'],
        ['1 hour after meals', '<7.8 mmol/L'],
        ['2 hours after meals (if measuring at 2h)', '<6.4 mmol/L'],
      ],
      caption: 'Tight glycaemic control reduces macrosomia, shoulder dystocia, neonatal hypoglycaemia, and stillbirth risk. Continuous/flash glucose monitoring may be used in some services.',
    },

    { type: 'heading', level: 2, text: 'Intrapartum & Neonatal' },

    {
      type: 'list',
      items: [
        'Timing of birth: consider elective birth (induction of labour or caesarean) by ~38–39 weeks under consultant-led care — do not allow to go significantly post-term; earlier if poor control or complications',
        'Intrapartum: maintain maternal capillary glucose 4–7 mmol/L (may need sliding-scale insulin if on insulin)',
        'Neonatal: monitor blood glucose 2–4 hours after birth — risk of neonatal hypoglycaemia (fetal hyperinsulinaemia); encourage early and frequent feeding; keep baby with mother where possible',
        'Other neonatal risks: macrosomia, shoulder dystocia, respiratory distress, jaundice, polycythaemia',
      ],
    },

    { type: 'heading', level: 2, text: 'Postnatal & Long-Term Follow-Up' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'GDM = Lifelong Increased Type 2 Diabetes Risk',
      items: [
        'Stop all glucose-lowering treatment immediately after birth; check blood glucose before discharge to confirm it has resolved',
        'Offer a fasting plasma glucose at 6–13 weeks postpartum (if missed, an HbA1c after 13 weeks): FPG ≥7 = diabetes; 6.1–6.9 = impaired fasting glucose/prediabetes; <6.0 = normal',
        'If using HbA1c (>13 weeks): ≥48 = diabetes; 39–47 = prediabetes (high risk)',
        'If normal: offer an annual HbA1c — up to 50% develop type 2 diabetes within 10 years',
        'Pre-conception counselling for future pregnancies: high recurrence risk; optimise weight, start folic acid 5 mg, early OGTT next pregnancy',
        'Lifestyle: weight management, diet, exercise, breastfeeding (reduces future T2DM risk)',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'diabetes-diagnosis', label: 'Diabetes Diagnosis', subtitle: 'Diagnostic thresholds and the postnatal conversion to T2DM' },
        { id: 'diabetes-t2dm', label: 'Type 2 Diabetes', subtitle: 'Long-term risk after GDM — annual HbA1c, prevention' },
        { id: 'obesity', label: 'Obesity & Weight Management', subtitle: 'Key modifiable risk factor before and after pregnancy' },
        { id: 'pre-eclampsia', label: 'Pre-eclampsia & Gestational Hypertension', subtitle: 'Overlapping high-risk antenatal surveillance' },
      ],
    },

  ],
}
