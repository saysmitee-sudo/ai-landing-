import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://flassystudio.ru"),
  title: "Flassy Studio — ИИ-модели и фото-сеты для брендов",
  description:
    "Создаем виртуальных ИИ-персонажей, фото-сеты и рекламные визуалы для брендов одежды, обуви, beauty и lifestyle. Быстрее и дешевле классических съемок.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
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
