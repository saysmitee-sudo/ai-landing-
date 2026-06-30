import { ArrowUpRight } from "lucide-react";
import { navItems } from "@/data/site-content";

export function Footer() {
  return (
    <footer className="border-t border-black/[0.1] bg-[#f8f8f6] py-12 sm:py-14">
      <div className="page-container">
        <div className="grid gap-10 border-b border-black/[0.1] pb-10 md:grid-cols-[1.35fr_0.75fr_0.75fr]">
          <div>
            <a href="#top" className="inline-flex">
              <span className="text-2xl font-medium tracking-[-0.04em]">
                Flassy Studio
              </span>
            </a>
            <p className="mt-5 max-w-md text-base leading-7 text-black/56">
              ИИ-персонажи и визуальный контент для fashion, beauty и
              lifestyle-брендов.
            </p>
          </div>
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-black/38">
              Навигация
            </p>
            <div className="mt-5 grid gap-3">
              {navItems.slice(0, 4).map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="w-fit text-base text-black/58 transition hover:text-black"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-black/38">
              Контакты
            </p>
            <div className="mt-5 grid gap-3">
              <a
                href="https://t.me/"
                className="flex w-fit items-center gap-1 text-base text-black/58 transition hover:text-black"
                target="_blank"
                rel="noreferrer"
              >
                Telegram
                <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
              </a>
              <a
                href="mailto:hello@flassy.studio"
                className="text-base text-black/58 transition hover:text-black"
              >
                hello@flassy.studio
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-6 text-xs text-black/38 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Flassy Studio. Все права защищены.</p>
          <p>Fashion × AI × Creative production</p>
        </div>
      </div>
    </footer>
  );
}
