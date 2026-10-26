import ButtonLink from "@/components/ui/ButtonLink";
import Reveal from "@/components/ui/Reveal";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden pt-24">
      <div className="pointer-events-none absolute inset-0 bg-grid mask-fade opacity-60" />
      <div className="container-x relative text-center">
        <Reveal>
          <p className="text-gradient font-display text-[8rem] font-semibold leading-none sm:text-[12rem]">404</p>
          <h1 className="mt-4 text-3xl font-semibold">This page has moved to the cloud</h1>
          <p className="mx-auto mt-4 max-w-md text-slate-400">The page you are looking for does not exist or has been moved.</p>
          <div className="mt-8 flex justify-center gap-4">
            <ButtonLink href="/">Back to home</ButtonLink>
            <ButtonLink href="/contact" variant="ghost">Contact us</ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
