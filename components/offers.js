import { offers } from '../data/content.js';

export function Offers() {
  const cards = offers
    .map(
      ({ title, price, currency, period, features, badge, tone, icon }) => `
        <article class="offer-card ${tone === 'featured' ? 'offer-card-featured' : ''} flex flex-col gap-8 rounded-[1.75rem] p-7 sm:p-8">
          <div class="space-y-5">
            <div class="flex items-center justify-between gap-3">
              <span class="offer-badge inline-flex rounded-full px-4 py-2 text-xs font-extrabold ring-1">${badge}</span>
              <span class="offer-top-icon flex h-12 w-12 items-center justify-center rounded-2xl">${icon}</span>
            </div>
            <div class="space-y-4">
              <div>
                <p class="text-sm font-bold tracking-[0.2em] text-slate-400">${period}</p>
                <h3 class="mt-2 text-3xl font-black text-brand-dark">${title}</h3>
              </div>
              <div class="offer-price-row flex items-end gap-3">
                <p class="offer-price text-brand-dark">${price}</p>
                <div class="pb-2 text-right">
                  <p class="text-2xl font-black text-brand-green">${currency}</p>
                  <p class="text-sm text-slate-500">${period}</p>
                </div>
              </div>
            </div>
          </div>
          <ul class="space-y-3 text-sm text-slate-700">
            ${features
              .slice(0, 3)
              .map(
                (feature) => `
                  <li class="offer-feature-item flex items-center gap-3 rounded-2xl px-4 py-4">
                    <span class="offer-check flex h-8 w-8 items-center justify-center rounded-full text-sm">✓</span>
                    <span class="text-base leading-7">${feature}</span>
                  </li>
                `
              )
              .join('')}
          </ul>
          <a
            href="#app"
            class="cta-primary mt-auto inline-flex min-h-14 w-full items-center justify-center rounded-xl px-5 text-base font-extrabold text-white"
          >
            اشترك الآن
          </a>
        </article>
      `
    )
    .join('');

  return `
    <section id="offers" class="section-shell section-block section-soft">
      <div class="section-intro section-intro-split section-intro-wide">
        <div>
          <p class="section-kicker">العروض الأساسية</p>
          <h2 class="section-title">خيارات أوضح تساعد على قرار أسرع</h2>
        </div>
        <p class="section-copy">أصبحت بطاقات العروض أكثر تنظيمًا مع إبراز السعر، تبسيط المزايا، وإضافة مؤشرات بصرية تمنح كل باقة شخصية أوضح بدون تعقيد.</p>
      </div>
      <div class="grid gap-6 lg:grid-cols-3 lg:gap-8">
        ${cards}
      </div>
    </section>
  `;
}
