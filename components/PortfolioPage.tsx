"use client";

import { motion, useMotionValue, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { About } from "@/components/About";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Journey } from "@/components/Journey";
import { Navbar } from "@/components/Navbar";
import { Philosophy } from "@/components/Philosophy";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export function PortfolioPage() {
  const [cursor, setCursor] = useState({ visible: false, expanded: false, text: "" });
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const smoothCursorX = useSpring(cursorX, { stiffness: 500, damping: 38, mass: 0.35 });
  const smoothCursorY = useSpring(cursorY, { stiffness: 500, damping: 38, mass: 0.35 });
  const trailCursorX = useSpring(cursorX, { stiffness: 110, damping: 24, mass: 0.65 });
  const trailCursorY = useSpring(cursorY, { stiffness: 110, damping: 24, mass: 0.65 });
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smoothScrollProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, mass: 0.2 });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine) and (min-width: 768px)");
    if (!reducedMotion && finePointer.matches) document.body.classList.add("custom-cursor");

    const updateCursor = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
      setCursor((current) => current.visible ? current : { ...current, visible: true });
    };

    const handlePointerOver = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || !(event.target instanceof Element)) return;
      const target = event.target.closest<HTMLElement>("a, button, article");
      setCursor((current) => ({
        ...current,
        expanded: Boolean(target),
        text: target?.matches("article") ? "VIEW" : target?.matches("button") ? "OPEN" : target?.matches("a") ? "GO" : "",
      }));
    };

    const handlePointerOut = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || !(event.target instanceof Element)) return;
      const from = event.target.closest("a, button, article");
      const to = event.relatedTarget instanceof Element ? event.relatedTarget.closest("a, button, article") : null;
      if (from && from !== to) setCursor((current) => ({ ...current, expanded: false, text: "" }));
    };

    window.addEventListener("pointermove", updateCursor);
    document.addEventListener("pointerover", handlePointerOver);
    document.addEventListener("pointerout", handlePointerOut);

    return () => {
      window.removeEventListener("pointermove", updateCursor);
      document.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("pointerout", handlePointerOut);
      document.body.classList.remove("custom-cursor");
    };
  }, [cursorX, cursorY, reducedMotion]);

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-[90] h-1 origin-left bg-[#43c6b8]"
        style={{ scaleX: smoothScrollProgress }}
      />
      {!reducedMotion && (
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[110] hidden overflow-hidden md:block">
          <motion.div
            className="absolute left-0 top-0"
            style={{ x: trailCursorX, y: trailCursorY, opacity: cursor.visible ? 1 : 0 }}
          >
            <motion.div
              animate={{ scale: cursor.expanded ? 1.12 : 0.72, opacity: cursor.expanded ? 0.45 : 0.28 }}
              transition={{ type: "spring", stiffness: 180, damping: 20 }}
              className="absolute -left-5 -top-5 h-10 w-10 rounded-full border border-[#43c6b8]/50 bg-[#43c6b8]/[0.06] blur-[1px]"
            />
          </motion.div>
          <motion.div
            className="absolute left-0 top-0"
            style={{ x: smoothCursorX, y: smoothCursorY, opacity: cursor.visible ? 1 : 0 }}
          >
            <motion.div
              animate={{
                width: cursor.expanded ? 66 : 20,
                height: cursor.expanded ? 66 : 20,
                rotate: cursor.expanded ? 135 : 0,
                borderRadius: cursor.expanded ? "22px" : "9999px",
              }}
              transition={{ type: "spring", stiffness: 320, damping: 22, mass: 0.55 }}
              className="absolute -left-[10px] -top-[10px] flex items-center justify-center border border-[#43c6b8]/90 bg-[#43c6b8]/[0.15] shadow-[0_0_30px_rgba(67,198,184,0.4)] backdrop-blur-sm"
            >
              <motion.span
                animate={{ opacity: cursor.expanded ? 1 : 0, rotate: cursor.expanded ? -135 : 0, scale: cursor.expanded ? 1 : 0.7 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="whitespace-nowrap text-[0.48rem] font-bold uppercase tracking-[0.14em] text-[#d2fffa]"
              >
                {cursor.text}
              </motion.span>
            </motion.div>
            <motion.div
              animate={{ scale: cursor.expanded ? [1, 1.5, 1] : 1 }}
              transition={{ duration: 1.1, repeat: cursor.expanded ? Infinity : 0, ease: "easeInOut" }}
              className="absolute -left-[3px] -top-[3px] h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.7)]"
            />
          </motion.div>
        </div>
      )}

      <div className="portfolio-shell relative isolate min-h-screen overflow-x-clip bg-transparent text-[#f1f5f9] antialiased">
        <BackgroundEffects />
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Philosophy />
            <Projects />
            <Skills />
            <Journey />
            <Certifications />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
