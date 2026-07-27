import type { Note } from '../data/notes'

export const meningitis: Note = {
  id: 'meningitis',
  title: 'Meningitis & Meningococcal Sepsis',
  subtitle: 'Non-blanching rash, pre-hospital IM benzylpenicillin doses, red flags and post-discharge follow-up',
  tags: ['infection', 'paediatrics'],

  body: `meningitis meningococcal sepsis non-blanching rash petechial purpuric IM benzylpenicillin benpen ceftriaxone bulging fontanelle neck stiffness photophobia sick child sepsis lumbar puncture PHE notification audiology SNHL household contacts prophylaxis ciprofloxacin Men B Men ACWY`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG240 — Meningitis (Bacterial) & Meningococcal Disease', url: 'https://www.nice.org.uk/guidance/ng240' },
        { label: 'NICE CKS — Meningitis', url: 'https://cks.nice.org.uk/topics/meningitis-bacterial-meningococcal-disease/' },
        { label: 'Meningitis Research Foundation', url: 'https://www.meningitis.org/' },
      ],
    },

    {
      type: 'para',
      text: 'Meningococcal disease is the archetypal time-critical emergency: the primary-care priorities are to suspect it in any acutely unwell/septic patient, give IM benzylpenicillin (at the right weight-based dose) if it will not delay transfer, and call 999 — never waiting for a rash to appear. Beyond the acute event, the GP has a defined role in public health notification and prophylaxis, and in ensuring survivors get audiology and specialist follow-up for sequelae.',
    },
    {
      type: 'callout',
      variant: 'danger',
      title: 'Emergency — Call 999 and Give IM Benzylpenicillin',
      items: [
        'Suspect in any acutely unwell/septic child or adult, especially with a non-blanching (petechial/purpuric) rash → call 999 immediately',
        'Give IM (or IV) benzylpenicillin WHILE awaiting transfer if meningococcal disease is suspected and it will not delay transfer — do NOT delay for a rash to appear if the patient is very unwell',
        'IM benzylpenicillin doses: adult/child ≥10 yrs = 1.2 g; child 1–9 yrs = 600 mg; infant <1 yr = 300 mg',
        'Use a third-generation cephalosporin (cefotaxime/ceftriaxone) if available and there is a genuine, severe penicillin allergy (anaphylaxis)',
        'A non-blanching rash that is spreading is a sign of meningococcal septicaemia — treat and transfer urgently',
      ],
    },

    { type: 'heading', level: 2, text: 'Recognition' },

    {
      type: 'list',
      items: [
        'Meningitis features: fever, headache, neck stiffness, photophobia, vomiting, altered consciousness; in young children — irritability, poor feeding, drowsiness, high-pitched cry',
        'Septicaemia features (often more dangerous): non-blanching rash, cold peripheries, leg pain, mottled/pale skin, tachycardia, prolonged capillary refill, hypotension (late)',
        'In infants, a bulging fontanelle and neck stiffness are LATE signs — do not be falsely reassured by their absence',
        'Use the "tumbler/glass test" to demonstrate a non-blanching rash, but never wait for a rash before acting on a sick child',
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Non-Blanching Rash in a WELL Child',
      items: [
        'A non-blanching rash with fever or any features of sepsis → treat as meningococcal disease (999 + benzylpenicillin)',
        'A non-blanching rash in a well, afebrile child has a low risk of meningococcal disease, but still warrants a low threshold for admission',
        'Consider alternatives: viral petechiae (e.g. after coughing/vomiting — distribution above the nipple line), thrombocytopenia/clotting disorder (check urgent FBC and clotting), Henoch-Schönlein purpura, and non-accidental injury',
      ],
    },

    { type: 'heading', level: 2, text: 'Hospital Management (for awareness)' },

    {
      type: 'list',
      items: [
        'Resuscitation (ABC), blood cultures, FBC/CRP, coagulation, glucose, and lumbar puncture (unless contraindicated — e.g. signs of raised ICP, coagulopathy, cardiovascular instability)',
        'Empirical IV ceftriaxone/cefotaxime; add amoxicillin in neonates and the elderly/immunocompromised to cover Listeria; dexamethasone in certain bacterial meningitis',
        'Meningococcal PCR (blood/CSF) and throat swab aid diagnosis even after antibiotics started',
      ],
    },

    { type: 'heading', level: 2, text: 'Public Health & Follow-Up' },

    {
      type: 'list',
      items: [
        'NOTIFIABLE disease — notify the local health protection team (UKHSA) urgently; they arrange contact tracing and chemoprophylaxis (e.g. ciprofloxacin) for close/household contacts',
        'Audiology assessment within ~4 weeks of recovery — sensorineural hearing loss is the commonest sequela (may need cochlear implant if severe; refer promptly as the cochlea can ossify)',
        'Paediatric/specialist follow-up at ~4–6 weeks post-discharge to assess for sequelae (hearing, neurological, developmental, renal, orthopaedic from skin necrosis)',
        'Consider immunodeficiency testing (e.g. complement deficiency) if recurrent meningococcal disease or unusual serogroups',
        'Reinforce vaccination (Men B, Men ACWY, Hib, pneumococcal) per the immunisation schedule',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'feverish-child', label: 'Feverish Child Under 5', subtitle: 'Traffic-light assessment and sepsis recognition' },
        { id: 'notifiable-diseases', label: 'Notifiable Diseases', subtitle: 'Notification duties and the UKHSA process' },
        { id: 'hearing-loss', label: 'Hearing Loss', subtitle: 'Post-meningitis SNHL — urgent audiology' },
        { id: 'febrile-convulsions', label: 'Febrile Convulsions', subtitle: 'Always exclude meningitis in the febrile child with a seizure' },
        { id: 'hsp', label: 'Henoch-Schönlein Purpura', subtitle: 'Non-blanching rash in a WELL child — the benign mimic' },
      ],
    },

  ],
}
