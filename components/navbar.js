export function Navbar() {
  return `
    <header id="site-header" class="site-header fixed inset-x-0 top-0 z-50 transition-all duration-300">
      <div class="section-shell">
        <nav class="nav-shell mt-3 flex items-center justify-between gap-3 rounded-full px-3 py-2.5 sm:px-4" aria-label="Primary">
          <button
            id="nav-toggle"
            class="nav-toggle inline-flex h-10 w-10 items-center justify-center rounded-2xl text-white"
            type="button"
            aria-expanded="false"
            aria-controls="mobile-menu"
            aria-label="فتح القائمة"
          >
            <span class="sr-only">فتح القائمة</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-5 w-5 stroke-[2.2]">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>

          <a href="#top" class="nav-logo inline-flex items-center justify-center text-white" aria-label="Mobilis home">
            <span class="nav-logo-image-wrap inline-flex items-center justify-center rounded-2xl bg-white/95 px-3 py-2 shadow-lg shadow-black/10">
              <img src="./assets/mobilis-logo.svg" alt="Mobilis" class="nav-logo-image h-8 w-auto object-contain sm:h-9" />
            </span>
          </a>
        </nav>

        <div id="mobile-menu" class="mobile-menu mt-2 hidden rounded-[1.5rem] px-4 py-4 lg:hidden">
          <div class="flex flex-col gap-2 text-right">
            <a href="#offers" class="mobile-nav-link">العروض</a>
            <a href="#services" class="mobile-nav-link">كيف تعمل</a>
            <a href="#app-section" class="mobile-nav-link">التطبيق</a>
            <a href="#app-section" class="nav-cta mt-2 inline-flex min-h-12 items-center justify-center rounded-full px-5 text-sm font-extrabold text-white">
              ابدأ الآن
            </a>
          </div>
        </div>
      </div>
    </header>
  `;
}
