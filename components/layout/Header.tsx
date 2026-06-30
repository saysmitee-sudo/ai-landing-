"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/data/site-content";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const openContact = () => {
    window.dispatchEvent(new CustomEvent("open-contact-form"));
    setMenuOpen(false);
  };

  return (
    <header className="liquid-topbar fixed inset-x-0 top-0 z-50 border-b border-black/[0.08] text-black">
      <div className="relative flex h-16 w-full items-center justify-between px-5 sm:px-8 lg:px-10">
        <a
          href="#top"
          className="relative z-10 flex items-center"
          aria-label="Flassy Studio — на главную"
        >
          <span className="text-sm font-medium tracking-[-0.01em] sm:text-[15px]">
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
              className="text-xs font-medium text-black/56 transition hover:text-black"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={openContact}
          className="relative z-10 hidden text-xs font-medium text-black/64 transition hover:text-black sm:block"
        >
          Обсудить проект
        </button>

        <button
          type="button"
          className="relative z-10 flex h-10 w-10 items-center justify-center text-black/72 transition hover:text-black lg:hidden"
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
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="liquid-mobile-menu border-t border-black/[0.08] px-5 py-3 text-black sm:px-8 lg:hidden"
          >
            <nav className="grid" aria-label="Мобильная навигация">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 text-sm font-medium text-black/64 transition hover:text-black"
                >
                  {item.label}
                </a>
              ))}
              <button
                type="button"
                onClick={openContact}
                className="mt-2 border-t border-black/[0.08] py-3 text-left text-sm font-medium text-black"
              >
                Обсудить проект
              </button>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
