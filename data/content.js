export const quickActions = [
  {
    label: 'تعبئة الرصيد',
    icon: '↗',
    href: '#app',
    description: 'إعادة الشحن بخطوات مختصرة ودفع واضح من أول نقرة.'
  },
  {
    label: 'شراء عرض',
    icon: '◼',
    href: '#offers',
    description: 'اختيار أسرع بين أفضل الباقات الجاهزة للاستخدام اليومي.'
  },
  {
    label: 'تتبع الاستهلاك',
    icon: '◔',
    href: '#app',
    description: 'رؤية فورية للرصيد والإنترنت والمكالمات داخل لوحة واحدة.'
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
    tone: 'standard'
  },
  {
    title: 'Internet Plus',
    price: '2000',
    currency: 'دج',
    period: '30 يومًا',
    features: ['40GB إنترنت', 'هدية ليلية', 'أفضل قيمة للمستخدم المكثف'],
    badge: 'الباقة المميزة',
    tone: 'featured'
  },
  {
    title: 'Flexi Mix',
    price: '1500',
    currency: 'دج',
    period: 'شهريًا',
    features: ['15GB + 500 دقيقة', 'مرونة يومية', 'مناسب للعمل والترفيه'],
    badge: 'حل متوازن',
    tone: 'standard'
  }
];

export const services = [
  { title: 'الخدمات الرقمية', icon: '◍', description: 'إدارة الخدمات الإضافية وتفعيل الحلول الرقمية بسهولة.' },
  { title: 'الدولي والتجوال', icon: '◎', description: 'باقات وتجوال مصممة للسفر بدون مفاجآت.' },
  { title: 'الوكالات', icon: '◫', description: 'الوصول السريع إلى أقرب وكالة أو نقطة خدمة.' }
];

export const appPromotion = {
  title: 'تطبيق واحد لإدارة خطك بدون أي تعقيد',
  description:
    'واجهة مختصرة تمنحك التحكم في الاستهلاك، إعادة الشحن، وتفعيل العروض من مكان واحد مع خطوات أقل ووضوح أعلى.',
  cta: 'ابدأ من التطبيق',
  stats: [
    { value: '24/7', label: 'خدمات متاحة' },
    { value: '3', label: 'خطوات فقط للشراء' },
    { value: '01', label: 'لوحة موحدة لكل العمليات' }
  ]
};

export const footerLinks = [
  { label: 'العروض', href: '#offers' },
  { label: 'الإجراءات', href: '#actions' },
  { label: 'التطبيق', href: '#app' }
];
