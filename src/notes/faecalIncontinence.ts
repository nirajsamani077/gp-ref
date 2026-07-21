import type { Note } from '../data/notes'

export const faecalIncontinence: Note = {
  id: 'faecal-incontinence',
  title: 'Faecal Incontinence',
  subtitle: 'Assessment of a stigmatised symptom, treating the cause, bowel retraining and specialist options',
  tags: ['gastroenterology'],

  body: `faecal incontinence bowel incontinence obstetric anal sphincter injury OASIS overflow constipation loperamide pelvic floor exercises anal sphincter biofeedback rectal prolapse loose stool urgency soiling`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CG49 — Faecal Incontinence in Adults', url: 'https://www.nice.org.uk/guidance/cg49' },
        { label: 'NICE CKS — Faecal Incontinence', url: 'https://cks.nice.org.uk/topics/faecal-incontinence-in-adults/' },
        { label: 'Bladder & Bowel UK', url: 'https://www.bbuk.org.uk/' },
      ],
    },

    {
      type: 'callout',
      variant: 'info',
      title: 'Ask — Patients Rarely Volunteer It',
      items: [
        'Faecal incontinence is common and profoundly distressing but under-reported; ask directly in relevant consultations (childbirth, frailty, diabetes, IBD)',
        'Treat as a symptom, not a diagnosis — the goal is to identify and reverse the cause',
        'A rectal examination (tone, faecal loading, masses) and stool assessment are essential parts of the baseline work-up',
      ],
    },

    { type: 'heading', level: 2, text: 'Common Causes' },

    {
      type: 'table',
      headers: ['Category', 'Examples'],
      rows: [
        ['Sphincter/pelvic floor', 'Obstetric anal sphincter injury (OASIS), anal/rectal surgery, rectal prolapse'],
        ['Overflow', 'Chronic constipation with impaction and overflow soiling (very common, especially in frail/elderly)'],
        ['Loose stool / urgency', 'IBS, IBD, coeliac, bile-acid malabsorption, laxative excess, infection'],
        ['Neurological / other', 'Diabetes, spinal cord/cauda equina, MS, dementia, cognitive impairment, immobility'],
      ],
    },

    { type: 'heading', level: 2, text: 'Baseline (Reversible) Management' },

    {
      type: 'list',
      items: [
        'Treat impaction/constipation first — disimpaction then a maintenance laxative regimen often resolves overflow soiling',
        'Optimise stool consistency: manage the cause of loose stool; a low dose of loperamide can firm stool and reduce urgency (titrate carefully)',
        'Bowel habit training: regular toileting after meals (using the gastro-colic reflex), good access to a toilet, and attention to diet/fibre and fluids',
        'Skin care and containment products; address dexterity, mobility and cognition (a commode, adapted clothing)',
        'Review contributory medication and comorbidities (diabetic control, IBD activity)',
      ],
    },

    { type: 'heading', level: 2, text: 'When to Refer' },

    {
      type: 'list',
      items: [
        'Refer to specialist continence/colorectal services if conservative measures fail after ~3 months, or earlier if a treatable structural cause is suspected',
        'Specialist options: pelvic-floor muscle training with biofeedback, sphincter repair (for OASIS), sacral nerve stimulation, and rectal irrigation',
        'Red flags → 2WW: new change in bowel habit with bleeding, weight loss, or a rectal/anal mass; suspected cauda equina (saddle anaesthesia, urinary retention) → emergency',
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
