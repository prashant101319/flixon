import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CircleCheck } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import SpotlightCard from "@/components/ui/SpotlightCard";
import ButtonLink from "@/components/ui/ButtonLink";
import ServiceCard from "@/components/sections/ServiceCard";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import { Icon } from "@/components/icons";
import { getService, services } from "@/data/services";
import { faqs } from "@/data/content";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: s.title,
    description: s.overview,
    alternates: { canonical: `/services/${s.slug}` },
  };
}

export default async function ServiceDetailPage({ params }: Params) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Service"
        crumbs={[{ label: "Services", href: "/services" }, { label: service.title }]}
        title={service.title}
        description={service.overview}
      >
        <div className="flex flex-wrap items-center gap-4">
          <ButtonLink href="/contact">Discuss your project</ButtonLink>
          <span className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${service.accent} text-ink`}>
            <Icon name={service.icon} className="h-6 w-6" />
          </span>
        </div>
      </PageHero>

      {/* Features */}
      <section className="container-x py-16">
        <SectionHeading align="left" eyebrow="What we offer" title="Capabilities" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {service.features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.08}>
              <SpotlightCard>
                <span className="font-display text-sm font-semibold text-aqua">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{f.text}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Benefits + tech */}
      <section className="container-x grid gap-8 py-20 lg:grid-cols-2">
        <Reveal>
          <div className="gradient-border h-full rounded-3xl bg-ink-2/70 p-10">
            <h2 className="text-2xl font-semibold">Business benefits</h2>
            <ul className="mt-6 space-y-4">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-lg text-slate-200">
                  <CircleCheck className="h-6 w-6 shrink-0 text-volt" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="h-full rounded-3xl border border-white/8 bg-ink-2/50 p-10">
            <h2 className="text-2xl font-semibold">Technologies we use</h2>
            <ul className="mt-6 flex flex-wrap gap-3">
              {service.tech.map((t) => (
                <li key={t} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:-translate-y-0.5 hover:border-aqua/50">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      <section className="container-x py-20">
        <SectionHeading eyebrow="Process" title="How we deliver this service" />
        <div className="mt-16">
          <ProcessTimeline />
        </div>
      </section>

      <section className="container-x py-20">
        <SectionHeading eyebrow="FAQ" title="Common questions" />
        <div className="mt-12">
          <FAQ items={faqs.slice(1, 5)} />
        </div>
      </section>

      <section className="container-x py-20">
        <SectionHeading align="left" eyebrow="Explore more" title="Related services" />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {related.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.08}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </section>

      <CTA title={`Ready to start with ${service.title}?`} />
    </>
  );
}
