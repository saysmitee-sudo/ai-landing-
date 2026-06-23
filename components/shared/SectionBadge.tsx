import { Sparkles } from "lucide-react";
import type { ReactNode } from "react";

export function SectionBadge({ children }: { children: ReactNode }) {
  return (
    <span className="eyebrow">
      <Sparkles aria-hidden="true" className="h-3.5 w-3.5 text-[#8172ef]" />
      {children}
    </span>
  );
}
