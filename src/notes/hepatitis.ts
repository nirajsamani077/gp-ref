import type { Note } from '../data/notes'

export const hepatitis: Note = {
  id: 'hepatitis',
  title: 'Viral Hepatitis (A, B & C)',
  subtitle: 'Hep B serology interpretation, vaccination, Hep C treatment, SVR, and GP monitoring',
  tags: ['gastroenterology', 'infectious'],

  body: 'hepatitis A B C E viral hepatitis HBsAg anti-HBs anti-HBc HBeAg HBV HCV RNA NAAT serology vaccination PCR SVR sustained virological response direct-acting antivirals DAA protease inhibitor ribavirin cirrhosis HCC hepatocellular carcinoma FIB4 ELF fibroscan notifiable faeco-oral IVDU MSM vertical transmission immunisation',

  content: [

    { type: 'heading', level: 2, text: 'Hepatitis A' },

    {
      type: 'list',
      items: [
        'Virus: RNA picornavirus; faeco-oral transmission — contaminated water/food, travel to endemic areas (South Asia, Africa, Central/South America), MSM (oral-anal contact), IVDU (shared equipment)',
        'Incubation: 2–4 weeks; infectious from 2 weeks before to 1 week after jaundice onset',
        'Clinical: viral prodrome (malaise, nausea, anorexia, fever) → acute hepatitis (jaundice, dark urine, pale stools, RUQ pain, tender hepatomegaly, deranged LFTs with ++ ALT)',
        'Diagnosis: Hep A IgM positive = recent infection; IgG only = past infection/immunity',
        'Management: supportive — most managed at home; admission if: severe vomiting preventing oral intake, ALT >10× ULN, coagulopathy, encephalopathy; hand hygiene crucial; avoid alcohol',
        'Notification: MUST notify PHE (Hep A is a notifiable disease — immediate notification)',
        'Exclusion: exclude from school/nursery/work for 7 days after onset of jaundice (most infectious at this time)',
        'Vaccination (Havrix or Avaxim): initial dose + booster at 6–12 months → lifelong immunity; offer to: travellers to endemic areas, MSM, IVDU, occupational risk (sewage workers, food handlers), chronic liver disease',
        'Post-exposure prophylaxis: Hep A vaccine within 14 days of exposure; Hep A immunoglobulin if immunosuppressed or >50 years',
        'Hep E: faeco-oral spread; similar presentation to Hep A; contaminated water/shellfish/pork; self-limiting in immunocompetent; can be chronic in immunosuppressed (organ transplant); check Hep E IgM/RNA if travel + unexplained hepatitis; ribavirin used for chronic Hep E in immunosuppressed',
      ],
    },

    { type: 'heading', level: 2, text: 'Hepatitis B — Serology Interpretation' },

    {
      type: 'table',
      headers: ['Scenario', 'HBsAg', 'Anti-HBs', 'Anti-HBc', 'Interpretation'],
      rows: [
        ['Acute Hep B infection', '+', '−', '+ (IgM)', 'Active infection — current; IgM anti-HBc = recent'],
        ['Chronic Hep B infection', '+', '−', '+ (IgG)', 'Persistent infection >6 months; refer liver team'],
        ['Resolved infection — now immune', '−', '+', '+', 'Cleared virus; immune from past infection'],
        ['Vaccinated — successfully immune', '−', '+', '−', 'Anti-HBs ≥10 IU/L = immune; no prior infection'],
        ['Susceptible — not immune, not infected', '−', '−', '−', 'Needs vaccination — anti-HBs <10 IU/L'],
        ['Window period (early acute)', '+', '−', '+ (IgM)', 'HBsAg detectable; anti-HBs not yet appeared'],
        ['Occult Hep B (low-level replication)', '−', '+/−', '+', 'HBV DNA detectable but HBsAg negative; reactivation risk with immunosuppression'],
      ],
      caption: 'HBsAg = hepatitis B surface antigen (marker of infection). HBeAg = hepatitis B e antigen (marker of high viral replication/infectivity — if positive = highly infectious). Anti-HBc = core antibody (marker of past exposure). Anti-HBs = surface antibody (marker of immunity).',
    },

    { type: 'heading', level: 2, text: 'Hepatitis B — Who to Screen, Natural History and Management' },

    {
      type: 'list',
      items: [
        'Who to screen: high-risk countries (sub-Saharan Africa, South/South-East Asia, China, Eastern Europe), MSM, IVDU, prisoners, homeless, sex workers, healthcare workers, household/sexual contacts of HBsAg-positive individuals, immunosuppressed patients before starting therapy, pregnant women (antenatal booking bloods)',
        'Natural history: 95% of adults clear acute Hep B spontaneously (recover + immune); 5% develop chronic infection; of those chronically infected — 25% develop cirrhosis/HCC over lifetime',
        'Transmission: sexual contact, bloodborne (sharing needles, IVDU, blood transfusion, occupational needlestick), vertical (mother to baby during birth — high-risk if HBeAg positive)',
        'Vertical transmission prevention: all pregnant women screened; if HBsAg positive — baby given HBV immunoglobulin AND Hep B vaccine at birth (accelerated schedule); reduces vertical transmission by >90%',
        'Refer ALL HBsAg-positive patients to hepatology/liver team — specialist will assess viral load (HBV DNA), HBeAg status, LFTs, inflammation/fibrosis (FIB-4, ELF, fibroscan), and initiate antiviral therapy if indicated (tenofovir, entecavir)',
        'Reactivation risk: patients with resolved Hep B (anti-HBc positive) can reactivate with immunosuppressants (high-dose corticosteroids, chemotherapy, biologicals, rituximab) — check anti-HBc + HBsAg before starting; discuss with hepatology; prophylactic antiviral often needed',
        'Vaccination (Engerix B or Fendrix): 3 doses at 0, 1, 6 months; check anti-HBs at 4–8 weeks post-primary course; if <10 IU/L → non-responder → 3-dose booster course ± higher-dose vaccine (Fendrix for haemodialysis patients)',
        'Notification: acute Hep B is notifiable; chronic Hep B is not routinely notifiable but PHE guidance recommends contact tracing',
      ],
    },

    { type: 'heading', level: 2, text: 'Hepatitis C' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Hepatitis C — Highly Curable with Modern Treatment',
      items: [
        'Transmission: bloodborne — IVDU (most common UK cause; 50% of IVDU have HCV), sharing needles/equipment/straws for snorting drugs, tattoos/piercing with unsterile equipment, blood transfusion before 1991 (when screening introduced), less commonly sexual (higher risk in HIV+ MSM)',
        'Vertical transmission: ~5%; sexual transmission: low risk (~3%) but increased with HIV co-infection',
        'Diagnosis: HCV antibody (anti-HCV) — positive if past or current exposure; if positive, confirm active infection with HCV RNA PCR (detectable within 1–2 weeks of infection)',
        'Acute vs chronic: acute HCV — HCV RNA detectable, anti-HCV may be negative in first 4 weeks; chronic HCV — anti-HCV + HCV RNA positive for >6 months; 75% of acute infections → chronic (unlike Hep B)',
        'Treatment: direct-acting antivirals (DAAs) — e.g. sofosbuvir/velpatasvir (Epclusa), glecaprevir/pibrentasvir (Maviret); oral tablets for 8–12 weeks; cure rate (SVR at 12 weeks post-treatment) >95%; SVR = undetectable HCV RNA 12 weeks after completing treatment = cured; ribavirin still used in some regimens (teratogenic — effective contraception during and 6 months after)',
        'Refer all HCV RNA-positive patients to hepatology for treatment — GP can arrange referral and initial tests; fibroscan/FIB-4 to assess fibrosis stage before treatment',
        'Post-SVR: can be reinfected — advise harm reduction; annual HCV RNA check if ongoing risk behaviour (IVDU)',
      ],
    },

    { type: 'heading', level: 2, text: 'Hepatitis C — Extrahepatic Manifestations and Complications' },

    {
      type: 'list',
      items: [
        'Chronic HCV complications — hepatic: cirrhosis (20% of chronic infection over 20 years), HCC (liver cancer — HCC surveillance with USS ± AFP every 6 months in those with cirrhosis)',
        'Extrahepatic manifestations: cryoglobulinaemia (immune complex disease — purpuric rash, vasculitis, arthritis, renal disease → membranoproliferative GN); porphyria cutanea tarda; Sjögren\'s syndrome-like (sicca symptoms); arthralgia',
        'Haematological: non-Hodgkin lymphoma (B-cell) — HCV associated; thrombocytopenia (from cirrhosis/hypersplenism)',
        'FIB-4 score (primary care assessment of liver fibrosis): Age × AST / (platelets × √ALT); <1.30 = low fibrosis risk; 1.30–2.67 = intermediate; >2.67 = high risk of advanced fibrosis — refer hepatology urgently; useful for all chronic liver disease (Hep B, Hep C, NAFLD)',
        'Harm reduction: offer needle exchange, naloxone, hepatitis testing, HIV testing; refer to drug services; complete patient cure from HCV does not protect against reinfection — ongoing harm reduction counselling essential',
        'Notification: MUST notify PHE for acute Hep C; chronic Hep C — laboratory notification via PHE',
      ],
    },

    { type: 'heading', level: 2, text: 'GP Monitoring — Chronic Viral Hepatitis' },

    {
      type: 'table',
      headers: ['Task', 'Frequency', 'Rationale'],
      rows: [
        ['LFTs (ALT, AST, ALP, GGT, bilirubin, albumin)', 'Annually if stable; 3–6-monthly if active disease or on antivirals', 'Monitor disease activity and drug hepatotoxicity'],
        ['FBC, U&E', 'Annually; more frequently if cirrhosis', 'Thrombocytopenia, anaemia in cirrhosis; renal function for tenofovir (Hep B treatment)'],
        ['HBV DNA / HCV RNA', 'Per hepatology protocol', 'Viral load monitoring during antiviral treatment'],
        ['AFP + liver USS', 'Every 6 months if cirrhosis (HCC surveillance)', 'Early HCC detection — treatable if caught early'],
        ['Fibroscan / FIB-4', 'As per hepatology; annually if NAFLD, 2-yearly if stable Hep B/C', 'Assess fibrosis progression or regression with treatment'],
        ['Alcohol advice', 'Every visit — document AUDIT score', 'Alcohol accelerates fibrosis and HCC risk in viral hepatitis'],
        ['Vaccination', 'Hep A vaccine (if not immune) — reduces superinfection risk; flu vaccine', 'Superinfection with Hep A can cause acute-on-chronic liver failure'],
      ],
    },

  ],
}
