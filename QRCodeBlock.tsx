"use client";

import { QRCodeSVG } from "qrcode.react";

export default function QRCodeBlock({
  value,
  size = 120,
}: {
  value: string;
  size?: number;
}) {
  return (
    <div className="inline-flex rounded-sm bg-cream p-3 shadow-card ring-1 ring-gold-light/40">
      <QRCodeSVG
        value={value}
        size={size}
        bgColor="#FBF8F2"
        fgColor="#332B22"
        level="M"
      />
    </div>
  );
}
