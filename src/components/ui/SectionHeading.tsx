import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({ eyebrow, title, description, align = "center", className = "" }: Props) {
  const centered = align === "center";
  return (
    <Reveal className={`${centered ? "mx-auto text-center" : ""} max-w-3xl ${className}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-aqua">
          <span className="h-1.5 w-1.5 rounded-full bg-aqua" />
          {eyebrow}
        </span>
      )}
      <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">{title}</h2>
      {description && <p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg">{description}</p>}
    </Reveal>
  );
}
