import type { Note } from '../data/notes'

export const torchInfections: Note = {
  id: 'torch-infections',
  title: 'TORCH & Congenital Infections',
  subtitle: 'The infections that cross the placenta — CMV, toxoplasmosis, rubella, syphilis and others, and prevention',
  tags: ['infection', 'paediatrics'],

  body: `TORCH congenital infection toxoplasmosis other syphilis rubella CMV cytomegalovirus herpes zika parvovirus microcephaly sensorineural hearing loss intrauterine growth restriction hepatosplenomegaly prevention hygiene screening`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'TORCH is a mnemonic for a group of infections that can cross the placenta and harm the fetus/newborn — Toxoplasmosis, Other (syphilis, VZV, parvovirus, Zika, HIV, hepatitis), Rubella, Cytomegalovirus and Herpes simplex. They share overlapping features (growth restriction, neurological and hearing/eye damage). For the GP the practical points are PREVENTION advice, knowing what is (and isn\'t) screened, and recognising a possibly-infected newborn for referral.',
    },

    { type: 'heading', level: 2, text: 'The Main Congenital Infections' },
    {
      type: 'table',
      headers: ['Infection', 'Key points'],
      rows: [
        ['Cytomegalovirus (CMV)', 'The commonest congenital infection and leading infectious cause of childhood sensorineural hearing loss and neurodisability; NOT routinely screened — prevention is hygiene advice (esp. for pregnant women with young children/nappies: handwashing, don\'t share food/utensils, avoid kissing on the mouth)'],
        ['Toxoplasmosis', 'From cat faeces, undercooked meat, unwashed produce → chorioretinitis, hydrocephalus, intracranial calcification; prevention advice (avoid cat litter, cook meat, wash produce)'],
        ['Rubella', 'Congenital rubella syndrome (deafness, cardiac defects, cataracts) — now rare thanks to MMR; check immunity, vaccinate non-immune women postnatally (live vaccine — not in pregnancy)'],
        ['Syphilis', 'Screened at booking and treatable — congenital syphilis is preventable; treat the mother'],
        ['Herpes simplex (HSV)', 'Neonatal herpes (acquired peripartum) can be devastating — active maternal genital herpes near delivery informs mode of delivery/treatment'],
        ['Zika / parvovirus / VZV', 'Zika (microcephaly — travel avoidance advice); parvovirus (fetal anaemia/hydrops); varicella (congenital varicella / neonatal chickenpox — see Pregnancy Rashes)'],
      ],
    },

    { type: 'heading', level: 2, text: 'Recognising a Congenitally-Infected Newborn' },
    {
      type: 'list',
      items: [
        'Overlapping features: intrauterine growth restriction, microcephaly, hepatosplenomegaly, jaundice, a petechial/"blueberry muffin" rash, thrombocytopenia, cataracts/chorioretinitis, and hearing loss.',
        'A newborn with these features, or a mother with a relevant infection/exposure, needs paediatric/infection referral for TORCH screening and management.',
      ],
    },

    { type: 'heading', level: 2, text: 'The GP\'s Role — Mostly Prevention' },
    {
      type: 'callout',
      variant: 'info',
      title: 'What to Advise',
      items: [
        'Preconception/pregnancy: check rubella immunity (offer MMR if non-immune, before pregnancy); give CMV and toxoplasmosis hygiene advice; travel advice for Zika; ensure booking infection screening (HIV, hepatitis B, syphilis) is done.',
        'Not everything is screened — CMV and toxoplasmosis rely on PREVENTION, not screening.',
        'Ensure newborn hearing screening happens (congenital CMV is a key cause of hearing loss) and safety-net for evolving problems.',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'UKHSA — Infections in Pregnancy', url: 'https://www.gov.uk/government/collections/infectious-diseases-in-pregnancy-screening-idps-programme' },
        { label: 'CMV Action', url: 'https://cmvaction.org.uk/' },
        { label: 'NICE CKS — Toxoplasmosis', url: 'https://cks.nice.org.uk/topics/toxoplasmosis/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'antenatal-screening', label: 'Antenatal & Newborn Screening', subtitle: 'Booking infection screening (HIV/hep B/syphilis)' },
        { id: 'pregnancy-rashes', label: 'Rashes & Viral Exposure in Pregnancy', subtitle: 'VZV, parvovirus, rubella exposure management' },
        { id: 'child-sensory-screening', label: 'Childhood Hearing/Vision/Speech', subtitle: 'CMV — a leading cause of hearing loss' },
        { id: 'preconception-care', label: 'Preconception Care', subtitle: 'Rubella immunity and prevention advice' },
      ],
    },

  ],
}
