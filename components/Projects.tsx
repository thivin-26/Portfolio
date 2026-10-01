"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, X } from "lucide-react";
import { projects } from "@/data/site-data";
import { ProjectCard, type Project } from "@/components/ProjectCard";

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!selectedProject) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProject(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedProject]);

  return (
    <section ref={sectionRef} id="projects" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8 }}
        className="mb-12 text-left"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">Featured Project</p>
        <h2 className="mt-3 text-3xl font-black tracking-[-0.06em] text-white sm:text-5xl">AI that makes complex documents easier to work with.</h2>
      </motion.div>

      <div className="grid gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: index * 0.12, ease: "easeOut" }}
          >
            <ProjectCard project={project} onOpen={setSelectedProject} />
          </motion.div>
        ))}
      </div>

      {typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050403]/80 p-4 backdrop-blur-md sm:p-8"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-labelledby="project-dialog-title"
                initial={{ opacity: 0, scale: 0.94, y: 32, rotateX: 4 }}
                animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, scale: 0.97, y: 18 }}
                transition={{ type: "spring", stiffness: 260, damping: 24 }}
                onClick={(event) => event.stopPropagation()}
                className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[30px] border border-[#e2b963]/20 bg-[#11100d] p-5 text-[#f4efe2] shadow-[0_30px_100px_rgba(0,0,0,0.65)] sm:p-8"
              >
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-[#e2b963]">{selectedProject.number}</p>
                  <h3 id="project-dialog-title" className="mt-3 text-3xl font-black tracking-[-0.05em] text-[#f4efe2]">{selectedProject.title}</h3>
                </div>
                <button type="button" aria-label="Close project details" onClick={() => setSelectedProject(null)} className="rounded-full border border-white/10 bg-white/[0.04] p-2 text-slate-200 transition hover:border-[#e2b963]/40 hover:text-[#f1d38d]">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08, duration: 0.45 }}
                className="relative mb-6 aspect-video overflow-hidden rounded-[22px] border border-[#e2b963]/20 bg-[#17140e]"
              >
                <Image src={selectedProject.image} alt={`${selectedProject.title} frontend hero artwork`} fill loading="lazy" sizes="(max-width: 1024px) 100vw, 800px" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090806]/80 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-full border border-[#e2b963]/35 bg-[#090806]/70 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#f1d38d] backdrop-blur-sm">Doxora frontend visual</span>
              </motion.div>

              <div className="mb-6 rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[0.62rem] uppercase tracking-[0.16em] text-slate-200">{item}</span>
                  ))}
                </div>
              </div>

              <div className="grid gap-8 lg:grid-cols-2">
                <div className="space-y-6">
                  <div>
                    <p className="mb-2 text-xs uppercase tracking-[0.22em] text-[#e2b963]">Project Overview</p>
                    <p className="text-base leading-7 text-slate-300">{selectedProject.overview}</p>
                  </div>
                  <div>
                    <p className="mb-2 text-xs uppercase tracking-[0.22em] text-[#e2b963]">The Problem</p>
                    <p className="text-base leading-7 text-slate-300">{selectedProject.problem}</p>
                  </div>
                  <div>
                    <p className="mb-2 text-xs uppercase tracking-[0.22em] text-[#e2b963]">The Approach</p>
                    <p className="text-base leading-7 text-slate-300">{selectedProject.approach}</p>
                  </div>
                  <div>
                    <p className="mb-2 text-xs uppercase tracking-[0.22em] text-[#e2b963]">Technology Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.stack.map((item) => (
                        <span key={item} className="rounded-full border border-[#e2b963]/20 bg-[#e2b963]/[0.06] px-2.5 py-1 text-[0.62rem] uppercase tracking-[0.18em] text-[#f1d38d]">{item}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <p className="mb-2 text-xs uppercase tracking-[0.22em] text-[#e2b963]">Architecture</p>
                    <p className="text-base leading-7 text-slate-300">{selectedProject.architecture}</p>
                  </div>
                  <div>
                    <p className="mb-2 text-xs uppercase tracking-[0.22em] text-[#e2b963]">Key Features</p>
                    <ul className="space-y-2 text-slate-300">
                      {selectedProject.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#e2b963]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2 text-xs uppercase tracking-[0.22em] text-[#e2b963]">Result</p>
                    <p className="text-base leading-7 text-slate-300">{selectedProject.result}</p>
                  </div>
                  <div>
                    <p className="mb-2 text-xs uppercase tracking-[0.22em] text-[#e2b963]">What I Learned</p>
                    <p className="text-base leading-7 text-slate-300">{selectedProject.learned}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href={selectedProject.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#e2b963]/35 bg-[#e2b963]/[0.08] px-4 py-2 text-sm font-medium text-[#f1d38d]">
                  GitHub <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </section>
  );
}
