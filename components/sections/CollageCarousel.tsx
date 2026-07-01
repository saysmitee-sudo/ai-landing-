"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";

export type CollageSlide = {
  src: string;
  alt: string;
  label: string;
  position?: string;
  fit?: "cover" | "contain";
};

type CollageCarouselProps = {
  title: string;
  description: string;
  slides: CollageSlide[];
  align?: "left" | "right";
  cardAspect?: "tall" | "threeFour";
};

export function CollageCarousel({
  title,
  description,
  slides,
  align = "left",
  cardAspect = "tall",
}: CollageCarouselProps) {
  const [activePage, setActivePage] = useState(0);
  const [direction, setDirection] = useState(1);
  const shouldReduceMotion = useReducedMotion();

  const pages = useMemo(() => {
    const chunks: CollageSlide[][] = [];

    for (let index = 0; index < slides.length; index += 2) {
      chunks.push(slides.slice(index, index + 2));
    }

    return chunks;
  }, [slides]);

  const pageCount = pages.length;
  const activeSlides = pages[activePage] ?? [];

  if (pageCount === 0) {
    return null;
  }

  const move = (step: number) => {
    setDirection(step);
    setActivePage((current) => (current + step + pageCount) % pageCount);
  };

  const showPage = (index: number) => {
    setDirection(index > activePage ? 1 : -1);
    setActivePage(index);
  };

  const textAlignment =
    align === "right" ? "items-end text-right lg:order-2" : "items-start text-left";
  const navigationAlignment = align === "right" ? "self-end" : "self-start";
  const gridColumns =
    align === "right"
      ? "lg:grid-cols-[minmax(0,1fr)_minmax(260px,0.36fr)] xl:grid-cols-[minmax(0,1fr)_minmax(300px,0.32fr)]"
      : "lg:grid-cols-[minmax(260px,0.36fr)_minmax(0,1fr)] xl:grid-cols-[minmax(300px,0.32fr)_minmax(0,1fr)]";
  const aspectClass = cardAspect === "threeFour" ? "aspect-[3/4]" : "aspect-[4/6]";

  return (
    <section className="relative overflow-hidden bg-[#f8f8f6] py-12 text-black sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1440px] px-3 sm:px-8 lg:px-10">
        <div
          className={`grid items-center gap-7 lg:gap-10 xl:gap-12 ${gridColumns}`}
        >
          <div className={`flex flex-col ${textAlignment}`}>
            <h2 className="max-w-[420px] text-balance text-[clamp(1.55rem,3.2vw,2.65rem)] font-medium leading-[1.02]">
              {title}
            </h2>
            <p className="mt-4 max-w-[360px] text-sm leading-6 text-black/56">
              {description}
            </p>
            {pageCount > 1 ? (
              <div
                className={`mt-6 inline-flex items-center gap-2.5 text-black/58 ${navigationAlignment}`}
                aria-label="Навигация по коллажу"
              >
                <button
                  type="button"
                  onClick={() => move(-1)}
                  aria-label="Предыдущий коллаж"
                  className="grid h-7 w-7 shrink-0 place-items-center text-black/46 transition hover:-translate-x-0.5 hover:text-black"
                >
                  <ArrowLeft
                    aria-hidden="true"
                    className="pointer-events-none h-3.5 w-3.5"
                    strokeWidth={1.8}
                  />
                </button>
                <div className="flex h-7 items-center gap-2">
                  {pages.map((page, index) => (
                    <button
                      type="button"
                      key={page.map((slide) => slide.src).join("-")}
                      onClick={() => showPage(index)}
                      aria-label={`Показать страницу ${index + 1} из ${pageCount}`}
                      aria-current={index === activePage ? "true" : undefined}
                      data-collage-page={index}
                      className={`group relative z-10 flex h-7 items-center justify-center transition-all ${
                        index === activePage ? "w-12" : "w-3.5"
                      }`}
                    >
                      <span
                        className={`pointer-events-none block h-2 rounded-full transition-all duration-300 ${
                          index === activePage
                            ? "w-12 bg-black/80"
                            : "w-2 bg-black/30 group-hover:bg-black/45"
                        }`}
                      />
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => move(1)}
                  aria-label="Следующий коллаж"
                  className="grid h-7 w-7 shrink-0 place-items-center text-black/46 transition hover:translate-x-0.5 hover:text-black"
                >
                  <ArrowRight
                    aria-hidden="true"
                    className="pointer-events-none h-3.5 w-3.5"
                    strokeWidth={1.8}
                  />
                </button>
              </div>
            ) : null}
          </div>

          <div className={align === "right" ? "lg:order-1" : ""}>
            <AnimatePresence initial={false} mode="wait" custom={direction}>
              <motion.div
                key={activePage}
                custom={direction}
                initial={
                  shouldReduceMotion
                    ? false
                    : { opacity: 0, x: direction > 0 ? 28 : -28, y: 10 }
                }
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, x: direction > 0 ? -28 : 28, y: 10 }
                }
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-2 gap-2.5 sm:gap-4 md:gap-5 xl:gap-6"
                aria-live="polite"
              >
                {activeSlides.map((slide, index) => (
                  <motion.article
                    key={slide.src}
                    whileHover={shouldReduceMotion ? undefined : { y: -6 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className={`group relative overflow-hidden ${
                      slide.fit === "contain" ? "bg-white" : "bg-black"
                    } ${
                      index === 0
                        ? aspectClass
                        : `mt-7 ${aspectClass} sm:mt-12`
                    }`}
                  >
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      sizes="(min-width: 1280px) 42vw, (min-width: 1024px) 38vw, (min-width: 640px) 46vw, 100vw"
                      className={`${
                        slide.fit === "contain" ? "object-contain" : "object-cover"
                      } transition duration-700 ease-out group-hover:scale-[1.04] ${
                        slide.position ?? "object-center"
                      }`}
                    />
                    <div className="absolute inset-0 bg-black/18" />
                  </motion.article>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
