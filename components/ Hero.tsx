"use client";

import { motion } from "framer-motion";
import { wedding } from "@/lib/config";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-cream px-6 py-24 text-center">
      <div className="absolute inset-0 bg-paper-texture" />

      {/* Marco decorativo dorado */}
      <div className="pointer-events-none absolute inset-4 rounded-sm border border-gold-light/40 sm:inset-8" />
      <div className="pointer-events-none absolute inset-6 rounded-sm border border-gold-light/20 sm:inset-12" />

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 font-body text-xs uppercase tracking-[0.5em] text-gold-deep"
      >
        {wedding.invitationTitle}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="relative z-10 mt-6 font-display text-6xl leading-none text-ink sm:text-8xl"
      >
        {wedding.groom}
        <motion.span
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mx-4 inline-block font-script text-5xl text-gold sm:mx-6 sm:text-7xl"
        >
          &amp;
        </motion.span>
        {wedding.bride}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.9, delay: 1.1 }}
        className="relative z-10 mt-8 h-px w-40 bg-gradient-to-r from-transparent via-gold to-transparent sm:w-64"
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 1.3 }}
        className="relative z-10 mt-8 font-body text-sm uppercase tracking-[0.35em] text-ink-soft sm:text-base"
      >
        {wedding.dayOfWeekLabel} · {wedding.dateLabel}
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 1.5 }}
        className="relative z-10 mt-2 max-w-md font-body text-xs text-ink-soft/80 sm:text-sm"
      >
        {wedding.reception.name} — {wedding.ceremony.address}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { duration: 1, delay: 1.8 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 2 },
        }}
        className="relative z-10 mt-16 flex flex-col items-center gap-2 text-gold-deep"
      >
        <span className="font-body text-[0.6rem] uppercase tracking-[0.4em]">
          Desliza
        </span>
        <svg width="14" height="22" viewBox="0 0 14 22" fill="none">
          <rect
            x="1"
            y="1"
            width="12"
            height="20"
            rx="6"
            stroke="currentColor"
            strokeWidth="1"
          />
          <circle cx="7" cy="6" r="1.5" fill="currentColor" />
        </svg>
      </motion.div>
    </section>
  );
}
