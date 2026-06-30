import type { Note } from '../data/notes'

export const urinaryIncontinence: Note = {
  id: 'urinary-incontinence',
  title: 'Urinary Incontinence & Pelvic Organ Prolapse',
  subtitle: 'Stress vs urge, bladder diary, pelvic floor training, antimuscarinics/mirabegron and pessaries',
  tags: ['urology', 'gynaecology'],

  body: `urinary incontinence stress urge overactive bladder OAB detrusor overactivity pelvic floor exercises Kegel duloxetine antimuscarinic oxybutynin solifenacin tolterodine mirabegron bladder retraining bladder diary urodynamics pelvic organ prolapse cystocele rectocele uterine prolapse POP-Q ring pessary vaginal oestrogen`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG123 — Incontinence & Prolapse in Women', url: 'https://www.nice.org.uk/guidance/ng123' },
        { label: 'NICE CKS — Incontinence (Urinary, Women)', url: 'https://cks.nice.org.uk/topics/incontinence-urinary-in-women/' },
        { label: 'RCOG — Pelvic Organ Prolapse', url: 'https://www.rcog.org.uk/for-the-public/browse-all-patient-information-leaflets/pelvic-organ-prolapse-patient-information-leaflet/' },
      ],
    },

    { type: 'heading', level: 2, text: 'Assessment' },

    {
      type: 'list',
      items: [
        'Most common in older women with risk factors: previous pregnancy/vaginal delivery, obesity, pelvic surgery, menopause',
        'Categorise the type from the history — stress, urge, or mixed (and consider overflow/functional)',
        'Examination: abdominal (palpable bladder), pelvic exam for prolapse and pelvic floor tone, and vaginal atrophy',
        'Investigations: a 3-day bladder diary (frequency, volumes, leakage, fluid intake), urine dipstick + MSU (exclude UTI, haematuria), post-void residual if overflow suspected; urodynamics before surgery or if diagnosis unclear',
        'Review contributing factors: caffeine/alcohol/fluid timing, constipation, diuretics, and other medications',
      ],
    },

    { type: 'heading', level: 2, text: 'Types of Incontinence' },

    {
      type: 'table',
      headers: ['Type', 'Features', 'Mechanism'],
      rows: [
        ['Stress', 'Leakage on coughing, laughing, exertion, sneezing', 'Urethral sphincter/pelvic floor weakness'],
        ['Urge (OAB)', 'Urgency with leakage, frequency, nocturia', 'Detrusor overactivity'],
        ['Mixed', 'Features of both — treat the predominant symptom first', ''],
        ['Overflow', 'Dribbling, incomplete emptying, palpable bladder', 'Outflow obstruction or hypotonic bladder (e.g. neuropathy, drugs)'],
        ['Functional', 'Continent bladder but cannot reach toilet (mobility, cognition)', 'Address environment/mobility'],
      ],
    },

    { type: 'heading', level: 2, text: 'Stress Incontinence — Management' },

    {
      type: 'list',
      items: [
        'First-line: supervised pelvic floor muscle training (PFMT) for ≥3 months — at least 8 contractions, 3 times daily ("Kegels"); refer to women\'s health physiotherapy',
        'Lifestyle: weight loss if BMI ≥30, reduce caffeine, treat constipation',
        'If PFMT fails: refer for surgical options (colposuspension, autologous fascial sling, mid-urethral mesh tape — mesh is restricted/controversial)',
        'Duloxetine is an option only if surgery is declined/unsuitable (side effects limit use)',
      ],
    },

    { type: 'heading', level: 2, text: 'Urge Incontinence / OAB — Management' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Bladder Training then Drugs — Mind Anticholinergic Burden',
      items: [
        'First-line: bladder retraining for ≥6 weeks; reduce caffeine; treat constipation',
        'Antimuscarinics if training insufficient: oxybutynin (immediate-release), tolterodine, or solifenacin — but AVOID immediate-release oxybutynin in frail older women (falls, confusion, anticholinergic burden)',
        'Mirabegron (beta-3 agonist) is preferred in frail/older patients or where anticholinergic load is a concern — monitor blood pressure (caution in uncontrolled hypertension)',
        'Review the total anticholinergic burden (cognition, falls); reassess efficacy/side effects at 4 weeks',
        'Refractory OAB: refer urogynaecology/urology — options include intravesical botulinum toxin, percutaneous tibial nerve stimulation, sacral neuromodulation',
        'Vaginal (topical) oestrogen helps OAB symptoms and recurrent UTI in postmenopausal women with vaginal atrophy',
      ],
    },

    { type: 'heading', level: 2, text: 'Pelvic Organ Prolapse' },

    {
      type: 'list',
      items: [
        'Very common; descent that does not reach the introitus and is asymptomatic is physiological — SYMPTOMS define clinically relevant prolapse',
        'Symptoms: vaginal heaviness/dragging/a bulge, urinary or bowel symptoms (sometimes needing to digitally reduce to void/defecate), sexual dysfunction',
        'Types: anterior wall = cystocele; posterior wall = rectocele; apical = uterine or (post-hysterectomy) vaginal vault prolapse',
        'Examine standing and on straining; stage with POP-Q (Stage 1 above introitus → Stage 4 complete eversion)',
        'Management: supervised pelvic floor muscle training (~16 weeks) for mild prolapse; vaginal pessary (ring for stage 1–2, shelf/gellhorn for higher stages) — often GP/GPwSI fitted, changed ~6-monthly; topical vaginal oestrogen if atrophy; refer urogynaecology for surgery if pessary/PFMT inadequate',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'bph-luts', label: 'BPH & LUTS', subtitle: 'Male equivalent — storage/voiding symptoms and OAB management' },
        { id: 'menopause', label: 'Menopause', subtitle: 'Vaginal atrophy contributes; topical oestrogen helps' },
        { id: 'uti-women', label: 'UTI in Women', subtitle: 'Exclude infection; recurrent UTI overlaps with OAB' },
        { id: 'parkinsons-pd', label: "Parkinson's Disease", subtitle: 'Neurogenic bladder — avoid anticholinergic burden' },
      ],
    },

  ],
}
