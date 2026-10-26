import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/data/services";
import { Icon } from "@/components/icons";
import SpotlightCard from "@/components/ui/SpotlightCard";

export default function ServiceCard({ service, detailed = false }: { service: Service; detailed?: boolean }) {
  return (
    <Link href={`/services/${service.slug}`} className="block h-full" aria-label={service.title}>
      <SpotlightCard className="flex flex-col">
        <div className="flex h-full flex-col">
          <div className="flex items-start justify-between">
            <span className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${service.accent} text-ink transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}>
              <Icon name={service.icon} className="h-6 w-6" />
            </span>
            <ArrowUpRight className="h-5 w-5 text-slate-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-aqua" aria-hidden="true" />
          </div>
          <h3 className="mt-6 text-lg font-semibold">{service.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">{detailed ? service.overview : service.short}</p>
          {detailed && (
            <ul className="mt-5 flex flex-wrap gap-2">
              {service.tech.slice(0, 5).map((t) => (
                <li key={t} className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">{t}</li>
              ))}
            </ul>
          )}
        </div>
      </SpotlightCard>
    </Link>
  );
}
