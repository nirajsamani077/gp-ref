import type { Note } from '../data/notes'

export const diabetesInsipidus: Note = {
  id: 'diabetes-insipidus',
  title: 'Diabetes Insipidus (Arginine Vasopressin Deficiency/Resistance)',
  subtitle: 'Cranial vs nephrogenic DI, the water deprivation test, desmopressin and the safety alert',
  tags: ['endocrine'],

  body: `diabetes insipidus DI cranial nephrogenic arginine vasopressin deficiency AVP-D resistance AVP-R polyuria polydipsia water deprivation test desmopressin DDAVP lithium hypernatraemia copeptin pituitary`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'Society for Endocrinology — AVP-D/AVP-R', url: 'https://www.endocrinology.org/' },
        { label: 'NHS — Diabetes Insipidus', url: 'https://www.nhs.uk/conditions/diabetes-insipidus/' },
        { label: 'NPSA Alert — Desmopressin in DI', url: 'https://www.england.nhs.uk/patient-safety/' },
      ],
    },

    {
      type: 'callout',
      variant: 'info',
      title: 'New Terminology',
      items: [
        'Cranial DI is now termed AVP-deficiency (AVP-D); nephrogenic DI is AVP-resistance (AVP-R) — renamed to avoid dangerous confusion with diabetes mellitus',
        'It is NOT a glucose disorder: the problem is water handling, producing large volumes of dilute urine and compensatory thirst',
      ],
    },

    { type: 'heading', level: 2, text: 'Cranial vs Nephrogenic' },

    {
      type: 'table',
      headers: ['Type', 'Mechanism', 'Common causes'],
      rows: [
        ['Cranial (AVP-D)', 'Insufficient AVP (ADH) production/release from the posterior pituitary', 'Idiopathic/autoimmune, pituitary surgery or tumour, head injury, infiltration (sarcoid, histiocytosis), postpartum (Sheehan\'s)'],
        ['Nephrogenic (AVP-R)', 'Kidney resistant to AVP', 'Lithium (commonest acquired cause), chronic hypercalcaemia, hypokalaemia, CKD, inherited (X-linked)'],
      ],
    },

    { type: 'heading', level: 2, text: 'Presentation & Initial Assessment' },

    {
      type: 'list',
      items: [
        'Polyuria (often >3 L/day), nocturia and marked polydipsia; in children — enuresis, faltering growth',
        'First exclude the common mimics: check capillary/venous glucose (diabetes mellitus), U&E (sodium, calcium, potassium) and eGFR',
        'A high-normal or raised sodium with dilute urine points to true DI; a low sodium suggests primary polydipsia instead',
        'Early morning urine osmolality: a concentrated urine effectively excludes DI',
      ],
    },

    { type: 'heading', level: 2, text: 'Confirming the Diagnosis (Specialist)' },

    {
      type: 'list',
      items: [
        'Water deprivation test: fluid withheld under supervision; in DI the urine stays dilute despite rising serum osmolality',
        'Desmopressin is then given — cranial DI concentrates the urine (kidney responds); nephrogenic DI does not',
        'Copeptin (a stable AVP surrogate), especially after hypertonic saline or arginine stimulation, is increasingly used and more reliable than the classic test',
        'MRI pituitary if cranial DI is confirmed to look for a structural cause (loss of the normal posterior pituitary "bright spot")',
      ],
    },

    { type: 'heading', level: 2, text: 'Management' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Desmopressin Safety — Never Omit in a Sick Inpatient',
      items: [
        'Cranial DI: desmopressin (DDAVP) — oral, sublingual, nasal or injectable; titrate to control symptoms while avoiding hyponatraemia',
        'Patients admitted for any reason are at risk if their desmopressin is missed or if they cannot access water — this can cause rapid, dangerous hypernatraemia and death',
        'The national patient-safety alert requires DI to be flagged, U&E monitored, and the desmopressin dose given on time even when nil-by-mouth',
        'Advise a medical-alert card/bracelet and review sodium periodically',
      ],
    },

    {
      type: 'list',
      items: [
        'Nephrogenic DI: treat the cause — stop/review lithium (with the psychiatry team), correct calcium/potassium; ensure free access to water',
        'Persistent nephrogenic DI: low-salt/low-protein diet, thiazide diuretic (paradoxically reduces urine output) ± amiloride (especially lithium-induced) or an NSAID under specialist care',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'hyponatraemia', label: 'Hyponatraemia', subtitle: 'SIADH and the primary-polydipsia differential' },
        { id: 'lithium-bipolar', label: 'Lithium & Bipolar Disorder', subtitle: 'Lithium — the commonest cause of nephrogenic DI' },
        { id: 'hypercalcaemia', label: 'Hypercalcaemia', subtitle: 'A reversible cause of nephrogenic DI' },
        { id: 'pituitary-prolactinoma', label: 'Pituitary Tumours & Prolactinoma', subtitle: 'Structural pituitary disease causing cranial DI' },
        { id: 'diabetes-diagnosis', label: 'Diabetes Mellitus — Diagnosis', subtitle: 'The glucose disorder to exclude first' },
      ],
    },

  ],
}
