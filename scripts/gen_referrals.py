#!/usr/bin/env python3
"""Generate src/data/referralForms.ts from the SES referral-forms PDF library."""
import os, re, json, collections
from urllib.parse import quote

ROOT = "public/pdfs/Referral forms SES"
OUT_TS = "src/data/referralForms.ts"

try:
    import fitz  # PyMuPDF
except ImportError:
    fitz = None

# ── Facet dictionaries ──────────────────────────────────────────────────────
# Acute hospital trusts (issuing trust) → short badge code
TRUSTS = {
    'uhnm': 'UHNM', 'uhmn': 'UHNM',            # uhmn = typo
    'uhdb': 'UHDB', 'rwt': 'RWT', 'uhb': 'UHB',
    'roh': 'ROH', 'wht': 'WHT',
    'bwc': 'BWC', 'bwh': 'BWC',
}
TRUST_FULL = {
    'UHNM': 'University Hospitals of North Midlands',
    'UHDB': 'University Hospitals of Derby & Burton',
    'RWT':  'Royal Wolverhampton Trust',
    'UHB':  'University Hospitals Birmingham',
    'ROH':  'Royal Orthopaedic Hospital',
    'WHT':  'Walsall Healthcare Trust',
    'BWC':  "Birmingham Women's & Children's",
}
# 'burton' implies UHDB (Queen's Hospital Burton)
# Community / other providers (multi-word matched first)
PROVIDERS = [
    ('health harmonie', 'Health Harmonie'),
    ('katharine house', 'Katharine House Hospice'),
    ('st giles',        'St Giles Hospice'),
    ('staffordshire county council', 'Staffs County Council'),
    ('staffs county council', 'Staffs County Council'),
    ('specsavers',      'Specsavers'),
    ('everyone health', 'Everyone Health'),
    ('alzheimers society', "Alzheimer's Society"),
    ('vocare',          'Vocare'),
    ('opcare',          'Opcare'),
    ('nurture',         'Nurture Fertility'),
    ('tavistock',       'Tavistock'),
    ('mpft',            'MPFT'),
]
PROVIDER_FULL = {
    'MPFT': 'Midlands Partnership (community & mental health)',
    'Health Harmonie': 'Health Harmonie community service',
}
# Region / scheme tags (kept as keywords, not primary badges)
REGION_TOKENS = {'ssot': 'Staffordshire & Stoke-on-Trent SSOT', 'wmca': 'West Midlands Cancer Alliance',
                 'bsol': 'Birmingham & Solihull', 'aqp': 'any qualified provider'}

# Folder → specialty label
CATEGORY_MAP = {
    '2WW': '2WW Cancer',
    'Admin': 'Admin',
    'Adult Mental Health': 'Mental Health',
    'Child Mental Health': 'Mental Health',
    'Audiology': 'Audiology',
    'COVID': 'COVID',
    'Cardiology': 'Cardiology',
    'Clinical Genetics': 'Genetics',
    'Community Services': 'Community Services',
    'Diabetes Endocrine Weight': 'Diabetes & Endocrine',
    'Fertility Andrology': 'Fertility & Andrology',
    'Gastro': 'Gastro',
    'Gynaecology': 'Gynaecology',
    'Imaging': 'Imaging',
    'MSK Orthopaedics': 'MSK / Orthopaedics',
    'Neurology': 'Neurology',
    'Paediatrics': 'Paediatrics',
    'Palliative': 'Palliative',
    'Respiratory': 'Respiratory',
}

# Acronyms to force-uppercase in the display title
UPPER = {'2ww','adhd','asd','tia','dexa','uss','mri','ct','ugi','gi','ecg','gp','fh','tb','cfs',
         'salt','ot','dn','cit','cmht','cps','frat','ptr','cgm','ndpp','paap','mart','sop','ld',
         'spoa','hpb','cns','cnd','roh','uhb','uhnm','uhdb','rwt','wht','bwc','bma','nhs','se',
         'hrt','bp','24h','fit','cmps','srp','sjh','ajm','hn','bv','ca125','msk','camhs','rtc',
         'osa','me','cmht','covid','mc','pft'}
TYPO = {'persionalised':'personalised','stafforshire':'staffordshire','uterina':'uterine',
        'ezcema':'eczema','burtnwood':'burntwood','guideliens':'guidelines'}
CONNECTORS = {'and','to','or','on','in','for','with','of','the','not'}
MANUAL_TITLE = {
    'alzheimers society (staffordshire) referral': "Alzheimer's Society Referral (Staffordshire)",
    'adult  mental health secondary care referral cmht': 'Adult Mental Health Secondary Care (CMHT)',
    'psychosexual services referral mpft (open clinic)': 'Psychosexual Services Referral (Open Clinic)',
}

def cap_first_alpha(w):
    for i, ch in enumerate(w):
        if ch.isalpha():
            return w[:i] + ch.upper() + w[i+1:]
    return w
# Acronym → search expansion (synonyms folded into keywords)
EXPAND = {
    '2ww':'two week wait urgent suspected cancer fast track','adhd':'attention deficit hyperactivity',
    'asd':'autism spectrum disorder','autism':'asd neurodevelopmental','tia':'transient ischaemic attack mini stroke',
    'dexa':'bone density osteoporosis scan','uss':'ultrasound scan','mri':'magnetic resonance imaging scan',
    'ugi':'upper gastrointestinal endoscopy gastroscopy','ecg':'heart tracing electrocardiogram',
    'echo':'echocardiogram heart ultrasound','fh':'familial hypercholesterolaemia cholesterol lipids',
    'tb':'tuberculosis','cfs':'chronic fatigue syndrome me','salt':'speech and language therapy',
    'ot':'occupational therapy','dn':'district nurse','cit':'community intervention team',
    'cmht':'community mental health team','audiology':'hearing loss deafness hearing aids',
    'memory':'dementia alzheimers cognitive','andrology':'male fertility semen sperm','ndpp':'national diabetes prevention',
    'desmond':'diabetes education','paap':'personalised asthma action plan','spiro':'spirometry lung function',
    'spirometry':'lung function breathing test','ld':'learning disability','perinatal':'pregnancy postnatal maternal',
    'podiatry':'feet foot chiropody','dietician':'nutrition dietetics','frat':'falls risk',
    'hrt':'hormone replacement therapy menopause','bv':'bacterial vaginosis','ca125':'ovarian cancer',
    'fit':'faecal immunochemical bowel cancer','hpb':'hepatobiliary pancreas liver','cns':'central nervous system brain',
    'msk':'musculoskeletal orthopaedics','vasectomy':'sterilisation contraception male',
    'neurophysiology':'nerve conduction emg','phlebotomy':'blood test','continence':'incontinence bladder pelvic',
    'wheelchair':'mobility','orthotics':'insoles braces','microsuction':'ear wax removal',
    'lymphedema':'lymphoedema swelling','veterans':'armed forces military','gender':'gender identity dysphoria',
    'sleep':'obstructive sleep apnoea osa snoring','breathlessness':'dyspnoea shortness of breath',
    'oxygen':'home oxygen therapy','pulmonary':'lung respiratory rehab',
}

STOP = set("the a an and or of to in for with on at by is are be this that from as it its into your you we our will can may not have has had if then than".split())

def clean_title(stem, trust, provider, folder):
    if stem.lower() in MANUAL_TITLE:
        return MANUAL_TITLE[stem.lower()]
    t = stem.lower().replace('_', ' ')
    t = re.sub(r'\s+', ' ', t).strip()
    for bad, good in TYPO.items():
        t = re.sub(r'\b'+bad+r'\b', good, t)
    # drop noise phrases
    t = t.replace('(no signature)', '').replace('(with guidelines)', '').replace('(with guidance)', '')
    t = t.replace('referral form', 'referral').replace('form and criteria', 'referral')
    # remove provider proper-name PHRASES (shown as badge) — but not the bare word 'health'
    t = t.replace('bham women childrens', ' ').replace('midlands community services', ' ')
    for key, _ in PROVIDERS:
        if key not in ('mpft',) and ' ' in key:
            t = t.replace(key, ' ')
    toks = [w for w in re.split(r'[\s\-]+', t) if w]
    # tokens to drop entirely: trust/scheme/provider CODES only
    drop = set(TRUSTS) | {'wmca','bsol','ssot','mpft','aqp','wmfhs','wmfacs','clics',
                          'ajm','srp','sjh','opcare','vocare','nurture','ghh','hn'}
    out = []
    for i, w in enumerate(toks):
        wl = re.sub(r'[^a-z0-9]', '', w)
        if not wl or wl in drop:
            continue
        if wl in UPPER:
            out.append(wl.upper())
        elif wl in ('paeds','paediatric','paediatrics'):
            out.append('Paediatric')
        elif wl == 'gynae': out.append('Gynae')
        elif wl == 'derm':  out.append('Dermatology')
        elif wl == 'haem':  out.append('Haematology')
        elif wl in CONNECTORS and out:            # lowercase connectors mid-title
            out.append(wl)
        elif len(wl) <= 2:
            out.append(wl.upper() if wl in UPPER else cap_first_alpha(w))
        else:
            out.append(cap_first_alpha(w))
    title = re.sub(r'\s+', ' ', ' '.join(out).strip())
    title = title.replace('( ', '(').replace(' )', ')')
    if title:
        title = title[0].upper() + title[1:]
    else:
        title = stem
    return title

def detect_age(path_lower, folder):
    if folder == 'Child Mental Health' or folder == 'Paediatrics':
        return 'Child'
    if folder == 'Adult Mental Health':
        return 'Adult'
    child_kw = ['child','children','childrens','paeds','paediatric','camhs','young person',
                'young adult','neonate','toddler','school nurse','health visitor','early years']
    if any(k in path_lower for k in child_kw):
        return 'Child'
    if 'adult' in path_lower:
        return 'Adult'
    return None

def detect_trust(stem_lower, folder, subfolder):
    """Trust comes from the FILENAME first (subfolder names mix trusts, e.g.
    'UHB and ROH'), then the 2WW subfolder as a fallback."""
    if 'uhmn' in stem_lower: return 'UHNM'
    for code in ['uhnm','uhdb','rwt','roh','wht','bwc','bwh','uhb']:
        if re.search(r'\b'+code+r'\b', stem_lower):
            return TRUSTS[code]
    if 'burton' in stem_lower or 'derby' in stem_lower:
        return 'UHDB'
    # 2WW subfolder fallback (single-trust folders only)
    sf = (subfolder or '').lower()
    if 'north midlands' in sf or 'uhnm' in sf: return 'UHNM'
    if 'derby and burton' in sf or 'uhdb' in sf: return 'UHDB'
    if 'wolverhampton' in sf or 'rwt' in sf: return 'RWT'
    if 'walsall' in sf or 'wht' in sf: return 'WHT'
    return None

def detect_provider(path_lower):
    for key, name in PROVIDERS:
        if key in path_lower:
            return name
    return None

def slugify(s):
    return re.sub(r'[^a-z0-9]+','-', s.lower()).strip('-')[:70]

def body_keywords(path):
    if not fitz: return ''
    try:
        d = fitz.open(path); txt = ' '.join(p.get_text() for p in d); d.close()
    except Exception:
        return ''
    words = re.findall(r"[A-Za-z][A-Za-z\-']{3,}", txt)
    freq = collections.Counter()
    caps = set()
    for w in words:
        wl = w.lower()
        if wl in STOP: continue
        if w.isupper() and 2 <= len(w) <= 6:
            caps.add(wl)
        freq[wl] += 1
    # top salient terms by frequency (excluding very generic form words)
    generic = {'referral','patient','form','name','date','please','address','details','service',
               'nhs','gp','practice','number','information','tel','email','clinical','trust',
               'hospital','team','contact','yes','no','dob','postcode','telephone','reason','history'}
    top = [w for w,_ in freq.most_common(60) if w not in generic][:22]
    return ' '.join(sorted(set(list(caps) + top)))

# ── Walk & build ────────────────────────────────────────────────────────────
records = []
seen_ids = set()
for dp, _, fns in os.walk(ROOT):
    for fn in sorted(fns):
        if not fn.lower().endswith('.pdf'): continue
        full = os.path.join(dp, fn)
        rel = os.path.relpath(full, ROOT)
        parts = rel.split(os.sep)
        folder = parts[0]
        stem = fn[:-4]
        path_lower = rel.lower()

        # Master guidance doc at root
        if folder.endswith('.pdf'):
            category = 'Guidance'
            folder = 'Guidance'
        else:
            category = CATEGORY_MAP.get(folder, folder)

        subfolder = parts[1] if len(parts) > 2 else None
        trust = detect_trust(stem.lower(), folder, subfolder)
        provider = detect_provider(path_lower)
        age = detect_age(path_lower, folder)
        title = clean_title(stem, trust, provider, folder)

        # keywords: acronym expansions present in path + region tags + body terms
        kw = set()
        for ac, exp in EXPAND.items():
            if re.search(r'\b'+re.escape(ac)+r'\b', path_lower):
                kw.update(exp.split())
        for tok, exp in REGION_TOKENS.items():
            if tok in path_lower: kw.update(exp.lower().split())
        if trust: kw.update(TRUST_FULL[trust].lower().split())
        if provider: kw.update(provider.lower().split())
        kw.update(body_keywords(full).split())
        # also fold raw filename words
        kw.update(re.sub(r'[^a-z0-9 ]',' ', stem.lower()).split())
        kw.discard(''); [kw.discard(s) for s in list(STOP)]
        keywords = ' '.join(sorted(kw))

        base = slugify(f"{category}-{stem}")
        rid = base; i = 2
        while rid in seen_ids:
            rid = f"{base}-{i}"; i += 1
        seen_ids.add(rid)

        url = 'pdfs/' + quote('Referral forms SES/' + rel)
        records.append({
            'id': rid, 'title': title, 'category': category,
            'trust': trust, 'provider': provider, 'age': age,
            'url': url, 'keywords': keywords,
        })

# order: category order then title
CAT_ORDER = ['2WW Cancer','Cardiology','Respiratory','Gastro','Gynaecology','Fertility & Andrology',
             'Diabetes & Endocrine','Neurology','MSK / Orthopaedics','Mental Health','Paediatrics',
             'Audiology','Imaging','Genetics','Palliative','Community Services','COVID','Admin','Guidance']
records.sort(key=lambda r: (CAT_ORDER.index(r['category']) if r['category'] in CAT_ORDER else 99, r['title']))

def ts_str(s):
    if s is None: return 'undefined'
    return "'" + s.replace('\\','\\\\').replace("'","\\'") + "'"

lines = []
lines.append('// AUTO-GENERATED by scripts/gen_referrals.py — do not edit by hand.')
lines.append('// Local South East Staffordshire (SES) referral forms & pathways.')
lines.append('')
lines.append('export interface ReferralForm {')
lines.append('  id: string')
lines.append('  title: string')
lines.append('  category: string')
lines.append('  trust?: string')
lines.append('  provider?: string')
lines.append("  age?: 'Adult' | 'Child'")
lines.append('  url: string')
lines.append('  keywords: string')
lines.append('}')
lines.append('')
lines.append('export const REFERRAL_FORMS: ReferralForm[] = [')
for r in records:
    parts = [f"id: {ts_str(r['id'])}", f"title: {ts_str(r['title'])}", f"category: {ts_str(r['category'])}"]
    if r['trust']:    parts.append(f"trust: {ts_str(r['trust'])}")
    if r['provider']: parts.append(f"provider: {ts_str(r['provider'])}")
    if r['age']:      parts.append(f"age: {ts_str(r['age'])}")
    parts.append(f"url: {ts_str(r['url'])}")
    parts.append(f"keywords: {ts_str(r['keywords'])}")
    lines.append('  { ' + ', '.join(parts) + ' },')
lines.append(']')
lines.append('')
# facet order constants
cats = [c for c in CAT_ORDER if any(r['category']==c for r in records)]
trusts = sorted({r['trust'] for r in records if r['trust']})
provs  = sorted({r['provider'] for r in records if r['provider']})
lines.append('export const REFERRAL_CATEGORIES: string[] = ' + json.dumps(cats) + '')
lines.append('export const REFERRAL_TRUSTS: string[] = ' + json.dumps(trusts) + '')
lines.append('export const REFERRAL_PROVIDERS: string[] = ' + json.dumps(provs) + '')
lines.append('export const TRUST_FULL: Record<string,string> = ' + json.dumps(TRUST_FULL) + '')

with open(OUT_TS, 'w') as f:
    f.write('\n'.join(lines) + '\n')

print(f"Wrote {len(records)} referral forms to {OUT_TS}")
print("Categories:", {c: sum(1 for r in records if r['category']==c) for c in cats})
print("Trusts:", trusts)
print("Providers:", provs)
print("With age:", sum(1 for r in records if r['age']))
print("\nSample titles:")
for r in records[:14]:
    print(f"  [{r['category']:20}] {r['title']:45} trust={r['trust']} prov={r['provider']} age={r['age']}")
