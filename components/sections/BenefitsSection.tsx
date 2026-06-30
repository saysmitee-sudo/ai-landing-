import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { benefits, speedItems } from "@/data/site-content";

export function BenefitsSection() {
  return (
    <section
      id="benefits"
      className="relative overflow-hidden border-t border-black/[0.08] bg-[#f8f8f6] py-14 sm:py-16 lg:py-20"
    >
      <div className="page-container relative z-10">
        <AnimatedSection>
          <SectionHeading
            badge="Преимущества"
            title="Меньше затрат. Больше свободы. Быстрее результат."
          />
        </AnimatedSection>
        <div className="mt-8 grid border-y border-black/[0.1] md:mt-10 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon!;
            return (
              <AnimatedSection
                key={benefit.title}
                delay={index * 0.05}
                className="h-full"
              >
                <article className="group h-full min-h-[190px] border-b border-black/[0.08] p-5 transition duration-300 hover:bg-black/[0.025] md:border-r sm:min-h-[205px] sm:p-6">
                  <span className="flex h-10 w-10 items-center justify-center text-black/70 transition duration-300 group-hover:text-black">
                    <Icon aria-hidden="true" className="h-[18px] w-[18px]" />
                  </span>
                  <h3 className="mt-6 text-lg font-medium tracking-[-0.03em] sm:text-xl">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-black/54">
                    {benefit.description}
                  </p>
                </article>
              </AnimatedSection>
            );
          })}
        </div>
        <AnimatedSection className="mt-5">
          <div className="grid border-y border-black/[0.1] sm:grid-cols-3">
            {speedItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-3 border-b border-black/[0.08] py-4 sm:border-b-0 sm:border-r sm:px-5"
                >
                  <Icon aria-hidden="true" className="h-4 w-4 text-black/62" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
