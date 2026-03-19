import { services } from '../data/content.js';

export function Services() {
  const items = services
    .map(
      ({ title, icon, description }) => `
        <article class="info-card flex min-h-[220px] flex-col justify-between rounded-[1.8rem] p-6 sm:p-7">
          <div class="service-icon-wrap flex h-16 w-16 items-center justify-center rounded-[1.25rem] text-3xl text-white">${icon}</div>
          <div class="space-y-3">
            <h3 class="text-[1.45rem] font-black leading-tight text-white">${title}</h3>
            <p class="text-sm leading-8 text-slate-300">${description}</p>
          </div>
        </article>
      `
    )
    .join('');

  return `
    <section id="services" class="section-shell section-gap-lg">
      <div class="section-intro section-intro-split section-intro-wide">
        <div>
          <p class="section-kicker">خدمات داعمة</p>
          <h2 class="section-title">امتداد طبيعي بعد الاشتراك</h2>
        </div>
        <p class="section-copy">بدل تكديس أقسام إضافية، بقيت هنا فقط الخدمات التي تدعم إدارة الخط، السفر، والوصول إلى المساعدة الفعلية.</p>
      </div>
      <div class="grid gap-5 md:grid-cols-3 lg:gap-6">
        ${items}
      </div>
    </section>
  `;
}
