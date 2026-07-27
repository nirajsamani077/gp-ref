import type { Note } from '../data/notes'

export const utiChildren: Note = {
  id: 'uti-children',
  title: 'UTI in Children & Vesicoureteric Reflux',
  subtitle: 'Diagnosis and clean sampling, antibiotic choice, when to image, and the atypical/recurrent-UTI pathway',
  tags: ['paediatrics'],

  body: `urinary tract infection children UTI clean catch urine dipstick nitrites leucocytes MSU culture trimethoprim nitrofurantoin cefalexin pyelonephritis vesicoureteric reflux VUR ultrasound DMSA MCUG renal scarring atypical recurrent NICE CG54 under 3 months`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'UTI is a common but easily missed infection in children, and getting it right matters because a minority have an underlying anomaly (most often vesicoureteric reflux) and repeated or poorly treated upper-tract infection can cause renal scarring. The essentials are: think of it in any unwell child (especially with unexplained fever), obtain a clean urine sample before antibiotics, treat promptly, and follow the NICE imaging pathway for atypical or recurrent infection.',
    },
    {
      type: 'callout',
      variant: 'danger',
      title: 'Infants Under 3 Months — Refer Same-Day',
      items: [
        'Any infant <3 months with a possible UTI (or unexplained fever) → refer to paediatrics the same day for urgent assessment and IV antibiotics — do NOT manage in the community.',
        'Have a low threshold in the unwell or febrile infant/young child: UTI can present non-specifically (fever, vomiting, poor feeding, irritability, faltering growth, offensive urine).',
      ],
    },

    { type: 'heading', level: 2, text: 'Diagnosis & Sampling' },
    {
      type: 'list',
      items: [
        'Obtain urine BEFORE antibiotics: a clean-catch sample is preferred; if not possible, a urine collection pad (not cotton wool); catheter/suprapubic in secondary care.',
        'Testing depends on age: under 3 months → send for urgent microscopy/culture (do not rely on dipstick). Over 3 years → dipstick is reliable (nitrites and/or leucocytes). 3 months–3 years → send for microscopy and culture, using dipstick to guide starting treatment.',
        'Nitrites are more specific (suggest infection); leucocyte esterase is more sensitive. Send an MSU for culture in most cases to confirm and guide therapy.',
      ],
    },

    { type: 'heading', level: 2, text: 'Classifying the UTI' },
    {
      type: 'table',
      headers: ['Category', 'Definition'],
      rows: [
        ['Lower UTI (cystitis)', 'Dysuria/frequency without systemic upset or loin pain'],
        ['Upper UTI / acute pyelonephritis', 'Fever ≥38°C and/or loin pain/tenderness'],
        ['Atypical UTI', 'Seriously ill, poor urine flow, abdominal/bladder mass, raised creatinine, septicaemia, non-E. coli organism, or failure to respond to treatment within 48h'],
        ['Recurrent UTI', '≥2 upper UTIs, or 1 upper + ≥1 lower, or ≥3 lower UTIs'],
      ],
    },

    { type: 'heading', level: 2, text: 'Antibiotic Treatment' },
    {
      type: 'table',
      headers: ['Type', 'Regimen'],
      rows: [
        ['Lower UTI', 'Oral trimethoprim, nitrofurantoin, cefalexin or amoxicillin (per local sensitivities) for 3 days'],
        ['Upper UTI / pyelonephritis', 'Oral cefalexin or co-amoxiclav for 7–10 days (per local guidance); admit for IV if <3 months, systemically unwell, or unable to tolerate oral'],
        ['Note', 'Nitrofurantoin does not treat upper-tract infection (no tissue levels); avoid trimethoprim if recent use/resistance'],
      ],
      caption: 'Always adjust to culture sensitivities. Safety-net and review at 48 hours — failure to improve suggests an atypical UTI.',
    },

    { type: 'heading', level: 2, text: 'Imaging & Vesicoureteric Reflux (NICE CG54)' },
    {
      type: 'list',
      items: [
        'A first lower UTI that responds promptly in a child ≥6 months usually needs NO imaging.',
        'Ultrasound: during the acute illness for atypical UTI; within 6 weeks for recurrent UTI or a first UTI in an infant <6 months.',
        'DMSA scan (4–6 months later) looks for renal scarring — indicated after atypical or recurrent UTI.',
        'MCUG (micturating cystourethrogram) detects vesicoureteric reflux (VUR) and posterior urethral valves — reserved for younger infants with atypical/recurrent UTI or abnormal ultrasound.',
        'VUR is the retrograde flow of urine from bladder to ureter/kidney; most low-grade VUR resolves spontaneously. Management ranges from surveillance and prompt UTI treatment to prophylactic antibiotics or surgery for high-grade/recurrent disease — specialist-led.',
        'General measures to prevent recurrence: treat constipation, encourage good fluid intake and complete/regular bladder emptying, and good perineal hygiene.',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE CG54 / NG224 — UTI in Under 16s', url: 'https://www.nice.org.uk/guidance/ng224' },
        { label: 'NICE CKS — UTI in Children', url: 'https://cks.nice.org.uk/topics/urinary-tract-infection-children/' },
        { label: 'ERIC — Children\'s Bladder & Bowel', url: 'https://www.eric.org.uk/' },
        { label: 'NHS — UTI in Children', url: 'https://www.nhs.uk/conditions/urinary-tract-infections-utis/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'feverish-child', label: 'Feverish Child Under 5', subtitle: 'Traffic-light assessment; UTI as a source of fever' },
        { id: 'paediatric-constipation', label: 'Paediatric Constipation', subtitle: 'A major reversible contributor to childhood UTI' },
        { id: 'enuresis', label: 'Nocturnal Enuresis', subtitle: 'Bladder dysfunction and daytime symptoms overlap' },
        { id: 'uti-women', label: 'UTI in Women', subtitle: 'Contrast with adult UTI management' },
        { id: 'proteinuria-nephrotic', label: 'Proteinuria & Nephrotic Syndrome', subtitle: 'Other paediatric renal presentations' },
      ],
    },

  ],
}
