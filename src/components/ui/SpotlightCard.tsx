"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";

/** A card with a soft light that follows the mouse pointer. */
export default function SpotlightCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - r.left}px`);
    el.style.setProperty("--y", `${e.clientY - r.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={`group relative h-full overflow-hidden rounded-2xl border border-white/8 bg-ink-2/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: "radial-gradient(380px circle at var(--x) var(--y), rgb(79 124 255 / 0.16), transparent 45%)" }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
}
