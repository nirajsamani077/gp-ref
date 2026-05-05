import type { Note } from '../data/notes'

export const anaphylaxis: Note = {
  id: 'anaphylaxis',
  title: 'Anaphylaxis & Severe Allergic Reactions',
  subtitle: 'Recognition, immediate management, adrenaline dosing and allergy referral',
  tags: ['allergy', 'urgent'],

  body: 'anaphylaxis adrenaline epinephrine autoinjector EpiPen Emerade Jext IM intramuscular 1:1000 biphasic reaction allergy clinic antihistamine chlorphenamine hydrocortisone urticaria angioedema stridor bronchospasm hypotension A-E resuscitation tryptase mast cell food allergy nut bee wasp venom drug allergy latex',

  content: [
    {
      type: 'callout',
      variant: 'danger',
      title: 'Anaphylaxis — Immediate Management (A-E)',
      items: [
        '1. CALL 999 — all anaphylaxis requires hospital assessment even if improving',
        '2. Lie patient flat with legs raised (shock position); if breathless sit up; if pregnant tilt left',
        '3. Adrenaline (epinephrine) 1:1000 IM — anterolateral thigh, through clothing if necessary',
        '4. Repeat adrenaline after 5 minutes if no improvement',
        '5. Oxygen high-flow (15 L/min via non-rebreathe mask if available)',
        '6. IV access — fluids if available and trained',
        '7. Monitor closely — risk of biphasic reaction up to 12 hours after initial event',
      ],
    },

    { type: 'heading', level: 2, text: 'Adrenaline Doses — IM Anterolateral Thigh' },

    {
      type: 'table',
      headers: ['Age / Weight', 'Dose', 'Volume (1:1000 = 1 mg/mL)'],
      rows: [
        ['Adult / child >12 years', '500 mcg (0.5 mg)', '0.5 mL'],
        ['Child 6–12 years', '300 mcg (0.3 mg)', '0.3 mL'],
        ['Child <6 years (>15 kg)', '150 mcg (0.15 mg)', '0.15 mL'],
        ['Child <6 years (<15 kg)', '150 mcg (0.15 mg)', '0.15 mL — use 150 mcg autoinjector'],
      ],
      caption: 'Always use IM route — anterolateral thigh preferred (better absorption than deltoid). If no improvement after 5 minutes, repeat same dose. IV adrenaline is specialist-only (risk of arrhythmia).',
    },

    { type: 'heading', level: 2, text: 'Recognising Anaphylaxis' },

    {
      type: 'list',
      items: [
        'Anaphylaxis is likely when: sudden onset of rapidly progressing illness with EITHER airway (throat tightening, stridor, hoarse voice) OR breathing (wheeze, severe SOB, respiratory arrest) OR circulation (pallor, tachycardia, hypotension, loss of consciousness)',
        'Usually but NOT always: associated with skin/mucosal changes (urticaria, angioedema, flushing)',
        'Common triggers: food (peanuts, tree nuts, milk, egg, shellfish, fish), insect venom (bee/wasp), drugs (penicillin, aspirin/NSAIDs, contrast media, biologics, latex)',
        'Skin signs alone (urticaria without airway/breathing/circulation involvement) = allergic reaction, NOT anaphylaxis — treat with antihistamine ± steroid, does not require adrenaline or hospital usually',
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'After Acute Episode — Hospital Management Includes',
      items: [
        'All anaphylaxis: minimum 6-hour observation for biphasic response (second wave of anaphylaxis 1–12 hours later, usually less severe)',
        'Secondary drugs (not first-line): chlorphenamine 10 mg IM/IV AND hydrocortisone 200 mg IM/IV — treat sequalae, not immediate anaphylaxis; do NOT delay adrenaline for antihistamines',
        'Serum tryptase: ideally 1–2 hours after reaction (mast cell marker); confirms mast cell activation; baseline sample at 24h or follow-up for comparison',
        'Discharge with 2× adrenaline autoinjectors and ACTION PLAN — prescribed from hospital or GP follow-up',
        'Referral to allergy clinic: all confirmed anaphylaxis — within 4–12 weeks',
      ],
    },

    { type: 'heading', level: 2, text: 'Adrenaline Autoinjectors' },

    {
      type: 'table',
      headers: ['Device', 'Doses Available', 'Key Points'],
      rows: [
        ['EpiPen', '300 mcg (adult), 150 mcg (junior <30 kg)', 'Needle deploys on press; remove after 10 seconds; trainer available'],
        ['Emerade', '150 mcg, 300 mcg, 500 mcg', '500 mcg option for adults ≥60 kg; longer needle; similar technique to EpiPen'],
        ['Jext', '150 mcg, 300 mcg', 'Remove blue cap, press to thigh until click; hold 10 seconds; trainer available'],
      ],
      caption: 'ALWAYS prescribe 2 autoinjectors per patient — carry both at all times (home, school, work, leisure). For children: one at home, one at school. Carry-2 rule applies wherever the patient goes. Check expiry dates regularly. Prescribe 150 mcg pen if <15 kg; 300 mcg if ≥15 kg (or 500 mcg for larger adults — Emerade only).',
    },

    {
      type: 'callout',
      variant: 'info',
      title: 'GP Role After Anaphylaxis',
      items: [
        'Prescribe 2× autoinjectors — appropriate dose for weight',
        'Provide Anaphylaxis UK action plan (anaphylaxis.org.uk) — laminated card with step-by-step instructions',
        'Educate patient and carers/family on: how to recognise anaphylaxis, when and how to use autoinjector, what to do after using (lie down, call 999, second device if no improvement at 5 min)',
        'Medic Alert bracelet: encourage for severe or idiopathic anaphylaxis',
        'Refer to allergy clinic: all cases — RAST testing, oral food challenge, immunotherapy assessment (venom immunotherapy for insect allergy)',
        'Review ALL medications: avoid aspirin/NSAIDs in NSAID-triggered anaphylaxis; caution with beta-blockers (may blunt adrenaline response and worsen anaphylaxis)',
        'Code patient\'s notes — flag allergy clearly on clinical records',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'Allergy clinic: Good Hope Hospital (UHB, Birmingham) — primary allergy referral; also has paediatric allergy service',
        'Alternative: Birmingham Children\'s Hospital (paediatric allergy) or University Hospitals Birmingham — adult allergy',
        'Refer via e-RS to allergy / clinical immunology within 4–12 weeks of confirmed anaphylaxis',
        'Acute management: UHDB Burton A&E (call 999 — do not drive)',
        'Patient may prefer alternative local site — discuss at consultation',
        'Anaphylaxis UK resources: anaphylaxis.org.uk — action plans, school guidance, allergy alert cards',
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Safety Netting',
      items: [
        '999: any anaphylaxis — even if improving after adrenaline (biphasic reaction risk)',
        'All patients discharged after anaphylaxis: use autoinjector if symptoms recur and call 999 immediately',
        'Warn about biphasic: symptoms may return 1–12 hours after initial episode even without further allergen exposure',
        'Do NOT rely on antihistamines alone — they do not treat anaphylaxis',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'Resuscitation Council — Anaphylaxis', url: 'https://www.resus.org.uk/library/additional-guidance/guidance-anaphylaxis' },
        { label: 'NICE CKS — Anaphylaxis', url: 'https://cks.nice.org.uk/topics/anaphylaxis/' },
        { label: 'Anaphylaxis UK', url: 'https://www.anaphylaxis.org.uk/' },
        { label: 'NHS — Anaphylaxis', url: 'https://www.nhs.uk/conditions/anaphylaxis/' },
        { label: 'BSACI — Anaphylaxis Guidelines', url: 'https://www.bsaci.org/professional-resources/resources/guidelines/' },
      ],
    },
  ],
}
