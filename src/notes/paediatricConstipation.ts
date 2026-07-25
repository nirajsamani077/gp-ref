import type { Note } from '../data/notes'

export const paediatricConstipation: Note = {
  id: 'paediatric-constipation',
  title: 'Paediatric Constipation',
  subtitle: 'Idiopathic constipation, red flags, disimpaction with macrogol and maintenance laxatives',
  tags: ['paediatrics'],

  body: `paediatric constipation children faecal impaction overflow soiling encopresis macrogol Movicol disimpaction maintenance laxative senna lactulose toileting star chart Hirschsprung red flags ribbon stool meconium ERIC`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CG99 — Constipation in Children', url: 'https://www.nice.org.uk/guidance/cg99' },
        { label: 'NICE CKS — Constipation in Children', url: 'https://cks.nice.org.uk/topics/constipation-in-children/' },
        { label: 'ERIC — Children\'s Bowel & Bladder Charity', url: 'https://www.eric.org.uk/' },
      ],
    },

    {
      type: 'para',
      text: 'Childhood constipation is common, almost always idiopathic (functional), and gets stuck in a self-perpetuating cycle of a painful stool → withholding → a bigger, harder stool. The keys to getting it right are excluding the red flags that signal an organic cause, explaining the mechanism (and that overflow soiling is involuntary, not naughtiness), and treating it properly: disimpact FIRST, then maintain with titrated macrogol for months — diet alone will not fix it.',
    },
    { type: 'heading', level: 2, text: 'Diagnosis' },

    {
      type: 'list',
      items: [
        'Most is idiopathic (functional), often triggered by a painful/hard stool, a change in diet, toilet training, or illness → stool withholding → a vicious cycle',
        'Features: <3 complete stools/week, hard/large or "rabbit-dropping" stools, pain/straining or bleeding on passage, and (over ~1 year) overflow soiling, poor appetite, colicky abdominal pain relieved by passing stool, and retentive posturing',
        'Overflow soiling is involuntary and NOT the child\'s fault — explain this to reduce blame',
        'Examine the abdomen (palpable stool), perianal area and lower spine — do NOT perform a digital rectal exam in primary care',
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Red Flags — Do Not Diagnose Idiopathic Constipation',
      items: [
        'Failure to pass meconium within 48 hours of birth, or ribbon stools → Hirschsprung disease / anorectal anomaly',
        'Faltering growth, significant abdominal distension, or onset from birth/early infancy',
        'Leg weakness/sensory change, abnormal reflexes or a sacral/spinal abnormality → spinal cord pathology',
        'Also consider and exclude: hypothyroidism, hypercalcaemia, coeliac disease, and safeguarding concerns',
        'Any red flag → refer/investigate rather than treating as simple constipation',
      ],
    },

    { type: 'heading', level: 2, text: 'Management — Explain, Disimpact, Maintain' },

    {
      type: 'list',
      items: [
        'Explanation is key: a backlog of hard stool has stretched the bowel, making it painful and reducing the urge — clearing it (disimpaction) may temporarily worsen soiling before it improves, and the bowel then recovers its function',
        'Behavioural support: regular toileting after meals with feet supported on a stool, reward good behaviour (star charts), abdominal massage; ensure adequate fluid and a balanced fibre intake (diet alone will not cure it)',
        'Assess for faecal impaction (no bowel movement for a week, soiling, or palpable stool) and treat it FIRST before maintenance',
      ],
    },

    {
      type: 'table',
      headers: ['Phase', 'Regimen'],
      rows: [
        ['Disimpaction', 'Macrogol (Movicol Paediatric Plain) in an ESCALATING daily regimen over ~1–2 weeks; add a stimulant laxative (senna) if not disimpacted after ~2 weeks; if macrogol not tolerated, use lactulose ± a stimulant'],
        ['Maintenance (start once disimpacted)', 'Macrogol at a lower daily dose titrated to soft, regular stools; add/substitute a stimulant if needed; continue for several weeks/months and wean SLOWLY — do not stop abruptly'],
      ],
      caption: 'Disimpaction is dosed by age (escalating day by day); maintenance is titrated to effect. Do not use dietary measures alone. Refer to paediatrics if no response after ~1 month (infant) / ~3 months (older child), or if red flags emerge.',
    },

    {
      type: 'list',
      items: [
        'Infants not yet weaned rarely get constipated — investigate; bottle-fed infants can be offered extra water between feeds',
        'Signpost ERIC for parent resources and toileting videos',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'adult-constipation', label: 'Adult Constipation', subtitle: 'Laxative classes and the disimpaction/maintenance principle' },
        { id: 'coeliac-disease', label: 'Coeliac Disease', subtitle: 'A treatable cause to exclude' },
        { id: 'hypothyroidism', label: 'Hypothyroidism', subtitle: 'Red-flag cause of childhood constipation' },
        { id: 'child-safeguarding', label: 'Child Safeguarding', subtitle: 'Consider if red flags/psychosocial concern' },
      ],
    },

  ],
}
