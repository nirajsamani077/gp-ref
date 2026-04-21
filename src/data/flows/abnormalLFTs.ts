import type { Node, Edge } from '@xyflow/react'
import type { GPOsNodeData, GPOsEdgeData, Flowchart } from '../flowcharts'

// ── Node positions ────────────────────────────────────────────────────────────
// 5 main columns (x centres ≈ 95, 390, 665, 915, 1155)
// plus safety-net column at x ≈ 1450
// y layers: 0 → 140 → 295 → 450 → 600 → 750 → 920 → 1060

const nodes: Node<GPOsNodeData>[] = [

  // ── START ──────────────────────────────────────────────────────────────────
  {
    id: 'start',
    position: { x: 490, y: 0 },
    data: {
      variant: 'start',
      label: 'Abnormal LFTs detected',
      detail: 'Incidental finding on routine bloods, or in the context of symptoms (jaundice, RUQ pain, fatigue, weight loss).\n\nConfirm the result is genuinely abnormal — a single isolated mild rise is common and often transient. Repeat before embarking on a full workup if clinically appropriate.\n\nNormal ranges (lab-dependent): ALT 7–56 IU/L · AST 10–40 IU/L · ALP 44–147 IU/L · GGT <50 IU/L (M), <30 IU/L (F) · Bilirubin <21 μmol/L · Albumin 35–50 g/L.',
    },
  },

  // ── PATTERN RECOGNITION ───────────────────────────────────────────────────
  {
    id: 'pattern',
    position: { x: 440, y: 140 },
    data: {
      variant: 'decision',
      label: 'Classify the pattern of abnormality',
      detail: 'Pattern recognition guides the investigation pathway:\n\n• Hepatocellular: ALT/AST raised disproportionately vs ALP\n• Cholestatic: ALP/GGT raised disproportionately vs ALT\n• Mixed: significant elevation of both components\n• Isolated GGT: GGT alone elevated, ALP/ALT normal\n• Isolated bilirubin: bilirubin raised, all enzymes normal\n\nThe R-ratio helps classify: (ALT ÷ ALT-ULN) ÷ (ALP ÷ ALP-ULN) — >5 = hepatocellular, <2 = cholestatic, 2–5 = mixed.',
    },
  },

  // ── BRANCH HEADERS (y = 295) ──────────────────────────────────────────────
  {
    id: 'hepato',
    position: { x: 0, y: 295 },
    data: {
      variant: 'decision',
      label: 'Hepatocellular pattern',
      detail: 'ALT and/or AST raised more than ALP.\n\nCauses:\n• Alcohol-related liver disease\n• NAFLD/MASLD (fatty liver)\n• Viral hepatitis: HBV, HCV, HAV, HEV, EBV, CMV\n• Drug/toxin-induced (statins, antibiotics, herbal)\n• Autoimmune hepatitis\n• Haemochromatosis\n• Wilson\'s disease (young patients)\n• Coeliac disease\n• Thyroid disease\n• Ischaemic hepatitis ("shock liver")',
    },
  },
  {
    id: 'cholestatic',
    position: { x: 295, y: 295 },
    data: {
      variant: 'decision',
      label: 'Cholestatic pattern',
      detail: 'ALP and/or GGT raised more than ALT/AST.\n\nCauses:\n• Biliary obstruction: gallstones, stricture, pancreatic tumour, cholangiocarcinoma\n• PBC (primary biliary cholangitis)\n• PSC (primary sclerosing cholangitis)\n• Drug-induced cholestasis: co-amoxiclav, flucloxacillin, chlorpromazine — can occur weeks after stopping\n• Intrahepatic cholestasis of pregnancy (ICP)\n• IgG4-related cholangiopathy',
    },
  },
  {
    id: 'mixed',
    position: { x: 570, y: 295 },
    data: {
      variant: 'decision',
      label: 'Mixed pattern',
      detail: 'Significant elevation of both hepatocellular and cholestatic markers.\n\nCauses: acute viral hepatitis (HAV, EBV, CMV), alcoholic hepatitis, drug-induced liver injury (DILI), autoimmune hepatitis, early biliary disease.\n\nInvestigate as per the dominant pattern; USS abdomen is essential in all mixed cases.',
    },
  },
  {
    id: 'ggt',
    position: { x: 810, y: 295 },
    data: {
      variant: 'decision',
      label: 'Isolated GGT elevation',
      detail: 'GGT raised in isolation (ALP and ALT normal).\n\nGGT is a sensitive but non-specific marker. Common causes:\n• Alcohol (even moderate intake significantly raises GGT)\n• Enzyme-inducing drugs: rifampicin, phenytoin, carbamazepine, OCP\n• Fatty liver/NAFLD/metabolic syndrome\n• Thyroid disease\n\nDoes not require urgent action in isolation — but do not ignore.',
    },
  },
  {
    id: 'bili',
    position: { x: 1050, y: 295 },
    data: {
      variant: 'decision',
      label: 'Isolated bilirubin elevation',
      detail: 'Bilirubin raised with all enzymes (ALT, AST, ALP, GGT) within normal limits.\n\nFirst step: determine if unconjugated (indirect/pre-hepatic) or conjugated (direct/hepatic). Request fractionated bilirubin if not automatically reported by the lab.',
    },
  },

  // ── HEPATOCELLULAR BRANCH ────────────────────────────────────────────────
  {
    id: 'hepato-ix',
    position: { x: 0, y: 455 },
    data: {
      variant: 'action',
      label: 'Initial investigations',
      detail: '• Repeat LFTs in 4–6 weeks (confirm persistence)\n• Full alcohol history (AUDIT-C score)\n• Medication review: statins, co-amoxiclav, flucloxacillin, herbal/OTC supplements, NSAIDs — any new medication in last 3 months\n• Viral hepatitis: HBsAg, HCV Ab (+ HCV RNA if Ab positive)\n• Autoimmune: ANA, anti-smooth muscle Ab (ASMA), anti-LKM1, serum IgG\n• Coeliac screen: tTG IgA + total IgA\n• Iron studies: ferritin + transferrin saturation (haemochromatosis if TS >45%)\n• TFTs\n• USS abdomen\n• FBC, albumin, INR (assess synthetic function)',
    },
  },
  {
    id: 'hepato-degree',
    position: { x: 0, y: 610 },
    data: {
      variant: 'decision',
      label: 'Degree and trajectory?',
      detail: 'Classify elevation above upper limit of normal (ULN):\n• Mild: <3× ULN\n• Moderate: 3–10× ULN\n• Severe: >10× ULN → see red flag\n\nTrend matters as much as absolute value — a rising ALT at 2× ULN is more concerning than a stable ALT at 4× ULN.\n\nNote: a single elevated result with clear reversible cause (recent statin, intercurrent illness) may only need a repeat in 4–6 weeks.',
    },
  },
  {
    id: 'hepato-urgent',
    position: { x: -185, y: 760 },
    data: {
      variant: 'urgent',
      label: '>3× ULN or rising → urgent hepatology',
      detail: 'Refer hepatology urgently (within 2–4 weeks, or same-day if symptomatic).\n\nIf jaundice, ascites, encephalopathy, or raised INR → same-day emergency assessment.\n\n2WW referral if malignancy suspected.\n\nMeanwhile:\n• Check INR/PT, albumin, bilirubin (synthetic function)\n• Stop potentially causative medications immediately\n• Do not delay referral to investigate further',
    },
  },
  {
    id: 'hepato-repeat',
    position: { x: 20, y: 760 },
    data: {
      variant: 'monitor',
      label: '<3× ULN, stable, no cause → repeat in 3 months',
      detail: 'Advise lifestyle modifications:\n• Reduce alcohol to ≤14 units/week (ideally 0)\n• Review and stop unnecessary hepatotoxic medications\n• Lose weight if BMI raised (target 10% weight loss)\n\nRepeat LFTs + investigations in 3 months.\n• Normalised → no further action needed\n• Persistent >6 months → refer hepatology\n\nCalculate FIB-4 = (age × AST) ÷ (platelets × √ALT):\n<1.3 = low fibrosis risk · >2.67 = high risk, refer',
    },
  },
  {
    id: 'hepato-alcohol',
    position: { x: 220, y: 760 },
    data: {
      variant: 'action',
      label: 'Alcohol-related → AUDIT-C + brief intervention',
      detail: 'Clues to alcohol aetiology: AST:ALT ratio >2:1, GGT markedly raised, raised MCV, positive alcohol history.\n\nManagement:\n• AUDIT-C at same consultation; brief intervention (IBA)\n• Advise abstinence; repeat LFTs after 4–6 weeks of abstinence — expect significant improvement\n• Refer to alcohol support services (SMART Recovery, local alcohol team)\n• If suspected cirrhosis: check platelets, USS, fibroscan, refer hepatology\n• Refer hepatology if ALT remains >3× ULN despite 4 weeks abstinence',
    },
  },

  // ── CHOLESTATIC BRANCH ───────────────────────────────────────────────────
  {
    id: 'chol-uss',
    position: { x: 290, y: 455 },
    data: {
      variant: 'action',
      label: 'USS abdomen (urgent)',
      detail: 'USS abdomen to exclude biliary obstruction.\n\nLook for:\n• CBD dilatation (>6 mm; >8 mm post-cholecystectomy)\n• Intrahepatic duct dilatation\n• Gallstones in CBD\n• Pancreatic head enlargement or mass\n• Liver lesions\n\nRequest as soon as possible. Arrange same-day USS if patient is jaundiced.',
    },
  },
  {
    id: 'chol-result',
    position: { x: 290, y: 590 },
    data: {
      variant: 'decision',
      label: 'USS result?',
      detail: 'CBD dilatation, intrahepatic duct dilatation, or mass lesion = abnormal → urgent referral.\n\nGallstones alone without duct dilatation may not fully explain a cholestatic picture — further investigation still needed.\n\nA normal USS does not exclude all causes — consider intrahepatic/drug-induced causes.',
    },
  },
  {
    id: 'chol-normal',
    position: { x: 185, y: 730 },
    data: {
      variant: 'action',
      label: 'USS normal → investigate intrahepatic causes',
      detail: 'Consider intrahepatic/drug-induced causes of cholestasis:\n\n• AMA (anti-mitochondrial Ab): if positive → diagnostic of PBC; refer hepatology for ursodeoxycholic acid\n• IgG4 level (IgG4-SC/autoimmune cholangiopathy)\n• Drug review: co-amoxiclav, flucloxacillin — cholestasis can present and persist weeks after stopping\n• Repeat LFTs + USS in 3 months if unexplained\n• Refer hepatology if AMA positive, persistent unexplained cholestasis, or ALP >3× ULN',
    },
  },
  {
    id: 'chol-abnormal',
    position: { x: 410, y: 730 },
    data: {
      variant: 'urgent',
      label: 'USS abnormal → urgent surgical/hepatology referral',
      detail: 'CBD dilatation or mass → urgent surgical/hepatology referral.\n\n• MRCP or EUS as next investigation for biliary anatomy\n• If pancreatic head mass or cholangiocarcinoma suspected → 2WW cancer pathway immediately — do not wait\n• If obstructive jaundice → same-day emergency assessment\n\nDo not delay referral to investigate further — refer and investigate in parallel.',
    },
  },

  // ── MIXED BRANCH ─────────────────────────────────────────────────────────
  {
    id: 'mixed-ix',
    position: { x: 553, y: 455 },
    data: {
      variant: 'action',
      label: 'Investigate both patterns + USS',
      detail: 'USS abdomen is essential (to exclude obstruction contributing to mixed picture).\n\nBlood tests as per hepatocellular workup:\n• Viral hepatitis screen (HBV, HCV, HAV IgM, EBV, CMV)\n• Autoimmune panel (ANA, ASMA, IgG)\n• Iron studies, coeliac screen\n• Detailed alcohol history + medication review\n\nCheck INR and albumin — if synthetic function impaired or ALT >3× ULN, refer hepatology urgently.\n\nAlcoholic hepatitis and acute viral hepatitis commonly present with mixed pattern.',
    },
  },

  // ── ISOLATED GGT BRANCH ──────────────────────────────────────────────────
  {
    id: 'ggt-ix',
    position: { x: 800, y: 455 },
    data: {
      variant: 'action',
      label: 'Investigate and address cause',
      detail: '• Detailed alcohol history (AUDIT-C)\n• Medication review: enzyme inducers (rifampicin, phenytoin, carbamazepine, CBZ), OCP, antifungals\n• Fasting glucose, HbA1c, lipid profile (metabolic syndrome/NAFLD screen)\n• TFTs (hypothyroidism raises GGT)\n• USS abdomen\n\nNo need for viral hepatitis screen or autoimmune panel for isolated GGT unless other features present.',
    },
  },
  {
    id: 'ggt-reassure',
    position: { x: 710, y: 600 },
    data: {
      variant: 'action',
      label: 'USS normal, alcohol excluded → reassure',
      detail: 'Isolated raised GGT with normal USS, no alcohol, and no causative medication: likely insignificant.\n\nAdvise lifestyle:\n• Reduce/stop alcohol\n• Weight management if BMI raised\n• Cardiovascular risk factor reduction\n\nRepeat LFTs in 6–12 months.\nGGT can be raised in metabolic syndrome — address accordingly.',
    },
  },
  {
    id: 'ggt-nafld',
    position: { x: 940, y: 600 },
    data: {
      variant: 'monitor',
      label: 'Fatty liver / metabolic risk → manage MASLD',
      detail: 'MASLD (metabolic-associated steatotic liver disease) = fatty liver on USS + metabolic risk factors (obesity, T2DM, hypertension, dyslipidaemia).\n\nCalculate FIB-4 = (age × AST) ÷ (platelets × √ALT):\n• <1.3 → low fibrosis risk: lifestyle advice, annual LFTs\n• 1.3–2.67 → intermediate: ELF test or fibroscan\n• >2.67 → high risk: refer hepatology\n\nWeight loss ≥10% can normalise LFTs in MASLD.',
    },
  },

  // ── ISOLATED BILIRUBIN BRANCH ─────────────────────────────────────────────
  {
    id: 'bili-haem',
    position: { x: 1040, y: 455 },
    data: {
      variant: 'action',
      label: 'Haemolysis screen + fractionated bilirubin',
      detail: 'Request:\n• Fractionated bilirubin (conjugated vs unconjugated — if not auto-reported)\n• Reticulocyte count\n• LDH and haptoglobin\n• Blood film (spherocytes, schistocytes, sickle cells)\n• Direct Coombs test (DAT)\n• FBC (haemolytic anaemia, spherocytosis)\n\nAlso consider medications causing haemolysis in G6PD deficiency (primaquine, dapsone, rasburicase).',
    },
  },
  {
    id: 'bili-type',
    position: { x: 1040, y: 600 },
    data: {
      variant: 'decision',
      label: 'Conjugated or unconjugated?',
      detail: 'Unconjugated (indirect) hyperbilirubinaemia:\n→ Pre-hepatic: haemolysis, ineffective erythropoiesis\n→ Impaired conjugation: Gilbert\'s syndrome\n\nConjugated (direct) hyperbilirubinaemia:\n→ Always hepatocellular or biliary\n→ Always requires full investigation\n→ Investigate as per cholestatic pattern',
    },
  },
  {
    id: 'bili-gilbert',
    position: { x: 930, y: 750 },
    data: {
      variant: 'action',
      label: 'Unconjugated + no haemolysis → likely Gilbert\'s',
      detail: 'Gilbert\'s syndrome: benign, common (5–10% of population), hereditary (UGT1A1 promoter variant causing reduced bilirubin conjugation).\n\nBilirubin rises with: fasting, intercurrent illness, exercise, stress, alcohol, surgery — typically <85 μmol/L.\n\nDiagnosis of exclusion: unconjugated hyperbilirubinaemia + normal FBC + no haemolysis + all other LFTs normal + otherwise well patient.\n\nNo treatment needed. Reassure patient — NOT associated with liver disease or reduced life expectancy.',
    },
  },
  {
    id: 'bili-conj',
    position: { x: 1140, y: 750 },
    data: {
      variant: 'urgent',
      label: 'Conjugated → investigate as cholestatic',
      detail: 'Conjugated hyperbilirubinaemia is ALWAYS pathological.\n\nInvestigate as per cholestatic pattern:\n• USS abdomen urgently\n• AMA, drug review, hepatitis screen\n• Refer hepatology if USS normal and cause unclear\n\nDo not reassure — conjugated bilirubin requires full investigation regardless of magnitude.',
    },
  },

  // ── SAFETY NET COLUMN (right side, y aligned with pattern row) ────────────
  {
    id: 'safety-header',
    position: { x: 1370, y: 140 },
    data: {
      variant: 'urgent',
      label: '⚠ Red flags — act at any stage',
      detail: 'These situations require urgent or emergency action regardless of the LFT pattern. Screen for them at every consultation. Do not wait for repeat results if any red flag is present — refer or admit first, investigate in parallel.',
    },
  },
  {
    id: 'safety-cancer',
    position: { x: 1370, y: 320 },
    data: {
      variant: 'urgent',
      label: 'Painless jaundice + weight loss → 2WW',
      detail: '2WW urgent cancer referral for suspected pancreatic cancer, cholangiocarcinoma, or hepatocellular carcinoma.\n\nFeatures: painless progressive jaundice, weight loss ≥5%, anorexia, palpable gallbladder (Courvoisier\'s sign), new-onset diabetes, back pain (pancreatic).\n\nDo not delay for USS — refer now and investigate in parallel.\nPancreatic cancer: <15% 5-year survival; early referral is critical.',
    },
  },
  {
    id: 'safety-alf',
    position: { x: 1370, y: 500 },
    data: {
      variant: 'urgent',
      label: 'Encephalopathy or coagulopathy → 999/same-day admission',
      detail: 'Signs of acute liver failure (ALF):\n• Confusion, asterixis (flapping tremor) — encephalopathy\n• Bruising, prolonged bleeding, INR >1.5 — coagulopathy\n• Rapidly rising jaundice\n• Ascites developing acutely\n\nCall 999 or arrange immediate emergency admission.\nDo NOT manage in primary care.\n\nALF has high mortality — early ITU/transplant centre involvement is critical.\nCommon causes: paracetamol OD, acute viral hepatitis, DILI, Wilson\'s crisis.',
    },
  },
  {
    id: 'safety-alt10x',
    position: { x: 1370, y: 680 },
    data: {
      variant: 'urgent',
      label: 'ALT >10× ULN → same-day hepatology contact',
      detail: 'ALT >10× ULN (e.g. >560 IU/L if ULN = 56 IU/L) = severe hepatocellular injury.\n\nContact on-call hepatology same day, or send directly to emergency assessment unit.\n\nActions immediately:\n• Stop any potentially causative drug NOW\n• Check urgently: INR, albumin, bilirubin (synthetic function), FBC, U&E\n\nCommon causes: paracetamol toxicity (even therapeutic doses in alcohol/fasting), DILI, acute viral hepatitis (HAV, HEV), ischaemic hepatitis ("shock liver" — hypotension, heart failure).',
    },
  },
]

// ── EDGES ──────────────────────────────────────────────────────────────────────
const edges: Edge<GPOsEdgeData>[] = [

  // Start → Pattern
  { id: 'e-start-pattern', source: 'start', target: 'pattern', data: {} },

  // Start → Safety header (dashed red, non-animated)
  {
    id: 'e-start-safety',
    source: 'start',
    target: 'safety-header',
    label: 'Red flags',
    animated: false,
    style: { strokeDasharray: '7,4', stroke: '#ef4444', strokeWidth: 1.5 },
    data: {},
  },

  // Pattern → 5 branches
  { id: 'e-p-hepato',      source: 'pattern', target: 'hepato',      label: 'Hepatocellular', data: {} },
  { id: 'e-p-chol',        source: 'pattern', target: 'cholestatic',  label: 'Cholestatic',    data: {} },
  { id: 'e-p-mixed',       source: 'pattern', target: 'mixed',        label: 'Mixed',           data: {} },
  { id: 'e-p-ggt',         source: 'pattern', target: 'ggt',          label: 'Isolated GGT',   data: {} },
  { id: 'e-p-bili',        source: 'pattern', target: 'bili',         label: 'Isolated bilirubin', data: {} },

  // Hepatocellular branch
  { id: 'e-hepato-ix',     source: 'hepato',        target: 'hepato-ix',     data: {} },
  { id: 'e-ix-degree',     source: 'hepato-ix',     target: 'hepato-degree', data: {} },
  { id: 'e-degree-urgent', source: 'hepato-degree', target: 'hepato-urgent', label: '>3× ULN or rising', data: {} },
  { id: 'e-degree-repeat', source: 'hepato-degree', target: 'hepato-repeat', label: 'Stable <3× ULN',    data: {} },
  { id: 'e-degree-etoh',   source: 'hepato-degree', target: 'hepato-alcohol',label: 'Alcohol identified', data: {} },

  // Cholestatic branch
  { id: 'e-chol-uss',      source: 'cholestatic', target: 'chol-uss',      data: {} },
  { id: 'e-uss-result',    source: 'chol-uss',    target: 'chol-result',   data: {} },
  { id: 'e-result-normal', source: 'chol-result', target: 'chol-normal',   label: 'Normal',                data: {} },
  { id: 'e-result-abnorm', source: 'chol-result', target: 'chol-abnormal', label: 'Abnormal / obstructed', data: {} },

  // Mixed branch
  { id: 'e-mixed-ix', source: 'mixed', target: 'mixed-ix', data: {} },

  // GGT branch
  { id: 'e-ggt-ix',       source: 'ggt',    target: 'ggt-ix',      data: {} },
  { id: 'e-ggt-reassure', source: 'ggt-ix', target: 'ggt-reassure', label: 'USS normal, no alcohol',   data: {} },
  { id: 'e-ggt-nafld',    source: 'ggt-ix', target: 'ggt-nafld',    label: 'Fatty liver / metabolic', data: {} },

  // Bilirubin branch
  { id: 'e-bili-haem', source: 'bili',      target: 'bili-haem',    data: {} },
  { id: 'e-haem-type', source: 'bili-haem', target: 'bili-type',    data: {} },
  { id: 'e-type-gilb', source: 'bili-type', target: 'bili-gilbert', label: 'Unconjugated', data: {} },
  { id: 'e-type-conj', source: 'bili-type', target: 'bili-conj',    label: 'Conjugated',   data: {} },

  // Safety net sub-nodes
  { id: 'e-safety-ca',   source: 'safety-header', target: 'safety-cancer', data: {} },
  { id: 'e-safety-alf',  source: 'safety-header', target: 'safety-alf',    data: {} },
  { id: 'e-safety-alt',  source: 'safety-header', target: 'safety-alt10x', data: {} },
]

export const abnormalLFTs: Flowchart = {
  id: 'abnormal-lfts',
  title: 'Abnormal LFTs',
  description: 'Pattern recognition and investigation pathway for incidental or symptomatic abnormal liver function tests in primary care',
  category: 'other',
  lastReviewed: 'April 2026',
  nodes,
  edges,
}
