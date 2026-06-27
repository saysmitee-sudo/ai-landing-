"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { faqs } from "@/data/site-content";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="faq" className="section-space relative overflow-hidden">
      <div className="page-container relative z-10">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-10">
          <AnimatedSection>
            <SectionHeading
              badge="FAQ"
              title="Частые вопросы"
              description="Если вашего вопроса нет в списке, оставьте заявку — коротко разберем задачу и подскажем возможный формат."
            />
          </AnimatedSection>
          <AnimatedSection>
            <div className="overflow-hidden rounded-[30px] border border-black/[0.08] bg-white/65 px-5 sm:px-7">
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
                      className="flex w-full items-center justify-between gap-6 py-6 text-left sm:py-7"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                    >
                      <span className="text-base font-semibold tracking-[-0.02em] sm:text-lg">
                        {faq.question}
                      </span>
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition duration-300 ${
                          isOpen
                            ? "rotate-45 border-black bg-ink text-white"
                            : "border-black/10 bg-white/70 text-black/55"
                        }`}
                      >
                        <Plus aria-hidden="true" className="h-4 w-4" />
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
                          <p className="max-w-2xl pb-7 pr-10 text-sm leading-6 text-muted">
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
