"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/** Respects the visitor's "reduce motion" setting for every animation. */
export default function Providers({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
