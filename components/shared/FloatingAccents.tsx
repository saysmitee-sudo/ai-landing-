"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Aperture, Layers3, Sparkles, Wand2 } from "lucide-react";

type FloatingAccentsProps = {
  className?: string;
  labels?: [string, string, string];
  tone?: "light" | "dark";
  reverse?: boolean;
};

const icons = [Sparkles, Layers3, Aperture, Wand2];

export function FloatingAccents({
  className = "",
  labels = ["AI set", "Visual ID", "Campaign"],
  tone = "light",
  reverse = false,
}: FloatingAccentsProps) {
  const shouldReduceMotion = useReducedMotion();
  const textTone = tone === "dark" ? "text-white/70" : "text-black/50";
  const borderTone = tone === "dark" ? "border-white/[0.12]" : "border-black/[0.08]";
  const bgTone = tone === "dark" ? "bg-white/[0.07]" : "bg-white/65";
  const softBg = tone === "dark" ? "bg-white/[0.045]" : "bg-white/45";
  const primaryIcon = tone === "dark" ? "text-[#b8adff]" : "text-[#7566e5]";
  const side = reverse ? "left-[5%]" : "right-[5%]";
  const oppositeSide = reverse ? "right-[4%]" : "left-[4%]";

  const float = (amount: number, rotate = 0, duration = 8, delay = 0) =>
    shouldReduceMotion
      ? undefined
      : {
          y: [0, -amount, amount * 0.55, 0],
          rotate: [rotate, rotate + 1.5, rotate - 0.8, rotate],
        };

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}
    >
      <motion.div
        animate={float(10, reverse ? 4 : -4, 8.5)}
        transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute ${side} top-[10%] hidden items-center gap-2 rounded-full border ${borderTone} ${bgTone} px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.16em] ${textTone} shadow-glass backdrop-blur-2xl sm:flex`}
      >
        <Sparkles className={`h-3.5 w-3.5 ${primaryIcon}`} />
        {labels[0]}
      </motion.div>

      <motion.div
        animate={float(12, reverse ? -3 : 3, 9.5, 0.4)}
        transition={{ duration: 9.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        className={`absolute ${oppositeSide} bottom-[18%] hidden w-36 rounded-[22px] border ${borderTone} ${softBg} p-3.5 shadow-glass backdrop-blur-2xl md:block`}
      >
        <div className="flex items-center gap-2">
          <span
            className={`flex h-8 w-8 items-center justify-center rounded-2xl ${
              tone === "dark" ? "bg-white/10" : "bg-[#f1eeff]"
            } ${primaryIcon}`}
          >
            <Layers3 className="h-3.5 w-3.5" />
          </span>
          <span className={`text-[10px] font-bold uppercase tracking-[0.14em] ${textTone}`}>
            {labels[1]}
          </span>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-1.5">
          {[0, 1, 2].map((item) => (
            <span
              key={item}
              className={`h-1.5 rounded-full ${
                tone === "dark" ? "bg-white/[0.18]" : "bg-[#7566e5]/20"
              }`}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        animate={float(8, reverse ? 2 : -2, 7.5, 0.8)}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className={`absolute ${reverse ? "right-[10%]" : "left-[10%]"} top-[38%] hidden h-20 w-28 rounded-[24px] border ${borderTone} ${bgTone} shadow-glass backdrop-blur-2xl lg:block`}
      >
        <div
          className={`absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-2xl ${
            tone === "dark" ? "bg-white/10" : "bg-white/80"
          } ${primaryIcon}`}
        >
          <Aperture className="h-3.5 w-3.5" />
        </div>
        <div className={`absolute bottom-3 left-3 right-3 h-px ${tone === "dark" ? "bg-white/15" : "bg-black/10"}`} />
      </motion.div>

      <motion.div
        animate={float(7, 0, 7)}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        className={`absolute bottom-6 right-5 flex items-center gap-1.5 rounded-full border ${borderTone} ${bgTone} px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] ${textTone} shadow-glass backdrop-blur-xl md:hidden`}
      >
        {(() => {
          const Icon = icons[reverse ? 3 : 0];
          return <Icon className={`h-3 w-3 ${primaryIcon}`} />;
        })()}
        {labels[2]}
      </motion.div>
    </div>
  );
}
