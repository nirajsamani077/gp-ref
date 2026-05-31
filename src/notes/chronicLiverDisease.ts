import type { Note } from '../data/notes'

export const chronicLiverDisease: Note = {
  id: 'chronic-liver-disease',
  title: 'Chronic Liver Disease',
  subtitle: 'CLD signs, causes, Child-Pugh score, decompensation, ascites, variceal bleeding and liver screen',
  tags: ['gastro'],

  body: 'chronic liver disease CLD cirrhosis hepatomegaly ascites encephalopathy asterixis portal hypertension variceal bleeding SBP spontaneous bacterial peritonitis Child-Pugh MELD score liver screen hepatitis alcohol NAFLD NASH autoimmune PBC PSC Wilson Haemochromatosis alpha-1 antitrypsin AFP HCC hepatocellular carcinoma spider naevi palmar erythema leuconychia Dupuytren caput medusa coagulopathy jaundice liver biopsy fibroscan ELF FIB4',

  content: [

    { type: 'heading', level: 2, text: 'Clinical Signs of Chronic Liver Disease' },

    {
      type: 'table',
      headers: ['System', 'Signs', 'Notes'],
      rows: [
        ['Hands', 'Leuconychia (white nails — low albumin), clubbing, Dupuytren\'s contracture, palmar erythema, flapping tremor (asterixis — encephalopathy)', 'Asterixis: ask patient to hold arms out; watch for flap; also seen in uraemia, CO2 retention, severe hepatic encephalopathy'],
        ['Abdomen', 'Hepatomegaly (cannot get above; dull to percussion; moves with inspiration), splenomegaly (portal HTN), caput medusa (prominent periumbilical veins), ascites (shifting dullness, fluid thrill)', 'Caput medusa pathognomonic of portal HTN; pulsatile hepatomegaly = tricuspid regurgitation (cardiac cause)'],
        ['Skin/body', 'Spider naevi (>5 on chest/upper body = significant), jaundice (scleral icterus, skin), gynaecomastia, testicular atrophy, reduced body hair (sex hormone imbalance), xanthomata (PBC)', 'Spider naevi: central arteriole with radiating vessels; blanch and refill on compression'],
        ['Face/general', 'Parotid enlargement (alcohol), Dupuytren\'s, peripheral oedema, muscle wasting (sarcopaenia — poor prognosis)', 'Bilateral parotid enlargement in alcohol use disorder'],
      ],
      caption: 'Hepatomegaly examination: start in the right iliac fossa and move towards the right upper quadrant with each breath in. A normal liver edge may be felt in thin patients. Auscultate for hepatic bruit (HCC, AVM).',
    },

    { type: 'heading', level: 2, text: 'Causes of Cirrhosis / Chronic Liver Disease' },

    {
      type: 'table',
      headers: ['Cause', 'Key Features', 'Specific Investigation'],
      rows: [
        ['Alcohol-related liver disease (ALD)', 'Most common in UK; history of excess alcohol; AST:ALT ratio >2:1; elevated GGT', 'AUDIT-C, alcohol history, liver biopsy if uncertain'],
        ['NAFLD / NASH', 'Metabolic syndrome — obesity, T2DM, dyslipidaemia; increasingly common; ALT > AST typically', 'FIB-4 score, ELF test, fibroscan (FibroScan); liver biopsy if needed'],
        ['Hepatitis B', 'HBsAg positive; vertical transmission or sexual/blood-borne; cirrhosis and HCC risk', 'HBsAg, HBeAg, HBV DNA, genotype'],
        ['Hepatitis C', 'Blood-borne; IVDU, tattoos, pre-1991 blood products; often silent for decades', 'Anti-HCV antibody, HCV RNA, genotype'],
        ['Autoimmune hepatitis (AIH)', 'Young/middle-aged women; associated with other AI disease; elevated IgG, ANA, anti-smooth muscle (ASMA), LKM antibodies', 'ANA, ASMA, anti-LKM, IgG'],
        ['Primary biliary cholangitis (PBC)', 'Middle-aged women; pruritus, fatigue; elevated ALP; anti-mitochondrial antibody (AMA) positive in 95%', 'AMA (M2), IgM elevated; USS for ducts'],
        ['Primary sclerosing cholangitis (PSC)', 'Associated with IBD (UC 80%); males >females; elevated ALP; beaded bile ducts on MRCP; risk of cholangiocarcinoma', 'MRCP, ANCA-p, annual USS + CA19-9'],
        ['Haemochromatosis (HH)', 'AR; iron overload → liver, heart, pancreas, skin, gonads; "bronze diabetes"', 'Ferritin (markedly elevated), transferrin saturation >45%, HFE gene (C282Y)'],
        ['Wilson\'s disease', 'AR; copper accumulation; young (<40); Kayser-Fleischer rings (eyes), neuropsychiatric, liver disease', 'Caeruloplasmin (low), 24h urinary copper, slit-lamp for KF rings'],
        ['Alpha-1 antitrypsin deficiency', 'Emphysema (lungs) + cirrhosis; PiZZ phenotype', 'Alpha-1 antitrypsin level, phenotype/genotype'],
      ],
    },

    { type: 'heading', level: 2, text: 'Liver Screen — Investigations' },

    {
      type: 'list',
      items: [
        'Bloods (baseline synthetic function): FBC (thrombocytopenia — splenomegaly/marrow suppression), LFT (ALT, AST, ALP, bilirubin), albumin, INR/prothrombin time (synthetic function markers)',
        'Hepatitis serology: HBsAg, HBcAb, HCV Ab; consider HIV, EBV, CMV if acute or immunosuppressed',
        'Autoantibodies: ANA, ASMA (AIH), AMA (PBC), anti-LKM1 (type 2 AIH), ANCA-p (PSC)',
        'Metabolic screen: ferritin + transferrin saturation (haemochromatosis), caeruloplasmin (Wilson\'s), alpha-1 antitrypsin level',
        'AFP (alpha-fetoprotein): raised in HCC; also elevated in metastatic disease, testicular GCT, pregnancy',
        'Imaging: USS abdomen — liver echogenicity, nodularity, splenomegaly, ascites, portal vein diameter; Doppler for flow; consider CT/MRI for characterising lesions',
        'Non-invasive fibrosis markers: FIB-4 score (age × AST / (platelets × √ALT)); ELF (Enhanced Liver Fibrosis) blood test; fibroscan (transient elastography — measures liver stiffness)',
        'Liver biopsy: gold standard for staging fibrosis and establishing aetiology if non-invasive tests inconclusive; done under USS guidance',
      ],
    },

    { type: 'heading', level: 2, text: 'Child-Pugh Score' },

    {
      type: 'table',
      headers: ['Parameter', '1 point', '2 points', '3 points'],
      rows: [
        ['Albumin (g/L)', '>35', '28–35', '<28'],
        ['Bilirubin (μmol/L)', '<34', '34–50', '>50'],
        ['INR (Prothrombin time)', '<1.7', '1.7–2.3', '>2.3'],
        ['Ascites', 'None', 'Mild (controlled)', 'Moderate–severe (refractory)'],
        ['Hepatic encephalopathy', 'None', 'Grade I–II', 'Grade III–IV'],
      ],
      caption: 'Score 5–6 = Class A (compensated; 1-year mortality ~0%); Score 7–9 = Class B (1-year mortality ~20%); Score 10–15 = Class C (decompensated; 1-year mortality ~50%). MELD score (Model for End-Stage Liver Disease) is used for transplant listing and predicts short-term mortality.',
    },

    { type: 'heading', level: 2, text: 'Complications of Cirrhosis / Portal Hypertension' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Acute Decompensation — Admit / Emergency',
      items: [
        'Variceal bleeding (UGIB): haematemesis or melaena; terlipressin + broad-spectrum antibiotics (ceftriaxone) + urgent endoscopy for banding; octreotide alternative to terlipressin; Sengstaken-Blakemore tube if bleeding uncontrolled',
        'Spontaneous bacterial peritonitis (SBP): ascites + infection without obvious source; fever + abdominal pain in cirrhosis = SBP until proven otherwise; diagnostic tap (>250 PMN cells/mL); IV cefotaxime + IV human albumin solution (HAS)',
        'Hepatic encephalopathy: confusion, asterixis, drowsiness — precipitant search (infection, GI bleed, constipation, hyponatraemia, dehydration, benzodiazepines); lactulose (bowel clearance), rifaximin (adjunct); avoid sedatives',
        'Hepatorenal syndrome: functional AKI in cirrhosis — vasodilatory splanchnic circulation → renal hypoperfusion; requires specialist management (terlipressin + albumin)',
        'Acute-on-chronic liver failure (ACLF): acute deterioration of chronic disease; high short-term mortality; urgent hepatology input; liver transplant assessment',
      ],
    },

    { type: 'heading', level: 2, text: 'Ascites Management' },

    {
      type: 'list',
      items: [
        'Establish cause: cardiac USS (right heart failure), USS abdomen (hepatic cause), diagnostic ascitic tap (cell count, protein, culture)',
        'Serum-Ascites Albumin Gradient (SAAG): serum albumin − ascites albumin; >11 g/L = portal hypertension (cirrhosis, right heart failure, Budd-Chiari); <11 g/L = non-portal (malignancy, peritoneal TB)',
        'Sodium and fluid restriction: low-sodium diet (<5 g/day); restrict fluid intake only if Na+ <125 mmol/L',
        'Diuretics: spironolactone 100 mg OD (start) — titrate up to 400 mg; add furosemide 40 mg OD if insufficient; monitor U&E, creatinine, sodium weekly initially',
        'Therapeutic paracentesis (large volume paracentesis, LVP): drain ≥5 litres with simultaneous albumin infusion (6–8 g per litre drained) to prevent post-paracentesis circulatory dysfunction',
        'Refractory ascites: TIPS (transjugular intrahepatic portosystemic shunt) — reduces portal pressure; or long-term paracentesis',
        'Secondary prophylaxis for SBP: ciprofloxacin 500 mg OD OR rifaximin long term after first SBP episode',
      ],
    },

    { type: 'heading', level: 2, text: 'HCC Surveillance' },

    {
      type: 'list',
      items: [
        'All patients with established cirrhosis should have 6-monthly USS abdomen for hepatocellular carcinoma (HCC) surveillance',
        'AFP alone is not sensitive enough — USS + AFP 6-monthly is the standard',
        'High-risk groups also include: HBV carriers even without cirrhosis (if male, >40 years, Asian); family history HCC',
        'If USS shows a suspicious nodule: urgent MRI liver / CT with contrast for characterisation; multiphase CT or MRI showing "arterial washout" pattern is diagnostic of HCC without biopsy',
        'Early HCC: surgical resection, liver transplant, or ablation (RFA/TACE) may be curative',
      ],
    },

    { type: 'heading', level: 2, text: 'GP Role in Chronic Liver Disease' },

    {
      type: 'list',
      items: [
        'Annual bloods: FBC, LFT, albumin, INR, AFP (in cirrhosis), renal function',
        'Alcohol: ongoing AUDIT-C at every review; refer to alcohol specialist nurse/DAAT service for ALD',
        'Vaccination: hepatitis A and B (if not immune); pneumococcal and annual influenza vaccines (immune-compromised state in advanced CLD)',
        'Medications to AVOID in cirrhosis: NSAIDs (precipitate AKI and GI bleeding), opioids (precipitate encephalopathy), benzodiazepines, sedating antihistamines, aminoglycosides',
        'Metformin: generally safe in compensated cirrhosis; avoid in Child-Pugh C (lactic acidosis risk)',
        'Statins: generally safe and beneficial (reduce hepatic fibrosis in NAFLD); avoid in decompensated cirrhosis',
        'Advance care planning: RESPECT form, DNACPR discussion, transplant eligibility assessment — introduce early',
      ],
    },

  ],
}
