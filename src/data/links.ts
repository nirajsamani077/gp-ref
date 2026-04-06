export interface LinkItem {
  name: string
  url: string
}

export interface LinkCategory {
  title: string
  links: LinkItem[]
}

export const LINK_CATEGORIES: LinkCategory[] = [
  {
    title: 'Prescribing',
    links: [
      { name: 'BNF',                     url: 'https://bnf.nice.org.uk' },
      { name: 'BNF for Children',         url: 'https://bnfc.nice.org.uk' },
      { name: 'NICE CKS',                url: 'https://cks.nice.org.uk' },
      { name: 'Staffordshire Formulary',  url: 'https://staffordshireandstokeontrentformulary.nhs.uk' },
    ],
  },
  {
    title: 'Guidelines',
    links: [
      { name: 'NICE Guidelines',    url: 'https://www.nice.org.uk/guidance' },
      { name: 'BTS (Respiratory)',  url: 'https://www.brit-thoracic.org.uk' },
      { name: 'BSH (Haematology)',  url: 'https://b-s-h.org.uk' },
      { name: 'PCDS (Dermatology)', url: 'https://www.pcds.org.uk' },
      { name: 'RCGP',               url: 'https://www.rcgp.org.uk' },
    ],
  },
  {
    title: 'Local',
    links: [
      { name: 'UHNM',                    url: 'https://www.uhnm.nhs.uk' },
      { name: 'MPFT',                    url: 'https://www.mpft.nhs.uk' },
      { name: 'Katharine House Hospice', url: 'https://www.khhospice.org.uk' },
      { name: 'Consultant Connect',      url: 'https://consultantconnect.org.uk' },
      { name: 'Keele MSK',               url: 'https://www.keelemsknorth.nhs.uk' },
    ],
  },
  {
    title: 'Referrals & Tools',
    links: [
      { name: 'e-RS (NHS referrals)', url: 'https://www.e-referral.nhs.uk' },
      { name: 'ICE (pathology)',      url: 'https://www.iceportal.co.uk' },
      { name: 'Map of Medicine',      url: 'https://mapofmedicine.com' },
      { name: 'DVLA medical',         url: 'https://www.gov.uk/dvla/medical-enquiries' },
    ],
  },
  {
    title: 'Patient Information',
    links: [
      { name: 'NHS.uk',                  url: 'https://www.nhs.uk' },
      { name: 'Patient.info',            url: 'https://patient.info' },
      { name: 'Medicines.org.uk (PILs)', url: 'https://www.medicines.org.uk' },
      { name: 'Coeliac UK',              url: 'https://www.coeliac.org.uk' },
    ],
  },
]
