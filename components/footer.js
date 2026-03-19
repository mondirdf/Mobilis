import { footerLinks } from '../data/content.js';

export function Footer() {
  const links = footerLinks
    .map(
      ({ label, href }) => `
        <a href="${href}" class="footer-link text-sm font-extrabold text-slate-600 transition hover:text-brand-green">${label}</a>
      `
    )
    .join('');

  return `
    <footer id="footer" class="section-shell pb-12 pt-4 sm:pb-16">
      <div class="footer-shell rounded-[2rem] px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
        <div class="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div class="space-y-4">
            <p class="text-sm font-black tracking-[0.28em] text-brand-green">MOBILIS</p>
            <h2 class="text-3xl font-black leading-tight text-brand-dark sm:text-4xl">تجربة أنظف وأوضح للوصول إلى العرض المناسب بسرعة</h2>
            <p class="max-w-md text-base leading-8 text-slate-600">
              تصميم جديد يركز على الوضوح، سهولة التنقل، وإبراز القيمة الأساسية لمنتج الاتصالات بدون ازدحام أو تشتيت.
            </p>
            <a href="tel:666" class="inline-flex text-base font-black text-brand-green">اتصل بالدعم: 666</a>
          </div>
          <div class="flex flex-wrap gap-5 sm:justify-end">
            ${links}
          </div>
        </div>
      </div>
    </footer>
  `;
}
