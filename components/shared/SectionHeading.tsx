type SectionHeadingProps = {
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
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
      <h2 className="section-title">{title}</h2>
      {description ? (
        <p className="body-copy mt-6 max-w-2xl">{description}</p>
      ) : null}
    </div>
  );
}
