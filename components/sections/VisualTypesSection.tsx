import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { visualTypes } from "@/data/site-content";

export function VisualTypesSection() {
  return (
    <section id="visuals" className="section-space">
      <div className="page-container">
        <AnimatedSection>
          <SectionHeading
            badge="Возможности"
            title="От каталога до рекламной кампании"
            description="Один визуальный язык может работать во всех каналах — от карточки товара до большого имиджевого запуска."
          />
        </AnimatedSection>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {visualTypes.map((item, index) => {
            const Icon = item.icon!;
            return (
              <AnimatedSection
                key={item.title}
                delay={(index % 5) * 0.05}
                className={index === 0 || index === 6 ? "sm:col-span-2" : ""}
              >
                <article
                  className={`group relative h-full min-h-[230px] overflow-hidden rounded-[26px] border border-black/[0.08] p-5 transition duration-500 hover:-translate-y-1 hover:shadow-glass ${
                    index === 0 || index === 6
                      ? "bg-gradient-to-br from-[#eeeaff] via-white to-[#e7f3ff]"
                      : "bg-white/70"
                  }`}
                >
                  <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br from-[#d9d0ff]/50 to-[#b8dcff]/40 blur-2xl transition duration-500 group-hover:scale-125" />
                  <span className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-black/[0.06] bg-white/80 text-[#7566e5]">
                    <Icon aria-hidden="true" className="h-[18px] w-[18px]" />
                  </span>
                  <div className="relative mt-14">
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-black/25">
                      Format {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold tracking-[-0.025em]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-5 text-muted">
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
