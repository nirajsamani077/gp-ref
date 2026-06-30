import type { Note } from '../data/notes'

export const childhoodViralRashes: Note = {
  id: 'childhood-viral-rashes',
  title: 'Childhood Viral Rashes & Infections',
  subtitle: 'Measles, chickenpox, HFMD, slapped cheek, roseola, rubella, scarlet fever and Kawasaki',
  tags: ['paediatrics', 'infection'],

  body: `childhood viral exanthem measles Koplik MMR chickenpox varicella hand foot and mouth coxsackie slapped cheek parvovirus B19 erythema infectiosum roseola HHV6 rubella mumps scarlet fever group A strep strawberry tongue Kawasaki desquamation notifiable PHE school exclusion`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Rashes in Children', url: 'https://cks.nice.org.uk/specialities/children-and-young-people/' },
        { label: 'UKHSA — Notifiable Diseases', url: 'https://www.gov.uk/guidance/notifiable-diseases-and-causative-organisms-how-to-report' },
        { label: 'GOV.UK — School Exclusion Guidance', url: 'https://www.gov.uk/government/publications/health-protection-in-schools-and-other-childcare-facilities' },
      ],
    },

    { type: 'heading', level: 2, text: 'The Common Viral Exanthems' },

    {
      type: 'table',
      headers: ['Illness', 'Cause', 'Rash & key features', 'Notes'],
      rows: [
        ['Measles', 'Measles virus (notifiable)', 'Prodrome of high fever, cough, coryza, conjunctivitis; Koplik spots (white buccal spots); then maculopapular rash from behind the ears spreading down', 'Highly contagious; rising with low MMR uptake; complications: pneumonia, encephalitis, (late) SSPE'],
        ['Chickenpox', 'Varicella zoster', 'Fever then itchy macules → papules → vesicles → crusts in crops (different stages together)', 'Infectious until lesions crusted; avoid contact with pregnant/immunocompromised/neonates'],
        ['Hand, foot & mouth', 'Coxsackie A16', 'Fever, sore throat, oral ulcers, vesicles on palms/soles', 'Self-limiting; analgesia/Difflam for painful mouth; supportive'],
        ['Slapped cheek (fifth disease)', 'Parvovirus B19', '"Slapped cheek" facial erythema then lacy rash on limbs', 'Risk to pregnancy (hydrops) and to those with haemolytic anaemia (aplastic crisis) or immunosuppression'],
        ['Roseola (sixth disease)', 'HHV-6', 'High fever for ~3 days that settles, THEN a maculopapular rash appears (not starting on the face); Nagayama spots on palate', '6 months–2 years; febrile convulsions in ~10%; no exclusion needed'],
        ['Rubella', 'Rubella virus (notifiable)', 'Pink maculopapular rash from the face, fading quickly; suboccipital/postauricular lymphadenopathy', 'Major risk to the fetus (congenital rubella) — keep away from pregnant women'],
        ['Mumps', 'Mumps virus (notifiable)', 'Fever/malaise then parotid swelling', 'Complications: orchitis, meningitis, pancreatitis'],
      ],
    },

    { type: 'heading', level: 2, text: 'Scarlet Fever (Group A Strep)' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Scarlet Fever — Treat and Notify',
      items: [
        'Caused by group A streptococcus (toxin-producing); typically ages 2–8; NOTIFIABLE — notify UKHSA (outbreaks occur)',
        'Features: fever, sore throat, and a fine punctate "sandpaper" blanching rash (sunburn-like with goose-pimple texture) starting on the torso; strawberry tongue, flushed cheeks with circumoral pallor, cervical lymphadenopathy; later desquamation (peeling)',
        'Treatment: phenoxymethylpenicillin (penicillin V) for 10 days (azithromycin 5 days if penicillin allergic); paracetamol/ibuprofen',
        'Can return to school 24 hours after starting antibiotics; safety-net and review in 1–2 days (admit if not improving)',
        'Complications: rheumatic fever, post-streptococcal glomerulonephritis, and (rarely) invasive GAS / toxic shock — be alert to a child who is deteriorating',
      ],
    },

    { type: 'heading', level: 2, text: 'Kawasaki Disease — Do Not Miss' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Kawasaki — Risk of Coronary Artery Aneurysms',
      items: [
        'A medium-vessel vasculitis of young children; the danger is coronary artery aneurysms',
        'Suspect with high fever persisting ≥5 days (resistant to antipyretics) PLUS the "red" features: bilateral non-purulent conjunctival injection, red cracked lips/strawberry tongue, polymorphous rash, erythema/oedema of hands and feet (later desquamation), and cervical lymphadenopathy',
        'Refer urgently to paediatrics — treatment is IV immunoglobulin and aspirin, with echocardiographic surveillance',
      ],
    },

    { type: 'heading', level: 2, text: 'Approach to the Febrile Child with a Rash' },

    {
      type: 'list',
      items: [
        'First exclude serious illness: a non-blanching (petechial/purpuric) rash with fever or any sepsis features → treat as meningococcal disease (see Meningitis note)',
        'Use the NICE traffic-light system to assess the unwell child (see Feverish Child note)',
        'Most viral exanthems are self-limiting — supportive care (fluids, antipyretics), safety-netting, and advice on infectivity/exclusion',
        'Public health: measles, rubella, mumps and scarlet fever are notifiable — notify UKHSA, who advise on contact tracing and (for measles) post-exposure prophylaxis for high-risk contacts',
        'Always advise keeping affected children away from pregnant women and immunocompromised contacts (measles, rubella, chickenpox, parvovirus)',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'feverish-child', label: 'Feverish Child Under 5', subtitle: 'Traffic-light assessment and sepsis recognition' },
        { id: 'meningitis', label: 'Meningitis & Meningococcal Sepsis', subtitle: 'The non-blanching rash emergency to exclude first' },
        { id: 'notifiable-diseases', label: 'Notifiable Diseases', subtitle: 'Measles, rubella, mumps, scarlet fever — notification duties' },
        { id: 'sorethroat-tonsillitis', label: 'Sore Throat & Tonsillitis', subtitle: 'Group A strep — scoring and antibiotic decisions' },
        { id: 'febrile-convulsions', label: 'Febrile Convulsions', subtitle: 'Common with roseola and other febrile viral illnesses' },
      ],
    },

  ],
}
