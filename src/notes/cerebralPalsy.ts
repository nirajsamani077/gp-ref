import type { Note } from '../data/notes'

export const cerebralPalsy: Note = {
  id: 'cerebral-palsy',
  title: 'Cerebral Palsy',
  subtitle: 'A non-progressive motor disorder — types, GMFCS, comorbidities and the GP\'s role in lifelong care',
  tags: ['paediatrics'],

  body: `cerebral palsy CP spastic dyskinetic ataxic GMFCS gross motor function classification hypertonia spasticity contractures comorbidities epilepsy feeding dysphagia hip surveillance botulinum toxin baclofen developmental delay MDT`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG62 — Cerebral Palsy in Under 25s', url: 'https://www.nice.org.uk/guidance/ng62' },
        { label: 'NICE CKS — Cerebral Palsy', url: 'https://cks.nice.org.uk/topics/cerebral-palsy/' },
        { label: 'SCOPE — Cerebral Palsy', url: 'https://www.scope.org.uk/' },
      ],
    },

    {
      type: 'callout',
      variant: 'info',
      title: 'Definition',
      items: [
        'A permanent disorder of movement and posture caused by a non-progressive lesion of the developing brain (antenatal, perinatal or early postnatal)',
        'The brain lesion is static, but the clinical picture (tone, contractures, function) can change with growth — hence the need for surveillance',
        'Causes include prematurity, hypoxic-ischaemic injury, intrauterine infection, stroke, kernicterus and genetic/metabolic conditions',
      ],
    },

    { type: 'heading', level: 2, text: 'Types & Function' },

    {
      type: 'table',
      headers: ['Type', 'Features'],
      rows: [
        ['Spastic (~85%)', 'Increased tone (UMN); patterns — hemiplegic, diplegic (often ex-prem), quadriplegic (most severe)'],
        ['Dyskinetic', 'Fluctuating tone, involuntary movements (dystonia/choreoathetosis); classically post-kernicterus'],
        ['Ataxic', 'Incoordination, tremor, unsteady wide-based gait'],
        ['Mixed', 'Combination of the above'],
      ],
      caption: 'The Gross Motor Function Classification System (GMFCS) levels I–V describes functional mobility and guides expectations and support.',
    },

    { type: 'heading', level: 2, text: 'Recognition & Comorbidities' },

    {
      type: 'list',
      items: [
        'Early clues: delayed motor milestones, abnormal tone/posture, persistent primitive reflexes, early hand preference (<1 year), feeding difficulties — refer to paediatrics for assessment',
        'CP rarely comes alone — actively look for and manage: learning disability, epilepsy, visual/hearing impairment, communication difficulties, feeding/swallowing problems and reflux, constipation, drooling, sleep problems, pain, and behavioural/mental-health needs',
        'Musculoskeletal: spasticity and contractures; hip subluxation/dislocation is common in higher GMFCS levels — a formal hip surveillance programme is essential',
      ],
    },

    { type: 'heading', level: 2, text: 'Management & the GP Role' },

    {
      type: 'list',
      items: [
        'Care is multidisciplinary: paediatrics, physiotherapy, occupational therapy, SLT, orthopaedics, dietetics, and social care/education (EHCP)',
        'Spasticity options: physiotherapy and orthoses, oral baclofen/diazepam, botulinum toxin injections, intrathecal baclofen, and selective dorsal rhizotomy/orthopaedic surgery — specialist-led',
        'GP role: coordinate and advocate, immunisations, manage intercurrent illness and the comorbidities above, monitor nutrition/growth, provide carer support, and ensure smooth transition to adult services',
        'Anticipate and treat pain (often musculoskeletal or from constipation/reflux), which is common and under-recognised',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'child-development', label: 'Child Development & Delay', subtitle: 'Recognising delayed milestones and red flags' },
        { id: 'epilepsyChildhood', label: 'Childhood Epilepsy', subtitle: 'A common CP comorbidity' },
        { id: 'paediatric-constipation', label: 'Paediatric Constipation', subtitle: 'Common, painful comorbidity to manage proactively' },
        { id: 'faltering-growth', label: 'Faltering Growth', subtitle: 'Feeding difficulties and nutrition in CP' },
        { id: 'neonatal-jaundice', label: 'Neonatal Jaundice', subtitle: 'Kernicterus as a cause of dyskinetic CP' },
      ],
    },

  ],
}
