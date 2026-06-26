"use client";

import { Check, LoaderCircle, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

type ContactFormProps = {
  compact?: boolean;
};

export function ContactForm({ compact = false }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success">(
    "idle",
  );

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    await new Promise((resolve) => window.setTimeout(resolve, 850));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div
        className={`flex ${compact ? "min-h-[360px]" : "min-h-[410px]"} flex-col items-center justify-center rounded-[24px] border border-emerald-900/10 bg-emerald-50/70 px-6 text-center`}
        role="status"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg shadow-emerald-900/15">
          <Check aria-hidden="true" className="h-6 w-6" />
        </span>
        <h3 className="mt-6 text-2xl font-semibold tracking-[-0.03em]">
          Заявка принята
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-6 text-muted">
          Спасибо! Мы изучим задачу и свяжемся с вами, чтобы обсудить формат
          проекта.
        </p>
        <button
          className="mt-7 text-sm font-semibold underline decoration-black/20 underline-offset-4"
          type="button"
          onClick={() => setStatus("idle")}
        >
          Отправить еще одну
        </button>
      </div>
    );
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium">
          Имя
          <input
            required
            name="name"
            autoComplete="name"
            placeholder="Как к вам обращаться"
            className="h-12 rounded-2xl border border-black/10 bg-white/75 px-4 font-normal outline-none transition placeholder:text-black/30 focus:border-black/30"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium">
          Бренд
          <input
            required
            name="brand"
            autoComplete="organization"
            placeholder="Название бренда"
            className="h-12 rounded-2xl border border-black/10 bg-white/75 px-4 font-normal outline-none transition placeholder:text-black/30 focus:border-black/30"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-medium">
        Telegram / Email
        <input
          required
          name="contact"
          placeholder="@username или hello@brand.com"
          className="h-12 rounded-2xl border border-black/10 bg-white/75 px-4 font-normal outline-none transition placeholder:text-black/30 focus:border-black/30"
        />
      </label>
      <label className="grid gap-2 text-sm font-medium">
        Что нужно создать?
        <textarea
          required
          name="task"
          rows={compact ? 3 : 4}
          placeholder="Расскажите о коллекции, контенте или персонаже"
          className="resize-none rounded-2xl border border-black/10 bg-white/75 px-4 py-3 font-normal outline-none transition placeholder:text-black/30 focus:border-black/30"
        />
      </label>
      <div className="grid gap-2">
        <label htmlFor="budget-format" className="text-sm font-medium">
          Бюджет / формат
        </label>
        <select
          id="budget-format"
          name="budget"
          defaultValue=""
          className="h-12 rounded-2xl border border-black/10 bg-white/75 px-4 font-normal outline-none transition focus:border-black/30"
        >
          <option value="" disabled>
            Необязательно
          </option>
          <option>Start</option>
          <option>Content Pack</option>
          <option>Campaign</option>
          <option>Нужна рекомендация</option>
        </select>
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-2 inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-ink px-5 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(17,17,17,0.18)] transition hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-70"
      >
        {status === "loading" ? (
          <>
            <LoaderCircle
              aria-hidden="true"
              className="h-4 w-4 animate-spin"
            />
            Отправляем
          </>
        ) : (
          <>
            Отправить заявку
            <Send aria-hidden="true" className="h-4 w-4" />
          </>
        )}
      </button>
      <p className="text-center text-[11px] leading-5 text-black/40">
        Отправляя форму, вы соглашаетесь на обработку контактных данных.
      </p>
    </form>
  );
}
