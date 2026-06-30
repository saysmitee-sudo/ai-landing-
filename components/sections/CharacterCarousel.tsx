"use client";

import { CollageCarousel } from "@/components/sections/CollageCarousel";

const characterImages = [
  {
    src: "/character-front.jpg",
    alt: "Фронтальный портрет AI-модели",
    label: "Фронтальный портрет",
    position: "object-center",
  },
  {
    src: "/character-profile.jpg",
    alt: "Профиль AI-модели",
    label: "Профиль",
    position: "object-center",
  },
  {
    src: "/character-three-quarter.jpg",
    alt: "Портрет AI-модели в три четверти",
    label: "Три четверти",
    position: "object-center",
  },
  {
    src: "/character-full-body.jpg",
    alt: "AI-модель в полный рост",
    label: "Полный рост",
    position: "object-top",
  },
];

export function CharacterCarousel() {
  return (
    <CollageCarousel
      eyebrow="01 / AI-модель"
      title="Персонаж под стиль бренда"
      description="Стабильная внешность, настроение и подача для рекламных кампаний, каталога и социальных сетей."
      slides={characterImages}
    />
  );
}
