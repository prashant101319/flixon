import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/sections/ContactForm";
import FAQ from "@/components/sections/FAQ";
import { fullAddress, site } from "@/config/site";
import { faqs } from "@/data/content";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${site.name} for cloud, AI and mobile app development. Get a free consultation and estimate.`,
  alternates: { canonical: "/contact" },
};

const cards = [
  { I: Mail, label: "Email us", value: site.email, href: `mailto:${site.email}` },
  { I: Phone, label: "Call us", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
  { I: MapPin, label: "Visit us", value: fullAddress },
  { I: Clock, label: "Working hours", value: site.hours },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        crumbs={[{ label: "Contact" }]}
        title={<>Let’s talk about <span className="text-gradient">your next project</span></>}
        description="Share a few details and we will get back to you within one business day with ideas, next steps and a free estimate."
      />

      <section className="container-x grid gap-10 py-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-4">
          {cards.map(({ I, label, value, href }, i) => (
            <Reveal key={label} delay={i * 0.07}>
              <div className="group flex gap-4 rounded-2xl border border-white/8 bg-ink-2/60 p-5 transition hover:border-aqua/40">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-aqua/20 to-iris/20 text-aqua transition-transform group-hover:scale-110">
                  <I className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm text-slate-500">{label}</p>
                  {href ? (
                    <a href={href} className="font-medium text-white hover:text-aqua">{value}</a>
                  ) : (
                    <p className="font-medium text-white">{value}</p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
          {site.mapEmbedUrl && (
            <Reveal>
              <iframe
                src={site.mapEmbedUrl}
                title={`${site.name} office location`}
                className="h-64 w-full rounded-2xl border border-white/8 grayscale invert-[0.9]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>
          )}
        </div>
        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </section>

      <section className="container-x py-24">
        <SectionHeading eyebrow="FAQ" title="Before you reach out" />
        <div className="mt-12">
          <FAQ items={faqs} />
        </div>
      </section>
    </>
  );
}
