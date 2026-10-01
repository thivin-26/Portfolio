"use client";

import { motion } from "framer-motion";
import { learningCards } from "@/data/site-data";

export function Certifications() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">Learning &amp; Growth</p>
        <h2 className="mt-3 text-3xl font-black tracking-[-0.06em] text-white sm:text-5xl">CONTINUOUS LEARNING</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
          Current areas of exploration, developed through coursework and hands-on practice.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {learningCards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.08 }}
            className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5"
          >
            <div className="mb-5 h-10 w-10 rounded-full border border-cyan-400/30 bg-cyan-400/8 text-center text-base font-bold leading-10 text-cyan-200">
              {index + 1}
            </div>
            <p className="text-base font-semibold text-white">{card.title}</p>
            <p className="mt-3 text-sm leading-6 text-slate-400">{card.detail}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
