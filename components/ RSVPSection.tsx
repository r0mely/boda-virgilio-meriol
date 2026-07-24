"use client";

import { motion } from "framer-motion";
import RSVPForm from "./RSVPForm";

export default function RSVPSection() {
  return (
    <section id="confirmar" className="relative bg-champagne/40 px-6 py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-14 text-center"
      >
        <p className="mb-3 font-body text-xs uppercase tracking-[0.5em] text-gold-deep">
          Confirma tu lugar
        </p>
        <h2 className="font-display text-4xl text-ink sm:text-5xl">RSVP</h2>
        <p className="mx-auto mt-4 max-w-md font-body text-sm text-ink-soft">
          Por favor confirma tu asistencia antes del 1 de agosto de 2026 para
          poder organizar todo con cariño.
        </p>
      </motion.div>

      <RSVPForm />
    </section>
  );
}
