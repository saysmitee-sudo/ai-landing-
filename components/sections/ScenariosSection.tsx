import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { FloatingAccents } from "@/components/shared/FloatingAccents";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { scenarios } from "@/data/site-content";

export function ScenariosSection() {
  return (
    <section className="section-space relative overflow-hidden">
      <FloatingAccents labels={["Launch", "Social", "Ambassador"]} />
      <div className="page-container relative z-10">
        <AnimatedSection>
          <SectionHeading
            badge="Сценарии"
            title="Что можно сделать для вашего бренда"
            description="Не просто отдельные картинки, а законченные решения под конкретную маркетинговую задачу."
          />
        </AnimatedSection>
        <div className="mt-8 grid gap-4 md:mt-10 lg:grid-cols-3">
          {scenarios.map((scenario, index) => (
            <AnimatedSection key={scenario.title} delay={index * 0.08}>
              <article
                className={`group relative flex h-full min-h-[310px] flex-col overflow-hidden rounded-[28px] border border-black/[0.08] p-5 transition duration-500 hover:-translate-y-1 hover:shadow-lift sm:min-h-[330px] sm:p-6 ${
                  index === 1
                    ? "bg-[#151518] text-white"
                    : "bg-white/70"
                }`}
              >
                <div
                  className={`absolute -right-24 -top-20 h-64 w-64 rounded-full blur-3xl transition duration-700 group-hover:scale-125 ${
                    index === 0
                      ? "bg-[#ddd3ff]/65"
                      : index === 1
                        ? "bg-[#7667ea]/40"
                        : "bg-[#c7e5ff]/70"
                  }`}
                />
                <span
                  className={`relative text-xs font-bold ${index === 1 ? "text-white/35" : "text-black/25"}`}
                >
                  {scenario.number}
                </span>
                <div className="relative mt-8 sm:mt-10">
                  <p
                    className={`text-[10px] font-bold uppercase tracking-[0.16em] ${
                      index === 1 ? "text-[#afa4ff]" : "text-[#7566e5]"
                    }`}
                  >
                    {scenario.label}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.045em] sm:text-[1.7rem]">
                    {scenario.title}
                  </h3>
                  <p
                    className={`mt-3 text-sm leading-6 ${
                      index === 1 ? "text-white/55" : "text-muted"
                    }`}
                  >
                    {scenario.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {scenario.deliverables.map((item) => (
                      <span
                        key={item}
                        className={`rounded-full border px-3 py-1.5 text-[10px] font-semibold ${
                          index === 1
                            ? "border-white/10 bg-white/5 text-white/65"
                            : "border-black/[0.07] bg-white/70 text-black/55"
                        }`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
