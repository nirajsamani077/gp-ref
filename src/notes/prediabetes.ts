import type { Note } from '../data/notes'

export const prediabetes: Note = {
  id: 'prediabetes',
  title: 'Prediabetes (Non-Diabetic Hyperglycaemia)',
  subtitle: 'HbA1c 42–47, the reversible window, the Healthier You programme and when to use metformin',
  tags: ['diabetes', 'metabolic'],

  body: `prediabetes non-diabetic hyperglycaemia impaired fasting glucose impaired glucose tolerance HbA1c 42 47 Healthier You NHS Diabetes Prevention Programme lifestyle metformin orlistat insulin resistance cardiovascular risk QRISK weight loss`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG28 / PH38 — Preventing T2DM', url: 'https://www.nice.org.uk/guidance/ph38' },
        { label: 'NICE CKS — Pre-diabetes', url: 'https://cks.nice.org.uk/topics/diabetes-type-2/' },
        { label: 'NHS Diabetes Prevention Programme (Healthier You)', url: 'https://www.england.nhs.uk/diabetes/diabetes-prevention/' },
      ],
    },

    {
      type: 'para',
      text: 'Prediabetes (non-diabetic hyperglycaemia) identifies a large, high-risk group in a genuinely reversible window. The key opportunity is to intervene with structured lifestyle change — more effective than any drug — to prevent progression to type 2 diabetes and its complications. Metformin and orlistat are adjuncts for specific higher-risk patients, not substitutes for lifestyle change, and cardiovascular risk should be assessed and managed at the same time.',
    },
    { type: 'heading', level: 2, text: 'Diagnosis' },

    {
      type: 'callout',
      variant: 'info',
      title: 'HbA1c 42–47 mmol/mol = Non-Diabetic Hyperglycaemia',
      items: [
        'HbA1c 42–47 mmol/mol (or fasting glucose 5.5–6.9 mmol/L) defines prediabetes / non-diabetic hyperglycaemia',
        'A single result is sufficient (unlike diagnosing diabetes, which usually needs two) — recheck annually',
        'HbA1c ≥48 = diabetes; <42 = normal',
        'Identifies a high-risk group: progression to type 2 diabetes is common but the condition is reversible',
      ],
    },

    { type: 'heading', level: 2, text: 'Lifestyle — the Cornerstone' },

    {
      type: 'list',
      items: [
        'Emphasise that prediabetes is reversible with lifestyle change, preventing type 2 diabetes and its complications (cardiovascular disease, kidney disease, retinopathy, neuropathy, dementia, some cancers)',
        'Explain the underlying problem of insulin resistance (and the role of visceral/liver fat) — patient understanding aids motivation',
        'Refer to the NHS Diabetes Prevention Programme ("Healthier You") — a ~9-month structured programme covering diet, physical activity, weight loss, sleep and stress',
        'Dietary advice: reduce refined carbohydrate/sugar and processed food, Mediterranean-style eating; aim for weight loss if overweight; ≥150 min/week moderate activity',
        'Assess and treat other cardiovascular risk factors: lipids, blood pressure, smoking, and calculate QRISK',
      ],
    },

    {
      type: 'calclink',
      calculators: [
        { id: 'qrisk3', label: 'QRISK3 — 10-Year CVD Risk', subtitle: 'Assess and manage cardiovascular risk in prediabetes' },
      ],
    },

    { type: 'heading', level: 2, text: 'Pharmacological Options' },

    {
      type: 'table',
      headers: ['Drug', 'When to consider', 'Notes'],
      rows: [
        ['Metformin', 'Especially if: BMI >35 (particularly under 60), previous gestational diabetes, a rising HbA1c approaching the diabetic range, or lifestyle change has failed after 6–12 months', 'Titrate to 1.5–2 g/day; recheck HbA1c at 3 months and again at 6 months — if no improvement, stop'],
        ['Orlistat', 'BMI ≥28 with HbA1c >42 after ~3 months of lifestyle change', 'Aim ~5% weight loss; review at 12 months and stop if not effective/tolerated'],
      ],
      caption: 'Lifestyle change is more effective than metformin for preventing progression — drugs are an adjunct, not a substitute.',
    },

    { type: 'heading', level: 2, text: 'Follow-Up' },

    {
      type: 'list',
      items: [
        'Recheck HbA1c at least annually (more often if borderline/rising or on metformin)',
        'Reinforce lifestyle at each review; celebrate weight loss and HbA1c improvement to sustain motivation',
        'If HbA1c reaches ≥48 → diagnose and manage as type 2 diabetes',
        'Women with previous gestational diabetes are a key prediabetes group — ensure annual HbA1c',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'diabetes-t2dm', label: 'T2DM Management', subtitle: 'If HbA1c reaches ≥48 — diagnosis and treatment' },
        { id: 'diabetes-diagnosis', label: 'Diabetes Diagnosis', subtitle: 'Diagnostic thresholds and categories' },
        { id: 'obesity', label: 'Obesity & Weight Management', subtitle: 'Weight loss is the core intervention' },
        { id: 'gestational-diabetes', label: 'Gestational Diabetes', subtitle: 'Previous GDM — high prediabetes/T2DM risk' },
        { id: 'lipids-statins', label: 'Lipids & Cardiovascular Prevention', subtitle: 'Manage global CV risk in prediabetes' },
      ],
    },

  ],
}
