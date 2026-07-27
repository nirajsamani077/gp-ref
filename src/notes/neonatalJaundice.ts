import type { Note } from '../data/notes'

export const neonatalJaundice: Note = {
  id: 'neonatal-jaundice',
  title: 'Neonatal Jaundice',
  subtitle: 'Early (<24h) = urgent, physiological vs prolonged jaundice, and the biliary atresia red flag',
  tags: ['paediatrics'],

  body: `neonatal jaundice bilirubin phototherapy kernicterus physiological breastmilk jaundice haemolysis ABO rhesus G6PD spherocytosis biliary atresia conjugated split bilirubin prolonged jaundice transcutaneous bilirubinometer exchange transfusion`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CG98 — Jaundice in Newborn Babies', url: 'https://www.nice.org.uk/guidance/cg98' },
        { label: 'NICE CKS — Neonatal Jaundice', url: 'https://cks.nice.org.uk/topics/jaundice-in-newborns/' },
        { label: 'NHS — Newborn Jaundice', url: 'https://www.nhs.uk/conditions/jaundice-newborn/' },
      ],
    },

    {
      type: 'para',
      text: 'Neonatal jaundice is extremely common and usually benign, but timing is everything: jaundice in the first 24 hours is always pathological and urgent, while jaundice persisting beyond 14 days must be split (conjugated vs unconjugated) to catch biliary atresia. The two catastrophes to prevent are kernicterus (from very high unconjugated bilirubin) and a missed biliary atresia (where the Kasai operation is time-critical).',
    },
    { type: 'heading', level: 2, text: 'Timing Determines the Cause' },

    {
      type: 'table',
      headers: ['Onset', 'Significance', 'Common causes'],
      rows: [
        ['Early — <24 hours', 'ALWAYS pathological — urgent assessment', 'Haemolysis (rhesus/ABO incompatibility, G6PD deficiency, hereditary spherocytosis) or sepsis'],
        ['2–14 days', 'Common and usually benign', 'Physiological jaundice; breast-milk jaundice; also consider sepsis, bruising/cephalhaematoma, polycythaemia, dehydration'],
        ['Prolonged — >14 days (term) / >21 days (preterm)', 'Needs investigation', 'Often still breast-milk jaundice, but must exclude biliary atresia, hypothyroidism, infection, and metabolic causes'],
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Jaundice in the First 24 Hours → Urgent',
      items: [
        'Any jaundice within the first 24 hours of life needs immediate assessment: measure the serum bilirubin urgently, perform a septic screen, and check FBC, blood group and direct antiglobulin test (Coombs/DAT)',
        'Severe unconjugated hyperbilirubinaemia can cause kernicterus (bilirubin encephalopathy) — irreversible brain injury',
        'Also assess urgently any unwell baby (poor feeding, lethargy, fever/hypothermia), or visible jaundice that looks significant',
      ],
    },

    { type: 'heading', level: 2, text: 'Prolonged Jaundice — Split the Bilirubin' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Conjugated (Direct) Jaundice = Biliary Atresia Until Proven Otherwise',
      items: [
        'For prolonged jaundice, always measure a SPLIT (conjugated + unconjugated) bilirubin',
        'A raised CONJUGATED bilirubin is never physiological → urgent paediatric/surgical referral to exclude biliary atresia (dark urine, pale/chalky stools) — early Kasai portoenterostomy dramatically improves outcome',
        'Other prolonged-jaundice checks: TFTs (congenital hypothyroidism — also on the newborn spot test), urine for infection and reducing substances (galactosaemia), and congenital infection (TORCH) screen',
        'Unconjugated prolonged jaundice in a thriving breastfed baby is usually breast-milk jaundice (benign) — but only after excluding the above',
      ],
    },

    { type: 'heading', level: 2, text: 'Assessment & Treatment' },

    {
      type: 'list',
      items: [
        'Assess in good natural light; use a transcutaneous bilirubinometer where available and confirm significant readings with serum bilirubin, plotted on the age-specific treatment threshold chart (nomogram)',
        'Support feeding (continue breastfeeding; ensure adequate intake — jaundice + poor feeding + weight loss can compound); most physiological jaundice needs no treatment',
        'Treatment (hospital, guided by the bilirubin chart): phototherapy; exchange transfusion for very high or rapidly rising levels',
        'Community care is usually coordinated via the community midwife — discuss significant or prolonged jaundice with the paediatric team',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: '6-8-week-check', label: '6–8 Week Baby & Mother Check', subtitle: 'Prolonged jaundice may still be evident; wider newborn review' },
        { id: 'hypothyroidism', label: 'Hypothyroidism', subtitle: 'Congenital hypothyroidism as a cause of prolonged jaundice' },
        { id: 'sickle-cell', label: 'Sickle Cell Disease', subtitle: 'Haemoglobinopathy/haemolysis context' },
        { id: 'faltering-growth', label: 'Faltering Growth', subtitle: 'Feeding, weight and neonatal wellbeing' },
        { id: 'rhesus-anti-d', label: 'Rhesus Disease & Anti-D', subtitle: 'Haemolytic disease of the newborn — early haemolytic jaundice' },
      ],
    },

  ],
}
