import type { Note } from '../data/notes'

export const tmjDysfunction: Note = {
  id: 'tmj-dysfunction',
  title: 'Temporomandibular Disorder (TMD/TMJ Dysfunction)',
  subtitle: 'Jaw pain, clicking and restricted opening — a common, mostly self-limiting condition',
  tags: ['ent'],

  body: `temporomandibular disorder TMD TMJ dysfunction jaw pain clicking locking bruxism myofascial trismus facial pain masseter conservative management soft diet mouthguard splint dental physiotherapy giant cell arteritis`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Temporomandibular Disorders', url: 'https://cks.nice.org.uk/topics/temporomandibular-disorders-tmds/' },
        { label: 'Royal College of Surgeons — TMD', url: 'https://www.rcseng.ac.uk/' },
        { label: 'Oral Health Foundation — Jaw Problems', url: 'https://www.dentalhealth.org/' },
      ],
    },

    {
      type: 'callout',
      variant: 'info',
      title: 'Common and Usually Benign',
      items: [
        'TMD covers pain and dysfunction of the temporomandibular joint and the muscles of mastication; peaks in ages 20–40 and is commoner in women',
        'Most cases are self-limiting and respond to simple conservative measures — reassurance is a key part of treatment',
        'Frequently linked to bruxism (tooth-grinding/clenching), stress, and parafunctional habits',
      ],
    },

    { type: 'heading', level: 2, text: 'Clinical Features' },

    {
      type: 'list',
      items: [
        'Localised jaw/pre-auricular pain, worse on chewing, yawning or wide opening; may radiate to the ear, temple or face',
        'Joint clicking/popping, and sometimes intermittent locking or limited mouth opening (trismus)',
        'Tenderness of the masseter/temporalis muscles and over the TMJ; often associated headaches and tinnitus/ear fullness (with normal ear examination)',
        'Ask about clenching/grinding, chewing gum, nail-biting, stress and sleep',
      ],
    },

    { type: 'heading', level: 2, text: 'Differentials Not to Miss' },

    {
      type: 'table',
      headers: ['Condition', 'Discriminator'],
      rows: [
        ['Giant cell arteritis', 'Age >50, jaw claudication with chewing, scalp tenderness, visual symptoms, raised ESR/CRP → urgent'],
        ['Dental/odontogenic pain', 'Localised to a tooth, worse with hot/cold; refer to dentist'],
        ['Trigeminal neuralgia', 'Brief electric-shock facial pain in trigeminal distribution'],
        ['Parotid/ear pathology', 'Swelling, discharge, abnormal otoscopy'],
      ],
    },

    { type: 'heading', level: 2, text: 'Management' },

    {
      type: 'list',
      items: [
        'Explain the benign, self-limiting nature; reassurance improves outcomes',
        'Self-care: soft diet, avoid wide opening/gum-chewing, jaw rest, warm compresses, and jaw-stretching/relaxation exercises',
        'Address bruxism and stress; simple analgesia (paracetamol/NSAID) short-term',
        'A dental review for a bite splint/occlusal appliance if nocturnal bruxism is prominent',
        'Refer (oral & maxillofacial surgery) if severe/persistent symptoms despite 3 months of conservative treatment, recurrent locking, marked trismus, or diagnostic uncertainty',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'gca', label: 'Giant Cell Arteritis', subtitle: 'Jaw claudication — the can\'t-miss differential over 50' },
        { id: 'trigeminal-neuralgia', label: 'Trigeminal Neuralgia', subtitle: 'Paroxysmal facial pain differential' },
        { id: 'headache-assessment', label: 'Headache Assessment', subtitle: 'TMD as a contributor to tension-type headache' },
        { id: 'tinnitus', label: 'Tinnitus', subtitle: 'Otological symptoms with normal ear exam' },
        { id: 'aphthous-ulcers', label: 'Mouth Ulcers', subtitle: 'Orofacial pain differential' },
      ],
    },

  ],
}
