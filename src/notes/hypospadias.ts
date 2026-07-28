import type { Note } from '../data/notes'

export const hypospadias: Note = {
  id: 'hypospadias',
  title: 'Hypospadias',
  subtitle: 'The ventral urethral meatus — recognition at the newborn check, the "do not circumcise" rule and referral',
  tags: ['paediatrics'],

  body: `hypospadias ventral urethral meatus chordee hooded foreskin dorsal prepuce newborn check NIPE do not circumcise urethroplasty referral paediatric urology undescended testis disorders of sex development`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Hypospadias is a common congenital anomaly (~1 in 200–300 boys) in which the urethral opening is on the VENTRAL (underside) of the penis rather than at the tip, due to incomplete development of the urethra and foreskin. It is usually picked up at the newborn/6–8-week examination. Most cases are isolated and mild, but recognising it matters because these boys must NOT be circumcised — the foreskin is needed for surgical repair.',
    },

    { type: 'heading', level: 2, text: 'Recognition' },
    {
      type: 'list',
      items: [
        'The classic triad: a ventrally-placed urethral meatus (anywhere from just below the tip to the scrotum/perineum), a "hooded" (dorsally-redundant, ventrally-deficient) foreskin, and chordee (ventral curvature of the penis, most obvious on erection).',
        'Severity depends on how proximal the meatus is; the abnormal foreskin is often the first clue at examination.',
        'Boys may have a downward/spraying urinary stream.',
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Do NOT Circumcise — and Consider DSD if Severe',
      items: [
        'Do NOT circumcise a boy with hypospadias (or refer for religious/routine circumcision) — the foreskin is used in the reconstructive repair; ensure this is clearly communicated to parents.',
        'Severe/proximal hypospadias, especially with BILATERAL undescended testes or ambiguous genitalia, may indicate a disorder of sex development (DSD) → urgent specialist (paediatric endocrine/urology) assessment before sex is assigned; do not guess.',
      ],
    },

    { type: 'heading', level: 2, text: 'Management' },
    {
      type: 'list',
      items: [
        'Refer to paediatric urology/surgery for assessment; routine referral for isolated hypospadias, urgent if associated undescended testes or DSD features.',
        'Surgical repair (urethroplasty, correcting chordee and positioning the meatus) is usually performed around 6–18 months of age by a specialist; mild distal (glanular) cases may not need surgery if function and appearance are acceptable.',
        'Reassure parents: outcomes are generally good; explain the reason for avoiding circumcision and the timing of any surgery.',
        'Examine for associated undescended testis and inguinal hernia.',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'GOV.UK — NIPE Screening Programme', url: 'https://www.gov.uk/topic/population-screening-programmes/newborn-infant-physical-examination' },
        { label: 'BAPU / BAUS — Hypospadias Information', url: 'https://www.baus.org.uk/patients/conditions/' },
        { label: 'NHS — Hypospadias', url: 'https://www.nhs.uk/conditions/hypospadias/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'antenatal-screening', label: 'Antenatal & Newborn Screening', subtitle: 'NIPE — where hypospadias is often detected' },
        { id: '6-8-week-check', label: '6–8 Week Baby Check', subtitle: 'A second opportunity to detect it' },
        { id: 'phimosis-circumcision', label: 'Phimosis & Circumcision', subtitle: 'Why circumcision is contraindicated here' },
        { id: 'scrotal-groin-lumps', label: 'Scrotal & Groin Lumps', subtitle: 'Associated undescended testis' },
      ],
    },

  ],
}
