"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { wedding } from "@/lib/config";

export default function Envelope({ onOpen }: { onOpen: () => void }) {
  const [stage, setStage] = useState<"closed" | "breaking" | "opening" | "gone">(
    "closed"
  );

  function handleClick() {
    if (stage !== "closed") return;
    setStage("breaking");
    setTimeout(() => setStage("opening"), 650);
    setTimeout(() => {
      setStage("gone");
      onOpen();
    }, 2100);
  }

  return (
    <AnimatePresence>
      {stage !== "gone" && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-champagne via-cream to-champagne-deep"
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
        >
          {/* Textura de fondo */}
          <div className="absolute inset-0 bg-paper-texture" />
          <div className="pointer-events-none absolute inset-0 opacity-40">
            {[...Array(18)].map((_, i) => (
              <span
                key={i}
                className="absolute h-1 w-1 rounded-full bg-gold animate-twinkle"
                style={{
                  top: `${(i * 37) % 100}%`,
                  left: `${(i * 53) % 100}%`,
                  animationDelay: `${i * 0.3}s`,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 flex flex-col items-center px-6 text-center">
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mb-6 font-body text-[0.65rem] uppercase tracking-[0.45em] text-gold-deep"
            >
              Tienes una invitación
            </motion.p>

            {/* SOBRE 3D */}
            <div className="perspective-1200">
              <motion.div
                className="preserve-3d relative h-[220px] w-[300px] sm:h-[260px] sm:w-[360px]"
                animate={
                  stage === "breaking"
                    ? { rotateZ: [0, -1.5, 1.5, -1, 1, 0], scale: [1, 1.02, 1] }
                    : stage === "opening"
                    ? { y: -18, scale: 1.04 }
                    : { y: [0, -6, 0] }
                }
                transition={
                  stage === "breaking"
                    ? { duration: 0.6, ease: "easeInOut" }
                    : stage === "opening"
                    ? { duration: 1.1, ease: "easeInOut" }
                    : { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }
              >
                {/* Cuerpo del sobre */}
                <div className="absolute inset-0 rounded-sm bg-cream shadow-card ring-1 ring-gold-light/60">
                  <div className="absolute inset-x-0 bottom-0 top-[38%] rounded-b-sm bg-champagne" />
                  {/* Solapa trasera visible */}
                  <div
                    className="absolute inset-x-0 top-0 h-[62%] origin-top bg-champagne-deep"
                    style={{
                      clipPath: "polygon(0 0, 100% 0, 50% 78%)",
                    }}
                  />
                </div>

                {/* Tarjeta que se asoma al abrir */}
                <motion.div
                  className="absolute inset-x-6 top-2 flex h-[70%] flex-col items-center justify-center rounded-[2px] bg-cream shadow-md ring-1 ring-gold-light/50"
                  initial={{ y: 20, opacity: 0 }}
                  animate={
                    stage === "opening"
                      ? { y: -60, opacity: 1 }
                      : { y: 20, opacity: 0 }
                  }
                  transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
                >
                  <span className="font-script text-4xl text-gold-deep">
                    {wedding.groom[0]}
                    {wedding.bride[0]}
                  </span>
                </motion.div>

                {/* Solapa frontal (triángulo superior) que se abre */}
                <motion.div
                  className="absolute inset-x-0 top-0 h-[62%] origin-top bg-gradient-to-b from-champagne to-champagne-deep shadow-sm"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 50% 78%)",
                    transformStyle: "preserve-3d",
                  }}
                  animate={
                    stage === "opening" || stage === "breaking"
                      ? { rotateX: 200 }
                      : { rotateX: 0 }
                  }
                  transition={{ duration: 0.9, ease: "easeInOut", delay: 0.15 }}
                />

                {/* Sello de cera */}
                <motion.button
                  aria-label="Abrir invitación"
                  onClick={handleClick}
                  className="absolute left-1/2 top-[36%] z-20 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-gradient-to-br from-wax to-wax-deep text-cream shadow-gold ring-2 ring-gold-light/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:h-20 sm:w-20"
                  animate={
                    stage === "breaking"
                      ? { scale: [1, 1.15, 0], rotate: [0, -8, 12], opacity: [1, 1, 0] }
                      : { scale: 1, opacity: 1 }
                  }
                  whileHover={stage === "closed" ? { scale: 1.06 } : {}}
                  whileTap={stage === "closed" ? { scale: 0.95 } : {}}
                  transition={{ duration: 0.55, ease: "easeIn" }}
                  disabled={stage !== "closed"}
                >
                  <span className="font-display text-lg tracking-wide sm:text-xl">
                    {wedding.envelopeSeal}
                  </span>
                </motion.button>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: stage === "closed" ? 1 : 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="mt-8 font-body text-[0.6rem] uppercase tracking-[0.4em] text-ink-soft"
            >
              Toca el sello para abrir
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
