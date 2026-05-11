import type { Note } from '../data/notes'

export const emergencyContraception: Note = {
  id: 'emergency-contraception',
  title: 'Emergency Contraception',
  subtitle: 'Levonelle, EllaOne, copper IUD — timing, efficacy, high BMI and quick starting',
  tags: ['contraception', 'gynaecology'],

  body: 'emergency contraception EC levonorgestrel Levonelle LNG EllaOne ulipristal acetate UPA copper IUD intrauterine device UPSI unprotected sexual intercourse 72 hours 120 hours 5 days high BMI weight enzyme inducer enzyme induction pregnancy test quick start restart hormonal contraception breastfeeding',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Emergency Contraception — Overview',
      items: [
        'Offer all three options to ALL patients — discuss and let patient choose; always offer the most effective option (copper IUD)',
        'Copper IUD is most effective (>99%) and provides ongoing contraception',
        'EllaOne (UPA) is more effective than Levonelle, especially in the 48–72 hour window and in higher weight individuals',
        'Always advise to take a pregnancy test 3 weeks after UPSI',
        'Not for ongoing contraception (except copper IUD) — discuss future contraception needs at same visit',
      ],
    },

    { type: 'heading', level: 2, text: 'Comparison of Options' },

    {
      type: 'table',
      headers: ['Method', 'Time Window', 'Efficacy', 'Dose', 'Key Points'],
      rows: [
        ['Levonelle (levonorgestrel 1.5 mg)', 'Within 72 hours (3 days) of UPSI', '~85% (reduces with time)', '1.5 mg single dose. Double dose (3 mg) if weight >70 kg or BMI >26 or on enzyme inducers', 'OTC available. Can use >1× per cycle. Repeat dose if vomiting within 3 hours. Can start other hormonal contraception immediately after.'],
        ['EllaOne (ulipristal acetate 30 mg)', 'Within 120 hours (5 days) of UPSI — PREFERRED if >72 hours', 'More effective than Levonelle, especially at 48–72 hours and in higher BMI patients', '30 mg single dose', 'Prescription only. Can now be used >1× per cycle. Caution in severe asthma (theoretical risk of worsening). DO NOT start hormonal contraception for 5 days (reduces efficacy). Delay breastfeeding for 1 week after UPA. Do NOT co-prescribe with Levonelle (antagonism).'],
        ['Copper IUD', 'Within 120 hours (5 days) of UPSI, OR within 5 days of estimated ovulation date', '>99% (most effective)', 'Intrauterine device — requires fitting by trained clinician', 'Can be left in situ for ongoing long-term contraception. Must wait until next period to remove if not being used long-term. Suitable for all BMI categories. NOT suitable in current STI — screen first.'],
      ],
      caption: 'FSRH recommends Levonelle at double dose if weight >70 kg or BMI >26, as standard dose may be less effective. EllaOne has better evidence in higher BMI patients without dose adjustment. Copper IUD is weight-independent and most effective.',
    },

    { type: 'heading', level: 2, text: 'Enzyme Inducers — Effect on EC' },

    {
      type: 'list',
      items: [
        'Enzyme inducers reduce the efficacy of both Levonelle and EllaOne: rifampicin, carbamazepine, phenytoin, phenobarbitone, St John\'s Wort, efavirenz, griseofulvin',
        'If on an enzyme inducer: offer copper IUD (NOT affected) as preferred option',
        'If copper IUD declined and on enzyme inducer: double dose Levonelle (3 mg) — NOTE: EllaOne is NOT recommended in enzyme inducer users',
        'Levonelle at double dose can be used; cannot use EllaOne with enzyme inducers',
      ],
    },

    { type: 'heading', level: 2, text: 'Quick-Starting Hormonal Contraception After EC' },

    {
      type: 'table',
      headers: ['After EC Method', 'When to Quick Start Hormonal Contraception', 'Additional Precautions'],
      rows: [
        ['After Levonelle', 'Hormonal contraception can be started immediately', '7-day additional contraception (condoms) unless copper IUD fitted; pregnancy test at 3 weeks'],
        ['After EllaOne (UPA)', 'Wait 5 days before starting hormonal contraception — starting earlier reduces EllaOne efficacy', 'After 5 days: quick-start hormonal contraception with 7-day additional precautions; pregnancy test at 3 weeks'],
        ['Special case: COCP with missed pills', 'If missed 2+ pills in week 1 of pack AND UPSI: EllaOne preferred EC option; then re-quick start COCP with 7-day precautions (UPA + restart COCP on day 5)', 'Complex interaction — follow FSRH guidance; COCP reduces UPA efficacy if co-timed'],
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Key Clinical Considerations',
      items: [
        'Exclude pregnancy before prescribing hormonal EC — if >5 days since UPSI: pregnancy test first',
        'STI risk: if UPSI at risk of STI — offer screening (NAAT swabs for chlamydia/gonorrhoea) alongside EC',
        'Breastfeeding: Levonelle is safe during breastfeeding. EllaOne (UPA): advise to express and discard breast milk for 1 week after taking',
        'Nausea: common side effect of Levonelle; if vomiting within 3 hours, repeat dose',
        'Subsequent period: Levonelle and EllaOne may cause early or late period; advise pregnancy test if period is >7 days late or lighter than usual',
        'Copper IUD for ongoing contraception: can be removed after next period if not wanted long-term',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Access — Darwin Practice, Lichfield',
      items: [
        'EC from Darwin Practice: available during practice hours; prescribe Levonelle or EllaOne or arrange copper IUD referral',
        'Out of hours: local pharmacies (Levonelle/EllaOne OTC without prescription); NHS 111',
        'Copper IUD fitting: UHDB Burton Sexual Health / GUM clinic or local LARC service — Darwin Practice can refer; some GPs with LNG-IUS experience may fit',
        'Sexual health (GUM): UHDB Burton or MPFT sexual health service Lichfield — STI screening alongside EC',
        'Brook or SH:24: online STI testing and EC advice for young people',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'FSRH — Emergency Contraception Guideline', url: 'https://www.fsrh.org/documents/cec-clinical-guidance-emergency-contraception-march-2017/' },
        { label: 'NICE CKS — Emergency Contraception', url: 'https://cks.nice.org.uk/topics/emergency-contraception/' },
        { label: 'NHS — Emergency Contraception', url: 'https://www.nhs.uk/contraception/emergency-contraception/' },
        { label: 'FPA — EC Patient Info', url: 'https://www.fpa.org.uk/contraception-help/emergency-contraception' },
      ],
    },
  ],
}
