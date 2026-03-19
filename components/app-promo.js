import { appPromotion } from '../data/content.js';

export function AppSection() {
  return `
    <section id="app-section" class="section-shell section-block">
      <div class="promo-shell overflow-hidden rounded-[2rem] p-6 sm:p-8 lg:p-10">
        <div class="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-12">
          <div class="space-y-5">
            <p class="section-kicker">التطبيق</p>
            <h2 class="section-title max-w-xl">${appPromotion.title}</h2>
            <p class="section-copy max-w-2xl">${appPromotion.description}</p>
            <a
              href="#"
              class="cta-primary inline-flex min-h-14 w-full items-center justify-center rounded-xl px-6 text-base font-extrabold text-white sm:w-auto"
            >
              ${appPromotion.cta}
            </a>
          </div>
          <div class="app-visual-grid grid gap-5 lg:grid-cols-[0.72fr_1fr] lg:items-center">
            <div class="phone-mockup mx-auto w-full max-w-[250px] rounded-[2.2rem] p-3 shadow-2xl">
              <div class="phone-screen overflow-hidden rounded-[1.7rem]">
                <img
                  src="https://images.unsplash.com/photo-1520923642038-b4259acecbd7?auto=format&fit=crop&w=900&q=80"
                  alt="واجهة تطبيق موبيليس على هاتف ذكي"
                  class="h-[470px] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div class="stats-panel rounded-[1.75rem] p-5 sm:p-6 lg:p-8">
              <div class="space-y-5">
                <div>
                  <p class="text-sm font-semibold tracking-[0.12em] text-slate-500">لوحة مختصرة</p>
                  <h3 class="mt-2 text-2xl font-black leading-tight text-brand-dark">كل العمليات الأساسية ضمن واجهة مريحة وسهلة القراءة</h3>
                </div>
                <div class="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                  ${appPromotion.stats
                    .map(
                      ({ value, label, icon }) => `
                        <div class="stat-tile rounded-2xl px-4 py-5">
                          <div class="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-brand-green">${icon}</div>
                          <p class="text-3xl font-black text-brand-dark">${value}</p>
                          <p class="mt-2 text-sm leading-7 text-slate-600">${label}</p>
                        </div>
                      `
                    )
                    .join('')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
