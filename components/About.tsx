"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, BrainCircuit, Code2, Database } from "lucide-react";
import { stats } from "@/data/site-data";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-12 flex items-end justify-between gap-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">About</p>
          <h2 className="mt-2 text-3xl font-black tracking-[-0.05em] text-white sm:text-5xl">AI, DATA &amp; PRODUCT ENGINEERING</h2>
        </motion.div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.p
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="text-lg leading-8 text-slate-300"
          >
            I&apos;m THIVIN S, a B.Tech student in Artificial Intelligence &amp; Data Science focused on building practical systems where AI, data, and product thinking come together.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.75, delay: 0.05 }}
            className="text-lg leading-8 text-slate-300"
          >
            My work spans machine learning, intelligent interfaces, data-driven systems, and end-to-end builds that bridge complex problem solving with clean, usable experiences.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="text-lg leading-8 text-slate-300"
          >
            I&apos;m driven by a simple standard: build intelligent systems that are useful, reliable, and genuinely valuable in the real world.
          </motion.p>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: BrainCircuit, label: "Focus", value: "AI Systems", color: "text-cyan-300" },
              { icon: Database, label: "Build", value: "Data Systems", color: "text-violet-300" },
            ].map(({ icon: Icon, label, value, color }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.65, delay: index * 0.12 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm shadow-[0_0_24px_rgba(0,229,255,0.06)]"
              >
                <Icon className={`mb-4 h-8 w-8 ${color}`} />
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{label}</p>
                <p className="mt-2 text-xl font-semibold text-white">{value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          whileHover={{ y: -8, scale: 1.01 }}
          className="rounded-[28px] border border-white/10 bg-[#11100d]/80 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.28)]"
        >
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Profile</p>
              <h3 className="mt-2 text-2xl font-bold text-white">THIVIN S</h3>
            </div>
            <motion.div
              animate={{ rotate: [0, 8, -8, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-full border border-cyan-400/30 bg-cyan-400/8 p-3 text-cyan-200"
            >
              <Code2 className="h-6 w-6" />
            </motion.div>
          </div>

          <motion.div
            animate={{ y: [0, -8, 0], scale: [1, 1.02, 1] }}
            transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
            className="relative mb-6 h-64 overflow-hidden rounded-[22px] border border-white/10 bg-[#11100d] p-4"
          >
            <Image
              src="/thivin-portrait.png"
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-[70%_38%] brightness-[0.72] saturate-[0.75]"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-[#030914]/25" />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#07111f]/85 via-[#07111f]/45 to-[#07111f]/20" />
            <div className="relative flex h-full items-end justify-between rounded-[18px] border border-white/15 bg-gradient-to-t from-[#07111f]/90 via-transparent to-[#07111f]/20 p-4">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-white/75">Current focus</p>
                <p className="mt-3 text-xl font-semibold text-white">AI + Data</p>
              </div>
              <motion.div
                animate={{ boxShadow: ["0 0 0 rgba(96,165,250,0)", "0 0 20px rgba(96,165,250,0.28)", "0 0 0 rgba(96,165,250,0)"] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border border-[#e2b963]/70 bg-[#11100d]/60"
              >
                <Image
                  src="/thivin-portrait.png"
                  alt="THIVIN S"
                  fill
                  sizes="80px"
                  className="object-cover object-[70%_26%]"
                />
              </motion.div>
            </div>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.65, delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-4"
              >
                <p className="text-2xl font-black tracking-[-0.05em] text-white">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 flex items-center justify-between border-t border-white/10 pt-4"
          >
            <span className="text-sm text-slate-300">Ready to build smarter systems</span>
            <motion.span animate={{ x: [0, 5, 0], y: [0, -3, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
              <ArrowUpRight className="h-5 w-5 text-cyan-300" />
            </motion.span>
          </motion.div>
        </motion.aside>
      </div>
    </section>
  );
}
