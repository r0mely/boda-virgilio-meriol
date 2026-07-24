"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { wedding } from "@/lib/config";
import QRCodeBlock from "./QRCodeBlock";

export default function MapSection() {
  const embedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    wedding.mapEmbedQuery
  )}&output=embed`;

  return (
    <section id="ubicacion" className="relative bg-cream px-6 py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-14 text-center"
      >
        <p className="mb-3 font-body text-xs uppercase tracking-[0.5em] text-gold-deep">
          Cómo llegar
        </p>
        <h2 className="font-display text-4xl text-ink sm:text-5xl">Ubicación</h2>
      </motion.div>

      <div className="mx-auto grid max-w-5xl gap-10 sm:grid-cols-5 sm:gap-8">
        <div className="sm:col-span-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-sm shadow-card ring-1 ring-gold-light/40"
          >
            <iframe
              title="Ubicación de la boda"
              src={embedSrc}
              width="100%"
              height="380"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          <a
            href={wedding.mapsShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-gold-deep px-6 py-3 font-body text-xs uppercase tracking-[0.25em] text-gold-deep transition hover:bg-gold-deep hover:text-cream"
          >
            <Navigation size={15} />
            Abrir en Google Maps
          </a>
        </div>

        <div className="flex flex-col justify-center gap-8 sm:col-span-2">
          <div className="flex gap-4">
            <MapPin className="mt-1 shrink-0 text-gold-deep" size={20} />
            <div>
              <h3 className="font-display text-xl text-ink">Ceremonia</h3>
              <p className="font-body text-sm text-ink-soft">
                {wedding.ceremony.name}
              </p>
              <p className="font-body text-sm text-ink-soft">
                {wedding.ceremony.address}
              </p>
              <p className="mt-1 font-body text-xs uppercase tracking-widest text-gold-deep">
                {wedding.ceremony.time}
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <MapPin className="mt-1 shrink-0 text-gold-deep" size={20} />
            <div>
              <h3 className="font-display text-xl text-ink">Recepción</h3>
              <p className="font-body text-sm text-ink-soft">
                {wedding.reception.name}
              </p>
              <p className="font-body text-sm text-ink-soft">
                {wedding.reception.address}
              </p>
              <p className="mt-1 font-body text-xs uppercase tracking-widest text-gold-deep">
                {wedding.reception.time}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-3 border-t border-gold-light/30 pt-6">
            <span className="font-body text-xs uppercase tracking-[0.3em] text-ink-soft">
              Escanea para ubicarnos
            </span>
            <QRCodeBlock value={wedding.mapsShareUrl} size={112} />
          </div>
        </div>
      </div>
    </section>
  );
}
