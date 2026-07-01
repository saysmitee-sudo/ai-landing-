import { AnimatedSection } from "@/components/shared/AnimatedSection";

export function ImaginationSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8f8f6] py-7 text-black sm:py-8 lg:py-10">
      <div className="page-container">
        <AnimatedSection>
          <div className="border border-black/[0.16] bg-white/52 px-5 py-5 text-center sm:px-7 sm:py-6 lg:px-8 lg:py-7">
            <p className="mx-auto max-w-5xl text-balance text-center text-[clamp(1rem,5vw,1.45rem)] font-medium italic leading-[1.12] tracking-[-0.025em] lg:max-w-none lg:whitespace-nowrap lg:text-[clamp(1.25rem,1.8vw,2rem)]">
              Создаем любой фото и видео контент. Ограничения лишь в воображении
              🙌
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
