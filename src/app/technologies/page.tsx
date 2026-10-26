import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import TechTabs from "@/components/sections/TechTabs";
import CTA from "@/components/sections/CTA";
import { Icon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Technologies",
  description: "The latest cloud, AI, mobile, web and data technologies we use: AWS, Azure, Google Cloud, Kubernetes, LLMs, LangGraph, Flutter, Next.js and more.",
  alternates: { canonical: "/technologies" },
};

const principles = [
  { icon: "rocket" as const, title: "Modern and proven", text: "We use current technology that is mature, well supported and widely adopted." },
  { icon: "shield" as const, title: "Secure by default", text: "Every stack choice is reviewed for security, compliance and data privacy." },
  { icon: "trending" as const, title: "Built to scale", text: "Architecture that grows with your users without expensive rewrites." },
];

export default function TechnologiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Technologies"
        crumbs={[{ label: "Technologies" }]}
        title={<>The <span className="text-gradient">latest technology</span>, chosen with care</>}
        description="We stay current so you don’t have to. Explore the platforms, frameworks and AI tools our engineers use every day."
      />
      <section className="container-x py-12">
        <TechTabs />
      </section>
      <section className="container-x py-24">
        <SectionHeading eyebrow="Our principles" title="How we choose technology" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div className="glass h-full rounded-3xl p-8 transition duration-300 hover:-translate-y-1">
                <Icon name={p.icon} className="h-8 w-8 text-volt" />
                <h3 className="mt-5 text-xl font-semibold">{p.title}</h3>
                <p className="mt-3 text-slate-400">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
