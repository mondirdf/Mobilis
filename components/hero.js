export function Hero() {
  return `
    <section class="section-shell pt-5 sm:pt-8">
      <div class="hero-frame overflow-hidden rounded-[2.25rem] border border-white/10 shadow-panel">
        <div class="hero-image hero-overlay min-h-[84vh] px-6 py-10 sm:px-10 lg:px-14">
          <div class="hero-grid grid min-h-[calc(84vh-5rem)] gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div class="hero-copy text-center lg:text-right">
              <span class="eyebrow-chip">
                تجربة أوضح لاختيار العرض المناسب
              </span>
              <h1 class="hero-title mt-6 text-white">
                أفضل عروض الإنترنت في الجزائر
              </h1>
              <p class="hero-subtitle mt-5 text-slate-300">
                اختر عرضك وابدأ في ثواني
              </p>
              <a
                href="#offers"
                class="cta-primary mt-8 inline-flex min-h-16 items-center justify-center rounded-2xl px-8 text-base font-extrabold text-white sm:px-10"
              >
                اكتشف العروض
              </a>
            </div>
            <div class="hero-side lg:justify-self-end">
              <div class="hero-panel rounded-[2rem] p-5 sm:p-6">
                <div class="space-y-5">
                  <div class="hero-panel-top flex items-start justify-between gap-4">
                    <div>
                      <p class="text-sm font-medium text-slate-400">مسار سريع</p>
                      <h2 class="mt-2 text-2xl font-black text-white">من الاكتشاف إلى التفعيل</h2>
                    </div>
                    <span class="hero-orbit"></span>
                  </div>
                  <div class="hero-metrics grid gap-3">
                    <div class="metric-row">
                      <span class="metric-value">01</span>
                      <div>
                        <p class="metric-label">اختر العرض</p>
                        <p class="metric-copy">باقات مركزة مع سعر بارز ومعلومات أقل.</p>
                      </div>
                    </div>
                    <div class="metric-row">
                      <span class="metric-value">02</span>
                      <div>
                        <p class="metric-label">فعّل فورًا</p>
                        <p class="metric-copy">إجراء مباشر بدون ازدحام بصري أو تشتت.</p>
                      </div>
                    </div>
                    <div class="metric-row">
                      <span class="metric-value">03</span>
                      <div>
                        <p class="metric-label">تابع الاستهلاك</p>
                        <p class="metric-copy">لوحة واحدة لمراقبة الرصيد والبيانات.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
