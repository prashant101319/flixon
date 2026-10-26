import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Hero from "@/components/home/Hero";
import TechMarquee from "@/components/home/TechMarquee";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ButtonLink from "@/components/ui/ButtonLink";
import SpotlightCard from "@/components/ui/SpotlightCard";
import ServiceCard from "@/components/sections/ServiceCard";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import { Icon } from "@/components/icons";
import { services } from "@/data/services";
import { faqs, industries, whyUs } from "@/data/content";

const pillars = [
  { icon: "cloud" as const, title: "Cloud", href: "/services/cloud-consulting-migration", text: "Migrate, modernise and run on AWS, Azure and Google Cloud with security and cost control built in." },
  { icon: "brain" as const, title: "AI & Machine Learning", href: "/services/ai-machine-learning", text: "Predictive models, computer vision and NLP that turn your data into better decisions." },
  { icon: "sparkles" as const, title: "Generative AI", href: "/services/generative-ai-agents", text: "LLM-powered assistants, RAG chatbots and copilots that answer from your own data, with sources." },
  { icon: "bot" as const, title: "Agentic AI", href: "/services/generative-ai-agents", text: "Autonomous agents that plan, use your tools and complete multi-step workflows, with human oversight." },
  { icon: "smartphone" as const, title: "Mobile", href: "/services/mobile-app-development", text: "Native and cross-platform apps for iOS and Android, designed for speed and delight." },
  { icon: "code" as const, title: "Web Development", href: "/services/web-saas-development", text: "Fast, SEO-friendly websites, portals and SaaS platforms built on Next.js and Node.js." },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechMarquee />

      {/* Three focus areas */}
      <section className="container-x py-24">
        <SectionHeading
          eyebrow="What we do"
          title={<>Six focus areas. <span className="text-gradient">One accountable team.</span></>}
          description="Cloud, web, mobile and AI, from machine learning to generative and agentic AI, brought together so your product is fast, intelligent and ready to scale from day one."
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.1}>
              <Link href={p.href} className="gradient-border group relative block h-full overflow-hidden rounded-3xl bg-ink-2/70 p-8 transition-transform duration-300 hover:-translate-y-1">
                <ArrowUpRight className="absolute right-6 top-6 h-5 w-5 text-slate-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-aqua" aria-hidden="true" />
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand/10 blur-3xl transition-all duration-700 group-hover:bg-aqua/25" />
                <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-aqua transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                  <Icon name={p.icon} className="h-7 w-7" />
                </span>
                <h3 className="relative mt-6 text-2xl font-semibold">{p.title}</h3>
                <p className="relative mt-3 leading-relaxed text-slate-400">{p.text}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="container-x py-24">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            eyebrow="Services"
            title={<>End-to-end services for <span className="text-gradient">modern businesses</span></>}
            description="From strategy to launch and long-term support, pick one service or bring us the whole journey."
          />
          <Reveal>
            <ButtonLink href="/services" variant="ghost">All services</ButtonLink>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 4) * 0.08}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="relative overflow-hidden py-24">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-[140px]" />
        <div className="container-x relative grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Why Flixon"
              title={<>Built on the <span className="text-gradient">latest technology</span>, delivered with care</>}
              description="We combine deep engineering skill with a product mindset. You get modern architecture, honest advice and a team that treats your project like its own."
            />
            <Reveal delay={0.2} className="mt-10">
              <ButtonLink href="/about">More about us</ButtonLink>
            </Reveal>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {whyUs.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.07}>
                <SpotlightCard>
                  <Icon name={w.icon} className="h-6 w-6 text-volt" />
                  <h3 className="mt-4 text-lg font-semibold">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{w.text}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container-x py-24">
        <SectionHeading
          eyebrow="How we work"
          title={<>A clear path from <span className="text-gradient">idea to impact</span></>}
          description="A simple, proven process with working software every two weeks and no surprises."
        />
        <div className="mt-16">
          <ProcessTimeline />
        </div>
      </section>

      {/* Industries */}
      <section className="container-x py-24">
        <SectionHeading eyebrow="Industries" title="Solutions for every industry" description="We understand the rules, risks and customers of the sectors we serve." />
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {industries.map((ind, i) => (
            <Reveal key={ind.name} delay={(i % 4) * 0.06}>
              <div className="group flex h-full flex-col items-center rounded-2xl border border-white/8 bg-ink-2/50 p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-aqua/40 hover:bg-ink-2">
                <Icon name={ind.icon} className="h-8 w-8 text-aqua transition-transform duration-500 group-hover:scale-125" />
                <p className="mt-4 text-sm font-semibold text-white">{ind.name}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <ButtonLink href="/industries" variant="ghost">Explore industries</ButtonLink>
        </Reveal>
      </section>

      {/* Work */}
      <section className="container-x py-24">
        <SectionHeading eyebrow="Our work" title={<>Projects that <span className="text-gradient">make a difference</span></>} description="A selection of cloud, AI and mobile solutions we have delivered." />
        <div className="mt-14">
          <PortfolioGrid limit={3} showFilters={false} />
        </div>
        <Reveal className="mt-12 text-center">
          <ButtonLink href="/portfolio" variant="ghost">View full portfolio</ButtonLink>
        </Reveal>
      </section>

      {/* Testimonials */}
      <section className="container-x py-24">
        <SectionHeading eyebrow="Client stories" title="What our clients say" />
        <div className="mt-14">
          <Testimonials />
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x py-24">
        <SectionHeading eyebrow="FAQ" title="Questions, answered" />
        <div className="mt-14">
          <FAQ items={faqs} />
        </div>
      </section>

      <CTA />
    </>
  );
}
