"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { wedding } from "@/lib/config";

/**
 * Reproductor de música de fondo.
 * Queda listo para funcionar: solo coloca tu archivo de audio en
 * /public/music/wedding-song.mp3 (o cambia la ruta en lib/config.ts).
 * Los navegadores bloquean el autoplay con sonido, así que la música
 * inicia con la primera interacción del usuario (p. ej. al abrir el sobre).
 */
export default function MusicPlayer({ startSignal }: { startSignal: boolean }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (startSignal && audioRef.current && !playing) {
      audioRef.current
        .play()
        .then(() => setPlaying(true))
        .catch(() => {
          // El navegador bloqueó el autoplay; el usuario podrá
          // iniciar la música manualmente con el botón flotante.
        });
    }
  }, [startSignal, playing]);

  function toggle() {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setPlaying(true))
        .catch(() => {});
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        src={wedding.music.src}
        loop
        preload="none"
        onCanPlay={() => setReady(true)}
      />
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        onClick={toggle}
        aria-label={playing ? "Pausar música" : "Reproducir música"}
        title={ready ? wedding.music.title : "Coloca tu archivo de música en /public/music"}
        className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-ink/90 text-cream shadow-gold ring-1 ring-gold-light/40 backdrop-blur transition hover:bg-gold-deep"
      >
        <motion.span
          animate={playing ? { rotate: 360 } : { rotate: 0 }}
          transition={
            playing
              ? { duration: 6, repeat: Infinity, ease: "linear" }
              : { duration: 0.3 }
          }
        >
          {playing ? <Volume2 size={18} /> : <VolumeX size={18} />}
        </motion.span>
      </motion.button>
    </>
  );
}
