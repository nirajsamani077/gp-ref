import type { Note } from '../data/notes'

export const lungCancer: Note = {
  id: 'lung-cancer',
  title: 'Lung Cancer',
  subtitle: '2WW criteria, urgent CXR, staging, SCLC vs NSCLC, paraneoplastic syndromes and palliative care',
  tags: ['cancer', 'respiratory'],

  body: 'lung cancer NSCLC SCLC small cell non-small cell adenocarcinoma squamous cell carcinoma large cell 2WW two week wait haemoptysis urgent CXR CT thorax staging lobectomy VATS EGFR ALK PD-L1 immunotherapy checkpoint inhibitor carboplatin cisplatin radiotherapy stereotactic SABR SIADH Horner syndrome clubbing hypertrophic osteoarthropathy HPOA paraneoplastic low-dose CT screening McMillan',

  content: [

    { type: 'heading', level: 2, text: '2WW and Urgent CXR Referral Criteria' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'NICE 2WW — Lung Cancer Referral Criteria',
      items: [
        '2WW to chest clinic: age ≥40 with haemoptysis (any amount), OR incidental CXR/CT findings suspicious for lung cancer',
        'Urgent CXR within 2 weeks: age ≥40 with ≥2 of: cough, fatigue, SOB, chest pain, weight loss, appetite loss; OR age ≥40 with ≥1 if: smoker/ex-smoker, asbestos exposure, finger clubbing, supraclavicular or persistent cervical lymphadenopathy, signs of pleural effusion or consolidation',
        'FBC: thrombocytosis (raised platelets) in age ≥40 — urgent CXR (even without respiratory symptoms)',
        'If CXR normal but clinical suspicion remains: direct-access CT thorax (CT has much higher sensitivity than CXR — misses 20% of cancers); or 2WW if high clinical concern',
        'Haemoptysis in <40: investigate for other causes (TB, bronchiectasis, pulmonary embolism) — but do not delay if other risk features present; low threshold for CXR',
      ],
    },

    { type: 'heading', level: 2, text: 'Epidemiology and Risk Factors' },

    {
      type: 'list',
      items: [
        'Most common cause of cancer death in UK; ~47,000 new cases/year; 5-year survival ~16% (most diagnosed late)',
        'Smoking: causes 90% of lung cancer; 25× relative risk; also causes SCC, SCLC, large cell; even ex-smokers remain at increased risk for years; stopping smoking at any stage reduces risk (and in diagnosed patients reduces recurrence and treatment failure)',
        'Asbestos exposure: mesothelioma (mesothelium cancer — separate from lung cancer; fibrous plaques on CXR) + synergistic with smoking for SCC; long latency (20–50 years after exposure)',
        'Other risk factors: radon gas (naturally occurring; second most common cause in UK — check home radon levels in high-risk areas), passive smoking, air pollution, EGFR mutations (non-smokers — adenocarcinoma), BRAF mutations, family history',
        'Rising incidence in non-smokers: adenocarcinoma (peripheral, mucin-producing) increasingly common in non-smokers; targetable gene mutations (EGFR, ALK, ROS1, BRAF) more common — important for treatment',
      ],
    },

    { type: 'heading', level: 2, text: 'Symptoms and Paraneoplastic Features' },

    {
      type: 'table',
      headers: ['Feature', 'Details'],
      rows: [
        ['Common symptoms', 'Cough (most common), SOB, haemoptysis (only 5% at diagnosis — do not dismiss), chest pain, recurrent LRTI (obstructing tumour), wheeze (monophonic, fixed)'],
        ['Mediastinal/local invasion', 'Hoarseness (left recurrent laryngeal nerve palsy — mediastinal invasion); dysphagia (oesophageal compression); SVC obstruction (facial/arm oedema, raised JVP, prominent collateral veins on chest); phrenic nerve palsy (raised hemidiaphragm)'],
        ['Horner\'s syndrome', 'Apical/Pancoast tumour invading sympathetic chain: miosis (small pupil), partial ptosis, anhidrosis (loss of sweating on ipsilateral face), enophthalmos; often with shoulder/arm pain (brachial plexus involvement)'],
        ['Paraneoplastic syndromes', 'SIADH (hyponatraemia — SCC most common); hypercalcaemia (PTHrP secretion — SCC); Cushing\'s syndrome (ectopic ACTH — SCLC); SIADH (SCLC); peripheral neuropathy; Lambert-Eaton myasthenic syndrome (LEMS — SCLC — proximal weakness, absent reflexes, improves with repeated use)'],
        ['HPOA/Clubbing', 'Hypertrophic pulmonary osteoarthropathy — periosteal new bone formation; painful wrists/ankles; clubbing; most common with NSCLC'],
      ],
    },

    { type: 'heading', level: 2, text: 'Histological Classification' },

    {
      type: 'table',
      headers: ['Type', 'Characteristics', 'Key Points'],
      rows: [
        ['Adenocarcinoma', '35–40%; peripheral tumour; gland-forming; most common in non-smokers; women; more likely to have targetable mutations (EGFR, ALK, ROS1, BRAF, KRAS)', 'Biopsy for molecular profiling essential — guides targeted therapy'],
        ['Squamous Cell Carcinoma (SCC)', '25–30%; central, hilar, endobronchial; cavitation; causes haemoptysis; strongly associated with smoking; paraneoplastic hypercalcaemia (PTHrP)', 'Central location → more likely to obstruct airway/cause collapse'],
        ['Large Cell Carcinoma', '10–15%; peripheral; poorly differentiated; no specific markers; poor prognosis', 'Diagnosis of exclusion when no SCC or adenocarcinoma markers'],
        ['Small Cell Lung Cancer (SCLC)', '15%; central; neuroendocrine origin; very aggressive; rapid doubling time; almost always widespread at diagnosis; highly chemosensitive but recurs; paraneoplastic syndromes common (LEMS, SIADH, ectopic ACTH)', 'Limited stage (confined to chest) = chemo + radiotherapy; extensive stage = palliative chemo; prophylactic cranial irradiation (PCI) reduces brain mets'],
      ],
    },

    { type: 'heading', level: 2, text: 'Investigation and Staging' },

    {
      type: 'list',
      items: [
        'CXR: first-line — but misses ~20% of lung cancers (particularly small or centrally hidden lesions); any suspicious finding → CT thorax',
        'CT chest, abdomen, pelvis (with contrast): staging — assesses tumour size, lymph node involvement, distant metastases (liver, adrenals, bone)',
        'PET-CT: functional imaging — highly sensitive for nodal and distant metastasis; guides surgical decision-making; standard pre-operative staging',
        'Biopsy: bronchoscopy (central lesions), CT-guided needle biopsy (peripheral), EBUS (endobronchial USS — lymph node sampling), VATS biopsy; tissue diagnosis always required before treatment',
        'Molecular profiling (NGS — next generation sequencing): EGFR, ALK, ROS1, BRAF, KRAS, MET, RET mutations; PD-L1 expression — all guide treatment decisions in NSCLC',
        'Brain MRI: for all patients being considered for curative treatment (staging); SCLC (brain mets very common)',
        'Lung function (spirometry ± DLCO): surgical fitness assessment — minimum FEV1 post-resection predicted >0.8 L',
      ],
    },

    { type: 'heading', level: 2, text: 'Treatment by Stage' },

    {
      type: 'table',
      headers: ['Stage / Scenario', 'Treatment'],
      rows: [
        ['Early NSCLC (I–II, resectable)', 'Lobectomy via VATS (video-assisted thoracoscopic surgery) or open — surgical resection is curative intent; adjuvant chemotherapy for stage II; SABR (stereotactic ablative radiotherapy) for those unfit for surgery — excellent cure rates for small tumours'],
        ['Locally advanced NSCLC (III)', 'Concurrent chemoradiotherapy (cisplatin/carboplatin + etoposide or paclitaxel) ± consolidation immunotherapy (durvalumab); neoadjuvant chemo + immunotherapy before surgery for selected resectable IIIA'],
        ['Metastatic NSCLC (IV) — targetable mutation', 'Tyrosine kinase inhibitors (TKIs): EGFR+ → osimertinib; ALK+ → alectinib; ROS1+ → crizotinib; BRAF V600E → dabrafenib + trametinib; dramatic responses but eventual resistance'],
        ['Metastatic NSCLC (IV) — no mutation / PD-L1 >50%', 'Pembrolizumab monotherapy (checkpoint inhibitor — anti-PD-1); if PD-L1 <50%: platinum doublet chemo + pembrolizumab'],
        ['SCLC limited stage', 'Concurrent chemo (carboplatin + etoposide) + thoracic radiotherapy ± prophylactic cranial irradiation (PCI)'],
        ['SCLC extensive stage', 'Carboplatin + etoposide ± atezolizumab (immunotherapy); palliative intent; median survival ~10 months despite good initial response'],
        ['Mesothelioma', 'Palliative — chemotherapy (cisplatin + pemetrexed); immunotherapy (nivolumab + ipilimumab) increasingly used; surgery (pleurectomy/decortication) for selected patients; median survival 12–18 months; compensation via IIDB scheme'],
      ],
    },

    { type: 'heading', level: 2, text: 'Low-Dose CT Screening' },

    {
      type: 'list',
      items: [
        'Targeted lung health checks (TLHC): NHS programme expanding across England — offered to heavy smokers aged 55–74 in participating areas (LDCT every 1–2 years); reduces lung cancer mortality by 20–24% (NLST and NELSON trials)',
        'Not yet universally available UK-wide — check local programme; US USPSTF recommends annual LDCT for age 50–80 with ≥20 pack-years and current smoker or quit within 15 years',
        'Incidental pulmonary nodules: any solid nodule <8 mm on CT — follow BTS Fleischner Society guidelines (size, growth rate, solid vs subsolid, risk factors — smoking) → surveillance CT protocol or PET-CT if >8 mm; nodule pathway via radiology/respiratory team',
        'LDCT also incidentally detects coronary artery calcification (CAC) — important finding; record and consider statin/aspirin if significant',
      ],
    },

    { type: 'heading', level: 2, text: 'Supportive and Palliative Care' },

    {
      type: 'list',
      items: [
        'Refer to McMillan cancer support nurse at diagnosis — holistic support, benefit entitlements, emotional support',
        'Dyspnoea: low-dose oral morphine; hand-held fan to face; fans/cool air (stimulates facial receptors reducing breathlessness perception); treat underlying causes (effusion — pleurodesis, pleural drainage; SVC obstruction — dexamethasone + urgent oncology; bronchospasm — bronchodilators)',
        'Cough: opioids (codeine, morphine); benzonatate; physiotherapy; humidified air; treat reversible causes (post-nasal drip, GERD, infection)',
        'Superior vena cava obstruction (SVCO): urgent dexamethasone 16 mg OD → refer oncology for stenting/radiotherapy; emergency presentation',
        'Spinal cord compression (MSCC): bone mets → vertebral collapse → paraplegia; urgent MRI spine if back pain + neurological symptoms; dexamethasone 16 mg STAT → same-day oncology for radiotherapy/surgery',
        'Signpost: Macmillan Cancer Support (macmillan.org.uk), Cancer Care Map (local services), CRUK',
      ],
    },

  ],
}
