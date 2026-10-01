"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";

export type Project = {
  id: number;
  number: string;
  title: string;
  shortDescription: string;
  description: string;
  tech: string[];
  accent: "cyan" | "purple";
  github: string;
  image: string;
  overview: string;
  problem: string;
  approach: string;
  stack: string[];
  architecture: string;
  features: string[];
  result: string;
  learned: string;
};

export function ProjectCard({ project, onOpen }: { project: Project; onOpen: (project: Project) => void }) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={reducedMotion ? undefined : { y: -8, scale: 1.01, rotateX: 1 }}
      transition={{ type: "spring", stiffness: 180, damping: 18 }}
      style={{ transformStyle: "preserve-3d" }}
      className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-4 shadow-[0_18px_50px_rgba(0,0,0,0.35)] lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-8 lg:p-6"
    >
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        whileHover={reducedMotion ? undefined : { opacity: 1 }}
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(184,92,56,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(196,160,98,0.15),transparent_35%)]"
      />
      <div className={`absolute inset-x-0 top-0 h-px ${project.accent === "cyan" ? "bg-gradient-to-r from-cyan-500/0 via-cyan-400 to-cyan-500/0" : "bg-gradient-to-r from-violet-500/0 via-violet-400 to-violet-500/0"}`} />

      <div>
        <div className="mb-5 flex items-center justify-between text-[0.62rem] uppercase tracking-[0.22em] text-slate-400">
          <span>{project.number}</span>
          <span className="inline-flex items-center gap-2 text-cyan-300">{project.id < 10 ? `0${project.id}` : project.id}</span>
        </div>

        <motion.button
          type="button"
          aria-label={`Open ${project.title} project details`}
          aria-haspopup="dialog"
          onClick={() => onOpen(project)}
          whileHover={reducedMotion ? undefined : { scale: 1.025 }}
          whileTap={reducedMotion ? undefined : { scale: 0.99 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="relative mb-5 block aspect-video w-full overflow-hidden rounded-[22px] border border-white/10 bg-[#17140e] text-left"
        >
          <Image
            src={project.image}
            alt={`${project.title} frontend hero artwork`}
            fill
            loading="lazy"
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#11100c]/85 via-[#11100c]/10 to-transparent" />
          <motion.div
            aria-hidden="true"
            animate={reducedMotion ? undefined : { x: ["-110%", "220%"] }}
            transition={{ duration: 5, repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" }}
            className="absolute inset-y-0 w-1/3 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/15 to-transparent"
          />
          <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-4">
            <div>
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-[#f1d38d]">Doxora / Document AI</p>
              <p className="mt-1 text-sm font-medium text-white">Explore the product visual</p>
            </div>
            <span className="rounded-full border border-white/25 bg-black/35 px-3 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">Frontend visual</span>
          </div>
        </motion.button>
      </div>

      <div className="min-w-0 lg:py-5">
        <motion.h3 layout className="text-2xl font-bold tracking-[-0.05em] text-white sm:text-3xl">{project.title}</motion.h3>
        <p className="mt-4 text-base leading-7 text-slate-300">{project.shortDescription}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((item, index) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[0.62rem] uppercase tracking-[0.18em] text-slate-300"
            >
              {item}
            </motion.span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-medium text-slate-100 transition hover:border-[#e2b963]/60">
            <Code2 className="h-4 w-4" /> GitHub
          </a>
          <motion.button
            whileHover={reducedMotion ? undefined : { x: 3, y: -2 }}
            whileTap={reducedMotion ? undefined : { scale: 0.97 }}
            type="button"
            aria-haspopup="dialog"
            onClick={() => onOpen(project)}
            className="inline-flex items-center gap-2 rounded-full border border-[#e2b963]/40 bg-[#e2b963]/[0.08] px-4 py-2 text-sm font-medium text-[#f1d38d]"
          >
            View Project Details <ArrowUpRight className="h-4 w-4" />
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}
