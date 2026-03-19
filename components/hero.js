export function Hero() {
  return `
    <section id="top" class="hero-section relative isolate flex min-h-screen items-center overflow-hidden">
      <div class="hero-media absolute inset-0"></div>
      <div class="hero-overlay absolute inset-0"></div>
      <div class="hero-glow absolute inset-x-0 bottom-0 h-40"></div>

      <div class="section-shell relative z-10 flex w-full items-center justify-center py-32 sm:py-36 lg:py-40">
        <div class="hero-content mx-auto max-w-4xl text-center text-white">
          <span class="hero-badge">تجربة رقمية أسرع لعروض Mobilis</span>
          <h1 class="hero-title mt-6 text-white">أفضل عروض الإنترنت في الجزائر</h1>
          <p class="hero-subtitle mx-auto mt-5 max-w-2xl text-white/85">اختر عرضك في ثواني</p>
          <div class="mt-10 flex justify-center">
            <a
              href="#offers"
              class="cta-primary hero-cta inline-flex min-h-14 items-center justify-center rounded-full px-8 text-base font-extrabold text-white sm:min-w-[13rem]"
            >
              اكتشف العروض
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}
