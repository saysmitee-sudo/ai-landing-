"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { CTAButton } from "@/components/shared/CTAButton";
import { GradientBlob } from "@/components/shared/GradientBlob";
import { HeroVisual } from "@/components/sections/HeroVisual";
import { heroProofs, studioStats } from "@/data/site-content";

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="relative overflow-hidden pb-2 pt-32 sm:pb-6 sm:pt-32 lg:flex lg:items-center lg:pb-5"
    >
      <GradientBlob className="-left-40 top-32 h-[420px] w-[420px] bg-[#e7d9ff]/55" />
      <GradientBlob
        className="-right-28 top-24 h-[480px] w-[480px] bg-[#d3e9ff]/60"
        duration={13}
      />
      <div className="page-container relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-8">
          <div className="relative z-10">
            <div className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-[#8172ef] shadow-[0_0_0_5px_rgba(129,114,239,0.12)]" />
              Creative AI production
            </div>
            <motion.div
              initial={{ opacity: 0, y: 14, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="hero-title-glow relative -mx-1 mt-7 max-w-[760px] px-1 py-2 sm:mx-0 sm:px-1"
            >
              <motion.div
                aria-hidden="true"
                className="absolute inset-y-0 -left-1/2 z-0 w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/40 to-transparent blur-2xl"
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        x: ["-35%", "265%"],
                        opacity: [0, 0.62, 0],
                      }
                }
                transition={{
                  duration: 5.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 2.2,
                }}
              />
              <h1 className="display-title relative z-10">
                ИИ-персонажи для{" "}
                <span className="inline-block pb-[0.04em] pr-[0.08em] bg-gradient-to-r from-[#7667ea] via-[#927cec] to-[#6f9ed4] bg-clip-text text-transparent">
                  fashion брендов и бизнеса
                </span>
              </h1>
            </motion.div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton
                href="#visuals"
                variant="secondary"
                className="w-full sm:w-auto"
              >
                Посмотреть возможности
              </CTAButton>
            </div>
            <div className="mt-8 grid max-w-2xl grid-cols-1 gap-x-5 gap-y-3 sm:grid-cols-2">
              {heroProofs.map((proof) => (
                <div
                  key={proof}
                  className="flex items-center gap-2 text-sm font-medium text-black/60"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full border border-black/10 bg-white/70">
                    <Check
                      aria-hidden="true"
                      className="h-3 w-3 text-[#7566e5]"
                    />
                  </span>
                  {proof}
                </div>
              ))}
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-3 border-t border-black/[0.08] pt-6">
              {studioStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={index > 0 ? "border-l border-black/[0.08] pl-4 sm:pl-6" : ""}
                >
                  <p className="text-xl font-semibold tracking-[-0.04em] sm:text-2xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[10px] leading-4 text-black/45 sm:text-xs">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
