import { services } from '../data/content.js';

export function Services() {
  const items = services
    .map(
      ({ title, icon, description }) => `
        <article class="info-card flex min-h-[220px] flex-col justify-between rounded-[1.5rem] p-6 sm:p-8">
          <div class="service-icon-wrap flex h-16 w-16 items-center justify-center rounded-2xl text-brand-green">${icon}</div>
          <div class="space-y-3">
            <h3 class="text-2xl font-black leading-tight text-brand-dark">${title}</h3>
            <p class="text-base leading-8 text-slate-600">${description}</p>
          </div>
        </article>
      `
    )
    .join('');

  return `
    <section id="services" class="section-shell section-block">
      <div class="service-showcase overflow-hidden rounded-[2rem] p-6 sm:p-8 lg:p-10">
        <div class="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-12">
          <div class="relative order-2 lg:order-1">
            <div class="visual-frame service-visual aspect-[4/5] overflow-hidden rounded-[2rem]">
              <img
                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80"
                alt="شخص يستخدم الهاتف لتصفح خدمات موبيليس"
                class="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div class="floating-insight absolute -left-3 bottom-6 rounded-2xl px-4 py-4 shadow-xl sm:left-6">
              <p class="text-xs font-extrabold tracking-[0.18em] text-brand-green">How it works</p>
              <p class="mt-2 text-lg font-black text-brand-dark">رحلة مختصرة من اختيار العرض إلى التفعيل خلال دقائق</p>
            </div>
          </div>
          <div class="order-1 space-y-6 lg:order-2">
            <div class="section-intro section-intro-wide mb-0">
              <div>
                <p class="section-kicker">كيف تعمل</p>
                <h2 class="section-title">تجربة مدعومة بصور حقيقية ولمسات أوضح على طول الرحلة</h2>
              </div>
              <p class="section-copy max-w-2xl">أعدنا تقديم هذا القسم كتجربة تفسيرية غنية بصريًا: صورة حياة يومية، وصف مبسط، وبطاقات خدمات تجعل موبيليس تبدو كمنتج رقمي حقيقي وليس مجرد صفحة معلومات.</p>
            </div>
            <div class="grid gap-5 md:grid-cols-3">
              ${items}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
