import { Check, Minus } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { FloatingAccents } from "@/components/shared/FloatingAccents";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { comparisonRows } from "@/data/site-content";

export function ComparisonSection() {
  return (
    <section className="section-space relative overflow-hidden">
      <FloatingAccents labels={["No studio", "Any location", "Fast edits"]} reverse />
      <div className="page-container relative z-10">
        <AnimatedSection>
          <SectionHeading
            badge="Сравнение"
            title="ИИ-модель не устает, не уезжает и всегда остается в стиле бренда"
            description="Сравниваем не творческий результат, а организационную модель производства контента."
          />
        </AnimatedSection>
        <AnimatedSection className="mt-8 md:mt-10">
          <div className="grid gap-3 md:hidden">
            {comparisonRows.map((row) => (
              <article
                key={row.criterion}
                className="overflow-hidden rounded-[24px] border border-black/[0.08] bg-white/70 shadow-glass"
              >
                <h3 className="px-4 py-4 text-lg font-semibold tracking-[-0.035em]">
                  {row.criterion}
                </h3>
                <div className="grid grid-cols-2 border-t border-black/[0.07]">
                  <div className="min-w-0 p-4 text-sm leading-5 text-muted">
                    <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-black/35">
                      <Minus
                        aria-hidden="true"
                        className="h-3.5 w-3.5 shrink-0 text-black/25"
                      />
                      Обычная
                    </div>
                    <p>{row.classic}</p>
                  </div>
                  <div className="min-w-0 border-l border-black/[0.07] bg-gradient-to-br from-[#f1edff]/80 to-[#edf7ff]/80 p-4 text-sm font-semibold leading-5">
                    <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#7566e5]">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#7566e5] text-white">
                        <Check aria-hidden="true" className="h-2.5 w-2.5" />
                      </span>
                      AI
                    </div>
                    <p>{row.ai}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="hidden overflow-hidden rounded-[30px] border border-black/[0.08] bg-white/65 shadow-glass md:block">
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
