import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  crumbs?: { label: string; href?: string }[];
  children?: ReactNode;
};

/** Hero banner used at the top of every inner page. */
export default function PageHero({ eyebrow, title, description, crumbs = [], children }: Props) {
  return (
    <section className="relative overflow-hidden pb-20 pt-36 sm:pt-44">
      <div className="pointer-events-none absolute inset-0 bg-grid mask-fade opacity-70" />
      <div className="pointer-events-none absolute -top-32 left-[10%] h-80 w-80 rounded-full bg-brand/25 blur-[110px] animate-float" />
      <div className="pointer-events-none absolute top-10 right-[8%] h-72 w-72 rounded-full bg-iris/20 blur-[110px] animate-float [animation-delay:-3s]" />

      <div className="container-x relative">
        {crumbs.length > 0 && (
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1 text-sm text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link>
              {crumbs.map((c) => (
                <span key={c.label} className="flex items-center gap-1">
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  {c.href ? (
                    <Link href={c.href} className="hover:text-white">{c.label}</Link>
                  ) : (
                    <span className="text-slate-200" aria-current="page">{c.label}</span>
                  )}
                </span>
              ))}
            </nav>
          </Reveal>
        )}
        <Reveal delay={0.05}>
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-aqua">{eyebrow}</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">{title}</h1>
        </Reveal>
        {description && (
          <Reveal delay={0.18}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">{description}</p>
          </Reveal>
        )}
        {children && <Reveal delay={0.26} className="mt-8">{children}</Reveal>}
      </div>
    </section>
  );
}
