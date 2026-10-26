"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { testimonials } from "@/data/content";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);

  const go = useCallback((step: number) => {
    setDir(step);
    setI((v) => (v + step + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => go(1), 6000);
    return () => clearInterval(t);
  }, [go, paused]);

  const t = testimonials[i];

  return (
    <div
      className="relative mx-auto max-w-4xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="gradient-border relative overflow-hidden rounded-3xl bg-ink-2/70 px-6 py-12 sm:px-14">
        <Quote className="absolute right-8 top-8 h-20 w-20 text-white/5" aria-hidden="true" />
        <div className="relative min-h-[220px] sm:min-h-[180px]">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.figure
              key={i}
              custom={dir}
              initial={{ opacity: 0, x: dir * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -60 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <blockquote className="font-display text-xl leading-relaxed text-white sm:text-2xl">“{t.quote}”</blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-aqua via-brand to-iris font-semibold text-white">
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className="block font-semibold text-white">{t.name}</span>
                  <span className="block text-sm text-slate-400">{t.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button type="button" onClick={() => go(-1)} aria-label="Previous testimonial" className="glass flex h-11 w-11 items-center justify-center rounded-full text-white transition hover:border-aqua/50">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Show testimonial ${idx + 1}`}
              aria-current={idx === i}
              onClick={() => {
                setDir(idx > i ? 1 : -1);
                setI(idx);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${idx === i ? "w-8 bg-aqua" : "w-2 bg-white/20 hover:bg-white/40"}`}
            />
          ))}
        </div>
        <button type="button" onClick={() => go(1)} aria-label="Next testimonial" className="glass flex h-11 w-11 items-center justify-center rounded-full text-white transition hover:border-aqua/50">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
