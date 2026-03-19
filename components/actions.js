import { quickActions } from '../data/content.js';

export function Actions() {
  const items = quickActions
    .map(
      ({ label, icon, href, description }) => `
        <a
          href="${href}"
          class="glass-card flex min-h-40 flex-col justify-between rounded-3xl border border-white/10 p-5 shadow-glow transition hover:-translate-y-1 hover:border-green-400/40"
        >
          <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/15 text-3xl">${icon}</div>
          <div class="space-y-2">
            <h3 class="text-xl font-bold text-white">${label}</h3>
            <p class="text-sm leading-7 text-slate-300">${description}</p>
          </div>
        </a>
      `
    )
    .join('');

  return `
    <section class="section-shell py-8 sm:py-10">
      <div class="flex items-end justify-between gap-4 pb-5">
        <div class="space-y-2">
          <p class="text-sm font-medium text-green-400">إجراءات سريعة</p>
          <h2 class="text-2xl font-bold text-white sm:text-3xl">أنجز ما تحتاجه فورًا</h2>
        </div>
      </div>
      <div class="grid gap-4 md:grid-cols-3">
        ${items}
      </div>
    </section>
  `;
}
