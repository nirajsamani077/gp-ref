import type { Note } from '../data/notes'

export const scoliosis: Note = {
  id: 'scoliosis',
  title: 'Adolescent Scoliosis',
  subtitle: 'Idiopathic spinal curvature — examination, referral, bracing and surgical management',
  tags: ['msk', 'paediatrics'],

  body: 'adolescent idiopathic scoliosis spinal deformity lateral curvature Cobb angle Adams forward bend test rib hump thoracic lumbar thoracolumbar congenital neuromuscular Marfans neurofibromatosis cerebral palsy Duchenne bracing TLSO surgery spinal fusion referral paediatric spinal specialist XR X-ray full length standing',

  content: [
    {
      type: 'heading',
      level: 2,
      text: 'Overview & Classification',
    },
    {
      type: 'para',
      text: 'Scoliosis is a lateral curvature of the spine >10° (Cobb angle on X-ray). It is the most common spinal deformity in teenagers, affecting ~3%. Family history is important — first-degree relatives have ~10× increased risk. More common in females (though severity and progression are higher in girls).',
    },
    {
      type: 'image',
      src: '/images/scoliosis-1.jpeg',
      alt: 'Types of scoliosis — thoracic, lumbar, thoracolumbar and combined scoliosis illustrated on posterior view of spine',
      caption: 'Scoliosis types by location: thoracic (most visible — right-sided convexity common), lumbar (may cause pelvic tilt), thoracolumbar, and combined (S-shaped double curve). Idiopathic is by far the most common type.',
    },
    {
      type: 'table',
      headers: ['Type', 'Cause / associations', 'Key features'],
      rows: [
        ['Idiopathic (most common ~80%)', 'Unknown — multifactorial genetic. Three age groups: infantile (<3yr), juvenile (3–10yr), adolescent (>10yr)', 'AIS (adolescent idiopathic scoliosis) is the most common. Right thoracic curve most typical. Girls > boys for progression requiring treatment'],
        ['Congenital', 'Vertebral formation/segmentation failure (hemivertebra, bar). Associated with cardiac and renal anomalies. Neurofibromatosis (NF1)', 'Often detected earlier. Can progress rapidly. Need MRI to exclude intraspinal abnormalities'],
        ['Neuromuscular', 'Cerebral palsy, Duchenne muscular dystrophy, spinal muscular atrophy, spina bifida', 'Progressive long C-shaped curves. Often require surgery at lower Cobb angles. Respiratory compromise is a concern'],
        ['Syndromic', 'Marfan syndrome (tall, arachnodactyly, lens dislocation), Ehlers-Danlos, Prader-Willi', 'Marfan: always examine for aortic root dilatation. Curves can be severe and flexible'],
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Presentation',
    },
    {
      type: 'list',
      items: [
        'Usually noticed as a visible postural deformity: uneven shoulders, prominent shoulder blade, asymmetric waist, tilted pelvis or one hip appearing higher',
        'May be noticed incidentally during routine examination, school screening, or by parents/teachers',
        'Mild back pain or aching — this is acceptable in AIS. Significant or severe pain should raise concern for an underlying cause (tumour, infection, Scheuermann\'s kyphosis)',
        'Neurological symptoms (weakness, numbness, bladder/bowel dysfunction) are RED FLAGS — suggest underlying cord compression or intraspinal pathology; urgent MRI',
        'Respiratory symptoms in severe curves (Cobb >70–80°) — reduced lung capacity, recurrent chest infections',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Examination',
    },
    {
      type: 'image',
      src: '/images/scoliosis-2.jpeg',
      alt: 'Clinical examination of scoliosis — A: posterior view showing shoulder asymmetry, B: Adams forward bend test showing rib hump, C: standing full-length X-ray showing spinal curve',
      caption: 'A: Posterior view — shoulder asymmetry, waist asymmetry. B: Adams forward bend test — rib or lumbar hump indicates vertebral rotation (positive test). C: Full-length standing PA X-ray — Cobb angle measurement used to guide management.',
    },
    {
      type: 'table',
      headers: ['Examination component', 'Technique & findings'],
      rows: [
        ['Inspection (standing)', 'Patient stripped to underwear, viewed from behind. Look for: uneven shoulder height, prominent scapula, asymmetric waist creases, pelvic tilt, leg length discrepancy. Plumb line from C7 — assess trunk shift'],
        ['Adams Forward Bend Test', 'Patient bends forward with straight knees, feet together, arms hanging (palms together pointing to floor). Examiner views from behind at eye level. POSITIVE: asymmetric rib hump (thoracic rotation) or lumbar hump. This is the key screening test for rotational deformity — scoliometer can quantify (>5–7° trunk rotation = refer)'],
        ['Neurological examination', 'Lower limb tone, power, reflexes (including plantar response). Saddle sensation and perianal reflexes if bowel/bladder symptoms. Abnormal neurology = urgent MRI, not routine referral'],
        ['Assess skeletal maturity', 'Risser sign on XR (iliac crest ossification 0–5). Pre-menarchal girls: higher risk of progression. Height velocity — actively growing patients have highest progression risk'],
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Red Flags — Do NOT assume idiopathic',
      items: [
        'Significant or severe back pain (AIS is typically painless or mildly uncomfortable)',
        'Left-sided thoracic curve (idiopathic almost always goes right — left-sided suggests cord pathology)',
        'Neurological symptoms or signs (weakness, sensory loss, bladder/bowel dysfunction)',
        'Rapid curve progression',
        'Onset <10 years (consider juvenile or congenital causes)',
        'Café-au-lait spots / axillary freckling (neurofibromatosis)',
        'Tall, thin, arachnodactyly, high arched palate, lens dislocation (Marfan)',
        'Skin dimple or hairy patch over lumbar spine (dysraphism / tethered cord)',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'GP Referral & Investigations',
    },
    {
      type: 'list',
      items: [
        'If Adams test positive (or clinical suspicion of scoliosis): refer to paediatric spinal specialist (orthopaedics or paediatric spine service)',
        'GP may be asked to request full-length standing PA and lateral spine X-ray prior to clinic — check local protocol',
        'X-ray: Cobb angle measured (angle between the most tilted vertebrae at top and bottom of curve). Risser grade for skeletal maturity',
        'Routine blood tests are NOT required for idiopathic scoliosis unless another cause is suspected',
        'MRI spine is not routine for AIS — indicated if: neurological signs, left-sided thoracic curve, pain disproportionate to curve, rapid progression, age <10',
        'Do not delay referral pending X-ray — refer clinically and let the specialist request imaging',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Management',
    },
    {
      type: 'table',
      headers: ['Option', 'When used', 'Detail'],
      rows: [
        ['Watchful waiting / observation', 'Cobb <25° AND skeletal maturity (Risser 4–5) OR Cobb <20° in any patient', 'Specialist surveillance every 6 months during growth. Clinical + X-ray review. Physiotherapy (Schroth method) may help stabilise curve and improve posture. Most mild curves do not progress significantly after skeletal maturity'],
        ['Bracing (TLSO)', 'Cobb 25–45° AND still growing (Risser 0–2, pre-menarchal or early post-menarche)', 'Goal: prevent progression, NOT correction. Worn 23 hours/day — compliance is a major challenge. Evidence strongest for night-time bracing for lumbar curves. Custom-moulded thoracolumbosacral orthosis (TLSO). Stops at skeletal maturity'],
        ['Surgery — spinal fusion', 'Cobb >45–50° (especially if still growing), or >40° with documented progression, or respiratory compromise', 'Major spinal procedure — instrumentation (rods and screws) and bone grafting. Performed in ~10% of AIS cases. Corrects and stabilises curve. Neurological complications are the most serious risk (~1 in 1000). Patient and family counselling essential. Done in specialist paediatric spine centres'],
      ],
    },
    {
      type: 'image',
      src: '/images/scoliosis-3.jpeg',
      alt: 'TLSO brace (thoracolumbosacral orthosis) front and back view used for scoliosis bracing',
      caption: 'TLSO brace — custom-moulded hard plastic orthosis worn 23hrs/day. Designed to apply corrective forces to prevent curve progression during growth. Requires expert fitting and regular review.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'GP Practical Points',
      items: [
        'AIS is most common in girls aged 10–16 during the pubertal growth spurt — highest risk of progression during this period',
        'Curves <20–25° in a skeletally mature patient rarely require active treatment and can be discharged with reassurance',
        'Refer promptly — early detection allows more conservative management (bracing). Delayed referral may mean a patient misses the window for bracing',
        'Bracing compliance is difficult — psychological support and peer group contact (scoliosis charities) can help adolescents cope',
        'Post-surgery: patients usually return to most activities including sports. Swimming, cycling, and physiotherapy are encouraged early',
        'Pregnant patients with scoliosis: most manage well. Epidural placement may be technically more difficult — warn obstetric team early',
        'Adults with untreated scoliosis: Cobb >50° may slowly progress ~1°/year. Curves >80° associated with respiratory restriction',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE — Scoliosis: assessment and management (NG35)', url: 'https://www.nice.org.uk/guidance/ng35' },
        { label: 'Scoliosis Association UK (SAUK) — Patient support', url: 'https://www.sauk.org.uk' },
        { label: 'MPFT Paediatric Orthopaedics Referral', url: 'https://www.mpft.nhs.uk' },
      ],
    },
  ],
}
