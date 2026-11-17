import { Reveal } from "@/components/motion/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
  align?: "left" | "center";
}) {
  return (
    <Reveal
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <p className={`eyebrow ${light ? "!text-white/55" : ""} ${align === "center" ? "justify-center" : ""}`}>
        {eyebrow}
      </p>
      <h2
        className={`display mt-4 text-3xl md:text-5xl ${
          light ? "text-white" : "text-[color:var(--ink)]"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-base leading-relaxed md:text-lg ${
            light ? "text-white/65" : "text-[color:var(--muted)]"
          }`}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
