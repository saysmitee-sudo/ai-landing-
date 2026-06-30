"use client";

import { CollageCarousel } from "@/components/sections/CollageCarousel";

const appearanceImages = [
  {
    src: "/appearance-curly-front.jpg",
    alt: "Портрет AI-модели с кудрявыми волосами",
    label: "Кудри",
    position: "object-center",
  },
  {
    src: "/appearance-soft-curls.jpg",
    alt: "Портрет AI-модели с мягкими локонами",
    label: "Мягкие локоны",
    position: "object-center",
  },
  {
    src: "/appearance-volume-curls.jpg",
    alt: "Портрет AI-модели с объемными волосами",
    label: "Объем",
    position: "object-center",
  },
  {
    src: "/appearance-straight-bangs.jpg",
    alt: "Портрет AI-модели с прямыми волосами",
    label: "Минималистичный образ",
    position: "object-center",
  },
];

export function AppearanceCarousel() {
  return (
    <CollageCarousel
      eyebrow="04 / Вариативность"
      title="Типаж меняется под аудиторию"
      description="Можно настраивать возраст, волосы, макияж, характер и визуальную подачу без новой съемочной смены."
      slides={appearanceImages}
      align="right"
    />
  );
}
