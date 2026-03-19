export function Hero() {
  return `
    <section class="section-shell pt-4 sm:pt-6">
      <div class="hero-image overflow-hidden rounded-[2rem] shadow-glow">
        <div class="flex min-h-[78vh] items-center justify-center px-6 py-16 text-center sm:px-10 lg:px-16">
          <div class="max-w-3xl space-y-6">
            <span class="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-slate-200">
              حلول اتصال أسرع وأسهل لكل يوم
            </span>
            <div class="space-y-4">
              <h1 class="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
                أفضل عروض الإنترنت في الجزائر
              </h1>
              <p class="mx-auto max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
                صفحة واحدة واضحة تساعدك على تعبئة الرصيد، شراء العرض المناسب، وفهم خططك بسرعة دون أي تعقيد.
              </p>
            </div>
            <div class="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#offers"
                class="inline-flex min-h-14 w-full items-center justify-center rounded-2xl bg-brand-green px-8 text-base font-bold text-white transition hover:bg-green-500 sm:w-auto"
              >
                اكتشف العروض
              </a>
              <a
                href="#services"
                class="inline-flex min-h-14 w-full items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-8 text-base font-bold text-white transition hover:bg-white/10 sm:w-auto"
              >
                استكشف الخدمات
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
