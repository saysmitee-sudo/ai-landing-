import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { GradientBlob } from "@/components/shared/GradientBlob";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { benefits, speedItems } from "@/data/site-content";

export function BenefitsSection() {
  return (
    <section id="benefits" className="section-space relative overflow-hidden">
      <GradientBlob className="-left-44 top-24 h-96 w-96 bg-[#dcd4ff]/50" />
      <div className="page-container relative z-10">
        <AnimatedSection>
          <SectionHeading
            badge="Преимущества"
            title="Меньше затрат. Больше свободы. Быстрее результат."
          />
        </AnimatedSection>
        <div className="mt-8 grid gap-px overflow-hidden rounded-[32px] border border-black/[0.08] bg-black/[0.08] md:mt-10 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon!;
            return (
              <AnimatedSection
                key={benefit.title}
                delay={index * 0.05}
                className="h-full"
              >
                <article className="group h-full min-h-[190px] bg-[#fbfbfa]/95 p-5 transition duration-500 hover:bg-white sm:min-h-[205px] sm:p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#eee9ff] to-[#e7f3ff] text-[#7566e5] transition duration-500 group-hover:scale-110">
                    <Icon aria-hidden="true" className="h-[18px] w-[18px]" />
                  </span>
                  <h3 className="mt-6 text-lg font-semibold tracking-[-0.03em] sm:text-xl">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {benefit.description}
                  </p>
                </article>
              </AnimatedSection>
            );
          })}
        </div>
        <AnimatedSection className="mt-5">
          <div className="glass grid gap-3 rounded-[28px] p-4 sm:grid-cols-3 sm:p-5">
            {speedItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-2xl bg-white/60 px-4 py-4"
                >
                  <Icon
                    aria-hidden="true"
                    className="h-4 w-4 text-[#7566e5]"
                  />
                  <span className="text-sm font-semibold">{item.label}</span>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
