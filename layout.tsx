import type { Metadata } from "next";
import { Cormorant_Garamond, Jost, Tangerine } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
});

const body = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
});

const script = Tangerine({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-script",
});

export const metadata: Metadata = {
  title: "Virgilio & Meriol — Nos Casamos",
  description:
    "Acompáñanos a celebrar el inicio de nuestra nueva vida juntos. 19 de septiembre de 2026.",
  openGraph: {
    title: "Virgilio & Meriol — Nos Casamos",
    description:
      "Acompáñanos a celebrar el inicio de nuestra nueva vida juntos. 19 de septiembre de 2026.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${display.variable} ${body.variable} ${script.variable} font-body bg-cream text-ink antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
