import type { Note } from '../data/notes'

export const diabeticNeuropathy: Note = {
  id: 'diabetic-neuropathy',
  title: 'Diabetic Neuropathy',
  subtitle: 'Peripheral (glove-and-stocking), painful neuropathy treatment ladder and autonomic neuropathy',
  tags: ['endocrine', 'neurology'],

  body: `diabetic neuropathy peripheral glove and stocking neuropathic pain amitriptyline duloxetine gabapentin pregabalin tramadol capsaicin autonomic gastroparesis postural hypotension erectile dysfunction monofilament foot screening`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG215 / CG173 — Neuropathic Pain', url: 'https://www.nice.org.uk/guidance/cg173' },
        { label: 'NICE CKS — Diabetic Neuropathy', url: 'https://cks.nice.org.uk/topics/diabetes-type-2/' },
        { label: 'Diabetes UK — Neuropathy', url: 'https://www.diabetes.org.uk/guide-to-diabetes/complications/nerves_neuropathy' },
      ],
    },

    { type: 'heading', level: 2, text: 'Peripheral (Sensorimotor) Neuropathy' },

    {
      type: 'list',
      items: [
        'The commonest pattern: a length-dependent, symmetrical "glove-and-stocking" sensory loss (longest nerves affected first → feet before hands)',
        'May be painful (burning, shooting, allodynia) or, importantly, painless — painless loss of protective sensation drives diabetic foot ulceration',
        'Screen feet at least annually with a 10 g monofilament and assess foot risk (see Diabetic Foot note); optimise glycaemic control (slows progression) and cardiovascular risk factors',
      ],
    },

    { type: 'heading', level: 2, text: 'Painful Neuropathy — Treatment Ladder' },

    {
      type: 'callout',
      variant: 'info',
      title: 'First-Line Choice of FOUR — Switch if One Fails',
      items: [
        'Offer a choice of: amitriptyline, duloxetine, gabapentin, or pregabalin as first-line (NICE) — if the first is not effective or not tolerated, SWITCH to another (and try the others in turn)',
        'Amitriptyline 10 mg nocte, titrate in ~10 mg steps weekly (usual 30–75 mg) — caution in the elderly (anticholinergic, falls)',
        'Duloxetine 60 mg OD (max 120 mg) — often preferred specifically in diabetic neuropathy',
        'Gabapentin (titrate slowly to up to ~3.6 g/day) or pregabalin (75 mg BD up to 300 mg BD) — note both are Schedule 3 controlled drugs, are addictive (especially with opioids), and have frequent side effects (dizziness, sedation, oedema)',
        'Tramadol only as short-term rescue, NOT long-term; topical capsaicin for localised pain if oral treatment unsuitable',
        'Review effect at ~3 months; refer to a pain clinic if severe/refractory or significantly affecting quality of life',
      ],
    },

    { type: 'heading', level: 2, text: 'Autonomic Neuropathy' },

    {
      type: 'table',
      headers: ['System', 'Features & management'],
      rows: [
        ['Gastrointestinal', 'Gastroparesis (early satiety, bloating, nausea/vomiting, erratic glucose) — small frequent meals, prokinetics (metoclopramide/domperidone — short courses; erythromycin); chronic diabetic diarrhoea'],
        ['Cardiovascular', 'Postural hypotension (review antihypertensives, increase salt/fluid, compression stockings, midodrine/fludrocortisone under specialist); resting tachycardia'],
        ['Genitourinary', 'Erectile dysfunction (PDE5 inhibitors), neurogenic bladder (incomplete emptying, recurrent UTI)'],
        ['Other', 'Gustatory sweating; impaired hypoglycaemia awareness'],
      ],
    },

    { type: 'heading', level: 2, text: 'Other Diabetic Neuropathies' },

    {
      type: 'list',
      items: [
        'Mononeuropathies: e.g. cranial nerve III palsy (classically pupil-sparing), carpal tunnel syndrome',
        'Diabetic amyotrophy (proximal motor neuropathy): painful wasting of the thigh muscles, usually in older type 2 patients',
        'Always exclude other contributors to neuropathy: B12 deficiency, alcohol, hypothyroidism, and drugs',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'diabetic-foot', label: 'Diabetic Foot', subtitle: 'Loss of protective sensation → ulceration; foot risk screening' },
        { id: 'diabetic-complications', label: 'Diabetic Complications', subtitle: 'Retinopathy, nephropathy and the wider complication screen' },
        { id: 'neuropathic-pain', label: 'Neuropathic Pain & Gabapentinoids', subtitle: 'Full prescribing detail and controlled-drug cautions' },
        { id: 'erectile-dysfunction', label: 'Erectile Dysfunction', subtitle: 'A common autonomic manifestation' },
      ],
    },

  ],
}
