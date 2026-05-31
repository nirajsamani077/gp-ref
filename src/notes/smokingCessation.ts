import type { Note } from '../data/notes'

export const smokingCessation: Note = {
  id: 'smoking-cessation',
  title: 'Smoking Cessation',
  subtitle: 'Brief intervention, NRT, varenicline, bupropion, e-cigarettes, pregnancy and special populations',
  tags: ['lifestyle', 'respiratory'],

  body: 'smoking cessation nicotine replacement therapy NRT patch gum lozenge inhalator spray varenicline bupropion e-cigarette vaping carbon monoxide CO test FRAMES brief intervention stop smoking service NHS Smokefree AUDIT screen pregnancy harm reduction COPD CVD cancer addiction dependence Fagerström',

  content: [

    { type: 'heading', level: 2, text: 'Why Smoking Cessation Matters' },

    {
      type: 'list',
      items: [
        '~1 in 6 UK adults smoke — rates falling but smoking remains the single greatest avoidable cause of cancer, CVD and respiratory disease',
        'Single most effective health intervention available — stopping at any age has benefit; stopping before 40 avoids >90% of smoking-attributable mortality risk',
        'Benefits begin within 20 minutes (BP and HR normalise) and continue for years (20 years: risk approaches never-smoker level)',
        'As a GP, even a 30-second "very brief advice" (VBA) to all smokers increases quit rates — always ask, advise, and refer',
      ],
    },

    { type: 'heading', level: 2, text: 'Brief Intervention — FRAMES Model' },

    {
      type: 'table',
      headers: ['Component', 'What to Say / Do'],
      rows: [
        ['Feedback', 'Explain how their smoking is specifically affecting their health (e.g. COPD, blood pressure, wound healing, fertility)'],
        ['Responsibility', '"Only you can make this change — I can help you do it, but it\'s your decision"'],
        ['Advice', '"The best thing you can do for your health right now is to stop smoking. There are very effective treatments I can offer you."'],
        ['Menu', 'Offer a range of options: NRT, prescription medications, stop smoking service, apps, e-cigarettes as harm reduction'],
        ['Empathy', '"I know it\'s not easy — nicotine is as addictive as heroin. Many people need multiple attempts."'],
        ['Self-efficacy', '"Many of my patients have stopped successfully. You can do this, and I\'ll support you."'],
      ],
      caption: 'Very Brief Advice (VBA): Ask, Advise, Act — takes <30 seconds. Full FRAMES model: takes 5–10 minutes. Refer to NHS Stop Smoking Service for structured behavioural support — this doubles quit rates compared to NRT alone.',
    },

    { type: 'heading', level: 2, text: 'Assessing Nicotine Dependence' },

    {
      type: 'list',
      items: [
        'Fagerström Test for Nicotine Dependence (FTND): 6-question validated tool — key questions: time to first cigarette of the day (<30 mins = high dependence) and number of cigarettes per day (>20/day = high dependence)',
        'Simple screen: "How soon after waking do you smoke your first cigarette?" — within 30 minutes indicates high dependence; requires higher-dose NRT',
        'Carbon monoxide (CO) breathalyser: >7 ppm = active smoker; validates current smoking status; useful for pregnancy and motivation; provides objective feedback for the patient',
        'Address ambivalence: use motivational interviewing — explore pros and cons, elicit the patient\'s own reasons for change, respect autonomy',
      ],
    },

    { type: 'heading', level: 2, text: 'Nicotine Replacement Therapy (NRT)' },

    {
      type: 'callout',
      variant: 'info',
      title: 'NRT Prescribing Principles',
      items: [
        'Start 1–2 weeks before the quit date — reduces cravings before the target stop date',
        'Prescribe enough to last until 2 weeks after the quit date (typically 6–8 weeks total, some patients need 12 weeks)',
        'Combination NRT is significantly more effective than single form: patch (long-acting background) + short-acting form (gum, spray, lozenge) for cravings',
        'Review at 2 and 4 weeks post-quit — most relapse in the first 2 weeks; reinforce, adjust dose or form if needed',
        'NRT is safe in stable CVD; caution in immediate post-MI period or severe arrhythmia (use lower dose)',
        'NRT in pregnancy: first-line if behavioural support has failed; intermittent forms (gum, lozenge) preferred; avoid 24-hour patches (intermittent exposure better than continuous)',
      ],
    },

    {
      type: 'table',
      headers: ['NRT Form', 'Dose (Typical)', 'Notes'],
      rows: [
        ['Patch (24h or 16h)', '21 mg → 14 mg → 7 mg (step down every 2–4 weeks)', 'Best for background craving; 16h preferred if morning cravings not an issue (less vivid dreams); apply to dry hairless skin, rotate site'],
        ['Gum', '2 mg (light smokers) or 4 mg (heavy or early morning) — max 15 pieces/day', '"Chew and park" technique — do not chew continuously; acidic drinks reduce absorption — avoid 15 mins before/during'],
        ['Lozenge', '1.5 mg or 4 mg — max 15/day', 'Let dissolve under tongue; avoid eating/drinking 15 mins before'],
        ['Inhalator (inhaler)', '10 mg cartridge — 6–12 cartridges/day', 'Addresses oral habit/hand-to-mouth fixation; less effective in cold weather'],
        ['Mouth spray', '1 mg/actuation — 1–2 sprays when cravings occur, max 64 sprays/day', 'Fastest onset; useful for sudden intense cravings'],
        ['Nasal spray', '0.5 mg/nostril — max 64 doses/day', 'Fastest nicotine delivery; can cause nasal irritation'],
      ],
      caption: 'Combination NRT (patch + short-acting) is more effective than monotherapy. Check BNF/EMC for exact doses rather than relying on memory — doses vary by product and dependence level.',
    },

    { type: 'heading', level: 2, text: 'Prescription Pharmacotherapy' },

    {
      type: 'table',
      headers: ['Drug', 'Mechanism', 'Prescribing Notes', 'Key Cautions'],
      rows: [
        ['Varenicline (Champix)', 'Partial nicotinic receptor agonist — reduces pleasure from smoking and withdrawal symptoms', 'NOT CURRENTLY AVAILABLE IN UK (worldwide supply issues); if available: 0.5 mg OD for 3 days → 0.5 mg BD for 4 days → 1 mg BD for 12 weeks; start 1–2 weeks before quit date', 'Monitor for mood changes, depression, suicidal ideation — counsel patient; not recommended in severe renal impairment'],
        ['Bupropion (Zyban)', 'Noradrenaline/dopamine reuptake inhibitor + nicotinic receptor antagonist', '150 mg OD for 3 days → 150 mg BD for 7–9 weeks; start 1–2 weeks before quit date', 'CONTRAINDICATED if history of seizures, eating disorder, bipolar disorder, or CNS tumour; lowers seizure threshold; avoid MAOIs; adults only'],
      ],
      caption: 'Varenicline has the best evidence of all pharmacotherapies for cessation — quit rates ~3x placebo. Bupropion approximately doubles quit rates. Both are superior to NRT monotherapy but NRT + behavioural support remains first line whilst varenicline is unavailable.',
    },

    { type: 'heading', level: 2, text: 'E-Cigarettes (Vaping)' },

    {
      type: 'list',
      items: [
        'E-cigarettes are NOT licensed medicines but NHS recommends them as an option for harm reduction in adult smokers',
        'Contain nicotine but NOT the carcinogenic tars and carbon monoxide in tobacco — significantly less harmful than smoking (evidence still emerging for long-term effects)',
        'Better for cessation than NRT in some trials — Cochrane review shows moderate-certainty evidence of benefit',
        'Advise to choose regulated products (MHRA-notified); avoid illegal products, especially those containing vitamin E acetate (associated with EVALI)',
        'Encourage transition from cigarettes to vaping then ideally vaping to nicotine-free/complete cessation',
        'Do NOT encourage non-smokers to start vaping — only appropriate as a step-down for current smokers',
        'Long-term data still limited — advise patients of this honestly',
      ],
    },

    { type: 'heading', level: 2, text: 'Smoking in Pregnancy' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Pregnancy — Priority for Cessation',
      items: [
        'Screen with CO breathalyser at booking — CO >7 ppm confirms active smoking; refer immediately to stop smoking midwife/service',
        'Smoking in pregnancy: IUGR, preterm birth, stillbirth, SIDS, placental abruption, cleft palate',
        'First-line: intensive behavioural support (stop smoking in pregnancy service)',
        'If behavioural support insufficient: NRT — intermittent forms (gum/lozenge) preferred; 16h patches may be used; benefit of stopping outweighs theoretical NRT risk',
        'Bupropion and varenicline: NOT routinely recommended in pregnancy',
        'Carbon monoxide monitoring at each antenatal contact if smoking — motivational tool and objective marker',
      ],
    },

    { type: 'heading', level: 2, text: 'Contextual Factors and Addressing Barriers' },

    {
      type: 'list',
      items: [
        'Socioeconomic: higher smoking rates in lower-income groups, manual occupations, unemployed — address practical barriers; prescriptions free for NRT on NHS',
        'Household smoking: partner/family members smoking increases relapse risk — engage household members together',
        'Cultural factors: certain communities have higher rates; use culturally appropriate resources',
        'Mental health: smoking rates up to 3x higher in severe mental illness; nicotine has complex interactions with psychiatric medications (alters levels of clozapine, olanzapine, haloperidol — doses may need adjusting on cessation); cessation still recommended but monitor mental state',
        'Alcohol: strongly associated — address drinking habits alongside smoking; CAGE/AUDIT-C screen',
        'Stress: many use smoking as stress relief — provide alternative strategies (exercise, mindfulness)',
      ],
    },

    { type: 'heading', level: 2, text: 'NHS Stop Smoking Services' },

    {
      type: 'list',
      items: [
        'NHS Stop Smoking Services: GP referral or self-referral — provide intensive behavioural support over 8–12 weeks',
        'Group or individual sessions available; typically 4x more successful than unassisted quit attempt',
        'SmokeFree app (NHS): free; quit date tracker, craving management, progress and savings calculator',
        'Text message service (Smokefree): structured SMS programme',
        'Local pharmacy: many pharmacies provide a stop smoking service with NRT supply under NHS',
        'GP can prescribe NRT on FP10 (except gum and patches now available OTC at low cost — some patients prefer NHS prescription)',
      ],
    },

  ],
}
