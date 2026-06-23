import { Check } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { audience } from "@/data/site-content";

export function AudienceSection() {
  return (
    <section className="section-space">
      <div className="page-container">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <AnimatedSection className="lg:sticky lg:top-28">
            <SectionHeading
              badge="Для кого"
              title="Для брендов, которым нужен постоянный визуальный контент"
            />
            <p className="body-copy mt-6">
              Особенно полезно, если нужно быстро тестировать визуалы, запускать
              коллекции, вести соцсети или создавать рекламу без большого
              продакшн-бюджета.
            </p>
            <div className="mt-8 rounded-[24px] border border-black/[0.08] bg-white/60 p-5">
              <div className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink text-white">
                  <Check aria-hidden="true" className="h-3.5 w-3.5" />
                </span>
                <p className="text-sm leading-6 text-black/65">
                  Подстраиваем эстетику под бренд — от clean beauty до
                  экспериментального streetwear.
                </p>
              </div>
            </div>
          </AnimatedSection>
          <div className="grid gap-3 sm:grid-cols-2">
            {audience.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.label} delay={(index % 2) * 0.06}>
                  <div className="group flex min-h-[116px] items-center gap-4 rounded-[24px] border border-black/[0.08] bg-white/65 p-5 transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-glass">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#f1eeff] text-[#7566e5] transition group-hover:rotate-3">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-black/25">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-1 font-semibold tracking-[-0.02em]">
                        {item.label}
                      </h3>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
