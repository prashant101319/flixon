import {
  Award,
  Bot,
  BrainCircuit,
  Building2,
  Clapperboard,
  Clock,
  Cloud,
  Code,
  Database,
  Eye,
  Factory,
  Gauge,
  GraduationCap,
  Handshake,
  Heart,
  HeartPulse,
  Landmark,
  Lightbulb,
  Rocket,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Target,
  TrendingUp,
  Truck,
  Users,
  Wallet,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import type { SVGProps } from "react";

export const iconMap = {
  award: Award,
  bot: Bot,
  brain: BrainCircuit,
  building: Building2,
  film: Clapperboard,
  clock: Clock,
  cloud: Cloud,
  code: Code,
  database: Database,
  eye: Eye,
  factory: Factory,
  gauge: Gauge,
  graduation: GraduationCap,
  handshake: Handshake,
  heart: Heart,
  health: HeartPulse,
  landmark: Landmark,
  lightbulb: Lightbulb,
  rocket: Rocket,
  shield: ShieldCheck,
  cart: ShoppingCart,
  smartphone: Smartphone,
  sparkles: Sparkles,
  target: Target,
  trending: TrendingUp,
  truck: Truck,
  users: Users,
  wallet: Wallet,
  workflow: Workflow,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof iconMap;

export function Icon({ name, className }: { name: IconName; className?: string }) {
  const Cmp = iconMap[name];
  return <Cmp className={className} aria-hidden="true" />;
}

/* Brand icons (drawn inline so they do not depend on any icon library) */
type P = SVGProps<SVGSVGElement>;

export const LinkedInIcon = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
  </svg>
);

export const XIcon = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64z" />
  </svg>
);

export const GitHubIcon = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57v-2c-3.34.72-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 12 .3" />
  </svg>
);

export const InstagramIcon = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...p}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.6" cy="6.4" r="1" fill="currentColor" stroke="none" />
  </svg>
);
