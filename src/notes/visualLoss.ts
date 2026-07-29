import type { Note } from '../data/notes'

export const visualLoss: Note = {
  id: 'visual-loss',
  title: 'Sudden Visual Loss, Flashes & Floaters',
  subtitle: 'The painless-sudden-loss emergencies, retinal detachment, GCA and the optic neuritis pathway',
  tags: ['ophthalmology'],

  body: `sudden visual loss painless amaurosis fugax central retinal artery occlusion CRAO central retinal vein occlusion CRVO retinal detachment vitreous haemorrhage wet AMD GCA giant cell arteritis optic neuritis flashes floaters posterior vitreous detachment RAPD curtain stroke TIA papilloedema`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Visual Loss (Sudden)', url: 'https://cks.nice.org.uk/topics/sudden-loss-of-vision/' },
        { label: 'NICE CKS — Retinal Detachment', url: 'https://cks.nice.org.uk/topics/flashes-floaters/' },
        { label: 'RNIB — Eye Conditions', url: 'https://www.rnib.org.uk/' },
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Sudden Visual Loss = Emergency',
      items: [
        'Any sudden loss of vision needs same-day emergency eye casualty (or stroke pathway) assessment',
        'First check visual acuity, pupils (RAPD), visual fields and fundoscopy where possible',
        'A relative afferent pupillary defect (RAPD) on the swinging-light test indicates significant optic nerve or extensive retinal pathology',
        'Always ask about GCA symptoms in the over-50s (see below) — treatable and bilateral-blindness-preventing',
      ],
    },

    { type: 'heading', level: 2, text: 'Sudden PAINLESS Visual Loss — Causes' },

    {
      type: 'table',
      headers: ['Cause', 'Key Features'],
      rows: [
        ['Amaurosis fugax / TIA', 'Transient "curtain" descending over vision, resolving — treat as a TIA (stroke pathway, antiplatelet, carotid imaging)'],
        ['Central retinal artery occlusion (CRAO)', 'Sudden profound loss; pale retina with a "cherry-red spot"; RAPD; treat as stroke equivalent (and exclude GCA)'],
        ['Central retinal vein occlusion (CRVO)', 'Sudden blurring; "stormy sunset" fundus with widespread haemorrhages; risk factors — hypertension, glaucoma, hyperviscosity'],
        ['Retinal detachment', 'Flashes, a shower of new floaters, then a "curtain/shadow" across the field — emergency'],
        ['Vitreous haemorrhage', 'Sudden floaters/haze/loss; common in proliferative diabetic retinopathy'],
        ['Wet age-related macular degeneration', 'Rapid central distortion/loss; needs urgent macular clinic (anti-VEGF)'],
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Giant Cell Arteritis — Treat Immediately',
      items: [
        'Age >50 with sudden visual loss + temporal headache, jaw claudication, scalp tenderness → suspect GCA (anterior ischaemic optic neuropathy)',
        'Start high-dose corticosteroid immediately (do NOT wait for tests) and arrange same-day ophthalmology/rheumatology — to protect the fellow eye',
        'Check ESR/CRP; temporal artery biopsy confirms but should not delay steroids (see GCA note)',
      ],
    },

    { type: 'heading', level: 2, text: 'Optic Neuritis' },

    {
      type: 'list',
      items: [
        'Subacute (over hours–days) unilateral visual loss with pain on eye movement and loss of colour vision (red desaturation); RAPD present',
        'Often the presenting feature of multiple sclerosis (especially in younger patients) — refer urgently to ophthalmology/neurology; MRI brain/orbits',
      ],
    },

    { type: 'heading', level: 2, text: 'Flashes & Floaters' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Take New Flashes/Floaters Seriously',
      items: [
        'Most are due to benign posterior vitreous detachment (PVD), common with age — but they can herald retinal detachment or vitreous haemorrhage',
        'Refer for same-day/urgent ophthalmology assessment if: reduced visual acuity, a sudden shower of new floaters, a "curtain"/shadow across the field, or flashes — to exclude retinal tear/detachment',
        'A retinal tear caught early can be treated with laser before progressing to detachment',
        'Distinguish from migraine aura: bilateral, transient (~20–30 min) zig-zag/shimmering scotoma that moves and resolves, often followed by headache',
      ],
    },

    { type: 'heading', level: 2, text: 'Gradual Visual Loss (usually optometry + routine referral)' },

    {
      type: 'list',
      items: [
        'Refractive error (improves with a pinhole), cataract, chronic open-angle glaucoma, dry AMD, diabetic retinopathy',
        'Drug-related (e.g. hydroxychloroquine, ethambutol, amiodarone) — relevant monitoring',
        'Bilateral subacute loss with papilloedema → consider raised intracranial pressure / space-occupying lesion',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'red-eye', label: 'Red Painful Eye', subtitle: 'The painful-eye emergency pathway' },
        { id: 'gca', label: 'Giant Cell Arteritis', subtitle: 'Sight-threatening — immediate steroids in the over-50s' },
        { id: 'stroke-tia', label: 'Stroke & TIA', subtitle: 'Amaurosis fugax/CRAO are stroke-pathway events' },
        { id: 'multiple-sclerosis', label: 'Multiple Sclerosis', subtitle: 'Optic neuritis is a common presenting feature' },
        { id: 'amd', label: 'Age-Related Macular Degeneration', subtitle: 'Wet AMD — urgent; dry AMD — gradual' },
        { id: 'sight-registration', label: 'Sight Impairment Registration', subtitle: 'CVI process and the support it unlocks' },
      ],
    },

  ],
}
