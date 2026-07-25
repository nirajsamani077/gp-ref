import type { Note } from '../data/notes'

export const hypokalaemia: Note = {
  id: 'hypokalaemia',
  title: 'Hypokalaemia',
  subtitle: 'When to admit, ECG changes, the diuretic/GI-loss majority, hypokalaemia + hypertension and oral replacement',
  tags: ['endocrine', 'nephrology'],

  body: `hypokalaemia low potassium ECG U wave T wave inversion ST depression long QT diuretics GI loss vomiting diarrhoea hypomagnesaemia digoxin toxicity Conn's syndrome primary hyperaldosteronism Cushing's Liddle Bartter Gitelman renal tubular acidosis Sando-K potassium replacement spironolactone`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Hypokalaemia', url: 'https://cks.nice.org.uk/topics/hypokalaemia/' },
        { label: 'UK Kidney Association — Electrolyte Guidance', url: 'https://ukkidney.org/health-professionals/guidelines' },
      ],
    },

    {
      type: 'para',
      text: 'Hypokalaemia is worked up in three steps: decide if it is an emergency (very low potassium, ECG changes, symptoms, or high-risk drugs like digoxin), identify the cause — almost always diuretics or GI losses — then replace and treat the cause. Two patterns are worth flagging: check magnesium (you cannot correct refractory hypokalaemia until it is replaced), and hypokalaemia WITH hypertension should prompt a screen for Conn\'s syndrome.',
    },
    { type: 'heading', level: 2, text: 'Step 1 — Is This an Emergency?' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Admit for IV Replacement / Monitoring if:',
      items: [
        'K⁺ <2.5 mmol/L, OR K⁺ <3.0 with ECG changes (T-wave flattening/inversion, ST depression, prominent U waves, long QT — risk of arrhythmia)',
        'Symptoms (muscle weakness/cramps, palpitations/arrhythmia, neurological) → low threshold to admit',
        'High-risk groups: on digoxin (hypokalaemia precipitates digoxin toxicity), heart failure, ischaemic heart disease; in diabetics check glucose/ketones (hypokalaemia with DKA treatment)',
        'IV potassium replacement must be given with cardiac monitoring and controlled infusion rates — a hospital task',
      ],
    },

    { type: 'heading', level: 2, text: 'Step 2 — Identify the Cause' },

    {
      type: 'list',
      items: [
        '~98% of cases are due to diuretics (loop/thiazide) or GI losses (vomiting, diarrhoea, laxatives)',
        'Check magnesium — hypomagnesaemia causes refractory hypokalaemia (you cannot correct the potassium until the magnesium is replaced)',
        'Drugs: thiazide/loop diuretics, beta-2 agonists (salbutamol), insulin, theophylline, corticosteroids, laxatives; alcohol',
        'Endocrine causes WITH hypertension: primary hyperaldosteronism (Conn\'s), Cushing\'s syndrome, congenital adrenal hyperplasia, Liddle syndrome',
        'Rarer with normal/low BP: renal tubular acidosis, Bartter/Gitelman syndromes, eating disorders (purging/anorexia)',
        'Digoxin toxicity: note that hypokalaemia worsens it (whereas hyperkalaemia is a feature of acute digoxin overdose)',
      ],
    },

    {
      type: 'callout',
      variant: 'info',
      title: 'Hypokalaemia + Hypertension → Screen for Conn\'s',
      items: [
        'The combination of hypokalaemia and hypertension should prompt consideration of primary hyperaldosteronism (Conn\'s) — increasingly recognised and treatable',
        'Other endocrine HTN causes: Cushing\'s, CAH (11-beta-hydroxylase deficiency), Liddle syndrome',
        'Check the urine potassium:creatinine ratio (raised = renal potassium wasting) and refer endocrinology; aldosterone:renin ratio is the screening test for Conn\'s (note many antihypertensives interfere — specialist advice)',
      ],
    },

    { type: 'heading', level: 2, text: 'Step 3 — Manage Mild Hypokalaemia in Primary Care' },

    {
      type: 'table',
      headers: ['Element', 'Detail'],
      rows: [
        ['Who is safe to manage', 'K⁺ >3.0 (or >2.5 with no ECG changes/symptoms/risk factors)'],
        ['Oral replacement', 'Oral potassium (e.g. Sando-K 2 tablets TDS for up to ~5 days), then recheck'],
        ['Address the cause', 'Stop/reduce the diuretic short-term; manage GI losses; replace magnesium if low'],
        ['Important caution', 'Do NOT give potassium supplements to a patient on a potassium-sparing diuretic (spironolactone/eplerenone/amiloride) — risk of dangerous hyperkalaemia'],
        ['Recheck', 'Repeat U&E (and magnesium) after replacement/dose change'],
      ],
    },

    { type: 'heading', level: 2, text: 'Investigations if Cause Unclear' },

    {
      type: 'list',
      items: [
        'BP and blood glucose; serum magnesium; FBC (rarely leukaemia); digoxin level if relevant',
        'Urine potassium:creatinine ratio to distinguish renal from extra-renal losses',
        'Refer endocrinology if Conn\'s or Cushing\'s suspected, or if persistent unexplained hypokalaemia',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'hyperkalaemia', label: 'Hyperkalaemia', subtitle: 'The other end — admission thresholds, ECG, drug causes' },
        { id: 'hypertension', label: 'Hypertension', subtitle: 'Hypokalaemia + HTN → screen for Conn\'s/secondary causes' },
        { id: 'cushings-syndrome', label: "Cushing's Syndrome", subtitle: 'Endocrine cause of hypokalaemia with hypertension' },
        { id: 'atrialFibrillation', label: 'Atrial Fibrillation', subtitle: 'Electrolyte disturbance and digoxin/arrhythmia interplay' },
      ],
    },

  ],
}
