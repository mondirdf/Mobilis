const iconBase = 'h-7 w-7 stroke-[1.8]';

export const quickActions = [
  {
    label: 'تعبئة الرصيد',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="${iconBase}"><path stroke-linecap="round" stroke-linejoin="round" d="M3 10.5V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3.5M3 10.5h18M5 14h5m-5 3h7m8-4v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /></svg>`,
    href: '#app',
    description: 'إعادة الشحن بخطوات مختصرة مع واجهة أخف وزر واضح يسهل التنفيذ من الهاتف.'
  },
  {
    label: 'شراء عرض',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="${iconBase}"><path stroke-linecap="round" stroke-linejoin="round" d="m3 12 7.5-7.5L14 8l7-7v20H3Z" /></svg>`,
    href: '#offers',
    description: 'بطاقات باقات منظمة وسهلة المقارنة تساعدك على اختيار العرض الأنسب بسرعة.'
  },
  {
    label: 'تتبع الاستهلاك',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="${iconBase}"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v18m9-9H3m15.5-5.5a9 9 0 0 1 0 11M5.5 6.5a9 9 0 0 0 0 11" /></svg>`,
    href: '#app',
    description: 'عرض مباشر للرصيد والبيانات والمكالمات داخل لوحة موحدة بتسلسل مريح.'
  }
];

export const offers = [
  {
    title: '4G Max',
    price: '1200',
    currency: 'دج',
    period: 'شهريًا',
    features: ['20GB إنترنت', 'تفعيل فوري', 'مكالمات غير محدودة'],
    badge: 'الأكثر اختيارًا',
    tone: 'standard',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="${iconBase}"><path stroke-linecap="round" stroke-linejoin="round" d="M4 20h16M7 16v-2m5 2V8m5 8V4" /></svg>`
  },
  {
    title: 'Internet Plus',
    price: '2000',
    currency: 'دج',
    period: '30 يومًا',
    features: ['40GB إنترنت', 'هدية ليلية', 'أفضل قيمة للمستخدم المكثف'],
    badge: 'الباقة المميزة',
    tone: 'featured',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="${iconBase}"><path stroke-linecap="round" stroke-linejoin="round" d="M13 3 4 14h7l-1 7 9-11h-7Z" /></svg>`
  },
  {
    title: 'Flexi Mix',
    price: '1500',
    currency: 'دج',
    period: 'شهريًا',
    features: ['15GB + 500 دقيقة', 'مرونة يومية', 'مناسب للعمل والترفيه'],
    badge: 'حل متوازن',
    tone: 'standard',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="${iconBase}"><path stroke-linecap="round" stroke-linejoin="round" d="M7 4h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm4 13h2" /></svg>`
  }
];

export const services = [
  {
    title: 'الخدمات الرقمية',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="${iconBase}"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V5a4 4 0 1 1 8 0v2m-9 0h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z" /></svg>`,
    description: 'إدارة الخدمات الإضافية وتفعيل الحلول الرقمية بسهولة عبر بطاقات واضحة ومباشرة.'
  },
  {
    title: 'الدولي والتجوال',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="${iconBase}"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12h18M12 3a15.3 15.3 0 0 1 4 9 15.3 15.3 0 0 1-4 9 15.3 15.3 0 0 1-4-9 15.3 15.3 0 0 1 4-9Z" /></svg>`,
    description: 'باقات وتجوال مصممة للسفر مع شرح مختصر وأسعار أسهل في المقارنة.'
  },
  {
    title: 'الوكالات',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="${iconBase}"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21s7-4.35 7-11a7 7 0 1 0-14 0c0 6.65 7 11 7 11Zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" /></svg>`,
    description: 'الوصول السريع إلى أقرب وكالة أو نقطة خدمة ضمن واجهة أكثر مهنية وتنظيمًا.'
  }
];

export const appPromotion = {
  title: 'تطبيق واحد لإدارة خطك بدون أي تعقيد',
  description:
    'واجهة مختصرة تمنحك التحكم في الاستهلاك، إعادة الشحن، وتفعيل العروض من مكان واحد مع تدرج بصري أنظف ومسارات أوضح للمستخدم.',
  cta: 'ابدأ من التطبيق',
  stats: [
    {
      value: '24/7',
      label: 'خدمات متاحة في أي وقت وبأقل عدد من الخطوات',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="${iconBase}"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>`
    },
    {
      value: '3',
      label: 'خطوات فقط لإتمام الشراء أو تفعيل الباقة',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="${iconBase}"><path stroke-linecap="round" stroke-linejoin="round" d="M13 3 4 14h7l-1 7 9-11h-7Z" /></svg>`
    },
    {
      value: '01',
      label: 'لوحة موحدة لكل العمليات الأساسية داخل التطبيق',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="${iconBase}"><path stroke-linecap="round" stroke-linejoin="round" d="M4 19h16M7 16V8m5 8V5m5 11v-4" /></svg>`
    }
  ]
};

export const footerLinks = [
  { label: 'العروض', href: '#offers' },
  { label: 'الإجراءات', href: '#actions' },
  { label: 'التطبيق', href: '#app' }
];
