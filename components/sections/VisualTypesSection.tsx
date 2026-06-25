import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { FloatingAccents } from "@/components/shared/FloatingAccents";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { visualTypes } from "@/data/site-content";

export function VisualTypesSection() {
  return (
    <section id="visuals" className="section-space relative overflow-hidden">
      <FloatingAccents labels={["Lookbook", "Ads", "UGC"]} />
      <div className="page-container relative z-10">
        <AnimatedSection>
          <SectionHeading
            badge="Возможности"
            title="От каталога до рекламной кампании"
            description="Один визуальный язык может работать во всех каналах — от карточки товара до большого имиджевого запуска."
          />
        </AnimatedSection>
        <div className="mt-8 grid gap-3 md:mt-10 sm:grid-cols-2 lg:grid-cols-5">
          {visualTypes.map((item, index) => {
            const Icon = item.icon!;
            return (
              <AnimatedSection
                key={item.title}
                delay={(index % 5) * 0.05}
                className={index === 0 || index === 6 ? "sm:col-span-2" : ""}
              >
                <article
                  className={`group relative h-full min-h-[154px] overflow-hidden rounded-[22px] border border-black/[0.08] p-4 transition duration-500 hover:-translate-y-1 hover:shadow-glass sm:min-h-[165px] ${
                    index === 0 || index === 6
                      ? "bg-gradient-to-br from-[#eeeaff] via-white to-[#e7f3ff]"
                      : "bg-white/70"
                  }`}
                >
                  <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br from-[#d9d0ff]/50 to-[#b8dcff]/40 blur-2xl transition duration-500 group-hover:scale-125" />
                  <span className="relative flex h-8 w-8 items-center justify-center rounded-xl border border-black/[0.06] bg-white/80 text-[#7566e5]">
                    <Icon aria-hidden="true" className="h-3.5 w-3.5" />
                  </span>
                  <div className="relative mt-5">
                    <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-black/25">
                      Format {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-1.5 text-[15px] font-semibold leading-tight tracking-[-0.025em] sm:text-base">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-[11px] leading-[1.45] text-muted">
                      {item.description}
                    </p>
                  </div>
                </article>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
