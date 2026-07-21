import type { Note } from '../data/notes'

export const uterovaginalProlapse: Note = {
  id: 'uterovaginal-prolapse',
  title: 'Uterovaginal Prolapse',
  subtitle: 'Cystocele, rectocele and uterine descent — POP-Q staging, pessaries, pelvic-floor therapy and surgery',
  tags: ['gynaecology'],

  body: `uterovaginal prolapse pelvic organ prolapse POP cystocele rectocele enterocele uterine prolapse vaginal vault prolapse POP-Q staging pessary ring shelf pelvic floor exercises dragging sensation bulge vaginal mesh`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG123 — Urinary Incontinence & Prolapse in Women', url: 'https://www.nice.org.uk/guidance/ng123' },
        { label: 'NICE CKS — Prolapse (Uterine/Vaginal)', url: 'https://cks.nice.org.uk/topics/uterine-vaginal-prolapse/' },
        { label: 'POGP — Pelvic Floor Physiotherapy', url: 'https://thepogp.co.uk/' },
      ],
    },

    {
      type: 'callout',
      variant: 'info',
      title: 'A Quality-of-Life Condition',
      items: [
        'Prolapse is descent of the pelvic organs into the vagina due to pelvic-floor weakness; very common, especially after vaginal delivery and postmenopause',
        'Treatment is guided by the degree of bother, not just the anatomical stage — many mild prolapses need only conservative measures',
        'Risk factors: parity/vaginal delivery, ageing/oestrogen deficiency, obesity, chronic cough or constipation (raised intra-abdominal pressure), and previous pelvic surgery',
      ],
    },

    { type: 'heading', level: 2, text: 'Types & Symptoms' },

    {
      type: 'table',
      headers: ['Type', 'Compartment'],
      rows: [
        ['Cystocele', 'Anterior wall — bladder; may cause voiding difficulty/recurrent UTI'],
        ['Rectocele', 'Posterior wall — rectum; may cause incomplete defaecation/digitation'],
        ['Uterine prolapse', 'Uterine descent; procidentia if the uterus protrudes fully'],
        ['Vault prolapse', 'After hysterectomy — descent of the vaginal vault'],
      ],
    },

    {
      type: 'list',
      items: [
        'Symptoms: a "something coming down"/dragging sensation, a palpable vaginal bulge, worse on standing/straining and by day\'s end',
        'Associated bladder/bowel/sexual dysfunction; examine (ideally with a Sims speculum, standing/straining) and stage with POP-Q',
        'Exclude and treat contributory factors; check for ulceration if the prolapse is exposed',
      ],
    },

    { type: 'heading', level: 2, text: 'Management' },

    {
      type: 'list',
      items: [
        'Conservative (first-line for mild/moderate or where surgery is not wanted): supervised pelvic-floor muscle training (≥16 weeks), weight loss, treat constipation/cough, and topical vaginal oestrogen for atrophy',
        'Pessary (ring or shelf/Gellhorn): effective, avoids surgery; needs periodic changing/review (typically 4–6 monthly) and topical oestrogen to protect the vaginal skin',
        'Surgery: for symptomatic prolapse when conservative options fail or are declined — repair (colporrhaphy), hysteropexy/hysterectomy, or vault suspension; counsel about recurrence',
        'Note the restrictions on transvaginal mesh — most mesh procedures are paused/restricted in the UK; ensure informed, specialist-led decisions',
        'Refer to gynaecology/urogynaecology for pessary fitting difficulties, symptomatic prolapse beyond the introitus, ulceration, or surgical consideration',
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
