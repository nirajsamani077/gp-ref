import type { Note } from '../data/notes'

export const doacs: Note = {
  id: 'doacs',
  title: 'DOACs (Direct Oral Anticoagulants)',
  subtitle: 'Apixaban, rivaroxaban, edoxaban and dabigatran: dosing, renal adjustment, monitoring and reversal',
  tags: ['cardiology', 'prescribing'],

  body: 'DOAC direct oral anticoagulant apixaban Eliquis rivaroxaban Xarelto edoxaban Lixiana dabigatran Pradaxa warfarin AF atrial fibrillation VTE venous thromboembolism DVT PE stroke prevention Cockroft-Gault CrCl creatinine clearance renal dose adjustment Ondexxya idarucizumab Praxbind andexanet alfa reversal agent antidote bleeding drug interaction NSAID amiodarone fluconazole prosthetic valve antiphospholipid syndrome peri-operative bridging switching monitoring annual review liver disease pregnancy',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'DOACs — Key Principles',
      items: [
        'First-line anticoagulation for AF (stroke prevention) and VTE treatment/prevention in most patients — preferred over warfarin for non-valvular AF',
        'DO NOT use in: mechanical prosthetic heart valves OR antiphospholipid syndrome (especially triple-positive) — use warfarin in both',
        'Renal function: use Cockroft-Gault formula (NOT eGFR) to calculate CrCl — DOACs are renally excreted; eGFR (CKD-EPI) underestimates clearance in elderly/low muscle mass',
        'Check FBC, U&E, creatinine, LFT before starting; monitor annually (or 3–6 monthly if elderly or CrCl 30–60)',
        'DOACs are contraindicated in significant liver disease (Child-Pugh B/C) — clotting factors already impaired',
        'No routine INR monitoring required — but compliance is critical; missed doses significantly increase stroke risk, especially for once-daily agents',
      ],
    },

    { type: 'heading', level: 2, text: 'DOAC Dosing by Drug' },

    {
      type: 'table',
      headers: ['Drug', 'AF Dose', 'VTE Dose', 'Dose Reduction Criteria', 'Antidote', 'Contraindicated If'],
      rows: [
        ['Apixaban (Eliquis)', '5 mg BD (standard)', '10 mg BD for first 7 days; then 5 mg BD (maintenance)', 'Reduce to 2.5 mg BD if ≥2 of: age ≥80, weight ≤60 kg, creatinine ≥133 μmol/L', 'Ondexxya (andexanet alfa)', 'CrCl <15; Child-Pugh B/C liver disease'],
        ['Rivaroxaban (Xarelto)', '20 mg OD with EVENING MEAL (food essential for absorption)', '15 mg BD for first 21 days; then 20 mg OD', '15 mg OD if CrCl 15–49 (AF only)', 'Ondexxya', 'CrCl <15; Child-Pugh B/C liver disease'],
        ['Edoxaban (Lixiana)', '60 mg OD', 'After ≥5 days of LMWH: 60 mg OD', '30 mg OD if any of: CrCl 15–50, weight ≤60 kg, on erythromycin or azole antifungals', 'No approved antidote (Ondexxya off-label)', 'CrCl <15 or CrCl >95 (paradoxically reduced AF efficacy at high CrCl); Child-Pugh B/C'],
        ['Dabigatran (Pradaxa)', '150 mg BD (standard); or 110 mg BD if age ≥80 or on verapamil', 'After ≥5 days LMWH: 150 mg BD', '110 mg BD: consider if age ≥75, high bleeding risk, gastritis, or CrCl 30–50; avoid if CrCl <30', 'Idarucizumab (Praxbind) — rapid complete reversal', 'CrCl <30; Child-Pugh B/C; P-gp inducers (rifampicin)'],
      ],
      caption: 'Apixaban (BD dosing) has the largest safety dataset and most predictable absorption. All except dabigatran are Factor Xa inhibitors; dabigatran is a direct thrombin inhibitor.',
    },

    { type: 'heading', level: 2, text: 'Drug Interactions' },

    {
      type: 'table',
      headers: ['Interaction Type', 'Drugs', 'Effect & Action'],
      rows: [
        ['Increased bleeding risk', 'NSAIDs, aspirin/antiplatelet agents, SSRIs', 'Additive bleeding risk; add PPI if concurrent use unavoidable; reassess necessity of each drug'],
        ['Increased DOAC levels (bleeding risk)', 'Amiodarone, dronedarone, fluconazole, ketoconazole, clarithromycin, verapamil (dabigatran), erythromycin (edoxaban)', 'Monitor for bleeding; consider dose reduction; avoid ketoconazole/itraconazole with dabigatran'],
        ['Reduced DOAC levels (thrombosis risk)', 'Rifampicin, carbamazepine, phenytoin, phenobarbital, St John\'s Wort, efavirenz', 'Enzyme induction reduces DOAC exposure; consider switching to warfarin with INR monitoring'],
        ['Rivaroxaban + aspirin combination', 'Aspirin 75 mg OD + rivaroxaban 2.5 mg BD', 'Licensed for high-risk IHD/PAD secondary prevention (COMPASS trial); DO NOT use this combination for AF — use standard AF dose'],
      ],
    },

    { type: 'heading', level: 2, text: 'Annual Monitoring Protocol' },

    {
      type: 'list',
      items: [
        'Annual blood tests: U&E + creatinine (Cockroft-Gault CrCl recalculation), FBC, LFT — at minimum annually; more frequently if elderly, unwell, or CrCl <60',
        'The "1/10 rule" for dabigatran: recheck CrCl when ≥1/10 of the patient\'s CrCl age estimate in years (e.g., CrCl 35 mL/min → recheck every 3.5 months)',
        'Adherence review: ask about missed doses; assess for bleeding symptoms (bruising, epistaxis, GI bleeding, haematuria)',
        'HAS-BLED score annually (or when clinical change): reassess bleeding risk; document reason for continuing anticoagulation; review indication (e.g., AF with CHA₂DS₂-VASc = 0 — anticoagulation may not be indicated)',
        'Medication reconciliation: check for new interacting drugs (NSAIDs, antibiotics)',
        'Weight check: if significant weight change → consider whether dose criteria are met (apixaban dose reduction criteria include weight ≤60 kg)',
        'Blood pressure: optimise BP — hypertension increases both stroke and bleeding risk',
      ],
    },

    { type: 'heading', level: 2, text: 'Peri-Operative Management' },

    {
      type: 'table',
      headers: ['Drug', 'Low Bleeding Risk Surgery', 'High Bleeding Risk Surgery', 'Time to Restart'],
      rows: [
        ['Apixaban', 'Stop 24 hours before', 'Stop 48 hours before (72h if CrCl <50)', '12–24 hours post-op when haemostasis achieved'],
        ['Rivaroxaban', 'Stop 24 hours before', 'Stop 48 hours before', '12–24 hours post-op'],
        ['Edoxaban', 'Stop 24 hours before', 'Stop 48 hours before', '12–24 hours post-op'],
        ['Dabigatran', 'Stop 24–48h (CrCl >80) or 48h (CrCl 50–80)', 'Stop 48h (CrCl >80) or 72–96h (CrCl 30–50)', '24–48 hours post-op when haemostasis achieved'],
      ],
      caption: 'NO bridging anticoagulation required in most cases — evidence does not support bridging for DOACs (unlike warfarin). Neuraxial anaesthesia: stop DOAC ≥48h before epidural/spinal; restart ≥12h after removal of catheter. Contact anaesthetist early for elective procedures.',
    },

    { type: 'heading', level: 2, text: 'Switching Between Anticoagulants' },

    {
      type: 'list',
      items: [
        'Warfarin → DOAC: start DOAC when INR falls below the therapeutic range (usually INR <2.0; <3.0 for dabigatran); stop warfarin the night before the first DOAC dose',
        'DOAC → Warfarin: start warfarin while continuing DOAC; check INR 3 days into combined therapy (DOAC inflates INR); stop DOAC when INR ≥2.0 on two consecutive checks ≥24 hours apart',
        'DOAC → DOAC (switching agents): stop one, wait the dosing interval of the first drug, then start the second',
        'LMWH → DOAC: start DOAC instead of the next LMWH dose (do NOT give both)',
        'DOAC → LMWH: start LMWH 12 hours (BD DOAC) or 24 hours (OD DOAC) after last DOAC dose',
        'Never give two anticoagulants simultaneously (unless intentional bridge per above)',
      ],
    },

    { type: 'heading', level: 2, text: 'Reversal in Bleeding or Emergency Surgery' },

    {
      type: 'table',
      headers: ['Drug', 'Reversal Agent', 'Notes'],
      rows: [
        ['Apixaban / Rivaroxaban', 'Andexanet alfa (Ondexxya)', 'Specific Factor Xa reversal; IV in hospital; expensive; recombinant modified Factor Xa decoy'],
        ['Dabigatran', 'Idarucizumab (Praxbind)', 'Humanised monoclonal antibody Fab fragment; rapid and complete reversal within minutes; 5g IV bolus'],
        ['Edoxaban', 'Andexanet alfa (Ondexxya) — off-label or investigational', 'No MHRA-approved specific antidote; Ondexxya used off-label; supportive care, activated charcoal if very recent ingestion (within 2 hours)'],
        ['All DOACs (life-threatening, antidote unavailable)', 'Prothrombin Complex Concentrate (PCC — Beriplex/Octaplex)', 'Non-specific; 25–50 units/kg IV; discuss with haematology on call; tranexamic acid 1g IV if mucosal bleeding'],
      ],
      caption: 'For life-threatening bleeding: call 999, admit urgently, contact haematology on call. For elective surgery: withhold DOAC for appropriate interval; no bridging needed for most procedures.',
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Common Pitfalls to Avoid',
      items: [
        'Using eGFR instead of Cockroft-Gault: eGFR may significantly overestimate renal function in elderly, low muscle mass → use CG on BNF/MDCalc',
        'Edoxaban in high CrCl (>95 mL/min) in AF: paradoxically reduced efficacy at higher CrCl — use apixaban or rivaroxaban instead',
        'Starting DOAC without renal function check: silent CKD causes accumulation and serious bleeding',
        'Missing dose reduction criteria: check at every prescription review (apixaban particularly — age/weight/creatinine criteria)',
        'DOAC in liver disease: even if CrCl is fine, liver disease impairs both drug metabolism AND clotting factor synthesis — combined coagulopathy; warfarin with INR may be safer in compensated cirrhosis (specialist decision)',
        'DOAC in pregnancy: ALL DOACs are contraindicated in pregnancy — use LMWH; if woman becomes pregnant on DOAC, stop immediately and switch',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG196 — Anticoagulation (VTE)', url: 'https://www.nice.org.uk/guidance/ng196' },
        { label: 'NICE NG158 — Atrial Fibrillation', url: 'https://www.nice.org.uk/guidance/ng158' },
        { label: 'BNF — Anticoagulants', url: 'https://bnf.nice.org.uk/treatment-summaries/anticoagulation-oral/' },
        { label: 'MDCalc — Cockroft-Gault', url: 'https://www.mdcalc.com/calc/43/creatinine-clearance-cockcroft-gault-equation' },
        { label: 'Anticoagulation UK', url: 'https://www.anticoagulationuk.org/' },
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'Anticoagulation queries (complex cases, renal impairment, drug interactions, switching): UHDB Burton Anticoagulation Service — advice and guidance available via A&G on e-RS',
        'Cardiology (AF management, CHA₂DS₂-VASc ≥1): Good Hope Hospital (UHB) cardiology or New Cross Hospital Wolverhampton via e-RS',
        'Haematology (complex VTE, antiphospholipid syndrome, recurrent VTE, thrombophilia): UHDB Burton or QEHB Birmingham haematology',
        'Prescribing support: Staffordshire Medicines Management — local formulary preferences for DOAC choice; apixaban is commonly first-line on local formulary',
        'Patient information: Anticoagulation UK (anticoagulationuk.org); NHS anticoagulation patient alert cards (carry with patient)',
      ],
    },
  ],
}
