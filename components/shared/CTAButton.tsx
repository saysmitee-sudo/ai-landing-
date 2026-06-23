"use client";

import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type CTAButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "light";
  className?: string;
  openContact?: boolean;
};

const variants = {
  primary:
    "bg-ink text-white shadow-[0_14px_34px_rgba(17,17,17,0.18)] hover:-translate-y-0.5 hover:bg-black",
  secondary:
    "border border-black/10 bg-white/70 text-ink backdrop-blur-xl hover:-translate-y-0.5 hover:bg-white",
  light:
    "bg-white text-ink shadow-[0_16px_40px_rgba(24,20,55,0.2)] hover:-translate-y-0.5 hover:bg-white/90",
};

export function CTAButton({
  children,
  href,
  variant = "primary",
  className = "",
  openContact = false,
}: CTAButtonProps) {
  const classes = `group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition duration-300 ${variants[variant]} ${className}`;

  const handleClick = () => {
    if (openContact) {
      window.dispatchEvent(new CustomEvent("open-contact-form"));
    }
  };

  const content = (
    <>
      <span>{children}</span>
      <ArrowRight
        aria-hidden="true"
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
      />
    </>
  );

  if (href && !openContact) {
    return (
      <a className={classes} href={href}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} type="button" onClick={handleClick}>
      {content}
    </button>
  );
}
