"use client";

import { motion } from "framer-motion";
import { Shirt, Gift } from "lucide-react";
import { wedding } from "@/lib/config";
import AddToCalendar from "./AddToCalendar";

export default function Details() {
  return (
    <section className="relative bg-cream px-6 py-24 sm:py-32">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-14 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 font-body text-xs uppercase tracking-[0.5em] text-gold-deep">
            Detalles
          </p>
          <h2 className="font-display text-4xl text-ink sm:text-5xl">
            Para que todo sea perfecto
          </h2>
        </motion.div>

        <div className="grid gap-10 sm:grid-cols-2 sm:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center gap-3"
          >
            <Shirt className="text-gold-deep" size={26} />
            <h3 className="font-display text-xl text-ink">Código de vestimenta</h3>
            <p className="max-w-xs font-body text-sm text-ink-soft">
              {wedding.dressCode}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center gap-3"
          >
            <Gift className="text-gold-deep" size={26} />
            <h3 className="font-display text-xl text-ink">Mesa de regalos</h3>
            <p className="max-w-xs font-body text-sm text-ink-soft">
              Tu presencia es nuestro mejor regalo. Si deseas obsequiarnos
              algo, agradecemos una lluvia de sobres.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <AddToCalendar />
        </motion.div>
      </div>
    </section>
  );
}
