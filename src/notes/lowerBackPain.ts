import type { Note } from '../data/notes'

export const lowerBackPain: Note = {
  id: 'lower-back-pain',
  title: 'Lower Back Pain',
  subtitle: 'Red flags, radiculopathy vs non-specific, STarT Back tool, cauda equina, inflammatory, spinal stenosis',
  tags: ['msk', 'pain'],

  body: 'lower back pain lumbar LBP red flags cauda equina syndrome CES radiculopathy sciatica sciatica L4 L5 S1 disc herniation spinal stenosis STarT Back tool neurogenic claudication inflammatory spondyloarthritis NSAID opioid physiotherapy CBT MRI deep gluteal syndrome sacroiliac joint SIJ spondylosis',

  content: [

    {
      type: 'callout',
      variant: 'danger',
      title: 'Cauda Equina Syndrome (CES) — Same Day Emergency MRI',
      items: [
        'Bilateral leg pain / weakness / sensory loss',
        'Bladder dysfunction — new urinary retention (late sign, high risk of permanent damage if missed) or new incontinence',
        'Bowel dysfunction — faecal incontinence or constipation with new onset',
        'Saddle anaesthesia — numbness around perineum, inner thighs or genitalia (ask "can you feel yourself wiping after going to the toilet?")',
        'Loss of anal tone on PR examination',
        'Refer immediately for same-day emergency MRI spine — do not wait for morning; surgical decompression outcome depends on early intervention',
        'SAFETY NET: always warn patients to return or call 999 if any of these develop',
      ],
    },

    { type: 'heading', level: 2, text: 'The 3 Ns — Classification Framework' },

    {
      type: 'table',
      headers: ['Category', 'Features', 'Action'],
      rows: [
        ['Nasty — Red flags', 'B symptoms (weight loss, night sweats, fever), known malignancy, age >50 new onset, thoracic pain, constant unrelenting pain, recent significant trauma, immunosuppression', 'Same-day emergency referral — MRI/CT'],
        ['Nerve — Radicular / Compressive', 'UL leg pain > back pain, dermatomal sensory change, positive SLR or slump test, L4/L5/S1 distribution (back/posterior leg, lateral calf/foot)', 'Manage conservatively for up to 3 months; refer OTS if no improvement >3 months, significant functional impact, or progressive neurology'],
        ['Non-specific', 'No red flags, no radicular features — muscular, ligamentous or facet joint origin, diffuse lower back pain', 'Reassurance, early mobilisation, STarT Back Tool to stratify treatment'],
      ],
      caption: 'Do NOT routinely image in primary care — MRI/CT rarely changes management for non-specific or radicular LBP and abnormal findings do not correlate with symptoms.',
    },

    { type: 'heading', level: 2, text: 'Neurological Examination' },

    {
      type: 'table',
      headers: ['Level', 'Dermatomal Sensory Loss', 'Motor Weakness', 'Reflex Loss'],
      rows: [
        ['L3', 'Anterior thigh/knee', 'Hip flexion, knee extension', 'Knee jerk'],
        ['L4', 'Medial shin/foot', 'Knee extension, foot inversion', 'Knee jerk'],
        ['L5', 'Lateral shin, dorsal foot, big toe', 'Toe/foot dorsiflexion, hip abduction', 'None or tibialis posterior'],
        ['S1', 'Lateral foot, heel, sole', 'Plantarflexion, foot eversion', 'Ankle jerk'],
        ['S2–S4 (CES)', 'Saddle area, perineum, inner thighs', 'Anal sphincter, bladder — PR essential', 'Anal reflex, bulbocavernosus'],
      ],
      caption: 'Always perform PR for anal tone if CES is suspected. Positive straight leg raise (SLR) = reproduction of radiating leg pain with passive hip flexion at <60° — highly sensitive for L4–S1 disc herniation.',
    },

    { type: 'heading', level: 2, text: 'STarT Back Tool — Non-Specific LBP' },

    {
      type: 'list',
      items: [
        'Validated 9-question screening tool for non-specific LBP — scores 0–9',
        'Low risk (0–3): self-management — active exercise, VA Healthful Back app, reassurance that most resolve; avoid sick note unless absolutely necessary',
        'Medium risk (4–5): refer to physiotherapy — structured exercise, manual therapy, acupuncture',
        'High risk (6–9): physiotherapy + psychological support — CBT, pain clinic referral; address yellow flags (fear avoidance, catastrophising, low mood, poor coping)',
        'Yellow flags (psychological barriers to recovery): fear of movement, belief pain = damage, passive coping, low mood, job dissatisfaction, poor social support — address at every consultation',
      ],
    },

    { type: 'heading', level: 2, text: 'Analgesia in LBP' },

    {
      type: 'table',
      headers: ['Pain Type', 'First Line', 'Second Line', 'Avoid'],
      rows: [
        ['Non-specific', 'Topical NSAID (diclofenac gel TDS) ± paracetamol (limited evidence alone)', 'Short course oral NSAID + PPI if no contraindication', 'Strong opioids routinely; paracetamol alone; bed rest'],
        ['Radicular (nerve)', 'NSAID + PPI short course, consider short course diazepam 2 mg TDS for severe muscle spasm (max 1–2 weeks only)', 'Codeine for max 12 weeks if NSAIDs contraindicated — then refer if not improving; spinal LA/steroid injection under specialist', 'Neuropathic agents (gabapentin/pregabalin) — evidence weak for acute disc; amitriptyline low-dose may help sleep'],
      ],
      caption: 'Opioids for LBP: if used, prescribe for the shortest duration possible with a clear plan. Long-term opioids worsen outcomes in chronic LBP. Diazepam: useful for acute spasm only — dependence risk if prolonged.',
    },

    { type: 'heading', level: 2, text: 'Lumbar Spinal Stenosis (Neurogenic Claudication)' },

    {
      type: 'list',
      items: [
        'Degenerative narrowing of the spinal canal — typically >50 years old',
        'Bilateral buttock/leg pain, tingling, heaviness on walking — improves with forward flexion (leaning on shopping trolley) and sitting; worsened by extension (going downhill)',
        'Distinguishing from vascular claudication: foot pulses normal in spinal stenosis; lying flat relieves vascular claudication but not spinal; onset on walking less consistent in spinal',
        'Normal or mildly abnormal lower limb neurology on examination (unlike acute disc herniation)',
        'Manage conservatively first: physiotherapy, analgesia, walking aids — majority improve over 3–6 months',
        'Refer to OTS for consideration of epidural corticosteroid injection or spinal decompression surgery if severe, progressive neurological deficit, or no improvement after 6 months conservative',
      ],
    },

    { type: 'heading', level: 2, text: 'Inflammatory Back Pain — Spondyloarthropathy' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Suspect Inflammatory Cause if ≥4 of the Following',
      items: [
        'Age <45 years at onset',
        'Onset >3 months insidious duration',
        'Morning stiffness >45 minutes',
        'Improves with movement and exercise (not rest)',
        'Night waking in second half of night due to pain',
        'Buttock pain — may alternate sides (sacroiliac joint involvement)',
        'Associated features: psoriasis, enthesitis (heel/Achilles), iritis, inflammatory bowel disease',
        'Family history of spondyloarthritis, psoriasis or IBD',
        'Consider: either refer to rheumatology directly OR check HLA-B27, CRP, ESR first — if positive, refer urgently',
      ],
    },

    { type: 'heading', level: 2, text: 'Non-Discogenic Radiculopathy' },

    {
      type: 'list',
      items: [
        'Deep Gluteal Syndrome: sciatic nerve entrapment at the greater sciatic notch or by piriformis — buttock pain predominant, positive FAIR test (hip flexion/adduction/internal rotation), usually MRI normal',
        'Sacroiliac Joint (SIJ) dysfunction: posterior pelvic pain localised to PSIS, positive FABER / Gaenslen test — physiotherapy, intra-articular injection under image guidance',
        'Both should be considered when sciatica features present but disc herniation not found on MRI',
      ],
    },

    {
      type: 'callout',
      variant: 'info',
      title: 'Safety Netting — Always Communicate to Patients',
      items: [
        'Return immediately if: unable to pass urine, bowel incontinence, loss of feeling around genitals/bottom, weakness rapidly progressing in both legs',
        'Written CES safety netting information recommended at every consultation for new radicular LBP',
      ],
    },

  ],
}
