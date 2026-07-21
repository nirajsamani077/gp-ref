import type { Note } from '../data/notes'

export const faecalIncontinence: Note = {
  id: 'faecal-incontinence',
  title: 'Faecal Incontinence',
  subtitle: 'Assessment of a stigmatised symptom, treating the cause, bowel retraining and specialist options',
  tags: ['gastroenterology'],

  body: `faecal incontinence bowel incontinence obstetric anal sphincter injury OASIS overflow constipation impaction loperamide pelvic floor exercises biofeedback sacral nerve stimulation rectal prolapse loose stool urgency soiling continence`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Faecal incontinence is common and profoundly distressing, but it is markedly under-reported because of stigma — so it must be asked about directly in relevant consultations (after childbirth, in frailty, diabetes, IBD and neurological disease). It should be treated as a SYMPTOM, not a diagnosis: the aim is to identify and reverse the underlying cause. A rectal examination and stool assessment are essential parts of the baseline work-up.',
    },

    { type: 'heading', level: 2, text: 'Common Causes' },
    {
      type: 'table',
      headers: ['Category', 'Examples'],
      rows: [
        ['Overflow (very common)', 'Chronic constipation with faecal impaction and overflow spurious diarrhoea — especially in frail/elderly and immobile patients'],
        ['Sphincter / pelvic floor', 'Obstetric anal sphincter injury (OASIS), anal/rectal surgery (haemorrhoidectomy, fistula), rectal prolapse'],
        ['Loose stool / urgency', 'IBS, IBD, coeliac, bile-acid malabsorption, laxative excess, infection'],
        ['Neurological / cognitive', 'Diabetes (autonomic), spinal cord/cauda equina, MS, stroke, dementia; immobility and poor toilet access'],
      ],
    },

    { type: 'heading', level: 2, text: 'Assessment' },
    {
      type: 'list',
      items: [
        'Characterise it: urge (can\'t defer) vs passive (unaware) leakage vs post-defaecation soiling; frequency, stool consistency (Bristol chart), and effect on life.',
        'Rectal examination: resting/squeeze tone, faecal loading (overflow), masses, prolapse; check perianal sensation/reflex if a neurological cause is possible.',
        'Consider bloods and, where indicated, coeliac serology; investigate any change in bowel habit on its own merits.',
      ],
    },

    { type: 'heading', level: 2, text: 'Baseline (Reversible) Management' },
    {
      type: 'table',
      headers: ['Measure', 'Detail'],
      rows: [
        ['Treat impaction/constipation', 'Disimpaction then a maintenance laxative regimen — often resolves overflow soiling (the commonest reversible cause)'],
        ['Optimise stool consistency', 'Manage the cause of loose stool; a low, titrated dose of loperamide can firm stool and reduce urgency'],
        ['Bowel habit training', 'Scheduled toileting after meals (using the gastro-colic reflex); ensure prompt, accessible toileting; consider a fibre/fluid review'],
        ['Practical support', 'Skin care and barrier creams, containment/continence products, and adaptations for dexterity/mobility/cognition (commode, adapted clothing)'],
        ['Review contributors', 'Rationalise medications (e.g. laxatives, metformin), optimise diabetic control and IBD activity'],
      ],
    },

    { type: 'heading', level: 2, text: 'When to Refer' },
    {
      type: 'list',
      items: [
        'Refer to a specialist continence/colorectal service if conservative measures fail after ~3 months, or earlier if a treatable structural cause is suspected (OASIS, prolapse).',
        'Specialist options: pelvic-floor muscle training with biofeedback, sphincter repair, sacral nerve stimulation, and rectal irrigation.',
        'Red flags → 2WW: new change in bowel habit with rectal bleeding, weight loss, or a rectal/anal mass. Suspected cauda equina (saddle anaesthesia, urinary retention, bilateral leg symptoms) → same-day emergency.',
      ],
    },

    { type: 'heading', level: 2, text: 'Patient Information Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE CG49 — Faecal Incontinence in Adults', url: 'https://www.nice.org.uk/guidance/cg49' },
        { label: 'NICE CKS — Faecal Incontinence', url: 'https://cks.nice.org.uk/topics/faecal-incontinence-in-adults/' },
        { label: 'Bladder & Bowel UK', url: 'https://www.bbuk.org.uk/' },
        { label: 'Guts UK — Bowel Incontinence', url: 'https://gutscharity.org.uk/advice-and-information/symptoms/bowel-incontinence/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'adult-constipation', label: 'Constipation (Adult)', subtitle: 'Impaction and overflow — the commonest reversible cause' },
        { id: 'perineal-tears', label: 'Perineal Tears', subtitle: 'OASIS as a cause of obstetric sphincter injury' },
        { id: 'ibs', label: 'Irritable Bowel Syndrome', subtitle: 'Urgency and loose stool contributing to incontinence' },
        { id: 'ibd', label: 'Inflammatory Bowel Disease', subtitle: 'Active disease causing urgency/incontinence' },
        { id: 'urinary-incontinence', label: 'Urinary Incontinence & Prolapse', subtitle: 'Often coexists; shared pelvic-floor management' },
      ],
    },

  ],
}
