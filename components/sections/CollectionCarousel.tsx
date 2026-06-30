"use client";

import { CollageCarousel } from "@/components/sections/CollageCarousel";

const collectionImages = [
  {
    src: "/collection-white-dress.jpg",
    alt: "Fashion-сет в белом платье",
    label: "Белое платье",
    position: "object-[48%_center]",
  },
  {
    src: "/collection-black-crouch.jpg",
    alt: "Fashion-сет в черном образе с сумкой",
    label: "Черный образ",
    position: "object-[50%_42%]",
  },
  {
    src: "/collection-black-lifestyle.jpg",
    alt: "Lifestyle-сет в черном образе",
    label: "Lifestyle-кадр",
    position: "object-center",
  },
  {
    src: "/collection-hoodie-portrait.jpg",
    alt: "Портретный fashion-сет в худи",
    label: "Портрет в худи",
    position: "object-[50%_35%]",
  },
  {
    src: "/collection-black-mini-dress.jpg",
    alt: "Fashion-сет в черном мини-платье",
    label: "Мини-платье",
    position: "object-center",
  },
  {
    src: "/collection-long-dress.jpg",
    alt: "Fashion-сет в длинном платье",
    label: "Длинное платье",
    position: "object-center",
  },
];

export function CollectionCarousel() {
  return (
    <CollageCarousel
      eyebrow="02 / Фото-сет"
      title="Серии изображений для коллекций"
      description="Одежда, обувь, аксессуары и lifestyle-сцены в единой визуальной логике бренда."
      slides={collectionImages}
      align="right"
    />
  );
}
