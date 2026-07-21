import type { Note } from '../data/notes'

export const maleHypogonadism: Note = {
  id: 'male-hypogonadism',
  title: 'Male Hypogonadism & Gynaecomastia',
  subtitle: 'Testosterone deficiency work-up, primary vs secondary, TRT risks/monitoring and gynaecomastia',
  tags: ['endocrine', 'urology'],

  body: `male hypogonadism testosterone deficiency 9am total testosterone SHBG free androgen index LH FSH prolactin erectile dysfunction low libido gynaecomastia testosterone replacement TRT polycythaemia PSA Klinefelter primary secondary`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Erectile Dysfunction / Hypogonadism', url: 'https://cks.nice.org.uk/topics/erectile-dysfunction/' },
        { label: 'BSSM — Testosterone Deficiency Guideline', url: 'https://www.bssm.org.uk/' },
        { label: 'Society for Endocrinology', url: 'https://www.endocrinology.org/' },
      ],
    },

    { type: 'heading', level: 2, text: 'When to Test — and How' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Check a 9am FASTED Testosterone',
      items: [
        'Testosterone deficiency is both over- and under-diagnosed (media/marketing driven) — test only with genuine symptoms and confirm biochemically',
        'Symptoms: erectile dysfunction / loss of early-morning erections, low libido, fatigue, low mood, gynaecomastia, hot flushes ("male menopause"); also consider if osteoporosis, anaemia, or infertility, or on long-term steroids/opioids/antipsychotics',
        'Examination: BMI, testicular volume (pea → grape → plum), secondary sexual characteristics, gynaecomastia, and a DRE',
        'Testosterone must be a MORNING (9am), fasted sample (diurnal + food effects); a random/afternoon low is unreliable',
      ],
    },

    { type: 'heading', level: 2, text: 'Interpreting Results' },

    {
      type: 'list',
      items: [
        'Total testosterone <12 nmol/L is low → repeat at ~4 weeks with LH, FSH and prolactin',
        'If total is borderline (8–12), check SHBG and calculate the free androgen index / free testosterone (an obese man may have low total but normal free testosterone)',
        'Confirmed deficiency: total <8 (or low free testosterone) — with low/normal LH → SECONDARY (pituitary/hypothalamic); with raised LH → PRIMARY (testicular)',
        'Low testosterone with low LH or raised prolactin → suspect a pituitary lesion (urgent endocrine referral, MRI)',
        'Causes — Primary (↑LH/FSH): Klinefelter\'s, undescended testes, mumps orchitis, chemotherapy/trauma. Secondary (↓/normal LH/FSH, more common): pituitary adenoma, obesity, alcohol, opioids, steroids, systemic illness',
      ],
    },

    { type: 'heading', level: 2, text: 'Testosterone Replacement Therapy (TRT) — Specialist-Guided' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Benefits vs Risks and Monitoring',
      items: [
        'Preparations: transdermal gel (e.g. Testogel/Tostran) or IM depot injections (e.g. Nebido)',
        'Benefits: improves libido/sexual function, energy, mood, muscle mass and bone density',
        'Contraindications: prostate or male breast cancer, severe untreated BPH, active desire to conceive (TRT suppresses spermatogenesis — offer sperm storage), haematocrit >0.54/thrombophilia, severe heart failure/OSA',
        'Side effects: polycythaemia, gynaecomastia, oedema, acne',
        'Monitoring at 3, 6 and 12 months: morning testosterone (aim total ~15–30; check 2–4h after a gel dose), haematocrit (aim <0.54 — reduce/stop if higher), and PSA (refer urology if PSA rises >1.4 ng/mL in a year)',
      ],
    },

    { type: 'heading', level: 2, text: 'Gynaecomastia' },

    {
      type: 'list',
      items: [
        'True gynaecomastia = firm, ≥2 cm subareolar glandular tissue (an increased oestrogen:androgen ratio); distinguish from pseudogynaecomastia (fatty tissue in obesity)',
        'Physiological: pubertal (~60% at 12–14, settles within ~18 months) and older men (>65, testicular involution)',
        'Pathological causes: hypogonadism, testicular tumour or other oestrogen-secreting tumour, hyperprolactinaemia/hyperthyroidism, liver/renal failure, and DRUGS (spironolactone, cimetidine, digoxin, finasteride, GnRH agonists, anabolic steroids, cannabis)',
        'Assess: rapid/asymmetrical/hard swelling → 2WW male breast cancer; examine the testes (~3% of gynaecomastia have a testicular tumour); check FAI (morning testosterone + SHBG), U&E, LFTs, TFTs, and tumour markers (AFP, β-hCG) if a tumour is suspected',
        'Management: reassure and observe pubertal cases; treat the cause; tamoxifen (off-licence) if persistent/painful before fibrosis develops; surgery once fibrosed (>~1 year)',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'erectile-dysfunction', label: 'Erectile Dysfunction', subtitle: 'Overlapping presentation; PDE5 inhibitors' },
        { id: 'pituitary-prolactinoma', label: 'Pituitary Tumours & Prolactinoma', subtitle: 'Secondary hypogonadism and raised prolactin' },
        { id: 'osteoporosis', label: 'Osteoporosis', subtitle: 'Hypogonadism is a cause of male osteoporosis' },
        { id: 'scrotal-groin-lumps', label: 'Scrotal & Groin Lumps', subtitle: 'Examine the testes — tumour causing gynaecomastia' },
      ],
    },

  ],
}
