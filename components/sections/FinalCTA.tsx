import { MessageCircle, Sparkles } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { ContactForm } from "@/components/shared/ContactForm";
import { GradientBlob } from "@/components/shared/GradientBlob";

export function FinalCTA() {
  return (
    <section id="contact" className="section-space pt-5">
      <div className="page-container">
        <AnimatedSection>
          <div className="noise relative overflow-hidden rounded-[38px] bg-[#171719] px-5 py-10 text-white shadow-[0_40px_100px_rgba(30,24,61,0.22)] sm:px-8 sm:py-14 lg:px-14">
            <GradientBlob className="-right-28 -top-28 h-96 w-96 bg-[#7566e5]/65" />
            <GradientBlob
              className="-bottom-32 -left-24 h-96 w-96 bg-[#5f9ed1]/40"
              duration={12}
            />
            <div className="relative z-10 grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white/60 backdrop-blur-xl">
                  <Sparkles
                    aria-hidden="true"
                    className="h-3.5 w-3.5 text-[#b8adff]"
                  />
                  Начнем с идеи
                </span>
                <h2 className="mt-7 text-balance text-[clamp(2.2rem,4.5vw,4.3rem)] font-semibold leading-[1.02] tracking-[-0.055em]">
                  Хотите увидеть, как ИИ-модель представит ваш бренд?
                </h2>
                <p className="mt-6 max-w-xl text-base leading-7 text-white/55 md:text-lg">
                  Оставьте заявку — обсудим задачу, стиль бренда и предложим
                  формат работы под ваш бюджет.
                </p>
                <a
                  href="https://t.me/flassystudio"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <MessageCircle aria-hidden="true" className="h-4 w-4" />
                  Написать в Telegram
                </a>
              </div>
              <div className="rounded-[30px] border border-white/15 bg-white/[0.93] p-5 text-ink shadow-2xl backdrop-blur-2xl sm:p-7">
                <div className="mb-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#7566e5]">
                    Заявка на проект
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.035em]">
                    Расскажите, что нужно создать
                  </h3>
                </div>
                <ContactForm compact />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
