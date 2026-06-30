import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { comparisonRows } from "@/data/site-content";

export function ComparisonSection() {
  return (
    <section className="relative overflow-hidden border-t border-black/[0.08] bg-[#f8f8f6] py-14 sm:py-16 lg:py-20">
      <div className="page-container relative z-10">
        <AnimatedSection>
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-black/38">
              Сравнение
            </p>
            <h2 className="text-balance text-[clamp(2rem,4.6vw,4.7rem)] font-medium leading-[1.02] tracking-[-0.045em]">
              ИИ-модель не устает, не уезжает и всегда остается в стиле бренда
            </h2>
          </div>
        </AnimatedSection>
        <AnimatedSection className="mt-10 md:mt-12">
          <div className="border-y border-black/[0.1]">
            <div className="hidden grid-cols-[0.72fr_1fr_1fr] border-b border-black/[0.1] md:grid">
              <div className="py-4 pr-5 text-[10px] font-medium uppercase tracking-[0.16em] text-black/38">
                Критерий
              </div>
              <div className="border-l border-black/[0.08] px-5 py-4 text-[10px] font-medium uppercase tracking-[0.16em] text-black/38">
                Классическая съемка
              </div>
              <div className="border-l border-black/[0.08] px-5 py-4 text-[10px] font-medium uppercase tracking-[0.16em] text-black/80">
                ИИ-продакшн
              </div>
            </div>
            {comparisonRows.map((row) => (
              <div
                key={row.criterion}
                className="grid grid-cols-2 border-b border-black/[0.08] last:border-b-0 md:grid-cols-[0.72fr_1fr_1fr]"
              >
                <div className="col-span-2 pb-4 pt-6 text-lg font-medium tracking-[-0.025em] md:col-span-1 md:p-5 md:pl-0 md:text-base">
                  {row.criterion}
                </div>
                <div className="border-r border-black/[0.08] pb-6 pr-4 text-sm leading-6 text-black/54 md:border-l md:border-r-0 md:border-black/[0.08] md:p-5">
                  <span className="mb-3 block text-[10px] font-medium uppercase tracking-[0.14em] text-black/34 md:hidden">
                    Обычная
                  </span>
                  {row.classic}
                </div>
                <div className="pb-6 pl-4 text-sm font-medium leading-6 text-black md:border-l md:border-black/[0.08] md:p-5">
                  <span className="mb-3 block text-[10px] font-medium uppercase tracking-[0.14em] text-black/64 md:hidden">
                    AI
                  </span>
                  {row.ai}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
