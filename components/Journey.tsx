"use client";

import { motion, useReducedMotion } from "framer-motion";
import { journey } from "@/data/site-data";

export function Journey() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="journey" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="mb-12 text-center"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">The Journey So Far</p>
        <h2 className="mt-3 text-3xl font-black tracking-[-0.06em] text-white sm:text-5xl">THE JOURNEY SO FAR</h2>
      </motion.div>

      <div className="relative mx-auto max-w-4xl">
        <motion.div
          aria-hidden="true"
          initial={reducedMotion ? false : { scaleY: 0 }}
          whileInView={reducedMotion ? undefined : { scaleY: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: reducedMotion ? 0 : 1.2, ease: "easeOut" }}
          className="absolute left-5 top-5 bottom-2 w-px origin-top bg-gradient-to-b from-cyan-400/80 via-violet-400/60 to-transparent sm:left-1/2 sm:-translate-x-1/2"
        />

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, scale: 0.85, y: 12 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="relative mb-8 flex justify-start sm:justify-center"
        >
          <div className="relative z-10 flex items-center gap-2 rounded-full border border-[#43c6b8]/35 bg-[#0b1216] px-4 py-2 shadow-[0_0_22px_rgba(67,198,184,0.12)]">
            <motion.span
              aria-hidden="true"
              animate={reducedMotion ? undefined : { scale: [1, 1.35, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              className="h-2 w-2 rounded-full bg-[#43c6b8] shadow-[0_0_12px_rgba(67,198,184,0.8)]"
            />
            <span className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[#a7f3eb]">Journey Root · Start</span>
          </div>
        </motion.div>

        <div className="space-y-8">
          {journey.map((item, index) => (
            <motion.div
              key={item.title}
              initial={reducedMotion ? false : { opacity: 0, y: 18 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              whileHover={reducedMotion ? undefined : { scale: 1.01 }}
              className="relative flex items-center"
            >
              <motion.svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                className="absolute left-10 top-1/2 z-[5] h-4 w-4 -translate-y-1/2 text-[#43c6b8] sm:hidden"
              >
                <motion.path
                  d="M0 8h14m-5-5 5 5-5 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={reducedMotion ? false : { pathLength: 0, opacity: 0.4 }}
                  whileInView={reducedMotion ? undefined : { pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                />
              </motion.svg>

              <motion.svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                className={`absolute top-1/2 z-[5] hidden h-4 w-4 -translate-y-1/2 text-[#43c6b8] sm:block ${
                  index % 2 === 0 ? "left-[calc(50%-40px)]" : "left-[calc(50%+24px)]"
                }`}
              >
                <motion.path
                  d={index % 2 === 0 ? "M16 8H2m5-5-5 5 5 5" : "M0 8h14m-5-5 5 5-5 5"}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={reducedMotion ? false : { pathLength: 0, opacity: 0.4 }}
                  whileInView={reducedMotion ? undefined : { pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                />
              </motion.svg>

              <motion.div
                animate={reducedMotion ? undefined : { boxShadow: ["0 0 0 rgba(67,198,184,0)", "0 0 24px rgba(67,198,184,0.3)", "0 0 0 rgba(67,198,184,0)"] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-300/60 bg-[#08121e] text-cyan-200 sm:left-1/2 sm:h-12 sm:w-12 sm:-translate-x-1/2"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#43c6b8]/35 bg-[#43c6b8]/10 text-[0.55rem] font-bold text-[#a7f3eb]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </motion.div>

              <div className={`w-full pl-14 sm:w-1/2 sm:pl-0 ${index % 2 === 0 ? "sm:pr-10 sm:text-right" : "sm:ml-auto sm:pl-10"}`}>
                <motion.div
                  whileHover={reducedMotion ? undefined : { y: -5, rotateX: 4, rotateY: index % 2 === 0 ? -4 : 4 }}
                  transition={{ type: "spring", stiffness: 180, damping: 18 }}
                  className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 shadow-[0_0_22px_rgba(0,229,255,0.05)]"
                >
                  <p className="text-[0.62rem] uppercase tracking-[0.24em] text-slate-400">{item.period}</p>
                  <h3 className="mt-3 text-2xl font-bold tracking-[-0.04em] text-white">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-300">{item.detail}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
