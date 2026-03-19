import { services } from '../data/content.js';

export function Services() {
  const items = services
    .map(
      ({ title, icon, description }) => `
        <article class="info-card flex min-h-[240px] flex-col justify-between rounded-[1.5rem] p-6 sm:p-8">
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
      <div class="section-intro section-intro-split section-intro-wide">
        <div>
          <p class="section-kicker">خدمات داعمة</p>
          <h2 class="section-title">خدمات تكمل تجربة الاشتراك بثقة</h2>
        </div>
        <p class="section-copy">تم تبسيط هذا القسم ببطاقات بيضاء، ظلال ناعمة، ونص أقل كثافة حتى يشعر المستخدم أن الخدمات امتداد طبيعي للمنتج وليست عناصر مزدحمة إضافية.</p>
      </div>
      <div class="grid gap-6 md:grid-cols-3 lg:gap-8">
        ${items}
      </div>
    </section>
  `;
}
