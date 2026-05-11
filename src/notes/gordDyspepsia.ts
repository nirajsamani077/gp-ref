import type { Note } from '../data/notes'

export const gordDyspepsia: Note = {
  id: 'gord-dyspepsia',
  title: 'GORD & Dyspepsia',
  subtitle: 'Test and treat H. pylori, PPI prescribing, eradication therapy and deprescribing',
  tags: ['gastroenterology'],

  body: 'GORD gastro-oesophageal reflux disease dyspepsia heartburn PPI proton pump inhibitor omeprazole lansoprazole H pylori helicobacter pylori eradication triple therapy amoxicillin clarithromycin metronidazole stool antigen breath test OGD endoscopy H2RA famotidine alginate Gaviscon functional dyspepsia deprescribing 2WW upper GI heartburn alarm symptoms',

  content: [
    {
      type: 'callout',
      variant: 'danger',
      title: 'Urgent 2WW / Urgent Investigation — Do Not Miss',
      items: [
        'ANY upper abdominal mass or palpable epigastric mass: 2WW upper GI',
        'Dysphagia: 2WW upper GI (see dysphagia note)',
        'Age >55 with unexplained weight loss + upper abdominal symptoms (pain, GORD): 2WW upper GI',
        'Age >40 with FHx of upper GI cancer or ethnicity (South/East Asian): 2WW upper GI',
        'Haematemesis or melaena: same-day emergency admission (UGIB)',
        'Consider biliary and cardiac causes of upper abdominal symptoms before treating as GORD',
        'Non-urgent OGD: age >55 with dyspepsia/GORD without weight loss, anaemia, raised platelets, nausea/vomiting',
      ],
    },

    { type: 'heading', level: 2, text: 'Other GI Malignancy Criteria' },

    {
      type: 'list',
      items: [
        'Age >60 with unexplained weight loss + abdominal pain + new diabetes: direct access CT abdomen (pancreatic cancer pathway)',
        'Colorectal cancer: FIT + criteria based on age — see colorectal cancer note',
      ],
    },

    { type: 'heading', level: 2, text: 'Lifestyle Measures (All Patients)' },

    {
      type: 'list',
      items: [
        'Weight loss — obesity increases intra-abdominal pressure and worsens reflux',
        'Reduce smoking and alcohol — both lower LOS pressure and increase acid production',
        'Avoid/reduce NSAIDs and aspirin if possible (COX-2 inhibitor alternative for high-risk patients)',
        'Small, regular meals; avoid late-night eating; avoid spicy, fatty foods',
        'Elevate head of bed 15–20 cm; sleep on left side',
        'Trial OTC antacids/alginates: Gaviscon / Peptac (sodium alginate + calcium carbonate + sodium bicarbonate) 10–20 mL after meals and at bedtime',
      ],
    },

    { type: 'heading', level: 2, text: 'First-Line Management — Two Equally Valid Approaches' },

    {
      type: 'callout',
      variant: 'info',
      title: '"Test and Treat" vs "Treat and Test" — Interchangeable First Line',
      items: [
        'Both approaches are acceptable first line for uncomplicated dyspepsia/GORD',
        'TREAT first: full-dose PPI for 1 month (omeprazole 20 mg OD, lansoprazole 30 mg OD); if improved, stop and trial PRN (omeprazole 10 mg); if not improved → TEST for H. pylori',
        'TEST first: H. pylori stool antigen test OR urea breath test; STOP PPI 2 weeks before test and antibiotics 4 weeks before test (can use famotidine as bridging agent meanwhile). If positive: H. pylori eradication; if negative: full-dose PPI as above',
        'PPI is more effective when taken on an empty stomach 30 minutes before breakfast',
      ],
    },

    { type: 'heading', level: 2, text: 'H. pylori Eradication Therapy' },

    {
      type: 'table',
      headers: ['Regimen', 'Drug Combination', 'Duration'],
      rows: [
        ['First line (standard triple therapy)', 'Omeprazole 20 mg BD + amoxicillin 1 g BD + clarithromycin 500 mg BD', '7 days'],
        ['If penicillin allergy', 'Omeprazole 20 mg BD + clarithromycin 500 mg BD + metronidazole 400 mg BD', '7 days'],
        ['If clarithromycin resistance suspected (treatment failure)', 'Levofloxacin-based quadruple therapy or bismuth quadruple therapy — specialist/second line', '10–14 days'],
      ],
      caption: 'Always complete the full course. Confirm eradication: repeat H. pylori stool antigen test or breath test at least 4 weeks after completing eradication (and 2 weeks after stopping PPI) — test-of-cure is indicated if initial test was positive.',
    },

    { type: 'heading', level: 2, text: 'Second and Third Line / Refractory GORD' },

    {
      type: 'list',
      items: [
        'Try the other approach (test vs treat): double-dose PPI (omeprazole 40 mg OD, or lansoprazole 30 mg BD)',
        'H2RA (H2 receptor antagonist): famotidine — switch for 1 month trial; comparable cost-effectiveness to PPI but weaker evidence',
        'Note: ranitidine is withdrawn from UK market due to NDMA contamination risk — do NOT prescribe',
        'H. pylori re-test if eradication success is uncertain (e.g. known ulcer, FHx gastric cancer)',
        'Consider alternative diagnoses: abdominal USS (gallstones), coeliac serology',
        'Functional dyspepsia: epigastric pain (not retrosternal burning) lasting >8 weeks with negative investigations — amitriptyline 10 mg at night titrated up to 50 mg weekly + CBT; refer if not responding',
        'Refer for 2WW OGD or routine OGD if ongoing doubt or inadequate response — OGD is definitive',
        'Laparoscopic fundoplication surgery: for refractory GORD not controlled by PPI — secondary care decision',
      ],
    },

    { type: 'heading', level: 2, text: 'Deprescribing Long-Term PPIs' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'PPI Deprescribing — When and How',
      items: [
        'Continue long-term PPI if: endoscopy-proven severe oesophagitis, peptic ulcer, stricture, Barrett\'s oesophagus, Zollinger-Ellison syndrome, or chronic NSAID/aspirin use that cannot be stopped',
        'Risks of long-term PPI: associated with osteoporosis, electrolyte deficiencies (hyponatraemia, hypomagnesaemia, B12 deficiency), masking symptoms of GI malignancy, drug interactions (clopidogrel, phenytoin, warfarin)',
        'Taper rather than stop abruptly: rebound acid hypersecretion occurs in ~50% if stopped suddenly',
        'Best approach: PRN use (on demand) — only 1 in 10 develop symptoms with PRN; lifestyle measures + antacids as needed',
        'Annual review of long-term PPI: justify continuation; try dose reduction or PRN',
        'PPI dose: can split the dose (e.g. 20/20 mg instead of 40 mg; 10/10 mg instead of 20 mg) for better pH coverage',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        '2WW upper GI (oesophageal/gastric cancer): UHDB Queen\'s Hospital Burton — via e-RS 2WW pathway',
        'Routine OGD: UHDB Burton endoscopy — via e-RS for non-urgent indications; include symptom duration, H. pylori status, alarm symptoms',
        'Gastroenterology (refractory GORD, functional dyspepsia, Barrett\'s surveillance): UHDB Burton gastroenterology',
        'Abdominal USS: UHDB community radiology — direct GP access request',
        'Talking Therapies (for functional dyspepsia with CBT component): MPFT staffordshire.everyonehealth.co.uk; 0333 005 0095',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — GORD', url: 'https://cks.nice.org.uk/topics/gord/' },
        { label: 'NICE CKS — Dyspepsia', url: 'https://cks.nice.org.uk/topics/dyspepsia-unidentified-cause/' },
        { label: 'NICE NG12 — Suspected Cancer 2WW', url: 'https://www.nice.org.uk/guidance/ng12' },
        { label: 'BSG — H. pylori Eradication', url: 'https://www.bsg.org.uk/clinical-resource/helicobacter-pylori-eradication/' },
      ],
    },
  ],
}
