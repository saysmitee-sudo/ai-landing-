import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { processSteps } from "@/data/site-content";

export function ProcessSection() {
  return (
    <section
      id="process"
      className="section-space relative overflow-hidden bg-[#121214] text-white"
    >
      <div className="page-container relative z-10">
        <AnimatedSection>
          <SectionHeading
            badge="Процесс"
            title="Как проходит работа"
            description="Прозрачный маршрут от первой идеи до готовых материалов. Вы участвуете в ключевых согласованиях и понимаете, что происходит на каждом этапе."
          />
        </AnimatedSection>
        <div className="relative mt-10 md:mt-12">
          <div className="absolute left-[31px] top-0 h-full w-px bg-white/10 lg:left-0 lg:top-[31px] lg:h-px lg:w-full" />
          <div className="grid gap-4 lg:grid-cols-6">
            {processSteps.map((step, index) => (
              <AnimatedSection key={step.number} delay={index * 0.07}>
                <article className="relative grid min-h-[190px] grid-cols-[64px_1fr] gap-4 lg:block lg:min-h-[310px]">
                  <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-[#171719] text-xs font-bold text-white/70 shadow-[0_0_0_8px_#121214]">
                    {step.number}
                  </span>
                  <div className="rounded-[24px] border border-white/10 bg-white/[0.045] p-5 lg:mt-8 lg:min-h-[205px] lg:p-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#a99cff]">
                      Этап {index + 1}
                    </p>
                    <h3 className="mt-3 text-lg font-semibold tracking-[-0.025em]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-xs leading-5 text-white/50">
                      {step.description}
                    </p>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
