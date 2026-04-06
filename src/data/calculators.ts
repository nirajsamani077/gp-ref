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
    id: 'fib4',
    name: 'FIB-4 Index — Liver Fibrosis',
    searchText:
      'FIB4 FIB-4 fibrosis index liver fibrosis NAFLD MASLD ARLD alcohol fatty liver ALT AST platelets age cirrhosis advanced fibrosis ELF elastography fibroscan gastroenterology hepatology',
  },
]
