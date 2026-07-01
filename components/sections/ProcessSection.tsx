import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { processSteps } from "@/data/site-content";

export function ProcessSection() {
  return (
    <section
      id="process"
      className="relative overflow-hidden border-t border-black/[0.08] bg-[#111] py-14 text-white sm:py-16 lg:py-20"
    >
      <div className="page-container relative z-10">
        <AnimatedSection>
          <SectionHeading
            title="Как проходит работа"
            description="Прозрачный маршрут от первой идеи до готовых материалов. Вы участвуете в ключевых согласованиях и понимаете, что происходит на каждом этапе."
          />
        </AnimatedSection>
        <div className="relative mt-10 border-y border-white/12 md:mt-12">
          <div className="grid lg:grid-cols-6">
            {processSteps.map((step, index) => (
              <AnimatedSection key={step.number} delay={index * 0.07}>
                <article className="relative min-h-[190px] border-b border-white/10 py-6 lg:min-h-[310px] lg:border-b-0 lg:border-r lg:px-5">
                  <div className="lg:min-h-[205px]">
                    <h3 className="text-lg font-medium tracking-[-0.025em]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-xs leading-5 text-white/52">
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
