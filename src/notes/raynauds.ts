import type { Note } from '../data/notes'

export const raynauds: Note = {
  id: 'raynauds',
  title: "Raynaud's Phenomenon",
  subtitle: 'Primary vs secondary, red flags for connective tissue disease, nifedipine and nailfold capillaroscopy',
  tags: ['rheumatology', 'vascular'],

  body: `Raynaud's phenomenon primary secondary connective tissue disease systemic sclerosis scleroderma SLE rheumatoid arthritis CREST vasospasm digital ischaemia colour change white blue red nifedipine calcium channel blocker nailfold capillaroscopy ANA ENA digital ulcers prostacyclin iloprost beta-blocker triptan cervical rib thoracic outlet`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Raynaud\'s Phenomenon', url: 'https://cks.nice.org.uk/topics/raynauds-phenomenon/' },
        { label: 'Scleroderma & Raynaud\'s UK (SRUK)', url: 'https://www.sruk.co.uk/' },
        { label: 'BSR — Systemic Sclerosis Guideline', url: 'https://www.rheumatology.org.uk/practice-quality/guidelines' },
      ],
    },

    { type: 'heading', level: 2, text: 'Overview' },

    {
      type: 'list',
      items: [
        'Episodic vasospasm of the digital arteries causing the classic triphasic colour change: WHITE (ischaemia) → BLUE (cyanosis) → RED (reperfusion hyperaemia), provoked by cold or emotional stress',
        'Affects fingers (and sometimes toes, ears, nose); often painful with numbness/tingling',
        'Primary (Raynaud\'s disease): no underlying cause — typically young women, bilateral and symmetrical, mild, normal nailfold capillaries and negative autoantibodies',
        'Secondary (Raynaud\'s phenomenon): due to an underlying disorder — more severe, may cause digital ulcers/ischaemia, often older onset',
      ],
    },

    { type: 'heading', level: 2, text: 'Causes of Secondary Raynaud\'s' },

    {
      type: 'table',
      headers: ['Category', 'Examples'],
      rows: [
        ['Connective tissue disease', 'Systemic sclerosis/scleroderma (and CREST), SLE, dermatomyositis/polymyositis, Sjögren\'s, rheumatoid arthritis, mixed connective tissue disease'],
        ['Haematological', 'Cryoglobulinaemia, polycythaemia, leukaemia, paraproteinaemia'],
        ['Drugs', 'Beta-blockers, ergotamine/triptans, sympathomimetics, the combined oral contraceptive pill, some chemotherapy (bleomycin)'],
        ['Occupational / mechanical', 'Hand-arm vibration syndrome (vibrating tools), cervical rib / thoracic outlet syndrome'],
        ['Other', 'Atherosclerosis/PVD, hypothyroidism'],
      ],
    },

    { type: 'heading', level: 2, text: 'Red Flags — Suggest Secondary Raynaud\'s / Refer' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Features Pointing to an Underlying Cause',
      items: [
        'Onset age >30–40 (especially male), or very young children',
        'Asymmetrical or unilateral symptoms',
        'Severe, frequent attacks; digital ulcers, pitting scars, or tissue/skin necrosis (critical digital ischaemia → urgent referral)',
        'Associated features of connective tissue disease: arthralgia, rash, dry eyes/mouth, dysphagia, skin tightening/sclerodactyly, telangiectasia, calcinosis',
        'Abnormal nailfold capillaries (dilated/dropout loops) on dermatoscopy/capillaroscopy',
        'Positive autoantibodies',
        '→ Refer to rheumatology with autoantibody screen if connective tissue disease is suspected',
      ],
    },

    { type: 'heading', level: 2, text: 'Assessment' },

    {
      type: 'list',
      items: [
        'History: age/sex, symmetry, severity, ulcers, occupational vibration exposure, drugs, and systemic/connective-tissue symptoms',
        'Examination: peripheral pulses, digits (ulcers, pitting scars, sclerodactyly), skin and nailfolds; check for cervical rib signs',
        'Nailfold capillaroscopy (dermatoscope): normal in primary Raynaud\'s; abnormal capillary loops suggest connective tissue disease (especially systemic sclerosis)',
        'Bloods if secondary suspected: FBC, ESR/CRP, ANA (and if positive, ENA), anti-dsDNA, rheumatoid factor/anti-CCP, complement (C3/C4); TFTs',
        'A positive ANA in a Raynaud\'s patient substantially raises the likelihood of evolving connective tissue disease — refer',
      ],
    },

    { type: 'heading', level: 2, text: 'Management' },

    {
      type: 'table',
      headers: ['Step', 'Detail'],
      rows: [
        ['Conservative (first-line for all)', 'Keep the whole body warm (not just hands), gloves/hand warmers, avoid sudden cold exposure; stop smoking; reduce caffeine; address/stop precipitating drugs (beta-blockers, triptans, COCP)'],
        ['First-line drug', 'Nifedipine (the only licensed agent) 10–20 mg TDS (use modified-release for tolerability) — titrate to effect; side effects: headache, flushing, ankle oedema'],
        ['Alternatives if CCB not tolerated', 'Other calcium channel blockers (amlodipine), or specialist options'],
        ['Specialist (severe/secondary, digital ulcers)', 'IV prostacyclin (iloprost) infusions, PDE5 inhibitors (sildenafil), endothelin antagonists (bosentan — for recurrent ulcers in systemic sclerosis); digital sympathectomy or Botulinum toxin in refractory critical ischaemia'],
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'inflammatory-arthritis', label: 'Inflammatory Arthritis', subtitle: 'Connective tissue disease overlap — RA and seronegative disease' },
        { id: 'pvd', label: 'Peripheral Vascular Disease', subtitle: 'Differential for digital ischaemia and cold peripheries' },
        { id: 'hypothyroidism', label: 'Hypothyroidism', subtitle: 'Treatable contributor to cold intolerance and Raynaud\'s' },
      ],
    },

  ],
}
