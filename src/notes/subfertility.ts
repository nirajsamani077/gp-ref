import type { Note } from '../data/notes'

export const subfertility: Note = {
  id: 'subfertility',
  title: 'Subfertility & Infertility',
  subtitle: 'Primary-care work-up, mid-luteal progesterone, semen analysis, when to refer and IVF eligibility',
  tags: ['gynaecology'],

  body: `subfertility infertility conception UPSI mid-luteal progesterone day 21 semen analysis ovulation PCOS POI tubal endometriosis male factor varicocele HSG IVF ICSI IUI clomiphene folic acid rubella referral WHO criteria`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CG156 — Fertility Problems', url: 'https://www.nice.org.uk/guidance/cg156' },
        { label: 'NICE CKS — Infertility', url: 'https://cks.nice.org.uk/topics/infertility/' },
        { label: 'HFEA — Fertility Treatment', url: 'https://www.hfea.gov.uk/' },
      ],
    },

    {
      type: 'para',
      text: 'Subfertility affects around 1 in 7 couples and the primary-care role is to assess BOTH partners together, do the small number of high-yield first-line tests (mid-luteal progesterone and semen analysis), optimise lifestyle, and refer at the right time — earlier when the woman is ≥36 or there is a known cause. Beyond the biology, it carries a heavy emotional burden that deserves acknowledgement and support.',
    },
    {
      type: 'list',
      items: [
        'Affects ~1 in 7 couples; with regular unprotected sex, ~80% conceive within 1 year and ~90% within 2 years',
        'Causes: ovulatory disorders (~25%), tubal factors, male factors (~30%), endometriosis, uterine, and unexplained (~25%) — often more than one factor',
        'Assess BOTH partners together from the outset',
      ],
    },

    { type: 'heading', level: 2, text: 'When to Investigate / Refer Early' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Timing',
      items: [
        'Investigate/refer after 1 year of regular unprotected intercourse without conception in a woman <36 with a normal assessment',
        'Refer EARLIER (after ~6 months, or at presentation) if: woman ≥36, amenorrhoea/oligomenorrhoea or other menstrual abnormality, known cause (e.g. previous PID/STI, endometriosis, chemotherapy, undescended testes), previous pelvic/abdominal surgery, or an abnormal examination',
        'Refer a man early with abnormal semen analysis, a history of genital surgery/varicocele/STI, or an abnormal examination',
      ],
    },

    { type: 'heading', level: 2, text: 'Primary-Care Investigations' },

    {
      type: 'table',
      headers: ['Partner', 'Test', 'Interpretation'],
      rows: [
        ['Woman', 'Mid-luteal (day-21 of a 28-day cycle; 7 days before the expected period) serum progesterone', 'Confirms ovulation: >30 nmol/L = ovulating; <16 → refer; 16–30 → repeat'],
        ['Woman', 'Rubella immunity, chlamydia screen, cervical screening up to date; TFTs/prolactin only if symptoms; day 2–5 FSH/LH if irregular cycles', 'Non-immune to rubella → vaccinate (avoid pregnancy for 1 month)'],
        ['Man', 'Semen analysis (WHO criteria) — abstain 2–7 days, deliver to the lab within 1 hour', 'Normal ~ volume ≥1.5 mL, concentration ≥15 million/mL, ≥40% motility, ≥4% normal forms; repeat abnormal results after ~3 months'],
      ],
    },

    { type: 'heading', level: 2, text: 'Lifestyle & Optimisation (Both Partners)' },

    {
      type: 'list',
      items: [
        'Regular intercourse every 2–3 days (do not rigidly "time" intercourse to ovulation — it adds stress)',
        'Folic acid 400 micrograms daily (5 mg if high-risk); aim for a BMI 19–25; stop smoking; limit alcohol; the man should avoid excess heat/tight underwear',
        'Optimise chronic conditions and review medications for those affecting fertility',
      ],
    },

    { type: 'heading', level: 2, text: 'Secondary Care & Treatment' },

    {
      type: 'list',
      items: [
        'Investigations: tubal patency (hysterosalpingogram or laparoscopy + dye), and further male work-up (hormones, USS, karyotype) if indicated',
        'Ovulation induction (e.g. letrozole/clomifene for PCOS); tubal surgery; treatment of endometriosis',
        'Assisted conception: IUI (intrauterine insemination), IVF, and ICSI (sperm injected into the egg — for male factor); unexplained infertility usually proceeds to IVF after ~2 years of trying',
        'NHS IVF eligibility varies by ICB but broadly offers up to 3 full cycles to eligible women <40 (and 1 cycle at 40–42) — check local criteria',
        'Signpost Fertility Network UK and counselling — infertility carries a significant emotional burden',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'pcos', label: 'PCOS', subtitle: 'The commonest cause of anovulatory subfertility' },
        { id: 'menopause', label: 'Menopause', subtitle: 'Premature ovarian insufficiency as a cause' },
        { id: 'scrotal-groin-lumps', label: 'Scrotal & Groin Lumps', subtitle: 'Varicocele and undescended testes — male factors' },
        { id: 'endometriosis', label: 'Endometriosis', subtitle: 'Tubal/pelvic factor subfertility' },
      ],
    },

  ],
}
