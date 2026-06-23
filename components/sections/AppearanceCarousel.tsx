"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const appearanceImages = [
  {
    src: "/appearance-curly-front.png",
    alt: "Портрет ИИ-модели с кудрявыми волосами",
    label: "Curly beauty",
    position: "object-center",
  },
  {
    src: "/appearance-soft-curls.png",
    alt: "Портрет ИИ-модели с мягкими локонами",
    label: "Soft curls",
    position: "object-center",
  },
  {
    src: "/appearance-volume-curls.png",
    alt: "Портрет ИИ-модели с объемными волосами",
    label: "Natural volume",
    position: "object-center",
  },
  {
    src: "/appearance-straight-bangs.png",
    alt: "Портрет ИИ-модели с прямыми волосами",
    label: "Clean minimal",
    position: "object-center",
  },
];

export function AppearanceCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const shouldReduceMotion = useReducedMotion();

  const showImage = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const move = (step: number) => {
    setDirection(step);
    setActiveIndex(
      (current) =>
        (current + step + appearanceImages.length) % appearanceImages.length,
    );
  };

  const activeImage = appearanceImages[activeIndex];

  return (
    <div className="relative">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-[#f0efed] shadow-[0_30px_70px_rgba(17,17,17,0.12)]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={activeImage.src}
            custom={direction}
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, x: direction > 0 ? 28 : -28, scale: 1.02 }
            }
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, x: direction > 0 ? -28 : 28, scale: 0.99 }
            }
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              priority={activeIndex === 0}
              sizes="(max-width: 767px) 100vw, 540px"
              className={`object-cover ${activeImage.position}`}
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/48 via-black/18 to-transparent" />
        <div className="absolute left-4 top-4 rounded-full border border-white/35 bg-black/20 px-3.5 py-2 text-[9px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-xl sm:left-6 sm:top-6">
          Appearance lab
        </div>
        <div className="absolute bottom-5 left-4 text-white sm:left-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/65">
            Look {String(activeIndex + 1).padStart(2, "0")}
          </p>
          <p className="mt-1 text-base font-semibold">{activeImage.label}</p>
        </div>
        <div className="absolute bottom-5 right-4 flex gap-2 sm:right-6">
          <button
            type="button"
            onClick={() => move(-1)}
            aria-label="Предыдущее фото внешности"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/20 text-white backdrop-blur-xl transition hover:bg-black/35 sm:h-12 sm:w-12"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            aria-label="Следующее фото внешности"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/20 text-white backdrop-blur-xl transition hover:bg-black/35 sm:h-12 sm:w-12"
          >
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div
        className="mt-3 grid grid-cols-4 gap-2 sm:mt-4 sm:gap-3"
        aria-label="Выбор варианта внешности"
      >
        {appearanceImages.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => showImage(index)}
            aria-label={`Показать вариант: ${image.label}`}
            aria-pressed={activeIndex === index}
            className={`relative aspect-square overflow-hidden rounded-2xl border-2 bg-white transition ${
              activeIndex === index
                ? "border-[#7566e5] opacity-100"
                : "border-transparent opacity-55 hover:opacity-85"
            }`}
          >
            <Image
              src={image.src}
              alt=""
              fill
              sizes="120px"
              className={`object-cover ${image.position}`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
