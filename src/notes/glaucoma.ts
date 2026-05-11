import type { Note } from '../data/notes'

export const glaucoma: Note = {
  id: 'glaucoma',
  title: 'Glaucoma',
  subtitle: 'POAG vs AACG, eye drops, IOP management, driving standards and tamsulosin',
  tags: ['ophthalmology'],

  body: 'glaucoma primary open angle glaucoma POAG acute angle closure glaucoma AACG intraocular pressure IOP optic neuropathy RNFL retinal nerve fibre layer latanoprost prostaglandin analogue timolol beta blocker brimonidine brinzolamide pilocarpine trabeculoplasty iridotomy acetazolamide tamsulosin alpha blocker driving DVLA visual field',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Glaucoma — Overview',
      items: [
        'Most common cause of irreversible blindness worldwide — damage to the retinal nerve fibre layer (RNFL) and optic nerve due to excess aqueous humour pressure',
        'Primary open angle glaucoma (POAG): gradual, bilateral, peripheral visual field loss — usually asymptomatic until advanced; detected on routine optometrist screening',
        'Acute angle closure glaucoma (AACG): sudden, severe, painful red eye — ophthalmological emergency',
        'The angle = drainage point of aqueous humour in anterior chamber; closed angle obstructs drainage; open angle with trabecular meshwork obstruction in POAG',
      ],
    },

    { type: 'heading', level: 2, text: 'Types and Risk Factors' },

    {
      type: 'table',
      headers: ['Type', 'Risk Factors', 'Features'],
      rows: [
        ['POAG (Primary Open Angle)', 'Age >40, family history, Black ethnicity, type 2 diabetes, myopia (short-sightedness), long-term steroid use', 'Gradual bilateral peripheral visual loss; usually detected at routine optometrist screening; IOP often >21 mmHg but NOT always (normal tension glaucoma exists)'],
        ['AACG (Acute Angle Closure)', 'Age >50, female, hypermetropia (far-sightedness), drug precipitants (TCAs, topiramate, antipsychotics, antihistamines)', 'Sudden severe eye pain, redness, blurred vision, coloured halos, nausea/vomiting; cloudy cornea, fixed semi-dilated pupil, tender hard eye'],
        ['Secondary glaucoma', 'Uveitis, neovascularisation (blocking trabecular meshwork), long-term steroids', 'Varies — dependent on underlying cause'],
      ],
    },

    { type: 'heading', level: 2, text: 'AACG — Ophthalmological Emergency' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Acute Angle Closure Glaucoma — Same-Day Eye Casualty',
      items: [
        'Symptoms: sudden severe eye pain, blurred vision, coloured halos around lights, nausea/vomiting, frontal headache',
        'Signs: injected red eye, cloudy/steamy cornea, fixed semi-dilated pupil, tender hard globe on gentle palpation',
        'REFER IMMEDIATELY to ophthalmology eye casualty — do NOT wait',
        'Measure IOP if available (tonometer); start acetazolamide (Diamox) 500 mg IV or PO if confident of diagnosis and instructed by ophthalmologist — do not prescribe routinely before assessment',
        'Definitive treatment: laser peripheral iridotomy (LPI); bilateral — treat the other eye prophylactically',
        'Subacute intermittent AACG: recurrent painful episodes in low-light conditions (e.g., cinema, bedtime); refer urgently to ophthalmology for laser iridotomy',
      ],
    },

    { type: 'heading', level: 2, text: 'POAG — Medical Management (Eye Drops)' },

    {
      type: 'callout',
      variant: 'info',
      title: 'When to Treat POAG',
      items: [
        'Treat if: IOP >24 mmHg AND risk of visual impairment (e.g., visual field loss, disc changes) OR IOP >32 mmHg (NICE threshold for immediate treatment regardless of visual field)',
        'All treatment initiated and monitored by ophthalmology — primary care does NOT initiate glaucoma eye drops',
        'Regular follow-up: every 6–12 months in ophthalmology',
        'Primary care role: check for systemic effects of eye drops (especially beta blocker), ensure compliance, update medication list',
      ],
    },

    {
      type: 'table',
      headers: ['Drug Class', 'Example', 'Mechanism', 'Key Precautions'],
      rows: [
        ['Prostaglandin analogue (First line)', 'Latanoprost OD (evening)', 'Increases aqueous outflow', 'Side effect: iris darkening, increased eyelash length; no significant systemic effects'],
        ['Beta blocker', 'Timolol 0.25–0.5% BD', 'Reduces aqueous production', 'AVOID in asthma/COPD, bradycardia, heart block, severe heart failure — significant systemic absorption'],
        ['Alpha-2 agonist (Second line)', 'Brimonidine BD-TDS', 'Reduces aqueous production + increases outflow', 'Avoid with MAOIs; caution with TCA as potential interaction'],
        ['Carbonic anhydrase inhibitor (Second line)', 'Brinzolamide (dorzolamide) BD-TDS', 'Reduces aqueous production', 'Avoid in sulfonamide allergy; systemic CA inhibitor (acetazolamide) for acute IOP reduction only'],
        ['Miotic', 'Pilocarpine QDS', 'Increases aqueous outflow via ciliary body', 'Causes miosis (dim light difficulties); headache; use in AACG and refractory POAG'],
      ],
      caption: 'Preservative-free (PF) formulations are available if allergy to benzalkonium chloride (BAK) preservative — more expensive; use only if proven hypersensitivity. Surgery (laser trabeculoplasty or trabeculectomy) considered if drops insufficient.',
    },

    { type: 'heading', level: 2, text: 'Tamsulosin Warning' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Glaucoma and Alpha-1 Blockers (e.g. Tamsulosin)',
      items: [
        'If patient is on or being considered for tamsulosin (or other alpha-1 blockers) and has glaucoma: inform prescriber — alpha-1 blockers can precipitate acute angle closure in susceptible patients',
        'Ophthalmologist must be informed BEFORE cataract surgery in patients on tamsulosin — risk of IFIS (intraoperative floppy iris syndrome)',
        'Do NOT routinely stop tamsulosin without specialist advice',
      ],
    },

    { type: 'heading', level: 2, text: 'Driving with Glaucoma' },

    {
      type: 'list',
      items: [
        'Group 1 licence (car/motorcycle): must inform DVLA if BOTH eyes are affected — binocular visual field defect may disqualify; if only one eye affected and other meets standards, may continue',
        'Group 2 licence (HGV/PSV): must inform DVLA if one or both eyes affected by glaucoma — higher visual field standards apply',
        'DVLA visual field assessment: automated perimetry may be requested by DVLA to determine fitness to drive',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'AACG (emergency): UHDB Queen\'s Hospital Burton eye department OR Good Hope Hospital (UHB) eye casualty — telephone ahead',
        'POAG (via optometrist): optometrists can refer directly to NHS glaucoma service via Referral Refinement Service — encourage patients to have annual optometrist checks',
        'GP-initiated glaucoma referral: if POAG suspected on optometrist report — refer UHDB Burton ophthalmology via e-RS',
        'Glaucoma follow-up: shared with ophthalmology; primary care checks systemic tolerance of eye drops (especially beta blockers in asthma/COPD patients)',
        'Patient resources: RNIB (rnib.org.uk); Glaucoma UK (glaucoma.uk)',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG81 — Glaucoma', url: 'https://www.nice.org.uk/guidance/ng81' },
        { label: 'NICE CKS — Glaucoma', url: 'https://cks.nice.org.uk/topics/glaucoma/' },
        { label: 'Glaucoma UK', url: 'https://glaucoma.uk/' },
        { label: 'DVLA — Visual Disorders Guidance', url: 'https://www.gov.uk/guidance/visual-disorders-assessing-fitness-to-drive' },
      ],
    },
  ],
}
