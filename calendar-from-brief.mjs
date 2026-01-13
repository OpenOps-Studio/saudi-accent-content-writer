#!/usr/bin/env node
/**
 * Minimal calendar helper: generate a monthly YAML calendar from a short brief.
 *
 * Usage:
 *   node calendar-from-brief.mjs brief.json > calendar.yaml
 *
 * brief.json example:
 * {
 *   "brand": "Brand X",
 *   "month": "2026-01",
 *   "strategic_themes": ["product","educational","testimonial"],
 *   "priority_platforms": ["instagram","x","linkedin","snapchat"],
 *   "audience": "core",
 *   "objective": "awareness"
 * }
 */

import fs from 'node:fs'

const pad = (n) => String(n).padStart(2, '0')

function daysInMonth(ym) {
  const [y, m] = ym.split('-').map(Number)
  return new Date(y, m, 0).getDate()
}

function pick(arr, i) {
  return arr[i % arr.length]
}

function main() {
  const file = process.argv[2]
  if (!file) {
    console.error('Usage: node calendar-from-brief.mjs brief.json > calendar.yaml')
    process.exit(1)
  }
  const brief = JSON.parse(fs.readFileSync(file, 'utf-8'))
  const brand = brief.brand || 'Brand'
  const month = brief.month || new Date().toISOString().slice(0, 7)
  const themes = brief.strategic_themes?.length ? brief.strategic_themes : ['product','educational','testimonial','behind_the_scenes']
  const plats = brief.priority_platforms?.length ? brief.priority_platforms : ['instagram','x','linkedin','snapchat']
  const audience = brief.audience || 'core'
  const objective = brief.objective || 'awareness'

  const totalDays = daysInMonth(month)

  // Generate ~12 entries spread across the month
  const targetEntries = 12
  const step = Math.max(2, Math.floor(totalDays / targetEntries))
  const entries = []
  let day = 2
  for (let i = 0; i < targetEntries; i++) {
    const date = `${month}-${pad(Math.min(day, totalDays))}`
    const platform = pick(plats, i)
    const theme = pick(themes, i)
    const idea = theme === 'product' ? 'إطلاق/ميزة جديدة' : theme === 'educational' ? '3 نصائح سريعة' : theme === 'testimonial' ? 'نتيجة عميل سعودي' : 'خلف الكواليس'

    const captionBase = {
      instagram: `تخيل تنجز شغلك أسرع؟ 😍\n\n${brand} يسهّلها عليك خطوة بخطوة.\n\nجرّبه اليوم من الرابط في البايو 👆`,
      snapchat: `يوم طويل.. بس النتيجة بتستاهل 😅\nجرب ${brand}`,
      x: `أطلقنا تحديث جديد يهم السعوديين: سهولة أكثر + وقت أقل. التفاصيل في أول رد 👇`,
      linkedin: `شركة سعودية خفّضت زمن التقارير 40% خلال 6 أسابيع باستخدام ${brand}. 3 خطوات صنعت الفرق…`
    }

    entries.push({
      date,
      platform,
      audience,
      objective,
      theme,
      idea,
      caption: captionBase[platform] || captionBase.x,
      on_design_text: theme === 'product' ? 'ميزة جديدة' : theme === 'educational' ? '٣ نصايح' : theme === 'testimonial' ? 'Case Study' : 'خلف الكواليس',
      design_idea: platform === 'instagram' ? 'قبل/بعد + لقطات شاشة' : platform === 'snapchat' ? 'لقطات موبايل سريعة' : platform === 'linkedin' ? 'غلاف احترافي' : 'بطاقة نصية بسيطة',
      format: platform === 'instagram' ? 'reel' : platform === 'snapchat' ? 'story' : platform === 'linkedin' ? 'article' : 'thread',
      cta: platform === 'instagram' ? 'التحميل من الرابط' : platform === 'snapchat' ? 'اسحب لفوق' : platform === 'linkedin' ? 'احجز جلسة' : 'اقرأ التفاصيل',
      hashtags: platform === 'instagram' ? ['السعودية','الرياض','إنتاجية'] : platform === 'x' ? ['Saudi','Ops'] : [],
      kpi: platform === 'instagram' ? 'views' : platform === 'snapchat' ? 'story_completions' : platform === 'linkedin' ? 'mql' : 'link_clicks',
      owner: 'content-team',
      status: 'planned',
      notes: ''
    })

    day += step
  }

  // Output YAML
  const yamlLines = []
  yamlLines.push('calendar:')
  yamlLines.push(`  brand: "${brand}"`)
  yamlLines.push(`  month: "${month}"`)
  yamlLines.push('  owner: "content-team"')
  yamlLines.push('  entries:')
  for (const e of entries) {
    yamlLines.push('    - date: ' + e.date)
    yamlLines.push('      platform: ' + e.platform)
    yamlLines.push('      audience: ' + e.audience)
    yamlLines.push('      objective: ' + e.objective)
    yamlLines.push('      theme: ' + e.theme)
    yamlLines.push('      idea: "' + e.idea + '"')
    yamlLines.push('      caption: |')
    for (const line of String(e.caption).split('\n')) {
      yamlLines.push('        ' + line)
    }
    yamlLines.push('      on_design_text: "' + e.on_design_text + '"')
    yamlLines.push('      design_idea: "' + e.design_idea + '"')
    yamlLines.push('      format: ' + e.format)
    yamlLines.push('      cta: "' + e.cta + '"')
    if (e.hashtags && e.hashtags.length) {
      yamlLines.push('      hashtags: [' + e.hashtags.map(h => '"' + h + '"').join(',') + ']')
    } else {
      yamlLines.push('      hashtags: []')
    }
    yamlLines.push('      kpi: ' + e.kpi)
    yamlLines.push('      owner: ' + e.owner)
    yamlLines.push('      status: ' + e.status)
    yamlLines.push('      notes: "' + e.notes + '"')
  }

  console.log(yamlLines.join('\n'))
}

main()
