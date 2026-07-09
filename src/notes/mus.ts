import type { Note } from '../data/notes'

export const mus: Note = {
  id: 'mus',
  title: 'Medically Unexplained Symptoms (MUS)',
  subtitle: 'Persistent physical symptoms — terminology, the consultation approach and CBT',
  tags: ['mental', 'pain'],

  body: `medically unexplained symptoms MUS persistent physical symptoms somatisation health anxiety hypochondriasis conversion disorder functional neurological disorder dissociative factitious malingering CBT acceptance commitment therapy brain-body axis reattribution`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'RCGP — Medically Unexplained Symptoms', url: 'https://www.rcgp.org.uk/' },
        { label: 'NICE CKS — Somatisation / MUS', url: 'https://cks.nice.org.uk/topics/depression/' },
        { label: 'Royal College of Psychiatrists — Functional Symptoms', url: 'https://www.rcpsych.ac.uk/' },
      ],
    },

    { type: 'heading', level: 2, text: 'Terminology' },

    {
      type: 'list',
      items: [
        'MUS (increasingly called "persistent physical symptoms" or functional symptoms) = distressing physical symptoms that are not fully explained by an identifiable disease, despite appropriate assessment — they are real and disabling, not imagined',
        'They are extremely common in primary care and exist on a spectrum; the label matters less than a shared, validating explanation',
      ],
    },

    {
      type: 'table',
      headers: ['Term', 'Meaning'],
      rows: [
        ['Somatisation', 'Multiple recurrent physical symptoms over a prolonged period (often >2 years) without adequate explanation'],
        ['Health anxiety (hypochondriasis)', 'Preoccupation with, and conviction of having, a serious illness (e.g. cancer) despite reassurance'],
        ['Functional neurological disorder / conversion', 'Genuine loss/alteration of motor or sensory function (e.g. weakness, non-epileptic seizures) not explained by neurological disease; not intentional'],
        ['Dissociative', 'Predominantly psychological symptoms (amnesia, fugue) with a similar mechanism'],
        ['Factitious disorder (Munchausen)', 'Intentional production/feigning of symptoms without external material gain'],
        ['Malingering', 'Intentional feigning FOR external gain (not a mental disorder)'],
      ],
    },

    { type: 'heading', level: 2, text: 'The Consultation Approach' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Validate, Explain, Redirect',
      items: [
        'Take the symptoms seriously and make the person feel understood — avoid the message that "nothing is wrong"; avoid conflict and repeated unnecessary investigation (which reinforces illness beliefs and risks iatrogenic harm)',
        'Rule out organic disease with proportionate assessment, then be a consistent, trusted single point of contact — continuity is therapeutic',
        'Offer a positive, mechanistic explanation: the brain–body (gut/skin/pain) axis, how stress, sleep, and attention amplify real bodily sensations — a reattribution model',
        'Negotiate a shift of agenda: from "find the cause/cure" to improving function, coping and quality of life; encourage paced activity/graded exercise rather than boom–bust patterns',
        'Screen for and treat coexisting depression and anxiety',
      ],
    },

    { type: 'heading', level: 2, text: 'Management' },

    {
      type: 'list',
      items: [
        'CBT is the most effective treatment (and CBT/ACT approaches specifically for persistent physical symptoms) — but it is management, not a "cure"',
        'Acceptance and Commitment Therapy (ACT): accepting and living well with symptoms rather than seeking a definitive cure; mindfulness and sleep hygiene',
        'Address function and what matters to the patient (work, relationships, activities); set realistic, collaborative goals',
        'Antidepressants may help where there is comorbid depression/anxiety or for some symptom clusters (e.g. low-dose amitriptyline for pain)',
        'Refer to psychology/liaison psychiatry or specialist clinics for complex or functional neurological presentations',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'anxiety-gad', label: 'Anxiety Disorders', subtitle: 'Health anxiety and generalised anxiety overlap' },
        { id: 'depression', label: 'Depression', subtitle: 'Common comorbidity — screen and treat' },
        { id: 'cfs-me', label: 'Chronic Fatigue Syndrome (CFS/ME)', subtitle: 'Related persistent-symptom presentation; paced activity' },
        { id: 'chronic-pain', label: 'Chronic Pain', subtitle: 'Central sensitisation and the biopsychosocial model' },
      ],
    },

  ],
}
