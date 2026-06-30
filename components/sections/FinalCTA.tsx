import { MessageCircle } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { ContactForm } from "@/components/shared/ContactForm";

export function FinalCTA() {
  return (
    <section id="contact" className="border-t border-black/[0.08] bg-[#f8f8f6] py-14 sm:py-16 lg:py-20">
      <div className="page-container">
        <AnimatedSection>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-black/38">
                Заявка
              </p>
              <h2 className="mt-3 text-balance text-[clamp(2.15rem,5vw,5.2rem)] font-medium leading-[1.02] tracking-[-0.05em]">
                  Хотите увидеть, как ИИ-модель представит ваш бренд?
              </h2>
              <a
                href="https://t.me/flassystudio"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 border-b border-black pb-1 text-sm font-medium text-black transition hover:text-black/58"
              >
                <MessageCircle aria-hidden="true" className="h-4 w-4" />
                Написать в Telegram
              </a>
            </div>
            <div className="border-t border-black/[0.1] pt-7 lg:border-t-0 lg:pt-0">
              <div className="mb-7">
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-black/38">
                  Заявка на проект
                </p>
                <h3 className="mt-3 text-3xl font-medium tracking-[-0.04em]">
                  Расскажите, что нужно создать
                </h3>
              </div>
              <ContactForm compact />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
