import type { Note } from '../data/notes'

export const familialHypercholesterolaemia: Note = {
  id: 'familial-hypercholesterolaemia',
  title: 'Familial Hypercholesterolaemia (FH)',
  subtitle: 'Simon Broome criteria, cascade testing, PCSK9 inhibitors and statin counselling',
  tags: ['cardiovascular', 'metabolic'],

  body: 'familial hypercholesterolaemia FH Simon Broome criteria total cholesterol LDL HDL tendon xanthoma corneal arcus premature CVD PCSK9 inhibitor evolocumab inclisiran alirocumab ezetimibe bempedoic acid statin high intensity atorvastatin rosuvastatin cascade testing lipid clinic index case 1 500 LDL receptor mutation pregnancy statin stop',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'FH — Overview',
      items: [
        'Autosomal dominant inherited condition — affects 1 in 250–500 people; most are undiagnosed',
        'LDL receptor mutation (80%) or apolipoprotein B mutation: impaired clearance of LDL from the circulation → very high LDL → early and accelerated cardiovascular disease',
        'Without treatment: males often have MI by age 50; females by age 60',
        'SUSPECT if: total cholesterol >7.5 mmol/L OR personal/family history of premature CVD (first-degree relative <60 years)',
        'Cascade testing: screen all first-degree relatives of a confirmed case — 50% chance of inheriting FH',
      ],
    },

    { type: 'heading', level: 2, text: 'When to Suspect FH and Investigate' },

    {
      type: 'list',
      items: [
        'Total cholesterol >7.5 mmol/L on repeated fasting lipid profile (untreated)',
        'LDL >4.9 mmol/L (untreated)',
        'Personal history of premature IHD/stroke (<60 years)',
        'First-degree relative with premature CVD (<60 years)',
        'Family history of very high cholesterol',
        'Clinical signs: tendon xanthomata (thickened Achilles tendons, extensors on hands), corneal arcus (before age 45), xanthelasma',
        'Consider FH in children: if one parent has confirmed FH — test at age 10 (or 5 if both parents have FH)',
        'Refer to lipid clinic if: total cholesterol >9 mmol/L OR non-HDL >7.5 mmol/L with no family history (may indicate homozygous FH — rarer, more severe)',
      ],
    },

    { type: 'heading', level: 2, text: 'Simon Broome Criteria — Diagnosis' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Simon Broome Criteria for FH',
      items: [
        'DEFINITE FH: total cholesterol >7.5 mmol/L (or LDL >4.9 mmol/L) PLUS: tendon xanthomata in patient OR confirmed LDL receptor mutation in patient or first-degree relative',
        'POSSIBLE FH: total cholesterol >7.5 mmol/L (or LDL >4.9 mmol/L) PLUS any of: family history of MI in first-degree relative <60 years OR second-degree relative <50 years; OR family history of raised total cholesterol >7.5 mmol/L in first or second degree relative',
        'Genetic testing (LDL receptor mutation): arranged via lipid clinic or specialist genetics',
        'Refer to lipid clinic for confirmation and management of all suspected FH',
      ],
    },

    { type: 'heading', level: 2, text: 'Treatment' },

    {
      type: 'table',
      headers: ['Agent', 'Role', 'Key Points'],
      rows: [
        ['High-intensity statin', 'First line; cornerstone', 'Atorvastatin 80 mg OD or rosuvastatin 20–40 mg OD; aim for ≥50% LDL reduction from baseline. Start as soon as possible — even in young adults'],
        ['Ezetimibe', 'Add-on to statin if target not met', 'Ezetimibe 10 mg OD; reduces LDL by additional ~20%'],
        ['Bempedoic acid (Nexletol)', 'Add-on if statin intolerant', 'Oral; inhibits ATP citrate lyase; additional LDL reduction'],
        ['PCSK9 inhibitors (evolocumab, alirocumab)', 'For confirmed FH with established CVD or inadequate response to statin + ezetimibe', 'SC injections every 2 weeks or monthly; highly effective (up to 60% additional LDL reduction); very expensive; specialist initiation only'],
        ['Inclisiran (Leqvio)', 'PCSK9 inhibitor RNA silencing', 'SC injection every 6 months (after loading doses); specialist initiation; now available on NHS'],
      ],
      caption: 'Target: LDL reduced by ≥50% from pre-treatment baseline. Some specialist centres target absolute LDL <1.8 mmol/L (secondary CVD prevention) or <2.5 mmol/L (primary prevention). Lipid clinic sets targets.',
    },

    { type: 'heading', level: 2, text: 'Cascade Testing and Special Situations' },

    {
      type: 'list',
      items: [
        'Cascade testing: screen all first-degree relatives (parents, siblings, children) of confirmed FH — 50% probability of inheriting the condition; arrange via lipid clinic or GP blood request',
        'Children: if one parent confirmed FH — test at age 10 (or at 5 if both parents affected); high-intensity statin started in adolescence/young adulthood',
        'Pregnancy: STATINS ARE TERATOGENIC — stop statin at least 3 months BEFORE conception and throughout breastfeeding; continue ezetimibe and bile acid sequestrants with caution; bile acid sequestrants (colestyramine) can be used in pregnancy but poorly tolerated',
        'Homozygous FH: extremely rare; very high cholesterol (often >15 mmol/L); needs specialist centre (LDL apheresis, lomitapide, inclisiran)',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'Lipid clinic: UHDB Queen\'s Hospital Burton lipid/metabolic clinic — via e-RS; include untreated lipid profile, family history, clinical signs (tendon xanthoma?)',
        'Alternative: Good Hope Hospital (UHB) lipid clinic',
        'Genetic testing: via lipid clinic who will coordinate referral to genetics (QEHB Birmingham Molecular Genetics)',
        'Cascade testing coordination: the lipid clinic usually contacts and tests family members — ensure patient is aware to inform family',
        'Heart UK (heartuk.org.uk): national FH charity — excellent patient resources and FH support',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CG71 — Familial Hypercholesterolaemia', url: 'https://www.nice.org.uk/guidance/cg71' },
        { label: 'NICE NG238 — Cardiovascular Disease Risk', url: 'https://www.nice.org.uk/guidance/ng238' },
        { label: 'Heart UK — FH', url: 'https://www.heartuk.org.uk/genetic-conditions/familial-hypercholesterolaemia' },
        { label: 'FHSCORE — UK FH Screening', url: 'https://fhscore.eu/' },
      ],
    },
  ],
}
