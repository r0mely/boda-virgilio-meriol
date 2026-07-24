"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { wedding } from "@/lib/config";

function getTimeLeft() {
  const target = new Date(wedding.date).getTime();
  const now = Date.now();
  const diff = Math.max(target - now, 0);

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    done: diff <= 0,
  };
}

const units: { key: "days" | "hours" | "minutes" | "seconds"; label: string }[] = [
  { key: "days", label: "Días" },
  { key: "hours", label: "Horas" },
  { key: "minutes", label: "Minutos" },
  { key: "seconds", label: "Segundos" },
];

export default function Countdown() {
  const [time, setTime] = useState<ReturnType<typeof getTimeLeft> | null>(null);

  useEffect(() => {
    setTime(getTimeLeft());
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative bg-ink px-6 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <div className="absolute inset-0 bg-gold-shimmer bg-[length:200%_100%] animate-shimmer" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-3 font-body text-xs uppercase tracking-[0.5em] text-gold-light"
        >
          Faltan solo
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-14 font-display text-3xl text-cream sm:text-4xl"
        >
          {time?.done ? "¡Hoy nos casamos!" : "Para celebrar juntos"}
        </motion.h2>

        <div className="grid grid-cols-4 gap-3 sm:gap-8">
          {units.map((u, idx) => (
            <motion.div
              key={u.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 + idx * 0.08 }}
              className="flex flex-col items-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold-light/40 bg-white/[0.03] font-display text-2xl text-gold-light shadow-gold sm:h-24 sm:w-24 sm:text-4xl">
                {time ? String(time[u.key]).padStart(2, "0") : "00"}
              </div>
              <span className="mt-3 font-body text-[0.6rem] uppercase tracking-[0.3em] text-cream/70 sm:text-xs">
                {u.label}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mx-auto mt-14 h-px w-24 bg-gradient-to-r from-transparent via-gold-light to-transparent" />
        <p className="mt-6 font-script text-3xl text-gold-light sm:text-4xl">
          {wedding.dayOfWeekLabel}, {wedding.dateLabel}
        </p>
      </div>
    </section>
  );
}
