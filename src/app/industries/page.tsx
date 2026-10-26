import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import SpotlightCard from "@/components/ui/SpotlightCard";
import CTA from "@/components/sections/CTA";
import { Icon } from "@/components/icons";
import { industries } from "@/data/content";

export const metadata: Metadata = {
  title: "Industries",
  description: "Cloud, AI and mobile solutions for banking, healthcare, retail, education, logistics, manufacturing, real estate and media.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        crumbs={[{ label: "Industries" }]}
        title={<>Deep expertise across <span className="text-gradient">the industries we serve</span></>}
        description="Every sector has its own rules, risks and customers. We bring proven patterns and the right technology for yours."
      />
      <section className="container-x py-12">
        <div className="grid gap-6 md:grid-cols-2">
          {industries.map((ind, i) => (
            <Reveal key={ind.name} delay={(i % 2) * 0.1}>
              <SpotlightCard className="p-8">
                <div className="flex items-start gap-5">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-aqua/20 to-iris/20 text-aqua transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <Icon name={ind.icon} className="h-7 w-7" />
                  </span>
                  <div>
                    <h2 className="text-xl font-semibold">{ind.name}</h2>
                    <p className="mt-2 text-slate-400">{ind.text}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {ind.useCases.map((u) => (
                        <li key={u} className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">{u}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>
      <CTA title="Don’t see your industry? Let’s talk." />
    </>
  );
}
