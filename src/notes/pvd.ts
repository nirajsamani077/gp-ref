import type { Note } from '../data/notes'

export const pvd: Note = {
  id: 'pvd',
  title: 'Peripheral Vascular Disease (PVD)',
  subtitle: 'Intermittent claudication, critical limb ischaemia, acute limb ischaemia, ABPI, secondary prevention',
  tags: ['vascular', 'cardiology'],

  body: 'peripheral vascular disease PVD PAD peripheral arterial disease intermittent claudication critical limb ischaemia acute limb ischaemia 6Ps pain pallor pulseless paralysis paraesthesia cold ABPI ankle brachial pressure index Doppler duplex ultrasound angioplasty stent bypass clopidogrel atorvastatin smoking diabetes secondary prevention naftidrofuryl oxalate Buergers test arterial ulcer gangrene',

  content: [

    {
      type: 'callout',
      variant: 'danger',
      title: 'Acute Limb Ischaemia — 999, Time Critical',
      items: [
        'The 6 Ps: Pain (severe, sudden onset), Pallor, Pulseless (no DP/PT pulse), Paralysis (cannot move foot/toes), Paraesthesia (numbness/tingling), Perishingly cold',
        'Complete arterial occlusion — thrombus on plaque or embolism from cardiac source (AF, MI, prosthetic valve)',
        'Embolic typically more acute onset and pain; thrombotic may have pre-existing claudication',
        'Call 999 immediately — vascular surgery needed within 6 hours to save the limb; beyond this, irreversible ischaemia',
        'Do not apply heat, do not elevate the limb (worsens ischaemia), protect with soft padding',
      ],
    },

    { type: 'heading', level: 2, text: 'Clinical Spectrum of PVD' },

    {
      type: 'table',
      headers: ['Stage', 'Symptoms', 'Action'],
      rows: [
        ['Asymptomatic', 'Abnormal ABPI or duplex USS; no symptoms — often found incidentally or on screening', 'Secondary prevention; no intervention needed unless deteriorates'],
        ['Intermittent claudication (IC)', 'Predictable, reproducible leg, buttock or hip pain on walking a consistent distance; relieves within minutes of rest; no rest pain', 'Examine; supervised exercise programme; secondary prevention; refer vascular for duplex USS ± consideration of intervention'],
        ['Critical limb ischaemia (CLI)', 'Rest pain (typically worse at night — hanging foot over bed edge relieves slightly); tissue loss (arterial ulcers, gangrene, necrosis)', 'Same-day urgent referral to vascular surgery — high risk of amputation'],
        ['Acute limb ischaemia (ALI)', '6 Ps: see above — sudden onset', '999 — vascular surgical emergency'],
      ],
    },

    { type: 'heading', level: 2, text: 'Risk Factors' },

    {
      type: 'list',
      items: [
        'Smoking: single biggest risk factor — cessation is the most effective intervention in PVD',
        'Diabetes mellitus: microvascular and macrovascular disease combine; poor wound healing; high amputation risk',
        'Hypertension, dyslipidaemia, obesity, physical inactivity — standard cardiovascular risk factors',
        'Buerger\'s disease (thromboangiitis obliterans): rare, young male smokers, involves small/medium vessels, also affects upper limbs — must stop smoking completely',
      ],
    },

    { type: 'heading', level: 2, text: 'Vascular Examination' },

    {
      type: 'list',
      items: [
        'Peripheral pulses: DP (dorsalis pedis) and PT (posterior tibial) — document presence/absence; use handheld Doppler if pulse impalpable',
        'Skin: temperature (cool distally), colour (pallor at rest, dusky/cyanotic), trophic changes (hair loss, thickened nails, dry skin), tissue loss (ulcers, gangrene)',
        'Arterial ulcers: punched-out, painful, pale or necrotic base; located on pressure points (toe tips, heels, malleoli) — distinguished from venous ulcers (shallow, sloughy, above medial malleolus, less painful)',
        'Buerger\'s test: patient supine, elevate both legs to 45° — if ischaemia present, leg turns white/pale within 30 seconds; lower leg below bed level — reactive hyperaemia causes deep red/"sunset foot" flushing = Buerger\'s positive — indicates critical ischaemia',
        'Capillary refill: >2 seconds suggests reduced perfusion',
        'Listen for femoral, aortic, iliac bruits',
      ],
    },

    { type: 'heading', level: 2, text: 'ABPI — Ankle Brachial Pressure Index' },

    {
      type: 'callout',
      variant: 'info',
      title: 'How to Measure ABPI',
      items: [
        'Patient lying supine, rested for 5 minutes',
        'Measure BP manually (or with Doppler) in both arms — use highest brachial SBP as denominator',
        'Measure SBP at both PT and DP using handheld Doppler — use highest ankle pressure as numerator',
        'ABPI = Highest ankle SBP ÷ Highest brachial SBP',
        '>1.0: Normal (note: falsely elevated in DM/calcified vessels — use Toe-Brachial Index instead)',
        '0.8–1.0: Mild PVD or borderline — assess clinically; supervised exercise; secondary prevention',
        '<0.8: Significant PVD — refer to vascular; do NOT apply compression bandaging',
        '<0.5: Critical ischaemia — urgent vascular referral; absolute contraindication to compression',
      ],
    },

    { type: 'heading', level: 2, text: 'Investigations' },

    {
      type: 'list',
      items: [
        'ABPI (as above) — first-line non-invasive test',
        'Duplex ultrasound: visualises stenosis or occlusion; maps lesion for potential intervention planning',
        'CT angiography / MR angiography: pre-operative planning; not routinely in primary care',
        'Bloods: FBC (anaemia), U&E, LFT, fasting glucose / HbA1c, lipid profile, clotting (if anticoagulation planned)',
        'Wound swab: if tissue loss or ulceration — culture for infection',
        'ECG: AF or ischaemia (cardiac source of embolus in ALI)',
      ],
    },

    { type: 'heading', level: 2, text: 'Management' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Secondary Prevention — Mandatory in All PVD Patients',
      items: [
        'Smoking cessation: most important single intervention — stops progression and reduces amputation risk',
        'Antiplatelet: clopidogrel 75 mg OD (preferred over aspirin in symptomatic PVD — CAPRIE trial)',
        'Statin: atorvastatin 80 mg OD — reduces cardiovascular events (MI, stroke) and improves walking distance',
        'Antihypertensive: target BP <140/90 (avoid beta-blockers if severe claudication — may worsen symptoms)',
        'HbA1c: optimise in diabetes; strict glycaemic control reduces progression',
        'PVD patients have a very high cardiovascular risk — primary cause of death is MI or stroke, not limb loss',
      ],
    },

    { type: 'heading', level: 2, text: 'Exercise and Pharmacological Treatment (Claudication)' },

    {
      type: 'list',
      items: [
        'Supervised exercise programme: 2 hours/week for ≥3 months — gold standard first-line treatment for claudication; improves walking distance by >100%; refer via GP-prescribed programme or vascular physiotherapy',
        'Naftidrofuryl oxalate 100–200 mg TDS: peripheral vasodilator; licensed for claudication if exercise fails or not possible; review at 3–6 months and stop if no symptomatic improvement — only drug with reasonable evidence in claudication',
        'Cilostazol (phosphodiesterase inhibitor): used in some centres — limited availability; contraindicated in heart failure',
        'Endovascular intervention (angioplasty ± stent): considered by vascular surgeon if exercise programme fails and lifestyle significantly impaired — better for short iliac/femoral lesions; less durable in longer occlusions',
        'Surgical bypass (femoral-popliteal, aorto-bifemoral): for complex multilevel disease or failed angioplasty; high operative risk in this patient group',
      ],
    },

    { type: 'heading', level: 2, text: 'Diabetic Foot and PVD' },

    {
      type: 'para',
      text: 'Diabetes combines neuropathy (reduces sensation of ischaemia — painless ulcers) with macrovascular disease — both markedly increase amputation risk. ABPI may be falsely elevated due to arterial calcification. All diabetic patients with foot ulcers or symptoms of PVD should be seen by the diabetic foot MDT within 24 hours (infected ulcer) or urgently (non-infected). See Diabetic Foot note for full management.',
    },

  ],
}
