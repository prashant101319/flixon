import Link from "next/link";
import { site } from "@/config/site";

/** TODO: replace the SVG mark with your real logo (or an <Image src="/logo.svg" />). */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`group flex items-center gap-2.5 ${className}`} aria-label={`${site.name} home`}>
      <span className="relative flex h-9 w-9 items-center justify-center">
        <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-aqua via-brand to-iris transition-transform duration-500 group-hover:rotate-12" />
        <svg viewBox="0 0 24 24" className="relative h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" aria-hidden="true">
          <path d="M7 19V5h10" />
          <path d="M7 12h7" />
          <circle cx="18" cy="12" r="1.4" fill="currentColor" stroke="none" />
        </svg>
      </span>
      <span className="font-display text-lg font-semibold leading-none text-white">
        Flixon<span className="text-gradient"> IT</span>
        <span className="mt-0.5 block text-[10px] font-medium uppercase tracking-[0.28em] text-slate-400">Solutions</span>
      </span>
    </Link>
  );
}
