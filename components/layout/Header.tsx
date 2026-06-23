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
      <div className="mx-auto flex h-[68px] max-w-[1280px] items-center justify-between rounded-full border border-white/60 bg-white/70 px-4 shadow-[0_12px_40px_rgba(20,20,30,0.06)] backdrop-blur-2xl sm:px-5">
        <a
          href="#top"
          className="flex items-center gap-2.5"
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
          className="hidden items-center gap-7 lg:flex"
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

        <div className="hidden sm:block">
          <CTAButton openContact className="min-h-10 px-4">
            Обсудить проект
          </CTAButton>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/70 lg:hidden"
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
