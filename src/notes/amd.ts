import type { Note } from '../data/notes'

export const amd: Note = {
  id: 'amd',
  title: 'Age-Related Macular Degeneration (AMD)',
  subtitle: 'Diagnosis · Dry vs Wet · Urgent referral · Anti-VEGF · Patient support',
  tags: ['ophthalmology'],
  body: 'AMD age related macular degeneration macula fovea drusen dry wet neovascularisation metamorphopsia amsler grid central visual loss scotoma anti-VEGF ranibizumab bevacizumab lucentis avastin ophthalmology optician OCT fluorescein angiography RNIB low vision smoking fundus',
  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'AMD is the leading cause of irreversible vision loss in the developed world. It affects the macula — the central area of the retina responsible for fine detail, reading, and colour vision. Peripheral vision is preserved. It is strongly age-related and typically presents after 55 years, often found incidentally at a routine optician appointment.',
    },

    {
      type: 'image',
      src: '/images/amd-fundus-anatomy.webp',
      alt: 'Fundus photographs showing normal macula/fovea anatomy and drusen deposits in AMD',
      caption: 'Left: Normal fundus — macula (outer dashed circle) and fovea (inner circle). Right: Drusen deposits — hallmark of dry AMD.',
    },

    { type: 'heading', level: 2, text: 'Risk Factors' },
    {
      type: 'list',
      items: [
        'Age >55 — risk doubles each decade after 55',
        'Smoking — strongest modifiable risk factor; 3× risk',
        'Family history — first-degree relative with AMD increases risk 3-fold',
        'Female sex, Caucasian ethnicity',
        'Hypertension, obesity, high dietary fat intake',
        'Previous AMD in fellow eye — high risk of bilateral disease',
      ],
    },

    { type: 'heading', level: 2, text: 'Symptoms & Presentation' },
    {
      type: 'list',
      items: [
        'Gradual central visual loss — dry AMD progresses slowly over years',
        'Rapid central visual loss — wet AMD can deteriorate within days to weeks',
        'Metamorphopsia — straight lines appear wavy or distorted (classic symptom; assess with Amsler grid)',
        'Central scotoma — blind spot in central vision; peripheral vision intact',
        'Difficulty reading, recognising faces, driving',
        'Colours appear washed out or less vibrant',
        'Often found incidentally by optician at routine eye test — no pain',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Amsler Grid — Quick GP Assessment',
      items: [
        'Ask patient to hold grid at reading distance (~33 cm), cover one eye',
        'Focus on the central dot — ask if lines appear wavy, distorted, or missing',
        'Any distortion or blank areas = positive = refer to ophthalmology',
        'Print one for patients to monitor at home — report any change immediately',
        'Available free from RNIB or print from patient.info',
      ],
    },

    { type: 'heading', level: 2, text: 'Types of AMD' },
    {
      type: 'table',
      caption: 'Dry vs Wet AMD — key differences',
      headers: ['Feature', 'Dry AMD', 'Wet AMD'],
      rows: [
        ['Also known as', 'Atrophic / Non-exudative', 'Neovascular / Exudative'],
        ['Prevalence', '~85–90% of AMD', '~10–15% of AMD'],
        ['Pathology', 'Drusen deposits → RPE atrophy → geographic atrophy', 'Choroidal neovascularisation (CNV) → fluid, blood, scar'],
        ['Progression', 'Slow — months to years', 'Rapid — days to weeks'],
        ['Visual loss', 'Gradual central blur / scotoma', 'Sudden central visual loss ± distortion'],
        ['Fundus findings', 'Drusen (yellow deposits), pigment changes, atrophy', 'Subretinal fluid, haemorrhage, greyish membrane'],
        ['Treatment', 'No proven medical treatment; lifestyle + supplements', 'Anti-VEGF injections — urgent referral needed'],
        ['Prognosis', 'Variable; may progress to wet', 'Sight-threatening if untreated; treatment can preserve vision'],
      ],
    },

    {
      type: 'image',
      src: '/images/amd-types-diagram.webp',
      alt: 'Diagram comparing normal eye, wet AMD and dry AMD fundus appearances with eye anatomy',
      caption: 'Eye anatomy and fundus comparison — normal (left), wet AMD exudative (centre), dry AMD atrophic (right).',
    },

    {
      type: 'image',
      src: '/images/amd-wet-haemorrhage.jpg',
      alt: 'Fundus photograph of wet AMD showing central subretinal haemorrhage',
      caption: 'Wet AMD — large central subretinal haemorrhage with neovascular membrane. Requires same-day emergency ophthalmology referral.',
    },

    { type: 'heading', level: 2, text: 'Red Flags — Urgent Referral' },
    {
      type: 'callout',
      variant: 'danger',
      title: 'Same-Day Eye Casualty Referral — Suspected Wet AMD',
      items: [
        'Sudden or rapid deterioration in central vision (days to weeks)',
        'New or worsening metamorphopsia on Amsler grid',
        'Visible subretinal haemorrhage on fundoscopy',
        'Known dry AMD patient with sudden visual change',
        'Do NOT wait for routine ophthalmology — time-critical for anti-VEGF to work',
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Routine Ophthalmology Referral',
      items: [
        'Suspected dry AMD — drusen on fundoscopy, gradual central visual loss',
        'Positive Amsler grid without acute change',
        'Optician referral already made — ensure not lost to follow-up',
        'Fellow eye involvement or new symptoms in known AMD patient',
      ],
    },

    { type: 'heading', level: 2, text: 'Investigations (Secondary Care)' },
    {
      type: 'list',
      items: [
        'OCT (Optical Coherence Tomography) — gold standard; detects fluid, drusen, retinal thickness; used to monitor treatment response',
        'Fluorescein angiography — identifies neovascular membranes and active leakage in wet AMD',
        'Slit lamp biomicroscopy — detailed fundus examination',
        'Fundus photography — baseline documentation and monitoring',
        'Amsler grid — simple monitoring tool for patients at home',
      ],
    },

    { type: 'heading', level: 2, text: 'Management' },
    { type: 'heading', level: 3, text: 'Lifestyle & Prevention' },
    {
      type: 'list',
      items: [
        'Stop smoking — single most important intervention; reduces risk of progression to wet AMD',
        'AREDS2 supplements — Vitamins C, E, beta-carotene (not in smokers — lung cancer risk), zinc, copper, lutein, zeaxanthin; evidence for reducing progression in intermediate/advanced dry AMD',
        'Mediterranean diet — leafy greens, oily fish (omega-3), colourful vegetables; observational evidence',
        'UV protection — sunglasses with UV-A/B protection',
        'Control hypertension and cardiovascular risk factors',
      ],
    },
    { type: 'heading', level: 3, text: 'Dry AMD' },
    {
      type: 'callout',
      variant: 'info',
      title: 'Dry AMD — No Disease-Modifying Treatment Available',
      items: [
        'Currently no licensed treatment to halt or reverse dry AMD',
        'AREDS2 supplements may slow progression in intermediate-to-advanced disease',
        'Regular monitoring with OCT — watch for conversion to wet AMD (occurs in ~10–15%)',
        'Low vision rehabilitation — magnifiers, large print, lighting adjustment',
        'Register with RNIB and local low vision service',
      ],
    },
    { type: 'heading', level: 3, text: 'Wet AMD — Anti-VEGF Therapy' },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Anti-VEGF Intravitreal Injections',
      items: [
        'Mechanism: VEGF (vascular endothelial growth factor) drives choroidal neovascularisation; anti-VEGF blocks this',
        'Agents: Ranibizumab (Lucentis), Aflibercept (Eylea), Bevacizumab (Avastin — off-label), Brolucizumab (Beovu)',
        'Delivered as intravitreal injection into the vitreous under local anaesthetic',
        'Loading phase: monthly for 3 months, then treat-and-extend or PRN based on OCT',
        'Goal: stabilise or improve vision; can give significant improvement in many patients',
        'Continued until disease becomes quiescent (dry on OCT) — may be indefinite',
        'Side effects: rare endophthalmitis, retinal detachment; discomfort during injection',
      ],
    },

    { type: 'heading', level: 2, text: 'Patient Support & Practical Advice' },
    {
      type: 'list',
      items: [
        'DVLA — patients must notify DVLA if vision in the better eye falls below required standard (6/12); driving may need to cease',
        'Register as sight impaired (partial sight) or severely sight impaired (blind) — access to benefits, concessions, council support',
        'Low vision clinic — referral for specialist aids: magnifiers, screen readers, CCTV magnifiers, contrast enhancement',
        'RNIB (Royal National Institute of Blind People) — helpline 0303 123 9999; free Amsler grid, talking books, support groups',
        'Macular Society — support groups, counselling, advice for AMD specifically',
        'Emotional support — AMD significantly impacts independence and quality of life; acknowledge and address anxiety and depression',
        'Home safety — occupational therapy referral to reduce falls risk in those with impaired central vision',
        'Advise monitoring fellow eye with Amsler grid daily and reporting any change urgently',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG82 — AMD', url: 'https://www.nice.org.uk/guidance/ng82' },
        { label: 'Patient.info — AMD', url: 'https://patient.info/eye-care/age-related-macular-degeneration-leaflet' },
        { label: 'RNIB', url: 'https://www.rnib.org.uk/eye-health/eye-conditions/age-related-macular-degeneration-amd/' },
        { label: 'Macular Society', url: 'https://www.macularsociety.org/' },
        { label: 'Amsler Grid (print)', url: 'https://www.macularsociety.org/media/yilp1u1y/amsler-grid.pdf' },
        { label: 'DVLA — Vision Standards', url: 'https://www.gov.uk/driving-eyesight-rules' },
      ],
    },
  ],
}
