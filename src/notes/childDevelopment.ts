import type { Note } from '../data/notes'

export const childDevelopment: Note = {
  id: 'child-development',
  title: 'Child Development Milestones',
  subtitle: 'Red flags, milestone tables, autism screening, SEND pathway and surveillance schedule',
  tags: ['paediatrics'],

  body: 'child development milestones developmental delay red flags regression premature corrected age 6 week check 10 month review 2.5 year review gross motor fine motor speech language social hearing vision head circumference centile paediatrics referral FBC TFT CK Vit D growth chart RCPCH autism ASD M-CHAT social communication SEND education health care plan EHCP language delay global delay cerebral palsy Duchenne muscular dystrophy fragile X Down syndrome hearing loss CAMHS portage',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Developmental Surveillance — Core Principles',
      items: [
        'Take parental concerns seriously — parental intuition is a sensitive indicator; parents know their child',
        'Surveillance contacts: 6–8 week GP check, HV 10–12 month review, HV 2–2.5 year review; otherwise opportunistic at any visit',
        'Corrected age: use for premature infants until age 2 years (4 years if <30 weeks gestation); a baby born at 30 weeks and assessed at 12 months has a corrected age of ~10 months',
        'Any developmental concern: plot height, weight, head circumference on RCPCH growth chart; check hearing and vision formally',
        'ALWAYS ask about regression — loss of a previously acquired skill is an URGENT red flag regardless of current level',
      ],
    },

    { type: 'heading', level: 2, text: 'Milestone Summary by Age' },

    {
      type: 'table',
      headers: ['Age', 'Gross Motor', 'Fine Motor / Vision', 'Speech / Language', 'Social / Emotional'],
      rows: [
        ['6 weeks', 'Head bobs when held; Moro reflex present', 'Fixes and follows to 90°; blink reflex', 'Startles to sound; high-pitched cry settling', 'Social smile emerging (should be present by 6 weeks)'],
        ['3–4 months', 'No head lag when pulled to sit; rolls front to back', 'Reaches for objects; hands together at midline', 'Coos and vocalises; responds to parent voice', 'Social smile; laughs; tracks faces'],
        ['6 months', 'Sits with support; bears weight when standing with support', 'Transfers objects hand-to-hand; palmar grasp', 'Babbles (consonant-vowel sounds: "ba", "da")', 'Recognises familiar faces; stranger anxiety beginning'],
        ['9 months', 'Sits unsupported; pulls to stand; crawls (some shuffle)', 'Pincer grip developing; holds and bangs toys', 'Babbles with varied intonation; may say "mama"/"dada"', 'Points (proto-imperative pointing); waves bye-bye; turn-taking'],
        ['12 months', 'Cruises furniture; may walk with one hand held or independently', 'Releases objects deliberately; 2-brick tower', '1–3 meaningful words with intent ("mama", "dada", "baba")', 'Joint attention (follows point, shows objects); waves; claps'],
        ['18 months', 'Walks independently; squats and rises; may climb stairs', '6-brick tower; feeds self with spoon', '6–20 words with intent; points to pictures in book', 'Symbolic play begins; shows empathy; tantrums begin'],
        ['2 years', 'Runs; kicks a ball; starts climbing stairs alternating feet', '2-word phrases; scribbles', '50+ words; joins 2 words ("more juice", "daddy go")', 'Parallel play; separation anxiety lessening; pretend play'],
        ['3 years', 'Climbs stairs alternating feet; jumps; pedals tricycle', 'Copies circle; 10-brick tower; uses scissors', '3-word sentences; 75% intelligible to strangers; colours', 'Cooperative play; knows name and age; imaginary play'],
        ['4 years', 'Hops on one foot; catches ball; skips', 'Copies cross; draws recognisable person; dresses independently', 'Grammar mostly correct; tells stories; asks "why?"', 'Group play; understands rules; begins reading readiness'],
      ],
      caption: 'These are MEDIAN milestones. Refer if significantly delayed, not if slightly later than average — use red flag ages below to guide referral decisions.',
    },

    { type: 'heading', level: 2, text: 'Red Flags — Refer to Paediatrics' },

    {
      type: 'table',
      headers: ['Age', 'Red Flag'],
      rows: [
        ['6 weeks', 'No social smile; no response to sound; no visual tracking'],
        ['4 months', 'Not fixing and following; not vocalising; significant head lag when pulled to sit'],
        ['6 months', 'Not reaching for objects; no babbling; not weight-bearing when held standing'],
        ['9 months', 'Not sitting unsupported; no babbling; no pointing or joint attention developing'],
        ['12 months', 'Not standing with support; not saying any words; no pointing or showing'],
        ['18 months', 'Not walking independently; fewer than 6–10 words; no pretend play; no pointing to request'],
        ['2 years', 'Not joining 2 words spontaneously; not running; very limited stranger intelligibility; NO pretend play'],
        ['3 years', 'Less than 50 words; not using 3-word sentences; not understood by strangers; significant tantrums or rigidity'],
        ['Any age', 'REGRESSION of any previously acquired skill — URGENT REFERRAL; asymmetric movements/reflexes; head circumference crossing 2+ centile lines; persistent toe-walking after 2 years; inability to swallow'],
      ],
      caption: 'Any single domain or multiple domain delay warrants referral. Combined motor + cognitive + language delay (global developmental delay) carries higher likelihood of underlying aetiology.',
    },

    { type: 'heading', level: 2, text: 'Autism Red Flags — NICE NG142' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Autism Spectrum Disorder — When to Refer to CAMHS/Paediatrics',
      items: [
        'Core features: persistent difficulties in social communication AND restricted repetitive behaviours — from early childhood, causing functional impairment',
        'Social communication red flags: no pointing (to share interest) by 12 months; no meaningful words by 18 months; loss of language or social skills at any age; limited eye contact; preferring to play alone; not responding to name',
        'Restricted and repetitive behaviours: intense, narrow interests; insistence on routines (meltdowns if routine changes); hand-flapping, rocking, spinning; hypersensitivity to sound/touch/light',
        'M-CHAT-R/F (Modified Checklist for Autism in Toddlers): 16–30 month screening tool; available free online; a positive screen is not a diagnosis — refer for assessment',
        'Always check hearing formally before attributing language delay to autism',
        'Referral: CaFSPA (Staffordshire) or CAMHS autism team; include M-CHAT-R score, specific behavioural concerns, impact on school/home',
      ],
    },

    { type: 'heading', level: 2, text: 'Causes by Pattern of Delay' },

    {
      type: 'table',
      headers: ['Pattern', 'Key Diagnoses to Consider', 'First Investigation'],
      rows: [
        ['Global developmental delay (all domains)', 'Genetic syndrome (Down\'s, Fragile X, Angelman\'s), hypothyroidism, severe SNHL, cerebral palsy, metabolic/neurodegenerative disorder', 'TFTs, CK, metabolic screen, chromosome microarray (arranged via genetics)'],
        ['Language delay alone (comprehension + expression)', 'Hearing impairment (exclude first — arrange audiology), autism, speech & language disorder, bilingual delay, selective mutism', 'Formal audiology; SaLT referral; autism assessment if social communication affected'],
        ['Language delay (expression only, comprehension normal)', 'Hearing impairment, speech and language disorder, stuttering/dysfluency, motor speech disorder', 'Formal audiology; SaLT referral; reassurance if receptive language and social skills normal'],
        ['Motor delay', 'Cerebral palsy, Duchenne muscular dystrophy (boys — CK markedly raised), hypotonia (Down\'s, Prader-Willi), spina bifida, spinal muscular atrophy', 'CK, MRI brain/spine if cerebral palsy suspected'],
        ['Motor regression', 'Neurodegenerative conditions (Batten disease, leukodystrophies), epilepsy (Landau-Kleffner), acquired brain injury — URGENT', 'Urgent paediatric neurology referral; MRI brain; EEG'],
        ['Social/communication delay only', 'Autism (refer for assessment); social anxiety; selective mutism; attachment difficulties', 'CAMHS/autism team assessment; consider psychosocial history'],
      ],
    },

    { type: 'heading', level: 2, text: 'GP Investigations Before Referral' },

    {
      type: 'list',
      items: [
        'FBC: anaemia, lymphopenia (metabolic/immune disorders)',
        'TFTs: hypothyroidism is treatable cause of global delay — always check',
        'Bone profile + vitamin D: rickets, metabolic bone disease causing hypotonia',
        'CK (creatine kinase): if motor delay or hypotonia in a boy — Duchenne muscular dystrophy (CK markedly elevated → refer urgently); female carriers may also have mildly elevated CK',
        'Formal hearing assessment: arrange via community audiology (HV-initiated or GP referral) — this should NOT wait for paediatric appointment if language delay is the concern',
        'Formal vision assessment: orthoptist or optometrist; important for school readiness',
        'Growth: plot height, weight, head circumference on RCPCH chart; note centile crossings',
        'Note: genetic microarray, MRI brain, EEG, and metabolic screening are specialist investigations — do not initiate before referral unless urgent',
      ],
    },

    { type: 'heading', level: 2, text: 'SEND Pathway — What GPs Can Support' },

    {
      type: 'list',
      items: [
        'EHCP (Education, Health and Care Plan): for children with significant developmental needs requiring educational support; initiated by school or parents (SEN coordinator); GP may be asked to contribute a report',
        'Portage: home visiting educational service for pre-school children with developmental delay — refer via MPFT community team or HV',
        'Early Support: MPFT early intervention teams for children 0–5 — GP referral',
        'GP supporting letter: for EHCP, DLA (Disability Living Allowance), Blue Badge — describe diagnosis, functional impact, and care needs objectively; do NOT predict academic outcomes',
        'DLA for children: under 16 with a disability needing significantly more care than a child of same age; GP supporting evidence is often requested by families',
        'Annual review: once diagnosis is established, GP annual review of children with disability — include school, medication, therapy, safeguarding, and carer wellbeing',
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Safety Netting — Urgent Actions',
      items: [
        'Regression of previously acquired skills at any age: URGENT paediatric referral — do NOT wait; may indicate neurodegenerative condition, epileptic encephalopathy, or acquired brain injury',
        'Macrocephaly (HC >99.6th centile or crossing upward): USS head in infants for hydrocephalus; urgent paediatric review',
        'Microcephaly (HC <0.4th centile or crossing downward): urgent paediatric neurology if progressive; associated with significant neurodevelopmental risk',
        'Asymmetric limb movements before 12 months: urgent paediatric neurology for cerebral palsy assessment',
        'CK markedly elevated in a boy with motor delay: urgent paediatric neurology — possible Duchenne muscular dystrophy',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG142 — Autism in Under 19s', url: 'https://www.nice.org.uk/guidance/ng142' },
        { label: 'NICE CKS — Developmental Delay', url: 'https://cks.nice.org.uk/topics/developmental-delay/' },
        { label: 'RCPCH — Growth Charts', url: 'https://www.rcpch.ac.uk/resources/uk-who-growth-charts' },
        { label: 'M-CHAT-R/F Autism Screen', url: 'https://m-chat.org/' },
        { label: 'NHS — Your Childs Development', url: 'https://www.nhs.uk/conditions/baby/babys-development/' },
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'General developmental concern: UHDB Queen\'s Hospital Burton General Paediatrics via e-RS; include height/weight/HC centiles, hearing/vision status, specific milestones of concern, Tanner stage if relevant',
        'Speech and language delay: Staffordshire SaLT service — direct referral or self-referral; MPFT community SaLT Lichfield',
        'Autism assessment: CaFSPA at Holly Lodge, St Michaels Court, Lichfield WS13 6EF; include M-CHAT-R score, specific social communication concerns, impact at home and in preschool/school',
        'Hearing (audiology): UHDB Burton audiology or via HV-initiated AABR/audiological referral; do not delay if language concern',
        'Portage / early intervention: MPFT community team — referral via HV or GP; for pre-school children',
        'Health Visitor coordination: MPFT HV team — essential for surveillance, support, and family liaison; contact HV directly for advice',
      ],
    },
  ],
}
