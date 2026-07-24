"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, XCircle, Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function RSVPForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    guests: "1",
    attendance: "si",
    message: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Error al enviar");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Ocurrió un error inesperado."
      );
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mx-auto flex max-w-md flex-col items-center gap-4 rounded-sm bg-cream p-10 text-center shadow-card ring-1 ring-gold-light/40"
      >
        <CheckCircle2 className="text-gold-deep" size={40} />
        <h3 className="font-display text-2xl text-ink">¡Gracias por confirmar!</h3>
        <p className="font-body text-sm text-ink-soft">
          Hemos recibido tu respuesta. Estamos felices de contar contigo en
          este día tan especial.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex max-w-md flex-col gap-5 rounded-sm bg-cream p-8 shadow-card ring-1 ring-gold-light/40 sm:p-10"
    >
      <div className="flex flex-col gap-1.5">
        <label className="font-body text-xs uppercase tracking-[0.2em] text-ink-soft">
          Nombre completo *
        </label>
        <input
          required
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="rounded-sm border border-gold-light/50 bg-white/60 px-4 py-3 font-body text-sm text-ink outline-none transition focus:border-gold focus:ring-1 focus:ring-gold"
          placeholder="Tu nombre y apellido"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="font-body text-xs uppercase tracking-[0.2em] text-ink-soft">
          Teléfono
        </label>
        <input
          type="tel"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="rounded-sm border border-gold-light/50 bg-white/60 px-4 py-3 font-body text-sm text-ink outline-none transition focus:border-gold focus:ring-1 focus:ring-gold"
          placeholder="Opcional"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="font-body text-xs uppercase tracking-[0.2em] text-ink-soft">
            ¿Asistirás? *
          </label>
          <select
            value={form.attendance}
            onChange={(e) => setForm({ ...form, attendance: e.target.value })}
            className="rounded-sm border border-gold-light/50 bg-white/60 px-4 py-3 font-body text-sm text-ink outline-none transition focus:border-gold focus:ring-1 focus:ring-gold"
          >
            <option value="si">Sí, asistiré</option>
            <option value="no">No podré asistir</option>
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="font-body text-xs uppercase tracking-[0.2em] text-ink-soft">
            Acompañantes
          </label>
          <select
            value={form.guests}
            onChange={(e) => setForm({ ...form, guests: e.target.value })}
            className="rounded-sm border border-gold-light/50 bg-white/60 px-4 py-3 font-body text-sm text-ink outline-none transition focus:border-gold focus:ring-1 focus:ring-gold"
          >
            {[1, 2, 3, 4].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="font-body text-xs uppercase tracking-[0.2em] text-ink-soft">
          Mensaje para los novios
        </label>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          rows={3}
          className="resize-none rounded-sm border border-gold-light/50 bg-white/60 px-4 py-3 font-body text-sm text-ink outline-none transition focus:border-gold focus:ring-1 focus:ring-gold"
          placeholder="Opcional"
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 rounded-sm bg-wax/10 px-4 py-3 text-wax">
          <XCircle size={16} />
          <span className="font-body text-xs">{errorMsg}</span>
        </div>
      )}

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={status === "loading"}
        className="mt-2 flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 font-body text-xs uppercase tracking-[0.3em] text-cream shadow-gold transition hover:bg-gold-deep disabled:opacity-60"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send size={15} />
            Confirmar asistencia
          </>
        )}
      </motion.button>
    </form>
  );
}
