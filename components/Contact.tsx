"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Globe, Mail } from "lucide-react";
import { useState } from "react";

const contactEmail = "thivinpriya26@gmail.com";
const linkedinProfile = "https://www.linkedin.com/in/thivin-s-8184163a7";

export function Contact() {
  const [emailStatus, setEmailStatus] = useState<"opened" | "blocked" | null>(null);
  const [fallbackEmailUrl, setFallbackEmailUrl] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name"));
    const email = String(formData.get("email"));
    const message = String(formData.get("message"));
    const subject = `Portfolio opportunity enquiry from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const params = new URLSearchParams({
      view: "cm",
      fs: "1",
      to: contactEmail,
      su: subject,
      body,
    });
    const gmailWindow = window.open(`https://mail.google.com/mail/?${params.toString()}`, "_blank");

    if (gmailWindow) {
      gmailWindow.opener = null;
      setFallbackEmailUrl(null);
      setEmailStatus("opened");
    } else {
      const mailtoParams = new URLSearchParams({ subject, body });
      setFallbackEmailUrl(`mailto:${contactEmail}?${mailtoParams.toString()}`);
      setEmailStatus("blocked");
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="rounded-[32px] border border-[#e2b963]/20 bg-[linear-gradient(135deg,rgba(226,185,99,0.1),rgba(165,79,49,0.08),rgba(9,8,6,0.96))] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.28)] sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">Let&apos;s Connect</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.06em] text-white sm:text-5xl">LET&apos;S BUILD SOMETHING INTELLIGENT.</h2>
            <p className="mt-4 max-w-md text-lg leading-8 text-slate-300">Have a project, internship opportunity, or thoughtful problem to discuss? I&apos;d be glad to hear from you.</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`https://mail.google.com/mail/?${new URLSearchParams({ view: "cm", fs: "1", to: contactEmail, su: "Portfolio opportunity enquiry" }).toString()}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/8 px-4 py-3 text-sm font-medium text-cyan-100">
                <Mail className="h-4 w-4" /> EMAIL VIA GMAIL →
              </a>
              <a href="https://github.com/thivin-26" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-3 text-sm font-medium text-slate-100">
                <Code2 className="h-4 w-4" /> GITHUB →
              </a>
              <a href={linkedinProfile} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-3 text-sm font-medium text-slate-100">
                <Globe className="h-4 w-4" /> LINKEDIN PROFILE →
              </a>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            onSubmit={handleSubmit}
            className="rounded-[26px] border border-white/10 bg-[#11100d]/85 p-5 backdrop-blur-sm"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm text-slate-300">
                <span className="mb-2 block text-[0.68rem] uppercase tracking-[0.22em] text-slate-400">Name</span>
                <input type="text" name="name" placeholder="Your name" className="w-full rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400/50" required />
              </label>
              <label className="block text-sm text-slate-300">
                <span className="mb-2 block text-[0.68rem] uppercase tracking-[0.22em] text-slate-400">Email</span>
                <input type="email" name="email" placeholder="your@email.com" className="w-full rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400/50" required />
              </label>
            </div>

            <label className="mt-4 block text-sm text-slate-300">
              <span className="mb-2 block text-[0.68rem] uppercase tracking-[0.22em] text-slate-400">Message</span>
              <textarea name="message" rows={6} placeholder="Tell me about your idea or challenge..." className="w-full rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400/50" required />
            </label>

            <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#e2b963]/35 bg-[#e2b963]/10 px-5 py-3 text-sm font-semibold tracking-[0.18em] text-[#f1d38d] hover:shadow-[0_0_22px_rgba(226,185,99,0.2)]">
              OPEN GMAIL COMPOSE <ArrowRight className="h-4 w-4" />
            </button>
            {emailStatus === "opened" && (
              <p role="status" className="mt-4 text-sm text-slate-300">
                Gmail opened in a new tab. Sign in if prompted, then review and send your message.
              </p>
            )}
            {emailStatus === "blocked" && (
              <p role="status" className="mt-4 text-sm text-slate-300">
                Your browser blocked the Gmail tab.{" "}
                <a
                  href={fallbackEmailUrl ?? `mailto:${contactEmail}`}
                  className="font-semibold text-cyan-200 underline underline-offset-4"
                >
                  Open your email app instead
                </a>
                .
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
