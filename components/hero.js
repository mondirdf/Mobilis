export function Hero() {
  return `
    <section class="section-shell py-8 sm:py-10 lg:py-12">
      <div class="hero-frame overflow-hidden rounded-[2rem] border border-brand-border bg-white shadow-soft">
        <div class="hero-surface px-6 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-16">
          <div class="hero-grid grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-12">
            <div class="hero-copy text-center lg:text-right">
              <span class="eyebrow-chip">
                منصة حديثة لاختيار وإدارة عروض Mobilis
              </span>
              <h1 class="hero-title mt-6 text-brand-dark">
                أفضل عروض الإنترنت في الجزائر بتجربة أبسط وأكثر احترافية
              </h1>
              <p class="hero-subtitle mt-6 text-slate-600 lg:max-w-2xl">
                واجهة نظيفة تمنحك وصولًا أسرع إلى الباقات، الشحن، ومتابعة الاستهلاك مع تنظيم بصري مريح ومساحات واضحة تساعدك على اتخاذ القرار بثقة.
              </p>
              <div class="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <a
                  href="#offers"
                  class="cta-primary inline-flex min-h-14 w-full items-center justify-center rounded-xl px-6 text-base font-extrabold text-white sm:w-auto sm:min-w-[12rem]"
                >
                  اكتشف العروض
                </a>
                <a
                  href="#actions"
                  class="cta-secondary inline-flex min-h-14 w-full items-center justify-center rounded-xl px-6 text-base font-bold text-brand-dark sm:w-auto sm:min-w-[12rem]"
                >
                  ابدأ بالإجراءات السريعة
                </a>
              </div>
              <div class="mt-8 grid gap-4 sm:grid-cols-3">
                <div class="hero-mini-card rounded-2xl p-4 text-right">
                  <p class="hero-mini-value">+4G</p>
                  <p class="hero-mini-label">عروض واضحة ومحددة حسب الاستخدام</p>
                </div>
                <div class="hero-mini-card rounded-2xl p-4 text-right">
                  <p class="hero-mini-value">24/7</p>
                  <p class="hero-mini-label">خدمات رقمية متاحة في أي وقت</p>
                </div>
                <div class="hero-mini-card rounded-2xl p-4 text-right">
                  <p class="hero-mini-value">3</p>
                  <p class="hero-mini-label">خطوات فقط من الاكتشاف إلى التفعيل</p>
                </div>
              </div>
            </div>
            <div class="hero-side lg:justify-self-end">
              <div class="device-card rounded-[2rem] p-5 sm:p-6">
                <div class="device-notch mx-auto mb-5"></div>
                <div class="space-y-4">
                  <div class="device-balance rounded-2xl p-5">
                    <div class="flex items-center justify-between gap-4">
                      <div>
                        <p class="text-sm font-semibold text-slate-500">لوحة الاستخدام</p>
                        <h2 class="mt-2 text-2xl font-black text-brand-dark">تجربة متوازنة وسهلة المتابعة</h2>
                      </div>
                      <span class="signal-pill">متصل</span>
                    </div>
                    <div class="mt-5 grid gap-3">
                      <div class="metric-row">
                        <span class="metric-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 stroke-[1.8]"><path stroke-linecap="round" stroke-linejoin="round" d="M2 8.82a15.91 15.91 0 0 1 20 0M5.5 12.53a10.9 10.9 0 0 1 13 0M9 16.24a5.88 5.88 0 0 1 6 0M12 20h.01" /></svg></span>
                        <div>
                          <p class="metric-label">اختر العرض المناسب</p>
                          <p class="metric-copy">بطاقات أوضح، سعر بارز، ومحتوى مختصر يسهل المقارنة.</p>
                        </div>
                      </div>
                      <div class="metric-row">
                        <span class="metric-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 stroke-[1.8]"><path stroke-linecap="round" stroke-linejoin="round" d="M13 3 4 14h7l-1 7 9-11h-7Z" /></svg></span>
                        <div>
                          <p class="metric-label">فعّل مباشرة</p>
                          <p class="metric-copy">زر إجراء كبير وواضح مع خطوات أقل على جميع المقاسات.</p>
                        </div>
                      </div>
                      <div class="metric-row">
                        <span class="metric-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 stroke-[1.8]"><path stroke-linecap="round" stroke-linejoin="round" d="M7 4h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm4 13h2" /></svg></span>
                        <div>
                          <p class="metric-label">تابع الاستهلاك</p>
                          <p class="metric-copy">رؤية فورية للبيانات والرصيد عبر لوحة موحدة داخل التطبيق.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="hero-bars rounded-2xl p-5">
                    <div class="flex items-end justify-between gap-3">
                      <div>
                        <p class="text-sm font-semibold text-slate-500">جاهزية رقمية</p>
                        <p class="mt-1 text-lg font-extrabold text-brand-dark">واجهة حديثة لمنتج اتصالات</p>
                      </div>
                      <span class="text-sm font-bold text-brand-green">سهولة أعلى</span>
                    </div>
                    <div class="mt-5 space-y-4">
                      <div>
                        <div class="mb-2 flex items-center justify-between text-sm font-semibold text-slate-500">
                          <span>وضوح الباقات</span>
                          <span>92%</span>
                        </div>
                        <div class="progress-track"><span style="width: 92%"></span></div>
                      </div>
                      <div>
                        <div class="mb-2 flex items-center justify-between text-sm font-semibold text-slate-500">
                          <span>سرعة الوصول</span>
                          <span>88%</span>
                        </div>
                        <div class="progress-track"><span style="width: 88%"></span></div>
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
