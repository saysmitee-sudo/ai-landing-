export function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-white text-black"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover object-[58%_center] md:object-center"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label="Fashion-видео Flassy Studio"
      >
        <source src="/hero-video.mp4?v=2" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-white/10" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-white/92 via-white/50 to-transparent" />
      <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-white/44 via-white/18 to-transparent" />

      <div className="page-container relative z-10 flex min-h-[100svh] items-end pb-[2svh] pt-32 sm:pb-[4svh] lg:items-center lg:pb-0">
        <div className="max-w-[420px] lg:-translate-y-[9svh]">
          <h1 className="text-balance text-[clamp(1.45rem,3vw,2.3rem)] font-medium leading-[1.04] tracking-[-0.025em]">
            Визуальный контент для брендов и бизнеса
          </h1>
        </div>
      </div>
    </section>
  );
}
