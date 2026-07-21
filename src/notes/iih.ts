import type { Note } from '../data/notes'

export const iih: Note = {
  id: 'iih',
  title: 'Idiopathic Intracranial Hypertension (IIH)',
  subtitle: 'Raised ICP without a mass — papilloedema, the drug precipitants, weight loss & acetazolamide, and protecting vision',
  tags: ['neurology'],

  body: `idiopathic intracranial hypertension IIH pseudotumour cerebri papilloedema headache visual loss enlarged blind spot sixth nerve palsy false localising obesity weight loss GLP-1 tetracycline doxycycline retinoid vitamin A acetazolamide topiramate lumbar puncture CSF opening pressure optic nerve sheath fenestration shunt fulminant OCT visual fields modified Dandy criteria`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Headache Assessment', url: 'https://cks.nice.org.uk/topics/headache-assessment/' },
        { label: 'IIH UK — Patient Support', url: 'https://www.iih.org.uk/' },
        { label: 'Brain & Spine Foundation — IIH', url: 'https://www.brainandspine.org.uk/information-and-support/neurological-conditions/idiopathic-intracranial-hypertension/' },
        { label: 'IIH Consensus Guidelines (JNNP 2018)', url: 'https://jnnp.bmj.com/content/89/10/1088' },
      ],
    },

    { type: 'heading', level: 2, text: 'Recognition' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Suspect IIH — Refer for Same-Week Assessment',
      items: [
        'Classic patient: an overweight woman of childbearing age (>90% of cases), often with recent weight gain — but it can occur in either sex and at a normal weight',
        'Symptoms: headache (often daily, worse on waking, lying down, and with coughing/straining/bending), transient visual obscurations (seconds-long greying of vision, often on standing), pulsatile tinnitus ("whooshing"), and horizontal diplopia',
        'Sign: PAPILLOEDEMA — bilateral optic disc swelling. Formal assessment shows an enlarged blind spot and, later, peripheral (then central) field loss — vision is the organ at risk',
        'A sixth-nerve (abducens) palsy is a classic FALSE-localising sign of raised ICP (causes the horizontal diplopia) and does not indicate a focal lesion',
        'Refer urgently to ophthalmology/neurology — needs MRI brain + MR venography (to exclude a mass and cerebral venous sinus thrombosis) then lumbar puncture to document a raised CSF opening pressure',
      ],
    },

    { type: 'heading', level: 2, text: 'Diagnostic Criteria (Modified Dandy)' },

    {
      type: 'list',
      items: [
        'Signs/symptoms of raised ICP (headache, papilloedema)',
        'No localising neurological signs except a unilateral/bilateral sixth-nerve palsy',
        'Raised CSF opening pressure (>25 cm CSF in adults) with NORMAL CSF constituents',
        'Normal neuroimaging (no mass, hydrocephalus, or venous sinus thrombosis) — supportive signs include an empty sella, flattened posterior globe and distended optic nerve sheaths',
        'No other identified cause of raised ICP (i.e. "idiopathic")',
      ],
    },

    { type: 'heading', level: 2, text: 'Precipitating / Associated Drugs — Review and Stop' },

    {
      type: 'table',
      headers: ['Drug/agent', 'Action'],
      rows: [
        ['Tetracyclines (doxycycline, minocycline, lymecycline)', 'Common culprit — often used for acne; stop and use an alternative'],
        ['Retinoids (isotretinoin, acitretin) & excess vitamin A', 'Stop / avoid high-dose vitamin A'],
        ['Combined hormonal contraception', 'Review; switch to a progestogen-only or non-hormonal method'],
        ['Corticosteroids (esp. withdrawal)', 'Rationalise; avoid abrupt changes'],
        ['Growth hormone, lithium, nalidixic acid', 'Review with the prescriber'],
      ],
      caption: 'A careful drug history is essential — several IIH cases are drug-induced and improve on stopping the culprit.',
    },

    { type: 'heading', level: 2, text: 'Management' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Two Priorities — Save Sight, Reduce ICP',
      items: [
        'Weight loss is the key disease-modifying treatment — even ~5–10% loss can induce remission; refer to weight-management services; bariatric surgery and GLP-1 agonists are increasingly used in refractory/eligible patients',
        'Acetazolamide (carbonic anhydrase inhibitor) is first-line medical therapy — reduces CSF production; titrate up as tolerated (paraesthesiae, altered taste, GI upset and renal stones are common dose-limiting effects)',
        'Topiramate is an alternative (also suppresses appetite / aids weight loss and treats coexistent migraine) but is TERATOGENIC — ensure effective contraception and pregnancy counselling',
        'Stop any causative drug (see table)',
        'Manage the headache itself (which may persist even when ICP is controlled) and avoid medication-overuse headache',
      ],
    },

    {
      type: 'list',
      items: [
        'Monitoring: serial visual fields, optic disc assessment and OCT by ophthalmology — the frequency reflects the threat to sight, not the headache',
        'Therapeutic lumbar puncture gives transient relief but is not a durable treatment',
        'Surgical options for sight-threatening or refractory disease: optic nerve sheath fenestration (protects the optic nerve), CSF diversion (VP/LP shunt), and venous sinus stenting in selected cases',
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Fulminant IIH — Emergency',
      items: [
        'Rapidly progressive visual loss over days with severe papilloedema is FULMINANT IIH — a sight-threatening emergency',
        'Refer immediately for same-day neuro-ophthalmology assessment and urgent surgical decompression',
      ],
    },

    { type: 'heading', level: 2, text: 'Pregnancy' },

    {
      type: 'list',
      items: [
        'IIH can present or worsen in pregnancy; it is not itself an indication for caesarean and vision usually stabilises with careful monitoring',
        'Acetazolamide is generally avoided in the first trimester (use is individualised with specialist input); topiramate is contraindicated (teratogenic)',
        'Co-manage with neurology/ophthalmology and obstetrics',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'headache-assessment', label: 'Headache Assessment', subtitle: 'Red flags including raised-ICP features' },
        { id: 'brain-tumour', label: 'Brain Tumour & SOL', subtitle: 'Exclude a mass lesion as a cause of raised ICP' },
        { id: 'obesity', label: 'Obesity & Weight Management', subtitle: 'Weight loss and GLP-1 agonists — key treatment' },
        { id: 'visual-loss', label: 'Sudden Visual Loss', subtitle: 'Papilloedema and threats to vision' },
        { id: 'migraine', label: 'Migraine', subtitle: 'Coexisting headache phenotype; topiramate overlap' },
        { id: 'acne-vulgaris', label: 'Acne Vulgaris', subtitle: 'Tetracyclines/isotretinoin as IIH precipitants' },
      ],
    },

  ],
}
