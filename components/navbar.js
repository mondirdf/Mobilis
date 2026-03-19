export function Navbar() {
  return `
    <header id="site-header" class="site-header fixed inset-x-0 top-0 z-50 transition-all duration-300">
      <div class="section-shell">
        <nav class="nav-shell mt-4 flex items-center justify-between gap-4 rounded-full px-4 py-3 sm:px-6">
          <a href="#top" class="nav-logo inline-flex items-center gap-3 text-white" aria-label="Mobilis home">
            <span class="nav-logo-mark inline-flex h-11 w-11 items-center justify-center rounded-2xl">M</span>
            <span class="text-right leading-tight">
              <strong class="block text-base font-black">Mobilis</strong>
              <span class="block text-xs font-semibold text-white/70">Internet & Services</span>
            </span>
          </a>

          <button
            id="nav-toggle"
            class="nav-toggle inline-flex h-11 w-11 items-center justify-center rounded-2xl text-white lg:hidden"
            type="button"
            aria-expanded="false"
            aria-controls="mobile-menu"
            aria-label="فتح القائمة"
          >
            <span class="sr-only">فتح القائمة</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 stroke-[2.2]">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>

          <div class="hidden items-center gap-3 lg:flex">
            <div class="nav-links flex items-center gap-2 rounded-full px-2 py-2">
              <a href="#offers" class="nav-link">العروض</a>
              <a href="#services" class="nav-link">الخدمات</a>
              <a href="#app-section" class="nav-link">التطبيق</a>
            </div>
            <a href="#" class="nav-cta inline-flex min-h-12 items-center justify-center rounded-full px-5 text-sm font-extrabold text-white">
              تسجيل الدخول
            </a>
          </div>
        </nav>

        <div id="mobile-menu" class="mobile-menu mt-3 hidden rounded-[1.5rem] px-4 py-4 lg:hidden">
          <div class="flex flex-col gap-2 text-right">
            <a href="#offers" class="mobile-nav-link">العروض</a>
            <a href="#services" class="mobile-nav-link">الخدمات</a>
            <a href="#app-section" class="mobile-nav-link">التطبيق</a>
            <a href="#" class="nav-cta mt-2 inline-flex min-h-12 items-center justify-center rounded-full px-5 text-sm font-extrabold text-white">
              تسجيل الدخول
            </a>
          </div>
        </div>
      </div>
    </header>
  `;
}
