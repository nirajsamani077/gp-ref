import type { Note } from '../data/notes'

export const headacheAssessment: Note = {
  id: 'headache-assessment',
  title: 'Headache Assessment (incl. Tension-Type & MOH)',
  subtitle: 'Red flags, the four primary headaches, tension-type headache and medication-overuse headache',
  tags: ['neurology'],

  body: `headache red flags thunderclap SAH subarachnoid haemorrhage raised intracranial pressure space occupying lesion meningitis temporal arteritis GCA acute angle closure glaucoma tension type headache migraine cluster medication overuse headache MOH headache diary CT MRI`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CG150 — Headaches in Over 12s', url: 'https://www.nice.org.uk/guidance/cg150' },
        { label: 'NICE CKS — Headache Assessment', url: 'https://cks.nice.org.uk/topics/headache-assessment/' },
        { label: 'BASH — National Headache Guidelines', url: 'https://www.bash.org.uk/guidelines/' },
      ],
    },

    {
      type: 'para',
      text: 'The vast majority of headaches presenting to a GP are benign primary headaches, so a structured approach works well: first exclude the red flags that signal a dangerous secondary cause, then use the pattern (and a headache diary) to classify the primary headache — tension-type, migraine, cluster or medication-overuse headache. The two easy wins are recognising medication-overuse headache as a treatable cause of chronic daily headache, and never missing giant cell arteritis or thunderclap headache.',
    },
    { type: 'heading', level: 2, text: 'Step 1 — Exclude Red Flags ("SNNOOP"-style)' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Refer/Image Urgently (A&E, SDEC, or urgent CT/MRI) if:',
      items: [
        'Thunderclap headache (sudden, maximal within minutes/seconds) → subarachnoid haemorrhage, arterial dissection, cerebral venous sinus thrombosis → emergency CT (and LP if needed)',
        'New neurological deficit, altered consciousness/cognition, or seizure',
        'Meningism with fever, photophobia or non-blanching rash → meningitis/encephalitis',
        'Features of raised intracranial pressure / space-occupying lesion: headache worse on lying/coughing/straining/bending, worse in the morning, vomiting, papilloedema, or new headache in someone with known cancer or immunosuppression',
        'New headache aged >50 with scalp tenderness/jaw claudication/visual symptoms → giant cell arteritis (check ESR/CRP, start steroids)',
        'Red painful eye with haloes/visual loss → acute angle-closure glaucoma',
        'Significant head injury; pregnancy/postpartum with new headache (consider pre-eclampsia, CVST); aura lasting >1 hour or always the same side',
      ],
    },

    { type: 'heading', level: 2, text: 'Step 2 — Keep a Headache Diary & Identify the Primary Type' },

    {
      type: 'table',
      headers: ['Type', 'Pattern', 'Key features'],
      rows: [
        ['Tension-type', 'Bilateral, "tight band", mild–moderate', 'No nausea/aura; not aggravated by routine activity; episodic or chronic'],
        ['Migraine', 'Unilateral or bilateral, throbbing, 4–72h, moderate–severe', 'Nausea, photo/phonophobia, ± aura; aggravated by activity (patient wants to lie still)'],
        ['Cluster headache', 'Strictly unilateral, around the eye, excruciating, 15 min–3h', 'Ipsilateral autonomic features (lacrimation, nasal congestion, ptosis/miosis); restless/agitated; needs neuroimaging'],
        ['Medication-overuse headache (MOH)', 'Frequent/daily headache', 'Regular use of acute treatment (triptan/opioid/combination ≥10 days/month, or simple analgesia ≥15 days/month) for >3 months'],
      ],
      caption: 'A headache diary over ~8 weeks helps classify the headache, identify triggers and detect medication overuse.',
    },

    { type: 'heading', level: 2, text: 'Tension-Type Headache' },

    {
      type: 'list',
      items: [
        'Most common primary headache; bilateral pressing/tightening pain without migrainous features',
        'Acute treatment: simple analgesia (paracetamol or NSAID) — avoid opioids (risk of MOH and dependence)',
        'Address contributors: stress, poor sleep, posture, screen use, dehydration, caffeine; consider relaxation techniques',
        'For frequent episodic/chronic tension-type headache, a course of acupuncture (up to ~10 sessions over 5–8 weeks) may be considered; low-dose amitriptyline is sometimes used for chronic TTH',
      ],
    },

    { type: 'heading', level: 2, text: 'Medication-Overuse Headache (MOH)' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Suspect and Treat MOH',
      items: [
        'Suspect in anyone with a chronic daily/near-daily headache who regularly uses acute headache medication',
        'Management: stop the overused medication — abruptly for simple analgesics and triptans (warn that headache will worsen before it improves, typically over 1–2 weeks, settling within ~4–8 weeks)',
        'Strong opioids may need a more gradual withdrawal',
        'Review at ~4–8 weeks; consider migraine/TTH preventives once overuse is broken; provide support and a clear plan',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'migraine', label: 'Migraine', subtitle: 'Diagnosis, acute treatment and prophylaxis' },
        { id: 'cluster-headache', label: 'Cluster Headache & TACs', subtitle: 'Unilateral autonomic headaches — oxygen, triptans, verapamil' },
        { id: 'gca', label: 'Giant Cell Arteritis', subtitle: 'New headache over 50 — sight-threatening, immediate steroids' },
        { id: 'brain-tumour', label: 'Brain Tumour & SOL', subtitle: 'Raised ICP features and imaging thresholds' },
        { id: 'trigeminal-neuralgia', label: 'Trigeminal Neuralgia', subtitle: 'Paroxysmal facial pain differential' },
        { id: 'iih', label: 'Idiopathic Intracranial Hypertension', subtitle: 'Raised-ICP headache with papilloedema' },
      ],
    },

  ],
}
