import { Code2, Globe, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#05070D]/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left sm:px-6 lg:px-8">
        <div>
          <p className="text-xl font-black tracking-[-0.06em] text-white">THIVIN S</p>
          <p className="mt-2 text-[0.62rem] uppercase tracking-[0.24em] text-slate-400">AI &amp; DATA SCIENCE • BUILDER • LEARNER</p>
        </div>

        <div className="flex items-center justify-center gap-3 sm:justify-end">
          <a href="https://github.com/thivin-26" target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-full border border-white/10 bg-white/[0.02] p-2 text-slate-200 hover:border-cyan-400/40 hover:text-cyan-200">
            <Code2 className="h-4 w-4" />
          </a>
          <a href="https://www.linkedin.com/in/thivin-s-8184163a7" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full border border-white/10 bg-white/[0.02] p-2 text-slate-200 hover:border-cyan-400/40 hover:text-cyan-200">
            <Globe className="h-4 w-4" />
          </a>
          <a href="mailto:thivinpriya26@gmail.com" aria-label="Email" className="rounded-full border border-white/10 bg-white/[0.02] p-2 text-slate-200 hover:border-cyan-400/40 hover:text-cyan-200">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 border-t border-white/10 px-4 py-4 text-[0.65rem] uppercase tracking-[0.18em] text-slate-500 sm:px-6 lg:px-8">
        <p>Designed &amp; built with curiosity.</p>
        <div className="inline-flex items-center gap-2 text-emerald-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
          Available
        </div>
      </div>
    </footer>
  );
}
