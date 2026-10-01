"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { skillGroups } from "@/data/site-data";

export function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<{ name: string; description: string; related: string[] } | null>(null);
  const reducedMotion = useReducedMotion();

  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">Technology Stack</p>
        <h2 className="mt-3 text-3xl font-black tracking-[-0.06em] text-white sm:text-5xl">MY TECHNOLOGY STACK</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {skillGroups.map((group, groupIndex) => (
          <motion.div
            key={group.title}
            initial={reducedMotion ? false : { opacity: 0, y: 24 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: groupIndex * 0.1, ease: "easeOut" }}
            whileHover={reducedMotion ? undefined : { y: -4 }}
            className="rounded-[28px] border border-white/10 bg-white/[0.03] p-5"
          >
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">{group.title}</h3>
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill, skillIndex) => (
                <motion.button
                  key={skill.name}
                  type="button"
                  onMouseEnter={() => setSelectedSkill(skill)}
                  onFocus={() => setSelectedSkill(skill)}
                  onMouseLeave={() => setSelectedSkill(null)}
                  onBlur={() => setSelectedSkill(null)}
                  initial={reducedMotion ? false : { opacity: 0, scale: 0.92 }}
                  whileInView={reducedMotion ? undefined : { opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: groupIndex * 0.08 + skillIndex * 0.035 }}
                  whileHover={reducedMotion ? undefined : { y: -3, scale: 1.04 }}
                  whileTap={reducedMotion ? undefined : { scale: 0.96 }}
                  className="rounded-full border border-white/10 bg-[#0a1220]/80 px-3 py-2 text-xs font-medium uppercase tracking-[0.15em] text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-200"
                >
                  {skill.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: selectedSkill ? 1 : 0.8, y: selectedSkill ? 0 : 12 }}
        className="mt-8 min-h-[110px] rounded-[28px] border border-[#e2b963]/20 bg-[linear-gradient(135deg,rgba(226,185,99,0.1),rgba(165,79,49,0.08))] p-5"
      >
        <AnimatePresence mode="wait">
        {selectedSkill ? (
          <motion.div
            key={selectedSkill.name}
            initial={reducedMotion ? undefined : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reducedMotion ? undefined : { opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
          >
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-cyan-300">Selected Skill</p>
            <h3 className="mt-2 text-2xl font-bold text-white">{selectedSkill.name}</h3>
            <p className="mt-2 max-w-2xl text-slate-300">{selectedSkill.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {selectedSkill.related.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[0.62rem] uppercase tracking-[0.18em] text-slate-200">{item}</span>
              ))}
            </div>
          </div>
          </motion.div>
        ) : (
          <motion.div
            key="skill-hint"
            initial={reducedMotion ? undefined : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reducedMotion ? undefined : { opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-xs uppercase tracking-[0.22em] text-cyan-300">Hover a skill</p>
            <p className="mt-2 text-lg text-slate-300">Explore how each technology connects to the work, systems, and projects behind the portfolio.</p>
          </motion.div>
        )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
