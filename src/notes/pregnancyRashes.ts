import type { Note } from '../data/notes'

export const pregnancyRashes: Note = {
  id: 'pregnancy-rashes',
  title: 'Rashes & Viral Exposure in Pregnancy',
  subtitle: 'Chickenpox, parvovirus, measles and rubella exposure, plus the specific pregnancy dermatoses',
  tags: ['obstetrics'],

  body: `pregnancy rash viral exposure chickenpox varicella VZIG aciclovir parvovirus B19 slapped cheek fetal hydrops rubella measles CMV Zika obstetric cholestasis pemphigoid gestationis polymorphic eruption PEP PUPPP atopic eruption itch bile acids`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Two distinct problems present as "a rash/itch in pregnancy": exposure to (or infection with) a virus that can harm the fetus, and the specific dermatoses of pregnancy. Both need a clear approach — for viral exposure, check the woman\'s immunity/booking bloods and act within tight timeframes; for an itchy pregnant woman, always exclude obstetric cholestasis with bile acids. When in doubt, discuss with the antenatal team.',
    },

    { type: 'heading', level: 2, text: 'Viral Exposure / Infection' },
    {
      type: 'table',
      headers: ['Virus', 'Risk & action'],
      rows: [
        ['Chickenpox (VZV)', 'Non-immune contact → check VZV IgG urgently; if non-immune, give VZIG (or aciclovir per current guidance) as post-exposure prophylaxis promptly. Maternal chickenpox risks maternal pneumonitis and (early) congenital varicella / (perinatal) neonatal varicella → start aciclovir and refer'],
        ['Parvovirus B19 ("slapped cheek")', 'Can cause fetal anaemia/hydrops and loss, especially <20 weeks → check maternal serology after exposure/rash; if acute infection confirmed, refer to fetal medicine for surveillance (MCA Doppler)'],
        ['Rubella', 'Congenital rubella syndrome if infected in early pregnancy → check immunity; rubella is now rare (MMR); offer MMR postnatally if non-immune (live vaccine — not in pregnancy)'],
        ['Measles', 'Risk of prematurity/miscarriage and maternal complications; non-immune contact → discuss urgently (immunoglobulin may be indicated)'],
        ['CMV / Zika', 'CMV is a leading infectious cause of congenital disability (hygiene advice; no routine screening); Zika — travel advice and avoidance in pregnancy'],
      ],
      caption: 'Always use the woman\'s booking bloods (rubella and other results) and discuss significant exposures with the antenatal/microbiology team promptly — timeframes for prophylaxis are short.',
    },

    { type: 'heading', level: 2, text: 'The Itchy Pregnant Woman — Exclude Obstetric Cholestasis' },
    {
      type: 'callout',
      variant: 'danger',
      title: 'Itch Without a Rash → Check Bile Acids & LFTs',
      items: [
        'Intrahepatic cholestasis of pregnancy: itch (classically palms and soles, worse at night) WITHOUT a primary rash, usually in the third trimester → check bile acids and LFTs.',
        'It is associated with increased perinatal risk (including stillbirth at high bile-acid levels) → refer to obstetrics for monitoring and timing of delivery; treat itch symptomatically.',
      ],
    },

    { type: 'heading', level: 2, text: 'Specific Pregnancy Dermatoses' },
    {
      type: 'list',
      items: [
        'Polymorphic eruption of pregnancy (PEP/PUPPP): intensely itchy urticarial papules/plaques starting in the abdominal STRIAE (sparing the umbilicus), usually third trimester of a first pregnancy — benign, no fetal risk; treat with emollients and topical steroids.',
        'Atopic eruption of pregnancy: the commonest — an eczema-like/prurigo itch, often earlier in pregnancy, in atopic women; emollients and topical steroids.',
        'Pemphigoid gestationis: rare autoimmune blistering, intensely itchy urticarial then bullous lesions often starting AROUND the umbilicus → refer dermatology; associated with fetal risk (SGA/prematurity) and needs monitoring.',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'RCOG — Chickenpox in Pregnancy (GTG 13)', url: 'https://www.rcog.org.uk/guidance/browse-all-guidance/green-top-guidelines/' },
        { label: 'RCOG — Obstetric Cholestasis (GTG 43)', url: 'https://www.rcog.org.uk/guidance/browse-all-guidance/green-top-guidelines/' },
        { label: 'UKHSA — Viral Rash in Pregnancy Guidance', url: 'https://www.gov.uk/government/publications/viral-rash-in-pregnancy' },
        { label: 'NICE CKS — Chickenpox', url: 'https://cks.nice.org.uk/topics/chickenpox/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'shingles-chickenpox', label: 'Shingles & Chickenpox', subtitle: 'VZV — immunity checking and management' },
        { id: 'childhood-viral-rashes', label: 'Childhood Viral Rashes', subtitle: 'Recognising parvovirus, measles, rubella' },
        { id: 'chronic-liver-disease', label: 'Chronic Liver Disease', subtitle: 'Cholestatic itch and LFT interpretation' },
        { id: 'antenatal-screening', label: 'Antenatal & Newborn Screening', subtitle: 'Booking bloods and immunity status' },
        { id: 'pruritus', label: 'Generalised Pruritus', subtitle: 'Itch-without-rash work-up' },
      ],
    },

  ],
}
