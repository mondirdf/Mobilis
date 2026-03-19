import { services } from '../data/content.js';

export function Services() {
  const items = services
    .map(
      ({ title, icon }) => `
        <a
          href="#footer"
          class="glass-card flex min-h-32 flex-col items-start justify-between rounded-3xl border border-white/10 p-5 transition hover:border-green-400/40"
        >
          <span class="text-3xl">${icon}</span>
          <span class="text-base font-bold text-white">${title}</span>
        </a>
      `
    )
    .join('');

  return `
    <section id="services" class="section-shell py-8 sm:py-10">
      <div class="space-y-3 pb-6">
        <p class="text-sm font-medium text-green-400">الخدمات</p>
        <h2 class="text-2xl font-bold text-white sm:text-3xl">كل ما تحتاجه في مكان واحد</h2>
      </div>
      <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
        ${items}
      </div>
    </section>
  `;
}
