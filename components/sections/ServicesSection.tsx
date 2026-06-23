import { ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { GlassCard } from "@/components/shared/GlassCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { services } from "@/data/site-content";

export function ServicesSection() {
  return (
    <section id="services" className="section-space">
      <div className="page-container">
        <AnimatedSection>
          <SectionHeading
            badge="Что мы делаем"
            title="Создаем ИИ-моделей под задачи бренда"
            description="Разрабатываем виртуальных персонажей для рекламных кампаний, соцсетей, каталогов, lookbook-съемок и промо-материалов."
          />
        </AnimatedSection>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon!;
            return (
              <AnimatedSection key={service.title} delay={index * 0.07}>
                <GlassCard className="group h-full min-h-[270px] p-6 transition duration-500 hover:-translate-y-1 hover:border-black/[0.14] hover:shadow-lift sm:p-8">
                  <div className="flex items-start justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/[0.07] bg-white text-[#7566e5] shadow-sm">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/[0.08] text-black/35 transition duration-300 group-hover:bg-ink group-hover:text-white">
                      <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
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
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
