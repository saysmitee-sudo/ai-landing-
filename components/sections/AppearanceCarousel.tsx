"use client";

import { CollageCarousel } from "@/components/sections/CollageCarousel";

const appearanceImages = [
  {
    src: "/appearance-drop-01.png",
    alt: "Портрет AI-модели с прямыми черными волосами и челкой",
    label: "Straight bangs",
    position: "object-[50%_42%]",
  },
  {
    src: "/appearance-drop-02.png",
    alt: "Портрет AI-модели с объемными кудрями",
    label: "Curly volume",
    position: "object-[50%_43%]",
  },
  {
    src: "/appearance-drop-03.png",
    alt: "Портрет AI-модели с собранными волосами и челкой",
    label: "Updo bangs",
    position: "object-[50%_42%]",
  },
  {
    src: "/appearance-drop-04.png",
    alt: "Портрет AI-модели с кудрявыми волосами крупным планом",
    label: "Close curls",
    position: "object-[50%_43%]",
  },
];

export function AppearanceCarousel() {
  return (
    <CollageCarousel
      title="Типаж меняется под аудиторию"
      description="Можно настраивать возраст, волосы, макияж, характер и визуальную подачу без новой съемочной смены."
      slides={appearanceImages}
      align="right"
      cardAspect="threeFour"
    />
  );
}
