"use client";

import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export function BackgroundEffects() {
  const reducedMotion = useReducedMotion();
  const pointerX = useMotionValue(-500);
  const pointerY = useMotionValue(-500);
  const smoothPointerX = useSpring(pointerX, { stiffness: 35, damping: 20, mass: 1.2 });
  const smoothPointerY = useSpring(pointerY, { stiffness: 35, damping: 20, mass: 1.2 });
  const { scrollYProgress } = useScroll();
  const glowY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const tealOrbY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const portraitScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.2]);

  useEffect(() => {
    if (reducedMotion || !window.matchMedia("(pointer: fine)").matches) return;

    const moveGlow = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      pointerX.set(event.clientX);
      pointerY.set(event.clientY);
    };

    window.addEventListener("pointermove", moveGlow, { passive: true });
    return () => window.removeEventListener("pointermove", moveGlow);
  }, [pointerX, pointerY, reducedMotion]);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        style={{ y: reducedMotion ? 0 : portraitY, scale: reducedMotion ? 1.08 : portraitScale }}
        className="absolute -inset-[10%]"
      >
        <Image
          src="/thivin-portrait.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_24%] brightness-[0.42] saturate-[0.55]"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[#070a0d]/65" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#090b0e]/60 via-[#090b0e]/80 to-[#090b0e]/90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_72%_18%,rgba(67,198,184,0.12),transparent_42%)]" />
      {!reducedMotion && (
        <>
          <motion.div
            style={{ x: smoothPointerX, y: smoothPointerY }}
            className="absolute -left-48 -top-48 h-96 w-96 rounded-full bg-[#43c6b8]/[0.09] blur-[100px]"
          />
          <motion.div
            animate={{ x: ["-20vw", "120vw"], y: ["12vh", "82vh"], opacity: [0, 0.65, 0] }}
            transition={{ duration: 16, delay: 2, repeat: Infinity, ease: "linear", repeatDelay: 5 }}
            className="absolute left-0 top-0 h-px w-48 rotate-[24deg] bg-gradient-to-r from-transparent via-[#a7f3eb]/65 to-transparent shadow-[0_0_14px_rgba(67,198,184,0.6)]"
          />
          <motion.div
            animate={{ x: ["110vw", "-20vw"], y: ["68vh", "18vh"], opacity: [0, 0.45, 0] }}
            transition={{ duration: 21, delay: 7, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
            className="absolute left-0 top-0 h-px w-36 -rotate-[18deg] bg-gradient-to-r from-transparent via-[#43c6b8]/70 to-transparent shadow-[0_0_12px_rgba(67,198,184,0.5)]"
          />
          <motion.div
            animate={{ scale: [0.85, 1.08, 0.85], opacity: [0.13, 0.28, 0.13] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[54%] top-[42%] h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#43c6b8]/[0.07] shadow-[0_0_80px_rgba(22,143,136,0.06)]"
          />
        </>
      )}
      <motion.div
        style={{ y: reducedMotion ? 0 : glowY }}
        className="absolute -left-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-[#43c6b8]/[0.1] blur-[100px]"
      />
      <motion.div
        style={{ y: reducedMotion ? 0 : tealOrbY }}
        className="absolute -right-40 top-[38%] h-[32rem] w-[32rem] rounded-full bg-[#168f88]/[0.08] blur-[110px]"
      />
      {!reducedMotion && (
        <>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
            className="absolute -right-36 -top-36 h-[38rem] w-[38rem] rounded-full border border-[#43c6b8]/15"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            className="absolute -right-20 -top-20 h-[28rem] w-[28rem] rounded-full border border-[#168f88]/12"
          />
        </>
      )}
      {!reducedMotion && (
        <div className="absolute inset-0 opacity-45">
          {[...Array(20)].map((_, index) => (
            <motion.span
              key={index}
              animate={{ y: [0, -18, 0], opacity: [0.18, 0.6, 0.18], scale: [0.8, 1.15, 0.8] }}
              transition={{ duration: 5 + (index % 5), delay: index * 0.35, repeat: Infinity, ease: "easeInOut" }}
              className="absolute h-1 w-1 rounded-full bg-[#a7f3eb] shadow-[0_0_12px_rgba(67,198,184,0.55)]"
              style={{ left: `${(index * 29) % 100}%`, top: `${(index * 37) % 100}%` }}
            />
          ))}
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-[#090b0e]/10 via-transparent to-[#090b0e]/55" />
    </div>
  );
}
