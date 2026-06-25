import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://flassy-studio.example"),
  title: "Flassy Studio — ИИ-модели и фото-сеты для брендов",
  description:
    "Создаем виртуальных ИИ-персонажей, фото-сеты и рекламные визуалы для брендов одежды, обуви, beauty и lifestyle. Быстрее и дешевле классических съемок.",
  openGraph: {
    title: "Flassy Studio — ИИ-модели и фото-сеты для брендов",
    description:
      "Создаем виртуальных ИИ-персонажей, фото-сеты и рекламные визуалы для fashion, beauty и lifestyle-брендов.",
    type: "website",
    locale: "ru_RU",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Flassy Studio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
