import { Check, Minus } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { comparisonRows } from "@/data/site-content";

export function ComparisonSection() {
  return (
    <section className="section-space">
      <div className="page-container">
        <AnimatedSection>
          <SectionHeading
            badge="Сравнение"
            title="ИИ-модель не устает, не уезжает и всегда остается в стиле бренда"
            description="Сравниваем не творческий результат, а организационную модель производства контента."
          />
        </AnimatedSection>
        <AnimatedSection className="mt-12">
          <div className="overflow-hidden rounded-[30px] border border-black/[0.08] bg-white/65 shadow-glass">
            <div className="hidden grid-cols-[0.7fr_1fr_1fr] border-b border-black/[0.08] bg-white/80 md:grid">
              <div className="p-5 text-xs font-bold uppercase tracking-[0.14em] text-black/35">
                Критерий
              </div>
              <div className="border-l border-black/[0.08] p-5 text-sm font-semibold">
                Классическая съемка
              </div>
              <div className="border-l border-black/[0.08] bg-gradient-to-r from-[#f1edff] to-[#edf7ff] p-5 text-sm font-semibold">
                ИИ-продакшн
              </div>
            </div>
            {comparisonRows.map((row) => (
              <div
                key={row.criterion}
                className="grid border-b border-black/[0.07] last:border-b-0 md:grid-cols-[0.7fr_1fr_1fr]"
              >
                <div className="bg-black/[0.018] p-4 text-sm font-semibold md:bg-transparent md:p-5">
                  {row.criterion}
                </div>
                <div className="flex items-center gap-3 px-4 pb-4 text-sm text-muted md:border-l md:border-black/[0.08] md:p-5">
                  <Minus
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 text-black/25"
                  />
                  <span>
                    <span className="mr-2 text-[10px] font-bold uppercase tracking-[0.12em] text-black/30 md:hidden">
                      Обычная:
                    </span>
                    {row.classic}
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-gradient-to-r from-[#f1edff]/75 to-[#edf7ff]/75 p-4 text-sm font-semibold md:border-l md:border-black/[0.08] md:p-5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7566e5] text-white">
                    <Check aria-hidden="true" className="h-3 w-3" />
                  </span>
                  <span>
                    <span className="mr-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#7566e5] md:hidden">
                      AI:
                    </span>
                    {row.ai}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
