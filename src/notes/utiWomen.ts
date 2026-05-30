import type { Note } from '../data/notes'

export const utiWomen: Note = {
  id: 'uti-women',
  title: 'UTI in Women',
  subtitle: 'Dipping, MC&S thresholds, lower/upper UTI antibiotics, catheter UTI, pregnancy',
  tags: ['urology', 'gynaecology', 'infection', 'antibiotics', 'pregnancy'],

  body: 'UTI urinary tract infection women cystitis pyelonephritis asymptomatic bacteriuria dipstick MC&S MSU mixed growth sterile pyuria nitrofurantoin trimethoprim TMP cefalexin pivmecillinam amoxicillin co-amoxiclav catheter CAUTI pregnancy GBS group B strep nitrite leucocyte upper lower',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Asymptomatic Bacteriuria — Don\'t Over-Treat',
      items: [
        'Common in elderly, sexually active women, diabetics, catheterised patients — **do not treat without symptoms**',
        'Exception: **Pregnancy** — any bacteriuria (even asymptomatic) must be treated (see below)',
      ],
    },

    // ── DIPPING & MC&S ───────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Dipstick vs MC&S Decision',
    },
    {
      type: 'list',
      items: [
        '**Simple UTI in women <65:** dipstick alone may suffice; can treat on symptoms alone if highly suggestive',
        '**Any of the following → send MC&S:** age ≥65, complicating factors (diabetes, structural abnormality, recurrent UTI), >1 feature suggesting upper UTI, pregnancy, catheterised',
        '**Mixed growth / epithelial cells** = contaminated sample — repeat if still symptomatic',
        '**Sterile pyuria** (WBC but no growth) → consider PV infection, gynaecological/ovarian pathology, or non-culturable organism (e.g. TB)',
        'For **simple cystitis** without systemic features: trial 48 h without antibiotics with analgesia & fluids is reasonable (no good evidence for cranberry juice, D-mannose, or alkalinising agents OTC)',
      ],
    },

    // ── LOWER UTI ────────────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Lower UTI — 3-Day Course',
    },
    {
      type: 'table',
      headers: ['Line', 'Antibiotic', 'Dose', 'Notes'],
      rows: [
        ['1st', 'Nitrofurantoin MR', '100 mg BD × 3 days', 'Avoid if eGFR <45'],
        ['1st', 'Trimethoprim (TMP)', '200 mg BD × 3 days', 'Avoid if recently used (resistance risk)'],
        ['2nd', 'Amoxicillin', '500 mg TDS × 3 days', 'If sensitivities confirm'],
        ['2nd', 'Cefalexin', '500 mg BD–TDS × 3 days', ''],
        ['2nd', 'Pivmecillinam', '400 mg stat then 200 mg BD', 'Less resistance than nitro/TMP'],
      ],
      caption: 'Lower UTI — only 3 days needed; check local antibiogram',
    },

    // ── UPPER UTI ────────────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Upper UTI (Pyelonephritis) — 7–10 Days',
    },
    {
      type: 'table',
      headers: ['Antibiotic', 'Dose', 'Notes'],
      rows: [
        ['Cefalexin', '500 mg BD–TDS × 7–10 days', '1st line if oral tolerated'],
        ['Co-amoxiclav', '500/125 mg TDS × 7–10 days', ''],
        ['Trimethoprim', '200 mg BD × 7 days', 'Only if sensitivities known'],
      ],
      caption: 'Systemically unwell → admit for IV antibiotics',
    },

    // ── CATHETER UTI ─────────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Catheter-Associated UTI',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Catheter UTI — Only 1 in 3 fevers in catheterised patients are from the catheter',
      items: [
        'All catheterised patients have biofilm colonisation — **never treat without symptoms**',
        'Always rule out another infective focus before attributing to catheter',
        '**Change catheter if in situ >7 days** before starting antibiotics (if possible)',
        'Always send a **clean MSU** (ideally after catheter change)',
        'Low threshold for upper UTI treatment / admission',
        'Uroshield (USS device on catheter) — limited evidence for reducing infection risk',
      ],
    },

    // ── PREGNANCY ────────────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'UTI in Pregnancy',
    },
    {
      type: 'callout',
      variant: 'danger',
      title: '⚠️ Critical — Untreated UTI in pregnancy risks miscarriage and stillbirth',
      items: [
        'MSU sent at **booking** for all pregnant women',
        'Any symptoms → dip and send MSU regardless of gestational age',
        '**Any bacteriuria (even asymptomatic) = 7-day antibiotic course + follow-up TOC MSU**',
        'Mixed growth / contamination → repeat sample before treating',
        'Sterile pyuria → investigate cause but different management',
        '**GBS on MSU = alert midwife/obstetrics + intrapartum IV antibiotics**',
      ],
    },
    {
      type: 'table',
      headers: ['Scenario', 'Antibiotic', 'Notes'],
      rows: [
        ['Lower UTI (1st line)', 'Nitrofurantoin 100 mg BD × 7 days', 'Avoid in 3rd trimester (risk of neonatal haemolysis)'],
        ['Lower UTI (2nd line)', 'Amoxicillin or Cefalexin 500 mg BD × 7 days', 'If sensitivities confirm'],
        ['Upper UTI / pyelonephritis', 'Cefalexin up to TDS or co-amoxiclav × 7–10 days', '**Admit if unwell**'],
      ],
      caption: 'Avoid nitrofurantoin in 3rd trimester; avoid TMP in 1st trimester (folate antagonist)',
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS – UTI (lower) in women', url: 'https://cks.nice.org.uk/topics/urinary-tract-infection-lower-women/' },
        { label: 'NICE CKS – Pyelonephritis', url: 'https://cks.nice.org.uk/topics/pyelonephritis-acute/' },
        { label: 'NICE CKS – UTI in pregnancy', url: 'https://cks.nice.org.uk/topics/urinary-tract-infection-lower-in-pregnancy/' },
      ],
    },
  ],
}
