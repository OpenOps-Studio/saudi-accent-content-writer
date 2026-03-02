# Dialect Engine v3 — Saudi Professional Dialect Enforcement

**Version**: 3.0  
**Status**: Production Ready  
**Purpose**: Force consistent, professional Saudi dialect output across platforms.

---

## 1) Core Enforcement Loop (Mandatory)

1. **Dialect Internal Search** → fetch 3–7 snippets from local knowledge.
2. **Pattern Selection** → choose a Saudi pattern per platform.
3. **Draft Output** → write with constraints (lexicon + tone).
4. **Dialect Enforcer Gate** → score ≥ 0.92 or regenerate.

---

## 2) Pattern Library (Professional Saudi)

### A) LinkedIn — Professional Saudi-tinged
**Pattern L1**: Observation → Insight → Value → CTA  
مثال:  
"لاحظنا أن فرق التشغيل في السعودية تواجه تحديات متكررة.  
لهذا ركّزنا على حل عملي يختصر الوقت ويزيد الوضوح.  
النتيجة: قرارات أسرع وتجربة أفضل للفريق.  
حاب تعرف التفاصيل؟ شاركنا سؤالك بالردود."

**Pattern L2**: سؤال مهني → توضيح → دليل مختصر → CTA  
"كم مرة ضاعت ساعات على مراجعات طويلة؟  
الحل مو بتعقيد أكثر، الحل بنظام أبسط.  
جرّبوا النموذج التجريبي وشوفوا الفرق."

### B) Instagram — Warm Saudi Conversational
**Pattern I1**: Hook → Benefit → Proof → CTA  
"تعبان من نفس الروتين؟ 😅  
خلّينا نسهّلها عليك بميزة جديدة.  
ناس كثير جرّبوها وقالوا: فرق كبير 👌  
جرّبها اليوم من الرابط بالبايو."

**Pattern I2**: Address → Micro-story → CTA  
"يا جماعة، القصة بدأت من ملاحظة بسيطة…  
واليوم صارت حل فعلي يساعد يومكم.  
قولوا لنا رأيكم 👇"

### C) X/Twitter — Crisp + Respectful
**Pattern X1**: إعلان قصير → منفعة → CTA  
"أطلقنا تحديث يخفّف عن فرقكم خطوة مهمة.  
الميزة تقلّل الوقت وتزيد وضوح التقارير.  
التفاصيل في أول رد 👇"

---

## 3) Lexicon Guardrails (Professional Saudi)

**Platform Lexicon Source**: `saudi-lexicon-by-platform.md`
**Sector Lexicon Source**: `saudi-lexicon-by-sector.md`
**Sector × City Lexicon Source**: `saudi-lexicon-sector-city.md`

**Allowed (Professional + Natural):**  
"الحين", "واجِد", "صراحة", "يسهّل", "يركّز", "يوفّر", "يعطيك", "تقدر"

**Avoid:**  
- مبالغة مطلقة ("الأفضل على الإطلاق")
- لهجة غير سعودية واضحة
- تلميحات سياسية/قبلية

**City Dialect Rules**: `support_config/tone_rules/city_dialect_rules.yml`
**Seasonal City Exceptions**: `support_config/tone_rules/seasonal_city_exceptions.yml`

---

## 4) Dialect Linter Rules (Strict)

**Hard Fail Rules (Reject)**:
- رصد مفردات غير سعودية واضحة (مصري/شامي/مغاربي)
- ادعاءات مطلقة بدون إثبات
- نبرة هجومية أو تهكّم على قيم/دين/مجتمع

**Soft Fail Rules (Regenerate)**:
- كثافة عامية عالية في LinkedIn/Corporate
- ضعف اتساق المنصة (مثال: أسلوب إنستغرام على لينكدإن)
- تكرار كلمات عامية أكثر من مرتين في 3 أسطر

---

## 5) Dialect Enforcer Scoring

**Score = 0.35 Lexicon + 0.30 Tone + 0.20 Syntax + 0.15 Platform Fit**

- **Lexicon**: وجود مفردات سعودية طبيعية بدون إفراط.
- **Tone**: مهني/ودود حسب المنصة.
- **Syntax**: تراكيب محكية سعودية بدون أخطاء.
- **Platform Fit**: طول + أسلوب + CTA.

**Thresholds**:
- LinkedIn ≥ 0.92
- Instagram ≥ 0.90
- X/Twitter ≥ 0.91

**If fail** → regenerate with stricter lexicon constraints.

---

## 6) Internal Search Protocol

- **Query**: platform + intent + goal
- **Retrieve**:
  - `how-to-write-saudi.md` (dialect rules)
  - `platform-copy-techniques.md` (hooks + patterns)
  - `examples.md` (validated examples)
  - `creative.md` (tone calibration)
  - `saudi-lexicon-by-platform.md` (platform lexicon)
  - `saudi-lexicon-by-sector.md` (sector lexicon)
- `saudi-lexicon-sector-city.md` (sector × city lexicon)
- `support_config/tone_rules/city_dialect_rules.yml` (city tone rules)
- `support_config/tone_rules/seasonal_city_exceptions.yml` (seasonal exceptions)
- **Use** top 3 snippets only; cite source names internally.

---

## Attribution

© OpenOps Studio — All rights reserved  
Created by Mamdouh Aboammar  
LinkedIn: https://www.linkedin.com/in/mamdouh-aboammar
