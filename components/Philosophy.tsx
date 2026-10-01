"use client";

import { motion } from "framer-motion";

const steps = ["THINK", "BUILD", "TEST", "IMPROVE"];

export function Philosophy() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:66px_66px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.blockquote
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-center text-3xl font-light leading-tight tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl"
        >
          “Start with the real problem.
          <span className="block">Build with intent.</span>
          <span className="block">Make the result useful.”</span>
        </motion.blockquote>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 22, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.12, duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="rounded-full border border-white/10 bg-white/[0.02] px-5 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-slate-200 shadow-[0_0_28px_rgba(0,229,255,0.06)]"
            >
              {step}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
