"use client";

import { CollageCarousel } from "@/components/sections/CollageCarousel";
import type { CollageSlide } from "@/components/sections/CollageCarousel";

const characterImages: CollageSlide[] = [
  {
    src: "/character-upgrade-front.jpg",
    alt: "Фронтальный портрет AI-модели",
    label: "Фронтальный портрет",
    position: "object-[50%_44%]",
  },
  {
    src: "/character-upgrade-profile.jpg",
    alt: "Профиль AI-модели",
    label: "Профиль",
    position: "object-[50%_44%]",
  },
  {
    src: "/character-upgrade-profile-wide.jpg",
    alt: "Портрет AI-модели в три четверти",
    label: "Три четверти",
    position: "object-[50%_44%]",
  },
  {
    src: "/character-upgrade-full-body.png",
    alt: "AI-модель в полный рост",
    label: "Полный рост",
    position: "object-center",
    fit: "contain",
  },
];

export function CharacterCarousel() {
  return (
    <CollageCarousel
      title="Персонаж под стиль бренда"
      description="Стабильная внешность, настроение и подача для рекламных кампаний, каталога и социальных сетей."
      slides={characterImages}
    />
  );
}
