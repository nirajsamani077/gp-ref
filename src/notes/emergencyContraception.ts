import type { Note } from '../data/notes'

export const emergencyContraception: Note = {
  id: 'emergency-contraception',
  title: 'Emergency Contraception',
  subtitle: 'Levonelle, EllaOne, copper IUD — timing, efficacy, high BMI, quick-starting and missed pill rules',
  tags: ['contraception', 'gynaecology'],

  body: 'emergency contraception EC levonorgestrel Levonelle LNG EllaOne ulipristal acetate UPA copper IUD intrauterine device UPSI unprotected sexual intercourse 72 hours 120 hours 5 days high BMI weight enzyme inducer enzyme induction pregnancy test quick start restart hormonal contraception breastfeeding missed pill rules pill window sexual assault SARC ovulation estimate calendar method STI screen chlamydia',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Emergency Contraception — Core Principles',
      items: [
        'Offer ALL three options to every patient — discuss and let them choose; always mention the copper IUD as the most effective option even if you think they will decline',
        'Copper IUD: most effective (>99%), works up to 5 days after UPSI or estimated ovulation; also provides ongoing contraception',
        'EllaOne (UPA 30 mg): more effective than Levonelle, especially beyond 48 hours; use if 48–120 hours since UPSI or if BMI >26 and Levonelle not available/declined',
        'Levonelle (LNG 1.5 mg): effective within 72 hours; available OTC; double the dose if weight >70 kg or BMI >26',
        'Every consultation is an opportunity: discuss future ongoing contraception and quick-start before the patient leaves',
      ],
    },

    { type: 'heading', level: 2, text: 'Comparison of Methods' },

    {
      type: 'table',
      headers: ['Method', 'Time Window', 'Efficacy', 'Key Clinical Points'],
      rows: [
        ['Levonelle (levonorgestrel 1.5 mg)', 'Within 72 hours (3 days) of UPSI — efficacy reduces with time', '~85% if taken <24h; ~58% if taken 49–72h', 'OTC available (pharmacy without prescription). Standard dose if weight ≤70 kg/BMI ≤26; DOUBLE DOSE (3 mg = 2 tablets) if >70 kg or BMI >26. Repeat if vomiting within 3 hours. Can use >1× per cycle. Start hormonal contraception immediately after.'],
        ['EllaOne (ulipristal acetate 30 mg)', 'Within 120 hours (5 days) of UPSI — PREFERRED if >72 hours, high BMI, or multiple UPSI episodes', 'More effective than LNG across all time points; maintains efficacy at 72–120 hours', 'Prescription only. No dose adjustment for weight/BMI — efficacy maintained. Wait 5 days before starting hormonal contraception (UPA reduces efficacy of progestogens and vice versa). Breastfeeding: express and discard milk for 1 week. Do NOT co-prescribe with Levonelle.'],
        ['Copper IUD (Cu-IUD)', 'Within 120 hours of UPSI, OR within 5 days of estimated ovulation (may be >5 days after UPSI if later ovulation)', '>99% — most effective; only method that prevents implantation regardless of when in cycle', 'Requires trained clinician to fit. Suitable for all BMI. Can be left in situ for ongoing long-term contraception (10–12 years). Check threads at 6 weeks. Screen for STI before/at fitting. Contraindicated if active STI or high infection risk — treat first if possible, or fit with antibiotic cover.'],
      ],
      caption: 'If enzyme-inducing drugs (rifampicin, carbamazepine, phenytoin, St John\'s Wort, efavirenz): copper IUD is the ONLY reliable option. If copper IUD declined: double-dose Levonelle (3 mg). EllaOne is NOT recommended in enzyme-inducer users.',
    },

    { type: 'heading', level: 2, text: 'Estimating UPSI Risk and Timing' },

    {
      type: 'list',
      items: [
        'Ask: date(s) of UPSI, cycle length, date of last menstrual period (LMP) — to estimate current cycle stage',
        'If UPSI within 72 hours → Levonelle or EllaOne both appropriate; copper IUD most effective',
        'If UPSI 72–120 hours → EllaOne or copper IUD; Levonelle is licensed up to 72h but less effective beyond 24–48h',
        'If UPSI >120 hours ago: hormonal EC unlikely to be effective; copper IUD is still effective if within 5 days of estimated ovulation date',
        'Estimating ovulation: ovulation typically occurs on day 14 of a 28-day cycle (range day 10–16); adjust for cycle length. Example: in a regular 28-day cycle with LMP day 1, ovulation estimated day 14 — copper IUD can be fitted up to day 19 (day 14 + 5)',
        'Multiple UPSI episodes in same cycle: Levonelle covers only the most recent episode; EllaOne or copper IUD are preferred if multiple UPSI episodes have occurred',
        'If already pregnant: EC will not terminate an established pregnancy; confirm with pregnancy test; offer counselling',
      ],
    },

    { type: 'heading', level: 2, text: 'Missed Pill Rules — When EC Is Needed' },

    {
      type: 'table',
      headers: ['Method', 'Missed Pill Situation Requiring EC', 'EC Choice', 'Restart Guidance'],
      rows: [
        ['COCP (combined pill)', 'Missed ≥2 pills in WEEK 1 of pack AND UPSI occurred in pill-free interval or week 1', 'Copper IUD preferred; if declined: EllaOne (then wait 5 days before restarting COCP) or Levonelle (restart COCP immediately)', 'After Levonelle: restart COCP same day with 7-day extra precautions; after EllaOne: wait 5 days before restarting COCP'],
        ['COCP', 'Missed ≥2 pills in WEEK 3 of pack AND UPSI: omit pill-free interval and start new pack — no EC needed if pills taken correctly for preceding week', 'No EC needed if pills taken correctly in week prior', 'Start new pack immediately; 7-day additional precautions'],
        ['POP (desogestrel)', 'More than 12 hours late taking POP AND UPSI in preceding 7 days', 'EC if UPSI; copper IUD preferred; EllaOne or Levonelle', 'Restart POP immediately with 2-day additional precautions'],
        ['POP (norethisterone)', 'More than 3 hours late AND UPSI in preceding 7 days', 'EC if UPSI', 'Restart POP with 2-day additional precautions'],
      ],
      caption: 'Always check FSRH guidance for exact rules — this table is a GP-level summary. The 3-hour window applies to traditional POP (norethisterone-based); the 12-hour window applies to desogestrel-based POP (Cerazette/Cerelle).',
    },

    { type: 'heading', level: 2, text: 'Quick-Starting Hormonal Contraception After EC' },

    {
      type: 'list',
      items: [
        'Quick-starting is RECOMMENDED — most women requesting EC are not using reliable ongoing contraception; taking advantage of the consultation to start is best practice',
        'After Levonelle: start hormonal contraception SAME DAY; use additional 7-day barrier precautions; pregnancy test at 3 weeks',
        'After EllaOne: WAIT 5 days before starting progestogen-containing contraception (hormonal progestogen reduces UPA efficacy); start day 5; 7-day additional precautions; pregnancy test at 3 weeks',
        'After copper IUD: method is immediately effective; no additional precautions needed; can leave in situ for long-term contraception or remove after next period',
        'Implant: can be inserted same day as or after EllaOne (insertion does not affect EC efficacy); 7-day precautions after insertion',
        'LARC at same visit as EC: best practice — BPAS clinics and GUM services routinely offer this; copper IUD at same visit as EC is the most efficient option',
      ],
    },

    { type: 'heading', level: 2, text: 'Special Situations' },

    {
      type: 'list',
      items: [
        'Sexual assault: offer EC regardless of elapsed time (as above); also offer STI screening (NAAT chlamydia/gonorrhoea + syphilis serology + HIV PEP assessment); refer to local SARC (Sexual Assault Referral Centre) for forensic examination and holistic support; SARC Staffordshire — 0800 082 0099',
        'Breastfeeding: Levonelle — safe (small amount in breast milk; not harmful); EllaOne — advise to express and discard breast milk for 7 days; copper IUD — safe',
        'Under-16: Fraser/Gillick competence assessment; offer EC without parental consent if competent and in best interests; safeguarding check if coercion or abuse suspected; under-13 → mandatory safeguarding referral',
        'Known pregnancy: EC will NOT terminate an established pregnancy; if >3 weeks since UPSI → do pregnancy test first',
        'STI risk: if high-risk UPSI (new/multiple partners, known STI exposure) → offer chlamydia and gonorrhoea screening at the same visit; results in 1–2 weeks',
        'Nausea/vomiting: common side effect of Levonelle; if vomiting within 3 hours → repeat the dose; domperidone 10 mg can be given before the EC tablet; EllaOne has lower nausea profile',
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Follow-Up and Safety Netting',
      items: [
        'Pregnancy test at 3 weeks after UPSI: Levonelle and EllaOne may cause early or delayed next period — advise pregnancy test if period >7 days late or unusually light',
        'If using copper IUD: arrange 6-week thread check with GP or practice nurse',
        'Document: date and time of UPSI, method of EC given, quick-start plan, advice given, pregnancy test timing',
        'Return sooner if: very heavy bleeding (haemodynamic instability), severe one-sided abdominal pain (ectopic risk), signs of STI (discharge, dysuria, pelvic pain)',
        'Next regular GP appointment: offer STI results review and contraception assessment if not already done',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'FSRH — Emergency Contraception Guideline (2023)', url: 'https://www.fsrh.org/documents/cec-clinical-guidance-emergency-contraception-march-2017/' },
        { label: 'NICE CKS — Emergency Contraception', url: 'https://cks.nice.org.uk/topics/emergency-contraception/' },
        { label: 'NHS — Emergency Contraception', url: 'https://www.nhs.uk/contraception/emergency-contraception/' },
        { label: 'STAFFORDSHIRE SARC', url: 'https://staffordshiresarc.nhs.uk/' },
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Access — Darwin Practice, Lichfield',
      items: [
        'EC from Darwin Practice: prescribe Levonelle or EllaOne in-hours; copper IUD referral to GUM/LARC service',
        'Out of hours EC: local pharmacies (Levonelle/EllaOne OTC); NHS 111 for OOH prescription; Boots and Superdrug pharmacies often open extended hours',
        'Copper IUD fitting: Staffordshire Sexual Health Service Lichfield — MPFT GUM/sexual health; some GP practices with LARC-trained clinicians',
        'STI screening: Staffordshire Sexual Health Service — 01543 444100; walk-in or online booking; umbrella.nhs.uk',
        'SARC (sexual assault): Staffordshire SARC — 0800 082 0099 (24/7); can be accessed directly by patient or via police/healthcare professional',
        'Brook/SH:24: online STI testing and EC advice for young people (under 25)',
      ],
    },
  ],
}
