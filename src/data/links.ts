export interface LinkItem {
  name: string
  url: string
  /** Optional one-line description shown on the card and searched. */
  blurb?: string
}

export interface LinkCategory {
  title: string
  /** Emoji shown beside the category heading. */
  icon: string
  links: LinkItem[]
}

/**
 * Single source of truth for the Links section.
 *
 * TO ADD A LINK: add one line to the relevant category —
 *   { name: 'Site name', url: 'https://…', blurb: 'what it is' }
 * The favicon/icon is derived automatically from the URL (no image files
 * to manage), and the link becomes searchable immediately. `blurb` is
 * optional but improves scanning and search.
 */
export const LINK_CATEGORIES: LinkCategory[] = [
  {
    title: 'Prescribing & Medicines',
    icon: '💊',
    links: [
      { name: 'BNF',                         url: 'https://bnf.nice.org.uk',                                     blurb: 'British National Formulary' },
      { name: 'BNF for Children',            url: 'https://bnfc.nice.org.uk',                                    blurb: 'Paediatric formulary' },
      { name: 'NICE CKS',                    url: 'https://cks.nice.org.uk',                                     blurb: 'Clinical Knowledge Summaries' },
      { name: 'SSOT Formulary',              url: 'https://www.staffordshireandstokeontrentformulary.nhs.uk',    blurb: 'Staffs & Stoke local formulary' },
      { name: 'SPS',                         url: 'https://www.sps.nhs.uk',                                      blurb: 'Specialist Pharmacy Service' },
      { name: 'Electronic Medicines Compendium', url: 'https://www.medicines.org.uk',                           blurb: 'SmPCs & patient leaflets' },
      { name: 'MHRA Drug Safety Update',     url: 'https://www.gov.uk/drug-safety-update',                       blurb: 'Safety alerts & warnings' },
      { name: 'PrescQIPP',                   url: 'https://www.prescqipp.info',                                  blurb: 'Prescribing optimisation & deprescribing' },
      { name: 'OpenPrescribing',             url: 'https://openprescribing.net',                                 blurb: 'Practice prescribing data' },
      { name: 'Yellow Card',                 url: 'https://yellowcard.mhra.gov.uk',                              blurb: 'Report adverse drug reactions' },
    ],
  },
  {
    title: 'Guidelines & Evidence',
    icon: '📖',
    links: [
      { name: 'NICE',                        url: 'https://www.nice.org.uk/guidance',                            blurb: 'National guidance' },
      { name: 'SIGN',                        url: 'https://www.sign.ac.uk',                                      blurb: 'Scottish guidelines' },
      { name: 'GP Evidence',                 url: 'https://gpevidence.org',                                      blurb: 'Evidence & shared-decision tools' },
      { name: 'GPnotebook',                  url: 'https://gpnotebook.com',                                      blurb: 'Quick clinical reference' },
      { name: 'Red Whale',                   url: 'https://www.redwhale.co.uk',                                  blurb: 'GP update & handbooks' },
      { name: 'BMJ Best Practice',           url: 'https://bestpractice.bmj.com',                                blurb: 'Point-of-care evidence' },
      { name: 'Cochrane Library',            url: 'https://www.cochranelibrary.com',                             blurb: 'Systematic reviews' },
      { name: 'RCGP',                        url: 'https://www.rcgp.org.uk',                                     blurb: 'Royal College of GPs' },
    ],
  },
  {
    title: 'Specialty Society Guidance',
    icon: '🩺',
    links: [
      { name: 'PCDS',                        url: 'https://www.pcds.org.uk',                                     blurb: 'Primary Care Dermatology Society' },
      { name: 'PCRS',                        url: 'https://www.pcrs-uk.org',                                     blurb: 'Primary Care Respiratory Society' },
      { name: 'BTS',                         url: 'https://www.brit-thoracic.org.uk',                            blurb: 'British Thoracic Society' },
      { name: 'FSRH',                        url: 'https://www.fsrh.org',                                        blurb: 'Contraception & sexual health' },
      { name: 'BASHH',                       url: 'https://www.bashh.org/guidelines',                            blurb: 'Sexual health / STIs' },
      { name: 'BAD',                         url: 'https://www.bad.org.uk',                                      blurb: 'British Assoc. of Dermatologists' },
      { name: 'RCOG',                        url: 'https://www.rcog.org.uk',                                     blurb: 'Obstetrics & gynaecology' },
      { name: 'BSR',                         url: 'https://www.rheumatology.org.uk',                             blurb: 'Rheumatology' },
      { name: 'BSG',                         url: 'https://www.bsg.org.uk',                                      blurb: 'Gastroenterology' },
      { name: 'BSH',                         url: 'https://b-s-h.org.uk',                                        blurb: 'Haematology' },
      { name: 'Diabetes UK',                 url: 'https://www.diabetes.org.uk',                                 blurb: 'Diabetes guidance & resources' },
      { name: 'Resuscitation Council UK',    url: 'https://www.resus.org.uk',                                    blurb: 'BLS/ALS algorithms' },
      { name: 'ENT UK',                      url: 'https://www.entuk.org',                                       blurb: 'Ear, nose & throat' },
      { name: 'Royal College of Psychiatrists', url: 'https://www.rcpsych.ac.uk',                               blurb: 'Mental health guidance' },
    ],
  },
  {
    title: 'Calculators & Risk Tools',
    icon: '🧮',
    links: [
      { name: 'QRISK3',                      url: 'https://www.qrisk.org',                                       blurb: '10-year CVD risk' },
      { name: 'MDCalc',                      url: 'https://www.mdcalc.com',                                      blurb: 'Clinical calculators' },
      { name: 'ClinCalc',                    url: 'https://clincalc.com',                                        blurb: 'Dosing & clinical tools' },
      { name: 'FRAX',                        url: 'https://frax.shef.ac.uk',                                     blurb: 'Fracture risk' },
      { name: 'CKD-EPI (eGFR)',              url: 'https://www.mdcalc.com/calc/3939',                            blurb: 'eGFR from creatinine' },
    ],
  },
  {
    title: 'Referrals & Clinical Tools',
    icon: '📨',
    links: [
      { name: 'e-Referral Service (e-RS)',   url: 'https://www.ers.nhs.uk',                                      blurb: 'NHS electronic referrals' },
      { name: 'Consultant Connect',          url: 'https://consultantconnect.org.uk',                            blurb: 'Rapid specialist advice' },
      { name: 'Suspected Cancer (NICE NG12)', url: 'https://www.nice.org.uk/guidance/ng12',                      blurb: '2WW referral criteria' },
      { name: 'Ardens',                      url: 'https://www.ardens.org.uk',                                   blurb: 'Templates & searches' },
    ],
  },
  {
    title: 'Vaccines, Travel & Public Health',
    icon: '💉',
    links: [
      { name: 'Green Book',                  url: 'https://www.gov.uk/government/collections/immunisation-against-infectious-disease-the-green-book', blurb: 'Immunisation against infectious disease' },
      { name: 'UKHSA',                       url: 'https://www.gov.uk/government/organisations/uk-health-security-agency', blurb: 'Health protection & alerts' },
      { name: 'TravelHealthPro',             url: 'https://travelhealthpro.org.uk',                              blurb: 'NaTHNaC travel advice' },
      { name: 'Fit for Travel',              url: 'https://www.fitfortravel.nhs.uk',                             blurb: 'Travel health (public)' },
      { name: 'Notifiable Diseases',         url: 'https://www.gov.uk/guidance/notifiable-diseases-and-causative-organisms-how-to-report', blurb: 'What & how to notify' },
    ],
  },
  {
    title: 'Fitness to Drive / Fly',
    icon: '🚗',
    links: [
      { name: 'DVLA — Assessing Fitness to Drive', url: 'https://www.gov.uk/government/publications/assessing-fitness-to-drive-a-guide-for-medical-professionals', blurb: 'Clinician guide' },
      { name: 'Health Conditions & Driving', url: 'https://www.gov.uk/health-conditions-and-driving',            blurb: 'Tell DVLA (patient-facing)' },
      { name: 'CAA — Fitness to Fly',        url: 'https://www.caa.co.uk/passengers/before-you-fly/am-i-fit-to-fly/', blurb: 'Air travel & health' },
    ],
  },
  {
    title: 'Patient Information & Support',
    icon: '👤',
    links: [
      { name: 'NHS.uk',                      url: 'https://www.nhs.uk',                                          blurb: 'Conditions & treatments' },
      { name: 'Patient.info',                url: 'https://patient.info',                                        blurb: 'Patient leaflets' },
      { name: 'BAD Patient Leaflets',        url: 'https://www.bad.org.uk/patient-information-leaflets',          blurb: 'Skin condition leaflets' },
      { name: 'Asthma + Lung UK',            url: 'https://www.asthmaandlung.org.uk',                            blurb: 'Respiratory support' },
      { name: 'British Heart Foundation',    url: 'https://www.bhf.org.uk',                                      blurb: 'Cardiac support' },
      { name: 'Versus Arthritis',            url: 'https://versusarthritis.org',                                 blurb: 'MSK & arthritis' },
      { name: 'Mind',                        url: 'https://www.mind.org.uk',                                     blurb: 'Mental health support' },
      { name: 'Macmillan',                   url: 'https://www.macmillan.org.uk',                                blurb: 'Cancer support' },
      { name: 'NHS Talking Therapies',       url: 'https://www.nhs.uk/nhs-services/mental-health-services/nhs-talking-therapies/', blurb: 'Self-referral (IAPT)' },
    ],
  },
  {
    title: 'Local (Staffordshire & Stoke)',
    icon: '📍',
    links: [
      { name: 'UHNM',                        url: 'https://www.uhnm.nhs.uk',                                     blurb: 'University Hospitals of North Midlands' },
      { name: 'MPFT',                        url: 'https://www.mpft.nhs.uk',                                     blurb: 'Midlands Partnership (community/MH)' },
      { name: 'Keele MSK',                   url: 'https://www.keelemsknorth.nhs.uk',                            blurb: 'North Staffs MSK service' },
      { name: 'Katharine House Hospice',     url: 'https://www.khhospice.org.uk',                                blurb: 'Palliative care' },
      { name: 'Staffs & Stoke ICB',          url: 'https://www.staffsstoke.icb.nhs.uk',                          blurb: 'Local commissioning' },
    ],
  },
]
