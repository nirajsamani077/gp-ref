import type { Note } from '../data/notes'

export const proteinuriaNephrotic: Note = {
  id: 'proteinuria-nephrotic',
  title: 'Proteinuria & Nephrotic Syndrome',
  subtitle: 'ACR interpretation, ACEi/ARB and BP targets, referral thresholds and childhood nephrotic syndrome',
  tags: ['renal'],

  body: `proteinuria albumin creatinine ratio ACR UACR nephrotic syndrome oedema hypoalbuminaemia ACE inhibitor ARB blood pressure target CKD renal referral minimal change disease steroids first-pass morning urine A2 A3`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG203 — Chronic Kidney Disease', url: 'https://www.nice.org.uk/guidance/ng203' },
        { label: 'NICE CKS — Proteinuria', url: 'https://cks.nice.org.uk/topics/chronic-kidney-disease/' },
        { label: 'Kidney Care UK', url: 'https://www.kidneycareuk.org/' },
      ],
    },

    { type: 'heading', level: 2, text: 'Measuring & Interpreting Proteinuria (Adults)' },

    {
      type: 'list',
      items: [
        'Quantify with an albumin:creatinine ratio (ACR) on a FIRST-PASS early-morning urine sample (more accurate than dipstick or random sample)',
        'Confirm a raised result by repeating (proteinuria should be persistent before acting on it)',
        'Always check the ACR alongside eGFR — together they define CKD stage and cardiovascular/progression risk',
        'Exclude a transient cause (UTI, fever, vigorous exercise, menstruation) and check for haematuria',
      ],
    },

    {
      type: 'table',
      headers: ['ACR (mg/mmol)', 'Category', 'Action'],
      rows: [
        ['≥3 (A2)', 'Clinically important proteinuria', 'Repeat/confirm; start ACEi or ARB (essential if diabetes with ACR ≥3, or ACR ≥30 with hypertension/CKD); refer only if also persistent haematuria with declining eGFR or cardiovascular disease'],
        ['≥30 (A3)', 'Nephrotic-range approaching', 'Refer nephrology if persistent haematuria without UTI; start/optimise ACEi/ARB'],
        ['≥70', 'Heavy proteinuria', 'Refer nephrology (unless known diabetes already being treated appropriately); all need ACEi/ARB'],
      ],
    },

    {
      type: 'callout',
      variant: 'info',
      title: 'ACEi/ARB and Blood-Pressure Targets in Proteinuric CKD',
      items: [
        'ACE inhibitors and ARBs reduce proteinuria and slow CKD progression — first-line antihypertensive in proteinuric CKD; check U&E ~1–2 weeks after starting/uptitrating (a ≤25% creatinine rise / ≤15% eGFR fall is acceptable)',
        'BP target: aim <130/80 mmHg if ACR ≥70 (and in diabetes with ACR ≥3); aim <140/90 if ACR <70',
        'Also treat cardiovascular risk (statin), manage diabetes tightly, and consider an SGLT2 inhibitor in proteinuric CKD (per NICE — reduces progression)',
        'Do NOT combine an ACEi with an ARB',
      ],
    },

    { type: 'heading', level: 2, text: 'Nephrotic Syndrome (Childhood)' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Refer Suspected Nephrotic Syndrome Immediately (Paediatrics)',
      items: [
        'The commonest childhood renal disease (usually <10 years), often triggered by an infection/allergic reaction',
        'Triad: heavy proteinuria + hypoalbuminaemia + marked oedema (periorbital, hands/feet, ascites); frothy urine; hypertension is uncommon',
        'Complications: increased risk of infection (loss of immunoglobulins) and thrombosis (loss of antithrombin)',
        'Immediate paediatric referral after urine dipstick and BP check → for urine PCR, bloods (albumin, U&E, complement, ANA/ANCA, antistreptolysin), ultrasound and (in atypical cases) renal biopsy — most have steroid-sensitive minimal change disease',
      ],
    },

    {
      type: 'list',
      items: [
        'Treatment: high-dose oral prednisolone (e.g. 2 mg/kg/day) for 4–6 weeks then taper; treat infections promptly; thromboprophylaxis in severe cases',
        'Home monitoring with urine dipstick (remission = protein-negative for 3 days; relapse = ≥3+ for 3 days or oedema)',
        'Avoid live vaccines while on immunosuppression; give pneumococcal and (inactivated) influenza vaccines',
        'Signpost Kidney Care UK',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'ckd', label: 'Chronic Kidney Disease', subtitle: 'Staging by eGFR + ACR; renal protection' },
        { id: 'hypertension', label: 'Hypertension', subtitle: 'BP targets and ACEi/ARB choice in CKD' },
        { id: 'haematuria', label: 'Haematuria', subtitle: 'Proteinuria + haematuria — nephrology referral' },
        { id: 'diabetic-complications', label: 'Diabetic Complications', subtitle: 'Diabetic nephropathy — ACR screening' },
      ],
    },

  ],
}
