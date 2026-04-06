import type { Note } from '../data/notes'

export const acuteOtitisMedia: Note = {
  id: 'acute-otitis-media',
  title: 'Acute Otitis Media (AOM)',
  subtitle: 'Diagnosis, otoscopy findings, antibiotics & doses — children 1–17 yrs',
  tags: ['ent'],

  body: `Acute otitis media AOM earache otalgia ear pain children paediatric red bulging tympanic membrane TM otoscopy otorrhoea perforation fever irritable self-limiting viral bacterial Streptococcus pneumoniae Haemophilus influenzae amoxicillin clarithromycin erythromycin co-amoxiclav penicillin allergy Otigo phenazone lidocaine anaesthetic ear drops delayed prescription immediate prescription mastoiditis meningitis complications bilateral immunocompromised Down syndrome safety net pharmacy first NICE`,

  content: [
    {
      type: 'heading',
      level: 2,
      text: 'Overview',
    },
    {
      type: 'para',
      text: 'Acute otitis media (AOM) is a common childhood infection causing inflammation of the middle ear. The majority are viral in origin or self-limiting — over 80% of children recover spontaneously within 2–3 days without antibiotics. The key clinical task is identifying the minority who need treatment or urgent escalation.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Pharmacy First Scope (Children 1–17 years)',
      items: [
        'Excludes recurrent AOM: ≥3 episodes in 6 months or ≥4 episodes in 12 months',
        'Excludes pregnant individuals under 16 years',
        'All patients receive self-care and safety-netting regardless of treatment decision',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Diagnosis',
    },
    {
      type: 'para',
      text: 'AOM is a clinical diagnosis. Both the history AND otoscopic findings should point towards it before committing to the diagnosis.',
    },
    {
      type: 'table',
      headers: ['', 'Symptoms / Signs', 'Detail'],
      rows: [
        ['Older children', 'Earache', 'Acute onset; often unilateral'],
        ['Younger children', 'Holding, tugging or rubbing the ear', 'Non-specific but in context highly suggestive'],
        ['Younger children', 'Fever, crying, poor feeding, restlessness, behavioural changes, cough, rhinorrhoea', 'Particularly in infants unable to localise pain'],
      ],
      caption: 'Symptoms suggesting AOM',
    },
    {
      type: 'table',
      headers: ['Otoscopic Finding', 'Significance'],
      rows: [
        ['Distinctly red, yellow or cloudy TM', 'Core diagnostic feature'],
        ['Moderate-to-severe bulging of TM with loss of normal landmarks', 'Strongly suggests AOM — air-fluid level may be visible behind TM'],
        ['Perforation of TM and/or sticky discharge in external canal (otorrhoea)', 'Confirms AOM; guides antibiotic decision'],
        ['Loss of light reflex / dull TM', 'May indicate middle ear effusion rather than active infection'],
      ],
      caption: 'Otoscopic findings',
    },
    {
      type: 'image',
      src: '/images/Untitled_26.png.webp',
      alt: 'Three otoscopy panels comparing normal tympanic membrane, resolving AOM and active AOM',
      caption: 'Left to right: normal TM (translucent, clear light reflex) → resolving AOM (dull, congested) → active AOM (erythematous, bulging, loss of landmarks).',
    },
    {
      type: 'image',
      src: '/images/AOM-day0_annotated.jpg.webp',
      alt: 'Annotated otoscopy image showing erythema, dimple from umbo, and bulging doughnut sign in AOM',
      caption: 'Classic AOM otoscopy: erythema, loss of umbo reflex, and peripheral bulging ("doughnut sign").',
    },
    {
      type: 'image',
      src: '/images/Typical-otoscopic-findings-of-AOM-54.ppm.png',
      alt: 'Four otoscopy panels showing bullous formation, TM thickening, middle ear effusion and perforation in AOM',
      caption: 'Range of AOM otoscopic appearances: bullous myringitis, TM thickening, middle ear effusion, and frank perforation.',
    },
    {
      type: 'image',
      src: '/images/big_637c96a11e82b3.82653657.jpg',
      alt: 'Diagram comparing normal ear anatomy and otoscopy with acute otitis media findings',
      caption: 'Top row — anatomy: normal ear (mastoid bone, middle ear, TM, Eustachian tube) vs AOM (pus in middle ear, obstructed Eustachian tube, risk of mastoiditis). Bottom row — otoscopy: normal TM (translucent, malleolar prominence, light reflex) vs AOM TM (bulging, opacified, erythematous, loss of light reflex).',
    },

    {
      type: 'heading',
      level: 2,
      text: 'Red Flags — Suspected Acute Complications',
    },
    {
      type: 'callout',
      variant: 'danger',
      title: 'Call 999 / Send to A&E immediately if any of:',
      items: [
        'Meningitis — neck stiffness, photophobia, mottled skin',
        'Mastoiditis — pain, soreness, swelling, tenderness behind the ear',
        'Brain abscess — severe headache, confusion, irritability, muscle weakness',
        'Sinus thrombosis — headache behind or around the eyes',
        'Facial nerve paralysis',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Management Decision Tree',
    },
    {
      type: 'table',
      headers: ['Scenario', 'Action'],
      rows: [
        ['Systemically very unwell, signs of serious illness, or high-risk comorbidity (significant cardiac/lung/renal/liver/neuromuscular disease, immunosuppression, cystic fibrosis, premature infant)', 'Refer to GP or other appropriate provider'],
        ['Otorrhoea (discharge through TM) OR confirmed/suspected perforation', 'Offer amoxicillin 5 days + self-care (see doses below)'],
        ['Under 2 years with bilateral AOM', 'Shared decision-making; offer antibiotics if severe symptoms or >3 days'],
        ['Mild symptoms, no perforation, no high risk', 'Self-care + pain relief; consider Otigo drops; safety-net 3–5 days'],
        ['Moderate/severe symptoms, no perforation, no high risk', 'Otigo ear drops (phenazone + lidocaine) up to 7 days + self-care; or delayed antibiotic prescription'],
        ['Meets criteria: severe based on clinical judgement OR symptoms >3 days', 'Offer antibiotic (see doses below)'],
      ],
    },
    {
      type: 'image',
      src: '/images/aom pharmacy first pathway.jpeg',
      align: 'full',
      alt: 'Pharmacy First Acute Otitis Media clinical pathway flowchart',
      caption: 'Pharmacy First AOM pathway (NHS England). Tap to enlarge.',
    },
    {
      type: 'linkrow',
      links: [
        { label: '📄 Earache / AOM Pathway (PDF)', url: '/pdfs/earache-pathway.pdf' },
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Self-Care & Topical Analgesia',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Otigo Ear Drops (Phenazone 40mg/g + Lidocaine 10mg/g)',
      items: [
        'Dose: 4 drops into affected ear(s), TDS, until symptoms resolve (up to 7 days)',
        'Safe and effective — often prevents the need for antibiotics in low-risk cases',
        'Contraindicated if tympanic membrane is perforated or if otorrhoea present',
        'Instil with head tilted; hold position for 2 minutes; gentle tragal massage helps',
      ],
    },
    {
      type: 'table',
      headers: ['Self-care Measure', 'Detail'],
      rows: [
        ['Analgesia', 'Paracetamol or ibuprofen (weight-appropriate doses) for pain and fever — first-line for all patients'],
        ['Otigo drops', 'Topical anaesthetic for pain relief if TM intact — reduces antibiotic need'],
        ['Warmth', 'Warm flannel held gently over the ear may ease pain'],
        ['Keep ear dry', 'Avoid swimming and submerging the ear until fully resolved; use a cotton wool ball lightly smeared with Vaseline when showering if TM intact'],
        ['Avoid cotton buds / water', 'Do not insert anything into the ear canal'],
        ['Breastfeeding', 'Continue if infant — protective effect against AOM'],
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Antibiotic Doses',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Prescribing Notes',
      items: [
        'Use immediate prescription if: systemically unwell, otorrhoea/perforation, bilateral AOM <2 yrs with severe or >3-day symptoms',
        'Delayed (back-pocket) prescription is appropriate for moderate/severe symptoms without perforation in children ≥2 yrs',
        'Co-amoxiclav if worsening on amoxicillin or hospital admission required',
        'Always prescribe alongside self-care and safety-netting advice',
      ],
    },
    {
      type: 'table',
      headers: ['Drug', 'Age', 'Dose', 'Duration'],
      rows: [
        ['Amoxicillin (first-line, no penicillin allergy)', '1–11 months', '125 mg TDS', '5 days'],
        ['Amoxicillin', '1–4 years', '125 mg TDS', '5 days'],
        ['Amoxicillin', '5–17 years', '250 mg TDS', '5 days'],
        ['—', '—', '—', '—'],
        ['Clarithromycin (penicillin allergy)', '1–11 months', '7.5 mg/kg BD', '5 days'],
        ['Clarithromycin', '1–4 years', '62.5 mg BD', '5 days'],
        ['Clarithromycin', '5–11 years', '125 mg BD', '5 days'],
        ['Clarithromycin', '12–17 years', '250 mg BD', '5 days'],
        ['—', '—', '—', '—'],
        ['Erythromycin (penicillin allergy + pregnant, age 16–17)', '16–17 years', '250 mg QDS', '5 days'],
        ['—', '—', '—', '—'],
        ['Co-amoxiclav (worsening / admission)', 'All ages', 'Per BNFC weight-based dosing', '5–7 days'],
      ],
      caption: 'AOM antibiotic doses — Pharmacy First / NICE guidance',
    },

    {
      type: 'heading',
      level: 2,
      text: 'Safety-Netting',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Return/Escalate if any of:',
      items: [
        'No improvement within 3–5 days (for self-care) or 2–3 days on antibiotics',
        'Symptoms worsen rapidly or significantly at any point',
        'Child becomes very unwell — lethargy, high fever, severe irritability',
        'New onset neck stiffness, confusion, rash, facial weakness, or pain behind the ear (mastoiditis)',
        'Discharge persists beyond 7 days (perforation) — warrants GP review',
      ],
    },
  ],
}
