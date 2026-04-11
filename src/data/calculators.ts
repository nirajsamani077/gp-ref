export interface CalculatorMeta {
  id: string
  name: string
  searchText: string  // extra keywords for fuzzy search
}

export const CALCULATORS: CalculatorMeta[] = [
  {
    id: 'feno',
    name: 'FeNO Calculator',
    searchText:
      'FeNO fractional exhaled nitric oxide asthma eosinophilic ICS ppb spirometry inhaled corticosteroid airway inflammation',
  },
  {
    id: '6cit',
    name: '6-CIT Six Item Cognitive Impairment Test',
    searchText:
      '6CIT 6-CIT six item cognitive impairment test dementia screening memory MMSE MoCA orientation recall year month time backwards months reverse address phrase John Smith Bedford referral memory clinic cognitive assessment',
  },
  {
    id: 'qrisk3',
    name: 'QRISK3 — Cardiovascular Risk',
    searchText:
      'QRISK3 QRISK2 cardiovascular risk CVD 10 year heart attack stroke TIA statin atorvastatin lipid cholesterol HDL TC ratio systolic BP BMI Townsend deprivation ethnicity smoking diabetes atrial fibrillation hypertension treated CKD SLE rheumatoid arthritis migraine corticosteroids antipsychotics erectile dysfunction impotence severe mental illness',
  },
  {
    id: 'fib4',
    name: 'FIB-4 Index — Liver Fibrosis',
    searchText:
      'FIB4 FIB-4 fibrosis index liver fibrosis NAFLD MASLD ARLD alcohol fatty liver ALT AST platelets age cirrhosis advanced fibrosis ELF elastography fibroscan gastroenterology hepatology',
  },
  {
    id: 'cha2ds2vasc',
    name: 'CHA₂DS₂-VASc — AF Stroke Risk',
    searchText:
      'CHA2DS2VASc CHA2DS2-VASc stroke risk atrial fibrillation AF flutter anticoagulation DOAC apixaban edoxaban rivaroxaban dabigatran warfarin CHF heart failure hypertension age diabetes TIA thromboembolism vascular disease female sex',
  },
  {
    id: 'orbit',
    name: 'ORBIT-AF — Bleeding Risk',
    searchText:
      'ORBIT ORBIT-AF bleeding risk atrial fibrillation anticoagulation haemoglobin haematocrit anaemia renal function eGFR antiplatelet NSAID age bleeding history major bleed intracranial haemorrhage',
  },
]
