import {
  Aperture,
  BadgeCheck,
  Boxes,
  BriefcaseBusiness,
  Camera,
  ChartNoAxesCombined,
  CircleDollarSign,
  Clock3,
  GalleryHorizontalEnd,
  Gem,
  ImagePlus,
  Infinity,
  LayoutGrid,
  Megaphone,
  Palette,
  ScanFace,
  ShoppingBag,
  SlidersHorizontal,
  Sparkles,
  Store,
  UsersRound,
  WandSparkles,
  Zap,
} from "lucide-react";
import type {
  CardItem,
  ComparisonRow,
  FAQItem,
  PackageItem,
  ProcessStep,
  Scenario,
} from "@/types/content";

export const navItems = [
  { label: "Услуги", href: "#services" },
  { label: "Преимущества", href: "#benefits" },
  { label: "Процесс", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Связаться", href: "#contact" },
];

export const services: CardItem[] = [
  {
    title: "Создание ИИ-персонажа",
    description:
      "Разрабатываем уникальную внешность, стиль, характер и визуальную айдентику модели под ваш бренд.",
    icon: ScanFace,
  },
  {
    title: "Фото-сеты под коллекции",
    description:
      "Создаем серии изображений с одеждой, обувью, аксессуарами или lifestyle-сценами.",
    icon: Camera,
  },
  {
    title: "Контент для соцсетей",
    description:
      "Готовим визуалы для постов, Reels, Stories, баннеров и рекламных креативов.",
    icon: LayoutGrid,
  },
  {
    title: "Визуальные кампании",
    description:
      "Собираем цельную концепцию: персонаж, образы, локации, настроение и серия материалов.",
    icon: Megaphone,
  },
];

export const benefits: CardItem[] = [
  {
    title: "Дешевле классической съемки",
    description:
      "Без затрат на студию, большую съемочную команду, модель, логистику и съемочный день.",
    icon: CircleDollarSign,
  },
  {
    title: "Быстрее запуск",
    description:
      "Контент можно подготовить за дни, а новые идеи тестировать без недель организации.",
    icon: Zap,
  },
  {
    title: "Любой тип внешности",
    description:
      "Создаем персонажа под аудиторию, страну, возраст и эстетику конкретного бренда.",
    icon: UsersRound,
  },
  {
    title: "Бесконечные образы",
    description:
      "Один персонаж появляется в разных локациях, сезонах, стилях и кампаниях.",
    icon: Infinity,
  },
  {
    title: "Контроль результата",
    description:
      "Настраиваем внешность, позы, одежду, настроение, фон и композицию под задачу.",
    icon: SlidersHorizontal,
  },
  {
    title: "Масштабируемость",
    description:
      "Быстро создаем серии визуалов для рекламы, соцсетей и разных сегментов аудитории.",
    icon: ChartNoAxesCombined,
  },
];

export const visualTypes: CardItem[] = [
  {
    title: "Lookbook-съемки",
    description: "Серии визуалов для новых коллекций в едином стиле.",
    icon: GalleryHorizontalEnd,
  },
  {
    title: "Каталожные фото",
    description: "Чистые и последовательные кадры для сайта и каталога.",
    icon: ShoppingBag,
  },
  {
    title: "Lifestyle-фото",
    description: "Модель в городе, студии, кафе, отеле или нужной атмосфере.",
    icon: Aperture,
  },
  {
    title: "Контент для соцсетей",
    description: "Визуальная лента, Stories, обложки Reels и серии постов.",
    icon: LayoutGrid,
  },
  {
    title: "Рекламные креативы",
    description: "Варианты для performance-рекламы и быстрых A/B-тестов.",
    icon: Megaphone,
  },
  {
    title: "Обложки и баннеры",
    description: "Ключевые визуалы для сайта, рассылок и digital-размещений.",
    icon: ImagePlus,
  },
  {
    title: "Фото для маркетплейсов",
    description: "Предметные и модельные кадры под требования площадок.",
    icon: Store,
  },
  {
    title: "Seasonal campaigns",
    description: "Кампании к сезону, дропу, празднику или специальному запуску.",
    icon: Sparkles,
  },
  {
    title: "UGC-style контент",
    description: "Нативные кадры с ощущением живого пользовательского контента.",
    icon: Camera,
  },
  {
    title: "Виртуальные амбассадоры",
    description: "Постоянный узнаваемый персонаж для коммуникации бренда.",
    icon: BadgeCheck,
  },
];

export const audience = [
  { label: "Бренды одежды", icon: ShoppingBag },
  { label: "Обувные бренды", icon: Boxes },
  { label: "Аксессуары", icon: Gem },
  { label: "Косметика и beauty", icon: Sparkles },
  { label: "Streetwear", icon: WandSparkles },
  { label: "Premium fashion", icon: Gem },
  { label: "Маркетплейсы", icon: Store },
  { label: "Локальные бренды", icon: BriefcaseBusiness },
  { label: "Стартапы", icon: Zap },
  { label: "Рекламные агентства", icon: Palette },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Бриф",
    description:
      "Вы рассказываете о бренде, продукте, аудитории, стиле и целях.",
  },
  {
    number: "02",
    title: "Концепция",
    description:
      "Предлагаем образ модели, визуальный стиль, настроение и форматы.",
  },
  {
    number: "03",
    title: "Создание персонажа",
    description:
      "Формируем стабильную внешность и узнаваемую визуальную айдентику.",
  },
  {
    number: "04",
    title: "Производство",
    description:
      "Создаем фото-сеты, рекламу или контент для ваших площадок.",
  },
  {
    number: "05",
    title: "Правки",
    description:
      "Дорабатываем позы, фон, одежду, настроение и композицию.",
  },
  {
    number: "06",
    title: "Передача",
    description:
      "Вы получаете готовые материалы для маркетинга, сайта и соцсетей.",
  },
];

export const scenarios: Scenario[] = [
  {
    number: "01",
    label: "COLLECTION DROP",
    title: "Запуск новой коллекции",
    description:
      "Создаем ИИ-модель и визуальный мир запуска — от первого образа до финального рекламного креатива.",
    deliverables: ["AI-персонаж", "Lookbook", "Lifestyle", "Ads"],
  },
  {
    number: "02",
    label: "ALWAYS-ON CONTENT",
    title: "Контент для соцсетей на месяц",
    description:
      "Готовим цельный контент-пак, чтобы лента выглядела собранно, а команда не зависела от постоянных съемок.",
    deliverables: ["Посты", "Stories", "Reels covers", "UGC-style"],
  },
  {
    number: "03",
    label: "BRAND FACE",
    title: "Виртуальный амбассадор",
    description:
      "Разрабатываем постоянного героя бренда, который сохраняет характер и узнаваемость в каждой новой кампании.",
    deliverables: ["Character guide", "Campaigns", "Social", "Consistency"],
  },
];

export const comparisonRows: ComparisonRow[] = [
  {
    criterion: "Сроки",
    classic: "Дни или недели подготовки",
    ai: "Быстрый запуск",
  },
  { criterion: "Стоимость", classic: "Высокая", ai: "Ниже" },
  {
    criterion: "Локации",
    classic: "Нужно организовывать",
    ai: "Можно создать любые",
  },
  {
    criterion: "Модель",
    classic: "Нужно искать и согласовывать",
    ai: "Создается под бренд",
  },
  {
    criterion: "Масштабирование",
    classic: "Дорого и долго",
    ai: "Быстро и гибко",
  },
  {
    criterion: "Правки",
    classic: "Часто нужна пересъемка",
    ai: "Можно доработать визуал",
  },
];

export const packages: PackageItem[] = [
  {
    name: "Start",
    subtitle: "Для теста идеи",
    description:
      "Небольшой пилот, чтобы увидеть персонажа в эстетике вашего бренда.",
    features: [
      "Базовая концепция",
      "1 ИИ-модель",
      "Небольшой фото-сет",
      "Базовые правки",
    ],
  },
  {
    name: "Content Pack",
    subtitle: "Для регулярного контента",
    description:
      "Система визуалов для стабильного присутствия бренда в соцсетях.",
    features: [
      "ИИ-модель",
      "Серия фото-сетов",
      "Разные образы",
      "Контент для постов и Stories",
      "Правки",
    ],
    featured: true,
  },
  {
    name: "Campaign",
    subtitle: "Для большого запуска",
    description:
      "Полноценный визуальный мир коллекции или рекламной кампании.",
    features: [
      "Разработка персонажа",
      "Визуальная концепция",
      "Несколько локаций",
      "Рекламные креативы",
      "Lookbook и lifestyle-сеты",
      "Расширенные правки",
    ],
  },
];

export const faqs: FAQItem[] = [
  {
    question: "Можно ли сделать модель под стиль нашего бренда?",
    answer:
      "Да. Мы настраиваем внешность, возраст, характер, стиль, настроение и визуальную подачу под вашу аудиторию и айдентику.",
  },
  {
    question: "Это дешевле обычной фотосессии?",
    answer:
      "В большинстве случаев — да. Не нужно организовывать студию, команду, логистику, аренду, съемочный день и пересъемки.",
  },
  {
    question: "Можно ли использовать визуалы в рекламе?",
    answer:
      "Да. Материалы можно готовить для рекламы, соцсетей, сайта, маркетплейсов и промо-кампаний. Финальные условия использования фиксируются в проекте.",
  },
  {
    question: "Можно ли создать постоянного персонажа бренда?",
    answer:
      "Да. Мы можем разработать виртуального амбассадора, который появляется в разных кампаниях и сохраняет узнаваемый образ.",
  },
  {
    question: "Можно ли сделать несколько разных моделей?",
    answer:
      "Да. Можно создать одного персонажа или целую группу моделей под разные продуктовые линии и сегменты аудитории.",
  },
  {
    question: "Сколько времени занимает работа?",
    answer:
      "Зависит от объема. Небольшой тестовый сет готовится быстрее, а полноценная кампания требует больше подготовки и согласований. Точные сроки называем после короткого брифа.",
  },
];

export const heroProofs = [
  "Без аренды студии",
  "Без поиска моделей",
  "Без долгой подготовки",
  "Любая внешность и стиль",
];

export const studioStats = [
  { value: "∞", label: "вариантов образа" },
  { value: "∞", label: "стабильных персонажей" },
  { value: "24/7", label: "готовность к контенту" },
];

export const speedItems = [
  { icon: Clock3, label: "Дни вместо недель" },
  { icon: CircleDollarSign, label: "Меньше продакшн-затрат" },
  { icon: WandSparkles, label: "Больше творческой свободы" },
];
