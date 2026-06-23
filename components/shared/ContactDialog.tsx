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
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/30 p-4 backdrop-blur-md sm:p-6"
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
            className="relative my-auto w-full max-w-2xl overflow-hidden rounded-[30px] border border-white/50 bg-[#f8f8f6]/95 p-5 shadow-2xl backdrop-blur-3xl sm:p-8"
            initial={
              shouldReduceMotion ? false : { opacity: 0, y: 24, scale: 0.98 }
            }
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              aria-hidden="true"
              className="absolute -right-24 -top-28 h-64 w-64 rounded-full bg-gradient-to-br from-[#cfc4ff] to-[#b7d8ff] opacity-40 blur-3xl"
            />
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/70 text-black/60 transition hover:bg-white hover:text-black"
              aria-label="Закрыть форму"
            >
              <X aria-hidden="true" className="h-4 w-4" />
            </button>
            <div className="relative">
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#7465e7]">
                Новый проект
              </span>
              <h2
                id="contact-dialog-title"
                className="mt-3 pr-12 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl"
              >
                Расскажите о задаче
              </h2>
              <p className="mb-7 mt-3 max-w-xl text-sm leading-6 text-muted">
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
