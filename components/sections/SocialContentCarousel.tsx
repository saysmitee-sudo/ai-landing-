"use client";

import { CollageCarousel } from "@/components/sections/CollageCarousel";

const socialImages = [
  {
    src: "/social-ad-01.png",
    alt: "UGC-style mirror selfie в худи для рекламы",
    label: "Mirror hoodie",
    position: "object-[50%_42%]",
  },
  {
    src: "/social-ad-02.png",
    alt: "Lifestyle-кадр в кафе для соцсетей и рекламы",
    label: "Cafe lifestyle",
    position: "object-[50%_45%]",
  },
  {
    src: "/social-ad-03.png",
    alt: "Street-style кадр для рекламного контента",
    label: "Street post",
    position: "object-[50%_45%]",
  },
  {
    src: "/social-ad-04.png",
    alt: "Домашний lifestyle-контент для ленты",
    label: "Home story",
    position: "object-[50%_42%]",
  },
  {
    src: "/social-ad-05.png",
    alt: "Mirror selfie в примерочной для рекламной серии",
    label: "Fitting room",
    position: "object-[50%_43%]",
  },
  {
    src: "/social-ad-06.png",
    alt: "UGC mirror selfie с подругой для соцсетей",
    label: "Friend story",
    position: "object-[50%_43%]",
  },
  {
    src: "/social-ad-07.png",
    alt: "Mirror selfie мужской модели для performance-креатива",
    label: "Menswear UGC",
    position: "object-[50%_43%]",
  },
  {
    src: "/social-ad-08.png",
    alt: "Ночной street-style кадр для рекламного контента",
    label: "Night street",
    position: "object-[50%_43%]",
  },
];

export function SocialContentCarousel() {
  return (
    <CollageCarousel
      title="Контент для ленты, Reels и рекламы"
      description="Кадры, которые выглядят как готовая серия для запуска: посты, stories, баннеры и performance-креативы."
      slides={socialImages}
      cardAspect="threeFour"
    />
  );
}
