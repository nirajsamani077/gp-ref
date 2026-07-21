import type { Note } from '../data/notes'

export const iih: Note = {
  id: 'iih',
  title: 'Idiopathic Intracranial Hypertension (IIH)',
  subtitle: 'Raised ICP without a mass, papilloedema, weight loss & acetazolamide, and protecting vision',
  tags: ['neurology'],

  body: `idiopathic intracranial hypertension IIH pseudotumour cerebri papilloedema headache visual loss enlarged blind spot sixth nerve palsy obesity tetracycline acetazolamide topiramate weight loss lumbar puncture CSF opening pressure`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Headache Assessment', url: 'https://cks.nice.org.uk/topics/headache-assessment/' },
        { label: 'IIH UK', url: 'https://www.iih.org.uk/' },
        { label: 'Brain & Spine Foundation — IIH', url: 'https://www.brainandspine.org.uk/' },
      ],
    },

    { type: 'heading', level: 2, text: 'Recognition' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Suspect IIH — Refer for Same-Week Assessment',
      items: [
        'Classic patient: an overweight woman of childbearing age (often with recent weight gain), or someone on a precipitant drug',
        'Symptoms: headache (often worse on waking, lying down, coughing/straining), transient visual obscurations, pulsatile tinnitus, and horizontal diplopia (a false-localising sixth-nerve palsy)',
        'Sign: PAPILLOEDEMA (bilateral optic disc swelling) with an enlarged blind spot and peripheral field loss — vision is at risk',
        'Precipitating drugs: tetracyclines (doxycycline, minocycline), retinoids, excess vitamin A, the combined pill and corticosteroids — review and stop where possible',
        'Refer urgently (neurology/ophthalmology) — needs MRI/MRV to exclude a mass and cerebral venous sinus thrombosis, then a lumbar puncture to measure a raised CSF opening pressure',
      ],
    },

    { type: 'heading', level: 2, text: 'Management' },

    {
      type: 'list',
      items: [
        'Weight loss is the key long-term treatment — even modest loss can induce remission; refer to weight management',
        'Acetazolamide (a carbonic anhydrase inhibitor) reduces CSF production — first-line medical treatment',
        'Topiramate is an alternative (also aids weight loss) but is teratogenic — avoid in women planning pregnancy without effective contraception',
        'Stop any causative drug',
        'Serial visual field and optic disc monitoring by ophthalmology — the priority is protecting sight',
        'Refractory/sight-threatening disease: therapeutic lumbar punctures, optic nerve sheath fenestration, or CSF shunting',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'headache-assessment', label: 'Headache Assessment', subtitle: 'Red flags including raised-ICP features' },
        { id: 'brain-tumour', label: 'Brain Tumour & SOL', subtitle: 'Exclude a mass lesion as a cause of raised ICP' },
        { id: 'obesity', label: 'Obesity & Weight Management', subtitle: 'Weight loss is the key treatment' },
        { id: 'visual-loss', label: 'Sudden Visual Loss', subtitle: 'Papilloedema and threats to vision' },
      ],
    },

  ],
}
