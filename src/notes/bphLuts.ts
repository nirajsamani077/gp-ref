import type { Note } from '../data/notes'

export const bphLuts: Note = {
  id: 'bph-luts',
  title: 'BPH & Lower Urinary Tract Symptoms (LUTS)',
  subtitle: 'Storage vs voiding symptoms, IPSS, alpha-blockers, 5-ARIs, frequency-volume charts and TURP',
  tags: ['urology'],

  body: `BPH benign prostatic hyperplasia LUTS lower urinary tract symptoms storage voiding overactive bladder OAB nocturia hesitancy poor stream incomplete emptying terminal dribbling IPSS tamsulosin alpha blocker finasteride dutasteride 5-ARI 5 alpha reductase inhibitor mirabegron anticholinergic oxybutynin solifenacin desmopressin frequency volume chart PSA DRE TURP prostatic urethral lift retention catheter`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG97 — LUTS in Men', url: 'https://www.nice.org.uk/guidance/ng97' },
        { label: 'NICE CKS — LUTS in Men', url: 'https://cks.nice.org.uk/topics/luts-in-men/' },
        { label: 'IPSS Score (MDCalc)', url: 'https://www.mdcalc.com/calc/3953/international-prostate-symptom-score-ipss-aua-symptom-index' },
      ],
    },

    { type: 'heading', level: 2, text: 'Overview' },

    {
      type: 'list',
      items: [
        'Nearly half of men over 50 have LUTS to some degree; prevalence and severity rise with age',
        'LUTS is a symptom complex — benign prostatic hyperplasia (BPH) is one common cause, but LUTS is not synonymous with BPH',
        'Always categorise symptoms as storage and/or voiding — this directs treatment',
        'Exclude sinister and reversible causes before attributing to BPH: prostate/bladder cancer, UTI, bladder stones, neurological disease, polyuria (diabetes, diuretics), medication effects',
      ],
    },

    { type: 'heading', level: 2, text: 'Symptom Categories' },

    {
      type: 'table',
      headers: ['Category', 'Symptoms', 'Typical Mechanism'],
      rows: [
        ['Storage (irritative)', 'Urgency, frequency, nocturia, urge incontinence', 'Overactive bladder (OAB) — detrusor overactivity'],
        ['Voiding (obstructive)', 'Hesitancy, poor/weak stream, straining, intermittency, incomplete emptying, terminal dribbling', 'Bladder outlet obstruction — classically BPH'],
        ['Post-micturition', 'Post-micturition dribble, sensation of incomplete emptying', 'Often overlaps with voiding symptoms'],
      ],
    },

    { type: 'heading', level: 2, text: 'Assessment' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Core Workup for Male LUTS',
      items: [
        'IPSS (International Prostate Symptom Score): quantifies symptom severity and impact on quality of life — mild ≤7, moderate 8–19, severe 20–35; use to guide treatment and monitor response',
        'Examination: abdomen (palpable bladder), external genitalia, and digital rectal examination (DRE) — assess prostate size, consistency, nodularity, asymmetry',
        'Urine dipstick ± MC&S: exclude infection and haematuria',
        'Consider PSA: counsel first (see PSA guidance); offer if voiding LUTS suggestive of obstruction, abnormal DRE, or red flags (weight loss, bone pain, family history)',
        'U&E: if chronic retention / obstructive uropathy suspected (palpable bladder, high post-void residual)',
        'Frequency-volume (bladder) chart for ≥3 days — the single most useful tool to distinguish causes (see below)',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'Interpreting the Frequency-Volume Chart',
      items: [
        'Normal pattern: ~3 voids of ~300 mL during the day, ~3 hours between voids, ~3 L total/day; most younger men do not wake to void',
        'Reduced volumes + frequent + variable volumes → overactive bladder (OAB)',
        'Good volumes but frequent, with night-time excess → nocturnal polyuria or excess evening fluid/caffeine/alcohol',
        'Reduced volumes with NO variation → red flag for bladder pathology/cancer — investigate',
        'High total output (polyuria) → think diabetes, diabetes insipidus, diuretics, hypercalcaemia',
      ],
    },

    { type: 'heading', level: 2, text: 'Conservative & Lifestyle Management' },

    {
      type: 'list',
      items: [
        'Fluid advice: modify timing/amount of fluids, especially in the evening; reduce caffeine and alcohol (try decaf) — but do NOT reduce overall water intake (concentrated urine worsens irritative symptoms)',
        'Bladder training and pelvic floor exercises for storage symptoms — refer to continence nurse',
        'Urethral milking / double voiding for post-micturition dribble and incomplete emptying',
        'Containment products (pads) via Bladder & Bowel UK if incontinence — while awaiting definitive management',
        'Review medications that worsen LUTS (diuretics timing, anticholinergic load, opioids causing retention)',
      ],
    },

    { type: 'heading', level: 2, text: 'Drug Treatment' },

    {
      type: 'table',
      headers: ['Drug Class', 'Example', 'Best For / Mechanism', 'Key Points & Side Effects'],
      rows: [
        ['Alpha-blocker', 'Tamsulosin 400 mcg OD (also alfuzosin, doxazosin)', 'Moderate–severe voiding LUTS not responding to conservative measures; relaxes prostatic smooth muscle to open the urethra', 'Works rapidly (days); main S/E postural hypotension and dizziness (take at bedtime), retrograde ejaculation; intra-operative floppy iris syndrome (tell ophthalmologist before cataract surgery)'],
        ['5-alpha reductase inhibitor (5-ARI)', 'Finasteride 5 mg OD (or dutasteride)', 'Enlarged prostate (>30 g / golf-ball or larger) at risk of progression; inhibits testosterone → DHT, shrinking the prostate', 'Delayed effect (3–6 months); reduces risk of retention and need for surgery; S/E erectile/sexual dysfunction, reduced libido; HALVES PSA (double the measured value when interpreting)'],
        ['Combination (alpha-blocker + 5-ARI)', 'Tamsulosin + finasteride (e.g. Combodart)', 'Bothersome moderate–severe LUTS with enlarged prostate', 'Greater symptom and progression benefit than either alone'],
        ['Antimuscarinic', 'Oxybutynin, solifenacin, tolterodine', 'Storage/OAB symptoms not responding to bladder training; add if storage symptoms persist on an alpha-blocker', 'Anticholinergic burden — dry mouth, constipation, cognitive effects (caution in elderly); avoid if high post-void residual / retention risk'],
        ['Beta-3 agonist', 'Mirabegron 50 mg OD', 'OAB as alternative to antimuscarinics (fewer cognitive effects)', 'Caution in uncontrolled hypertension — monitor BP'],
        ['Desmopressin', 'Desmopressin (unlicensed for this)', 'Troublesome nocturnal polyuria', 'Risk of hyponatraemia — check sodium; caution/avoid in elderly and heart failure'],
        ['Loop diuretic (timed)', 'Furosemide mid-late afternoon (unlicensed)', 'Nocturia from nocturnal polyuria', 'Off-licence; aims to offload fluid before bed'],
      ],
    },

    { type: 'heading', level: 2, text: 'Acute Urinary Retention' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Acute Retention — Catheterise & Assess',
      items: [
        'Painful inability to pass urine with a palpable/percussable bladder → urethral catheterisation for immediate relief; measure residual volume',
        'Check U&E for obstructive AKI; high-pressure chronic retention with renal impairment needs urgent urology',
        'Start an alpha-blocker (tamsulosin) for ≥2 days before a trial without catheter (TWOC) to relax the prostate and improve success',
        'Look for precipitants: UTI, constipation, anticholinergic/sympathomimetic drugs, recent surgery, excess alcohol',
        'Refer to urology; recurrent retention or failed TWOC may need long-term catheter, intermittent self-catheterisation (ISC), or surgery',
      ],
    },

    { type: 'heading', level: 2, text: 'Referral & Surgery' },

    {
      type: 'list',
      items: [
        'Refer to urology: any obstruction with complications (acute/chronic retention, obstructive AKI, recurrent UTIs, bladder stones, haematuria), failed medical management, or significant bother',
        '2WW prostate referral: abnormal-feeling prostate on DRE, or raised age-specific PSA',
        'TURP (transurethral resection of prostate): the standard surgical option — a cystoscope is used to shave prostatic tissue with an electric loop; complications include bleeding, UTI, retrograde ejaculation (almost universal), erectile dysfunction (~10%), and TUR syndrome (rare)',
        'Minimally invasive alternatives (emerging): prostatic urethral lift (UroLift), Rezum (water-vapour thermal therapy), transurethral microwave therapy — fewer sexual side effects, suitable for selected patients',
        'Long-term catheter or ISC if surgery unsuitable and conservative/medical measures have failed',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'uti-men', label: 'UTI in Men', subtitle: 'Always complicated — investigate; differential and treatment of male LUTS+dysuria' },
        { id: 'urinary-incontinence', label: 'Urinary Incontinence & Prolapse', subtitle: 'Storage symptoms and OAB management overlap' },
        { id: 'prostatitis', label: 'Prostatitis', subtitle: 'Painful LUTS with fever — the acute differential' },
        { id: 'erectile-dysfunction', label: 'Erectile Dysfunction', subtitle: 'PDE5 inhibitors, shared management; LUTS and ED frequently coexist' },
        { id: 'two-week-wait', label: '2WW Referral Guide', subtitle: 'Prostate cancer referral criteria — PSA and DRE' },
        { id: 'aki', label: 'Acute Kidney Injury', subtitle: 'Obstructive (post-renal) AKI from chronic retention' },
        { id: 'nocturia', label: 'Nocturia', subtitle: 'Classify the mechanism with a bladder diary before treating' },
      ],
    },

  ],
}
