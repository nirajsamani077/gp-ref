#!/usr/bin/env python3
"""Generate src/data/sharedCare.ts from the UHDB shared-care result protocols.
These fold into the Forms tab 'Pathways & guidance' view, badged UHDB, grouped
by clinical system (mapped to existing pathway category keys)."""
import os, re, json, collections
from urllib.parse import quote

ROOT = "public/pdfs/UHDB shared care guidelines"
OUT_TS = "src/data/sharedCare.ts"
try:
    import fitz
except ImportError:
    fitz = None

TYPO = {'thromocytosis': 'thrombocytosis', 'hypophospataemia': 'hypophosphataemia',
        'hypomagnesiaemia': 'hypomagnesaemia', 'caree': 'care', 'uhd ': 'uhdb '}
# Force-uppercase acronyms in the title
UPPER = {'lft','lfts','aki','ckd','ana','ige','rast','psa','dvt','mgus','vzv','pcos','b12',
         'gtt','tft','tfts','ue','fbc'}
CONNECTORS = {'and','to','or','on','in','for','with','of','the','a','an','prior'}

# Clinical-system mapping → existing pathway category key (order: first match wins)
CATEGORY_RULES = [
    (r'lft|liver|coeliac|dyspepsia|gord|bowel habit|gallbladder|pancreatic', 'Gastro'),
    (r'b12|folate|ferritin|lymphocyt|mgus|myeloma|neutropenia|polycythaemia|thrombocyt|lymphoma', 'Haem'),
    (r'diabetes|glucose tolerance', 'Diabetes'),
    (r'thyroid|calcium|calcaemia|parathyroid|prolactin|testosterone|hypogonadism|pcos|dexamethasone|synacthen|aldosteron|vitamin d|menopause|cortisol', 'Endocrine'),
    (r'aki|ckd|natraemia|kalaemia|magnes|phosph|haematuria|renal', 'Renal'),
    (r'lipid|cardiac marker|heart failure|dvt|secondary hypertension', 'Cardiology'),
    (r'malaria|vzv|hepatitis serology', 'Infection'),
    (r'ige|rast|egg allergy|paediatric allergy', 'Allergy'),
    (r'ana testing', 'Rheumatology'),
    (r'gout', 'Rheumatology'),
    (r'onychomycosis|fungal nail', 'Derm'),
    (r'psa', 'Urology'),
]

# Acronym → search expansion folded into keywords
EXPAND = {
    'lft': 'liver function test abnormal', 'aki': 'acute kidney injury creatinine egfr',
    'ckd': 'chronic kidney disease egfr', 'ana': 'antinuclear antibody autoimmune connective tissue',
    'ige': 'immunoglobulin e allergy specific', 'rast': 'specific ige allergy testing',
    'psa': 'prostate specific antigen', 'dvt': 'deep vein thrombosis wells d-dimer',
    'mgus': 'monoclonal gammopathy paraprotein myeloma', 'vzv': 'varicella zoster chickenpox shingles immunity',
    'pcos': 'polycystic ovary syndrome', 'b12': 'vitamin b12 folate anaemia macrocytic',
    'gtt': 'glucose tolerance test diabetes', 'tft': 'thyroid function test',
    'ferritin': 'iron overload haemochromatosis', 'lipids': 'cholesterol ldl hdl triglycerides statin',
    'hyperkalaemia': 'high potassium', 'hypokalaemia': 'low potassium',
    'hyponatraemia': 'low sodium', 'hypernatraemia': 'high sodium',
    'hypercalcaemia': 'high calcium', 'hypocalcaemia': 'low calcium',
    'hypomagnesaemia': 'low magnesium', 'hypophosphataemia': 'low phosphate',
    'prolactin': 'hyperprolactinaemia galactorrhoea', 'synacthen': 'short synacthen adrenal cortisol addisons',
    'dexamethasone': 'overnight dexamethasone suppression cushings cortisol',
    'aldosteron': 'conns hyperaldosteronism renin', 'onychomycosis': 'fungal nail dermatophyte',
    'neutropenia': 'low neutrophils white cell', 'polycythaemia': 'raised haemoglobin haematocrit',
    'thrombocytopaenia': 'low platelets', 'thrombocytosis': 'high platelets',
    'lymphocytosis': 'raised lymphocytes', 'coeliac': 'ttg gluten',
    'haematuria': 'blood in urine', 'menopause': 'hrt oestrogen',
}
STOP = set("the a an and or of to in for with on at by is are be this that from as it its into your you we our will can may not have has had if then than".split())
GENERIC = {'referral','patient','form','name','date','please','address','details','service','nhs','gp',
           'practice','number','information','tel','email','clinical','trust','hospital','team','contact',
           'yes','no','dob','postcode','telephone','reason','history','shared','care','uhdb','primary','adults'}

def strip_suffix(stem):
    s = stem.lower()
    for bad, good in TYPO.items():
        s = s.replace(bad, good)
    s = re.sub(r'\s+uhdb?\s+shared\s+care\s*$', '', s).strip()
    return s

def clean_title(stem):
    s = strip_suffix(stem)
    out = []
    for i, w in enumerate(re.split(r'[\s\-]+', s)):
        wl = re.sub(r'[^a-z0-9]', '', w)
        if not wl: continue
        if wl == 'ige': out.append('IgE')
        elif wl in UPPER: out.append(wl.upper())
        elif wl in CONNECTORS and out: out.append(wl)
        else: out.append(w[0].upper() + w[1:])
    t = ' '.join(out)
    # parenthesise common qualifiers
    t = re.sub(r'\bAdults\b', '(Adults)', t)
    t = re.sub(r'\bPaeds\b', '(Paeds)', t)
    t = re.sub(r'\b[Ii]n Primary Care\b', '', t)
    t = re.sub(r'\bPrimary Care\b', '', t)
    t = re.sub(r'\s+', ' ', t).strip()
    t = re.sub(r'\s+(in|for|of|and|to|prior)$', '', t, flags=re.I).strip()
    return t or stem

def category_for(name):
    for pat, cat in CATEGORY_RULES:
        if re.search(pat, name):
            return cat
    return 'Meds'

def body_keywords(path):
    if not fitz: return ''
    try:
        d = fitz.open(path); txt = ' '.join(p.get_text() for p in d); d.close()
    except Exception:
        return ''
    words = re.findall(r"[A-Za-z][A-Za-z\-']{3,}", txt)
    freq = collections.Counter(); caps = set()
    for w in words:
        wl = w.lower()
        if wl in STOP: continue
        if w.isupper() and 2 <= len(w) <= 6: caps.add(wl)
        freq[wl] += 1
    top = [w for w, _ in freq.most_common(60) if w not in GENERIC][:20]
    return ' '.join(sorted(set(list(caps) + top)))

def slugify(s):
    return re.sub(r'[^a-z0-9]+', '-', s.lower()).strip('-')[:70]

records = []; seen = set(); skipped = []
for fn in sorted(os.listdir(ROOT)):
    full = os.path.join(ROOT, fn)
    if not fn.lower().endswith('.pdf'):
        skipped.append(fn); continue
    stem = fn[:-4]
    name = strip_suffix(stem)
    title = clean_title(stem)
    category = category_for(name)
    kw = set(re.sub(r'[^a-z0-9 ]', ' ', name).split())
    for ac, exp in EXPAND.items():
        if ac in name: kw.update(exp.split())
    kw.update(body_keywords(full).split())
    kw.update(['uhdb', 'shared', 'care'])
    [kw.discard(s) for s in list(STOP)]
    keywords = ' '.join(sorted(x for x in kw if x))
    rid = 'uhdb-' + slugify(name)
    while rid in seen: rid += '-x'
    seen.add(rid)
    url = 'pdfs/' + quote('UHDB shared care guidelines/' + fn)
    records.append({'id': rid, 'title': title, 'category': category, 'url': url, 'keywords': keywords, 'source': 'uhdb'})

records.sort(key=lambda r: (r['category'], r['title']))

def ts(s): return "'" + s.replace('\\', '\\\\').replace("'", "\\'") + "'"
lines = ['// AUTO-GENERATED by scripts/gen_sharedcare.py — do not edit by hand.',
         '// UHDB shared-care result/abnormality protocols (fold into Pathways view, badged UHDB).',
         '', "import type { GPForm } from './forms'", '',
         'export const SHARED_CARE: GPForm[] = [']
for r in records:
    lines.append("  { id: %s, title: %s, category: %s, source: 'uhdb', url: %s, keywords: %s }," % (
        ts(r['id']), ts(r['title']), ts(r['category']), ts(r['url']), ts(r['keywords'])))
lines.append(']')
open(OUT_TS, 'w').write('\n'.join(lines) + '\n')

print(f"Wrote {len(records)} shared-care protocols to {OUT_TS}")
print("By category:", dict(collections.Counter(r['category'] for r in records)))
print("Skipped non-PDF:", skipped)
print("\nSample:")
for r in records[:12]:
    print(f"  [{r['category']:12}] {r['title']}")
