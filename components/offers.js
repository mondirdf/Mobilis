import { offers } from '../data/content.js';

export function Offers() {
  const cards = offers
    .map(
      ({ title, price, currency, period, features, badge, tone }) => `
        <article class="offer-card ${tone === 'featured' ? 'offer-card-featured' : ''} flex flex-col gap-8 rounded-[2rem] p-7 sm:p-8">
          <div class="space-y-5">
            <div class="flex items-center justify-between gap-3">
              <span class="offer-badge inline-flex rounded-full px-3 py-2 text-xs font-bold ring-1">${badge}</span>
              <span class="text-xs font-bold tracking-[0.24em] text-slate-500">${period}</span>
            </div>
            <div class="space-y-4">
              <h3 class="text-2xl font-black text-white">${title}</h3>
              <div class="offer-price-row flex items-end gap-3">
                <p class="offer-price text-white">${price}</p>
                <div class="pb-2 text-right">
                  <p class="text-xl font-black text-green-400">${currency}</p>
                  <p class="text-sm text-slate-400">${period}</p>
                </div>
              </div>
            </div>
          </div>
          <ul class="space-y-3 text-sm text-slate-300">
            ${features
              .slice(0, 3)
              .map(
                (feature) => `
                  <li class="offer-feature-item flex items-center gap-3 rounded-2xl px-4 py-3">
                    <span class="offer-check flex h-7 w-7 items-center justify-center rounded-full text-sm text-green-300">✓</span>
                    <span>${feature}</span>
                  </li>
                `
              )
              .join('')}
          </ul>
          <a
            href="#app"
            class="cta-primary mt-auto inline-flex min-h-14 items-center justify-center rounded-2xl px-5 text-base font-extrabold text-white"
          >
            اشترك الآن
          </a>
        </article>
      `
    )
    .join('');

  return `
    <section id="offers" class="section-shell section-gap-lg">
      <div class="section-intro section-intro-split section-intro-wide">
        <div>
          <p class="section-kicker">العروض الأساسية</p>
          <h2 class="section-title">خيارات أقل، قرار أسرع</h2>
        </div>
        <p class="section-copy">تمت إعادة تنظيم البطاقات ليكون السعر هو نقطة الجذب الأولى، مع تقليل التفاصيل إلى أهم ما يحتاجه المستخدم قبل الاشتراك.</p>
      </div>
      <div class="grid gap-5 lg:grid-cols-3 lg:gap-6">
        ${cards}
      </div>
    </section>
  `;
}
