"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Aperture, Layers3, Sparkles } from "lucide-react";

const tags = ["Campaign", "Lookbook", "Social Content", "E-commerce"];

export function HeroVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 30, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto h-[510px] w-full max-w-[570px] sm:h-[620px] lg:h-[650px]"
      aria-label="Визуальная концепция AI model photo set"
    >
      <div className="absolute inset-[6%_2%_4%_4%] rounded-[46px] border border-white/60 bg-gradient-to-br from-white/75 via-white/40 to-white/25 shadow-[0_35px_100px_rgba(41,34,76,0.14)] backdrop-blur-2xl" />
      <motion.div
        animate={
          shouldReduceMotion ? undefined : { y: [0, -8, 0], rotate: [-4, -3, -4] }
        }
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[5%] top-[8%] h-[56%] w-[48%] -rotate-4 overflow-hidden rounded-[28px] border border-white/70 bg-[#d9d3cf] shadow-lift"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_48%_20%,#f5e6df_0,transparent_15%),linear-gradient(155deg,#d7d0ce_0%,#b7adc7_45%,#77728e_100%)]" />
        <div className="absolute left-1/2 top-[17%] h-[25%] w-[34%] -translate-x-1/2 rounded-[48%_48%_44%_44%] bg-[#c89d89] shadow-[inset_-18px_-8px_26px_rgba(77,45,55,0.24)]" />
        <div className="absolute left-1/2 top-[8%] h-[18%] w-[38%] -translate-x-1/2 rounded-[60%_60%_30%_30%] bg-[#28242d]" />
        <div className="absolute left-1/2 top-[37%] h-[62%] w-[78%] -translate-x-1/2 rounded-t-[48%] bg-gradient-to-b from-[#f1e9e3] to-[#9c94ae]" />
        <div className="absolute inset-x-0 bottom-0 h-[28%] bg-gradient-to-t from-black/45 to-transparent" />
        <div className="absolute left-5 top-5 rounded-full border border-white/30 bg-black/20 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-xl">
          Model 01
        </div>
        <p className="absolute bottom-5 left-5 text-xs font-semibold uppercase tracking-[0.18em] text-white">
          Soft structure
        </p>
      </motion.div>

      <motion.div
        animate={
          shouldReduceMotion ? undefined : { y: [0, 10, 0], rotate: [3, 2, 3] }
        }
        transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[3%] top-[22%] h-[58%] w-[49%] rotate-3 overflow-hidden rounded-[30px] border border-white/70 bg-[#cbd4da] shadow-lift"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,#ffece4_0,transparent_14%),linear-gradient(160deg,#dcebf0_0%,#b6c5d4_44%,#73798f_100%)]" />
        <div className="absolute left-1/2 top-[15%] h-[25%] w-[34%] -translate-x-1/2 rounded-[48%] bg-[#b97e69] shadow-[inset_18px_-8px_28px_rgba(69,39,46,0.2)]" />
        <div className="absolute left-1/2 top-[7%] h-[22%] w-[42%] -translate-x-1/2 rounded-[60%_58%_35%_38%] bg-[#17171d]" />
        <div className="absolute left-1/2 top-[36%] h-[64%] w-[84%] -translate-x-1/2 rounded-t-[46%] bg-gradient-to-b from-[#252731] to-[#777a8c]" />
        <div className="absolute left-[16%] top-[43%] h-[46%] w-[8%] -rotate-12 rounded-full bg-white/25 blur-[1px]" />
        <div className="absolute inset-x-0 bottom-0 h-[28%] bg-gradient-to-t from-black/45 to-transparent" />
        <div className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-xl">
          <Aperture aria-hidden="true" className="h-4 w-4" />
        </div>
        <p className="absolute bottom-5 left-5 text-xs font-semibold uppercase tracking-[0.18em] text-white">
          Urban form
        </p>
      </motion.div>

      <motion.div
        animate={shouldReduceMotion ? undefined : { y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="glass absolute bottom-[3%] left-[8%] z-20 w-[58%] rounded-[24px] p-4 sm:p-5"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-white">
              <Layers3 aria-hidden="true" className="h-4 w-4" />
            </span>
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-black/35">
                Photo set
              </p>
              <p className="text-sm font-semibold">AI Campaign 01</p>
            </div>
          </div>
          <Sparkles aria-hidden="true" className="h-4 w-4 text-[#7566e5]" />
        </div>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-black/[0.07] bg-white/70 px-2.5 py-1 text-[9px] font-semibold text-black/55"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      <div className="absolute right-[3%] top-[8%] z-20 rounded-full border border-white/70 bg-white/75 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-black/50 shadow-glass backdrop-blur-xl">
        AI model photo set
      </div>
      <div className="absolute bottom-[12%] right-[2%] h-24 w-24 rounded-full bg-gradient-to-br from-[#e2d7ff] to-[#b8d9ff] opacity-80 blur-2xl" />
    </motion.div>
  );
}
