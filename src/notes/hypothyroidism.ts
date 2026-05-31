import type { Note } from '../data/notes'

export const hypothyroidism: Note = {
  id: 'hypothyroidism',
  title: 'Hypothyroidism',
  subtitle: 'TSH/T4 interpretation, Hashimoto\'s, levothyroxine dosing, subclinical hypothyroidism, drug causes and monitoring',
  tags: ['endocrine'],

  body: 'hypothyroidism underactive thyroid TSH T4 T3 levothyroxine thyroxine Hashimoto thyroiditis anti-TPO antibodies subclinical hypothyroidism levothyroxine dose titration absorption calcium iron PPI coeliac liothyronine T3 amiodarone lithium drug-induced hypothyroid pituitary hypopituitarism secondary hypothyroid myxoedema coma thyroid pregnancy monitoring',

  content: [

    { type: 'heading', level: 2, text: 'When to Check TFTs' },

    {
      type: 'list',
      items: [
        'Symptoms of hypothyroidism: fatigue, weight gain, cold intolerance, constipation, dry skin/hair, hair loss, bradycardia, hoarse voice, myalgia, depression, cognitive slowing, menstrual irregularity',
        'New-onset AF (thyroid cause in both directions — hypo and hyper)',
        'Known autoimmune conditions (T1DM, coeliac, vitiligo, Addison\'s, rheumatoid arthritis, pernicious anaemia)',
        'Medications known to cause hypothyroidism: amiodarone, lithium, immunotherapy (checkpoint inhibitors), interferon, tyrosine kinase inhibitors',
        'Pregnancy: TSH should be checked at booking; women with known hypothyroidism need more frequent monitoring',
        'Abnormal lipids or unexplained raised CK — hypothyroidism can cause dyslipidaemia and myopathy',
        'Annual TFT monitoring: all patients on levothyroxine; all patients with goitre; thyroid autoimmune disease',
      ],
    },

    { type: 'heading', level: 2, text: 'Interpreting TFTs' },

    {
      type: 'table',
      headers: ['TSH', 'Free T4', 'Interpretation', 'Action'],
      rows: [
        ['High', 'Low', 'Primary hypothyroidism', 'Start levothyroxine; check anti-TPO antibodies'],
        ['High', 'Normal', 'Subclinical hypothyroidism', 'See section below; repeat in 3–6 months; treat if TSH >10, symptomatic, or anti-TPO positive'],
        ['Normal', 'Normal', 'Euthyroid — on levothyroxine: well controlled', 'Annual monitoring'],
        ['Low/normal', 'Low', 'Secondary (central/pituitary) hypothyroidism', 'Examine for other pituitary hormone deficiencies; MRI pituitary; endocrinology referral'],
        ['Low', 'High', 'Hyperthyroidism (or over-replacement on levothyroxine)', 'See Hyperthyroidism note; if on levothyroxine, reduce dose'],
        ['Low', 'Normal', 'Subclinical hyperthyroidism or over-replacement', 'Reduce levothyroxine; monitor for AF and osteoporosis risk'],
      ],
      caption: 'In most labs, TSH is run first; T4 (free T4) is added automatically if TSH is abnormal. T3 is rarely needed in primary care — specialist use.',
    },

    { type: 'heading', level: 2, text: 'Causes of Hypothyroidism' },

    {
      type: 'table',
      headers: ['Type', 'Cause'],
      rows: [
        ['Primary (commonest)', 'Hashimoto\'s thyroiditis (autoimmune — anti-TPO positive); post-radioiodine or thyroid surgery; iodine deficiency (rare in UK)'],
        ['Drug-induced', 'Amiodarone (iodine-rich — causes both hypo and hyperthyroid), lithium (inhibits thyroid hormone release), immunotherapy checkpoint inhibitors (pembrolizumab, nivolumab — immune thyroiditis), interferon-alfa'],
        ['Secondary (pituitary)', 'Pituitary adenoma, Sheehan\'s syndrome, hypopituitarism from any cause — TSH low or inappropriately normal with low T4'],
        ['Transient', 'Postpartum thyroiditis (silent thyroiditis), de Quervain\'s thyroiditis (post-viral, painful, self-limiting), subacute thyroiditis'],
      ],
    },

    { type: 'heading', level: 2, text: 'Starting Levothyroxine' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Levothyroxine Dosing',
      items: [
        'Standard starting dose: 1.6 mcg/kg/day (approximately 100 mcg for a 60 kg adult)',
        'Elderly or known ischaemic heart disease / significant cardiac history: start lower — 25–50 mcg/day; titrate slowly every 4–6 weeks',
        'Check TSH at 8–12 weeks after starting or after any dose change — takes 6–8 weeks to reach new steady state',
        'Target TSH: 0.5–2.5 mU/L for most patients; 0.1–1.0 mU/L in pregnant women; 0.3–3.0 mU/L in the elderly (avoid over-replacement risk of AF and osteoporosis)',
        'Once stable: annual TFT sufficient',
        'Dose titration: adjust in 25 mcg increments; allow 6–8 weeks before re-testing',
      ],
    },

    { type: 'heading', level: 2, text: 'Taking Levothyroxine Correctly' },

    {
      type: 'list',
      items: [
        'Take on an empty stomach — ideally 30–60 minutes before any food, drink (other than water), or other medications',
        'Avoid taking within 2–4 hours of: calcium supplements, iron tablets, antacids, PPIs — all reduce absorption significantly',
        'Avoid within 4 hours of: cholestyramine, sucralfate, aluminium hydroxide',
        'Coffee reduces absorption even black — take levothyroxine at least 30 minutes before coffee',
        'Consistency: take at the same time every day; many patients prefer first thing in morning',
        'Alternative: take at bedtime if cannot manage morning timing — slightly better absorption (empty stomach overnight)',
        'Soya-based foods and high-fibre foods may reduce absorption if taken at the same meal',
      ],
    },

    { type: 'heading', level: 2, text: 'Persistently Abnormal TSH on Levothyroxine' },

    {
      type: 'list',
      items: [
        'TSH persistently high despite increasing doses — consider:',
        '→ Compliance: is the patient actually taking it? Ask directly; consider observed medication',
        '→ Absorption: taking with food, calcium, iron, or PPI? Has gut disease changed (new coeliac, inflammatory bowel)?',
        '→ Coeliac screen: coeliac disease significantly impairs levothyroxine absorption — check tTG IgA if not previously done',
        '→ Drug interactions: amiodarone, rifampicin, phenytoin, carbamazepine, phenobarbital increase T4 metabolism',
        '→ Hypothalamic/pituitary disease: low or normal TSH with low T4 — refer endocrinology',
        'TSH persistently low (suppressed) despite reducing doses: over-replacement — risk of AF, osteoporosis, palpitations; reduce dose further; check compliance pattern',
        'If optimal T4 dose does not control symptoms: refer endocrinology — liothyronine (T3) can only be initiated by a specialist; some patients with Hashimoto\'s have impaired T4→T3 conversion and may benefit',
      ],
    },

    { type: 'heading', level: 2, text: 'Subclinical Hypothyroidism' },

    {
      type: 'table',
      headers: ['TSH', 'T4', 'Action'],
      rows: [
        ['4.5–10 mU/L', 'Normal', 'Repeat TFT in 3–6 months to confirm (exclude transient illness-related TSH elevation); treat if anti-TPO positive or symptomatic'],
        ['>10 mU/L', 'Normal', 'Treat with levothyroxine (NICE recommends treatment); higher risk of progression to overt hypothyroidism'],
        ['Any', 'Normal', 'In pregnancy: any TSH elevation warrants treatment — refer to obstetric endocrinology'],
      ],
      caption: 'Subclinical hypothyroidism in the elderly: treatment of TSH 4.5–10 is controversial — evidence suggests no benefit for symptoms or cardiovascular outcomes in >65s; individualise decision. Anti-TPO positive indicates Hashimoto\'s — higher risk of progression to overt hypothyroid (~4% per year); lower threshold to treat.',
    },

    { type: 'heading', level: 2, text: 'Hypothyroidism in Pregnancy' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Pregnancy — Important Adjustments',
      items: [
        'TSH target in pregnancy: 0.1–2.5 mU/L in first trimester; 0.2–3.0 mU/L in second and third trimesters',
        'Dose often needs increasing by 25–30% in the first trimester — discuss pre-conception to allow early adjustment',
        'Check TFT every 4 weeks in the first trimester, then every trimester; postpartum recheck at 6 weeks',
        'Untreated or inadequately treated hypothyroidism in pregnancy: fetal neurodevelopmental impairment, miscarriage, preterm birth, pre-eclampsia',
        'New diagnosis in pregnancy: start levothyroxine immediately without waiting for further tests; refer to obstetric endocrinology',
        'Postpartum thyroiditis: can cause transient hypo or hyper in the first year postpartum — monitor especially if anti-TPO positive',
      ],
    },

    { type: 'heading', level: 2, text: 'Drug Interactions with Levothyroxine Metabolism' },

    {
      type: 'table',
      headers: ['Drug', 'Effect', 'Action'],
      rows: [
        ['Amiodarone', 'Blocks T4→T3 conversion AND can cause hypothyroidism or hyperthyroidism', 'Annual TFT monitoring; specialist input if TFT abnormal on amiodarone'],
        ['Lithium', 'Inhibits thyroid hormone synthesis and release', 'Baseline TFT then 6-monthly; dose adjustment or levothyroxine supplementation'],
        ['Propranolol / beta-blockers', 'Reduce T4→T3 peripheral conversion', 'Masked symptoms of hypothyroidism; may need higher levothyroxine dose'],
        ['Rifampicin, phenytoin, carbamazepine', 'Increase hepatic metabolism of T4', 'May need higher levothyroxine dose; monitor TFT on initiation'],
        ['Digoxin, steroids', 'Reduce renal clearance of TSH — can alter levels', 'Interpret TFT in clinical context'],
        ['Statins', 'Higher risk of statin-induced myopathy in hypothyroidism', 'Ensure euthyroid before starting statins; investigate CK if myalgia'],
      ],
    },

  ],
}
