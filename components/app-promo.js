import { appPromotion } from '../data/content.js';

export function AppSection() {
  return `
    <section id="app" class="section-shell section-gap-lg">
      <div class="promo-shell overflow-hidden rounded-[2.2rem] p-6 shadow-panel sm:p-8 lg:p-10">
        <div class="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div class="space-y-5">
            <p class="section-kicker">التطبيق</p>
            <h2 class="section-title max-w-xl">${appPromotion.title}</h2>
            <p class="section-copy max-w-2xl">${appPromotion.description}</p>
            <a
              href="#"
              class="cta-primary inline-flex min-h-14 items-center justify-center rounded-2xl px-6 text-base font-extrabold text-white"
            >
              ${appPromotion.cta}
            </a>
          </div>
          <div class="stats-panel rounded-[1.9rem] p-5 sm:p-6">
            <div class="space-y-5">
              <div>
                <p class="text-sm font-medium tracking-[0.12em] text-slate-400">لوحة مختصرة</p>
                <h3 class="mt-2 text-2xl font-black leading-tight text-white">كل العمليات الأساسية ضمن واجهة هادئة وواضحة</h3>
              </div>
              <div class="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                ${appPromotion.stats
                  .map(
                    ({ value, label }) => `
                      <div class="stat-tile rounded-2xl px-4 py-5">
                        <p class="text-3xl font-black text-white">${value}</p>
                        <p class="mt-2 text-sm leading-7 text-slate-300">${label}</p>
                      </div>
                    `
                  )
                  .join('')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
