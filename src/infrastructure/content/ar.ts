import type { Portfolio } from "@/core/entities/portfolio";
import { makeLinks } from "./links";

export const ar: Portfolio = {
  locale: "ar",
  meta: {
    title: "عمور (Amoor) — مطوّر Frontend",
    description: "مطوّر Frontend من القاهرة، بحوّل الأفكار لمنتجات React و React Native متكاملة وبتدعم العربية (RTL).",
  },
  brand: { mark: "ع", name: "عمور" },
  ui: {
    nav: { about: "عنّي", skills: "المهارات", work: "الأعمال", contact: "تواصل" },
    hire: "وظّفني",
    seeWork: "شوف أعمالي",
    letsTalk: "نتكلم",
    startProject: "ابدأ مشروعك",
    scroll: "اسحب ↓",
    uspLabel: "وعدي ليك",
    liveDemo: "شوف المشروع",
    featuresLabel: "المميزات",
    viewCaseStudy: "تفاصيل المشروع",
    crumbHint: "مرّر الماوس على الكلمات",
    themeToLight: "فاتح",
    themeToDark: "داكن",
    otherLanguage: "English",
  },
  hero: {
    eyebrow:
      "أهلًا، أنا عمور، مطوّر Frontend من القاهرة. طالب علوم حاسب، ومصمم بخبرة ٨ سنين، وبنشر شروحات برمجة بالعربي.",
    headlineBefore: "بصمّمه.",
    headlineAccent: "ببنيه.",
    headlineAfter: "وإنت تطلقه.",
    lead: "من الهوية والـ UI لحد كود React وReact Native الشغّال، بدعم كامل للعربية، من شخص واحد. وبشرح لك كل خطوة ببساطة.",
    location: "القاهرة، مصر",
  },
  about: {
    copy: { label: "عنّي", title: "كود شغّال، ومشروح ببساطة" },
    intro: "أنا طالب علوم حاسب بسلّم منتجات حقيقية، مش بس تمارين الكورس.",
    paragraphs: [
      "بابني تطبيقات ويب وPWA وموبايل بـ React وNext.js وTypeScript وReact Native. بهتم بواجهات سريعة، بتشتغل أوفلاين عند الحاجة، وبتتقرأ صح بالعربي (RTL) والإنجليزي (LTR).",
      "وبنشر شروحات برمجة بالعربي، فأنا متعوّد أبسّط الموضوعات المعقدة لخطوات صغيرة وواضحة. وبنفس الطريقة بشتغل مع العملاء: دايمًا تعرف أنا بابني إيه وليه.",
      "قبل الكود كنت مصمم. ٨ سنين في الجرافيك وتصميم الواجهات البسيطة (Minimalist UI) معناها إني بصمم الواجهة والهوية اللي حواليها وبعدين أبنيها بنفسي، فمفيش حاجة بتضيع بين التصميم والتنفيذ.",
    ],
    usp: "أنا مطوّر Frontend بخلفية ٨ سنين في التصميم. بحوّل فكرتك لمنتج متكامل بـ React و React Native بيدعم العربية (RTL)، من الهوية والـ UI لحد الكود الشغّال، من غير فجوة بين المصمم والمطوّر.",
  },
  marquee: ["React", "Next.js", "TypeScript", "React Native", "RTL", "Supabase", "PWA"],
  proof: [
    { value: 8, label: "سنين في التصميم" },
    { value: 4, label: "مشاريع اتسلّمت" },
    { value: 2, label: "لغتين · RTL + LTR" },
  ],
  story: {
    copy: { label: "الحكاية", title: "شغلتين، وغالبًا شخصين" },
    statement:
      "أغلب المنتجات بتخسر حاجة في الطريق بين المصمم والمطوّر: المسافات بتتغير، والحالات بتتنسي، والعربي بيتكسر. أنا بعمل الشغلتين، فالتصميم اللي بتوافق عليه هو المنتج اللي بتستلمه.",
    merge: { design: "تصميم", code: "كود", gap: "فجوة التسليم", one: "شخص واحد. رؤية واحدة." },
  },
  journey: {
    copy: { label: "رحلتي", title: "من البكسل للإنتاج" },
    stages: [
      {
        phase: "من ٨ سنين",
        title: "بدأت بالتصميم",
        text: "بدأت كمصمم جرافيك، وهناك اتعلمت أهتم بالتسلسل البصري والمسافات وإزاي الناس بتبص فعلًا على الصفحة.",
        visual: "design",
      },
      {
        phase: "الجامعة",
        title: "علوم الحاسب",
        text: "دخلت المعهد العالي للحاسبات في القاهرة عشان أفهم الـ software بيتبني إزاي، مش بس شكله.",
        visual: "university",
      },
      {
        phase: "كورس الـ Frontend",
        title: "اتعلمت أكتب كود",
        text: "منحة DEPI وتدريب NTI وITI دخّلوني في React وطريقة شغل فرق الـ Frontend الحقيقية، وبعدهم تدريب عن بُعد في CodeAlpha.",
        visual: "frontend",
      },
      {
        phase: "المشاريع",
        title: "سلّمت منتجات حقيقية",
        text: "Fast ID مع فريق من ٥، وSideBy، وعنبر، ونظام Chest X-ray بالذكاء الاصطناعي مع فريق من ٧.",
        visual: "projects",
        images: [
          { src: "/projects/sideby-hero.jpg", alt: "لوحة تحكم SideBy" },
          { src: "/projects/sideby-battalions.jpg", alt: "نظام الكتائب في SideBy" },
          { src: "/projects/sideby-tour.jpg", alt: "جولة في تطبيق SideBy" },
        ],
      },
      {
        phase: "UI / UX",
        title: "التصميم قابل الكود",
        text: "اتعلمت الـ UI/UX صح ودمجته في كل مشروع: واجهات بسيطة (Minimalist)، وهوية كاملة، وتخطيطات تبدأ من العربي.",
        visual: "uiux",
      },
      {
        phase: "النهارده",
        title: "شخص واحد، من التصميم للكود",
        text: "عشان كده أقدر آخد فكرتك من الهوية والـ UI لحد منتج React أو React Native شغّال.",
        visual: "merge",
      },
    ],
  },
  process: {
    copy: { label: "إزاي بشتغل", title: "من الفكرة للتسليم في ٤ خطوات", subtitle: "دايمًا هتعرف إيه اللي بيحصل وليه." },
    steps: [
      { title: "نتكلم", text: "قولّي فكرتك وهرد عليك بخطة واضحة ومدة وسعر." },
      { title: "أصمّم", text: "الهوية والواجهة قدامك قبل ما أكتب سطر كود." },
      { title: "أبني", text: "React أو React Native نضيف، يدعم RTL، بتتبني على خطوات صغيرة تقدر تتابعها." },
      { title: "أسلّم وأشرح", text: "بتستلم منتج شغّال وشرح بسيط، فتفهم اللي في إيدك فعلًا." },
    ],
  },
  audiences: {
    copy: { label: "اشتغل معايا", title: "اختار طريقك" },
    items: [
      {
        title: "عندك فكرة أو بيزنس؟",
        text: "استلم تطبيق ويب أو موبايل متكامل وبيدعم العربية، بتصميمه وكوده من شخص واحد.",
        cta: "ابدأ مشروعك",
        href: "#contact",
      },
      {
        title: "بتدوّر على مطوّر Frontend؟",
        text: "React وNext.js وTypeScript وReact Native، بخلفية تصميم وخبرة شغل فريق حقيقية: مشروع DEPI من ٥ أفراد ومشروع تخرج من ٧.",
        cta: "نتكلم",
        href: "#contact",
      },
    ],
  },
  education: {
    copy: { label: "التعليم", title: "الدراسة والتدريب" },
    items: [
      { meta: "متوقع يناير ٢٠٢٧", title: "بكالوريوس علوم الحاسب", text: "المعهد العالي للحاسبات، ٦ أكتوبر، القاهرة" },
      { meta: "٦ شهور", title: "منحة DEPI", text: "مسار تقني مع مشروع تخرج جماعي" },
      { meta: "تدريب", title: "NTI و ITI", text: "برامج تدريب في البرمجة" },
    ],
  },
  skills: {
    copy: { label: "المهارات", title: "التقنيات الأساسية", subtitle: "اللي بستخدمه في البناء والتسليم." },
    groups: [
      { title: "التصميم", tags: ["UI / UX", "تصميم جرافيك", "Minimalist UI", "هوية بصرية"] },
      { title: "ويب", tags: ["React", "Next.js", "TypeScript", "Vite", "Tailwind"] },
      { title: "موبايل", tags: ["React Native", "Capacitor.js", "PWA"] },
      { title: "البيانات والـ Backend", tags: ["Supabase", "Dexie.js (أوفلاين)"] },
      { title: "المعمارية وأكتر", tags: ["Feature-Sliced Design", "RTL / LTR i18n", "React Three Fiber"] },
    ],
  },
  experience: {
    copy: { label: "الخبرة العملية", title: "الخبرة" },
    items: [
      { meta: "عن بُعد", title: "متدرب Frontend — CodeAlpha", text: "أنهيت تدريب Frontend عن بُعد." },
      { meta: "مشروع جماعي", title: "مشروع DEPI التقني النهائي", text: "شغل Frontend ضمن فريق من ٥ أفراد (React.js + Supabase)." },
    ],
  },
  services: {
    copy: { label: "الخدمات", title: "إيه اللي أقدر أبنيه ليك", subtitle: "نطاق واضح، ومخرجات واضحة." },
    items: [
      { title: "تصميم UI/UX وهوية بصرية لحد الكود", text: "هوية وتصميم واجهات بيتسلّموا ككود React شغّال، من غير فجوة بين المصمم والمطوّر." },
      { title: "تطبيقات ويب Frontend", text: "واجهات React / Next.js / TypeScript: لوحات تحكم وصفحات هبوط وتطبيقات ويب." },
      { title: "تطبيقات موبايل", text: "تطبيقات متعددة المنصات بـ React Native، أو PWA قابلة للتثبيت." },
      { title: "واجهات عربية RTL", text: "تخطيطات يمين-لشمال صحيحة ودعم ثنائي اللغة (عربي/إنجليزي)." },
      { title: "تكامل Supabase", text: "تسجيل دخول وقاعدة بيانات ومعالجة بيانات تدعم الأوفلاين مربوطة بواجهتك." },
    ],
  },
  projects: {
    copy: { label: "المشاريع", title: "أعمال مختارة", subtitle: "المشكلة ← الحل ← التقنيات." },
    items: [
      {
        title: "SideBy",
        href: "https://sidebyapp.vercel.app/",
        slug: "sideby",
        caseStudy: {
          eyebrow: "دراسة حالة",
          tagline: "تطبيق إنتاجية اجتماعي بيخليك ملتزم، كتف بكتف.",
          overviewTitle: "نظرة عامة",
          overview:
            "SideBy (كتف بكتف) هو PWA للمذاكرة والإنتاجية بنظام ألعاب. بدل ما يسيبك لوحدك مع To-Do List، بيربطك بشريك أو فرقة أو كتيبة كاملة، وبيستخدم الـ streaks والنقاط وإثبات الإنجاز عشان الكل يفضل ماشي.",
          role: { label: "دوري", value: "مؤسس · تصميم وFrontend" },
          stackLabel: "التقنيات",
          stats: [
            { value: 9, label: "مجال من المميزات" },
            { value: 2, label: "لغتين: عربي / إنجليزي، RTL + LTR" },
            { value: 3, label: "منصات: ويب وPWA وCapacitor" },
          ],
          challenge: {
            title: "المشكلة",
            text: "المذاكرة لوحدك بتصعّب الالتزام. أغلب تطبيقات الإنتاجية بتسيبك قدام أهداف ضخمة لوحدك، والحماس بيخف.",
          },
          solution: {
            title: "الحل",
            text: "قسّم الأهداف لخطوات صغيرة، وهات شريك معاك، وضيف ميكانيكا الألعاب (streaks ونقاط وقاعة مشاهير) مع محاسبة صارمة من خلال الكتائب.",
          },
          domino: {
            title: "مفعول الدومينو",
            text: "قسّم الهدف الكبير لأهداف فرعية صغيرة. كل خطوة بتخلصها بتوقّع اللي بعدها، والصورة الكبيرة بتكمل قدام عينك.",
          },
          showcase: {
            title: "جوّه التطبيق",
            steps: [
              {
                title: "خطّط",
                text: "اعمل هدف، قسّمه لأهداف فرعية، وادعُ شريكك يشاركك فيه.",
                image: { src: "/projects/sideby-hero.jpg", alt: "لوحة التحكم والصفحة الرئيسية" },
              },
              {
                title: "تابع",
                text: "رسوم الإحصائيات، وملف شخصي بـ SideBy Score، وقاعة مشاهير لأكتر الناس التزامًا.",
                image: { src: "/projects/sideby-tour.jpg", alt: "الإحصائيات والملف الشخصي وقاعة المشاهير" },
              },
              {
                title: "التزم",
                text: "الكتائب: القائد بيحدد المنهج والقواعد، والأعضاء بيرفعوا إثبات يومي والنظام بيفحصه من ميتاداتا الصور.",
                image: { src: "/projects/sideby-battalions.jpg", alt: "نظام الكتائب" },
              },
              {
                title: "خده معاك",
                text: "PWA قابل للتثبيت مع إشعارات لحظية، فتقدم شريكك بيوصلك في أي مكان.",
                image: { src: "/projects/sideby-mobile.jpg", alt: "التطبيق على الموبايل" },
              },
            ],
          },
          featuresTitle: "كل اللي جوّه",
          cta: { live: "افتح التطبيق", back: "رجوع لكل الأعمال" },
        },
        features: [
          "أهداف وأهداف فرعية مع شريط تقدم حي",
          "ادعُ شريكك بلينك وشاركوا نفس الهدف",
          "سلسلة التزام يومية بترجع للصفر لو فوّت يوم",
          "رسوم بيانية لنسبة الإنجاز ومعدل الالتزام",
          "ملف شخصي بـ SideBy Score وأوسمة",
          "قاعة المشاهير: لوحة شرف لأكتر الناس التزامًا",
          "متابعة الأبناء ومراقبة مستواهم الدراسي",
          "الكتائب: معسكرات مذاكرة بإنذارات وتصاريح مغادرة وإثبات يومي بيتفحص من ميتاداتا الصور",
          "PWA قابل للتثبيت مع إشعارات لحظية",
        ],
        images: [
          { src: "/projects/sideby-hero.jpg", alt: "الصفحة الرئيسية للتطبيق ولوحة التحكم" },
          { src: "/projects/sideby-tour.jpg", alt: "جولة في التطبيق: الإحصائيات والملف الشخصي وقاعة المشاهير" },
          { src: "/projects/sideby-battalions.jpg", alt: "نظام الكتائب: معسكرات مذاكرة بإثبات يومي" },
          { src: "/projects/sideby-mobile.jpg", alt: "التطبيق على الموبايل" },
        ],
        details: [
          { label: "المشكلة", text: "المذاكرة لوحدك بتصعّب الالتزام." },
          { label: "الحل", text: "PWA للمذاكرة بنظام ألعاب، مع لوحات للفِرق وأنظمة ضد الغش." },
        ],
        tags: ["React", "Vite", "Tailwind", "Supabase", "Capacitor.js", "Dexie.js", "React Three Fiber", "FSD", "RTL/LTR"],
      },
      {
        title: "عنبر",
        titleAlt: "(Anbar)",
        details: [
          { label: "المشكلة", text: "إدارة المزرعة محتاجة تشتغل في أماكن الاتصال فيها مش مضمون." },
          {
            label: "الحل",
            text: 'تطبيق React Native لمزارع الدواجن: عربي RTL، أوفلاين أولًا، مع ميزات OCR وصوت وذكاء اصطناعي، و"Blind UI" مقيّدة للعمال. ٩ شاشات موبايل.',
          },
        ],
        tags: ["React Native", "Offline-first", "RTL", "OCR"],
      },
      {
        title: "Fast ID System",
        details: [
          { label: "السياق", text: "مشروع DEPI التقني النهائي، اتبنى مع فريق من ٥." },
          { label: "الحل", text: "نظام ويب بواجهة React.js فوق Backend على Supabase." },
        ],
        tags: ["React.js", "Supabase", "Teamwork"],
      },
      {
        title: "Chest X-ray AI System",
        details: [
          { label: "السياق", text: "مشروع تخرج مع فريق من ٧ (React وFlutter و.NET وذكاء اصطناعي)." },
          { label: "دوري", text: "تنسيق المشروع، تخطيط السبرنتات، معمارية النظام، والواجهة." },
        ],
        tags: ["React", "Architecture", "Sprints"],
      },
    ],
  },
  achievements: {
    copy: { label: "الإنجازات", title: "محطات" },
    items: [
      "أنهيت تدريب Frontend عن بُعد في CodeAlpha.",
      "اتقبلت في منحة DEPI لمدة ٦ شهور.",
      "سلّمت ٤ مشاريع بمعمارية حقيقية (PWA وموبايل وأنظمة فرق).",
      "بنشر شروحات برمجة بالعربي بشكل منتظم.",
    ],
  },
  testimonials: {
    copy: { label: "آراء العملاء", title: "آراء العملاء" },
    emptyMessage: "أول آراء العملاء هتظهر هنا. تحب تكون الأول؟",
    items: [],
  },
  contact: {
    copy: { label: "التواصل", title: "عندك مشروع في بالك؟" },
    text: "قولّي محتاج إيه وهرد عليك بخطة واضحة ومدة وسعر.",
    links: makeLinks({ email: "البريد", github: "GitHub", linkedin: "LinkedIn", khamsat: "خمسات · amor1010" }),
    social: "السوشيال: @amoor2026",
    copyright: "© 2026 عمور (Amoor) · مطوّر Frontend",
  },
};
