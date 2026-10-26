import type { Metadata } from "next";
import { Briefcase, Clock, MapPin } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import SpotlightCard from "@/components/ui/SpotlightCard";
import ButtonLink from "@/components/ui/ButtonLink";
import { Icon } from "@/components/icons";
import { site } from "@/config/site";
import { openings, perks } from "@/data/content";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join Flixon IT Solutions and build cloud, AI and mobile products with the latest technologies.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        crumbs={[{ label: "Careers" }]}
        title={<>Build the future <span className="text-gradient">with us</span></>}
        description="We are a team of curious engineers and designers working on cloud, AI and mobile products. Grow fast, learn constantly and do the best work of your career."
      >
        <ButtonLink href="#openings" arrow={false}>See open roles</ButtonLink>
      </PageHero>

      <section className="container-x py-16">
        <SectionHeading eyebrow="Life at Flixon" title="Why you’ll love working here" />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {perks.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.08}>
              <SpotlightCard>
                <Icon name={p.icon} className="h-7 w-7 text-volt" />
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{p.text}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="openings" className="container-x scroll-mt-28 py-24">
        <SectionHeading eyebrow="Open positions" title="Current openings" />
        <div className="mx-auto mt-14 max-w-4xl space-y-4">
          {openings.length === 0 && (
            <p className="text-center text-slate-400">
              No open roles right now, but we would still love to hear from you at{" "}
              <a className="text-aqua hover:underline" href={`mailto:${site.careersEmail}`}>{site.careersEmail}</a>.
            </p>
          )}
          {openings.map((job, i) => (
            <Reveal key={job.title} delay={i * 0.06}>
              <div className="group flex flex-col gap-5 rounded-2xl border border-white/8 bg-ink-2/60 p-6 transition duration-300 hover:border-aqua/40 hover:bg-ink-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-lg font-semibold transition-colors group-hover:text-aqua">{job.title}</h3>
                  <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-sm text-slate-400">
                    <li className="flex items-center gap-1.5"><Briefcase className="h-4 w-4" aria-hidden="true" />{job.type}</li>
                    <li className="flex items-center gap-1.5"><MapPin className="h-4 w-4" aria-hidden="true" />{job.location}</li>
                    <li className="flex items-center gap-1.5"><Clock className="h-4 w-4" aria-hidden="true" />{job.experience}</li>
                  </ul>
                </div>
                <ButtonLink href={`mailto:${site.careersEmail}?subject=${encodeURIComponent(`Application: ${job.title}`)}`} variant="ghost">
                  Apply now
                </ButtonLink>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 text-center text-slate-400">
          Don’t see the right role? Send your CV to{" "}
          <a className="text-aqua hover:underline" href={`mailto:${site.careersEmail}`}>{site.careersEmail}</a>
        </Reveal>
      </section>
    </>
  );
}
