import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import Testimonials from "@/components/sections/Testimonials";
import SectionHeading from "@/components/ui/SectionHeading";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Case studies of cloud, AI and mobile projects delivered by Flixon IT Solutions.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        crumbs={[{ label: "Portfolio" }]}
        title={<>Work we are <span className="text-gradient">proud of</span></>}
        description="Filter by category to see how we have helped clients with cloud, AI, mobile and web projects."
      />
      <section className="container-x py-12">
        <PortfolioGrid />
      </section>
      <section className="container-x py-24">
        <SectionHeading eyebrow="Client stories" title="What our clients say" />
        <div className="mt-14">
          <Testimonials />
        </div>
      </section>
      <CTA title="Want results like these?" />
    </>
  );
}
