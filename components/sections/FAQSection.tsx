"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { faqs } from "@/data/site-content";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="faq" className="relative overflow-hidden border-t border-black/[0.08] bg-[#f8f8f6] py-14 sm:py-16 lg:py-20">
      <div className="page-container relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-14">
          <AnimatedSection>
            <div className="flex max-w-3xl flex-col items-start">
              <h2 className="text-balance text-[clamp(2rem,4.4vw,4.4rem)] font-medium leading-[1.02] tracking-[-0.045em]">
                Частые вопросы
              </h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-black/56 md:text-lg md:leading-8">
                Если вашего вопроса нет в списке, оставьте заявку — коротко
                разберем задачу и подскажем возможный формат.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="border-y border-black/[0.1]">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                const answerId = `faq-answer-${index}`;

                return (
                  <div
                    key={faq.question}
                    className="border-b border-black/[0.08] last:border-0"
                  >
                    <button
                      type="button"
                      className="flex w-full items-start justify-between gap-6 py-6 text-left"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                    >
                      <span className="max-w-[720px] text-xl font-medium leading-tight tracking-[-0.03em] sm:text-2xl">
                        {faq.question}
                      </span>
                      <span
                        className="shrink-0 text-2xl font-light leading-none text-black/58 transition duration-300"
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          id={answerId}
                          initial={
                            shouldReduceMotion
                              ? false
                              : { height: 0, opacity: 0 }
                          }
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="max-w-2xl pb-7 pr-10 text-base leading-7 text-black/56">
                            {faq.answer}
                          </p>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
