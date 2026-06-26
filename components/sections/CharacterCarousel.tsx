"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const characterImages = [
  {
    src: "/character-front.jpg",
    alt: "Фронтальный портрет ИИ-персонажа",
    label: "Front",
    position: "object-center",
  },
  {
    src: "/character-profile.jpg",
    alt: "Профиль ИИ-персонажа",
    label: "Profile",
    position: "object-center",
  },
  {
    src: "/character-three-quarter.jpg",
    alt: "Портрет ИИ-персонажа в три четверти",
    label: "3/4",
    position: "object-center",
  },
  {
    src: "/character-full-body.jpg",
    alt: "ИИ-персонаж в полный рост",
    label: "Full body",
    position: "object-top",
  },
];

export function CharacterCarousel() {
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
        (current + step + characterImages.length) % characterImages.length,
    );
  };

  const activeImage = characterImages[activeIndex];

  return (
    <div className="relative">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-[#f2f2f0]">
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
              sizes="(max-width: 767px) 100vw, 520px"
              className={`object-cover ${activeImage.position}`}
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/45 to-transparent" />
        <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-black/20 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-xl">
          Character study
        </div>
        <div className="absolute bottom-4 left-4 text-white">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/65">
            View {String(activeIndex + 1).padStart(2, "0")}
          </p>
          <p className="mt-1 text-sm font-semibold">{activeImage.label}</p>
        </div>
        <div className="absolute bottom-4 right-4 flex gap-2">
          <button
            type="button"
            onClick={() => move(-1)}
            aria-label="Предыдущее фото персонажа"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/20 text-white backdrop-blur-xl transition hover:bg-black/35"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            aria-label="Следующее фото персонажа"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/20 text-white backdrop-blur-xl transition hover:bg-black/35"
          >
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-4 gap-2" aria-label="Выбор ракурса">
        {characterImages.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => showImage(index)}
            aria-label={`Показать ракурс: ${image.label}`}
            aria-pressed={activeIndex === index}
            className={`relative aspect-square overflow-hidden rounded-xl border-2 transition ${
              activeIndex === index
                ? "border-[#7566e5] opacity-100"
                : "border-transparent opacity-55 hover:opacity-85"
            }`}
          >
            <Image
              src={image.src}
              alt=""
              fill
              sizes="110px"
              className={`object-cover ${image.position}`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
