import type { Note } from '../data/notes'

export const hyponatraemia: Note = {
  id: 'hyponatraemia',
  title: 'Hyponatraemia',
  subtitle: 'Volume status assessment, serum/urine osmolality, SIADH and the danger of rapid correction',
  tags: ['nephrology', 'endocrine'],

  body: `hyponatraemia low sodium Na cerebral oedema seizures serum osmolality urine osmolality urine sodium SIADH syndrome inappropriate ADH vasopressin hypovolaemia euvolaemia hypervolaemia diuretics Addisons hypothyroidism heart failure liver failure renal failure pseudohyponatraemia hyperglycaemia HHS fluid restriction central pontine myelinolysis osmotic demyelination SSRI`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Hyponatraemia', url: 'https://cks.nice.org.uk/topics/hyponatraemia/' },
        { label: 'European Hyponatraemia Guideline', url: 'https://academic.oup.com/ndt/article/29/suppl_2/i1/1904679' },
      ],
    },

    { type: 'heading', level: 2, text: 'Step 1 — Who Needs Same-Day Assessment?' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Admit / Discuss with Medics Same Day if:',
      items: [
        'Any symptomatic hyponatraemia — neurological (confusion, drowsiness, headache, seizures) or vomiting → risk of cerebral oedema',
        'Na⁺ <125 mmol/L (risk of seizures) — usually admit',
        'Na⁺ <130 mmol/L acutely or rapidly falling → discuss with medics same day',
        'Chronic, stable, mild hyponatraemia can often be investigated in primary care — but remember it is a risk factor for falls and fragility fractures and still needs a cause',
      ],
    },

    { type: 'heading', level: 2, text: 'Step 2 — Primary Care Workup for Mild Hyponatraemia (Na⁺ >130)' },

    {
      type: 'list',
      items: [
        'Repeat sodium and send paired serum osmolality AND urine osmolality + urine sodium (ideally before any treatment) — these are the key discriminating tests',
        'Assess volume status clinically: BP/postural drop, pulse, JVP, skin turgor, mucous membranes, oedema, fluid balance',
        'Review the drug history (very common cause): thiazides, SSRIs, SNRIs, carbamazepine and other AEDs, PPIs, NSAIDs, antipsychotics, desmopressin',
        'If sodium is dropping on repeat → discuss with medics',
      ],
    },

    { type: 'heading', level: 2, text: 'Step 3 — Interpret Serum Osmolality' },

    {
      type: 'table',
      headers: ['Serum Osmolality', 'Meaning', 'Action'],
      rows: [
        ['>275 (normal/high)', 'Not true (hypotonic) hyponatraemia — consider hyperglycaemia (HHS — check glucose), mannitol, or pseudohyponatraemia (severe hyperlipidaemia/paraproteinaemia)', 'Treat underlying cause; discuss with medics if HHS suspected'],
        ['<275 (low)', 'True hypotonic hyponatraemia → proceed to urine osmolality and volume status', 'Continue algorithm below'],
      ],
    },

    { type: 'heading', level: 2, text: 'Step 4 — Urine Osmolality & Sodium + Volume Status' },

    {
      type: 'table',
      headers: ['Finding', 'Interpretation', 'Likely Causes'],
      rows: [
        ['Urine osmolality <100', 'Kidneys appropriately diluting urine — excess water relative to solute', 'Primary polydipsia, water intoxication, low solute intake ("tea and toast"/beer potomania), severe hypothyroidism'],
        ['Urine osm >100 + urine Na >30 + hypovolaemic', 'Renal sodium loss', 'Diuretics (especially thiazides), salt-wasting, Addison\'s (mineralocorticoid deficiency)'],
        ['Urine osm >100 + urine Na >30 + euvolaemic', 'Inappropriate water retention', 'SIADH (diagnosis of exclusion), hypothyroidism, glucocorticoid deficiency'],
        ['Urine osm >100 + urine Na <30 + hypovolaemic', 'Extra-renal sodium loss', 'Diarrhoea & vomiting, third-space losses, burns'],
        ['Urine osm >100 + urine Na <30 + hypervolaemic (oedematous)', 'Dilutional / impaired excretion', 'Heart failure, liver cirrhosis, nephrotic syndrome, renal failure'],
      ],
    },

    { type: 'heading', level: 2, text: 'SIADH' },

    {
      type: 'callout',
      variant: 'info',
      title: 'SIADH — Diagnose Only After Excluding Other Causes',
      items: [
        'Inappropriate ADH (vasopressin) secretion → excess water reabsorption → dilutional hyponatraemia with concentrated urine (urine osm >100, urine Na >30), in a clinically EUVOLAEMIC patient',
        'Diagnosis of exclusion: must have normal thyroid function, normal adrenal/cortisol, normal renal function, and not be on relevant drugs',
        'Causes: malignancy (especially small cell lung cancer), CNS insults (stroke, SAH, infection, head injury), pulmonary disease (pneumonia, TB), and drugs (SSRIs, AEDs, PPIs — many)',
        'Workup if euvolaemic hyponatraemia: TFTs, 9am cortisol, BNP if cardiac, CXR ± CT chest/abdomen (malignancy), CT head if neurological',
        'Primary care management if not admitting: stop/avoid contributing drugs, fluid restriction (often to ~750–1000 mL/day; tighter restrictions are usually inpatient), and close monitoring',
      ],
    },

    { type: 'heading', level: 2, text: 'Critical Safety Pearl — Do Not Correct Too Quickly' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Osmotic Demyelination (Central Pontine Myelinolysis)',
      items: [
        'Correcting sodium too rapidly (especially in chronic hyponatraemia) causes osmotic demyelination syndrome — irreversible: pseudobulbar palsy, quadriparesis, "locked-in" syndrome, and death',
        'This is why chronic/asymptomatic hyponatraemia is corrected slowly and cautiously — generally an inpatient/specialist task',
        'Avoid giving large volumes of fluid or hypertonic saline in primary care; if in doubt, discuss with medics rather than treating aggressively',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'adrenal-insufficiency', label: 'Adrenal Insufficiency', subtitle: 'Addison\'s — hyponatraemia + hyperkalaemia; 9am cortisol' },
        { id: 'hypothyroidism', label: 'Hypothyroidism', subtitle: 'Severe hypothyroidism as a cause of hyponatraemia' },
        { id: 'heart-failure', label: 'Heart Failure', subtitle: 'Hypervolaemic dilutional hyponatraemia' },
        { id: 'lung-cancer', label: 'Lung Cancer', subtitle: 'Small cell lung cancer — classic SIADH cause' },
        { id: 'elderly-falls', label: 'Elderly Falls', subtitle: 'Hyponatraemia as a reversible contributor to falls' },
      ],
    },

  ],
}
