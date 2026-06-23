import { ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { scenarios } from "@/data/site-content";

export function ScenariosSection() {
  return (
    <section className="section-space">
      <div className="page-container">
        <AnimatedSection>
          <SectionHeading
            badge="Сценарии"
            title="Что можно сделать для вашего бренда"
            description="Не просто отдельные картинки, а законченные решения под конкретную маркетинговую задачу."
          />
        </AnimatedSection>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {scenarios.map((scenario, index) => (
            <AnimatedSection key={scenario.title} delay={index * 0.08}>
              <article
                className={`group relative flex h-full min-h-[440px] flex-col overflow-hidden rounded-[30px] border border-black/[0.08] p-6 transition duration-500 hover:-translate-y-1 hover:shadow-lift sm:p-8 ${
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
                <div className="relative flex items-start justify-between">
                  <span
                    className={`text-xs font-bold ${index === 1 ? "text-white/35" : "text-black/25"}`}
                  >
                    {scenario.number}
                  </span>
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full border ${
                      index === 1
                        ? "border-white/15 bg-white/5 text-white"
                        : "border-black/10 bg-white/70"
                    }`}
                  >
                    <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                  </span>
                </div>
                <div className="relative mt-auto">
                  <p
                    className={`text-[10px] font-bold uppercase tracking-[0.16em] ${
                      index === 1 ? "text-[#afa4ff]" : "text-[#7566e5]"
                    }`}
                  >
                    {scenario.label}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.045em]">
                    {scenario.title}
                  </h3>
                  <p
                    className={`mt-4 text-sm leading-6 ${
                      index === 1 ? "text-white/55" : "text-muted"
                    }`}
                  >
                    {scenario.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
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
