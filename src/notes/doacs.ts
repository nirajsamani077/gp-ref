import type { Note } from '../data/notes'

export const doacs: Note = {
  id: 'doacs',
  title: 'DOACs (Direct Oral Anticoagulants)',
  subtitle: 'Apixaban, rivaroxaban, edoxaban and dabigatran: dosing, renal adjustment and reversal',
  tags: ['cardiology', 'prescribing'],

  body: 'DOAC direct oral anticoagulant apixaban Eliquis rivaroxaban Xarelto edoxaban Lixiana dabigatran Pradaxa warfarin AF atrial fibrillation VTE venous thromboembolism stroke prevention Cockroft-Gault CrCl creatinine clearance renal dose adjustment Ondexxya idarucizumab Praxbind reversal agent antidote bleeding drug interaction NSAID amiodarone fluconazole prosthetic valve antiphospholipid syndrome',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'DOACs — Key Principles',
      items: [
        'First-line anticoagulation for AF (stroke prevention) and VTE treatment/prevention in most patients',
        'DO NOT use in: mechanical prosthetic heart valves or antiphospholipid syndrome — use warfarin in both',
        'Renal function: check CrCl using Cockroft-Gault formula (NOT eGFR) — DOACs are renally excreted and accumulate in renal failure; eGFR is affected by muscle mass and may be inaccurate',
        'Check FBC, U&E, LFT before starting; recheck annually (or 3–6 monthly if elderly)',
        'DOACs are generally contraindicated in significant liver disease (Child-Pugh B/C)',
        'No routine INR monitoring required — but compliance is critical (especially once-daily dosing due to short half-life)',
      ],
    },

    { type: 'heading', level: 2, text: 'DOAC Dosing by Drug' },

    {
      type: 'table',
      headers: ['Drug', 'AF Dose', 'VTE Dose', 'Dose Reduction', 'Antidote', 'Avoid If'],
      rows: [
        ['Apixaban (Eliquis)', '5 mg BD (standard)', 'First 7d: 10 mg BD; then 5 mg BD maintenance', '2.5 mg BD if ≥2 of: age >80, weight <60 kg, creatinine >133', 'Ondexxya (andexanet alfa)', 'CrCl <15; severe liver disease'],
        ['Rivaroxaban (Xarelto)', '20 mg OD with evening meal', 'First 21d: 15 mg BD; then 20 mg OD', '15 mg OD if CrCl 15–49', 'Ondexxya', 'CrCl <15; severe liver disease'],
        ['Edoxaban (Lixiana)', '60 mg OD', 'After ≥5 days of LMWH: 60 mg OD', '30 mg OD if CrCl 15–50, weight <60 kg, or on erythromycin/azoles', 'No approved antidote', 'CrCl <15; CrCl >95 (paradoxically reduced efficacy in AF at high CrCl); severe liver disease'],
        ['Dabigatran (Pradaxa)', '150 mg BD (or 110 mg BD if age >80 or verapamil)', 'After ≥5 days LMWH: 150 mg BD', '110 mg BD if age >80; consider 110 mg if >75 or high bleeding risk', 'Idarucizumab (Praxbind)', 'CrCl <30; severe liver disease'],
      ],
      caption: 'All are Factor Xa inhibitors EXCEPT dabigatran, which is a direct thrombin (Factor IIa) inhibitor. Apixaban (BD dosing) has the most safety data; missed doses less catastrophic than once-daily agents due to longer half-life.',
    },

    { type: 'heading', level: 2, text: 'Drug Interactions' },

    {
      type: 'list',
      items: [
        'Increased bleeding risk: NSAIDs, aspirin/antiplatelet agents — add PPI if concurrent use unavoidable',
        'Increased DOAC levels (caution): amiodarone, fluconazole, ketoconazole, dronedarone, verapamil (with dabigatran specifically), erythromycin',
        'Reduced DOAC levels (risk of thrombosis): rifampicin, carbamazepine, phenytoin, St John\'s Wort, phenobarbitone — avoid if possible; if essential, consider warfarin instead',
        'Rivaroxaban + aspirin: licensed combination for secondary prevention of CVD in symptomatic PVD or high-risk IHD (age >65 with risk factors) — rivaroxaban 2.5 mg BD + aspirin 75 mg OD',
      ],
    },

    { type: 'heading', level: 2, text: 'Reversal in Bleeding or Emergency Surgery' },

    {
      type: 'table',
      headers: ['Drug', 'Reversal Agent', 'Notes'],
      rows: [
        ['Apixaban / Rivaroxaban', 'Ondexxya (andexanet alfa)', 'Licensed specific reversal; administered IV in hospital; very expensive'],
        ['Dabigatran', 'Idarucizumab (Praxbind)', 'Monoclonal antibody; rapid and complete reversal; IV in hospital'],
        ['Edoxaban', 'No approved antidote', 'Ondexxya available off-label; supportive care, activated charcoal if recent ingestion, consider PCC (prothrombin complex concentrate)'],
        ['All DOACs (emergency surgery)', 'Prothrombin Complex Concentrate (PCC)', 'Non-specific; used if specific antidote not available; discuss with haematology'],
      ],
      caption: 'For life-threatening bleeding: call 999, admit urgently, and contact haematology on call. For elective surgery: most DOACs can be stopped 24–48 hours before (48–72 hours for dabigatran if renal impairment). No bridging required in most cases.',
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Common Pitfalls',
      items: [
        'Using eGFR instead of Cockroft-Gault for dose calculation: eGFR may underestimate clearance in elderly/low muscle mass → use CG formula on BNF/MDCalc',
        'Edoxaban in high CrCl (>95 mL/min) in AF: paradoxically less effective — apixaban or rivaroxaban preferred',
        'Starting DOAC without checking renal function: accumulation risk in unrecognised renal impairment',
        'Compliance: once-daily agents (edoxaban, rivaroxaban) more affected by missed doses — counsel patients carefully',
        'DOAC in liver disease: affects drug metabolism AND clotting factor production — even small doses can cause significant bleeding; warfarin with INR monitoring may be safer in compensated liver disease',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'Anticoagulation queries: UHDB Burton Anticoagulation Service — for complex cases (renal impairment, drug interactions, switching)',
        'Cardiology (AF management): Good Hope Hospital (UHB) cardiology or New Cross Hospital, Wolverhampton via e-RS',
        'Haematology (complex VTE, antiphospholipid syndrome, recurrent VTE): UHDB Burton or QEHB Birmingham',
        'Prescribing support: Staffordshire Formulary — refer to Medicines Management for local guidance on DOAC choice preferences',
        'Patient information: Anticoagulation UK (anticoagulationuk.org) — excellent patient-facing resources',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG196 — Anticoagulation (VTE)', url: 'https://www.nice.org.uk/guidance/ng196' },
        { label: 'NICE NG158 — Atrial Fibrillation', url: 'https://www.nice.org.uk/guidance/ng158' },
        { label: 'BNF — Anticoagulants', url: 'https://bnf.nice.org.uk/treatment-summaries/anticoagulation-oral/' },
        { label: 'Anticoagulation UK', url: 'https://www.anticoagulationuk.org/' },
        { label: 'MDCalc — Cockroft-Gault', url: 'https://www.mdcalc.com/calc/43/creatinine-clearance-cockcroft-gault-equation' },
      ],
    },
  ],
}
