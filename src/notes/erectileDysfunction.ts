import type { Note } from '../data/notes'

export const erectileDysfunction: Note = {
  id: 'erectile-dysfunction',
  title: 'Erectile Dysfunction',
  subtitle: 'CVD risk assessment, PDE5 inhibitors, testosterone, and premature ejaculation',
  tags: ['urology', 'mens health'],

  body: 'erectile dysfunction ED impotence PDE5 inhibitor sildenafil Viagra tadalafil Cialis vardenafil avanafil phosphodiesterase hypogonadism testosterone SHBG LH FSH prolactinoma PSA morning erections organic psychogenic premature ejaculation SSRI paroxetine EMLA lidocaine squeeze technique nitrates contraindication alprostadil vacuum pump cardiovascular risk QRISK',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Erectile Dysfunction — Overview',
      items: [
        'ED is common: affects ~40% of men over 40; prevalence increases with age',
        'ED is a marker of cardiovascular disease — always screen for and optimise CVD risk factors',
        'Organic vs psychogenic: morning erections present + intermittent ED (with partner not alone) suggests psychogenic component; absent morning erections + consistent ED suggests organic cause',
        'Screen ALL men with CVD, diabetes or hypertension for ED at relevant reviews',
      ],
    },

    { type: 'heading', level: 2, text: 'History and Examination' },

    {
      type: 'list',
      items: [
        'History: onset (sudden vs gradual), presence of morning erections, ability alone vs with partner, libido, ejaculatory function, testicular symptoms, urinary symptoms',
        'CVD risk factors: smoking, alcohol, obesity, hypertension, dyslipidaemia, diabetes',
        'Drug causes: SSRIs, antipsychotics, antihypertensives (BB, diuretics, spironolactone), steroids, finasteride/dutasteride, antiandrogens, phenothiazines, H2RAs, recreational drugs',
        'Examination: BP, BMI, testicular and genital examination (size, texture), DRE if PSA discussion had, visual fields/bitemporal hemianopia (pituitary adenoma/prolactinoma)',
        'QRISK3 cardiovascular risk assessment',
      ],
    },

    { type: 'heading', level: 2, text: 'Investigations' },

    {
      type: 'list',
      items: [
        'HbA1c and lipid profile (undiagnosed diabetes/dyslipidaemia common)',
        'TFTs (hypothyroidism)',
        'Morning fasting testosterone + SHBG (sex hormone-binding globulin): if low — repeat, then check LH and FSH to distinguish primary (hypergonadotrophic) vs secondary hypogonadism (hypogonadotrophic)',
        'Prolactin: if symptoms suggest prolactinoma (galactorrhoea, neurological symptoms, visual field defect, headache)',
        'PSA: after age-appropriate counselling (risk, benefits, limitations)',
      ],
    },

    { type: 'heading', level: 2, text: 'Management — PDE5 Inhibitors' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'PDE5 Inhibitors — Contraindications',
      items: [
        'DO NOT use with nitrates or nicorandil: risk of severe, potentially fatal hypotension — absolute contraindication',
        'DO NOT use with alpha-blockers (e.g. tamsulosin for BPH): risk of significant hypotension — caution; if must use together, use lowest dose, ensure at least 4–6 hours gap',
        'DO NOT use within 6 months of MI, stroke or unstable angina',
        'AION (anterior ischaemic optic neuropathy): rare serious adverse effect — stop and seek ophthalmology if sudden visual loss',
        'Avoid with grapefruit juice and alcohol (potentiate vasodilatory effects)',
        'Still require sexual arousal to work (not an aphrodisiac)',
      ],
    },

    {
      type: 'table',
      headers: ['Drug', 'When to Take', 'Duration of Action', 'Dose Range', 'Notes'],
      rows: [
        ['Sildenafil (Viagra)', '1 hour before sex; empty stomach (fatty food delays absorption)', '4–6 hours', '25–100 mg; start 50 mg, titrate 6-weekly', 'OTC available; cheapest option; best value; generic available'],
        ['Tadalafil (Cialis)', '30 minutes before sex — OR daily 5 mg', 'Up to 36 hours ("weekend pill")', '10–20 mg PRN; 5 mg OD for daily use', 'Long duration allows spontaneity; daily use for BPH+ED'],
        ['Vardenafil', '30 minutes before sex', '4–6 hours', '10–20 mg', 'Similar to sildenafil; orodispersible formulation available'],
        ['Avanafil', '15 minutes before sex (fastest onset)', '~15 hours', '100–200 mg', 'Fastest onset; more selective; fewer visual/blue-vision side effects'],
      ],
      caption: 'Side effects of all PDE5 inhibitors: flushing, nasal congestion, headache, dizziness. Less effective in: diabetes, hypogonadism, post-TURP, post-radical prostatectomy — still worth a trial but lower response rates.',
    },

    { type: 'heading', level: 2, text: 'When PDE5 Inhibitors Fail' },

    {
      type: 'list',
      items: [
        'Refer to urology if: young patient with lifelong ED; abnormal examination findings; no response to 2 different PDE5 inhibitors used at highest dose for ≥8 attempts each',
        'Specialist options: vacuum erection device (VED), intracavernosal alprostadil injections, intraurethral alprostadil pellets (MUSE), penile prosthesis (implant)',
        'Testosterone replacement (TRT): if confirmed hypogonadism — specialist initiation; discuss cardiovascular risk, fertility implications (suppresses spermatogenesis), prostate health',
      ],
    },

    { type: 'heading', level: 2, text: 'Premature Ejaculation' },

    {
      type: 'table',
      headers: ['Type', 'Cause', 'Management'],
      rows: [
        ['Primary (lifelong)', 'Likely neurobiological — always had rapid ejaculation from onset of sexual activity', 'Pharmacological: SSRIs (paroxetine off-licence 20–40 mg daily or PRN 3–4 hours before; dapoxetine licensed but often not available); topical: EMLA cream on glans (private; limited evidence); combination'],
        ['Secondary (acquired)', 'New onset after previously normal function', 'Check reversible causes: relationship problems, anxiety, prostate issues; behavioural therapy — squeeze technique or start-stop technique; refer psychosexual therapy or urology if not responding'],
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'Urology referral (failed PDE5 inhibitors, structural cause, post-prostatectomy): UHDB Queen\'s Hospital Burton urology — via e-RS',
        'Alternative: Good Hope Hospital (UHB) urology',
        'Endocrinology (confirmed hypogonadism, prolactinoma): UHDB Burton or Good Hope (UHB) endocrinology',
        'Psychosexual therapy: MPFT talking therapies or private psychosexual therapist; RELATE charity (relate.org.uk)',
        'NHS England: men with severe distress from ED are entitled to NHS PDE5 inhibitor prescription if meeting criteria (DM, MS, PD, spinal injury, radical prostatectomy, or severe distress)',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Erectile Dysfunction', url: 'https://cks.nice.org.uk/topics/erectile-dysfunction/' },
        { label: 'BAUS — ED Guidelines', url: 'https://www.baus.org.uk/professionals/sections/andrology/baus-andrology-guidelines/' },
        { label: 'EAU — Sexual Dysfunction Guidelines', url: 'https://uroweb.org/guidelines/sexual-and-reproductive-health/' },
        { label: 'NHS — Erectile Dysfunction', url: 'https://www.nhs.uk/conditions/erection-problems-erectile-dysfunction/' },
      ],
    },
  ],
}
