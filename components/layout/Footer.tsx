import { ArrowUpRight, Sparkles } from "lucide-react";
import { navItems } from "@/data/site-content";

export function Footer() {
  return (
    <footer className="border-t border-black/[0.08] bg-white/45 py-12">
      <div className="page-container">
        <div className="grid gap-10 border-b border-black/[0.08] pb-10 md:grid-cols-[1.4fr_0.7fr_0.7fr]">
          <div>
            <a href="#top" className="inline-flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-white">
                <Sparkles aria-hidden="true" className="h-4 w-4" />
              </span>
              <span className="font-bold tracking-[-0.02em]">
                AI Model Studio
              </span>
            </a>
            <p className="mt-5 max-w-md text-sm leading-6 text-muted">
              ИИ-персонажи и визуальный контент для fashion, beauty и
              lifestyle-брендов.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-black/40">
              Навигация
            </p>
            <div className="mt-4 grid gap-3">
              {navItems.slice(0, 4).map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="w-fit text-sm text-black/65 transition hover:text-black"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-black/40">
              Контакты
            </p>
            <div className="mt-4 grid gap-3">
              <a
                href="https://t.me/"
                className="flex w-fit items-center gap-1 text-sm text-black/65 transition hover:text-black"
                target="_blank"
                rel="noreferrer"
              >
                Telegram
                <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
              </a>
              <a
                href="mailto:hello@aimodelstudio.ru"
                className="text-sm text-black/65 transition hover:text-black"
              >
                hello@aimodelstudio.ru
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-6 text-xs text-black/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 AI Model Studio. Все права защищены.</p>
          <p>Fashion × AI × Creative production</p>
        </div>
      </div>
    </footer>
  );
}
