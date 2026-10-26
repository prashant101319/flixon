"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { processSteps } from "@/data/content";

/** Vertical timeline whose line "draws" itself as the user scrolls. */
export default function ProcessTimeline() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 55%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <ol ref={ref} className="relative mx-auto max-w-3xl overflow-x-clip">
      <div className="absolute bottom-2 left-[23px] top-2 w-px bg-white/10 sm:left-1/2" aria-hidden="true" />
      <motion.div
        style={{ scaleY }}
        className="absolute bottom-2 left-[23px] top-2 w-px origin-top bg-gradient-to-b from-aqua via-brand to-iris sm:left-1/2"
        aria-hidden="true"
      />
      {processSteps.map((step, i) => {
        const right = i % 2 === 1;
        return (
          <motion.li
            key={step.title}
            initial={{ opacity: 0, x: right ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={`relative mb-12 pl-16 last:mb-0 sm:w-1/2 sm:pl-0 ${right ? "sm:ml-auto sm:pl-14" : "sm:pr-14 sm:text-right"}`}
          >
            <span
              className={`absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-ink font-display text-sm font-semibold text-white shadow-[0_0_30px_-5px_rgb(34_211_238/0.6)] ${right ? "sm:-left-6" : "sm:left-auto sm:-right-6"}`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="glass rounded-2xl p-6">
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{step.text}</p>
            </div>
          </motion.li>
        );
      })}
    </ol>
  );
}
