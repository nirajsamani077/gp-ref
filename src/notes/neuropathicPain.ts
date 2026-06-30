import type { Note } from '../data/notes'

export const neuropathicPain: Note = {
  id: 'neuropathic-pain',
  title: 'Neuropathic Pain & Gabapentinoids',
  subtitle: 'The four first-line agents, what gabapentinoids do (and don\'t) help, and controlled-drug rules',
  tags: ['drugs', 'pain'],

  body: `neuropathic pain DN4 amitriptyline duloxetine gabapentin pregabalin gabapentinoid tramadol capsaicin trigeminal neuralgia carbamazepine diabetic neuropathy post-herpetic neuralgia radicular controlled drug schedule 3 addiction`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CG173 — Neuropathic Pain in Adults', url: 'https://www.nice.org.uk/guidance/cg173' },
        { label: 'NICE CKS — Neuropathic Pain', url: 'https://cks.nice.org.uk/topics/neuropathic-pain-drug-treatment/' },
        { label: 'MHRA — Pregabalin/Gabapentin Controls', url: 'https://www.gov.uk/drug-safety-update' },
      ],
    },

    { type: 'heading', level: 2, text: 'Recognising Neuropathic Pain' },

    {
      type: 'list',
      items: [
        'Burning, shooting, electric-shock or hypersensitive (allodynia) pain in a neuro-anatomical distribution; the DN4 questionnaire can help if uncertain',
        'Common causes: diabetic (and other) peripheral neuropathy, post-herpetic neuralgia (shingles), radicular/sciatic and cancer/chemotherapy-related pain, trigeminal neuralgia, and central pain (stroke, MS, spinal cord injury)',
      ],
    },

    { type: 'heading', level: 2, text: 'First-Line Treatment — Choose One of Four, Switch if Needed' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Trigeminal Neuralgia is the Exception',
      items: [
        'For trigeminal neuralgia, first-line is carbamazepine (not the four agents below)',
        'For all other neuropathic pain, offer a choice of: amitriptyline, duloxetine, gabapentin, or pregabalin — if one is ineffective or not tolerated, SWITCH to another (and try the others in turn)',
        'Tramadol only as acute rescue (not long-term); topical capsaicin for localised pain if oral treatment is unsuitable',
      ],
    },

    {
      type: 'table',
      headers: ['Drug', 'Dosing', 'Notes'],
      rows: [
        ['Amitriptyline', '10 mg nocte, titrate in ~10 mg steps weekly; usual 30–75 mg', 'Anticholinergic side effects; caution in the elderly and cardiac disease; helps sleep'],
        ['Duloxetine', '60 mg OD (max 120 mg)', 'First-line specifically for diabetic neuropathy; review at ~3 months'],
        ['Gabapentin', 'Titrate slowly to max ~3.6 g/day in 3 divided doses', 'Schedule 3 controlled drug; sedation, dizziness, oedema'],
        ['Pregabalin', '75 mg BD, titrate to max ~600 mg/day', 'Schedule 3 controlled drug; faster titration than gabapentin; misuse potential'],
      ],
    },

    { type: 'heading', level: 2, text: 'Gabapentinoids — Use Judiciously' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Only Help TRUE Neuropathic Pain',
      items: [
        'Even in genuine neuropathic pain, fewer than half of patients get a ≥50% reduction in pain, and side effects are common (~2/3: dizziness, drowsiness, oedema, mood/cognitive effects)',
        'They are INEFFECTIVE for non-neuropathic pain — do NOT use for low back pain, sciatica, fibromyalgia, or general chronic pain',
        'Addictive (especially combined with opioids) and associated with overdose/respiratory depression risk — avoid combining with opioids where possible',
        'Both are Schedule 3 controlled drugs: prescriptions are valid for 28 days and quantities should not exceed 30 days; reissue/re-sign each time',
        'Licensed indications are limited to neuropathic pain, epilepsy and (pregabalin) generalised anxiety disorder',
        'Taper to stop (do not stop abruptly); counsel on driving and the risks of misuse',
      ],
    },

    { type: 'heading', level: 2, text: 'When to Refer' },

    {
      type: 'list',
      items: [
        'Refer to a pain clinic if pain is severe, significantly affecting quality of life, or not responding to first-line agents tried in sequence',
        'Treat the underlying cause where possible (e.g. glycaemic control in diabetic neuropathy; antivirals early in shingles to reduce post-herpetic neuralgia risk)',
        'Capsaicin patches and other interventional options are specialist-initiated',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'diabetic-neuropathy', label: 'Diabetic Neuropathy', subtitle: 'The commonest cause — same treatment ladder' },
        { id: 'trigeminal-neuralgia', label: 'Trigeminal Neuralgia', subtitle: 'The carbamazepine exception' },
        { id: 'chronic-pain', label: 'Chronic Pain', subtitle: 'Non-neuropathic pain where gabapentinoids do NOT help' },
        { id: 'lower-back-pain', label: 'Lower Back Pain', subtitle: 'Gabapentinoids ineffective for sciatica/back pain' },
      ],
    },

  ],
}
