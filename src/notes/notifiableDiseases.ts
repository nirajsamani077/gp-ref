import type { Note } from '../data/notes'

export const notifiableDiseases: Note = {
  id: 'notifiable-diseases',
  title: 'Notifiable Diseases',
  subtitle: 'Statutory notification duties, urgent vs routine diseases, and how to report to the HPT',
  tags: ['infection'],

  body: 'notifiable disease notification health protection team HPT UKHSA public health England urgent routine phone written 24 hours 3 days measles mumps rubella TB tuberculosis meningitis meningococcal scarlet fever whooping cough pertussis hepatitis typhoid cholera rabies anthrax botulism brucellosis COVID-19 food poisoning HUS legionnaires malaria SARS VHF viral haemorrhagic fever',

  content: [

    { type: 'heading', level: 2, text: 'Statutory Duty to Notify' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Who, what and why',
      items: [
        'All registered medical practitioners (including GPs) have a STATUTORY DUTY to notify the local Health Protection Team (HPT) of suspected notifiable diseases',
        'Notification is on the basis of CLINICAL SUSPICION — laboratory confirmation is NOT required before notifying',
        'Failure to notify is a legal offence under the Health Protection (Notification) Regulations 2010',
        'Notification triggers rapid public health action: contact tracing, outbreak investigation, vaccination catch-up, environmental control',
        'The HPT will undertake a joint risk assessment and advise on isolation, prophylaxis, decontamination and further testing',
      ],
    },

    { type: 'heading', level: 2, text: 'How and When to Notify' },

    {
      type: 'table',
      headers: ['Urgency', 'Method', 'Timeframe', 'Trigger'],
      rows: [
        ['URGENT', 'Phone your local HPT', 'Within 24 hours — there is a CRITICAL WINDOW for effective public health control', 'Any disease on the urgent list (see below); or any cluster/outbreak; or significant risk to public health'],
        ['ROUTINE', 'Written notification form (online or paper)', 'Within 3 days', 'Any notifiable disease not requiring urgent notification'],
        ['ALL HAZARDS', 'Phone HPT urgently', 'Immediately', 'Chemical exposure (CO, lead, mercury), radiation exposure, new/emerging infections, outbreak of any infection, vulnerable contacts at risk'],
      ],
      caption: 'Notification timeframes. When in doubt, phone your local HPT — better to over-notify than miss a public health risk.',
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'Information required for notification',
      items: [
        'Patient name, DOB, sex, ethnicity, NHS number',
        'Contact details: home address, current address, telephone number',
        'Diagnosis (suspected)',
        'Relevant occupation, place of work or education',
        'Overseas travel history if relevant',
        'Details of the notifying clinician',
        'Written notifications: submit online at gov.uk/government/publications/notifiable-diseases-form-for-registered-medical-practitioners',
      ],
    },

    { type: 'heading', level: 2, text: 'Notifiable Diseases List' },

    {
      type: 'image',
      src: '/images/PHE_Notifiable_diseases_poster_HPT.jpg.webp',
      alt: 'Public Health England statutory notification poster showing all notifiable diseases, whether urgent or routine, and how to notify',
      caption: 'PHE notifiable diseases poster — full list with urgency classification. Display in practice or use as a quick reference.',
      maxWidth: '700px',
    },

    {
      type: 'table',
      headers: ['Disease', 'Notify as'],
      rows: [
        ['Acute encephalitis', 'Routine'],
        ['Acute infectious hepatitis (A, B, C)', 'Urgent'],
        ['Acute meningitis', 'Urgent if suspected bacterial; otherwise routine'],
        ['Acute poliomyelitis', 'Urgent'],
        ['Anthrax', 'Urgent'],
        ['Botulism', 'Urgent'],
        ['Brucellosis', 'Routine; urgent if UK-acquired'],
        ['Cholera', 'Urgent'],
        ['COVID-19', 'Routine'],
        ['Diphtheria', 'Urgent'],
        ['Enteric fever (typhoid/paratyphoid)', 'Urgent'],
        ['Food poisoning', 'Routine; urgent if cluster or outbreak'],
        ['Haemolytic Uraemic Syndrome (HUS)', 'Urgent'],
        ['Infectious bloody diarrhoea', 'Urgent'],
        ['Invasive group A streptococcal disease', 'Urgent'],
        ['Legionnaires\' disease', 'Urgent'],
        ['Leprosy', 'Routine'],
        ['Malaria', 'Routine; urgent if UK-acquired'],
        ['Measles', 'Urgent'],
        ['Meningococcal septicaemia', 'Urgent'],
        ['Mumps', 'Routine'],
        ['Plague', 'Urgent'],
        ['Rabies', 'Urgent'],
        ['Rubella', 'Routine'],
        ['SARS', 'Urgent'],
        ['Scarlet fever', 'Routine'],
        ['Smallpox', 'Urgent'],
        ['Tetanus', 'Routine; urgent if IV drug use'],
        ['Tuberculosis (TB)', 'Routine; urgent if healthcare worker or drug-resistant cluster'],
        ['Typhus', 'Routine'],
        ['Viral haemorrhagic fever (VHF)', 'Urgent'],
        ['Whooping cough (pertussis)', 'Urgent if acute phase; routine if later'],
        ['Yellow fever', 'Routine; urgent if UK-acquired'],
      ],
      caption: 'Notifiable diseases (England). This list is not exhaustive — any infection with potential public health implications should be notified urgently. Last updated per UKHSA guidance.',
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'All other hazards — notify urgently',
      items: [
        'Chemical exposure: carbon monoxide, lead, mercury, pesticides',
        'Radiation exposure',
        'New and emerging infections (e.g. new influenza strain, novel pathogen)',
        'Cases occurring as part of a known outbreak or cluster (e.g. C. difficile, norovirus)',
        'Infections where vulnerable contacts are at risk — e.g. varicella in immunocompromised, pertussis in unvaccinated infant, hepatitis B in healthcare setting',
        'When in doubt: phone your local HPT — they will advise whether action is needed',
      ],
    },

    { type: 'heading', level: 2, text: 'Common GP Scenarios' },

    {
      type: 'list',
      items: [
        'Measles: notify immediately by phone even on clinical suspicion; arrange salivary swab for confirmation; advise isolation for 4 days from rash onset; contact tracing by HPT',
        'Scarlet fever / invasive GAS: scarlet fever is routine; invasive GAS (bacteraemia, necrotising fasciitis) is URGENT — phone HPT same day',
        'Whooping cough: notify urgently in acute phase; HPT will advise on prophylactic antibiotics for household contacts (especially infants)',
        'TB: routine notification; HPT coordinates contact tracing; check immigrant screening status; refer to TB service for directly observed therapy (DOT) if needed',
        'Meningococcal disease: URGENT — phone HPT immediately; HPT will arrange ciprofloxacin prophylaxis for close contacts',
        'Food poisoning cluster: if ≥2 cases linked to same food source or setting, notify urgently as potential outbreak',
        'Hepatitis A: routine; HPT will identify contacts for post-exposure immunisation',
        'Malaria: notify on clinical suspicion; see malaria note for management',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'Gov.uk — Notifiable Diseases & How to Report', url: 'https://www.gov.uk/guidance/notifiable-diseases-and-how-to-report-them' },
        { label: 'Online Notification Form (England)', url: 'https://www.gov.uk/government/publications/notifiable-diseases-form-for-registered-medical-practitioners' },
        { label: 'UKHSA — Health Protection Team Contacts', url: 'https://www.gov.uk/health-protection-team' },
        { label: 'NICE CKS — Notifiable Diseases', url: 'https://cks.nice.org.uk/topics/notifiable-diseases/' },
        { label: 'UKHSA — National Infection Service', url: 'https://www.gov.uk/government/organisations/uk-health-security-agency' },
      ],
    },

  ],
}
