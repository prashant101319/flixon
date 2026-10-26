import Image from "next/image";
import { Quote } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Counter from "@/components/ui/Counter";
import { LinkedInIcon } from "@/components/icons";
import { founder } from "@/data/content";
import { site } from "@/config/site";

/** Founder profile: photo, bio, quote, career highlights and expertise. */
export default function FounderSpotlight() {
  const f = founder;
  return (
    <div className="grid items-start gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
      {/* Photo */}
      <Reveal x={-30} y={0} className="lg:sticky lg:top-28">
        <figure className="relative mx-auto w-full max-w-md">
          <div className="pointer-events-none absolute -inset-y-6 inset-x-0 rounded-[2.5rem] sm:-inset-6 bg-gradient-to-br from-aqua/25 via-brand/20 to-iris/25 blur-3xl" aria-hidden="true" />
          <div className="gradient-border group relative overflow-hidden rounded-[2rem] bg-ink-2">
            <Image
              src={f.photo}
              alt={`${f.name}, ${f.role} of ${site.name}`}
              placeholder="blur"
              sizes="(min-width: 1024px) 440px, 90vw"
              className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink via-ink/70 to-transparent" aria-hidden="true" />
            <figcaption className="absolute inset-x-0 bottom-0 p-6">
              <p className="font-display text-2xl font-semibold text-white">{f.name}</p>
              <p className="mt-0.5 text-sm font-medium text-aqua">{f.role}</p>
            </figcaption>
          </div>
        </figure>
      </Reveal>

      {/* Story */}
      <div className="min-w-0">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-aqua">
            <span className="h-1.5 w-1.5 rounded-full bg-aqua" />
            Founder & CEO
          </span>
          <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Meet <span className="text-gradient">{f.name}</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-200">{f.summary}</p>
        </Reveal>

        <div className="mt-6 space-y-4 leading-relaxed text-slate-400">
          {f.bio.map((p, i) => (
            <Reveal key={i} delay={0.05 * (i + 1)}>
              <p>{p}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <figure className="glass relative mt-8 overflow-hidden rounded-3xl p-7">
            <Quote className="absolute -right-2 -top-2 h-20 w-20 text-white/5" aria-hidden="true" />
            <blockquote className="relative font-display text-lg leading-relaxed text-white sm:text-xl">“{f.quote}”</blockquote>
            <figcaption className="relative mt-4 text-sm text-slate-400">{f.name}</figcaption>
          </figure>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="mt-8 grid grid-cols-3 gap-4 border-y border-white/8 py-6">
            {f.highlights.map((h) => (
              <div key={h.label}>
                <dd className="font-display text-3xl font-semibold text-white sm:text-4xl">
                  <Counter value={h.value} suffix={h.suffix} />
                </dd>
                <dt className="mt-1 text-xs leading-snug text-slate-400 sm:text-sm">{h.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Previously at</p>
              <p className="mt-2 font-display text-lg text-white">{f.previously.join(" · ")}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Sectors</p>
              <p className="mt-2 font-display text-lg text-white">{f.sectors.join(" · ")}</p>
            </div>
          </div>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Expertise</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {f.expertise.map((e) => (
              <li key={e} className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm text-slate-200 transition hover:-translate-y-0.5 hover:border-aqua/50">
                {e}
              </li>
            ))}
          </ul>
          {f.linkedin && (
            <a
              href={f.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-aqua/60"
            >
              <LinkedInIcon className="h-4 w-4" /> Connect on LinkedIn
            </a>
          )}
        </Reveal>
      </div>
    </div>
  );
}
