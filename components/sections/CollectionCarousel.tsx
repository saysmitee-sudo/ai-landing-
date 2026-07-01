"use client";

import { CollageCarousel } from "@/components/sections/CollageCarousel";

const collectionImages = [
  {
    src: "/collection-drop-01.png",
    alt: "Модель в черном bomber jacket и широких брюках",
    label: "Black bomber",
    position: "object-[50%_42%]",
  },
  {
    src: "/collection-drop-02.png",
    alt: "Модель в серой куртке и черных брюках",
    label: "Grey jacket",
    position: "object-[50%_44%]",
  },
  {
    src: "/collection-drop-03.png",
    alt: "Две модели в oversized лонгсливах и cargo-брюках",
    label: "Oversized duo",
    position: "object-[50%_43%]",
  },
  {
    src: "/collection-drop-04.png",
    alt: "Модель в denim jacket и темных cargo-брюках",
    label: "Denim look",
    position: "object-[50%_44%]",
  },
  {
    src: "/collection-drop-05.png",
    alt: "Модель в укороченной куртке и черных брюках",
    label: "Cropped jacket",
    position: "object-[50%_42%]",
  },
  {
    src: "/collection-drop-06.png",
    alt: "Модель в кожаной куртке и джинсах сидит на полу",
    label: "Leather denim",
    position: "object-[50%_43%]",
  },
  {
    src: "/collection-drop-07.png",
    alt: "Модель в графичной футболке и широких джинсах",
    label: "Graphic tee",
    position: "object-[50%_42%]",
  },
  {
    src: "/collection-drop-08.png",
    alt: "Две модели в верхней одежде и cargo-брюках",
    label: "Outerwear duo",
    position: "object-[50%_42%]",
  },
];

export function CollectionCarousel() {
  return (
    <CollageCarousel
      title="Серии изображений для коллекций"
      description="Одежда, обувь, аксессуары и lifestyle-сцены в единой визуальной логике бренда."
      slides={collectionImages}
      align="right"
      cardAspect="threeFour"
    />
  );
}
