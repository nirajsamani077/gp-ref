import type { Note } from '../data/notes'

export const diabetesPractical: Note = {
  id: 'diabetes-practical',
  title: 'Diabetes — Sick Day Rules, Ramadan & Injectables',
  subtitle: 'SADMAN sick-day rules, fasting adjustments, GLP-1 agonists and starting insulin in T2DM',
  tags: ['diabetes', 'endocrine'],

  body: `diabetes sick day rules SADMAN Ramadan fasting metformin gliclazide insulin GLP-1 agonist semaglutide liraglutide dulaglutide incretin injectable ketones DKA basal bolus biphasic hypoglycaemia insulin regimen`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG28 — Type 2 Diabetes in Adults', url: 'https://www.nice.org.uk/guidance/ng28' },
        { label: 'TREND Diabetes — Sick Day Rules', url: 'https://trenddiabetes.online/' },
        { label: 'Diabetes UK — Ramadan & Diabetes', url: 'https://www.diabetes.org.uk/guide-to-diabetes/managing-your-diabetes/ramadan' },
      ],
    },

    { type: 'heading', level: 2, text: 'Sick-Day Rules' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'General Advice + "SADMAN" Drugs to Hold',
      items: [
        'Illness raises stress hormones (cortisol) → blood glucose rises even when eating less; NEVER stop insulin',
        'Increase capillary glucose monitoring (~every 2–4 hours), keep well hydrated, keep sugary drinks and supplies to hand, and monitor ketones (especially in type 1 / on SGLT2 inhibitors)',
        'SADMAN — hold these during acute dehydrating illness (D&V): Sulfonylureas, ACE inhibitors/ARBs, Diuretics, Metformin, ARBs (again), NSAIDs — restart when eating/drinking normally (metformin risks lactic acidosis + AKI if dehydrated)',
        'SGLT2 inhibitors: hold if acutely unwell/not eating (risk of euglycaemic DKA) — check ketones',
        'Insulin: continue and often INCREASE (glucose runs higher when ill); a correction dose is roughly total daily dose ÷ 6 (max ~15 units)',
        'Admit/seek help if: persistent vomiting, significant ketones, glucose uncontrollable, drowsiness or dehydration',
      ],
    },

    { type: 'heading', level: 2, text: 'Diabetes & Ramadan' },

    {
      type: 'list',
      items: [
        'Most people with type 2 diabetes choose to fast — offer pre-Ramadan risk assessment and education (those on insulin/sulfonylureas or with poor control/complications are higher risk)',
        'Eat a slow-release carbohydrate meal before dawn (Suhoor) to sustain glucose; break the fast (Iftar) sensibly',
        'Metformin: take the larger portion (e.g. two-thirds) of the daily dose after sunset',
        'Gliclazide: switch to a single dose taken with the sunset meal (reduces daytime hypoglycaemia)',
        'Continue glucose monitoring during the fast (checking a level does NOT break the fast); break the fast if hypoglycaemic (<4) or hyperglycaemic/unwell',
        'Adjust insulin regimens with the diabetes team; SGLT2/GLP-1 usually continued with hydration advice',
      ],
    },

    { type: 'heading', level: 2, text: 'GLP-1 Receptor Agonists (Injectable Incretin Mimetics)' },

    {
      type: 'list',
      items: [
        'GLP-1 is released from the gut after oral glucose and stimulates insulin ("incretin effect"); GLP-1 agonists mimic this — the "-tides" (semaglutide/Ozempic, dulaglutide/Trulicity, liraglutide, exenatide)',
        'Subcutaneous injection (most weekly); cause significant weight loss and lower HbA1c — useful as add-on/triple therapy, especially with BMI ≥35 or where insulin is undesirable',
        'NICE continuation criteria: aim for an HbA1c fall of ≥11 mmol/mol AND ≥3% weight loss at 6 months',
        'Main risks: GI side effects (nausea, vomiting), pancreatitis (stop if severe abdominal pain); avoid in severe renal/hepatic/GI disease (generally eGFR <15–30 depending on agent)',
        'Semaglutide (Wegovy) and liraglutide (Saxenda) are also licensed for obesity/weight management via specialist services (tirzepatide is a newer dual agonist)',
      ],
    },

    { type: 'heading', level: 2, text: 'Starting Insulin in Type 2 Diabetes' },

    {
      type: 'table',
      headers: ['Insulin type', 'Examples', 'Role'],
      rows: [
        ['Intermediate (NPH/isophane)', 'Humulin I, Insulatard', 'Common first insulin in T2DM — once/twice daily basal, added to oral agents'],
        ['Long-acting analogue', 'Glargine (Lantus/Semglee), detemir (Levemir); ultra-long: Tresiba/Toujeo', 'Steady basal cover once daily; ultra-long if timing unreliable'],
        ['Rapid/short-acting', 'NovoRapid, Humalog, Apidra (rapid); Actrapid (short)', 'Mealtime cover in a basal-bolus regimen and for correction doses'],
        ['Premixed (biphasic)', 'NovoMix 30, Humalog Mix 25', 'Twice-daily fixed short+intermediate mix'],
      ],
      caption: 'Regimens: basal, basal-bolus, or biphasic — individualised. Provide pens/needles/sharps bin, a glucose meter and strips, a hypo kit (glucose gel + IM glucagon), and an insulin passport. Counsel on hypos, driving, injection-site rotation (lipohypertrophy), storage, and sick-day dosing.',
    },

    {
      type: 'notelink',
      notes: [
        { id: 'diabetes-t2dm', label: 'T2DM Management', subtitle: 'Full treatment escalation and monitoring' },
        { id: 'diabetes-t1dm', label: 'T1DM Management', subtitle: 'Basal-bolus insulin, DKA and hypo awareness' },
        { id: 'hypoglycaemia', label: 'Hypoglycaemia', subtitle: 'Recognition and the treatment ladder' },
        { id: 'obesity', label: 'Obesity & Weight Management', subtitle: 'GLP-1 agonists for weight management' },
      ],
    },

  ],
}
