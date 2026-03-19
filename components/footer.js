import { footerLinks } from '../data/content.js';

export function Footer() {
  const links = footerLinks
    .map(
      ({ label, href }) => `
        <a href="${href}" class="text-sm text-slate-300 transition hover:text-white">${label}</a>
      `
    )
    .join('');

  return `
    <footer id="footer" class="section-shell py-8 sm:py-10">
      <div class="glass-card rounded-[2rem] border border-white/10 px-6 py-8 shadow-glow sm:px-8">
        <div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div class="space-y-3">
            <h2 class="text-2xl font-bold text-white">Mobilis</h2>
            <p class="max-w-md text-sm leading-7 text-slate-300">
              واجهة عصرية تساعد المستخدم على الوصول إلى أهم العروض والخدمات بأقل عدد ممكن من الخطوات.
            </p>
            <a href="tel:666" class="inline-flex text-sm font-medium text-green-400">اتصل بالدعم: 666</a>
          </div>
          <div class="flex flex-wrap gap-4">
            ${links}
          </div>
        </div>
      </div>
    </footer>
  `;
}
