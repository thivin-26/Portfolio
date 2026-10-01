"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-36">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] md:inset-0 md:h-auto"
        animate={reducedMotion ? undefined : { scale: [1, 1.035, 1] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/thivin-portrait.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center] brightness-[0.62] saturate-[0.65] md:object-center"
        />
      </motion.div>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[#030405]/20" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[480px] bg-gradient-to-b from-[#090b0e]/35 via-[#090b0e]/65 to-[#090b0e] md:inset-0 md:h-auto md:bg-gradient-to-r md:from-[#090b0e] md:via-[#090b0e]/95 md:to-[#090b0e]/35" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_50%_0%,rgba(67,198,184,0.07),transparent_52%)]" />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute right-[8%] top-[18%] h-56 w-56 rounded-full bg-[#43c6b8]/[0.08] blur-[90px] md:h-80 md:w-80"
        animate={reducedMotion ? undefined : { x: [0, -24, 0], y: [0, 18, 0], scale: [1, 1.12, 1], opacity: [0.35, 0.7, 0.35] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto mt-24 w-full max-w-6xl px-4 sm:px-6 md:mt-0 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="mb-6 inline-flex items-center rounded-full border border-[#e2b963]/25 bg-[#e2b963]/[0.08] px-3 py-2 text-[0.68rem] font-medium tracking-[0.22em] text-[#f1d38d] uppercase shadow-[0_0_32px_rgba(226,185,99,0.12)]"
          >
            AI &amp; DATA SCIENCE • PRODUCT BUILDER
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.75 }}
            className="max-w-xl text-5xl font-black leading-[0.92] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl"
          >
            Building <span className="text-gradient animate-glow">practical AI products.</span>
            <br />
            From data to useful systems.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 max-w-xl text-lg leading-8 text-slate-300"
          >
            I&apos;m THIVIN S, a B.Tech Artificial Intelligence &amp; Data Science student building end-to-end software and exploring how AI can make complex work simpler.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <motion.a
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full border border-[#e2b963]/40 bg-[#e2b963]/[0.1] px-5 py-3 text-sm font-semibold text-[#f1d38d] transition hover:shadow-[0_0_30px_rgba(226,185,99,0.2)]"
            >
              Explore Selected Work <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </motion.a>
            <motion.a
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:border-[#e2b963]/40 hover:bg-[#e2b963]/[0.08]"
            >
              Contact Me
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.75 }}
            className="mt-8 flex items-center gap-3 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-slate-300"
          >
            <motion.span
              animate={reducedMotion ? undefined : { boxShadow: ["0 0 0 rgba(165,79,49,0)", "0 0 15px rgba(165,79,49,0.55)", "0 0 0 rgba(165,79,49,0)"] }}
              transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut" }}
              className="h-2.5 w-2.5 rounded-full bg-emerald-400"
            />
            Open to internship opportunities &amp; collaborations
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
