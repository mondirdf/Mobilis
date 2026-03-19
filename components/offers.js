import { offers } from '../data/content.js';

export function Offers() {
  const cards = offers
    .map(
      ({ title, price, features, badge }) => `
        <article class="glass-card flex flex-col gap-6 rounded-3xl border border-white/10 p-6 shadow-glow">
          <div class="space-y-3">
            <span class="inline-flex rounded-full bg-green-500/15 px-3 py-2 text-sm font-medium text-green-300">${badge}</span>
            <div class="space-y-1">
              <h3 class="text-2xl font-bold text-white">${title}</h3>
              <p class="text-3xl font-extrabold text-green-400">${price}</p>
            </div>
          </div>
          <ul class="space-y-3 text-sm text-slate-300">
            ${features
              .map(
                (feature) => `
                  <li class="flex items-center gap-3">
                    <span class="flex h-6 w-6 items-center justify-center rounded-full bg-green-500/15 text-green-300">✓</span>
                    <span>${feature}</span>
                  </li>
                `
              )
              .join('')}
          </ul>
          <a
            href="#app"
            class="mt-auto inline-flex min-h-14 items-center justify-center rounded-2xl bg-white px-5 text-base font-bold text-slate-950 transition hover:bg-slate-200"
          >
            اشترك الآن
          </a>
        </article>
      `
    )
    .join('');

  return `
    <section id="offers" class="section-shell py-8 sm:py-10">
      <div class="space-y-3 pb-6">
        <p class="text-sm font-medium text-green-400">العروض</p>
        <h2 class="text-2xl font-bold text-white sm:text-3xl">باقات مصممة لتساعدك على الاختيار بسرعة</h2>
        <p class="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
          اختر من بين أفضل الباقات المختصرة والواضحة، مع مزايا أساسية فقط لتتخذ قرارك بسهولة.
        </p>
      </div>
      <div class="grid gap-4 lg:grid-cols-3">
        ${cards}
      </div>
    </section>
  `;
}
