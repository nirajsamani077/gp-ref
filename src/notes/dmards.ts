import type { Note } from '../data/notes'

export const dmards: Note = {
  id: 'dmards',
  title: 'DMARDs & Biologics in Rheumatology',
  subtitle: 'Monitoring, shared care, drug interactions and when to stop in primary care',
  tags: ['rheumatology', 'prescribing'],

  body: 'DMARD disease modifying antirheumatic drug methotrexate leflunomide sulfasalazine hydroxychloroquine biologic anti-TNF adalimumab etanercept infliximab anti-IL6 tocilizumab rituximab JAK inhibitor baricitinib tofacitinib upadacitinib shared care monitoring FBC LFT U&E pregnancy TB screening infection live vaccine folic acid',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Key Principles',
      items: [
        'ALL DMARDs and biologics are INITIATED by secondary care (rheumatology) — primary care role is shared care monitoring and safety checking',
        'Effects and adverse effects typically evident within first 3 months',
        'Minor GI side effects (mouth ulcers, nausea) with many DMARDs — usually settle with time',
        'ALL conventional DMARDs can cause: bone marrow suppression, hepatitis, pneumonitis',
        'Do NOT routinely stop DMARDs before elective surgery — discuss with rheumatologist; stopping can trigger disease flare',
        'STOP for severe infection requiring hospital admission — restart only after discussion with rheumatology',
      ],
    },

    { type: 'heading', level: 2, text: 'Conventional DMARDs' },

    {
      type: 'table',
      headers: ['Drug', 'Key Side Effects', 'Specific Monitoring / Notes'],
      rows: [
        ['Methotrexate (MTX)', 'Liver fibrosis/cirrhosis, lung toxicity (pneumonitis), bone marrow suppression, teratogenicity', 'Weekly SC or PO; ALWAYS prescribe folic acid 5 mg on the other 6 days (never same day — interferes with MTX absorption). Do NOT prescribe trimethoprim (interferes with folate metabolism → toxicity). Stop ≥3 months before conception for both men and women'],
        ['Leflunomide', 'Hypertension, peripheral neuropathy, hepatotoxicity', 'Very long half-life (active metabolite persists for up to 2 years) — stop very early before pregnancy; washout with cholestyramine may be needed. FBC/LFT 2-monthly'],
        ['Sulfasalazine', 'Neuropsychiatric effects, oligospermia (reversible), GI upset, rash', 'Check G6PD before starting (haemolysis risk). FBC/LFT monthly × 3 months then 3-monthly'],
        ['Hydroxychloroquine (HCQ)', 'Retinopathy (long-term), neuropsychiatric effects, exacerbates psoriasis', 'Annual ophthalmology screening required after 5 years of use. No routine blood monitoring required (unlike others). Avoid in psoriatic arthritis'],
      ],
      caption: 'Monitoring for all DMARDs (except HCQ): FBC + U&E + LFT — monthly for first 3 months, then 3-monthly (MTX and sulfasalazine) or 2-monthly (leflunomide).',
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Monitoring Thresholds — When to Act',
      items: [
        'ALT >2× ULN (upper limit of normal): discuss with rheumatologist; if patient unwell → consider admitting and stopping DMARD pending review',
        'eGFR <30: typically stop methotrexate and leflunomide; discuss all DMARDs with rheumatology',
        'WBC <3.5 × 10⁹/L or neutrophils <2 × 10⁹/L: withhold DMARD; contact rheumatology urgently',
        'Any chest symptoms (new persistent cough, breathlessness, fever on MTX): possible MTX pneumonitis — STOP MTX immediately; CXR + urgent rheumatology review',
      ],
    },

    { type: 'heading', level: 2, text: 'Biologics' },

    {
      type: 'table',
      headers: ['Class', 'Examples', 'Key Points'],
      rows: [
        ['Anti-TNF', 'Adalimumab (SC), Etanercept (SC), Infliximab (IV), Certolizumab, Golimumab', 'Reactivate latent TB — TB screening (IGRA test + CXR) mandatory before starting. Monitor FBC, U&E, LFT. Increased infection and malignancy risk (especially lymphoma). No live vaccines.'],
        ['Anti-IL6', 'Tocilizumab (IV/SC), Sarilumab', 'Monitor lipid profile (raises LDL). CRP may be falsely normal during infection — do NOT use CRP alone to exclude infection on tocilizumab. No live vaccines.'],
        ['Anti-B cell', 'Rituximab (IV)', 'Rare risk of progressive multifocal leukoencephalopathy (PML — JC virus reactivation). Check JC virus antibodies before starting. No live vaccines.'],
        ['JAK inhibitors (targeted synthetic DMARDs)', 'Baricitinib, Tofacitinib, Upadacitinib (oral)', 'Newer oral targeted agents — increased risk VTE, cardiovascular events, malignancy. Lipid monitoring. Used if biologics failed or not suitable. No live vaccines.'],
      ],
      caption: 'No live vaccines while on biologics or JAK inhibitors — includes yellow fever, MMR, varicella/zoster, BCG, oral typhoid. Annual flu and pneumococcal (inactivated) are safe and recommended. Ensure vaccinations are up to date BEFORE starting biologic.',
    },

    { type: 'heading', level: 2, text: 'Shared Care Responsibilities' },

    {
      type: 'list',
      items: [
        'Primary care issues shared care prescriptions and performs monitoring according to shared care protocol',
        'Prescribe folic acid with MTX (always on different day)',
        'Document DMARD monitoring results; flag abnormals to rheumatology',
        'Do NOT increase DMARD doses in primary care — specialist decision',
        'Intercurrent illness: advise patient on sick day rules (often withhold DMARD temporarily during febrile illness); document guidance given',
        'Pregnancy: if patient with RA planning pregnancy — early specialist review for DMARD switch; most DMARDs stopped or changed; discuss with rheumatology BEFORE conception attempted',
        'Infection risk: low threshold for admission with fever, sepsis or unusual infections on biologics — immunosuppressed',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'Rheumatology: UHDB Queen\'s Hospital Burton — primary rheumatology service; shared care agreements via this trust',
        'Alternative: Good Hope Hospital (UHB) or Walsall Manor Hospital rheumatology',
        'For MTX monitoring: check UHDB Burton shared care protocol; bloods at Darwin Practice; results reviewed and actioned',
        'Ophthalmology (HCQ monitoring): UHDB Burton eye department — annual from year 5',
        'TB screening (before biologics): UHDB Burton respiratory/rheumatology — IGRA test arranged by specialist',
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Safety Netting',
      items: [
        'Urgent same-day: fever + patient on biologic = sepsis until proven otherwise — admit; do not withhold IV antibiotics',
        'MTX toxicity signs: ulcers in mouth and GI tract, fever, severe cough on MTX = STOP MTX and admit urgently',
        'Trimethoprim prescribed with MTX = CONTRAINDICATED — can cause fatal pancytopenia (MHRA alert)',
        'Patient education: ensure all patients on DMARDs have a monitoring book/card; know to report bruising, persistent fever, breathlessness immediately',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Rheumatoid Arthritis', url: 'https://cks.nice.org.uk/topics/rheumatoid-arthritis/' },
        { label: 'NICE NG100 — Rheumatoid Arthritis', url: 'https://www.nice.org.uk/guidance/ng100' },
        { label: 'BSR — DMARD Monitoring Guidelines', url: 'https://www.rheumatology.org.uk/practice-quality/guidelines' },
        { label: 'NHS — DMARDs', url: 'https://www.nhs.uk/conditions/rheumatoid-arthritis/treatment/' },
      ],
    },
  ],
}
