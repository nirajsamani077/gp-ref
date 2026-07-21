import type { Note } from '../data/notes'

export const utiMen: Note = {
  id: 'uti-men',
  title: 'UTI in Men',
  subtitle: 'Always send MC&S, 7-day courses, prostatitis, recurrent-UTI work-up and the haematuria 2WW',
  tags: ['urology', 'infection', 'antibiotics'],

  body: 'UTI urinary tract infection men male MSU MC&S trimethoprim nitrofurantoin cefalexin co-amoxiclav ciprofloxacin prostatitis epididymo-orchitis haematuria microhaematuria 2WW bladder cancer catheter CAUTI recurrent UTI renal ultrasound flow rate residual asymptomatic bacteriuria',

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'A UTI in a man should never be treated as a simple, self-contained event in the way a lower UTI in a healthy woman often is. Because the longer male urethra and prostatic secretions are protective, infection implies either an obstructive/functional abnormality, prostatic involvement, or instrumentation — so all men need a urine culture, a longer course, and consideration of the underlying cause.',
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Core Principles',
      items: [
        'Send an MSU for MC&S in ALL men with a suspected UTI (before antibiotics where possible).',
        'Treat for a MINIMUM of 7 days (not the 3-day course used for uncomplicated female UTI).',
        'Assume prostatic involvement in any man with a febrile UTI, perineal/pelvic pain or a "relapse" — choose an antibiotic that penetrates the prostate.',
        'Investigate recurrent or upper-tract infection (renal tract imaging + urology).',
      ],
    },

    { type: 'heading', level: 2, text: 'Antibiotic Choice — 7 Days (Lower UTI)' },
    {
      type: 'table',
      headers: ['Line', 'Antibiotic', 'Dose', 'Notes'],
      rows: [
        ['1st', 'Trimethoprim', '200 mg BD × 7 days', 'Check local resistance; avoid if recent use'],
        ['1st', 'Nitrofurantoin MR', '100 mg BD × 7 days', 'Avoid if eGFR <45; does NOT treat prostatitis (no prostatic penetration)'],
        ['2nd', 'Cefalexin', '500 mg BD–TDS × 7 days', 'If 1st line fails or per sensitivities'],
        ['2nd', 'Co-amoxiclav', '500/125 mg TDS × 7 days', 'If organism sensitive'],
        ['Prostatic', 'Ciprofloxacin', '500 mg BD', 'Good prostatic penetration — for prostatitis; counsel MHRA tendon/aortic/neuro-psychiatric warnings'],
      ],
      caption: 'Always refine to the narrowest effective agent once MC&S sensitivities are back.',
    },

    { type: 'heading', level: 2, text: 'Prostatitis' },
    {
      type: 'callout',
      variant: 'info',
      title: '~90% of Febrile Male UTIs Involve the Prostate',
      items: [
        'Acute bacterial prostatitis: fever, perineal/pelvic pain, LUTS and a tender, boggy prostate — treat with a fluoroquinolone (ciprofloxacin/ofloxacin) or trimethoprim if sensitive, for 14–28 days. Avoid vigorous prostate massage (bacteraemia risk).',
        'Chronic bacterial prostatitis: 4–6 weeks of a prostate-penetrating antibiotic.',
        'Do NOT use nitrofurantoin for prostatitis — it does not reach therapeutic prostate levels.',
        'Admit if systemically unwell/urinary retention/immunocompromised; consider urology for recurrent or refractory disease.',
      ],
    },

    { type: 'heading', level: 2, text: 'Catheter-Associated UTI (CAUTI)' },
    {
      type: 'list',
      items: [
        'Only treat SYMPTOMATIC CAUTI — do not treat asymptomatic bacteriuria or "cloudy/smelly urine" alone (drives resistance).',
        'Take a fresh specimen and treat with a 7-day course guided by MC&S.',
        'Change the catheter before/at the start of treatment if it has been in place >7 days (removes biofilm); take a clean specimen after any change.',
      ],
    },

    { type: 'heading', level: 2, text: 'Recurrent UTI — Investigate' },
    {
      type: 'list',
      items: [
        'Recurrent (≥2 in 6 months or ≥3 in a year) or upper-tract UTI in a man warrants renal-tract ultrasound (± post-void residual and flow rate) and urology referral to exclude obstruction (BPH, stricture), stones, incomplete emptying or, rarely, bladder cancer.',
        'Address modifiable factors: bladder emptying, constipation, hydration, glycaemic control, and treat any BPH.',
        'Distinguish epididymo-orchitis (scrotal pain/swelling) — needs organism-directed cover (consider STI causes in younger men → refer GUM).',
      ],
    },

    { type: 'heading', level: 2, text: 'Haematuria Follow-Up' },
    {
      type: 'callout',
      variant: 'danger',
      title: '2WW for Persistent Haematuria',
      items: [
        'Recheck urine after treatment to ensure any visible or non-visible haematuria has RESOLVED.',
        'Refer 2WW (suspected bladder cancer) if: aged ≥45 with unexplained visible haematuria (without infection, or persisting/recurring after treatment); or aged ≥60 with unexplained non-visible haematuria plus dysuria or a raised WCC.',
        'Persistent non-visible haematuria confirmed on repeat testing → urology assessment.',
      ],
    },

    { type: 'heading', level: 2, text: 'Patient Information Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — UTI (Lower) in Men', url: 'https://cks.nice.org.uk/topics/urinary-tract-infection-lower-men/' },
        { label: 'NICE NG112 — Antimicrobial Prescribing (Prostatitis)', url: 'https://www.nice.org.uk/guidance/ng110' },
        { label: 'NICE NG12 — Suspected Cancer (Bladder/Renal)', url: 'https://www.nice.org.uk/guidance/ng12' },
        { label: 'NHS — UTI in Men', url: 'https://www.nhs.uk/conditions/urinary-tract-infections-utis/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'prostatitis', label: 'Prostatitis', subtitle: 'Acute and chronic prostatitis in detail' },
        { id: 'bph-luts', label: 'BPH & LUTS', subtitle: 'Obstruction/incomplete emptying predisposing to UTI' },
        { id: 'haematuria', label: 'Haematuria', subtitle: 'Visible/non-visible haematuria referral thresholds' },
        { id: 'acute-testicular-pain', label: 'Acute Testicular Pain', subtitle: 'Epididymo-orchitis differential' },
        { id: 'uti-women', label: 'UTI in Women', subtitle: 'Contrast with uncomplicated female UTI management' },
      ],
    },

  ],
}
