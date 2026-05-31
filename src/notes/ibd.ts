import type { Note } from '../data/notes'

export const ibd: Note = {
  id: 'ibd',
  title: 'Inflammatory Bowel Disease (IBD)',
  subtitle: 'UC, Crohn\'s, faecal calprotectin, inducing remission, flare management and extraintestinal features',
  tags: ['gastroenterology'],

  body: 'inflammatory bowel disease IBD ulcerative colitis UC Crohns Crohn disease mesalazine azathioprine mercaptopurine AZA methotrexate infliximab biologics faecal calprotectin FIT test colonoscopy microscopic colitis budesonide TPMT Truelove Witts flare remission PSC primary sclerosing cholangitis uveitis erythema nodosum pyoderma gangrenosum surgery fistulae strictures',

  content: [

    { type: 'heading', level: 2, text: 'Background and Classification' },

    {
      type: 'table',
      headers: ['Feature', 'Ulcerative Colitis (UC)', 'Crohn\'s Disease (CD)'],
      rows: [
        ['Prevalence', '~1% of population UK; peak onset 15–35y (2nd peak 50s–60s)', 'Similar prevalence; any age'],
        ['Distribution', 'Continuous from rectum proximally — partial thickness mucosa only; always involves rectum', 'Full thickness; anywhere mouth to anus; skip lesions; can spare rectum'],
        ['Predominant symptoms', 'PR bleeding, diarrhoea, tenesmus, urgency — bleeding predominant', 'Abdominal pain, diarrhoea, weight loss, malabsorption — pain/WL predominant'],
        ['Complications', 'Toxic megacolon, colorectal cancer, PSC', 'Fistulae, strictures, abscesses, malabsorption, short bowel; surgery in >50%'],
        ['Smoking', 'Smoking possibly protective in UC; cessation may worsen UC', 'Smoking significantly worsens Crohn\'s — always advise cessation'],
        ['Microscopic colitis', 'Normal colonoscopy but biopsy shows collagenous/lymphocytic inflammation; watery diarrhoea; associated with NSAIDs, aspirin, SSRIs, PPIs; treat with budesonide 9 mg for 8 weeks then taper', ''],
      ],
    },

    { type: 'heading', level: 2, text: 'Clinical Features and Red Flags' },

    {
      type: 'list',
      items: [
        'Symptoms: PR bleeding, diarrhoea (mucus, blood), tenesmus, abdominal pain, weight loss/faltering growth, fatigue, systemic upset',
        'Signs: abdominal tenderness, abdominal mass (Crohn\'s), perianal disease (fistulae, skin tags, abscesses — highly specific for Crohn\'s), clubbing (Crohn\'s)',
        'Distinguish from IBS: red flags = PR bleeding, nocturnal symptoms, weight loss, systemic features, age >50, raised inflammatory markers — all warrant investigation; IBS is a diagnosis of exclusion',
        'Investigations: FBC (anaemia, raised platelets), U&E, LFT, bone profile, CRP, TFT, coeliac screen, CA125 (in women >50 with GI symptoms)',
        'Stool tests: MC&S (exclude infection before diagnosing IBD flare), faecal calprotectin (see below), FIT test if meets NICE criteria',
        'FIT test: if age >40 with unexplained abdominal pain/weight loss, >50 with rectal bleeding, >60 with IDA/CIBH — if FIT >10 μg/g: 2WW colorectal referral',
      ],
    },

    { type: 'heading', level: 2, text: 'Faecal Calprotectin — Interpretation' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Faecal Calprotectin — Primary Care Guide',
      items: [
        'Protein released by neutrophils in inflamed bowel — very sensitive marker for intestinal inflammation; NOT specific (raised by infection, NSAIDs, colorectal cancer, polyps)',
        '<100 μg/g: IBD unlikely — if all other investigations normal and positive IBS criteria met, diagnose IBS; however if age >50 and calprotectin >50 → routine gastro referral',
        '100–250 μg/g: repeat in 4–6 weeks and refer routine gastroenterology; if rising >250 on repeat → urgent gastro referral',
        '>250 μg/g: urgent gastro referral; if systemically unwell (tachycardia, fever, acute abdomen) → ADMIT',
        'Note: calprotectin can be falsely elevated by NSAIDs, aspirin, PPIs, SSRIs — review medication before interpretation',
      ],
    },

    { type: 'heading', level: 2, text: 'Diagnosis (Secondary Care)' },

    {
      type: 'list',
      items: [
        'Colonoscopy + biopsy: gold standard — confirms diagnosis and extent; skip lesions and cobblestone mucosa suggest Crohn\'s; continuous inflammation from rectum suggests UC',
        'Capsule endoscopy: small bowel extent in Crohn\'s (must exclude strictures first)',
        'CT/MRI abdomen and pelvis: assess extent, complications (fistulae, abscesses, strictures)',
        'MRI small bowel (MR enterography): preferred for Crohn\'s small bowel assessment — avoids radiation',
        'Perianal MRI: if perianal fistulae suspected',
      ],
    },

    { type: 'heading', level: 2, text: 'Inducing Remission' },

    {
      type: 'table',
      headers: ['Drug', 'Use', 'Details'],
      rows: [
        ['Mesalazine (5-ASA)', 'UC induction and maintenance', 'Rectal (suppository/foam/enema) first for proctitis; add oral if left-sided/pancolitis; topical often preferred — maintains remission well; dose 2.4–4.8 g/day; monitor renal function (rare nephrotoxicity)'],
        ['Corticosteroids (prednisolone)', 'Moderate–severe flare (UC and CD)', 'Prednisolone 40 mg OD tapering 5 mg/week over 8 weeks; budesonide (Cortiment/Entocort) for right-sided Crohn\'s — less systemic S/E; NEVER for maintenance — check FRAX, Vit D/Ca supplements, DEXA if prolonged use'],
        ['Azathioprine (AZA) / Mercaptopurine', 'Maintenance — UC and CD; steroid-sparing', 'Check TPMT activity before starting — low TPMT = risk of myelosuppression; start low (50 mg), titrate up; FBC monthly for 3 months then 3-monthly; hepatotoxicity risk — LFTs; takes 3–6 months to work; avoid live vaccines'],
        ['Methotrexate (MTX)', 'Crohn\'s maintenance if AZA failed/intolerant', 'IM or SC injection; folic acid 5 mg/week; teratogenic — effective contraception essential; monitor FBC and LFTs; avoid in liver disease and heavy alcohol use'],
        ['Biologicals (infliximab, adalimumab, vedolizumab, ustekinumab)', 'Moderate–severe UC or CD failing 2 conventional agents', 'Anti-TNF (infliximab IV or adalimumab SC) or gut-selective (vedolizumab) or IL-12/23 (ustekinumab); exclude TB, hepatitis B before starting; no live vaccines; high SCC/BCC risk (anti-TNF) — annual skin check'],
        ['Enteral nutrition (polymeric feed)', 'Crohn\'s in children — equivalent to steroids for induction', 'Preferred over steroids in children to avoid growth suppression; exclusive enteral nutrition for 6–8 weeks'],
      ],
    },

    { type: 'heading', level: 2, text: 'Managing IBD Flare in Primary Care' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Truelove & Witts Criteria — Admit if Severe UC Flare',
      items: [
        'Severe UC: >6 bloody stools/day PLUS any of: HR >90, fever >37.8°C, Hb <10.5 g/dL, ESR >30 mm/hr, CRP >30 mg/L → ADMIT for IV steroids',
        'In primary care: always check bloods (FBC, CRP, U&E, LFT) and faecal calprotectin in suspected flare',
        'Stool MC&S: always exclude infection (C. diff, Salmonella, Campylobacter) before treating as IBD flare — especially if recent antibiotics (C. diff)',
        'If not admitting: contact IBD nurse specialist team (most trusts have direct line); they will advise on oral prednisolone (usually 30–40 mg OD for 6–8 weeks, tapering by 5 mg/week)',
        'Follow up all flares within 3 days of starting steroids to ensure response',
        'Avoid NSAIDs and opiates long-term — NSAIDs can trigger flares; opiates risk toxic megacolon and ileus in UC',
        'Loperamide: safe for symptom control in CD without strictures; exclude infection first',
      ],
    },

    { type: 'heading', level: 2, text: 'Extraintestinal Manifestations' },

    {
      type: 'table',
      headers: ['System', 'Feature', 'Notes'],
      rows: [
        ['Hepatobiliary', 'Primary sclerosing cholangitis (PSC) — in 5% UC; stricturing of bile ducts; high cholangiocarcinoma risk; liver transplant may be needed; raised ALP; MRCP/ERCP for diagnosis', 'Autoimmune hepatitis, gallstones (Crohn\'s — malabsorption of bile salts)'],
        ['Musculoskeletal', 'Seronegative arthritis (peripheral — correlates with gut activity); axial arthropathy/sacroiliitis (independent of gut activity); HLAB27 associated', 'Treat with sulfasalazine; avoid NSAIDs if possible; refer rheumatology'],
        ['Ophthalmic', 'Anterior uveitis (urgent ophthalmology — painful red eye, visual blurring); episcleritis/scleritis (correlates with gut activity)', 'Uveitis may occur without active gut disease'],
        ['Skin', 'Erythema nodosum (correlates with gut activity — tender red nodules, shins); pyoderma gangrenosum (independent of gut activity — deep necrolytic ulcers, common on legs; systemic prednisolone)', 'Pyoderma gangrenosum requires specialist management; biopsy if uncertain'],
      ],
    },

    { type: 'heading', level: 2, text: 'Practical Considerations in Primary Care' },

    {
      type: 'list',
      items: [
        'Vaccinations: annual flu, 5-yearly pneumococcal, Hep B if not immune — give ALL before starting biologicals or immunosuppressants; no live vaccines if on DMARD/biologicals (ensure vaccinated ≥4 weeks before starting); check Green Book',
        'Nutrition: 85% of IBD patients are malnourished; 1/3 have iron deficiency anaemia (treat with IV iron if oral not tolerated or severe anaemia) — refer dietitian',
        'Contraception: UKMEC 1 for most contraceptive methods in IBD; LARCs preferred; oral hormonal contraception may have reduced efficacy if severe malabsorption (Crohn\'s with extensive small bowel involvement)',
        'Fertility: most IBD patients have normal fertility; active fistulating disease or pelvic surgery in Crohn\'s reduces fertility; mesalazine/sulfasalazine can reduce sperm count (reversible); MTX must be stopped ≥3 months pre-conception (teratogenic); refer specialist if pregnant or planning pregnancy',
        'IBD in children: 1/3 present under 20 — low threshold to check faecal calprotectin and inflammatory markers if GI symptoms, weight loss, or faltering growth; significant impact on growth, puberty, and nutrition; elemental diet as first-line in children with Crohn\'s',
        'Colorectal cancer risk: UC with pan-colitis — increased CRC risk from 8–10 years after diagnosis; surveillance colonoscopy every 1–5 years depending on extent and histological activity; Crohn\'s colitis similar risk',
        'Signpost: Crohn\'s & Colitis UK (crohnsandcolitis.org.uk); CICRA (Crohn\'s in Childhood Research Association) for paediatric cases',
      ],
    },

  ],
}
