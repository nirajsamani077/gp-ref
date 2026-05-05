import type { Note } from '../data/notes'

export const migraine: Note = {
  id: 'migraine',
  title: 'Migraine — Diagnosis & Management',
  subtitle: 'Acute treatment, prophylaxis, menstrual migraine, COCP interaction and referral',
  tags: ['neurology', 'headache'],

  body: 'migraine diagnosis acute treatment prophylaxis triptan sumatriptan zolmitriptan naratriptan frovatriptan ibuprofen aspirin paracetamol metoclopramide prochlorperazine propranolol topiramate amitriptyline candesartan riboflavin B2 CGRP monoclonal antibody botox MOH medication overuse headache aura visual hemiplegic vestibular menstrual COCP contraception pregnancy chronic migraine episodic headache diary ABCD2 red flags thunderclap thunderclap SAH',

  content: [

    // ── DIAGNOSIS ─────────────────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'info',
      title: 'Migraine Diagnostic Criteria (IHS)',
      items: [
        '≥5 attacks lasting 4–72 hours',
        'At least 2 of: unilateral / throbbing / severe / limits normal activity',
        'At least 1 of: nausea/vomiting OR photophobia AND phonophobia',
        'Not attributed to another disorder',
        'Episodic = <15 headache days/month; Chronic = ≥15 days/month for ≥3 months, of which ≥8 are migraine',
        'Children: often bilateral, shorter duration, prominent GI upset (abdominal migraine variant)',
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Red Flags — Do Not Miss',
      items: [
        'Thunderclap headache (worst ever, sudden onset) — exclude SAH: urgent CT head',
        'New headache in >50 years, immunocompromised, or known malignancy',
        'Progressive worsening pattern without symptom-free intervals',
        'Headache with fever, stiff neck, rash — exclude meningitis',
        'Neurological deficit lasting >1 hour in aura (suggest stroke, not migraine)',
        'First headache with exertion, cough, or sexual activity',
        'Papilloedema on fundoscopy — raised ICP',
      ],
    },

    // ── AURA ──────────────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Aura' },

    {
      type: 'list',
      items: [
        'Occurs in 25% of migraineurs — positive (flashing lights, zigzag) or negative (visual field loss, numbness)',
        'Duration: 5–60 minutes (maximum 1 hour), fully reversible — visual / sensory / motor / speech / vestibular',
        'Aura usually precedes headache but can occur without headache',
        'Take acute medication at the START of the headache phase — NOT during aura (less effective)',
        'Atypical aura → refer to headache clinic: hemiplegic aura, diplopia, loss of consciousness, prolonged aura (>1hr)',
        'Sudden onset severe headache with neurological deficit → treat as stroke / SAH until proven otherwise',
      ],
    },

    // ── ACUTE TREATMENT ───────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Acute Treatment' },

    {
      type: 'table',
      headers: ['Step', 'Drug', 'Dose', 'Notes'],
      rows: [
        ['1st line', 'Ibuprofen', '400–600 mg at headache onset', 'NSAID — most effective simple analgesic for migraine; take early'],
        ['1st line alt', 'Aspirin', '900 mg at headache onset', 'Effective but causes more GI side effects'],
        ['2nd line', 'Sumatriptan', '50–100 mg oral; 10 mg intranasal (children and rapid onset)', 'Triptan — works for ~2/3 of headaches. Common SE: chest tightness, flushing, tingling. C/I in CVD, uncontrolled hypertension (check BP first)'],
        ['2nd line alt triptans', 'Zolmitriptan / Rizatriptan / Eletriptan / Almotriptan / Naratriptan', 'Varies by drug', 'If sumatriptan fails, try alternative triptan — different route or formulation (nasal, wafer)'],
        ['Antiemetic (add-on)', 'Metoclopramide 10 mg OR Prochlorperazine 10 mg', 'At onset of nausea', 'Improves GI motility and analgesic absorption; also useful for vestibular migraine'],
        ['Combination', 'Triptan + NSAID together', 'Especially for severe or slow-to-respond attacks', 'Evidence for sumatriptan + naproxen combination'],
      ],
      caption: 'Medication Overuse Headache (MOH) risk: if using acute medication >2 days/week for >3 months, headache may become chronic and medications less effective. Keep a headache diary. Caffeine, alcohol, hormones, SSRIs, PPIs can all trigger migraine.',
    },

    // ── PROPHYLAXIS ───────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Prophylaxis — When and What to Use' },

    {
      type: 'callout',
      variant: 'info',
      title: 'When to Start Prophylaxis',
      items: [
        'Frequency >1 migraine/week, severe impact on quality of life, or frequent disabling attacks',
        'Using acute medication >2×/week (risk of MOH)',
        'Attacks refractory to acute treatment',
        'Goal: halve attack frequency, not total eradication',
        'Review every 4–8 weeks when titrating; may take same time to see improvement',
        'Aim to withdraw after 6–12 months of stability',
      ],
    },

    {
      type: 'table',
      headers: ['Drug', 'Dose', 'Cautions / Notes'],
      rows: [
        ['Propranolol', '80–160 mg/day (divided doses or LA)', 'First choice — AVOID in asthma; caution in DM (masks hypoglycaemia), depression'],
        ['Topiramate', '50–100 mg/day (titrate slowly)', 'Effective but cognitive side effects ("Dopamax"). AVOID in women of childbearing age (teratogenic) and depression'],
        ['Amitriptyline', '30–50 mg nocte (start 10 mg)', 'Warn about sedation — useful if comorbid insomnia or tension headache. Not first-line if depression (preferably TCAs)'],
        ['Candesartan', '16 mg/day', 'Off-licence but good evidence; useful in women of childbearing age (NOT in pregnancy); caution in renal impairment'],
        ['Riboflavin (Vitamin B2)', '400 mg/day', 'NICE-approved; minimal side effects; safe in pregnancy and children — suitable first-line for those preferring non-pharmacological'],
        ['Non-pharmacological', 'Mindfulness, CBT, acupuncture', 'Evidence comparable with drugs; consider alongside medication'],
      ],
      caption: 'If 3 prophylactics failed at highest tolerated dose for ≥3 months each, refer to headache clinic for: CGRP monoclonal antibodies (erenumab, fremanezumab, galcanezumab), botulinum toxin type A (chronic migraine ≥15 days/month), flunarizine, sodium valproate (male >55y only due to MHRA restrictions).',
    },

    // ── MENSTRUAL MIGRAINE ────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Menstrual Migraine' },

    {
      type: 'list',
      items: [
        'Keep a headache diary for ≥3 cycles to confirm menstrual link',
        'Menstrual migraine (MM): only around menses; Menstrually-related migraine (MRM): also at other times',
        'Caused by oestrogen drop before menstruation',
        'Pure menstrual migraine: try mini-prophylaxis — start 2 days before period, continue 3 days after period starts (5 days total)',
        'Mini-prophylaxis options: Frovatriptan 2.5 mg BD, Zolmitriptan 2.5 mg TDS, or Naratriptan 2.5 mg BD',
        'Use mini-prophylaxis triptans ONLY around menstruation — using at other times risks MOH',
        'Continuous COCP or transdermal oestrogen supplementation in the pill-free interval may prevent oestrogen drop',
      ],
    },

    // ── COCP & CONTRACEPTION ─────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'warning',
      title: 'Migraine and Contraception / HRT',
      items: [
        'Migraine WITH aura + COCP = UKMEC 4 (absolute contraindication) — greatly increased ischaemic stroke risk',
        'Migraine WITHOUT aura = UKMEC 2 — COCP can be used with caution',
        'If last aura >5 years ago = UKMEC 3 — discuss risk vs benefit carefully',
        'HRT: NOT contraindicated with any type of migraine; transdermal oestrogen is preferred over oral (lower ischaemic stroke risk)',
        'Progestogen-only methods (implant, Mirena, Depo-Provera, POP) are safe in all types of migraine',
      ],
    },

    // ── MIGRAINE IN PREGNANCY ─────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'warning',
      title: 'Migraine in Pregnancy',
      items: [
        'Migraine often improves in pregnancy (especially from 2nd trimester) — consider withdrawing prophylaxis before conception',
        'Migraine with aura may worsen in early pregnancy — seek specialist advice',
        'Safe in pregnancy: paracetamol (first-line for all trimesters)',
        'NSAIDs (ibuprofen): can be used up to 28 weeks but avoid after 28 weeks (risk premature closure of ductus arteriosus)',
        'Sumatriptan: limited data but widely used if benefit outweighs risk (may carry small preterm labour risk)',
        'Always consider: pre-eclampsia and cerebral venous sinus thrombosis (CVST) as differentials — check BP and urine at every visit',
        'Most prophylactics are not safe in pregnancy — specialist review advised',
      ],
    },

    // ── VESTIBULAR MIGRAINE ───────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Vestibular Migraine' },

    {
      type: 'list',
      items: [
        'History of migraine + episodic vestibular symptoms (vertigo, imbalance, dizziness) without red flags',
        'Treat acute episodes: vestibular suppressants (prochlorperazine/stemitil), zolmitriptan has best evidence for acute vestibular migraine',
        'Prophylaxis: use standard migraine prophylaxis as above',
        'Vestibular rehabilitation (physio) also beneficial',
        'Refer if first attack of vestibular symptoms with neurological signs — exclude posterior fossa lesion (CT/MRI)',
      ],
    },

    // ── REFERRAL ──────────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'When to Refer to Headache Clinic / Neurology' },

    {
      type: 'table',
      headers: ['Indication', 'Action'],
      rows: [
        ['Red flag headache (thunderclap, progressive, focal neurology)', 'Urgent CT head ± LP; consider same-day assessment'],
        ['Atypical aura (hemiplegic, diplopia, LOC, prolonged aura)', 'Refer headache clinic — exclude structural pathology'],
        ['Failed ≥3 prophylactics at maximum tolerated dose', 'Headache clinic — consider CGRP MAbs, botox, specialist drugs'],
        ['Chronic migraine (≥15 headache days/month) with functional impairment', 'Headache clinic — botulinum toxin type A (NHS approved for ≥15 days/month with ≥8 migraine days)'],
        ['MOH confirmed — failing withdrawal attempt', 'Headache clinic — supervised withdrawal programme'],
        ['Migraine in pregnancy requiring specialist advice', 'Neurology / obstetric medicine'],
      ],
    },

    // ── LOCAL REFERRAL ───────────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'Headache / neurology: New Cross Hospital, Wolverhampton (Royal Wolverhampton NHS Trust) — primary neurology referral for South Staffordshire',
        'Alternative: UHDB Queen\'s Hospital Burton (general neurology)',
        'CGRP MAb initiation: specialist headache clinic — refer to New Cross neurology via e-RS',
        'Botulinum toxin for chronic migraine: specialist headache clinic at New Cross — needs ≥15 headache days/month confirmed',
        'Patient may prefer alternative local site — discuss at consultation',
        'Urgent CT head: UHDB Burton A&E or direct GP-requested CT head via radiology (check local pathway)',
      ],
    },

    // ── SAFETY NETTING ───────────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'danger',
      title: 'Safety Netting — When to Act Urgently',
      items: [
        '999 / A&E: thunderclap headache (worst ever), headache with fever + stiff neck + rash, new focal neurological deficit, sudden visual loss, headache after head trauma',
        'NHS 111 / same-day GP: first-ever severe headache, headache worsening over days, headache in immunocompromised patient, headache unresponsive to all analgesia',
        'Red flags for urgent review: change in character of usual migraine, new headache >50 years, progressive pattern, headache on waking',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Migraine', url: 'https://cks.nice.org.uk/topics/migraine/' },
        { label: 'NICE NG193 — Headaches', url: 'https://www.nice.org.uk/guidance/ng193' },
        { label: 'Migraine Trust', url: 'https://migrainetrust.org/' },
        { label: 'BASH — UK Headache Guidelines', url: 'https://www.bash.org.uk/guidelines/' },
        { label: 'NHS — Migraine', url: 'https://www.nhs.uk/conditions/migraine/' },
        { label: 'Headache diary (Migraine Trust)', url: 'https://migrainetrust.org/live-with-migraine/healthcare/keeping-a-migraine-diary/' },
      ],
    },
  ],
}
