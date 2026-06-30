"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ContactForm } from "@/components/shared/ContactForm";

export function ContactDialog() {
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleOpen = () => setOpen(true);
    window.addEventListener("open-contact-form", handleOpen);
    return () => window.removeEventListener("open-contact-form", handleOpen);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.setTimeout(() => closeButtonRef.current?.focus(), 30);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/25 p-4 backdrop-blur-sm sm:p-6"
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-dialog-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setOpen(false);
          }}
        >
          <motion.div
            className="relative my-auto w-full max-w-2xl overflow-hidden border border-black/[0.1] bg-[#f8f8f6] p-5 sm:p-8"
            initial={
              shouldReduceMotion ? false : { opacity: 0, y: 24, scale: 0.98 }
            }
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-5 top-5 z-10 flex h-8 w-8 items-center justify-center text-black/58 transition hover:text-black"
              aria-label="Закрыть форму"
            >
              <X aria-hidden="true" className="h-4 w-4" />
            </button>
            <div className="relative">
              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-black/38">
                Новый проект
              </span>
              <h2
                id="contact-dialog-title"
                className="mt-3 pr-12 text-3xl font-medium tracking-[-0.04em] sm:text-4xl"
              >
                Расскажите о задаче
              </h2>
              <p className="mb-7 mt-3 max-w-xl text-sm leading-6 text-black/56">
                Коротко опишите бренд и желаемый результат. Мы предложим
                подходящий формат и следующий шаг.
              </p>
              <ContactForm compact />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
