# Social Media Calendar — Saudi Accent Content Writer

Version: 2.1
Status: Production Ready
Type: Calendar Framework + Templates

---

## Purpose
تمكين الفريق من تخطيط روزنامة محتوى كاملة لأي براند: فكرة + كابشن + نص على التصميم + هدف + فكرة تصميم + قياس.

---

## Schema (Fields)
- date (YYYY-MM-DD)
- platform (instagram | snapchat | x | linkedin | tiktok | youtube | …)
- audience (core | prospect | community | enterprise | gov)
- objective (awareness | engagement | traffic | leads | sales | retention)
- theme (seasonal | product | testimonial | educational | behind_the_scenes | offer)
- idea (one-liner)
- caption (saudi tone)
- on_design_text (قصير وواضح)
- design_idea (visual concept)
- format (post | story | reel | thread | article | live | carousel)
- cta
- hashtags (array)
- kpi (primary metric)
- owner
- status (planned | in_progress | scheduled | published)
- notes

---

## YAML Template
```yaml
calendar:
  brand: "<brand-name>"
  month: "2026-01"
  owner: "<team/agency>"
  entries:
    - date: 2026-01-15
      platform: instagram
      audience: core
      objective: awareness
      theme: product
      idea: "التحكم من الجوال"
      caption: |
        تخيل ترتّب كل شغلك من جوالك؟ 😍
        مو بس ترتّب… تختصر وقتك نصين وتريح بالك.
        جرّب التطبيق اليوم من الرابط في البايو 👆
      on_design_text: "رتّب كل شغلك من جوالك"
      design_idea: "قبل/بعد + لقطات شاشة"
      format: reel
      cta: "التحميل من الرابط"
      hashtags: ["السعودية","الرياض","إنتاجية"]
      kpi: views
      owner: social-team
      status: planned
      notes: "تناسق الألوان مع الهوية"
```

---

## CSV Columns (for Sheets)
```
date,platform,audience,objective,theme,idea,caption,on_design_text,design_idea,format,cta,hashtags,kpi,owner,status,notes
```

---

## Example Week (Mixed Platforms)
```yaml
entries:
  - date: 2026-01-16
    platform: x
    audience: prospect
    objective: traffic
    theme: educational
    idea: "3 طرق تختصر وقتك"
    caption: "3 حيل نستخدمها يومياً تختصر وقتك 45%… الخيط 👇"
    on_design_text: "—"
    design_idea: "—"
    format: thread
    cta: "اقرأ التفاصيل"
    hashtags: ["نصائح","شغل"]
    kpi: link_clicks
    owner: content
    status: planned

  - date: 2026-01-17
    platform: snapchat
    audience: core
    objective: engagement
    theme: behind_the_scenes
    idea: "يوم في التطوير"
    caption: "يوم طويل… بس النتائج بتستاهل 😅"
    on_design_text: "جاري التحديث"
    design_idea: "لقطات موبايل سريعة"
    format: story
    cta: "اسحب لفوق"
    hashtags: []
    kpi: story_completions
    owner: design
    status: planned

  - date: 2026-01-18
    platform: linkedin
    audience: enterprise
    objective: leads
    theme: testimonial
    idea: "نتائج عميل سعودي"
    caption: |
      شركة سعودية في قطاع الخدمات اختصرت زمن التقارير 63% بعد 6 أسابيع.\n
      3 تغييرات صنعت الفرق… (تفاصيل في المقال)
    on_design_text: "Case Study"
    design_idea: "غلاف احترافي"
    format: article
    cta: "احجز جلسة"
    hashtags: ["B2B","Saudi"]
    kpi: mql
    owner: growth
    status: planned
```

---

## Operating Steps (Express)
1) اختر theme لكل يومين على الأقل.
2) اكتب idea (one-liner) باللهجة السعودية.
3) صُغ caption وفق Hook→Value→CTA.
4) حدّد on_design_text مختصر وواضح.
5) اختر design_idea يناسب المنصة.
6) اختر KPI واحد فقط.
7) مرر على Quality Gates (لغة/لهجة/امتثال/منصة).

---

## Quality Gates
- Dialect Check: طبيعي/سعودي/مفهوم.
- Compliance: لا ادعاءات مطلقة، صحة الأسعار، مواسم.
- Platform Fit: طول الكابشن، كثافة الإيموجي، هاشتاقات.
- Visual Fit: نص التصميم مختصر ومقروء.

---

## Attribution
© OpenOps Studio  
Strategic and Execution Framework  
Created by Mamdouh Aboammar  
LinkedIn: https://www.linkedin.com/in/mamdouh-aboammar

---

Document: Social Media Calendar v2.1 — Jan 2026
