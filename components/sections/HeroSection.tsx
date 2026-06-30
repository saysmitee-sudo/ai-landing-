import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-black text-white"
    >
      <Image
        src="/model-campaign.jpg"
        alt="Fashion-визуал Flassy Studio"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[52%_center]"
      />
      <div className="absolute inset-0 bg-black/24" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/68 via-black/24 to-transparent" />
      <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-black/42 via-black/14 to-transparent" />

      <div className="page-container relative z-10 flex min-h-[100svh] items-end pb-14 pt-32 sm:pb-16 lg:pb-20">
        <div className="max-w-[420px]">
          <h1 className="text-balance text-[clamp(1.45rem,3vw,2.3rem)] font-medium leading-[1.04] tracking-[-0.025em]">
            Визуальный контент для брендов и бизнеса
          </h1>
          <p className="mt-3 max-w-sm text-xs leading-5 text-white/58 md:text-sm md:leading-6">
            AI production studio для fashion, beauty и lifestyle-брендов:
            модели, фото-сеты и рекламные визуалы без классической съемочной
            инфраструктуры.
          </p>
        </div>
      </div>
    </section>
  );
}
