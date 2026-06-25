import { ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { GlassCard } from "@/components/shared/GlassCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FloatingAccents } from "@/components/shared/FloatingAccents";
import { CharacterCarousel } from "@/components/sections/CharacterCarousel";
import { CollectionCarousel } from "@/components/sections/CollectionCarousel";
import { SocialContentCarousel } from "@/components/sections/SocialContentCarousel";
import { services } from "@/data/site-content";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden pb-6 pt-2 md:pb-8 md:pt-5 lg:pb-10 lg:pt-5"
    >
      <FloatingAccents labels={["Model ID", "Photo set", "AI flow"]} />
      <div className="page-container relative z-10">
        <AnimatedSection>
          <SectionHeading
            badge="Что мы делаем"
            title="Создаем ИИ-моделей под задачи бренда"
            description="Разрабатываем виртуальных персонажей для рекламных кампаний, соцсетей, каталогов, lookbook-съемок и промо-материалов."
          />
        </AnimatedSection>
        <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon!;
            const isCharacterService = index === 0;
            const isCollectionService = index === 1;
            const isSocialService = index === 2;

            return (
              <AnimatedSection
                key={service.title}
                delay={index * 0.07}
                className={
                  isCharacterService || isCollectionService || isSocialService
                    ? "md:col-span-2"
                    : ""
                }
              >
                {isCharacterService ? (
                  <GlassCard className="group h-full overflow-hidden p-4 transition duration-500 hover:border-black/[0.14] hover:shadow-lift sm:p-6">
                    <div className="grid gap-7 md:grid-cols-[0.9fr_1.1fr] md:items-center lg:grid-cols-[0.82fr_1.18fr]">
                      <CharacterCarousel />
                      <div className="px-2 pb-4 sm:px-4 md:py-6 lg:px-8">
                        <div className="mt-2 md:mt-6">
                          <p className="text-xs font-bold text-black/25">01</p>
                          <h3 className="mt-2 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                            {service.title}
                          </h3>
                          <p className="mt-4 max-w-xl text-sm leading-6 text-muted sm:text-base sm:leading-7">
                            {service.description}
                          </p>
                          <div className="mt-7 flex flex-wrap gap-2">
                            {["Внешность", "Ракурсы", "Consistency", "Character ID"].map(
                              (tag) => (
                                <span
                                  key={tag}
                                  className="rounded-full border border-black/[0.07] bg-white/65 px-3 py-1.5 text-[10px] font-semibold text-black/50"
                                >
                                  {tag}
                                </span>
                              ),
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                ) : isCollectionService ? (
                  <GlassCard className="group h-full overflow-hidden p-4 transition duration-500 hover:border-black/[0.14] hover:shadow-lift sm:p-6">
                    <div className="grid gap-7 md:grid-cols-[1.1fr_0.9fr] md:items-center lg:grid-cols-[1.18fr_0.82fr]">
                      <CollectionCarousel />
                      <div className="px-2 pb-4 sm:px-4 md:py-6 lg:px-8">
                        <div className="mt-2 md:mt-6">
                          <p className="text-xs font-bold text-black/25">02</p>
                          <h3 className="mt-2 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                            {service.title}
                          </h3>
                          <p className="mt-4 max-w-xl text-sm leading-6 text-muted sm:text-base sm:leading-7">
                            {service.description}
                          </p>
                          <div className="mt-7 flex flex-wrap gap-2">
                            {["Lookbook", "Campaign", "Lifestyle", "Catalog"].map(
                              (tag) => (
                                <span
                                  key={tag}
                                  className="rounded-full border border-black/[0.07] bg-white/65 px-3 py-1.5 text-[10px] font-semibold text-black/50"
                                >
                                  {tag}
                                </span>
                              ),
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                ) : isSocialService ? (
                  <GlassCard className="group h-full overflow-hidden p-4 transition duration-500 hover:border-black/[0.14] hover:shadow-lift sm:p-6">
                    <div className="grid gap-7 md:grid-cols-[0.92fr_1.08fr] md:items-center lg:grid-cols-[0.82fr_1.18fr]">
                      <SocialContentCarousel />
                      <div className="px-2 pb-4 sm:px-4 md:py-6 lg:px-8">
                        <div className="mt-2 md:mt-6">
                          <p className="text-xs font-bold text-black/25">03</p>
                          <h3 className="mt-2 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                            {service.title}
                          </h3>
                          <p className="mt-4 max-w-xl text-sm leading-6 text-muted sm:text-base sm:leading-7">
                            {service.description}
                          </p>
                          <div className="mt-7 flex flex-wrap gap-2">
                            {["Stories", "Reels", "UGC-style", "Ads"].map(
                              (tag) => (
                                <span
                                  key={tag}
                                  className="rounded-full border border-black/[0.07] bg-white/65 px-3 py-1.5 text-[10px] font-semibold text-black/50"
                                >
                                  {tag}
                                </span>
                              ),
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                ) : (
                  <GlassCard className="group h-full min-h-[270px] p-6 transition duration-500 hover:-translate-y-1 hover:border-black/[0.14] hover:shadow-lift sm:p-8">
                    <div className="flex items-start justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/[0.07] bg-white text-[#7566e5] shadow-sm">
                        <Icon aria-hidden="true" className="h-5 w-5" />
                      </span>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/[0.08] text-black/35 transition duration-300 group-hover:bg-ink group-hover:text-white">
                        <ArrowUpRight
                          aria-hidden="true"
                          className="h-4 w-4"
                        />
                      </span>
                    </div>
                    <div className="mt-16">
                      <p className="text-xs font-bold text-black/25">
                        0{index + 1}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold tracking-[-0.035em]">
                        {service.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-sm leading-6 text-muted">
                        {service.description}
                      </p>
                    </div>
                  </GlassCard>
                )}
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
