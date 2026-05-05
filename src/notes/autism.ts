import type { Note } from '../data/notes'

export const autism: Note = {
  id: 'autism-asd',
  title: 'Autism Spectrum Disorder (ASD)',
  subtitle: 'Recognition, referral pathways, management and support for adults and children',
  tags: ['mental health', 'paediatrics', 'neurodevelopmental'],

  body: 'autism autism spectrum disorder ASD Asperger syndrome neurodevelopmental triad social interaction communication restricted repetitive interests masking M-CHAT AQ-10 autism quotient MCHAT paediatrics CaFSPA MPFT neurodevelopmental team diagnostic assessment ADOS ADI-R sensory overload executive dysfunction CBT melatonin SSRI antipsychotics co-occurring ADHD anxiety depression epilepsy learning disability special educational needs EHCP CAMHS early childhood diagnosis adult autism community',

  content: [

    // ── OVERVIEW ──────────────────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'info',
      title: 'Autism — Key Concepts',
      items: [
        'Autism is a neurodevelopmental condition (not a mental illness) with a strong genetic basis and some environmental factors',
        'Prevalence: ~1–2% of the population; more common in males (4:1) but girls are more likely to mask',
        'Presentation varies enormously — it is a spectrum from those with profound learning disability to high-functioning individuals (previously called Asperger syndrome)',
        'Symptoms are present from early childhood (<3 years) but may not become apparent or impairing until social demands increase',
        'Masking: deliberately hiding or suppressing autistic traits — common especially in girls and adults; associated with burnout and significant mental health problems',
      ],
    },

    // ── RECOGNITION ───────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Recognising Autism — The Triad of Features' },

    {
      type: 'table',
      headers: ['Domain', 'Preschool (0–5)', 'School-age / Adolescent', 'Adult'],
      rows: [
        ['Social interaction', 'No social smile by 6 months, not responding to name, not pointing/waving by 12 months, avoids eye contact', 'Does not understand personal space, plays alone, struggles to adapt to social norms, does not tolerate peers', 'Says inappropriate things, takes things literally, does not understand sarcasm or social cues, avoids social situations'],
        ['Communication', 'Language delay (<10 words at 18 months, no 2-word phrases by 2 years), regression of language', 'Repeats phrases (echolalia), monotonous voice, uses stereotyped phrases, poor eye contact, inappropriate responses', 'Stilted formal speech, difficulty with back-and-forth conversation, pragmatic language difficulties'],
        ['Restricted/repetitive interests', 'Repetitive movements (hand-flapping, rocking), extreme upset at change in routine, intense focus on specific objects', 'Rigid adherence to rules, extreme emotional reactions, intense narrowly focused interests, difficulty coping with change', 'Intense specific interests (sometimes described as "expert" knowledge), rigid routines, sensory sensitivities'],
      ],
      caption: 'Regression: any regression in motor skills, social or language skills warrants urgent referral to paediatric neurology — always exclude Rett syndrome, Landau-Kleffner and other progressive conditions.',
    },

    // ── SCREENING TOOLS ───────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Screening Tools' },

    {
      type: 'list',
      items: [
        'M-CHAT (Modified Checklist for Autism in Toddlers): free, validated, parent-completed — for children 16–30 months; available at mchatscreen.com',
        'AQ-10 (Autism Quotient 10-item): validated screening for adults — score ≥6/10 suggests further assessment needed; NICE-recommended first screen',
        'Autism Spectrum Quotient (ASQ/AQ-50): more detailed adult questionnaire for borderline cases',
        'No single perfect screening tool — respond to concerns from parents, teachers, health visitors, or the individual',
        'Functional impairment is key: features must cause significant difficulty in daily life (home, work, school, relationships)',
      ],
    },

    // ── REFERRAL ──────────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Referral Pathways' },

    {
      type: 'table',
      headers: ['Age Group', 'Presentation', 'Where to Refer'],
      rows: [
        ['<3 years', 'Any regression in motor skills or social/language development', 'Paediatric neurology urgently — exclude progressive disorders'],
        ['<3 years', 'Concerns re: autism features (no regression)', 'Community paediatrics via GP or health visitor — request developmental assessment'],
        ['>3 years (child)', 'Features of autism with functional impairment', 'ASD diagnostic team / neurodevelopmental MDT — via GP referral'],
        ['Adult', 'AQ-10 ≥6 + functional impairment in home/work/social life', 'MPFT Neurodevelopmental Service — adult autism assessment team'],
        ['Adult — urgent MH concern', 'Autistic crisis, severe self-harm, mental health breakdown', 'MPFT Access Team: 0808 196 3002 — 24/7 urgent support'],
      ],
    },

    // ── LOCAL PATHWAYS ─────────────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield (South Staffordshire)',
      items: [
        'Children\'s ASD assessment: CaFSPA (Children and Families Specialist Provision and Assessment) — based at Holly Lodge, St Michaels Court, Lichfield WS13 6EF. Refer via GP letter; includes Community Paediatrics and CAMHS components',
        'Adult ASD assessment: MPFT Neurodevelopmental Service (adult) — refer via e-RS or GP letter to MPFT; includes AQ-10 screening at initial assessment',
        'CAMHS (mental health co-occurring with autism): CaFSPA / CAMHS pathway — St Michaels Court, Lichfield. GP referral for anxiety/depression co-occurring with autism',
        'MPFT Access Team (adult MH crisis): 0808 196 3002 / access.staffordshire@mpft.nhs.uk — available 24/7',
        'Community Learning Disability Team: MPFT — for those with autism + significant learning disability',
        'EHCP (Education, Health and Care Plan): coordinated through Staffordshire County Council SEND team; GP letter supporting educational needs may be requested',
        'Talking Therapies (anxiety/depression): MPFT self-referral — staffordshire.everyonehealth.co.uk or 0333 005 0095',
      ],
    },

    // ── MANAGEMENT ────────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Management — No "Cure" but Significant Support Available' },

    {
      type: 'list',
      items: [
        'Education and training: tailored educational support, use of simple language and visual aids, give extra processing time',
        'Speech and Language Therapy (SLT): pragmatic language, social communication skills — especially children',
        'Occupational therapy: sensory processing, daily living skills, adaptive strategies — via ICOTT (community OT) in Staffordshire',
        'Environmental modifications: reduce sensory overload (noise, lighting, crowds), establish predictable routines, safe spaces',
        'Parental support: NAS (National Autistic Society) programmes, EarlyBird (early intervention), parent-training groups',
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Medication — For Co-Occurring Conditions Only',
      items: [
        'No medication treats the core features of autism — all drug treatments are for co-occurring conditions',
        'Melatonin: for sleep disturbance (common in autism) — specialist-initiated; off-label in children; Circadin 2 mg MR licensed for adults',
        'SSRI (e.g. sertraline 50–200 mg): for co-occurring anxiety or OCD — under CAMHS or MPFT MH guidance; may cause increased agitation/stimming in autism — start low',
        'Antipsychotics (risperidone, aripiprazole): for severe agitation, aggression or self-injurious behaviour — specialist-initiated only; monitor metabolic SE',
        'Methylphenidate/atomoxetine: if co-occurring ADHD confirmed — diagnosed and initiated by CAMHS or MPFT; evidence supports dual diagnosis treatment',
        'Avoid rushed prescribing — many autistic individuals are highly sensitive to medication side effects; start lower than standard doses',
      ],
    },

    // ── CO-OCCURRING CONDITIONS ───────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Co-Occurring Conditions — Screen and Manage' },

    {
      type: 'list',
      items: [
        'ADHD: ~30–50% of autistic individuals — increased inattention, hyperactivity; can be diagnosed and treated concurrently',
        'Anxiety (including GAD, social anxiety, OCD): extremely common — often the primary reason for GP contact; first-line CBT adapted for autism; SSRI second-line',
        'Depression: underdiagnosed — masked presentation, alexithymia, difficulty reporting feelings',
        'Epilepsy: 20–30% prevalence in autism, higher with learning disability — low threshold for EEG',
        'Gastrointestinal problems: constipation, reflux, food selectivity — often underreported due to communication difficulties',
        'Sleep disorders: highly prevalent — melatonin often helpful',
        'Learning disability: present in ~30% of autistic individuals — Community Learning Disability Team involvement',
      ],
    },

    // ── GP ROLE ───────────────────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'info',
      title: 'GP Role in Autism Care',
      items: [
        'Reasonable adjustments in practice: longer appointments, minimal waiting, familiar clinician if possible, written information, sensory-friendly environment',
        'Annual health checks for adults with autism (Learning Disability registers if also LD)',
        'Support for carers/parents — carer\'s assessment, signpost to NAS, local support groups',
        'Safeguarding: autistic individuals are at higher risk of abuse and exploitation — low threshold for safeguarding referral',
        'Benefits: PIP (Personal Independence Payment) — GP supporting evidence letter may be needed; autistic individuals often eligible',
        'EHCP: GP letter supporting educational/health needs may be requested by school or SENCO',
      ],
    },

    // ── SAFETY NETTING ───────────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'danger',
      title: 'Safety Netting — When to Act Urgently',
      items: [
        '999 / A&E: autistic crisis with acute risk to self or others, severe self-injurious behaviour, acute medical emergency masked by communication difficulty',
        'MPFT Access Team 24/7 (0808 196 3002): acute mental health crisis in adult with autism',
        'Children\'s safeguarding (Staffordshire): 0800 1313 126 — low threshold in non-verbal or communication-impaired children',
        'Red flags requiring urgent review: sudden regression in functioning, new self-harm behaviour, significant weight loss (food selectivity + mental health)',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Autism Spectrum Disorder', url: 'https://cks.nice.org.uk/topics/autism/' },
        { label: 'NICE NG142 — Autism in under 19s', url: 'https://www.nice.org.uk/guidance/ng142' },
        { label: 'NICE CG142 — Autism in Adults', url: 'https://www.nice.org.uk/guidance/cg142' },
        { label: 'National Autistic Society', url: 'https://www.autism.org.uk/' },
        { label: 'M-CHAT Screening Tool', url: 'https://mchatscreen.com/' },
        { label: 'NHS — Autism', url: 'https://www.nhs.uk/conditions/autism/' },
      ],
    },
  ],
}
