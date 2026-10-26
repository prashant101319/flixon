"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { navLinks } from "@/config/site";
import { services } from "@/data/services";
import { Icon } from "@/components/icons";
import Logo from "./Logo";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on navigation
  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`transition-all duration-500 ${scrolled ? "border-b border-white/8 bg-ink/75 py-3 backdrop-blur-xl" : "py-5"}`}
      >
        <nav className="container-x flex items-center justify-between" aria-label="Main">
          <Logo />

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li
                key={link.href}
                className="relative"
                onMouseEnter={() => "hasMenu" in link && setMegaOpen(true)}
                onMouseLeave={() => "hasMenu" in link && setMegaOpen(false)}
              >
                <div className="flex items-center">
                  <Link
                    href={link.href}
                    className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${isActive(link.href) ? "text-white" : "text-slate-400 hover:text-white"}`}
                  >
                    {isActive(link.href) && (
                      <motion.span layoutId="nav-pill" className="absolute inset-0 -z-10 rounded-full bg-white/8" transition={{ type: "spring", stiffness: 380, damping: 30 }} />
                    )}
                    {link.label}
                  </Link>
                  {"hasMenu" in link && (
                    <button
                      type="button"
                      aria-label="Show services"
                      aria-expanded={megaOpen}
                      onClick={() => setMegaOpen((v) => !v)}
                      className="-ml-2 rounded-full p-1 text-slate-400 hover:text-white"
                    >
                      <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${megaOpen ? "rotate-180" : ""}`} />
                    </button>
                  )}
                </div>

                {"hasMenu" in link && (
                  <AnimatePresence>
                    {megaOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.22 }}
                        className="absolute left-1/2 top-full w-[720px] -translate-x-1/2 pt-4"
                      >
                        <div className="rounded-3xl border border-white/10 bg-ink-2/95 p-4 shadow-2xl backdrop-blur-xl">
                          <div className="grid grid-cols-2 gap-1">
                            {services.map((s, i) => (
                              <motion.div key={s.slug} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }}>
                                <Link href={`/services/${s.slug}`} className="group flex gap-3 rounded-2xl p-3 transition hover:bg-white/5">
                                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${s.accent} text-ink`}>
                                    <Icon name={s.icon} className="h-5 w-5" />
                                  </span>
                                  <span>
                                    <span className="block text-sm font-semibold text-white">{s.title}</span>
                                    <span className="mt-0.5 block text-xs leading-snug text-slate-400">{s.short}</span>
                                  </span>
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                          <Link href="/services" className="mt-2 flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3 text-sm font-medium text-white hover:bg-white/10">
                            View all services and engagement models
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden rounded-full bg-gradient-to-r from-aqua via-brand to-iris px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_8px_30px_-8px_rgb(79_124_255/0.8)] sm:inline-flex"
            >
              Let&apos;s talk
            </Link>
            <button
              type="button"
              className="glass flex h-10 w-10 items-center justify-center rounded-full text-white lg:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-0 -z-10 overflow-y-auto bg-ink/95 px-5 pb-10 pt-24 backdrop-blur-xl lg:hidden"
          >
            <ul className="space-y-1">
              {navLinks.map((link, i) => (
                <motion.li key={link.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.04 * i }}>
                  {"hasMenu" in link ? (
                    <>
                      <button
                        type="button"
                        onClick={() => setMobileServicesOpen((v) => !v)}
                        aria-expanded={mobileServicesOpen}
                        className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-2xl font-semibold text-white"
                      >
                        {link.label}
                        <ChevronDown className={`h-5 w-5 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence initial={false}>
                        {mobileServicesOpen && (
                          <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pl-3">
                            <li>
                              <Link href="/services" className="block px-3 py-2 text-slate-300">All services</Link>
                            </li>
                            {services.map((s) => (
                              <li key={s.slug}>
                                <Link href={`/services/${s.slug}`} className="flex items-center gap-2 px-3 py-2 text-slate-400 hover:text-white">
                                  <Icon name={s.icon} className="h-4 w-4 text-aqua" />
                                  {s.title}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link href={link.href} className={`block rounded-xl px-3 py-3 text-2xl font-semibold ${isActive(link.href) ? "text-gradient" : "text-white"}`}>
                      {link.label}
                    </Link>
                  )}
                </motion.li>
              ))}
            </ul>
            <Link href="/contact" className="mt-8 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-aqua via-brand to-iris px-6 py-4 font-semibold text-white">
              Let&apos;s talk <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
