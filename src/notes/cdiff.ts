import type { Note } from '../data/notes'

export const cdiff: Note = {
  id: 'c-diff',
  title: 'Clostridioides difficile (C. diff)',
  subtitle: 'Diagnosis, severity grading, antibiotic choice and infection control',
  tags: ['gastroenterology', 'infection'],

  body: 'Clostridioides difficile C diff CDI clostridium difficile diarrhoea colitis antibiotic associated vancomycin fidaxomicin metronidazole faecal microbiota transplant FMT toxic megacolon pseudomembranous colitis severity moderate severe WBC white cell count stool culture GDH toxin test SADMAN drugs loperamide PPIs infection control hand hygiene',

  content: [
    {
      type: 'callout',
      variant: 'warning',
      title: 'Suspect C. diff if…',
      items: [
        'Diarrhoea (≥3 loose stools/day) with: recent antibiotics (especially within last 8 weeks, peak risk 2 weeks after)',
        'High-risk antibiotics: cephalosporins, clindamycin, ciprofloxacin, broad-spectrum penicillins',
        'Age >65 years OR immunocompromised without obvious alternative cause',
        'Hospital-acquired or care home-associated diarrhoea',
        'C. diff is normal colonic flora that overgrows when normal flora is disrupted by antibiotics — causes toxin-mediated colitis',
        'Complications: pseudomembranous colitis, toxic megacolon, bowel perforation, sepsis',
      ],
    },

    { type: 'heading', level: 2, text: 'Investigations' },

    {
      type: 'list',
      items: [
        'Stool MC&S: send 2-stage test — GDH antigen (highly sensitive) + toxin A/B (specific); or PCR if available',
        'FBC, U&E, LFTs, CRP: assess severity; WBC >15 × 10⁹/L = severe; AKI = severe',
        'Do NOT send stool unless ≥3 loose stools/24h (Bristol stool type 5–7)',
        'Do NOT repeat test within 28 days of a positive result — may remain positive during treatment',
      ],
    },

    { type: 'heading', level: 2, text: 'Severity Grading' },

    {
      type: 'table',
      headers: ['Severity', 'Criteria', 'Action'],
      rows: [
        ['Mild', '<3 loose stools/day, no fever, WBC normal', 'Can treat at home if able to self-care; close monitoring'],
        ['Moderate', '>3 loose stools/day, WBC <15 × 10⁹/L', 'Consider community treatment vs. admission; senior review'],
        ['Severe', 'WBC >15 × 10⁹/L OR fever OR acute abdominal signs OR AKI', 'Hospital admission for IV management, surgical input if toxic megacolon'],
        ['Life-threatening', 'Toxic megacolon (colonic dilation >6 cm on AXR), perforation, septic shock', 'Emergency admission — surgery may be required; ITU involvement'],
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Immediate Actions for ALL C. diff',
      items: [
        '1. Stop the causative antibiotic if still being prescribed (cephalosporin, ciprofloxacin, clindamycin)',
        '2. Stop SADMAN drugs (Sodium-glucose cotransporter 2 inhibitors, ACE inhibitors, Diuretics, Metformin, ARBs, NSAIDs) if patient is dehydrated/AKI',
        '3. Stop laxatives — they mask severity assessment',
        '4. Stop PPIs if possible — they alter GI pH and worsen C. diff',
        '5. Do NOT give loperamide — masks severity, risk of toxic megacolon',
        '6. Strict infection control: handwashing with SOAP AND WATER (alcohol gel is INEFFECTIVE against C. diff spores)',
      ],
    },

    { type: 'heading', level: 2, text: 'Antibiotic Treatment' },

    {
      type: 'table',
      headers: ['Episode', 'Antibiotic', 'Dose', 'Duration'],
      rows: [
        ['1st episode', 'Vancomycin oral', '125 mg QDS PO', '10 days — expect improvement within 1–2 weeks'],
        ['No improvement on vancomycin', 'Fidaxomicin', '200 mg BD PO', '10 days'],
        ['No improvement on fidaxomicin', 'Seek microbiology advice', 'May escalate oral vancomycin to 500 mg QDS + IV metronidazole 500 mg TDS', 'Specialist-led'],
        ['1st recurrence (<12 weeks)', 'Fidaxomicin', '200 mg BD PO', '10 days'],
        ['Recurrence (>12 weeks)', 'Vancomycin OR Fidaxomicin', 'As above', '10 days'],
        ['>2 recurrences', 'Faecal microbiota transplant (FMT)', 'Specialist-initiated — healthy donor stool via colonoscopy or NGT', 'Most effective long-term treatment for recurrent C. diff'],
      ],
      caption: 'Oral vancomycin is NOT absorbed — it acts in the gut lumen directly. IV vancomycin is NOT effective for C. diff (does not reach gut). Metronidazole: no longer first-line; only used adjunctively for severe disease. Some patients remain positive on stool test after treatment — do NOT re-treat if asymptomatic (may take up to 4 weeks to clear).',
    },

    { type: 'heading', level: 2, text: 'Infection Control' },

    {
      type: 'list',
      items: [
        'Hand hygiene: SOAP AND WATER — alcohol gel does NOT kill C. diff spores (alcohol-resistant)',
        'Isolate patient where possible (side room in hospital; restrict contact at home)',
        'Dedicated toilet facilities if possible; bleach-based cleaning of bathroom',
        'No shared towels or face cloths',
        'Post-infectious IBS: C. diff survivors often develop IBS-like symptoms after treatment — reassure, treat symptoms',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'Hospital admission (moderate-severe): UHDB Queen\'s Hospital Burton — acute medical take',
        'Microbiology advice (complex cases, recurrent C. diff): UHDB Burton microbiology — phone for advice',
        'FMT referral: tertiary centres (e.g. University Hospital Birmingham or Nottingham) — discuss with gastroenterology',
        'For community C. diff: notify Public Health (UKHSA PHE) — C. diff is notifiable; also notify infection control team at UHDB if hospital-associated',
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Safety Netting',
      items: [
        '999 / A&E: severe abdominal pain, distension, or rigidity (toxic megacolon), septic shock, profuse bloody diarrhoea',
        'Same-day admission: WBC >15, fever, AKI, unable to tolerate oral medication or fluids',
        'Red flags for community: worsening symptoms after 72h of treatment, bleeding PR, significant dehydration',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — C. diff', url: 'https://cks.nice.org.uk/topics/diarrhoea-adults-assessment/management/clostridioides-difficile/' },
        { label: 'UKHSA — C. diff Guidelines', url: 'https://www.gov.uk/government/publications/clostridium-difficile-infection-guidance-on-management-and-treatment' },
        { label: 'NHS — C. diff', url: 'https://www.nhs.uk/conditions/c-difficile/' },
      ],
    },
  ],
}
