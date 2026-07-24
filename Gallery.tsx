"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { wedding } from "@/lib/config";

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const photos = wedding.gallery;

  function next() {
    if (active === null) return;
    setActive((active + 1) % photos.length);
  }
  function prev() {
    if (active === null) return;
    setActive((active - 1 + photos.length) % photos.length);
  }

  return (
    <section id="galeria" className="relative bg-champagne/40 px-6 py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-14 text-center"
      >
        <p className="mb-3 font-body text-xs uppercase tracking-[0.5em] text-gold-deep">
          Momentos
        </p>
        <h2 className="font-display text-4xl text-ink sm:text-5xl">Galería</h2>
      </motion.div>

      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
        {photos.map((src, idx) => (
          <motion.button
            key={src}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: (idx % 3) * 0.08 }}
            onClick={() => setActive(idx)}
            className={`group relative overflow-hidden rounded-sm shadow-card ring-1 ring-gold-light/30 ${
              idx % 5 === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-[3/4]"
            }`}
          >
            <Image
              src={src}
              alt={`Foto de la pareja ${idx + 1}`}
              fill
              sizes="(max-width: 640px) 50vw, 33vw"
              className="object-cover transition duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-ink/0 transition group-hover:bg-ink/10" />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4"
            onClick={() => setActive(null)}
          >
            <button
              aria-label="Cerrar"
              className="absolute right-5 top-5 text-cream/80 hover:text-gold-light"
              onClick={() => setActive(null)}
            >
              <X size={28} />
            </button>
            <button
              aria-label="Anterior"
              className="absolute left-3 text-cream/80 hover:text-gold-light sm:left-8"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
            >
              <ChevronLeft size={32} />
            </button>
            <button
              aria-label="Siguiente"
              className="absolute right-3 text-cream/80 hover:text-gold-light sm:right-8"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
            >
              <ChevronRight size={32} />
            </button>

            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="relative h-[70vh] w-full max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={photos[active]}
                alt={`Foto de la pareja ${active + 1}`}
                fill
                sizes="90vw"
                className="rounded-sm object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
