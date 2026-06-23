import { Palette, ScanFace, Sparkles, UsersRound } from "lucide-react";
import { AppearanceCarousel } from "@/components/sections/AppearanceCarousel";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { GlassCard } from "@/components/shared/GlassCard";
import { SectionBadge } from "@/components/shared/SectionBadge";

const appearancePoints = [
  {
    title: "Типаж под аудиторию",
    description: "Создаем внешность, которая считывается вашим рынком и стилем.",
    icon: UsersRound,
  },
  {
    title: "Черты, волосы, макияж",
    description: "Настраиваем детали образа: от лица до общей fashion-подачи.",
    icon: ScanFace,
  },
  {
    title: "Несколько героев",
    description: "Можно собрать одну модель или линейку персонажей под сегменты.",
    icon: Sparkles,
  },
  {
    title: "Единый визуальный код",
    description: "Сохраняем премиальное ощущение бренда в каждом новом образе.",
    icon: Palette,
  },
];

export function AppearanceSection() {
  return (
    <section id="appearance" className="section-space pt-0">
      <div className="page-container">
        <AnimatedSection>
          <GlassCard className="relative overflow-hidden p-5 sm:p-7 lg:p-10">
            <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-[#cfc4ff]/35 blur-3xl" />
            <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#c0dfff]/35 blur-3xl" />
            <div className="relative grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
              <div className="order-2 lg:order-1">
                <AppearanceCarousel />
              </div>

              <div className="order-1 px-1 lg:order-2 lg:px-4">
                <SectionBadge>Гибкость внешности</SectionBadge>
                <h2 className="section-title mt-6">
                  Можно сгенерировать абсолютно любую внешность
                </h2>
                <p className="body-copy mt-6">
                  Подбираем типаж под бренд, аудиторию и задачу: черты лица,
                  волосы, возраст, настроение, макияж и общий визуальный код.
                  Персонаж может быть минималистичным, ярким, editorial,
                  lifestyle или полностью собранным под новую кампанию.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {appearancePoints.map((point) => {
                    const Icon = point.icon;

                    return (
                      <div
                        key={point.title}
                        className="rounded-[22px] border border-black/[0.07] bg-white/60 p-4 backdrop-blur-xl"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#f2f0ff] text-[#7566e5]">
                          <Icon aria-hidden="true" className="h-4 w-4" />
                        </div>
                        <h3 className="mt-4 text-base font-semibold tracking-[-0.03em]">
                          {point.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-muted">
                          {point.description}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {[
                    "Любой типаж",
                    "Любой возраст",
                    "Любая эстетика",
                    "Под разные рынки",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-black/[0.07] bg-white/65 px-3.5 py-2 text-[11px] font-semibold text-black/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </GlassCard>
        </AnimatedSection>
      </div>
    </section>
  );
}
