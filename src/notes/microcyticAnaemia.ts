import type { Note } from '../data/notes'

export const microcyticAnaemia: Note = {
  id: 'microcytic-anaemia',
  title: 'Microcytic Anaemia',
  subtitle: 'Investigation, diagnosis and management',
  tags: ['haematology', 'anaemia', 'iron deficiency', 'IDA'],
  body: 'microcytic anaemia iron deficiency ferritin TIBC transferrin thalassaemia sideroblastic ACD anaemia chronic disease oral iron ferrous sulphate fumarate gluconate replacement haematology koilonychia glossitis restless legs Plummer Vinson FIT test coeliac ferric maltol Feraccru Sytron sodium feredetate hepcidin alternate day dosing IBD inflammatory bowel disease absorption elemental iron cost',

  content: [

    // ── INITIAL INVESTIGATION ─────────────────────────────────────
    { type: 'heading', level: 2, text: 'Initial Investigation' },
    {
      type: 'list',
      items: [
        'Repeat FBC with ferritin',
        'Consider iron studies (serum iron, TIBC, transferrin, TSAT)',
        'Hbopathy screen (Hb electrophoresis) if thalassaemia suspected',
        'Coeliac serology (tTG) if malabsorption suspected',
      ],
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Mixed deficiency',
      items: [
        'Look at the whole picture — dual pathology (e.g. IDA + ACD) is common',
        'MCV may be misleadingly normal if combined B12/folate deficiency coexists with iron deficiency',
      ],
    },

    // ── IRON STUDIES TABLE ───────────────────────────────────────
    { type: 'heading', level: 2, text: 'Iron Studies — Pattern Recognition' },
    {
      type: 'table',
      caption: 'Typical patterns of iron studies by diagnosis. ↓ = low, ↑ = high, ↔ = normal, — = variable',
      headers: ['Condition', 'MCV', 'Serum Iron', 'Ferritin', 'TIBC', 'Transferrin', 'TSAT'],
      rows: [
        ['Iron deficiency anaemia',  '↓',   '↓',    '↓',   '↑',    '↑',    '↓'],
        ['Anaemia of chronic disease', '↔/↓', '↓',  '↑/↔', '↓',    '↓',    '↓/↔'],
        ['Thalassaemia minor',        '↓',   '↔',   '↔',   '↔',    '↔',    '↔'],
        ['Thalassaemia major',        '↓',   '↔/↑', '↑',   '↓',    '↓',    '↑'],
        ['Sideroblastic anaemia',     '↓',   '↑',   '↑',   '↔/↑',  '—',    '↑'],
        ['Iron overload',             '↔',   '↑',   '↑',   '↓',    '—',    '↑'],
      ],
    },

    {
      type: 'image',
      src: '/images/Iron-panel-1-800x253.jpg.webp',
      alt: 'Iron studies patterns by condition',
      caption: 'Source: LearnHaem — iron studies patterns across common conditions',
    },

    // ── FERRITIN NOTES ───────────────────────────────────────────
    {
      type: 'callout',
      variant: 'warning',
      title: 'Ferritin — important caveats',
      items: [
        'Best correlate for total body iron stores — but raised by inflammation, malignancy, liver disease and renal disease',
        'Normal range 20–300 µg/L; may drop to ~15 µg/L during menstruation',
        'CKD: lower cut-off applies (<100 µg/L; <200 µg/L if on dialysis) due to inflammation and renal failure elevating levels',
        'May be iron-deficient with a normal or raised ferritin — always check iron studies if doubt',
      ],
    },

    // ── IDA ──────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Iron Deficiency Anaemia (Low Ferritin)' },
    { type: 'heading', level: 3, text: 'Common Causes' },
    {
      type: 'list',
      items: [
        'GI blood loss — especially malignancy (LGI or UGI); always examine and arrange FIT test in any adult (consider in any patient >60 with unexplained anaemia)',
        'Gynaecological blood loss — heavy menstrual bleeding; refer via HMB pathway',
        'Other GU causes — urine dip for haematuria',
        'Malabsorption — coeliac disease, previous gastric surgery, PPI use (reduces gastric acid → impairs iron absorption)',
        'Dietary — vegetarians, vegans, restricted diets',
      ],
    },
    {
      type: 'callout',
      variant: 'danger',
      title: 'Urgent referral indications',
      items: [
        'Upper GI symptoms OR unexplained Hb <110 g/L (men) / <100 g/L (non-menstruating women) → 2WW UGI + LGI endoscopy',
        'Family history of colorectal cancer (2× first-degree relatives, or 1× first-degree relative aged <50) → 2WW LGI endoscopy',
      ],
    },
    { type: 'heading', level: 3, text: 'Investigation Pathway' },
    {
      type: 'list',
      items: [
        'Coeliac serology (tTG) in all patients with IDA',
        'Dietary history',
        'Urine dip for blood',
        'Consider stool parasitology in at-risk patients',
        'FIT test — arrange in any adult with unexplained IDA; arrange top-and-tail scopes if indicated',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Iron deficiency or microcytosis without anaemia',
      items: [
        'Common finding — still carries a risk of "hidden" cancer',
        'Arrange FIT test, urine dip, and CXR if focal symptoms',
        'Check iron studies; consider alternate-day ferrous if treating',
      ],
    },

    // ── NORMAL / HIGH FERRITIN ──────────────────────────────────
    { type: 'heading', level: 2, text: 'Normal or High Ferritin — Differential Diagnosis' },
    {
      type: 'table',
      headers: ['Diagnosis', 'Key Features', 'Next Step'],
      rows: [
        ['Anaemia of chronic disease (ACD)', 'Low serum iron, low TIBC/transferrin, low TSAT — ferritin normal or high', 'Treat underlying cause; IV iron if IDA coexists'],
        ['Thalassaemia trait (minor)', 'Marked microcytosis disproportionate to mild anaemia; TSAT normal', 'Hb electrophoresis (↑HbA2 in β-thal)'],
        ['Thalassaemia major', 'Severe microcytic anaemia; iron overloaded — do NOT supplement iron', 'Haematology referral'],
        ['Sideroblastic anaemia', 'Raised serum iron and TSAT; ring sideroblasts on blood film', 'Haematology referral'],
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Dual pathology — IDA + ACD',
      items: [
        'Common in patients with chronic inflammatory disease',
        'Oral iron often poorly absorbed — IV iron (ferrinject) usually needed',
        'Haemoglobin will only partially correct even with iron replacement',
      ],
    },

    // ── ALGORITHM IMAGE ─────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Anaemia Investigation Algorithm' },
    {
      type: 'image',
      src: '/images/0e6ccc4db2655fc445149035c30d616fa57eeaab-1223x862.png',
      alt: 'Anaemia investigation algorithm — MCV-based flowchart',
      caption: 'Anaemia investigation algorithm. Hb <130 g/L men, <115 g/L non-pregnant women.',
    },

    // ── REPLACEMENT ─────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Iron Replacement' },
    { type: 'heading', level: 3, text: 'Oral Iron — First-Line (Ferrous Salts)' },
    {
      type: 'table',
      caption: 'All ferrous salts should be taken on an empty stomach. Costs are approximate NHS indicative prices.',
      headers: ['Preparation', 'Elemental Fe', 'Dose', 'Approx. cost/month', 'Notes'],
      rows: [
        ['Ferrous sulphate 200 mg', '65 mg', 'OD on empty stomach', '~£1', 'First-line; most evidence base; available as standard tablet'],
        ['Ferrous fumarate 210 mg', '68 mg', 'OD on empty stomach', '~£2', 'Equivalent to sulphate; use if sulphate not tolerated'],
        ['Ferrous gluconate 300 mg', '35 mg', 'BD on empty stomach (600 mg/day)', '~£2', 'Lower elemental Fe per tablet; mildly better GI tolerability; useful if partial intolerance'],
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Optimising absorption',
      items: [
        'Take on a completely empty stomach — food, tea, coffee, dairy and PPIs all significantly reduce absorption',
        'Once-daily is sufficient — do not prescribe BD or TDS; higher doses increase side effects without proportionally improving absorption',
        'Vitamin C (100–200 mg) or a small glass of orange juice taken alongside iron enhances absorption',
        'Alternate-day dosing is a validated evidence-based strategy — see below for mechanism',
      ],
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Why alternate-day dosing works — the hepcidin mechanism',
      items: [
        'After each oral iron dose, duodenal enterocytes trigger hepcidin release from the liver within 6–8 hours',
        'Hepcidin degrades ferroportin (the iron exporter on enterocytes), blocking further iron absorption for ~24 hours',
        'Daily dosing means each successive dose hits elevated hepcidin → reduced fractional absorption + more free iron in the gut lumen → nausea, constipation',
        'Alternate-day dosing allows hepcidin to fall back to baseline between doses — maximising fractional absorption per dose',
        'Moretti et al. (Lancet Haematol, 2015): alternate-day dosing absorbed ~40% more total iron than consecutive-day dosing',
        'Particularly valuable when GI side effects are limiting adherence — single alternate-day doses cause less luminal irritation',
      ],
    },

    { type: 'heading', level: 3, text: 'Oral Iron — Alternative Preparations' },
    {
      type: 'table',
      caption: 'Consider when ferrous salt tablets are not tolerated or cannot be swallowed. Costs are approximate.',
      headers: ['Preparation', 'Elemental Fe', 'Dose', 'Approx. cost', 'Indications'],
      rows: [
        [
          'Sytron (sodium feredetate) liquid 190 mg/5 ml',
          '27.5 mg/5 ml',
          'Treatment: 5 ml TDS\nProphylaxis: 5 ml BD',
          '~£7 / 500 ml bottle',
          'Cannot swallow tablets; children; GI intolerance to ferrous salts; lower elemental Fe so better tolerated but slower repletion',
        ],
        [
          'Ferric maltol 30 mg capsule (Feraccru)',
          '30 mg',
          '30 mg BD on empty stomach',
          '~£160 / month (NICE TA475)',
          'IBD (Crohn\'s, UC) — licensed specifically for iron deficiency in IBD; ferric iron (Fe³⁺) not reduced to Fe²⁺ in gut so less luminal free iron and fewer GI side effects; use when ferrous salts failed or not tolerated in IBD',
        ],
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Ferric maltol (Feraccru) — important prescribing notes',
      items: [
        'Significantly more expensive than ferrous salts (~160× the cost) — reserve for IBD or confirmed intolerance/malabsorption',
        'Ferric (Fe³⁺) form: absorbed via a different pathway (ferric reductase-independent) — less dependent on gastric acid, potentially useful post-bariatric surgery',
        'Works more slowly than ferrous salts — do not switch simply due to slow response; allow 12 weeks before reassessing',
        'NICE TA475 (2019): recommended for iron deficiency in adults with IBD when ferrous salts have failed or are not tolerated',
        'Do NOT co-prescribe with oral phosphate binders — significantly reduces absorption',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Sytron — practical tips',
      items: [
        'Reasonably palatable liquid — useful for patients who struggle with tablets or have dose-related GI side effects',
        'Lower elemental Fe per dose than standard ferrous tablets — response may be slower; check Hb at 4–6 weeks',
        'Can be mixed with orange juice to improve taste and enhance absorption',
        'Consider in children: dose by weight using BNFc (typically 3 mg/kg/day elemental iron in divided doses)',
      ],
    },
    { type: 'heading', level: 3, text: 'Monitoring Schedule' },
    {
      type: 'table',
      headers: ['Timepoint', 'Action'],
      rows: [
        ['1 month',         'Recheck FBC; confirm cause investigations underway'],
        ['Hb normalised',   'Continue ferrous for 3 months, then stop'],
        ['Hb improved but not normal', 'Continue 3 further months, recheck; if normalised continue 3 months then stop'],
        ['Hb not improving','Check adherence; refer for IV ferrinject (also if oral not tolerated, malabsorption, or haemodialysis)'],
        ['After stopping',  'Check FBC + ferritin 3-monthly for 1 year to monitor for recurrence'],
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Not improving on oral iron?',
      items: [
        'Consider malabsorption (coeliac, gastric surgery, PPI)',
        'Consider functional iron deficiency or ACD — oral iron will not correct adequately',
        'Refer for IV iron (ferrinject) if not tolerating oral or not absorbing',
      ],
    },

    // ── CLINICAL SIGNS ───────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Clinical Signs of Iron Deficiency' },
    {
      type: 'list',
      items: [
        'Koilonychia (spoon-shaped nails)',
        'Glossitis and angular stomatitis',
        'Alopecia',
        'Restless legs syndrome — check ferritin even without anaemia',
        'Plummer–Vinson syndrome — dysphagia + IDA + oesophageal web (rare)',
      ],
    },

    // ── IRON STUDIES DETAIL ──────────────────────────────────────
    { type: 'heading', level: 2, text: 'Iron Studies — Technical Notes' },
    {
      type: 'table',
      headers: ['Test', 'What It Measures', 'Interpretation Notes'],
      rows: [
        ['Serum iron', 'Iron bound to transferrin in blood', 'Highly variable with diet, infection, inflammation — poor stand-alone test'],
        ['Transferrin / TIBC', 'Iron-transporting protein; TIBC = available binding sites on transferrin', 'High/normal in IDA (maximises utilisation); low in ACD. Oral iron can raise transferrin/TIBC'],
        ['TSAT (transferrin saturation)', 'Ratio of serum iron to TIBC: Fe/TIBC × 100, or Fe/TF × 70.9', 'Better test for iron overload than deficiency; normal <45%'],
      ],
    },
  ],
}
