import type { Note } from '../data/notes'

export const abortionForms: Note = {
  id: 'abortion-forms',
  title: 'Termination of Pregnancy (TOP)',
  subtitle: 'Self-referral pathway, HSA forms, medical vs surgical options, post-procedure care',
  tags: ['obstetrics', 'gynaecology'],

  body: 'termination of pregnancy TOP abortion BPAS MSI Reproductive Choices self-referral HSA1 HSA2 HSA4 forms grounds legal 24 weeks CMO statutory mifepristone misoprostol early medical abortion EMA surgical vacuum aspiration MVA telemedicine conscientious objection safeguarding coercion under-16 Fraser competence Gillick anti-D rhesus rhD contraception LARC post-abortion care post-abortion syndrome psychological support',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'GP Role — Key Principles',
      items: [
        'Patients requesting TOP should be directed to self-refer directly to BPAS or MSI Reproductive Choices — NO GP referral needed for most; BPAS handles all clinical assessment and HSA certification',
        'GP role: confirm pregnancy and gestation (LMP ± USS), discuss all three options without bias (continuing pregnancy, adoption, termination), offer support and signpost',
        'Conscientious objection: legal right to object but MUST refer promptly to another clinician without delay or judgement — failure to refer in a timely manner is a breach of professional duty',
        'Safeguarding: all requests from under-18s require consideration of safeguarding and coercion; check for DV, trafficking, or controlling relationship',
      ],
    },

    { type: 'heading', level: 2, text: 'Legal Grounds for Abortion (Abortion Act 1967, England & Wales)' },

    {
      type: 'table',
      headers: ['Ground', 'Detail', 'Gestation Limit'],
      rows: [
        ['A', 'Continuing pregnancy would involve risk to the life of the pregnant woman greater than if terminated', 'No limit'],
        ['B', 'Termination is necessary to prevent grave permanent injury to physical or mental health of the pregnant woman', 'No limit'],
        ['C', 'Continuance would involve risk (greater than termination) of injury to physical or mental health of the pregnant woman — MOST COMMON GROUND', 'Up to 24 weeks'],
        ['D', 'Continuance would involve risk of injury to physical or mental health of any existing children of the family', 'Up to 24 weeks'],
        ['E', 'Substantial risk that the child born would suffer such physical or mental abnormalities as to be seriously handicapped (fetal anomaly)', 'No limit'],
      ],
      caption: 'The vast majority of abortions in England and Wales are performed under Ground C. Two registered medical practitioners (RMPs) must certify the grounds before the procedure (HSA1 form). In emergency, one RMP suffices (HSA2).',
    },

    { type: 'heading', level: 2, text: 'Statutory HSA Forms' },

    {
      type: 'table',
      headers: ['Form', 'Purpose', 'Who Signs', 'Retention'],
      rows: [
        ['HSA1', 'Certificate of opinion — planned TOP; must be completed BEFORE the procedure', '2 Registered Medical Practitioners (RMPs) based on their genuine clinical opinion', '3 years (kept by abortion provider, NOT the GP)'],
        ['HSA2', 'Certificate of opinion — emergency TOP when time does not permit HSA1', '1 RMP only (within 24 hours — urgent/emergency circumstances)', '3 years'],
        ['HSA4', 'Notification to Chief Medical Officer (CMO) — statutory notification of every abortion performed', 'Practitioner who performed the abortion; sent to CMO within 14 days', 'By CMO'],
      ],
      caption: 'BPAS/MSI manage HSA1 and HSA4 paperwork — GP does not need to complete these when patient self-refers to an abortion provider. Failure to notify CMO via HSA4 within 14 days is a criminal offence (abortion provider responsibility).',
    },

    { type: 'heading', level: 2, text: 'Medical vs Surgical Termination' },

    {
      type: 'table',
      headers: ['Method', 'Gestation', 'Procedure', 'Advantages', 'Risks/Considerations'],
      rows: [
        ['Early Medical Abortion (EMA) — telemedicine', 'Up to 9+6 weeks (sometimes 10+0)', 'Mifepristone 200 mg PO day 1; misoprostol 800 mcg sublingually/vaginally 24–48 hours later at home; telemedicine consultation now widely available (post-COVID)', 'No surgery; avoids GA risk; can be done at home; telemedicine pathway (Pills by post) accessible', 'Bleeding and cramping at home; some pass pregnancy in toilet; emergency visit if heavy bleeding or fever'],
        ['Medical Abortion (clinic-based)', 'Up to 23+6 weeks', 'Same mifepristone + misoprostol sequence but with closer monitoring; repeated doses of misoprostol for later gestations; in-clinic for gestations >10 weeks', 'Appropriate for later gestations or complications; in-person support', 'Increasingly intense process at later gestations; induction-like labour at >16 weeks'],
        ['Surgical — Manual Vacuum Aspiration (MVA)', 'Up to 14 weeks', 'Local anaesthetic; suction aspiration of pregnancy under LA; usually takes 5–10 minutes; no GA needed', 'Quick; can be done under LA avoiding GA risks; low complication rate', 'Requires visit to clinic; some discomfort under LA'],
        ['Surgical — Electric Vacuum Aspiration (EVA)', 'Up to 14 weeks', 'Standard suction aspiration under general anaesthetic (GA) or LA; most common surgical method', 'Quick, reliable, effective', 'GA risks; bleeding, infection, uterine perforation (rare <1%)'],
        ['Surgical — D&E (Dilatation and Evacuation)', '14–23+6 weeks', 'Surgical procedure; requires cervical preparation with mifepristone and/or osmotic dilators; technically demanding; specialist centres only', 'Available for later gestations when medical TOP not preferred', 'Requires experienced surgeon; available at fewer centres; higher complication rate at later gestations'],
      ],
      caption: 'BPAS and MSI offer the full range of methods. Choice depends on gestation, patient preference, medical history, and provider availability. Medical abortion by telemedicine (Pills by Post) increased access significantly during and after COVID-19.',
    },

    { type: 'heading', level: 2, text: 'Post-Procedure Care and Complications' },

    {
      type: 'list',
      items: [
        'Bleeding: moderate bleeding for 1–2 weeks is normal after medical or surgical TOP; heavier than a normal period is expected; sanitary towels preferred (no tampons for 2 weeks)',
        'Pain: ibuprofen 400–600 mg TDS ± co-codamol for cramping; usually settles within 24–48 hours',
        'Infection: risk ~1–2%; symptoms: fever >38°C, offensive discharge, increasing pain, prolonged bleeding >3 weeks; assess with bimanual exam and swabs; treat with doxycycline 100 mg BD + metronidazole 400 mg TDS for 7 days',
        'Retained products (RPOC): suspect if continued bleeding, pain, or positive pregnancy test at 3 weeks; pelvic USS; may need surgical evacuation (MVA or ERPC)',
        'Incomplete abortion: medical TOP failure rate ~2–5% — BPAS arranges follow-up USS and further management',
        'Follow-up pregnancy test: advise routine pregnancy test at 3 weeks post-medical TOP to confirm success',
      ],
    },

    { type: 'heading', level: 2, text: 'Contraception at Time of TOP' },

    {
      type: 'list',
      items: [
        'Fertility returns immediately after TOP — patients can conceive within 2 weeks',
        'LARC can be fitted at time of surgical TOP (IUS/IUD immediately post-procedure); implant can be inserted on same day as or day after medical TOP',
        'COCP or POP can be started same day (medical) or day of surgical procedure',
        'Injectable (Depo-Provera): can be given at time of TOP',
        'Discuss contraception at every TOP consultation — BPAS counsellors address this; GP can follow up at post-procedure review',
      ],
    },

    { type: 'heading', level: 2, text: 'Special Situations' },

    {
      type: 'list',
      items: [
        'Under-16s: Gillick/Fraser competence assessment; involve parents if patient agrees; safeguarding referral if coercion or abuse suspected; under-13s MUST be referred to children\'s services regardless',
        'RhD status: BPAS/provider will check; anti-D immunoglobulin required if RhD negative and gestation ≥10 weeks (surgical) or ≥10 weeks (medical) — 500 IU IM',
        'Second-trimester TOP (>14 weeks): usually for fetal anomaly or late presentation; managed at specialist centres; significant psychological support needed; involve bereavement counsellor',
        'Fetal anomaly: ground E; BPAS and BPAS-linked centres; genetic counselling and post-procedure autopsy should be offered',
        'Coercion/trafficking: MUST NOT proceed without assessment; refer to MARAC if DV, or MASH if trafficking suspected',
        'Teratogenic drug exposure: if requesting TOP due to teratogenic drug exposure — document and support; UKTIS (www.uktis.org) has up-to-date teratogen information',
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Emotional Wellbeing and Support',
      items: [
        'Most women do NOT experience long-term mental health problems after TOP — the evidence does NOT support a "post-abortion syndrome" as a distinct disorder',
        'Women at higher risk of psychological distress post-TOP: pre-existing mental health condition, lack of social support, coercion, second-trimester or anomaly TOP',
        'Offer: BPAS post-abortion counselling (included in BPAS care); community mental health via GP if needed',
        'Support resources: BPAS counselling helpline; ARC (Antenatal Results and Choices) for fetal anomaly; Tommy\'s for pregnancy loss',
        'Document: date patient directed to self-refer; any safeguarding concerns; follow-up offered',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'BPAS Self-Referral', url: 'https://www.bpas.org/make-a-referral/' },
        { label: 'MSI Reproductive Choices', url: 'https://www.msichoices.org.uk/' },
        { label: 'NICE CKS — Unintended Pregnancy', url: 'https://cks.nice.org.uk/topics/unintended-pregnancy/' },
        { label: 'ARC — Antenatal Results and Choices', url: 'https://www.arc-uk.org/' },
        { label: 'UKTIS — Teratogen Information', url: 'https://www.uktis.org/' },
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Access — Darwin Practice, Lichfield',
      items: [
        'BPAS: nearest clinic — Coventry or Birmingham; telemedicine (Pills by Post) available for <10 weeks; bpas.org or 03457 30 40 30',
        'MSI Reproductive Choices: msiuk.org; 0345 300 8090; Birmingham centre available',
        'If GP conscientious objection: patient must be informed and directed to BPAS/MSI without delay; document in records',
        'Post-procedure follow-up at Darwin Practice: offer at 2–4 weeks for infection screening, contraception review, and emotional support check',
        'Safeguarding: Staffordshire MASH 0800 1313 126; MARAC referral via practice safeguarding lead if DV suspected',
      ],
    },
  ],
}
