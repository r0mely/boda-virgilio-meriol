"use client";

import { motion } from "framer-motion";
import { wedding } from "@/lib/config";

export default function Story() {
  return (
    <section id="historia" className="relative bg-cream px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-body text-xs uppercase tracking-[0.5em] text-gold-deep">
            Nuestra historia
          </p>
          <h2 className="font-display text-4xl text-ink sm:text-5xl">
            Un camino hacia el altar
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[18px] top-2 bottom-2 w-px bg-gradient-to-b from-gold-light via-gold to-gold-light sm:left-1/2 sm:-translate-x-1/2" />

          <div className="flex flex-col gap-14">
            {wedding.story.map((item, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: isLeft ? -24 : 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7 }}
                  className={`relative flex items-start gap-6 pl-12 sm:pl-0 ${
                    isLeft
                      ? "sm:flex-row sm:text-right"
                      : "sm:flex-row-reverse sm:text-left"
                  }`}
                >
                  <div
                    className={`hidden sm:block sm:w-1/2 ${
                      isLeft ? "" : ""
                    }`}
                  />
                  <div className="absolute left-[10px] top-1 z-10 flex h-4 w-4 items-center justify-center rounded-full bg-gold shadow-gold sm:left-1/2 sm:-translate-x-1/2">
                    <div className="h-1.5 w-1.5 rounded-full bg-cream" />
                  </div>

                  <div className="sm:w-1/2">
                    <span className="font-script text-3xl text-gold">
                      {item.year}
                    </span>
                    <h3 className="mt-1 font-display text-2xl text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-2 font-body text-sm leading-relaxed text-ink-soft">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
