import { footerLinks } from '../data/content.js';

export function Footer() {
  const links = footerLinks
    .map(
      ({ label, href }) => `
        <a href="${href}" class="footer-link text-sm font-bold text-slate-300 transition hover:text-white">${label}</a>
      `
    )
    .join('');

  return `
    <footer id="footer" class="section-shell pt-10">
      <div class="footer-shell rounded-[2.2rem] px-6 py-8 sm:px-8 sm:py-10">
        <div class="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div class="space-y-4">
            <p class="text-sm font-bold tracking-[0.28em] text-green-400">MOBILIS</p>
            <h2 class="text-3xl font-black leading-tight text-white">تجربة أوضح للوصول إلى العرض المناسب بسرعة</h2>
            <p class="max-w-md text-sm leading-8 text-slate-300">
              تصميم أكثر تركيزًا على القرار: اكتشاف، اختيار، اشتراك، ثم متابعة الاستهلاك بأقل مجهود بصري.
            </p>
            <a href="tel:666" class="inline-flex text-sm font-black text-green-400">اتصل بالدعم: 666</a>
          </div>
          <div class="flex flex-wrap gap-5">
            ${links}
          </div>
        </div>
      </div>
    </footer>
  `;
}
