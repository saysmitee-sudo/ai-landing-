"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/data/site-content";
import { CTAButton } from "@/components/shared/CTAButton";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div className="relative mx-auto flex h-[68px] max-w-[1280px] items-center justify-between overflow-hidden rounded-full border border-white/55 bg-white/[0.38] px-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.85),inset_0_-1px_0_rgba(255,255,255,0.28),0_18px_55px_rgba(24,32,56,0.10)] backdrop-blur-3xl backdrop-saturate-150 sm:px-5">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-full bg-[linear-gradient(115deg,rgba(255,255,255,0.42),rgba(255,255,255,0.12)_42%,rgba(193,221,255,0.18)_100%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-16 -top-20 h-32 w-48 rounded-full bg-white/45 blur-2xl"
        />
        <a
          href="#top"
          className="relative z-10 flex items-center gap-2.5"
          aria-label="Flassy Studio — на главную"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-white">
            <Sparkles aria-hidden="true" className="h-4 w-4" />
          </span>
          <span className="text-sm font-bold tracking-[-0.02em] sm:text-base">
            Flassy Studio
          </span>
        </a>

        <nav
          className="relative z-10 hidden items-center gap-7 lg:flex"
          aria-label="Основная навигация"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] font-medium text-black/60 transition hover:text-black"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="relative z-10 hidden sm:block">
          <CTAButton openContact className="min-h-10 px-4">
            Обсудить проект
          </CTAButton>
        </div>

        <button
          type="button"
          className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/55 bg-white/[0.36] shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_8px_22px_rgba(22,30,48,0.08)] backdrop-blur-2xl lg:hidden"
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? (
            <X aria-hidden="true" className="h-5 w-5" />
          ) : (
            <Menu aria-hidden="true" className="h-5 w-5" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-2 max-w-[1280px] overflow-hidden rounded-[26px] border border-white/60 bg-white/90 p-3 shadow-glass backdrop-blur-2xl lg:hidden"
          >
            <nav className="grid" aria-label="Мобильная навигация">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-4 py-3.5 text-sm font-semibold transition hover:bg-black/[0.04]"
                >
                  {item.label}
                </a>
              ))}
              <CTAButton
                openContact
                className="mt-2 w-full sm:hidden"
              >
                Обсудить проект
              </CTAButton>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
