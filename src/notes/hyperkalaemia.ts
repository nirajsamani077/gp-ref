import type { Note } from '../data/notes'

export const hyperkalaemia: Note = {
  id: 'hyperkalaemia',
  title: 'Hyperkalaemia',
  subtitle: 'When to admit, ECG changes, drug causes and primary-care management of mild hyperkalaemia',
  tags: ['nephrology', 'cardiology'],

  body: `hyperkalaemia high potassium K+ ECG tented T waves wide QRS calcium gluconate insulin dextrose salbutamol ACE inhibitor ARB spironolactone eplerenone amiloride potassium-sparing diuretic Sando-K digoxin toxicity Addisons adrenal insufficiency rhabdomyolysis tumour lysis AKI haemolysed sample pseudohyperkalaemia renal referral patiromer`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Hyperkalaemia', url: 'https://cks.nice.org.uk/topics/hyperkalaemia/' },
        { label: 'UK Renal Association — Hyperkalaemia Guideline', url: 'https://ukkidney.org/health-professionals/guidelines/treatment-acute-hyperkalaemia-adults' },
      ],
    },

    { type: 'heading', level: 2, text: 'Step 1 — Is This an Emergency?' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Admit / Same-Day Assessment if ANY of:',
      items: [
        'K⁺ ≥6.5 mmol/L (any cause) → admit for IV calcium gluconate (cardioprotection), insulin-dextrose ± nebulised salbutamol',
        'K⁺ ≥6.0 mmol/L WITH ECG changes — tented T waves, flattened/absent P waves, prolonged PR, widened QRS, sine wave (peri-arrest)',
        'Symptoms: muscle weakness, palpitations, paraesthesiae, or any cardiac/neuro features',
        'High-risk group with significant hyperkalaemia: diabetes, heart failure, IHD, on digoxin, dialysis patient',
        'Any AKI accompanying the hyperkalaemia → admit',
        'Always obtain an immediate ECG if K⁺ >6.0 — but a normal ECG does NOT exclude risk; treat the number and the patient',
      ],
    },

    { type: 'heading', level: 2, text: 'Step 2 — Exclude a Spurious (Pseudo) Result' },

    {
      type: 'list',
      items: [
        'Haemolysed sample (most common artefact) — difficult venepuncture, prolonged tourniquet, fist clenching, delayed/incorrect sample handling',
        'Thrombocytosis or marked leucocytosis (potassium released in the tube)',
        'If the patient is well, has no risk factors, and the result is unexpected → repeat urgently with a clean, promptly processed sample before acting',
      ],
    },

    { type: 'heading', level: 2, text: 'Step 3 — Identify the Cause' },

    {
      type: 'table',
      headers: ['Category', 'Causes', 'Action'],
      rows: [
        ['Drugs (commonest in primary care)', 'ACE inhibitors, ARBs, spironolactone/eplerenone, amiloride, NSAIDs, trimethoprim, potassium supplements (Sando-K), digoxin toxicity (causes hyperkalaemia; hypokalaemia precipitates dig toxicity)', 'Review and adjust/stop (see Step 4)'],
        ['Renal', 'AKI, advanced CKD, type 4 renal tubular acidosis', 'Check eGFR trend; admit if AKI; refer renal if CKD-related and refractory'],
        ['Endocrine', 'Addison\'s disease (adrenal insufficiency)', 'Check 9am cortisol, sodium (low), glucose (low); consider if hyperkalaemia + hyponatraemia + unwell'],
        ['Cellular release / severe', 'Rhabdomyolysis (raised CK), tumour lysis syndrome, extensive tissue damage, acidosis', 'Usually unwell → admit; check CK, urate, phosphate, calcium'],
        ['Excess intake', 'Potassium supplements, salt substitutes (potassium chloride), rarely diet alone', 'Dietary advice (see below)'],
      ],
    },

    { type: 'heading', level: 2, text: 'Step 4 — Managing Mild Hyperkalaemia in Primary Care' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Safe to Manage in the Community if:',
      items: [
        'K⁺ 5.5–5.9 mmol/L, no symptoms, no AKI, no high-risk features, normal ECG',
        '(Or K⁺ 6.0–6.4 with a normal immediate ECG and no risk factors — but most of these warrant admission; have a low threshold and seek advice)',
      ],
    },

    {
      type: 'list',
      items: [
        'Repeat U&E in 1–3 days depending on the level and clinical concern',
        'Dietary advice: reduce high-potassium foods — bananas, tomatoes/tomato purée, avocados, oranges, potatoes, dried fruit, nuts, chocolate, salt substitutes',
        'Medication review (the usual culprit): if on an ACE inhibitor/ARB/spironolactone — halve or stop and repeat U&E within ~1 week',
        'If the drug is only for hypertension → consider switching to an alternative class',
        'If the drug is for HFrEF or proteinuric CKD/diabetes (prognostically important) → restart once K⁺ normalises and monitor closely; these agents are often worth persevering with',
        'Recheck renal function and potassium after any dose change',
        'Refer to renal for refractory hyperkalaemia not requiring admission — options include sodium bicarbonate (if acidotic) and newer potassium binders (patiromer, sodium zirconium cyclosilicate) to enable continuation of prognostic drugs',
      ],
    },

    { type: 'heading', level: 2, text: 'Practical Pearls' },

    {
      type: 'list',
      items: [
        'Trimethoprim behaves like a potassium-sparing diuretic — beware in patients already on ACEi/ARB/spironolactone (especially elderly) — check U&E if prescribing together',
        'Combination of ACEi/ARB + spironolactone + NSAID is a classic "triple whammy" for both AKI and hyperkalaemia',
        'In digoxin users, both abnormal high and low potassium are dangerous — keep potassium in range',
        'Document a clear plan and safety-net: advise the patient to seek urgent help if they develop weakness, palpitations, or feel unwell',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'aki', label: 'Acute Kidney Injury', subtitle: 'AKI + hyperkalaemia mandates admission; drug-induced AKI' },
        { id: 'ckd', label: 'Chronic Kidney Disease', subtitle: 'CKD as a cause; ACEi/ARB balance, potassium binders' },
        { id: 'heart-failure', label: 'Heart Failure', subtitle: 'ACEi/ARB/MRA prognostic benefit vs hyperkalaemia trade-off' },
        { id: 'adrenal-insufficiency', label: 'Adrenal Insufficiency', subtitle: 'Addison\'s — hyperkalaemia + hyponatraemia; 9am cortisol' },
      ],
    },

  ],
}
