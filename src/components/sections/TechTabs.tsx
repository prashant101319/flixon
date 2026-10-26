"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { techCategories } from "@/data/content";
import { Icon } from "@/components/icons";

export default function TechTabs() {
  const [active, setActive] = useState(0);
  const cat = techCategories[active];

  return (
    <div>
      <div role="tablist" aria-label="Technology categories" className="mx-auto flex max-w-full flex-wrap justify-center gap-2">
        {techCategories.map((c, i) => (
          <button
            key={c.name}
            role="tab"
            type="button"
            aria-selected={active === i}
            onClick={() => setActive(i)}
            className={`relative flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${active === i ? "text-white" : "text-slate-400 hover:text-white"}`}
          >
            {active === i && (
              <motion.span layoutId="tech-tab" className="absolute inset-0 -z-10 rounded-full border border-white/15 bg-white/8" transition={{ type: "spring", stiffness: 380, damping: 32 }} />
            )}
            <Icon name={c.icon} className="h-4 w-4" />
            {c.name}
          </button>
        ))}
      </div>

      <div role="tabpanel" className="mt-12">
        <AnimatePresence mode="wait">
          <motion.ul
            key={cat.name}
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
          >
            {cat.items.map((t) => (
              <motion.li
                key={t}
                variants={{ hidden: { opacity: 0, y: 16, scale: 0.95 }, show: { opacity: 1, y: 0, scale: 1 } }}
                whileHover={{ y: -4 }}
                className="glass group flex items-center gap-3 rounded-2xl p-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-aqua/20 to-iris/20 font-display text-sm font-semibold text-white transition group-hover:from-aqua/40 group-hover:to-iris/40">
                  {t.slice(0, 2)}
                </span>
                <span className="text-sm font-medium text-white">{t}</span>
              </motion.li>
            ))}
          </motion.ul>
        </AnimatePresence>
      </div>
    </div>
  );
}
