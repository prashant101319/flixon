import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ButtonLink from "@/components/ui/ButtonLink";
import ServiceCard from "@/components/sections/ServiceCard";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import CTA from "@/components/sections/CTA";
import { Icon } from "@/components/icons";
import { services } from "@/data/services";
import { engagementModels } from "@/data/content";

export const metadata: Metadata = {
  title: "Services",
  description: "Cloud consulting, DevOps, AI and generative AI, mobile apps, web and SaaS development, data engineering and managed cloud services.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        crumbs={[{ label: "Services" }]}
        title={<>Technology services that <span className="text-gradient">move you forward</span></>}
        description="Eight specialised practices, one team. Choose a single service or let us take your product from idea to scale."
      >
        <div className="flex flex-wrap gap-4">
          <ButtonLink href="/contact">Get a free estimate</ButtonLink>
          <ButtonLink href="#engagement" variant="ghost" arrow={false}>Engagement models</ButtonLink>
        </div>
      </PageHero>

      <section className="container-x py-12">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 2) * 0.1}>
              <ServiceCard service={s} detailed />
            </Reveal>
          ))}
        </div>
      </section>

      <section id="engagement" className="container-x scroll-mt-28 py-24">
        <SectionHeading eyebrow="Engagement models" title="Work with us your way" description="Flexible models that fit your budget, timeline and team." />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {engagementModels.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.1}>
              <div className={`group relative h-full overflow-hidden rounded-3xl border p-8 transition duration-300 hover:-translate-y-2 ${i === 1 ? "gradient-border border-transparent bg-ink-2" : "border-white/8 bg-ink-2/60"}`}>
                {i === 1 && <span className="absolute right-6 top-6 rounded-full bg-volt px-3 py-1 text-xs font-semibold text-ink">Most popular</span>}
                <Icon name={m.icon} className="h-8 w-8 text-aqua" />
                <h3 className="mt-6 text-2xl font-semibold">{m.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-400">{m.text}</p>
                <p className="mt-6 border-t border-white/8 pt-4 text-sm text-slate-300">
                  <span className="text-slate-500">Best for: </span>
                  {m.bestFor}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x py-24">
        <SectionHeading eyebrow="Process" title="From discovery to delivery" />
        <div className="mt-16">
          <ProcessTimeline />
        </div>
      </section>

      <CTA />
    </>
  );
}
