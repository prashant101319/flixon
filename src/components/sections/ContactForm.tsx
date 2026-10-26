"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CircleCheck, LoaderCircle, Send } from "lucide-react";
import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { services } from "@/data/services";

type Fields = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
  website: string; // honeypot (hidden from people, catches bots)
};

const empty: Fields = { name: "", email: "", phone: "", company: "", service: "", budget: "", message: "", website: "" };

// TODO: adjust budget ranges to suit your pricing
const budgets = ["Under ₹5 lakh", "₹5 to 15 lakh", "₹15 to 50 lakh", "Above ₹50 lakh", "Not sure yet"];

export default function ContactForm() {
  const [data, setData] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const set = (k: keyof Fields) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setData((d) => ({ ...d, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const validate = () => {
    const e: Partial<Record<keyof Fields, string>> = {};
    if (data.name.trim().length < 2) e.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = "Please enter a valid email.";
    if (data.phone && !/^[+\d][\d\s-]{6,}$/.test(data.phone)) e.phone = "Please enter a valid phone number.";
    if (data.message.trim().length < 10) e.message = "Tell us a little more (at least 10 characters).";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      setData(empty);
    } catch {
      setStatus("error");
    }
  };

  const input =
    "w-full rounded-xl border border-white/10 bg-ink/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-aqua/60 focus:ring-4 focus:ring-aqua/10";

  return (
    <div className="gradient-border relative rounded-3xl bg-ink-2/80 p-6 sm:p-10">
      <AnimatePresence mode="wait">
        {status === "sent" ? (
          <motion.div key="sent" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="py-16 text-center">
            <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 260, damping: 14, delay: 0.1 }} className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-volt/15">
              <CircleCheck className="h-10 w-10 text-volt" />
            </motion.span>
            <h3 className="mt-6 text-2xl font-semibold">Thank you!</h3>
            <p className="mt-3 text-slate-400">Your message has reached us. Our team will get back to you within one business day.</p>
            <button type="button" onClick={() => setStatus("idle")} className="mt-8 text-sm font-semibold text-aqua hover:underline">
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
            <Field label="Full name *" error={errors.name}>
              <input className={input} value={data.name} onChange={set("name")} placeholder="Your name" autoComplete="name" aria-invalid={!!errors.name} />
            </Field>
            <Field label="Work email *" error={errors.email}>
              <input className={input} type="email" value={data.email} onChange={set("email")} placeholder="you@company.com" autoComplete="email" aria-invalid={!!errors.email} />
            </Field>
            <Field label="Phone" error={errors.phone}>
              <input className={input} type="tel" value={data.phone} onChange={set("phone")} placeholder="+91 98765 43210" autoComplete="tel" aria-invalid={!!errors.phone} />
            </Field>
            <Field label="Company">
              <input className={input} value={data.company} onChange={set("company")} placeholder="Company name" autoComplete="organization" />
            </Field>
            <Field label="Service you need">
              <select className={input} value={data.service} onChange={set("service")}>
                <option value="">Select a service</option>
                {services.map((s) => (
                  <option key={s.slug} value={s.title}>{s.title}</option>
                ))}
                <option value="Other">Something else</option>
              </select>
            </Field>
            <Field label="Estimated budget">
              <select className={input} value={data.budget} onChange={set("budget")}>
                <option value="">Select a range</option>
                {budgets.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </Field>
            <Field label="Project details *" error={errors.message} full>
              <textarea className={`${input} min-h-[140px] resize-y`} value={data.message} onChange={set("message")} placeholder="Tell us about your goals, timeline and anything else we should know." aria-invalid={!!errors.message} />
            </Field>
            <input type="text" tabIndex={-1} autoComplete="off" value={data.website} onChange={set("website")} className="hidden" aria-hidden="true" />

            <div className="flex flex-col items-start gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-slate-500">We respect your privacy. Your details are only used to reply to your enquiry.</p>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-aqua via-brand to-iris px-7 py-3 text-sm font-semibold text-white disabled:opacity-60"
              >
                {status === "sending" ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                {status === "sending" ? "Sending…" : "Send message"}
              </motion.button>
            </div>
            {status === "error" && (
              <p role="alert" className="text-sm text-red-400 sm:col-span-2">
                Something went wrong. Please try again or email us directly.
              </p>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({ label, error, full, children }: { label: string; error?: string; full?: boolean; children: ReactNode }) {
  return (
    <label className={`block ${full ? "sm:col-span-2" : ""}`}>
      <span className="mb-2 block text-sm font-medium text-slate-300">{label}</span>
      {children}
      <AnimatePresence>
        {error && (
          <motion.span initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-1.5 block text-xs text-red-400">
            {error}
          </motion.span>
        )}
      </AnimatePresence>
    </label>
  );
}
