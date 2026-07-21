import type { Note } from '../data/notes'

export const uterovaginalProlapse: Note = {
  id: 'uterovaginal-prolapse',
  title: 'Uterovaginal Prolapse',
  subtitle: 'Cystocele, rectocele and uterine descent — assessment, pessaries, pelvic-floor therapy and surgery',
  tags: ['gynaecology'],

  body: `uterovaginal prolapse pelvic organ prolapse POP cystocele rectocele enterocele uterine prolapse procidentia vaginal vault prolapse POP-Q staging pessary ring shelf Gellhorn pelvic floor exercises dragging sensation bulge vaginal oestrogen mesh`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Pelvic organ prolapse is descent of the pelvic organs into the vagina due to pelvic-floor weakness. It is very common, especially after vaginal delivery and postmenopause, and is a quality-of-life condition: management is guided by how bothersome the symptoms are, not by the anatomical stage alone. Many mild prolapses need only conservative measures.',
    },
    {
      type: 'list',
      items: [
        'Risk factors: parity/vaginal delivery (especially instrumental, large baby), ageing/oestrogen deficiency, obesity, chronic cough or constipation (raised intra-abdominal pressure), heavy lifting, and previous pelvic surgery/hysterectomy.',
      ],
    },

    { type: 'heading', level: 2, text: 'Types & Symptoms' },
    {
      type: 'table',
      headers: ['Type', 'Compartment / note'],
      rows: [
        ['Cystocele', 'Anterior wall — bladder; may cause voiding difficulty, incomplete emptying, recurrent UTI'],
        ['Rectocele', 'Posterior wall — rectum; incomplete defaecation, needing to splint/digitate'],
        ['Uterine prolapse', 'Uterine descent; procidentia = the uterus protrudes fully beyond the introitus'],
        ['Vault prolapse', 'Descent of the vaginal vault after hysterectomy'],
        ['Enterocele', 'Small bowel herniating into the upper posterior vaginal wall'],
      ],
    },
    {
      type: 'list',
      items: [
        'Symptoms: a "something coming down"/dragging sensation, a palpable or visible vaginal bulge, worse on standing/straining and by the end of the day; associated bladder, bowel and sexual dysfunction.',
        'Examine with a Sims speculum in the left lateral position, asking the woman to strain/cough (ideally also standing); stage with POP-Q. Check for ulceration if the prolapse is exposed.',
      ],
    },

    { type: 'heading', level: 2, text: 'Management' },
    {
      type: 'table',
      headers: ['Option', 'Detail'],
      rows: [
        ['Conservative (first-line for mild/moderate)', 'Supervised pelvic-floor muscle training for ≥16 weeks; weight loss; treat constipation and chronic cough; avoid heavy lifting'],
        ['Topical vaginal oestrogen', 'For atrophy — improves symptoms and vaginal skin condition; useful alone and alongside a pessary'],
        ['Pessary', 'Ring (first choice) or shelf/Gellhorn for more advanced prolapse; avoids surgery; needs review/change every ~4–6 months with topical oestrogen to protect the vaginal wall'],
        ['Surgery', 'For symptomatic prolapse failing/declining conservative care — anterior/posterior repair (colporrhaphy), hysteropexy/vaginal hysterectomy, or vault suspension; counsel about recurrence'],
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Vaginal Mesh — Restricted',
      items: [
        'Transvaginal mesh for prolapse is currently paused/restricted in the UK following safety concerns — ensure any surgical decision is fully informed and specialist-led.',
        'Refer to gynaecology/urogynaecology for: pessary-fitting difficulties, symptomatic prolapse beyond the introitus, ulceration, or surgical consideration.',
      ],
    },

    { type: 'heading', level: 2, text: 'Patient Information Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG123 — Urinary Incontinence & Prolapse in Women', url: 'https://www.nice.org.uk/guidance/ng123' },
        { label: 'NICE CKS — Prolapse (Uterine/Vaginal)', url: 'https://cks.nice.org.uk/topics/uterine-vaginal-prolapse/' },
        { label: 'POGP — Pelvic Floor Exercises (Patient PDF)', url: 'https://thepogp.co.uk/resources/patient_information.aspx' },
        { label: 'RCOG — Pelvic Organ Prolapse Patient Info', url: 'https://www.rcog.org.uk/for-the-public/browse-our-patient-information/pelvic-organ-prolapse/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'urinary-incontinence', label: 'Urinary Incontinence & Prolapse', subtitle: 'Coexisting incontinence and shared pelvic-floor therapy' },
        { id: 'menopause', label: 'Menopause & HRT', subtitle: 'Vaginal oestrogen for atrophy alongside prolapse' },
        { id: 'faecal-incontinence', label: 'Faecal Incontinence', subtitle: 'Posterior compartment/bowel dysfunction overlap' },
        { id: 'obesity', label: 'Obesity', subtitle: 'A modifiable risk factor' },
        { id: 'uti-women', label: 'UTI in Women', subtitle: 'Recurrent UTI with incomplete bladder emptying' },
      ],
    },

  ],
}
