"use client";

import { CollageCarousel } from "@/components/sections/CollageCarousel";

const socialImages = [
  {
    src: "/social-mirror-white.jpg",
    alt: "UGC-style фото для соцсетей в зеркале",
    label: "Mirror story",
    position: "object-center",
  },
  {
    src: "/social-elevator-lace.jpg",
    alt: "Вертикальный fashion-контент для Reels",
    label: "Reels-кадр",
    position: "object-center",
  },
  {
    src: "/social-mirror-activewear.jpg",
    alt: "Контент для соцсетей в activewear-образе",
    label: "Daily post",
    position: "object-center",
  },
  {
    src: "/collection-casual.jpg",
    alt: "Casual fashion-контент для соцсетей",
    label: "Casual drop",
    position: "object-center",
  },
];

export function SocialContentCarousel() {
  return (
    <CollageCarousel
      eyebrow="03 / Social"
      title="Контент для ленты, Reels и рекламы"
      description="Кадры, которые выглядят как готовая серия для запуска: посты, stories, баннеры и performance-креативы."
      slides={socialImages}
    />
  );
}
