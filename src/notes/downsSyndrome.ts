import type { Note } from '../data/notes'

export const downsSyndrome: Note = {
  id: 'downs-syndrome',
  title: 'Down\'s Syndrome (Trisomy 21)',
  subtitle: 'Antenatal screening, the newborn diagnosis, the lifelong health-surveillance schedule and the GP role',
  tags: ['paediatrics'],

  body: `Down's syndrome trisomy 21 combined test quadruple test NIPT cell-free DNA nuchal translucency karyotype congenital heart disease AVSD atlantoaxial instability hypothyroidism coeliac hearing vision leukaemia dementia Alzheimer's learning disability annual health check`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Down\'s syndrome (trisomy 21) is the commonest genetic cause of learning disability. For the GP the work spans three phases: supporting families through antenatal screening and its choices, recognising and confirming the newborn diagnosis, and — most enduringly — delivering the structured lifelong health surveillance, because people with Down\'s syndrome have a characteristic pattern of treatable comorbidities and are entitled to an annual learning-disability health check.',
    },
    {
      type: 'list',
      items: [
        'Usually free trisomy 21 (~95%, non-inherited, risk rises with maternal age); less commonly translocation (~4%, can be inherited — offer parental karyotyping) or mosaicism (~1%, milder).',
        'Features: hypotonia, characteristic facies (upslanting palpebral fissures, epicanthic folds, flat nasal bridge), single palmar crease, sandal gap, and a spectrum of learning disability.',
      ],
    },

    { type: 'heading', level: 2, text: 'Antenatal Screening' },
    {
      type: 'table',
      headers: ['Test', 'Timing', 'Notes'],
      rows: [
        ['Combined test', '11–14 weeks', 'Nuchal translucency + β-hCG + PAPP-A + maternal age — first-line'],
        ['Quadruple test', '14–20 weeks', 'For women booking late (AFP, hCG, uE3, inhibin A)'],
        ['NIPT (cell-free DNA)', 'From 10 weeks', 'Offered as a second-line contingent test when the screening risk is higher (≥1 in 150); highly sensitive but still a SCREEN, not diagnostic'],
        ['Diagnostic (CVS/amniocentesis)', 'CVS 11–14 wks; amnio from 15 wks', 'Karyotype — definitive; carries a small miscarriage risk'],
      ],
      caption: 'Screening is a choice — provide balanced, non-directive information and support whatever the parents decide.',
    },

    { type: 'heading', level: 2, text: 'The Newborn' },
    {
      type: 'callout',
      variant: 'info',
      title: 'At Diagnosis',
      items: [
        'If suspected clinically, send blood for karyotype (rapid FISH/QF-PCR gives a quicker result) and inform parents sensitively with senior/paediatric input.',
        'Arrange an early ECHOCARDIOGRAM — ~40–50% have congenital heart disease (commonly AVSD), which may be clinically silent.',
        'Newborn checks: red reflex (cataracts), hearing screen, feeding/tone, and look for duodenal atresia (bilious vomiting), Hirschsprung\'s and hypothyroidism (on the newborn blood-spot).',
        'Signpost the Down\'s Syndrome Association and local early-intervention/portage services.',
      ],
    },

    { type: 'heading', level: 2, text: 'Lifelong Health Surveillance' },
    {
      type: 'table',
      headers: ['System', 'Surveillance'],
      rows: [
        ['Thyroid', 'Congenital hypothyroidism screened at birth; then TFTs regularly (at least ~annually or 2-yearly per schedule) — hypothyroidism is very common'],
        ['Hearing', 'High risk of glue ear and hearing loss — regular audiology; low threshold for ENT'],
        ['Vision', 'Cataracts, refractive error, squint, nystagmus, keratoconus — regular ophthalmology/optometry'],
        ['Cardiac', 'Neonatal echo; later valve disease surveillance'],
        ['Haematology', 'Increased risk of transient abnormal myelopoiesis (neonatal) and leukaemia (ALL/AML)'],
        ['GI', 'Coeliac disease is common — test if symptomatic; constipation'],
        ['Other', 'Atlantoaxial instability (caution with neck manipulation/high-risk sport), obstructive sleep apnoea, obesity, epilepsy, and early-onset Alzheimer\'s dementia in adulthood'],
      ],
    },
    {
      type: 'list',
      items: [
        'Deliver the annual learning-disability health check (from age 14) with reasonable adjustments — a key GP responsibility and QOF measure.',
        'Support the family/carers, education (EHCP), immunisations (as per schedule, and additionally consider extra pneumococcal/flu), and transition to adult services.',
      ],
    },

    { type: 'heading', level: 2, text: 'Patient & Carer Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NHS — Down\'s Syndrome', url: 'https://www.nhs.uk/conditions/downs-syndrome/' },
        { label: 'Down\'s Syndrome Association', url: 'https://www.downs-syndrome.org.uk/' },
        { label: 'DSMIG — Medical Surveillance Guidance', url: 'https://www.dsmig.org.uk/' },
        { label: 'GOV.UK — NHS Fetal Anomaly Screening', url: 'https://www.gov.uk/topic/population-screening-programmes/fetal-anomaly' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'antenatal-screening', label: 'Antenatal & Newborn Screening', subtitle: 'The wider screening pathway this sits within' },
        { id: 'hypothyroidism', label: 'Hypothyroidism', subtitle: 'Very common — regular TFT surveillance' },
        { id: 'ome-glue-ear', label: 'Otitis Media with Effusion', subtitle: 'Frequent, persistent glue ear and hearing loss' },
        { id: 'coeliac-disease', label: 'Coeliac Disease', subtitle: 'Increased prevalence — test if symptomatic' },
        { id: 'dementia', label: 'Dementia', subtitle: 'Early-onset Alzheimer\'s disease in adulthood' },
        { id: 'child-development', label: 'Child Development & Delay', subtitle: 'Developmental support and milestones' },
      ],
    },

  ],
}
