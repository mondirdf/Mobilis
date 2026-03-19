import { quickActions } from '../data/content.js';

export function Actions() {
  const items = quickActions
    .map(
      ({ label, icon, href, description }, index) => `
        <a
          href="${href}"
          class="quick-action-card group flex min-h-[230px] flex-col justify-between rounded-[1.9rem] p-6 sm:p-7"
        >
          <div class="flex items-start justify-between gap-4">
            <div class="quick-action-icon flex h-16 w-16 items-center justify-center rounded-[1.25rem] text-3xl text-green-400">
              ${icon}
            </div>
            <span class="text-xs font-bold tracking-[0.24em] text-slate-500">0${index + 1}</span>
          </div>
          <div class="space-y-3">
            <h3 class="text-[1.7rem] font-black leading-tight text-white">${label}</h3>
            <p class="text-sm leading-8 text-slate-300">${description}</p>
          </div>
          <span class="inline-flex items-center gap-2 text-sm font-bold text-white">
            متابعة
            <span class="transition group-hover:-translate-x-1">←</span>
          </span>
        </a>
      `
    )
    .join('');

  return `
    <section id="actions" class="section-shell section-gap-lg">
      <div class="section-intro section-intro-split">
        <div>
          <p class="section-kicker">المدخل السريع</p>
          <h2 class="section-title">ثلاثة إجراءات تسبق كل شيء</h2>
        </div>
        <p class="section-copy">هذه البطاقات هي نقطة الدخول الأساسية: كبيرة، واضحة، ومصممة لتقود المستخدم مباشرة نحو المهمة الأكثر شيوعًا.</p>
      </div>
      <div class="grid gap-5 md:grid-cols-3 lg:gap-6">
        ${items}
      </div>
    </section>
  `;
}
