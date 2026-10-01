"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Menu, UserRound, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { navItems } from "@/data/site-data";

function GitHubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.02-.7.08-.69.08-.69 1.12.08 1.7 1.15 1.7 1.15 1 .1.76 2.32 3.4 1.73.1-.73.4-1.23.69-1.51-2.48-.29-5.08-1.24-5.08-5.52 0-1.22.44-2.22 1.15-3-.11-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.6 5.22-5.09 5.5.4.35.74 1.03.74 2.08v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 10H5.67v8h2.67v-8Zm7.24-.19c-1.42 0-2.04.78-2.39 1.32V10h-2.66v8h2.66v-4.37c0-1.15.22-2.26 1.64-2.26 1.4 0 1.42 1.31 1.42 2.34V18h2.67v-4.85c0-2.38-.51-4.2-3.34-4.2ZM7 6a1.55 1.55 0 1 0 0 3.1A1.55 1.55 0 0 0 7 6Z" />
    </svg>
  );
}

const quickLinks = [
  { label: "GitHub", href: "https://github.com/thivin-26", icon: GitHubIcon, external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/thivin-s-8184163a7", icon: LinkedInIcon, external: true },
  { label: "Profile", href: "#about", icon: UserRound, external: false },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileDialogRef = useRef<HTMLDivElement>(null);
  const profileCloseRef = useRef<HTMLButtonElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!profileOpen) return;

    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    profileCloseRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setProfileOpen(false);
        return;
      }

      if (event.key !== "Tab" || !profileDialogRef.current) return;
      const focusable = profileDialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      const first = focusable.item(0);
      const last = focusable.item(focusable.length - 1);

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [profileOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-4 py-3 backdrop-blur-xl transition-all duration-300 sm:px-6 ${
          scrolled ? "border-white/10 bg-[#11100d]/95 shadow-[0_0_30px_rgba(67,198,184,0.08)]" : "border-white/10 bg-[#11100d]/90 shadow-[0_0_24px_rgba(0,0,0,0.3)]"
        }`}
      >
        <a href="#home" className="flex items-center gap-3 text-sm font-semibold tracking-[0.2em] text-white">
          <span className="relative flex h-9 w-9 shrink-0 overflow-hidden rounded-full border border-[#43c6b8]/60 bg-[#43c6b8]/10 shadow-[0_0_18px_rgba(67,198,184,0.18)]">
            <Image
              src="/thivin-portrait.png"
              alt="THIVIN S"
              fill
              sizes="36px"
              className="object-cover object-[70%_26%]"
            />
          </span>
          <span className="hidden font-[family-name:var(--font-display)] text-[0.78rem] font-bold tracking-[0.24em] text-white sm:inline">THIVIN S</span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-[0.7rem] font-medium tracking-[0.2em] text-slate-300 transition hover:text-[#a7f3eb]">
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2">
          {quickLinks.map(({ label, href, icon: Icon, external }) => (
            label === "Profile" ? (
              <button
                key={label}
                type="button"
                aria-label="Open About Me profile"
                title={label}
                aria-haspopup="dialog"
                aria-expanded={profileOpen}
                onClick={() => setProfileOpen(true)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-[#43c6b8]/50 hover:bg-[#43c6b8]/10 hover:text-[#a7f3eb] sm:h-9 sm:w-9"
              >
                <Icon className="h-4 w-4" />
              </button>
            ) : (
              <a
                key={label}
                href={href}
                aria-label={label}
                title={label}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-[#43c6b8]/50 hover:bg-[#43c6b8]/10 hover:text-[#a7f3eb] sm:h-9 sm:w-9"
              >
                <Icon className="h-4 w-4" />
              </a>
            )
          ))}
        </div>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-[#43c6b8]/30 bg-[#43c6b8]/[0.06] px-4 py-2 text-[0.68rem] font-semibold tracking-[0.2em] text-[#a7f3eb] transition hover:border-[#43c6b8]/60 hover:bg-[#43c6b8]/10"
          >
            LET&apos;S TALK <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] p-2 text-slate-200 lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((value) => !value)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </motion.nav>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-3 max-w-6xl rounded-2xl border border-white/10 bg-[#11100d]/95 p-4 backdrop-blur-xl lg:hidden"
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium tracking-[0.15em] text-slate-200"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMobileOpen(false)} className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.15em] text-[#a7f3eb]">
              LET&apos;S TALK <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      )}

      {typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {profileOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050403]/80 p-4 backdrop-blur-md sm:p-8"
              onMouseDown={(event) => {
                if (event.target === event.currentTarget) setProfileOpen(false);
              }}
            >
              <motion.div
                ref={profileDialogRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby="profile-dialog-title"
                initial={reducedMotion ? false : { opacity: 0, scale: 0.76, y: 54, rotateX: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
                exit={reducedMotion ? undefined : { opacity: 0, scale: 0.94, y: 16, rotateX: -4 }}
                transition={reducedMotion ? { duration: 0 } : { type: "spring", stiffness: 360, damping: 19, mass: 0.7 }}
                style={{ transformPerspective: 1000 }}
                className="relative max-h-[90vh] w-full max-w-2xl overflow-x-hidden overflow-y-auto rounded-[30px] border border-[#43c6b8]/25 bg-[#11100d] p-5 text-slate-100 shadow-[0_30px_100px_rgba(0,0,0,0.65)] sm:p-8"
              >
                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-[#43c6b8]/[0.09] blur-[75px]"
                  animate={reducedMotion ? undefined : { scale: [0.85, 1.15, 0.85], opacity: [0.4, 0.85, 0.4] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="relative mb-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#43c6b8]">About Me</p>
                    <h2 id="profile-dialog-title" className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold tracking-[0.02em] text-white sm:text-4xl">THIVIN S</h2>
                  </div>
                  <button
                    ref={profileCloseRef}
                    type="button"
                    aria-label="Close About Me profile"
                    onClick={() => setProfileOpen(false)}
                    className="rounded-full border border-white/10 bg-white/[0.04] p-2 text-slate-200 transition hover:border-[#43c6b8]/40 hover:text-[#a7f3eb]"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <motion.div
                  initial={reducedMotion ? false : { opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: reducedMotion ? 0 : 0.12, duration: 0.42 }}
                  className="relative grid gap-6 sm:grid-cols-[150px_1fr] sm:items-start"
                >
                  <motion.div
                    animate={reducedMotion ? undefined : { y: [0, -7, 0], rotate: [0, 1.5, 0, -1.5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative mx-auto h-36 w-36 overflow-hidden rounded-[24px] border border-[#43c6b8]/35 shadow-[0_0_28px_rgba(67,198,184,0.16)] sm:mx-0"
                  >
                    <Image
                      src="/thivin-portrait.png"
                      alt="THIVIN S"
                      fill
                      sizes="144px"
                      className="object-cover object-[70%_30%]"
                    />
                  </motion.div>
                  <div className="space-y-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#43c6b8]">Professional Summary</p>
                    <p className="text-base leading-7 text-slate-300">
                      B.Tech student in Artificial Intelligence &amp; Data Science at Anna University Regional Campus, Coimbatore, interested in machine learning, intelligent interfaces, and building practical data-driven applications.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={reducedMotion ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: reducedMotion ? 0 : 0.22, duration: 0.45 }}
                  className="mt-6 rounded-[22px] border border-white/10 bg-white/[0.03] p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#43c6b8]">Education &amp; Qualifications</p>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="text-xs uppercase tracking-[0.16em] text-slate-500">University</p>
                      <p className="mt-2 text-base font-semibold text-white">B.Tech in Artificial Intelligence &amp; Data Science</p>
                      <p className="mt-1 text-sm leading-6 text-slate-400">Anna University Regional Campus, Coimbatore · Currently pursuing</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.16em] text-slate-500">School</p>
                      <p className="mt-2 text-base font-semibold text-white">Ananada Education Institution</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={reducedMotion ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: reducedMotion ? 0 : 0.3, duration: 0.42 }}
                  className="mt-6 flex flex-wrap gap-3"
                >
                  <a
                    href="https://github.com/thivin-26"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[#43c6b8]/30 bg-[#43c6b8]/[0.06] px-4 py-2 text-sm font-medium text-[#a7f3eb] transition hover:border-[#43c6b8]/60 hover:bg-[#43c6b8]/10"
                  >
                    View GitHub <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/thivin-s-8184163a7"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-white/20"
                  >
                    Connect on LinkedIn <ArrowRight className="h-4 w-4" />
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </header>
  );
}
