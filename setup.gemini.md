# إعداد وكيل "Saudi Accent Content Writer" كـ Gemini Gem

إصدار: 2.1  
الحالة: جاهز للاستخدام  
آخر تحديث: January 2026

---

## المقدّمة
هذا الدليل يشرح – باللهجة السعودية وبخطوات مبسطة – كيف تركّب بروفايل "Saudi Accent Content Writer" كـ Gem داخل Gemini وتربطه بمحتويات المستودع.

ملاحظة: يفضّل استخدام Gemini Pro أو Plus عشان تستفيد من قدرات متقدمة مثل المعارف (Knowledge) والأدوات.

روابط رسمية مفيدة:
- إنشاء Gem: https://gemini.google.com/gems/create  
- سياسة الاستخدام المسؤول لـ Google Generative AI: https://policies.google.com/terms/generative-ai/use-policy  
- Gemini for Workspace (سياسات وخصوصية): https://support.google.com/a/answer/15706919

---

## المتطلبات
- حساب Google مفعّل على Gemini (ويفضّل Pro/Plus).
- مستودع GitHub يحتوي ملفات الوكيل (هذا البروفايل).

---

## الخطوات الأساسية

1) افتح صفحة إنشاء جم
- افتح الرابط: https://gemini.google.com/gems/create
- بتشوف شاشة فيها: Name، Description، Instructions، Default tool، Knowledge

2) الاسم والوصف
- Name: اختر اسم يعجبك (مثلاً: "Saudi Accent Content Writer").
- Description: وصف قصير لدور الجم (مثال: "وكيل كتابة باللهجة السعودية لصياغة كابشنات ومنشورات لينكدإن وصناعة روزنامة محتوى").

3) تعليمات الجم (Instructions)
- المطلوب هنا: أهداف الوكيل وقدراته ونمط الرد.
- افتح الملف `Instruction.json` الموجود في هذا البروفايل.
- انسخ كل المحتوى والصقه كما هو في مربع "Instructions".

4) إضافة المعرفة (Knowledge) من المستودع
- في خانة Knowledge اضغط علامة "+".
- اختر "Import code".
- ألصق رابط مستودع GitHub اللي فيه ملفات الوكيل (الرابط على شكل: `https://github.com/user/repo`).
- اضغط Import واتبع الخطوات لربط المستودع بالجم.
- ملاحظة: لو شاركت الجم، عناوين الملفات بتكون ظاهرة للمشاركين حسب إعدادات المشاركة.

5) حفظ وتجربة
- اضغط Save.
- جرّب أوامر سريعة:
  - "اكتب لي كابشن إنستغرام باللهجة السعودية عن إطلاق ميزة جديدة".
  - "سوِّ لي روزنامة أسبوعية: فكرة + كابشن + نص على التصميم + KPI لكل يوم".
  - "بوست لينكدإن بنبرة مهنية سعودية عن نتائج عميل B2B".

---

## ملاحظات الجودة والامتثال
- رجاءً التزم بنبرة سعودية طبيعية ومهنية حسب المنصة (انظر `platform-copy-techniques.md`).
- افحص المحتوى عبر الحواجز (Dialect / Compliance / Platform Fit) كما في `workflows.json` و`processing-logic.yml`.
- أي ادّعاءات طبية/سعرية/مقارنات لازم تكون دقيقة ومراجَعة (راجع قسم الامتثال في `instructions.md`).
- التزم بسياسة Google للاستخدام المسؤول: https://policies.google.com/terms/generative-ai/use-policy

---

## وين ألقَى القوالب والمراجع؟
- كتابة الكابشن للمنصات: `platform-copy-techniques.md`
- صناعة روزنامة محتوى كاملة: `social-media-calendar.md`
- أمثلة جاهزة: `examples.md`
- مراجع حسابات سعودية: `creative.md`
- قدرات متقدمة: `advanced-capabailiutes.md`

---

## مشاكل شائعة وحلول
- ما يظهر خيار Import code؟ سجّل دخولك بحساب يدعم Gemini، وجرّب من متصفح كروم محدّث.
- المستودع خاص Private؟ تأكد صلاحيات الوصول أو ارفعه Public/أعطِ صلاحيات القراءة للحساب.
- تباين النبرة أو أخطاء لهجة؟ راجع دليل اللهجة `how-to-write-saudi.md` ثم أعد توليد المسودة.

---

## Attribution
© OpenOps Studio — All rights reserved  
Strategic and Execution Framework  
Created by Mamdouh Aboammar  
LinkedIn: https://www.linkedin.com/in/mamdouh-aboammar


💡 **تحتاج Gem/GPT/Agent متخصص لك أو لفريقك؟**

📧 Email: me@mamdouhaboammar.com  
🔗 LinkedIn: https://www.linkedin.com/in/mamdouh-aboammar  
💬 WhatsApp: https://wa.me/+201092677269
