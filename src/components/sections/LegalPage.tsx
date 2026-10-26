import type { ReactNode } from "react";
import PageHero from "@/components/ui/PageHero";

export default function LegalPage({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <>
      <PageHero eyebrow="Legal" crumbs={[{ label: title }]} title={title} description={`Last updated: ${updated}`} />
      <section className="container-x pb-12">
        <div className="mx-auto max-w-3xl space-y-8 leading-relaxed text-slate-400 [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-semibold [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-2">
          {children}
        </div>
      </section>
    </>
  );
}
