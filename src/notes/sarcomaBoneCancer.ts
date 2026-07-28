import type { Note } from '../data/notes'

export const sarcomaBoneCancer: Note = {
  id: 'sarcoma-bone-cancer',
  title: 'Bone & Soft-Tissue Sarcoma',
  subtitle: 'Rare but easily missed cancers — the lump and bone-pain red flags, and urgent imaging/2WW',
  tags: ['oncology', 'msk'],

  body: `sarcoma soft tissue sarcoma bone cancer osteosarcoma Ewing chondrosarcoma persistent bone pain night pain enlarging lump deep fascia 5cm X-ray 2WW ultrasound MRI specialist centre metastasis lung`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Sarcomas are rare cancers of bone and soft tissue (connective tissue, muscle, fat), but they are disproportionately important because they are frequently mistaken for benign lumps or "sports injuries" and diagnosed late. The GP\'s job is pattern recognition of a small set of red flags that should trigger urgent imaging and referral — and NOT to biopsy or excise a suspicious lump in primary care.',
    },

    { type: 'heading', level: 2, text: 'Soft-Tissue Sarcoma — the Lump Red Flags' },
    {
      type: 'callout',
      variant: 'danger',
      title: 'Refer / Image an Unexplained Soft-Tissue Lump if:',
      items: [
        'It is increasing in SIZE, or is larger than ~5 cm, or is DEEP to the fascia, or is painful, or has recurred after previous removal — any of these warrants urgent ultrasound (and 2WW referral to a sarcoma service).',
        'Do NOT attempt to excise or biopsy a suspected sarcoma in primary care — inappropriate surgery ("whoops" excision) compromises the definitive operation; refer to a specialist sarcoma centre for planned biopsy.',
        'Most lumps are benign (lipoma, ganglion), but a growing, deep or large lump should be imaged, not just watched.',
      ],
    },

    { type: 'heading', level: 2, text: 'Bone Sarcoma — the Bone-Pain Red Flags' },
    {
      type: 'list',
      items: [
        'Persistent, unexplained, deep bone pain — especially NIGHT pain or pain not related to activity, in children/adolescents and young adults — warrants an X-ray and referral.',
        'A bony swelling/mass, a pathological fracture, or a persistently painful joint/limb without clear cause.',
        'Osteosarcoma and Ewing sarcoma peak in adolescence (around the knee/long bones); chondrosarcoma is more in older adults; consider bone METASTASES/myeloma in older patients with new bone pain.',
        'Arrange an urgent X-ray; a normal X-ray does not fully exclude it — refer if suspicion persists (MRI). NICE supports a very urgent X-ray (within 48h) for children/young people with unexplained bone pain or swelling.',
      ],
    },

    { type: 'heading', level: 2, text: 'Referral & Management' },
    {
      type: 'table',
      headers: ['Situation', 'Action'],
      rows: [
        ['Suspicious soft-tissue lump', 'Urgent ultrasound; 2WW to a sarcoma service if features present'],
        ['Suspected bone sarcoma (imaging or high suspicion)', 'Urgent referral to a specialist bone-sarcoma centre'],
        ['Child/young person, unexplained bone pain/swelling', 'Very urgent X-ray (per NICE NG12)'],
      ],
      caption: 'Sarcomas are managed by specialist multidisciplinary centres (surgery, chemotherapy, radiotherapy). Early referral improves the chance of limb-sparing treatment and survival; lung is the commonest site of metastasis.',
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG12 — Suspected Cancer (Sarcoma)', url: 'https://www.nice.org.uk/guidance/ng12' },
        { label: 'Sarcoma UK', url: 'https://sarcoma.org.uk/' },
        { label: 'Bone Cancer Research Trust', url: 'https://www.bcrt.org.uk/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'paediatric-cancer', label: 'Childhood Cancer — Red Flags', subtitle: 'Bone tumours in children/adolescents' },
        { id: 'two-week-wait', label: '2WW Referral Guide', subtitle: 'Sarcoma referral criteria' },
        { id: 'haem-malignancies', label: 'Haematological Malignancies', subtitle: 'Myeloma/bone lesions in older adults' },
        { id: 'weight-loss', label: 'Unintentional Weight Loss', subtitle: 'Systemic red flags accompanying malignancy' },
      ],
    },

  ],
}
