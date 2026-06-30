"use client";

import { LoaderCircle, Send } from "lucide-react";
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
        className={`flex ${compact ? "min-h-[320px]" : "min-h-[380px]"} flex-col justify-center border-y border-black/[0.1] px-0`}
        role="status"
      >
        <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-black/38">
          Отправлено
        </p>
        <h3 className="mt-3 text-3xl font-medium tracking-[-0.04em]">
          Заявка принята
        </h3>
        <p className="mt-4 max-w-sm text-base leading-7 text-black/56">
          Спасибо! Мы изучим задачу и свяжемся с вами, чтобы обсудить формат
          проекта.
        </p>
        <button
          className="mt-7 w-fit border-b border-black pb-1 text-sm font-medium"
          type="button"
          onClick={() => setStatus("idle")}
        >
          Отправить еще одну
        </button>
      </div>
    );
  }

  return (
    <form className="grid gap-5" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-black">
          Имя
          <input
            required
            name="name"
            autoComplete="name"
            placeholder="Как к вам обращаться"
            className="h-12 border-0 border-b border-black/16 bg-transparent px-0 font-normal outline-none transition placeholder:text-black/30 focus:border-black/50"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-black">
          Бренд
          <input
            required
            name="brand"
            autoComplete="organization"
            placeholder="Название бренда"
            className="h-12 border-0 border-b border-black/16 bg-transparent px-0 font-normal outline-none transition placeholder:text-black/30 focus:border-black/50"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-medium text-black">
        Telegram / Email
        <input
          required
          name="contact"
          placeholder="@username или hello@brand.com"
          className="h-12 border-0 border-b border-black/16 bg-transparent px-0 font-normal outline-none transition placeholder:text-black/30 focus:border-black/50"
        />
      </label>
      <label className="grid gap-2 text-sm font-medium text-black">
        Что нужно создать?
        <textarea
          required
          name="task"
          rows={compact ? 3 : 4}
          placeholder="Расскажите о коллекции, контенте или персонаже"
          className="resize-none border-0 border-b border-black/16 bg-transparent px-0 py-3 font-normal outline-none transition placeholder:text-black/30 focus:border-black/50"
        />
      </label>
      <div className="grid gap-2">
        <label htmlFor="budget-format" className="text-sm font-medium text-black">
          Бюджет / формат
        </label>
        <select
          id="budget-format"
          name="budget"
          defaultValue=""
          className="h-12 border-0 border-b border-black/16 bg-transparent px-0 font-normal outline-none transition focus:border-black/50"
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
        className="mt-4 inline-flex min-h-[48px] items-center justify-center gap-2 border border-black bg-black px-5 text-sm font-medium text-white transition hover:bg-black/80 disabled:cursor-wait disabled:opacity-70"
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
      <p className="text-left text-[11px] leading-5 text-black/40">
        Отправляя форму, вы соглашаетесь на обработку контактных данных.
      </p>
    </form>
  );
}
