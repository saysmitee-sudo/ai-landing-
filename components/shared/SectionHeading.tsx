import { SectionBadge } from "@/components/shared/SectionBadge";

type SectionHeadingProps = {
  badge: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  badge,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={`${centered ? "mx-auto items-center text-center" : "items-start"} flex max-w-3xl flex-col ${className}`}
    >
      <SectionBadge>{badge}</SectionBadge>
      <h2 className="section-title mt-6">{title}</h2>
      {description ? (
        <p className="body-copy mt-6 max-w-2xl">{description}</p>
      ) : null}
    </div>
  );
}
