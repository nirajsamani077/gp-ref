import type { Note } from '../data/notes'

export const allergicRhinitis: Note = {
  id: 'allergic-rhinitis',
  title: 'Allergic Rhinitis & Hayfever',
  subtitle: 'Classification, management ladder, pregnancy and referral to ENT',
  tags: ['allergy', 'ent'],

  body: 'allergic rhinitis hayfever seasonal perennial intermittent persistent house dust mite HDM pollen grass tree nasal steroid mometasone fluticasone Avamys Nasonex antihistamine loratadine cetirizine fexofenadine Dymista azelastine sodium cromoglicate montelukast LTRA prednisolone immunotherapy sublingual SLIT Grazax nasal polyps ENT sinusitis pregnancy rhinitis saline rinse ipratropium',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Classifying Rhinitis',
      items: [
        'Allergic rhinitis: nasal symptoms triggered by specific allergen (house dust mite, pollen, pet dander, moulds)',
        'Intermittent: symptoms <4 days/week OR <4 consecutive weeks',
        'Persistent: symptoms ≥4 days/week AND ≥4 consecutive weeks',
        'Severity: mild (normal sleep, daily activities, work/school) vs moderate/severe (any one of these impaired)',
        'Non-allergic rhinitis: vasomotor (cold air, strong smells), NARESwith eosinophils, drug-induced, pregnancy',
        'Symptoms: watery rhinorrhoea, nasal blockage, sneezing, itching — eye symptoms common in seasonal (grass/tree pollen)',
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Differential Diagnosis — Not All Rhinitis is Allergic',
      items: [
        'Nasal polyps — anosmia, bilateral obstruction, poor response to antihistamines → refer ENT',
        'Septal deviation — unilateral obstruction, no itching/sneezing',
        'Adenoid hypertrophy — children; mouth breathing, sleep disturbance, glue ear',
        'Foreign body — unilateral purulent discharge (especially children)',
        'Drug-induced: NSAIDs, aspirin, COCP, nasal decongestants (rhinitis medicamentosa), cocaine',
        'Endocrine: pregnancy (self-limiting), hypothyroidism',
        'Vasculitis: Churg-Strauss (eosinophilia + asthma), Granulomatosis with polyangiitis (Wegener\'s) — saddle nose deformity, systemic features',
      ],
    },

    { type: 'heading', level: 2, text: 'Management Ladder' },

    {
      type: 'table',
      headers: ['Step', 'Treatment', 'Notes'],
      rows: [
        ['All patients', 'Saline nasal irrigation OD–BD', 'Cooled boiled water + ½ tsp non-iodised salt + ½ tsp bicarbonate; use syringe to flush each nostril (bent over sink); clears allergens and reduces inflammation; safe in pregnancy'],
        ['Step 1A', 'Non-sedating antihistamine OD (or up to QDS)', 'Loratadine 10 mg OD (preferred in pregnancy), cetirizine 10 mg OD, fexofenadine 120 mg OD. Better for sneezing and watery discharge than nasal blockage'],
        ['Step 1B', 'Intranasal corticosteroid (INCS) spray', 'Mometasone (Nasonex/Clarinaze) or fluticasone furoate (Avamys): 2 sprays each nostril OD. Start 2 weeks before season. Technique: blow nose first, look down, use same hand same nostril, inhale gently (NOT fast sniff). Daily use essential for efficacy'],
        ['Step 1B note', 'INCS more effective than antihistamine for nasal blockage', 'INCS preferred over antihistamines when nasal blockage is dominant; can use both together for combined effect'],
        ['Step 2A', 'Intranasal antihistamine: Dymista (azelastine + fluticasone)', '2 sprays each nostril BD. Faster onset than INCS alone (antihistamine action). More cost-effective than combining oral antihistamine + INCS separately. Also helps eye symptoms'],
        ['Step 2B', 'Nasal sodium cromoglicate (Rynacrom)', '1 spray each nostril QDS. Mast cell stabiliser; safe in pregnancy; requires very regular use; less potent than INCS'],
        ['Step 2C', 'Nasal ipratropium (Rinatec)', '2 sprays TDS. For rhinorrhoea only (watery, drippy nose). Anticholinergic — dry mouth, urinary retention risk'],
        ['Step 3', 'Montelukast (leukotriene receptor antagonist)', '10 mg OD. Useful if comorbid asthma ("unified airways") or post-nasal drip/catarrh. Consider off-label. MHRA note: neuropsychiatric side effects — counsel patient'],
        ['Step 4', 'Short course oral prednisolone 30–40 mg OD (0.5 mg/kg) for 5 days', 'Last resort for severe/intractable symptoms (e.g. exam periods, critical events). Avoid long-term.'],
        ['Specialist', 'Sublingual immunotherapy (SLIT): Grazax for Timothy grass pollen rhinitis', 'Refer ENT: for sinus surgery, nasal phototherapy/laser, or after failure of all above options'],
      ],
      caption: 'Nasal spray technique is critical for efficacy — poor technique is the most common reason for treatment failure. Instruct in technique at every prescribing opportunity.',
    },

    { type: 'heading', level: 2, text: 'Rhinitis in Pregnancy' },

    {
      type: 'list',
      items: [
        'Pregnancy rhinitis: non-allergic, self-limiting — resolves within 2 weeks of delivery; oestrogen-mediated',
        'First-line: saline nasal irrigation (safe, effective)',
        'Second-line: intranasal fluticasone (Avamys) — safest intranasal steroid in pregnancy; very low systemic absorption',
        'Antihistamines if needed: loratadine preferred (most data in pregnancy); chlorphenamine (sedating) — avoid if breastfeeding',
        'Avoid: nasal decongestants (oxymetazoline/xylometazoline) — especially in first trimester; associated with vasoconstriction',
        'Montelukast: limited safety data — avoid unless clearly needed (discuss with obstetric team)',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'ENT referral (routine): UHDB Queen\'s Hospital Burton — primary ENT referral for South Staffordshire',
        'Alternative: Good Hope Hospital (UHB) or Cannock Chase Hospital for ENT',
        'Sublingual immunotherapy (SLIT): ENT at Good Hope or Birmingham allergy service — discuss via e-RS',
        'Urgent ENT (nasal obstruction with anosmia, suspected polyps, or unilateral symptoms): refer promptly — nasal polyps and unilateral disease need investigation',
        'Patient may prefer alternative local site — discuss at consultation',
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Safety Netting — When to Act Urgently',
      items: [
        'Same-day GP / urgent ENT: unilateral nasal obstruction + bloody discharge + cranial nerve involvement (headache, diplopia) — exclude malignancy',
        'Urgent ENT: anosmia with bilateral polyps, suspected Wegener\'s granulomatosis or other vasculitis',
        'Red flags: cacosmia (foul smell), epistaxis not responding to first aid, foreign body in child',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Allergic Rhinitis', url: 'https://cks.nice.org.uk/topics/rhinitis-allergic/' },
        { label: 'BSACI — Rhinitis Guidelines', url: 'https://www.bsaci.org/professional-resources/resources/guidelines/' },
        { label: 'Allergy UK — Rhinitis', url: 'https://www.allergyuk.org/information-and-advice/conditions-and-symptoms/allergic-rhinitis' },
        { label: 'NHS — Hayfever', url: 'https://www.nhs.uk/conditions/hay-fever/' },
      ],
    },
  ],
}
