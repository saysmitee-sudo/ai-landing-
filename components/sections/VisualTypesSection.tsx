import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { visualTypes } from "@/data/site-content";

export function VisualTypesSection() {
  return (
    <section
      id="visuals"
      className="relative overflow-hidden border-t border-black/[0.08] bg-[#f8f8f6] py-14 sm:py-16 lg:py-20"
    >
      <div className="page-container relative z-10">
        <AnimatedSection>
          <SectionHeading
            title="От каталога до рекламной кампании"
          />
        </AnimatedSection>
        <div className="mt-8 grid border-y border-black/[0.1] md:mt-10 sm:grid-cols-2 lg:grid-cols-5">
          {visualTypes.map((item, index) => {
            const Icon = item.icon!;
            return (
              <AnimatedSection
                key={item.title}
                delay={(index % 5) * 0.05}
                className={index === 0 || index === 6 ? "sm:col-span-2" : ""}
              >
                <article
                  className="group relative h-full min-h-[154px] border-b border-black/[0.08] py-5 transition duration-300 hover:bg-black/[0.025] sm:min-h-[165px] sm:border-r sm:px-4 lg:px-5"
                >
                  <span className="relative flex h-8 w-8 items-center justify-center text-black/70">
                    <Icon aria-hidden="true" className="h-3.5 w-3.5" />
                  </span>
                  <div className="relative mt-5">
                    <h3 className="text-[15px] font-medium leading-tight tracking-[-0.025em] sm:text-base">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[11px] leading-[1.45] text-black/52">
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
