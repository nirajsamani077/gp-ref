import type { Note } from '../data/notes'

export const upperGiBleed: Note = {
  id: 'upper-gi-bleed',
  title: 'Upper GI Bleed (UGIB)',
  subtitle: 'Recognition, refer-to-ED, variceal vs peptic causes, contributing drugs and post-bleed care',
  tags: ['gastroenterology'],

  body: `upper GI bleed UGIB haematemesis melaena coffee ground vomit variceal peptic ulcer Mallory-Weiss Glasgow-Blatchford NSAID antiplatelet DOAC SSRI urea PPI H pylori eradication endoscopy`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CG141 — Acute Upper GI Bleeding', url: 'https://www.nice.org.uk/guidance/cg141' },
        { label: 'NICE CKS — Dyspepsia / GI Bleeding', url: 'https://cks.nice.org.uk/topics/dyspepsia-proven-peptic-ulcer/' },
        { label: 'Glasgow-Blatchford Score (MDCalc)', url: 'https://www.mdcalc.com/calc/518/glasgow-blatchford-bleeding-score-gbs' },
      ],
    },

    {
      type: 'para',
      text: 'Acute upper GI bleeding is a common emergency with a mortality of around 10%. The primary-care job is quick recognition and immediate referral — not risk-scoring at the bedside — while remembering that normal early observations do not exclude a significant bleed. Beyond the acute event, the GP has an important role afterwards: H. pylori eradication, rationalising the drugs that caused it, and follow-up of anaemia and (in variceal disease) liver disease.',
    },
    {
      type: 'callout',
      variant: 'danger',
      title: 'Refer Straight to ED',
      items: [
        'Acute upper GI bleeding is a serious, common emergency (~10% mortality) — refer immediately to hospital',
        'Presentations: haematemesis (fresh red or "coffee-ground"), melaena (black tarry stool), and (with brisk bleeds) haematochezia or collapse',
        'Important: a normal blood pressure and a normal haemoglobin do NOT reassure acutely — a raised pulse and raised urea (from digested blood) are better early markers; refer on a good history even if early observations look normal',
        'The Glasgow-Blatchford score helps risk-stratify and identify very-low-risk patients who might avoid admission — but the default in primary care is urgent referral',
      ],
    },

    { type: 'heading', level: 2, text: 'Causes & Contributing Drugs' },

    {
      type: 'list',
      items: [
        'Peptic ulcer disease and gastritis/erosions (commonest); oesophageal/gastric varices (in chronic liver disease — higher mortality); Mallory-Weiss tear (after retching/vomiting); malignancy; oesophagitis',
        'Drugs that contribute: NSAIDs and aspirin, antiplatelets (clopidogrel), anticoagulants (warfarin, DOACs), and SSRIs (impair platelet function — additive with NSAIDs)',
        'Always ask about alcohol/liver disease (variceal risk), prior ulcers/H. pylori, and the full drug list',
      ],
    },

    { type: 'heading', level: 2, text: 'Hospital Management (for awareness)' },

    {
      type: 'list',
      items: [
        'Resuscitation, risk scoring (Blatchford, then Rockall after endoscopy), and urgent upper GI endoscopy (within 24 hours; immediately after resuscitation if unstable)',
        'Variceal bleeding: terlipressin and prophylactic antibiotics, endoscopic band ligation',
        'Non-variceal: endoscopic haemostasis; PPI as indicated; reverse anticoagulation as appropriate',
      ],
    },

    { type: 'heading', level: 2, text: 'Post-Bleed Primary Care Follow-Up' },

    {
      type: 'callout',
      variant: 'info',
      title: 'After Discharge',
      items: [
        'H. pylori: ensure it has been tested and eradicated — note testing can be falsely negative on biopsy during an acute bleed, so retest (e.g. stool antigen/urea breath test) ≥2 weeks off PPI (a 2-week PPI washout is needed; famotidine can be used in the interim)',
        'Continue the PPI as advised; review the need for the precipitating drugs',
        'NSAIDs/aspirin/antiplatelets/anticoagulants: avoid unless essential — if essential, use the lowest dose with PPI cover (a COX-2 inhibitor has lower GI but higher cardiovascular risk)',
        'Review alcohol intake and, if varices, ensure hepatology follow-up and variceal surveillance',
        'Check FBC for ongoing anaemia and replace iron as needed',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'gord-dyspepsia', label: 'GORD & Dyspepsia', subtitle: 'Peptic ulcer disease, H. pylori testing and eradication' },
        { id: 'chronic-liver-disease', label: 'Chronic Liver Disease', subtitle: 'Variceal bleeding and portal hypertension' },
        { id: 'doacs', label: 'DOACs', subtitle: 'Anticoagulant-related bleeding and reversal' },
        { id: 'nsaids', label: 'NSAIDs', subtitle: 'GI risk, PPI co-prescribing and safer choices' },
        { id: 'oesophagogastric-cancer', label: 'Oesophageal & Gastric Cancer', subtitle: 'Malignancy as a cause — alarm features' },
      ],
    },

  ],
}
