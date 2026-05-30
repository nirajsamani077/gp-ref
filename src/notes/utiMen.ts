import type { Note } from '../data/notes'

export const utiMen: Note = {
  id: 'uti-men',
  title: 'UTI in Men',
  subtitle: 'MC&S required, 7-day course, prostatitis, haematuria follow-up, 2WW',
  tags: ['urology', 'infection', 'antibiotics'],

  body: 'UTI urinary tract infection men male MSU MC&S trimethoprim nitrofurantoin cefalexin ciprofloxacin prostatitis haematuria microhaematuria 2WW two week wait catheter urology referral rare',

  content: [
    {
      type: 'callout',
      variant: 'warning',
      title: 'UTI is Rare in Men — Always Investigate Further',
      items: [
        'UTI in men is uncommon — **send all for MC&S**',
        'If recurrent or multiple episodes → **renal USS + urology referral**',
        '**Minimum 7-day antibiotic course** (compared to 3 days in women)',
      ],
    },

    // ── ANTIBIOTICS ──────────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Antibiotic Choice — 7 Days',
    },
    {
      type: 'table',
      headers: ['Line', 'Antibiotic', 'Dose', 'Notes'],
      rows: [
        ['1st', 'Trimethoprim', '200 mg BD × 7 days', 'Check local resistance patterns'],
        ['1st', 'Nitrofurantoin MR', '100 mg BD × 7 days', 'Check renal function (avoid eGFR <45); **not for prostatitis** (doesn\'t reach therapeutic prostate levels)'],
        ['2nd', 'Cefalexin', '500 mg BD–TDS × 7 days', 'If sensitivities confirm or 1st line fails'],
        ['2nd', 'Co-amoxiclav', '500/125 mg TDS × 7 days', 'If organism sensitive'],
        ['2nd', 'Ciprofloxacin', '500 mg BD × 7 days', '**Counsel tendon rupture risk** (quinolone); use only if sensitivities support'],
      ],
      caption: 'Always guided by MC&S sensitivities where possible',
    },

    // ── PROSTATITIS ──────────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Prostatitis',
    },
    {
      type: 'callout',
      variant: 'info',
      title: '90% of men with a febrile UTI have prostate involvement',
      items: [
        '**Do NOT use nitrofurantoin for prostatitis** — does not reach therapeutic levels in prostate tissue',
        'Use **ciprofloxacin** (prostatic penetration) or TMP if sensitive — 4–6 weeks for chronic prostatitis',
        'Consider urology referral for chronic/recurrent prostatitis',
      ],
    },

    // ── CATHETER UTI ─────────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Catheter-Associated UTI',
    },
    {
      type: 'list',
      items: [
        'Use **7-day broader spectrum antibiotic** (guided by MC&S)',
        '**Ideally change catheter** before starting antibiotics if catheter not inserted within the last 7 days',
        'Clean MSU after catheter change for reliable culture',
      ],
    },

    // ── HAEMATURIA FOLLOW-UP ─────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Haematuria Follow-Up',
    },
    {
      type: 'callout',
      variant: 'danger',
      title: '2WW Haematuria Referral',
      items: [
        '**Ensure micro/macrohaematuria has resolved post-antibiotic treatment**',
        '**Refer 2WW (suspected bladder cancer) if haematuria does not resolve after treatment in patients ≥60 years**',
        'Non-visible haematuria on two separate occasions → urology referral regardless of age',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS – UTI (lower) in men', url: 'https://cks.nice.org.uk/topics/urinary-tract-infection-lower-men/' },
        { label: 'NICE CKS – Prostatitis', url: 'https://cks.nice.org.uk/topics/prostatitis/' },
        { label: 'NICE NG12 – Suspected cancer referral (bladder/kidney)', url: 'https://www.nice.org.uk/guidance/ng12' },
      ],
    },
  ],
}
