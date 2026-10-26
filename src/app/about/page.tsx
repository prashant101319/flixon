import type { Metadata } from "next";
import { Eye, Target } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Counter from "@/components/ui/Counter";
import SpotlightCard from "@/components/ui/SpotlightCard";
import ButtonLink from "@/components/ui/ButtonLink";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import CTA from "@/components/sections/CTA";
import FounderSpotlight from "@/components/sections/FounderSpotlight";
import { Icon } from "@/components/icons";
import { site } from "@/config/site";
import { founder, team, values } from "@/data/content";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${site.legalName}: our story, mission, values and the team building cloud, AI and mobile solutions.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        crumbs={[{ label: "About" }]}
        title={<>Engineering the future with <span className="text-gradient">cloud, AI and mobile</span></>}
        description={`${site.legalName} is a technology services company that helps startups and enterprises build secure, intelligent and scalable digital products.`}
      />

      {/* Story */}
      <section className="container-x grid items-center gap-14 py-16 lg:grid-cols-2">
        <Reveal x={-30} y={0}>
          {/* TODO: replace this story with your own company story */}
          <h2 className="text-3xl font-semibold sm:text-4xl">Our story</h2>
          <div className="mt-6 space-y-4 leading-relaxed text-slate-400">
            <p>
              Flixon IT Solutions was founded in {site.founded} with a simple belief: every business deserves access to the same
              world-class cloud, AI and mobile engineering that the largest technology companies use.
            </p>
            <p>
              Flixon was founded by {founder.name}, who brings more than 25 years of technology leadership across Publicis
              Groupe, Fujitsu and global enterprises. He started Flixon to combine that experience with the speed and care of a
              focused, hands-on team.
            </p>
            <p>
              Today we partner with clients across industries to design, build and run products that are fast, secure and ready
              for what comes next.
            </p>
          </div>
          <div className="mt-8">
            <ButtonLink href="/contact">Work with us</ButtonLink>
          </div>
        </Reveal>
        <Reveal x={30} y={0}>
          <dl className="grid grid-cols-2 gap-5">
            {site.stats.map((s, i) => (
              <div key={s.label} className={`gradient-border rounded-3xl bg-ink-2/70 p-8 ${i % 2 === 1 ? "sm:translate-y-8" : ""}`}>
                <dd className="font-display text-4xl font-semibold text-white sm:text-5xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </dd>
                <dt className="mt-2 text-sm text-slate-400">{s.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      {/* Mission & vision */}
      <section className="container-x grid gap-6 py-24 md:grid-cols-2">
        {[
          { I: Target, title: "Our mission", text: "To help businesses grow faster by delivering reliable cloud, AI and mobile solutions with honesty, quality and speed." },
          { I: Eye, title: "Our vision", text: "To be the most trusted technology partner for companies building intelligent, cloud-native products." },
        ].map(({ I, title, text }, i) => (
          <Reveal key={title} delay={i * 0.1}>
            <div className="group relative h-full overflow-hidden rounded-3xl border border-white/8 bg-ink-2/70 p-10">
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gradient-to-br from-aqua/20 to-iris/20 blur-3xl transition-transform duration-700 group-hover:scale-150" />
              <I className="relative h-10 w-10 text-aqua" aria-hidden="true" />
              <h2 className="relative mt-6 text-2xl font-semibold">{title}</h2>
              <p className="relative mt-4 text-lg leading-relaxed text-slate-400">{text}</p>
            </div>
          </Reveal>
        ))}
      </section>

      {/* Values */}
      <section className="container-x py-24">
        <SectionHeading eyebrow="Our values" title="What we stand for" />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <SpotlightCard>
                <Icon name={v.icon} className="h-7 w-7 text-volt" />
                <h3 className="mt-5 text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{v.text}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Founder */}
      <section id="founder" className="container-x scroll-mt-28 py-24">
        <FounderSpotlight />
      </section>

      {/* Team */}
      {team.length > 0 && (
      <section className="container-x py-24">
        <SectionHeading eyebrow="Leadership" title="The people behind Flixon" description="Experienced engineers and leaders who care about your success." />
        <div className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <Reveal key={`${m.role}-${i}`} delay={i * 0.08}>
              <div className="group text-center">
                {/* TODO: replace initials with a photo: <Image src="/team/name.jpg" ... /> */}
                <div className="relative mx-auto aspect-square w-full max-w-[220px] overflow-hidden rounded-3xl bg-gradient-to-br from-aqua/30 via-brand/30 to-iris/30">
                  <div className="absolute inset-0 bg-grid opacity-40" />
                  <span className="absolute inset-0 flex items-center justify-center font-display text-5xl font-semibold text-white transition-transform duration-500 group-hover:scale-110">
                    {m.initials}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold">{m.name}</h3>
                <p className="text-sm text-aqua">{m.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      )}

      {/* Approach */}
      <section className="container-x py-24">
        <SectionHeading eyebrow="Our approach" title="How we deliver" />
        <div className="mt-16">
          <ProcessTimeline />
        </div>
      </section>

      <CTA title="Let’s build something great together." />
    </>
  );
}
