import ButtonLink from "@/components/ui/ButtonLink";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/config/site";

type Props = { title?: string; text?: string };

export default function CTA({
  title = "Have an idea? Let’s build it together.",
  text = "Tell us about your project. We reply within one business day with next steps and a free consultation.",
}: Props) {
  return (
    <section className="container-x py-24">
      <Reveal>
        <div className="gradient-border relative overflow-hidden rounded-[2rem] bg-ink-2 px-6 py-16 text-center sm:px-16">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-40 mask-fade" />
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-aqua/25 blur-[100px] animate-float" />
          <div className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-iris/25 blur-[100px] animate-float [animation-delay:-3s]" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-semibold leading-tight sm:text-5xl">{title}</h2>
            <p className="mt-5 text-lg text-slate-400">{text}</p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <ButtonLink href="/contact">Book a free consultation</ButtonLink>
              <ButtonLink href={`mailto:${site.email}`} variant="ghost" arrow={false}>
                {site.email}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
