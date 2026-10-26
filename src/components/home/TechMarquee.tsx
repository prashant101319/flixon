import { allTech } from "@/data/content";

/** Infinite scrolling strip of technologies; pauses on hover. */
export default function TechMarquee() {
  const items = [...allTech, ...allTech];
  return (
    <section className="border-y border-white/8 bg-ink-2/40 py-10" aria-label="Technologies we work with">
      <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
        Building with the latest technologies
      </p>
      <div className="group relative overflow-hidden mask-x">
        <ul className="flex w-max animate-marquee gap-4 group-hover:[animation-play-state:paused]">
          {items.map((t, i) => (
            <li
              key={`${t}-${i}`}
              aria-hidden={i >= allTech.length}
              className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-slate-300 transition hover:border-aqua/50 hover:text-white"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
