"use client";

import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { site } from "@/config/site";
import ButtonLink from "@/components/ui/ButtonLink";
import Counter from "@/components/ui/Counter";
import OrbitVisual from "./OrbitVisual";

const words = ["cloud platforms", "AI agents", "mobile apps", "SaaS products"];

function RotatingWords() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % words.length), 2600);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="relative block h-[1.15em] overflow-hidden" aria-live="polite">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[i]}
          initial={{ y: "100%", opacity: 0, filter: "blur(8px)" }}
          animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-100%", opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="text-gradient absolute left-0 top-0 whitespace-nowrap"
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 50, damping: 20 });
  const sy = useSpring(my, { stiffness: 50, damping: 20 });

  const onMove = (e: MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 80);
    my.set(((e.clientY - r.top) / r.height - 0.5) * 80);
  };

  return (
    <section ref={ref} onMouseMove={onMove} className="relative overflow-hidden pb-20 pt-32 sm:pt-40 lg:pb-28">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-grid mask-fade opacity-60" />
      <motion.div style={{ x: sx, y: sy }} className="pointer-events-none absolute -top-40 left-[calc(50%-300px)] h-[600px] w-[600px] rounded-full bg-brand/25 blur-[130px]" />
      <motion.div style={{ x: sy, y: sx }} className="pointer-events-none absolute top-40 -left-40 h-[420px] w-[420px] rounded-full bg-aqua/15 blur-[120px]" />
      <motion.div style={{ x: sx, y: sy }} className="pointer-events-none absolute -right-32 top-20 h-[420px] w-[420px] rounded-full bg-iris/20 blur-[120px]" />

      <div className="container-x relative grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.div {...fadeUp(0)}>
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-slate-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-volt animate-pulse-ring" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-volt" />
              </span>
              Cloud · Web · Mobile · Agentic AI
            </span>
          </motion.div>

          <motion.h1 {...fadeUp(0.1)} className="mt-7 text-[2.6rem] font-semibold leading-[1.05] sm:text-6xl lg:text-[4.1rem] xl:text-7xl">
            We engineer
            <RotatingWords />
            that scale with you.
          </motion.h1>

          <motion.p {...fadeUp(0.2)} className="mt-7 max-w-xl text-lg leading-relaxed text-slate-400">
            {site.legalName} helps businesses move faster with secure cloud infrastructure, practical AI and
            beautifully crafted mobile and web applications, built on the latest technologies.
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="mt-9 flex flex-wrap gap-4">
            <ButtonLink href="/contact">Start your project</ButtonLink>
            <ButtonLink href="/services" variant="ghost">Explore services</ButtonLink>
          </motion.div>

          <motion.dl {...fadeUp(0.4)} className="mt-14 grid max-w-xl grid-cols-2 gap-6 sm:grid-cols-4">
            {site.stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-3xl font-semibold text-white">
                  <Counter value={s.value} suffix={s.suffix} />
                </dd>
                <dd className="mt-1 text-xs leading-snug text-slate-400">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
          <OrbitVisual />
        </motion.div>
      </div>
    </section>
  );
}
