import type { Note } from '../data/notes'

export const aki: Note = {
  id: 'aki',
  title: 'Acute Kidney Injury (AKI)',
  subtitle: 'Staging · STOP-AKI · SADMAN drugs · Sick day rules · Admission criteria',
  tags: ['renal'],
  body: 'AKI acute kidney injury creatinine rise staging stage 1 2 3 prerenal intrarenal postrenal obstruction sepsis dehydration SADMAN sick day rules ACE ARB SGLT2 metformin NSAID diuretic hyperkalaemia potassium think kidneys nephrotoxic CKD',
  content: [

    { type: 'heading', level: 2, text: 'What is AKI?' },
    {
      type: 'para',
      text: 'AKI is defined as a rise in creatinine of ≥1.5× baseline within 7 days (or ≥26 µmol/L rise within 48 hours, or urine output <0.5 mL/kg/hr for >6 hours). It is common, often reversible, and carries significant morbidity if missed. GPs frequently encounter AKI via e-Alerts from the lab.',
    },

    { type: 'heading', level: 2, text: 'Staging' },
    {
      type: 'table',
      headers: ['Stage', 'Creatinine Rise', 'Urine Output'],
      rows: [
        ['Stage 1', '1.5–1.9× baseline within 7 days, OR ≥26 µmol/L rise within 48 hrs', '<0.5 mL/kg/hr for 6–12 hrs'],
        ['Stage 2', '2.0–2.9× baseline', '<0.5 mL/kg/hr for ≥12 hrs'],
        ['Stage 3', '≥3× baseline, OR Cr ≥354 µmol/L, OR RRT started', '<0.3 mL/kg/hr for ≥24 hrs or anuria ≥12 hrs'],
      ],
    },

    { type: 'heading', level: 2, text: 'Causes — Pre / Intra / Post Renal' },
    {
      type: 'table',
      headers: ['Type', 'Causes', 'Clues'],
      rows: [
        ['Pre-renal\n(most common)', 'Dehydration, vomiting/diarrhoea, sepsis, heart failure, haemorrhage, hepatorenal syndrome', 'Low BP, tachycardia, dry mucous membranes, recent illness, diuretics, ACE/ARB'],
        ['Intra-renal', 'Glomerulonephritis, vasculitis, interstitial nephritis (NSAIDs, antibiotics), myeloma, rhabdomyolysis, contrast nephropathy', 'Haematuria ≥2+, proteinuria ≥2+, systemic symptoms (rash, arthralgia, epistaxis, haemoptysis), raised ESR'],
        ['Post-renal\n(obstruction)', 'BPH, renal/ureteric calculi, blocked catheter, pelvic malignancy', 'Difficulty voiding, distended bladder, pelvic mass, previous stones'],
      ],
    },

    { type: 'heading', level: 2, text: 'When to Think AKI' },
    {
      type: 'callout',
      variant: 'warning',
      title: 'High-Risk Patients — Think AKI Proactively',
      items: [
        'Elderly patients with any acute illness',
        'Known CKD (especially stage 3–5)',
        'Heart failure, diabetes mellitus, liver disease',
        'Currently on SADMAN drugs (see below)',
        'Recurrent UTIs, urological symptoms, pelvic malignancy',
        'Recent contrast media, surgery, or hospital admission',
      ],
    },

    { type: 'heading', level: 2, text: 'SADMAN Drugs — Hold in AKI' },
    {
      type: 'callout',
      variant: 'danger',
      title: 'SADMAN — Nephrotoxic Drugs to Hold During Acute Illness / AKI',
      items: [
        'S — SGLT2 inhibitors (empagliflozin, dapagliflozin, canagliflozin)',
        'A — ACE inhibitors (ramipril, lisinopril, perindopril)',
        'D — Diuretics (furosemide, bendroflumethiazide, spironolactone)',
        'M — Metformin (risk of lactic acidosis; hold if Cr rising or eGFR <30)',
        'A — ARBs / Angiotensin II receptor blockers (losartan, candesartan, valsartan)',
        'N — NSAIDs (ibuprofen, naproxen, diclofenac)',
        'Additional: Nitrofurantoin (ineffective + accumulates in CKD), Allopurinol, PPIs (interstitial nephritis), Aminoglycosides, Lithium',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Sick Day Rules — Advise All Patients on SADMAN Drugs',
      items: [
        'Hold SADMAN drugs temporarily when: vomiting/diarrhoea, sweating heavily (fever/hot weather), unable to drink normally',
        'Restart when: eating/drinking normally for 24–48 hours and feeling well',
        'Check U&E 5–7 days after restarting ACE/ARB if AKI occurred',
        'Provide written sick day rules leaflet — Think Kidneys resources available at thinkkidneys.nhs.uk',
        'Do NOT stop long-term if just a minor cold — illness needs to genuinely affect fluid intake',
      ],
    },

    { type: 'heading', level: 2, text: 'Primary Care AKI e-Alert Response — STOP-AKI' },
    {
      type: 'image',
      src: '/images/aki.png',
      alt: 'Barnsley Hospital NHS primary care AKI management flowchart showing staging, admission criteria and STOP-AKI mnemonic',
      caption: 'Primary Care AKI Management Flowchart — Barnsley NHS. Use the STOP-AKI approach for all community AKI e-Alerts.',
    },
    {
      type: 'table',
      caption: 'STOP-AKI Mnemonic',
      headers: ['Letter', 'Action'],
      rows: [
        ['S — Sepsis', 'Recognise and treat infection. Urinalysis — if protein/leucocytes/nitrites: send MSU, start antibiotics. Check FBC + U&E every 48–72 hrs until stable'],
        ['T — Toxins', 'Hold nephrotoxic drugs: NSAIDs, ACE inhibitors, ARBs, Nitrofurantoin, Allopurinol (full SADMAN list)'],
        ['O — Optimise / Obstruction', 'Optimise BP and fluid state. Dehydrated → encourage oral fluids. Fluid overloaded → refer to medics. Hypotensive → stop antihypertensives/diuretics until BP stable. Suspected urinary retention → catheter ± admission'],
        ['P — Prevent Harm', 'Review medications — stop/adjust: Metformin, PPIs, Opiates (accumulate), Sulphasalazine, Lithium. Discuss dose reductions with specialists'],
      ],
    },

    { type: 'heading', level: 2, text: 'Community Management — Which Patients to Admit?' },
    {
      type: 'callout',
      variant: 'danger',
      title: 'Immediately Refer to Hospital — Medical SPR',
      items: [
        'AKI Stage 3 (creatinine ≥3× baseline)',
        'Clinically unwell and/or high EWS / Sepsis',
        'AKI of any stage with no clear cause',
        'Suspected urinary tract obstruction or intrinsic renal disease',
        'Pregnancy with AKI — any stage',
        'Urinalysis ≥2+ blood AND protein (think glomerulonephritis, vasculitis, myeloma)',
        'Systemic symptoms: arthralgia, rash, epistaxis, haemoptysis',
        'AKI complications: hyperkalaemia K >6.0 mmol/L, fluid overload, uraemia',
        'Known CKD stage 4 or 5 with added AKI',
        'Renal transplant with any AKI',
        'Inadequate response to initial treatment',
        'Ongoing concerns — consider urgent Renal / Urology discussion',
      ],
    },
    {
      type: 'table',
      caption: 'Community management by stage (if NOT acutely unwell)',
      headers: ['Stage', 'Action', 'Monitoring'],
      rows: [
        ['Stage 1', 'Manage in community if stable, no red flags', 'Repeat U&E within 3 days. Review cause. Apply STOP-AKI'],
        ['Stage 2', 'Manage in community only if well, cause clear, improving', 'Repeat U&E next day. Daily review. Low threshold to admit'],
        ['Stage 3', 'Admit in almost all circumstances', 'If exceptional community management — discuss with renal team first'],
        ['Any stage — acutely unwell', 'Admit', '—'],
      ],
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Community Follow-Up After AKI e-Alert',
      items: [
        'Review clinical state at 24–48 hrs (use rapid response team if needed)',
        'Repeat creatinine and potassium (K+) — monitor trend',
        'Discuss with medical team if any ongoing concerns',
        'If potassium rising → urgent review: K >5.5 → ECG, dietary advice, consider resonium; K >6.0 → admit',
        'Once resolved: recheck eGFR at 3 months — may unmask underlying CKD',
      ],
    },

    { type: 'heading', level: 2, text: 'ACE / ARB Creatinine Monitoring' },
    {
      type: 'para',
      text: 'When starting or increasing ACE inhibitors, ARBs, or Entresto (sacubitril-valsartan), monitor U&E at baseline and 2 weeks after any change.',
    },
    {
      type: 'table',
      caption: 'ACE/ARB — creatinine rise guidance',
      headers: ['Creatinine Change', 'Potassium', 'Action'],
      rows: [
        ['Rise 15–30%', 'Any', 'Generally continue unless dehydration or hypotension. Recheck U&E in 2 weeks'],
        ['Rise >30%', 'Any', 'Recheck in 1 week — if not returned to baseline, stop ACE/ARB'],
        ['Any rise', 'K >6.5 or patient unwell', 'Admit immediately'],
        ['Any rise', 'K >6.0, patient stable', 'Review other medications (potassium-sparing diuretics etc). Generally stop ACE/ARB. Repeat U&E in 1 week'],
        ['Any rise', 'K 5.5–6.0, patient stable', 'Halve dose of ACE/ARB. Repeat U&E in 3 days'],
      ],
    },

    { type: 'heading', level: 2, text: 'Investigations in Community AKI' },
    {
      type: 'list',
      items: [
        'U&E and creatinine — establish baseline, trend, and stage',
        'FBC — infection (raised WCC), anaemia (haemolysis in TTP/HUS)',
        'Urinalysis ± MSU — haematuria, proteinuria, nitrites, leucocytes',
        'Blood glucose — check for sepsis, DKA contributing to dehydration',
        'Calcium — hypercalcaemia as cause of AKI',
        'Urate — gout/urate nephropathy',
        'USS KUB (renal ultrasound) — obstruction, hydronephrosis, renal size; if needed, usually warrants admission',
        'Consider: Bence Jones protein, ANCA, anti-GBM, complement, CRP/ESR if intrinsic renal disease suspected',
      ],
    },

    { type: 'heading', level: 2, text: 'After AKI — Long-Term Management' },
    {
      type: 'list',
      items: [
        'Check eGFR and creatinine at 3 months post-AKI — may reveal underlying CKD not previously recognised',
        'Code as CKD if eGFR <60 on two readings ≥3 months apart',
        'Restart SADMAN drugs cautiously once creatinine has returned to near baseline — recheck U&E 1–2 weeks later',
        'Provide sick day rules guidance in writing — prevents future AKI episodes',
        'Address underlying cause: treat sepsis source, remove obstructions, review prescribing',
        'Refer to nephrology if: persistent CKD stage 4/5, proteinuria, haematuria, unclear cause, or recurrent AKI',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'Think Kidneys — GP Resources', url: 'https://www.thinkkidneys.nhs.uk/aki/resources/gps/' },
        { label: 'Think Kidneys — Sick Day Rules', url: 'https://www.thinkkidneys.nhs.uk/aki/resources/patients/' },
        { label: 'NICE AKI Guidance (NG148)', url: 'https://www.nice.org.uk/guidance/ng148' },
        { label: 'NICE AKI Quality Standard (QS76)', url: 'https://www.nice.org.uk/guidance/qs76' },
        { label: 'Renal Association — AKI Guidelines', url: 'https://www.renalassociation.org/guidelines/current-guidelines/' },
      ],
    },
  ],
}
