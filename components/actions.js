import { quickActions } from '../data/content.js';

export function Actions() {
  const items = quickActions
    .map(
      ({ label, icon, href, description }, index) => `
        <a
          href="${href}"
          class="quick-action-card group flex min-h-[260px] flex-col justify-between rounded-[1.5rem] p-6 sm:p-8"
        >
          <div class="flex items-start justify-between gap-4">
            <div class="quick-action-icon flex h-16 w-16 items-center justify-center rounded-2xl text-brand-green">
              ${icon}
            </div>
            <span class="text-xs font-extrabold tracking-[0.24em] text-slate-400">0${index + 1}</span>
          </div>
          <div class="space-y-3">
            <h3 class="text-2xl font-black leading-tight text-brand-dark sm:text-[1.75rem]">${label}</h3>
            <p class="text-base leading-8 text-slate-600">${description}</p>
          </div>
          <span class="inline-flex items-center gap-2 text-sm font-extrabold text-brand-green">
            متابعة
            <span class="transition group-hover:-translate-x-1">←</span>
          </span>
        </a>
      `
    )
    .join('');

  return `
    <section id="actions" class="section-shell section-block section-soft">
      <div class="section-intro section-intro-split">
        <div>
          <p class="section-kicker">المدخل السريع</p>
          <h2 class="section-title">ثلاثة إجراءات تبدأ بها الرحلة</h2>
        </div>
        <p class="section-copy">هذه البطاقات أصبحت أخف بصريًا وأكثر مهنية، مع أيقونات أوضح ومساحات تسمح للمستخدم بفهم كل إجراء بسرعة على الهاتف أو سطح المكتب.</p>
      </div>
      <div class="grid gap-6 md:grid-cols-3 lg:gap-8">
        ${items}
      </div>
    </section>
  `;
}
