import { Bot, BrainCircuit, Cloud, Code, Database, ShieldCheck, Smartphone, Sparkles, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const inner: { Icon: LucideIcon; deg: number }[] = [
  { Icon: Cloud, deg: 0 },
  { Icon: BrainCircuit, deg: 120 },
  { Icon: Smartphone, deg: 240 },
];
const outer: { Icon: LucideIcon; deg: number }[] = [
  { Icon: Bot, deg: 30 },
  { Icon: Database, deg: 90 },
  { Icon: Workflow, deg: 150 },
  { Icon: ShieldCheck, deg: 210 },
  { Icon: Code, deg: 270 },
  { Icon: Sparkles, deg: 330 },
];

/** Decorative animated orbit of technology icons (pure CSS animation). */
export default function OrbitVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[480px]" aria-hidden="true">
      {/* rings */}
      <div className="absolute inset-0 rounded-full border border-white/8" />
      <div className="absolute inset-[18%] rounded-full border border-dashed border-white/10" />
      <div className="absolute inset-[36%] rounded-full bg-gradient-to-br from-aqua/20 via-brand/20 to-iris/20 blur-2xl" />

      {/* core */}
      <div className="absolute inset-[38%] flex items-center justify-center rounded-full gradient-border bg-ink-2 shadow-[0_0_80px_-10px_rgb(79_124_255/0.8)]">
        <div className="text-center">
          <span className="font-display text-2xl font-semibold text-white sm:text-3xl">Flixon</span>
          <span className="mt-1 block text-[10px] uppercase tracking-[0.3em] text-aqua">Engine</span>
        </div>
      </div>

      {/* inner orbit */}
      <div className="absolute inset-[18%] animate-orbit">
        {inner.map(({ Icon, deg }) => (
          <div key={deg} className="absolute left-1/2 top-1/2 h-0 w-0" style={{ transform: `rotate(${deg}deg)` }}>
            <div style={{ transform: `translate(-50%, -50%) translateY(calc(-1 * var(--r))) rotate(${-deg}deg)` }} className="[--r:154px] max-sm:[--r:96px]">
              <div className="animate-orbit-rev">
                <div className="glass flex h-14 w-14 items-center justify-center rounded-2xl text-aqua shadow-lg">
                  <Icon className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* outer orbit */}
      <div className="absolute inset-0 animate-orbit-slow">
        {outer.map(({ Icon, deg }) => (
          <div key={deg} className="absolute left-1/2 top-1/2 h-0 w-0" style={{ transform: `rotate(${deg}deg)` }}>
            <div style={{ transform: `translate(-50%, -50%) translateY(calc(-1 * var(--r))) rotate(${-deg}deg)` }} className="[--r:238px] max-sm:[--r:148px]">
              <div className="animate-orbit-slow-rev">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-ink-3 text-iris">
                  <Icon className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* floating chips */}
      <div className="glass absolute -left-2 top-[12%] rounded-2xl px-4 py-3 text-xs animate-float sm:-left-8">
        <p className="font-semibold text-white">Cloud native</p>
        <p className="text-slate-400">AWS · Azure · GCP</p>
      </div>
      <div className="glass absolute -right-2 bottom-[14%] rounded-2xl px-4 py-3 text-xs animate-float [animation-delay:-2s] sm:-right-6">
        <p className="font-semibold text-white">Generative AI</p>
        <p className="text-slate-400">LLMs · RAG · Agents</p>
      </div>
      <div className="glass absolute bottom-[2%] left-[14%] rounded-2xl px-4 py-3 text-xs animate-float [animation-delay:-4s]">
        <p className="font-semibold text-white">Mobile first</p>
        <p className="text-slate-400">iOS · Android · Flutter</p>
      </div>
    </div>
  );
}
