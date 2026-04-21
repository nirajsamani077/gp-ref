import type { Note } from '../data/notes'

export const allergicReactions: Note = {
  id: 'allergic-reactions',
  title: 'Allergic Reactions & Anaphylaxis',
  subtitle: 'Food allergy, oral allergy syndrome, drug reactions, urticaria, angioedema and anaphylaxis management',
  tags: ['allergy', 'immunology'],

  body: 'allergic reaction anaphylaxis adrenaline epinephrine epipen emerade jext autoinjector auto-injector food allergy IgE non-IgE mediated RAST skin prick test SPT peanut tree nut egg milk dairy CMPA cow milk protein allergy oral allergy syndrome OAS pollen food syndrome hayfever allergic rhinitis birch grass ragweed urticaria hives wheals angioedema drug reaction penicillin amoxicillin yellow card morbilliform rash antihistamine chlorphenamine cetirizine loratadine hydrocortisone biphasic allergy clinic referral ACE inhibitor C1 inhibitor hereditary angioedema omalizumab desensitisation oral immunotherapy',

  content: [

    // ── CLASSIFICATION ────────────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'info',
      title: 'IgE vs Non-IgE Mediated — Key Distinction',
      items: [
        'IgE-mediated (immediate): onset within minutes — urticaria, angioedema, bronchospasm, anaphylaxis; diagnosed by skin prick test (SPT) or specific IgE RAST',
        'Non-IgE-mediated (delayed): onset hours to days — atopic eczema, reflux, constipation, poor growth; diagnosed by 6-week elimination then re-challenge',
        'Mixed (both): atopic eczema can have both IgE and non-IgE components',
      ],
    },

    // ── FOOD ALLERGY ──────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Food Allergy' },

    {
      type: 'table',
      headers: ['Feature', 'IgE-Mediated', 'Non-IgE-Mediated'],
      rows: [
        ['Onset', 'Within minutes', 'Hours to days'],
        ['Typical symptoms', 'Urticaria, angioedema, vomiting, anaphylaxis', 'Eczema flare, reflux, colic, constipation, faltering growth'],
        ['Diagnosis', 'SPT or specific IgE RAST', '6-week dietary elimination then re-challenge'],
        ['Referral', 'Paediatric allergy clinic', 'Dietitian ± paediatric allergy clinic if uncertain'],
        ['CMPA: formula-fed', 'Extensively hydrolysed or amino acid formula', 'Extensively hydrolysed or amino acid formula'],
        ['CMPA: breastfed', 'Maternal dairy exclusion + dietitian', 'Maternal dairy exclusion + dietitian'],
      ],
      caption: 'CMPA = cow\'s milk protein allergy — the most common non-IgE food allergy in infants',
    },

    {
      type: 'list',
      items: [
        'Refer to paediatric allergy clinic if IgE-mediated features — SPT and IgE RAST for suspected causative foods',
        'If non-IgE mediated: 6-week elimination then structured reintroduce; refer dietitian; no need to test acutely',
        '14 major allergens must be declared on food labels: milk, eggs, fish, shellfish, tree nuts, peanuts, wheat, soy, sesame, celery, mustard, lupin, molluscs, sulphites',
      ],
    },

    { type: 'heading', level: 3, text: 'Peanut Allergy — Prevention & Treatment' },

    {
      type: 'list',
      items: [
        'Introduce peanut at weaning (6 months) — early sustained oral exposure is strongly protective against allergy developing',
        'Infants with eczema: introduce at 4 months — eczema impairs the skin barrier allowing sensitisation; early oral exposure before significant sensitisation prevents allergy',
        'Strong family history of peanut allergy: consider referral for allergy assessment before introduction',
        'Oral immunotherapy (OIT): can desensitise up to 50% of peanut-allergic patients but carries significant anaphylaxis risk during treatment — specialist setting only',
      ],
    },

    // ── ORAL ALLERGY SYNDROME ─────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Oral Allergy Syndrome (Pollen-Food Syndrome)' },

    {
      type: 'image',
      src: '/images/oral-allergy-syndrome-chart-thumbnail.jpg',
      alt: 'Oral allergy syndrome infographic showing foods cross-reactive with birch, ragweed and grass pollens',
      caption: 'OAS is caused by cross-reactive IgE antibodies recognising similar proteins in pollens and raw plant foods. The proteins are heat-labile — cooking destroys them.',
    },

    {
      type: 'callout',
      variant: 'info',
      title: 'Diagnosis — all three required:',
      items: [
        'History of hayfever (seasonal allergic rhinitis)',
        'Rapid onset oropharyngeal symptoms (itching, tingling, mild swelling of lips/mouth/tongue) within minutes of eating a raw plant-based food',
        'Symptoms with raw form only — cooking or heating eliminates symptoms (heat-labile proteins)',
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'These features rule OAS out — investigate further:',
      items: [
        'Tree nuts (cashew, walnut, Brazil nut), banana, kiwi, melon causing symptoms — these cause true IgE-mediated allergy independent of pollen; refer for formal allergy testing',
        'Cooked food still causes symptoms — not OAS',
        'Any systemic features (urticaria beyond the mouth, vomiting, breathing difficulty, dizziness, collapse) — not OAS; consider anaphylaxis',
      ],
    },

    {
      type: 'table',
      headers: ['Sensitising Pollen', 'Cross-Reactive Foods'],
      rows: [
        ['Birch (commonest in UK)', 'Apple, pear, cherry, peach, plum, apricot, almond, hazelnut, carrot, celery, potato, parsley'],
        ['Grass', 'Tomato, potato, peach, celery, melon, orange, wheat'],
        ['Ragweed / mugwort', 'Cucumber, melon, courgette, banana, sunflower seeds, celery, carrot'],
      ],
      caption: 'Most patients can tolerate these foods when cooked — encourage cooking as a practical management strategy',
    },

    {
      type: 'list',
      items: [
        'Clinical diagnosis — no investigation required if classic features with clear hayfever history',
        'No hayfever history: check IgE RAST to birch and grass pollen to confirm pollen sensitisation',
        'Management: avoid raw trigger foods, or cook/heat them; antihistamine (e.g. cetirizine) taken before eating can reduce symptoms',
        'Symptoms usually self-limiting within an hour; rarely progresses to systemic reaction',
        'Refer for allergy testing (SPT, specific IgE RAST) if diagnosis uncertain, systemic features, or nuts/banana/kiwi involved',
        'BSACI pollen-food syndrome patient leaflet available for self-management',
      ],
    },

    // ── DRUG ALLERGY ──────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Drug Allergy & Adverse Drug Reactions' },

    {
      type: 'table',
      headers: ['Type', 'Features', 'Action'],
      rows: [
        ['Immunological (true allergy)', 'Urticaria, angioedema, anaphylaxis, morbilliform rash', 'Report Yellow Card; document clearly; generally avoid drug; refer allergy clinic if high-stakes drug needed'],
        ['Morbilliform/viral rash', 'Maculopapular rash, often with amoxicillin during viral illness (esp. EBV)', 'Not a contraindication to future penicillin; document "morbilliform rash with concurrent illness — not confirmed allergy"'],
        ['Non-immunological side effect', 'Known pharmacological effect (myalgia with statins, GI upset with NSAIDs, thrush with steroids)', 'Not a true allergy; consider restarting depending on clinical need and risk-benefit'],
        ['Type IV delayed hypersensitivity', 'Contact dermatitis, maculopapular rash 1–2 weeks after starting drug', 'Stop drug; patch testing if rechallenge is required'],
      ],
    },

    {
      type: 'list',
      items: [
        'Report all serious adverse drug reactions via MHRA Yellow Card (yellowcard.mhra.gov.uk)',
        'Penicillin allergy label: ~80–90% of patients labelled penicillin allergic are not truly allergic — leads to use of broader-spectrum, more toxic and expensive antibiotics; consider de-labelling referral to allergy clinic',
        'Amoxicillin + EBV (infectious mononucleosis): almost universal morbilliform rash — not penicillin allergy; avoid amoxicillin in undifferentiated sore throat until glandular fever excluded',
      ],
    },

    // ── URTICARIA & ANGIOEDEMA ────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Urticaria & Angioedema' },

    {
      type: 'image',
      src: '/images/Urticaria-w-and-f.jpg',
      alt: 'Urticaria wheals — erythematous, raised, itchy plaques on skin',
      caption: 'Urticaria: transient, itchy wheals that blanch on pressure and resolve within 24 hours without bruising. Angioedema is deeper swelling of the dermis/subcutis — often face, lips, tongue and throat.',
    },

    {
      type: 'image',
      src: '/images/Allergy-png4-scaled.png',
      alt: 'NHS angioedema and urticaria management algorithm',
      caption: 'Angioedema algorithm: determine if allergen-induced (IgE-mediated) vs ACE inhibitor–induced (bradykinin-mediated) vs spontaneous. Urticaria without angioedema: identify trigger and treat with antihistamines.',
    },

    {
      type: 'table',
      headers: ['Type', 'Key Features', 'Management'],
      rows: [
        ['Allergen-induced (IgE)', 'Food, drug, insect sting, latex; rapid onset; urticaria ± angioedema', 'Identify & avoid trigger; antihistamine; prescribe AAI if anaphylaxis risk; refer allergy clinic'],
        ['Acute spontaneous (viral)', 'Often in children; following viral illness; resolves in days', 'Non-sedating antihistamine (cetirizine / loratadine); self-limiting'],
        ['Chronic spontaneous (>6 wks)', 'Often autoimmune/idiopathic; no clear trigger', 'Regular non-sedating antihistamine up to 4× daily dose; if refractory refer dermatology/immunology for omalizumab'],
        ['ACE inhibitor angioedema', 'Bradykinin-mediated; no urticaria; may occur years after starting ACEi', 'Stop ACE inhibitor; switch to ARB (lower risk but not zero); resolves within days–weeks'],
        ['Hereditary angioedema', 'Episodic; no urticaria; family history; C1 inhibitor deficiency', 'Refer immunology; C1 inhibitor concentrate / icatibant for acute attacks; do not respond to adrenaline or antihistamines'],
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Angioedema — Airway Assessment',
      items: [
        'Lip and facial swelling without airway involvement: oral antihistamine ± short course prednisolone 40 mg for 3 days',
        'Tongue or throat involvement, voice change, stridor, drooling: imminent airway compromise — treat as anaphylaxis, 999 immediately',
        'ACE inhibitor–induced: stop drug; adrenaline and antihistamines have limited effect on bradykinin-mediated swelling',
        'Hereditary angioedema (C1 inhibitor deficiency): no urticaria, episodic, family history — does not respond to adrenaline or antihistamines; refer urgently to immunology',
      ],
    },

    { type: 'heading', level: 3, text: 'Antihistamine Doses' },

    {
      type: 'table',
      headers: ['Drug', 'Age / Weight', 'Dose & Formulation', 'Frequency'],
      rows: [
        // ── Sedating ──
        ['Chlorphenamine 2 mg/5 ml oral solution (sedating)', '1 month – 2 years', '2.5 ml (1 mg)', 'Up to twice daily (unlicensed <1 yr)'],
        ['Chlorphenamine 2 mg/5 ml oral solution (sedating)', '2 – 6 years', '2.5 ml (1 mg)', 'Every 4–6 hours, max 6 doses/24 h'],
        ['Chlorphenamine 2 mg/5 ml oral solution (sedating)', '6 – 12 years', '5 ml (2 mg)', 'Every 4–6 hours, max 6 doses/24 h'],
        ['Chlorphenamine 4 mg tablets (sedating)', '>12 years / adult', '1 tablet (4 mg)', 'Every 4–6 hours, max 6 tablets/day'],
        // ── Non-sedating ──
        ['Loratadine 5 mg/5 ml oral solution (non-sedating)', '2 – 11 years, <31 kg', '5 ml (5 mg)', 'Once daily'],
        ['Loratadine 5 mg/5 ml oral solution (non-sedating)', '2 – 11 years, ≥31 kg', '10 ml (10 mg)', 'Once daily'],
        ['Loratadine 10 mg tablets (non-sedating)', '>12 years / adult', '1 tablet (10 mg)', 'Once daily'],
        ['Cetirizine 5 mg/5 ml oral solution (non-sedating)', '2 – 6 years', '2.5 ml (2.5 mg)', 'Twice daily (unlicensed <2 yr)'],
        ['Cetirizine 5 mg/5 ml oral solution (non-sedating)', '6 – 12 years', '5 ml (5 mg)', 'Once or twice daily'],
        ['Cetirizine 10 mg tablets (non-sedating)', '>12 years / adult', '1 tablet (10 mg)', 'Once daily'],
        // ── Fexofenadine ──
        ['Fexofenadine 30 mg tablets (non-sedating)', '6 – 11 years', '1 tablet (30 mg)', 'Twice daily'],
        ['Fexofenadine 120 mg tablets (non-sedating)', '>12 years / adult', '1 tablet (120 mg)', 'Once daily — allergic rhinitis'],
        ['Fexofenadine 180 mg tablets (non-sedating)', '>12 years / adult', '1 tablet (180 mg)', 'Once daily — urticaria'],
      ],
      caption: 'For chronic urticaria non-sedating antihistamines (loratadine, cetirizine, fexofenadine) are preferred. Dose can be increased up to 4× the standard dose in refractory chronic urticaria before stepping up to specialist review. Chlorphenamine is useful acutely (faster onset) but causes sedation — avoid in school-age children during school hours.',
    },

    // ── ANAPHYLAXIS ───────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Anaphylaxis' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Recognition — sudden onset of ≥2 systems (or severe single-system after known allergen):',
      items: [
        'Airway: throat tightness, stridor, difficulty swallowing, hoarse voice, drooling',
        'Breathing: wheeze, bronchospasm, increased respiratory rate, cyanosis, SpO₂ drop',
        'Circulation: hypotension, tachycardia, pallor, syncope, cardiac arrest',
        'Skin / mucosal: urticaria, erythema, angioedema — present in ~80%; absence does NOT exclude anaphylaxis',
        'Other: severe GI symptoms (cramping, vomiting), confusion, sense of impending doom',
      ],
    },

    { type: 'heading', level: 3, text: 'Immediate Management' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Call 999 immediately — then:',
      items: [
        '1. Position: lie flat with legs elevated (anaphylaxis); sit up if respiratory distress predominates; flat if in cardiac arrest',
        '2. Adrenaline IM 1:1000 (1 mg/ml) — anterolateral thigh, middle third, through clothing if necessary',
        '3. Repeat adrenaline after 5 minutes if no improvement — do not delay second dose',
        '4. High-flow oxygen if available (15 L/min via non-rebreathe mask)',
        '5. IV access: fluid challenge 500 ml 0.9% NaCl (adult) if hypotensive',
        '6. Chlorphenamine IM/IV and hydrocortisone IM/IV — second-line only; never delay adrenaline for these',
      ],
    },

    {
      type: 'table',
      headers: ['Patient', 'IM Adrenaline Dose', 'Volume of 1:1000'],
      rows: [
        ['Adult / child >12 years', '500 mcg (0.5 mg)', '0.5 ml'],
        ['Child 6–12 years', '300 mcg (0.3 mg)', '0.3 ml'],
        ['Child 6 months – 6 years', '150 mcg (0.15 mg)', '0.15 ml'],
        ['Cardiac arrest (IV only)', '1 mg', '1 ml of 1:1000'],
      ],
      caption: 'Always use 1:1000 adrenaline (1 mg/ml) for IM injection. Anterolateral thigh only — fastest absorption.',
    },

    { type: 'heading', level: 3, text: 'Observation & Follow-Up' },

    {
      type: 'list',
      items: [
        'All anaphylaxis: minimum 6 hours monitoring in hospital for biphasic reaction (recurrence without re-exposure, occurs in ~5%)',
        'Abbreviated 2-hour obs acceptable only if: single dose of adrenaline gave good response AND no high-risk features (severe asthma, unknown trigger, delayed presentation, previous severe biphasic)',
        'Extend to >12 hours if: severe/protracted reaction, severe asthma co-morbidity, previous severe biphasic, nighttime presentation, remote from emergency care',
        'All patients: refer to allergy clinic — allergen identification, written management plan, auto-injector training',
      ],
    },

    { type: 'heading', level: 3, text: 'Adrenaline Auto-Injectors (AAI)' },

    {
      type: 'image',
      src: '/images/epipen-technique.jpeg',
      alt: 'Three-step EpiPen technique: pull blue cap, press orange end to outer thigh, hold 3 seconds',
      caption: 'EpiPen technique: (1) Form fist and pull off blue safety cap. (2) Press orange tip firmly against outer mid-thigh — can be used through clothing. (3) Push down hard until click is heard or felt; hold 3 seconds, then remove.',
    },

    {
      type: 'table',
      headers: ['Device', 'Available Doses'],
      rows: [
        ['EpiPen / EpiPen Jr', '150 mcg (Jr), 300 mcg'],
        ['Emerade', '150 mcg, 300 mcg, 500 mcg'],
        ['Jext', '150 mcg, 300 mcg'],
      ],
      caption: 'Emerade 500 mcg is the only device offering the full adult dose — consider for higher-risk adults',
    },

    { type: 'heading', level: 3, text: 'How Many to Prescribe' },

    {
      type: 'table',
      headers: ['Setting', 'Quantity', 'Rationale'],
      rows: [
        ['Adults (no school-age dependants)', '2 pens', 'Carry both at all times — one may misfire or be unavailable; second dose may be needed if no response after 5 min'],
        ['School-age child', '4 pens (2 + 2)', '2 to carry on their person (bag/kit); 2 to be kept at school/nursery under an Individual Healthcare Plan (IHP)'],
        ['Child at nursery', '4 pens (2 + 2)', '2 to carry; 2 held by nursery staff — essential as young children cannot self-administer'],
        ['Child transitioning to secondary school', '4 pens (2 + 2)', 'Secondary school pupils may self-carry; school still requires a spare set on site'],
      ],
      caption: 'Prescribe on FP10. Schools are permitted to hold AAIs under Medicines in Schools guidance — ensure IHP is completed.',
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'Practical prescribing tips',
      items: [
        'Dose by weight: <15 kg → 150 mcg pen; ≥15 kg → 300 mcg; adults → 300 mcg (or 500 mcg Emerade if higher risk)',
        'Be pragmatic about quantity — the goal is 2 pens on their person at all times; patients should carry their pens with them rather than leaving one set at home and one at work',
        'For school-age children: prescribe 4 total; write a covering letter / complete school IHP so the school set is held safely and staff are trained',
        'AAIs expire (check date) — most last 12–18 months; prescribe replacement before expiry; some CCGs/ICBs have a repeat prescription protocol',
        'Provide written anaphylaxis action plan (BSACI or Anaphylaxis UK template) and ensure patient, family, and school/work contacts are all trained',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'BSACI — Anaphylaxis', url: 'https://www.bsaci.org/guidelines/bsaci-guidelines/anaphylaxis/' },
        { label: 'Anaphylaxis UK Action Plan', url: 'https://www.anaphylaxis.org.uk/living-with-anaphylaxis/action-plans/' },
        { label: 'NICE CKS — Anaphylaxis', url: 'https://cks.nice.org.uk/topics/anaphylaxis/' },
        { label: 'NICE CKS — Urticaria', url: 'https://cks.nice.org.uk/topics/urticaria/' },
      ],
    },

  ],
}
