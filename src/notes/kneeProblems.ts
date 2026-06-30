import type { Note } from '../data/notes'

export const kneeProblems: Note = {
  id: 'knee-problems',
  title: 'Knee Problems (Traumatic & Non-Traumatic)',
  subtitle: 'Ottawa knee rules, ligament/meniscal injury, patellofemoral pain, tendinopathy and Osgood-Schlatter',
  tags: ['msk'],

  body: `knee pain Ottawa knee rule meniscal tear ACL PCL MCL ligament haemarthrosis Lachman test patellofemoral pain syndrome chondromalacia patellae patellar tendinopathy jumpers knee Osgood-Schlatter tibial tuberosity iliotibial band syndrome ITBS pes anserine bursitis Baker's cyst RICE physiotherapy MRI`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Knee Pain (Assessment)', url: 'https://cks.nice.org.uk/topics/knee-pain-assessment/' },
        { label: 'Ottawa Knee Rule (MDCalc)', url: 'https://www.mdcalc.com/calc/621/ottawa-knee-rule' },
        { label: 'Versus Arthritis — Knee Pain', url: 'https://versusarthritis.org/about-arthritis/conditions/knee-pain/' },
      ],
    },

    { type: 'heading', level: 2, text: 'Traumatic Knee — Exclude Fracture & Serious Injury' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Ottawa Knee Rule — When to X-ray',
      items: [
        'X-ray after acute knee trauma if ANY of: age ≥55; isolated patellar tenderness; tenderness at the head of fibula; inability to flex to 90°; or inability to weight-bear (4 steps) both at the time of injury and in the department',
        'The mechanism of injury is critical to diagnosis (see table)',
        'Reassess within ~2 weeks of RICE; urgent orthopaedic referral for true locking, instability, or a large/rapid (haemarthrosis) effusion',
      ],
    },

    {
      type: 'table',
      headers: ['Injury', 'Mechanism & features', 'Test'],
      rows: [
        ['Meniscal tear', 'Twisting on a fixed foot; "pop"; can usually weight-bear; effusion develops overnight; pain on stairs/squatting; joint-line tenderness', 'Joint-line tenderness, positive squat/duck-walk; MRI if not settling after ~6 weeks physio'],
        ['ACL rupture', 'Pivoting/deceleration or a direct blow when weight-bearing (common in footballers); often cannot continue; rapid effusion (haemarthrosis within hours)', 'Lachman test (most sensitive), anterior draw; urgent OTS; surgery vs rehab is individualised'],
        ['PCL injury', 'Dashboard injury / hyperextension', 'Posterior sag / posterior draw'],
        ['MCL injury', 'Valgus stress (blow to outside of knee)', 'Pain/laxity on valgus stress; usually settles with physio over ~6 weeks'],
      ],
    },

    { type: 'heading', level: 2, text: 'Non-Traumatic Knee — Pain by Location' },

    {
      type: 'list',
      items: [
        'The commonest cause overall is osteoarthritis (see OA note)',
        'Anterior: patellofemoral pain syndrome, patellar tendinopathy, prepatellar bursitis ("housemaid\'s knee"), Osgood-Schlatter (adolescents)',
        'Medial: medial compartment OA, pes anserine bursitis, MCL/medial meniscus',
        'Lateral: lateral compartment OA, iliotibial band syndrome',
        'Posterior: Baker\'s (popliteal) cyst — a ruptured Baker\'s cyst mimics DVT (acute calf swelling) — exclude DVT',
      ],
    },

    {
      type: 'table',
      headers: ['Condition', 'Features & management'],
      rows: [
        ['Patellofemoral pain syndrome ("runner\'s/squatter\'s knee", chondromalacia patellae)', 'Young, active; gradual anterior knee pain worse on squatting, stairs, and rising from sitting. Early physiotherapy (6–12 weeks), VMO strengthening, patellar taping, foot orthotics — most improve'],
        ['Patellar tendinopathy ("jumper\'s knee")', 'Overload in jumping/lifting; tender lower pole of patella. Activity modification + eccentric loading exercises; recovery over months'],
        ['Osgood-Schlatter disease', 'Adolescent tibial-tuberosity pain (apophysitis from patellar tendon traction); tender, prominent tibial tuberosity. RICE, activity modification; self-limiting (can take up to a year)'],
        ['Iliotibial band syndrome', 'Lateral knee pain in runners on foot-strike. RICE, NSAIDs, ITB stretching, review running technique'],
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'osteoarthritis', label: 'Osteoarthritis', subtitle: 'Commonest cause of non-traumatic knee pain; Baker\'s cyst' },
        { id: 'dvt', label: 'DVT', subtitle: 'Ruptured Baker\'s cyst mimics DVT — exclude it' },
        { id: 'gout', label: 'Gout', subtitle: 'Acute hot swollen knee — exclude crystal/septic arthritis' },
        { id: 'foot-heel-pain', label: 'Foot & Heel Pain', subtitle: 'Related lower-limb overuse presentations' },
      ],
    },

  ],
}
