import type { Note } from '../data/notes'

export const sterilisation: Note = {
  id: 'sterilisation',
  title: 'Vasectomy & Female Sterilisation',
  subtitle: 'Counselling for permanent contraception, failure rates, the vasectomy pathway and post-procedure care',
  tags: ['gynaecology'],

  body: `vasectomy female sterilisation tubal occlusion laparoscopic clips permanent contraception failure rate regret reversal LARC comparison post-vasectomy semen analysis azoospermia contraception until confirmed counselling`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Sterilisation offers permanent contraception for people who have completed their family. The GP role is largely counselling and referral: ensuring the decision is informed, that both partners have considered the alternatives (especially long-acting reversible contraception, which is as effective and reversible), and that people understand it should be regarded as irreversible. Vasectomy is simpler, safer and more effective than female sterilisation and is often the better option for a couple.',
    },

    { type: 'heading', level: 2, text: 'Counselling Points (Both Methods)' },
    {
      type: 'callout',
      variant: 'info',
      title: 'Informed, Irreversible Decision',
      items: [
        'Regard sterilisation as PERMANENT — reversal is not routinely NHS-funded, is not always successful, and future regret is more likely in the young, those without children, and at times of relationship change or loss.',
        'Discuss the alternatives — LARC (implant, IUS, IUD) is at least as effective as sterilisation and is reversible; make sure the couple has genuinely considered these.',
        'No consent from a partner is legally required, but joint counselling is good practice.',
        'Sterilisation does NOT protect against STIs.',
      ],
    },

    { type: 'heading', level: 2, text: 'Vasectomy' },
    {
      type: 'list',
      items: [
        'A minor procedure usually under local anaesthetic — the vas deferens is divided/occluded; lower failure rate (~1 in 2000 lifetime) and lower procedural risk than female sterilisation.',
        'It is NOT effective immediately — continue other contraception until azoospermia is confirmed on a post-vasectomy semen analysis (typically at ~12 weeks / after ~20 ejaculations, per local protocol).',
        'Risks: bruising, infection, and chronic post-vasectomy scrotal pain (~1–2%); counsel about these. It does not affect testosterone, libido or ejaculation volume noticeably.',
      ],
    },

    { type: 'heading', level: 2, text: 'Female Sterilisation' },
    {
      type: 'list',
      items: [
        'Usually laparoscopic tubal occlusion (clips) or salpingectomy under general anaesthetic; failure rate ~1 in 200 lifetime (higher than vasectomy).',
        'Effective immediately if done in the follicular phase or with reliable contraception up to the procedure — but use contraception until the next period to avoid a luteal-phase pregnancy.',
        'If the method fails, any resulting pregnancy has a higher risk of being ECTOPIC — counsel to seek early assessment for a positive test with pain/bleeding.',
        'Carries the risks of laparoscopy/GA (visceral/vascular injury, anaesthetic risk).',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'FSRH — Male & Female Sterilisation Guideline', url: 'https://www.fsrh.org/standards-and-guidance/documents/male-and-female-sterilisation/' },
        { label: 'NHS — Vasectomy', url: 'https://www.nhs.uk/conditions/vasectomy-male-sterilisation/' },
        { label: 'NHS — Female Sterilisation', url: 'https://www.nhs.uk/conditions/contraception/female-sterilisation/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'contraception', label: 'Contraception — Overview', subtitle: 'Compare with LARC before choosing sterilisation' },
        { id: 'larcs', label: 'LARC Methods', subtitle: 'As effective as sterilisation, and reversible' },
        { id: 'subfertility', label: 'Subfertility & Infertility', subtitle: 'Reversal and post-sterilisation fertility issues' },
        { id: 'miscarriage-ectopic', label: 'Miscarriage & Ectopic Pregnancy', subtitle: 'Higher ectopic risk if female sterilisation fails' },
      ],
    },

  ],
}
