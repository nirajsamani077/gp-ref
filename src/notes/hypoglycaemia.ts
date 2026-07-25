import type { Note } from '../data/notes'

export const hypoglycaemia: Note = {
  id: 'hypoglycaemia',
  title: 'Hypoglycaemia',
  subtitle: 'Recognition, the treatment ladder (fast glucose → glucagon), causes and prevention',
  tags: ['endocrine'],

  body: `hypoglycaemia low blood glucose insulin sulfonylurea gliclazide alcohol glucagon IM IV dextrose hypo treatment autonomic neuroglycopenic Whipple's triad insulinoma adrenal failure rescue carbohydrate DVLA driving`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Hypoglycaemia', url: 'https://cks.nice.org.uk/topics/diabetes-type-1/' },
        { label: 'TREND Diabetes — Hypo Guidance', url: 'https://trenddiabetes.online/' },
        { label: 'Diabetes UK — Hypos', url: 'https://www.diabetes.org.uk/guide-to-diabetes/complications/hypos' },
      ],
    },

    {
      type: 'para',
      text: 'Hypoglycaemia in primary care is overwhelmingly a complication of diabetes treatment — insulin and sulfonylureas — and the essentials are recognition ("four is the floor"), a clear treatment ladder from fast-acting carbohydrate to IM glucagon, and prevention. Two practical traps to remember: sulfonylurea hypos can be prolonged and recurrent (low threshold to admit), and impaired awareness of hypoglycaemia has real consequences for safety and driving.',
    },
    { type: 'heading', level: 2, text: 'Recognition' },

    {
      type: 'list',
      items: [
        'Defined as blood glucose <4.0 mmol/L ("four is the floor") in a person on glucose-lowering treatment',
        'Autonomic (early warning) symptoms: sweating, tremor, palpitations, hunger, anxiety — driven by the adrenergic response',
        'Neuroglycopenic symptoms: confusion, drowsiness, slurred speech, behavioural change, incoordination; severe → seizures, coma',
        'Impaired awareness of hypoglycaemia (loss of warning symptoms) develops with recurrent hypos and long-standing diabetes — a major risk; relevant to driving',
        'Whipple\'s triad (for spontaneous hypoglycaemia in non-diabetics): symptoms of hypoglycaemia + low measured glucose + resolution on giving glucose',
      ],
    },

    { type: 'heading', level: 2, text: 'Treatment Ladder' },

    {
      type: 'table',
      headers: ['Situation', 'Treatment'],
      rows: [
        ['Conscious, able to swallow', '15–20 g of fast-acting carbohydrate (e.g. 4–5 glucose tablets, 150–200 mL fruit juice/sugary drink, or glucose gel); recheck glucose after 15 min and repeat if still <4; then a longer-acting carbohydrate snack (toast, biscuits) to prevent recurrence'],
        ['Reduced consciousness / unable to swallow (community)', 'IM glucagon 1 mg (0.5 mg if child <25 kg / under ~8 years) — or buccal glucose gel if some swallow; call 999 if not responding; glucagon is less effective in alcohol-related hypos or starvation (depleted glycogen)'],
        ['In hospital / IV access', 'IV glucose — e.g. 100–200 mL of 10% glucose (or 20% per local protocol); recheck'],
        ['After recovery', 'Give long-acting carbohydrate; identify and address the cause; do NOT omit the next insulin dose without review'],
      ],
    },

    { type: 'heading', level: 2, text: 'Causes' },

    {
      type: 'list',
      items: [
        'Most commonly diabetes treatment: insulin and sulfonylureas (e.g. gliclazide) — metformin/DPP-4/SGLT2 alone do not usually cause hypos',
        'Precipitants in diabetes: missed/delayed meals, exercise, alcohol, excess/incorrect insulin dose, weight loss or improving renal function (reduced drug clearance)',
        'Alcohol (inhibits gluconeogenesis), and liver or adrenal failure',
        'Non-diabetic/spontaneous hypoglycaemia (rare): insulinoma, other tumours, post-bariatric surgery, factitious — investigate per Whipple\'s triad with a supervised fast and refer endocrinology',
      ],
    },

    { type: 'heading', level: 2, text: 'Prevention & Safety' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Sulfonylurea Hypos and Driving',
      items: [
        'Sulfonylurea hypos can be prolonged and recurrent (especially in the elderly or renal impairment) — have a low threshold to admit, as they can recur after initial treatment',
        'Review the regimen after any significant hypo: reduce/switch the offending agent, relax HbA1c targets in frail/elderly patients',
        'DVLA: patients on insulin (and sulfonylureas) must recognise hypos, check glucose before/while driving, and carry fast-acting carbohydrate; severe hypos (needing help) or impaired awareness have specific driving restrictions — counsel and document',
        'Educate the patient and family on the "hypo box", glucagon use, and sick-day rules',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'diabetes-t1dm', label: 'T1DM Management', subtitle: 'Insulin dosing, hypo awareness and prevention' },
        { id: 'diabetes-t2dm', label: 'T2DM Management', subtitle: 'Sulfonylurea/insulin hypo risk; target individualisation' },
        { id: 'adrenal-insufficiency', label: 'Adrenal Insufficiency', subtitle: 'Adrenal failure as a non-diabetic cause' },
        { id: 'alcohol-etoh', label: 'Alcohol & ETOH Excess', subtitle: 'Alcohol-induced hypoglycaemia (glucagon less effective)' },
      ],
    },

  ],
}
