import { appPromotion } from '../data/content.js';

export function AppSection() {
  return `
    <section id="app" class="section-shell py-8 sm:py-10">
      <div class="glass-card overflow-hidden rounded-[2rem] border border-white/10 p-6 shadow-glow sm:p-8">
        <div class="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
          <div class="space-y-4">
            <p class="text-sm font-medium text-green-400">التطبيق</p>
            <h2 class="text-2xl font-bold text-white sm:text-3xl">${appPromotion.title}</h2>
            <p class="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              ${appPromotion.description}
            </p>
            <a
              href="#"
              class="inline-flex min-h-14 items-center justify-center rounded-2xl bg-brand-green px-6 text-base font-bold text-white transition hover:bg-green-500"
            >
              ${appPromotion.cta}
            </a>
          </div>
          <div class="play-badge rounded-[1.75rem] border border-white/10 p-5">
            <div class="flex min-h-52 flex-col justify-between rounded-[1.5rem] border border-dashed border-white/10 bg-slate-950/30 p-5">
              <div class="space-y-3">
                <span class="inline-flex rounded-full bg-white/10 px-3 py-2 text-xs font-medium text-slate-200">Google Play</span>
                <h3 class="text-xl font-bold text-white">${appPromotion.badgeLabel}</h3>
              </div>
              <div class="flex items-center gap-4 rounded-2xl bg-white px-4 py-3 text-slate-950">
                <span class="text-3xl">▶</span>
                <div>
                  <p class="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">Get it on</p>
                  <p class="text-lg font-bold">Google Play</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
