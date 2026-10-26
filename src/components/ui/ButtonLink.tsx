import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  arrow?: boolean;
  className?: string;
};

export default function ButtonLink({ href, children, variant = "primary", arrow = true, className = "" }: Props) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300";
  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-aqua via-brand to-iris text-white shadow-[0_8px_30px_-8px_rgb(79_124_255/0.7)] hover:shadow-[0_12px_40px_-6px_rgb(79_124_255/0.9)] hover:-translate-y-0.5"
      : "border border-white/15 bg-white/5 text-white hover:border-white/30 hover:bg-white/10";
  const external = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
  const content = (
    <>
      {children}
      {arrow && <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />}
    </>
  );
  return external ? (
    <a href={href} className={`${base} ${styles} ${className}`}>
      {content}
    </a>
  ) : (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {content}
    </Link>
  );
}
