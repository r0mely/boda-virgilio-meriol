"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarPlus, Apple, ChevronDown } from "lucide-react";
import { wedding } from "@/lib/config";

function formatICSDate(d: Date) {
  return d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}

function buildGoogleUrl() {
  const start = new Date(wedding.date);
  const end = new Date(start.getTime() + 5 * 60 * 60 * 1000); // +5h
  const dates = `${formatICSDate(start)}/${formatICSDate(end)}`;
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `Boda de ${wedding.groom} & ${wedding.bride}`,
    dates,
    details: `Acompáñanos a celebrar nuestra boda. ${wedding.dressCode}`,
    location: wedding.mapAddress,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function buildICSFile() {
  const start = new Date(wedding.date);
  const end = new Date(start.getTime() + 5 * 60 * 60 * 1000);
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Boda Virgilio & Meriol//ES",
    "BEGIN:VEVENT",
    `UID:${Date.now()}@boda-virgilio-meriol`,
    `DTSTAMP:${formatICSDate(new Date())}`,
    `DTSTART:${formatICSDate(start)}`,
    `DTEND:${formatICSDate(end)}`,
    `SUMMARY:Boda de ${wedding.groom} & ${wedding.bride}`,
    `DESCRIPTION:Acompáñanos a celebrar nuestra boda. ${wedding.dressCode}`,
    `LOCATION:${wedding.mapAddress}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "boda-virgilio-meriol.ics";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

export default function AddToCalendar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-body text-xs uppercase tracking-[0.25em] text-cream shadow-gold transition hover:bg-gold-deep"
      >
        <CalendarPlus size={16} />
        Agregar al calendario
        <ChevronDown
          size={14}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute left-1/2 z-20 mt-3 w-56 -translate-x-1/2 overflow-hidden rounded-sm bg-cream shadow-card ring-1 ring-gold-light/40"
          >
            <a
              href={buildGoogleUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-3 font-body text-sm text-ink transition hover:bg-champagne"
            >
              <CalendarPlus size={16} className="text-gold-deep" />
              Google Calendar
            </a>
            <div className="gold-rule mx-4" />
            <button
              onClick={() => {
                buildICSFile();
                setOpen(false);
              }}
              className="flex w-full items-center gap-3 px-5 py-3 text-left font-body text-sm text-ink transition hover:bg-champagne"
            >
              <Apple size={16} className="text-gold-deep" />
              Apple / Outlook (.ics)
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
