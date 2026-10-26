"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";
import { projectCategories, projects } from "@/data/portfolio";

type Props = { limit?: number; showFilters?: boolean };

export default function PortfolioGrid({ limit, showFilters = true }: Props) {
  const [filter, setFilter] = useState<(typeof projectCategories)[number]>("All");
  const list = projects.filter((p) => filter === "All" || p.category === filter).slice(0, limit);

  return (
    <div>
      {showFilters && (
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {projectCategories.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={filter === c}
              onClick={() => setFilter(c)}
              className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors ${filter === c ? "text-ink" : "text-slate-400 hover:text-white"}`}
            >
              {filter === c && <motion.span layoutId="portfolio-filter" className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-aqua to-volt" />}
              {c}
            </button>
          ))}
        </div>
      )}

      <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((p) => (
            <motion.article
              layout
              key={p.title}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.35 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-white/8 bg-ink-2/70"
            >
              <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${p.gradient}`}>
                <div className="absolute inset-0 bg-grid opacity-40" />
                <div className="absolute inset-x-6 bottom-0 h-28 translate-y-6 rounded-t-2xl border border-white/10 bg-ink/70 p-4 backdrop-blur transition-transform duration-500 group-hover:translate-y-2">
                  <div className="flex gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-white/30" />
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                    <span className="h-2 w-2 rounded-full bg-white/10" />
                  </div>
                  <div className="mt-3 space-y-2">
                    <div className="h-2 w-3/4 rounded bg-white/15" />
                    <div className="h-2 w-1/2 rounded bg-white/10" />
                    <div className="h-2 w-2/3 rounded bg-white/10" />
                  </div>
                </div>
                <span className="absolute left-4 top-4 rounded-full bg-ink/70 px-3 py-1 text-xs font-medium text-white backdrop-blur">{p.category}</span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs uppercase tracking-wider text-aqua">{p.client}</p>
                <h3 className="mt-2 text-lg font-semibold leading-snug">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{p.summary}</p>
                <ul className="mt-4 space-y-1.5">
                  {p.results.map((r) => (
                    <li key={r} className="flex items-center gap-2 text-sm text-slate-300">
                      <Check className="h-4 w-4 text-volt" aria-hidden="true" />
                      {r}
                    </li>
                  ))}
                </ul>
                <ul className="mt-auto flex flex-wrap gap-2 pt-5">
                  {p.tech.map((t) => (
                    <li key={t} className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-slate-400">{t}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
