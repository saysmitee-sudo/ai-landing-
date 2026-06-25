import { Check, Sparkles } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { CTAButton } from "@/components/shared/CTAButton";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { packages } from "@/data/site-content";

export function PackagesSection() {
  return (
    <section className="section-space" id="packages">
      <div className="page-container">
        <AnimatedSection>
          <SectionHeading
            badge="Форматы работы"
            title="Можно начать с одного сета или собрать полноценную кампанию"
            description="Финальный состав проекта определяем после брифа — без лишних услуг и непрозрачных пакетов."
          />
        </AnimatedSection>
        <div className="mt-8 grid items-stretch gap-4 md:mt-10 lg:grid-cols-3">
          {packages.map((item, index) => (
            <AnimatedSection key={item.name} delay={index * 0.08}>
              <article
                className={`relative flex h-full min-h-[510px] flex-col overflow-hidden rounded-[30px] border p-6 sm:p-8 ${
                  item.featured
                    ? "border-[#7566e5]/30 bg-[#171719] text-white shadow-[0_30px_80px_rgba(38,30,89,0.22)]"
                    : "border-black/[0.08] bg-white/70"
                }`}
              >
                {item.featured ? (
                  <>
                    <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#7566e5]/45 blur-3xl" />
                    <span className="relative mb-8 flex w-fit items-center gap-1.5 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white/75">
                      <Sparkles aria-hidden="true" className="h-3 w-3" />
                      Частый выбор
                    </span>
                  </>
                ) : (
                  <div className="mb-8 h-[27px]" />
                )}
                <div className="relative">
                  <p
                    className={`text-xs font-bold uppercase tracking-[0.14em] ${
                      item.featured ? "text-[#afa4ff]" : "text-[#7566e5]"
                    }`}
                  >
                    {item.subtitle}
                  </p>
                  <h3 className="mt-3 text-4xl font-semibold tracking-[-0.05em]">
                    {item.name}
                  </h3>
                  <p
                    className={`mt-4 min-h-[72px] text-sm leading-6 ${
                      item.featured ? "text-white/55" : "text-muted"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
                <ul className="relative mt-8 grid gap-3">
                  {item.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-center gap-3 text-sm ${
                        item.featured ? "text-white/75" : "text-black/70"
                      }`}
                    >
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          item.featured
                            ? "bg-white/10 text-[#afa4ff]"
                            : "bg-[#eeeaff] text-[#7566e5]"
                        }`}
                      >
                        <Check aria-hidden="true" className="h-3 w-3" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <CTAButton
                  openContact
                  variant={item.featured ? "light" : "secondary"}
                  className="relative mt-auto w-full"
                >
                  Обсудить {item.name}
                </CTAButton>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
