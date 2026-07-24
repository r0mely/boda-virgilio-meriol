import { wedding } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="relative bg-ink px-6 py-16 text-center">
      <p className="font-script text-4xl text-gold-light">
        {wedding.groom} &amp; {wedding.bride}
      </p>
      <div className="mx-auto mt-5 h-px w-20 bg-gradient-to-r from-transparent via-gold-light to-transparent" />
      <p className="mt-5 font-body text-xs uppercase tracking-[0.35em] text-cream/60">
        {wedding.dateLabel}
      </p>
      <p className="mt-2 font-body text-[0.65rem] uppercase tracking-[0.3em] text-cream/40">
        {wedding.coupleHashtag}
      </p>
    </footer>
  );
}
