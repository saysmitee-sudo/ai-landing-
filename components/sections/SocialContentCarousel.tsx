"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const socialImages = [
  {
    src: "/social-mirror-white.jpg",
    alt: "UGC-style фото для соцсетей в зеркале",
    label: "Mirror story",
    meta: "Stories",
    position: "object-center",
  },
  {
    src: "/social-elevator-lace.jpg",
    alt: "Вертикальный fashion-контент для Reels",
    label: "Reels frame",
    meta: "Reels",
    position: "object-center",
  },
  {
    src: "/social-mirror-activewear.jpg",
    alt: "Контент для соцсетей в activewear-образе",
    label: "Daily post",
    meta: "Post",
    position: "object-center",
  },
];

export function SocialContentCarousel() {
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
      (current) => (current + step + socialImages.length) % socialImages.length,
    );
  };

  const activeImage = socialImages[activeIndex];

  return (
    <div className="relative">
      <div className="relative mx-auto aspect-[9/13] max-h-[620px] overflow-hidden rounded-[28px] bg-[#211c18] shadow-[0_28px_75px_rgba(17,17,17,0.16)]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={activeImage.src}
            custom={direction}
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, x: direction > 0 ? 26 : -26, scale: 1.02 }
            }
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, x: direction > 0 ? -26 : 26, scale: 0.99 }
            }
            transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              sizes="(max-width: 767px) 100vw, 430px"
              className={`object-cover ${activeImage.position}`}
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/58 via-black/18 to-transparent" />
        <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-black/20 px-3.5 py-2 text-[9px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-xl">
          Social content
        </div>
        <div className="absolute right-4 top-4 rounded-full border border-white/30 bg-white/15 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-xl">
          {activeImage.meta}
        </div>
        <div className="absolute bottom-5 left-4 text-white sm:left-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/65">
            Frame {String(activeIndex + 1).padStart(2, "0")}
          </p>
          <p className="mt-1 text-base font-semibold">{activeImage.label}</p>
        </div>
        <div className="absolute bottom-5 right-4 flex gap-2 sm:right-5">
          <button
            type="button"
            onClick={() => move(-1)}
            aria-label="Предыдущее фото для соцсетей"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/25 text-white backdrop-blur-xl transition hover:bg-black/40"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            aria-label="Следующее фото для соцсетей"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/25 text-white backdrop-blur-xl transition hover:bg-black/40"
          >
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div
        className="mt-3 grid grid-cols-3 gap-2 sm:gap-3"
        aria-label="Выбор контента для соцсетей"
      >
        {socialImages.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => showImage(index)}
            aria-label={`Показать social-визуал: ${image.label}`}
            aria-pressed={activeIndex === index}
            className={`relative aspect-[4/5] overflow-hidden rounded-2xl border-2 bg-white transition ${
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
