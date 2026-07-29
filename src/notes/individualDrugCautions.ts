import type { Note } from '../data/notes'

export const individualDrugCautions: Note = {
  id: 'individual-drug-cautions',
  title: 'Key Drug Cautions — ACE Inhibitors, Amiodarone & Bisphosphonates',
  subtitle: 'Practical safety notes for three commonly-prescribed drugs with distinctive pitfalls',
  tags: ['prescribing'],

  body: `ACE inhibitor ramipril cough angioedema hyperkalaemia renal function AKI pregnancy amiodarone thyroid pulmonary fibrosis QT interactions monitoring bisphosphonate alendronate oesophagitis dosing instructions atypical femoral fracture osteonecrosis jaw dental`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'A quick-reference to three widely-used drugs whose safe prescribing hinges on a few specific, memorable cautions. Full monitoring schedules are in the shared-care/BNF references — this note highlights the practical pitfalls GPs most need at hand.',
    },

    { type: 'heading', level: 2, text: 'ACE Inhibitors (& ARBs)' },
    {
      type: 'list',
      items: [
        'Check U&E and eGFR before starting and ~1–2 weeks after starting/each dose increase — a modest creatinine rise (≤~30%) or potassium up to ~5.5 is acceptable; a larger rise suggests renovascular disease → stop and investigate.',
        'Key adverse effects: a dry COUGH (a common reason to switch to an ARB), HYPERKALAEMIA, first-dose hypotension, and (rare but serious) ANGIOEDEMA — which can occur even after years of use and is a contraindication to future ACE inhibitors.',
        'CONTRAINDICATED in pregnancy (fetotoxic) — avoid in women who may conceive without contraception/counselling; hold during acute illness/dehydration ("sick-day rules") and avoid the "triple whammy" with NSAIDs + diuretics (AKI).',
      ],
    },

    { type: 'heading', level: 2, text: 'Amiodarone' },
    {
      type: 'callout',
      variant: 'warning',
      title: 'A Drug With Many Long-Term Toxicities',
      items: [
        'Monitoring: TFTs and LFTs before starting and every ~6 months (it causes BOTH hypo- and hyperthyroidism, and hepatotoxicity); baseline chest X-ray and ECG.',
        'Organ toxicity: pulmonary fibrosis (new dyspnoea/cough → investigate), thyroid dysfunction, hepatotoxicity, corneal microdeposits (usually benign), photosensitivity/slate-grey skin, and peripheral neuropathy.',
        'It has a very long half-life and MANY interactions — it raises digoxin levels and potentiates WARFARIN (reduce doses and monitor), and adds to QT prolongation; check before co-prescribing.',
      ],
    },

    { type: 'heading', level: 2, text: 'Bisphosphonates (e.g. Alendronate)' },
    {
      type: 'list',
      items: [
        'Administration matters: take on an empty stomach with plain water, remain UPRIGHT (sitting/standing) for 30–60 minutes and don\'t eat/take other medicines in that time — to prevent oesophagitis (a common cause of intolerance).',
        'Correct vitamin D/calcium deficiency before/alongside; ensure adequate calcium intake.',
        'Long-term/rare risks: osteonecrosis of the jaw (encourage a DENTAL check and good oral hygiene before/during treatment; caution around invasive dental work) and atypical femoral fractures (warn about new thigh/groin pain).',
        'Review the need after ~3–5 years (a "drug holiday" may be appropriate depending on ongoing fracture risk — see Osteoporosis); caution/avoid if eGFR <35.',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'BNF — ACE Inhibitors / Amiodarone / Bisphosphonates', url: 'https://bnf.nice.org.uk/' },
        { label: 'MHRA — Drug Safety Update', url: 'https://www.gov.uk/drug-safety-update' },
        { label: 'SPS — Specialist Pharmacy Service', url: 'https://www.sps.nhs.uk/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'hypertension', label: 'Hypertension', subtitle: 'ACE inhibitor/ARB first-line use and monitoring' },
        { id: 'atrialFibrillation', label: 'Atrial Fibrillation', subtitle: 'Amiodarone for rhythm control' },
        { id: 'osteoporosis', label: 'Osteoporosis', subtitle: 'Bisphosphonate indications and drug holidays' },
        { id: 'drug-monitoring', label: 'Drug Monitoring Quick Reference', subtitle: 'Fuller monitoring schedules' },
        { id: 'raised-inr-warfarin', label: 'High INR on Warfarin', subtitle: 'Amiodarone potentiates warfarin' },
      ],
    },

  ],
}
