import { NextRequest, NextResponse } from "next/server";

/**
 * Este endpoint recibe el formulario de RSVP desde el cliente y lo reenvía
 * al Web App de Google Apps Script que escribe en Google Sheets.
 *
 * Configura la variable de entorno RSVP_ENDPOINT (server-side, sin NEXT_PUBLIC_)
 * con la URL de tu Web App de Apps Script. Ver README.md para el script
 * completo que debes pegar en Google Apps Script.
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { name, guests, attendance, message, phone } = body;

    if (!name || !attendance) {
      return NextResponse.json(
        { ok: false, error: "Faltan campos obligatorios." },
        { status: 400 }
      );
    }

    const endpoint = process.env.RSVP_ENDPOINT;

    if (!endpoint) {
      // No hay endpoint configurado todavía: devolvemos éxito simulado
      // para que el frontend pueda probarse antes de conectar Sheets.
      console.warn(
        "[RSVP] RSVP_ENDPOINT no configurado. Revisa el README.md para conectarlo a Google Sheets."
      );
      return NextResponse.json({
        ok: true,
        simulated: true,
        received: { name, guests, attendance, message, phone },
      });
    }

    const sheetResponse = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        guests,
        attendance,
        message: message || "",
        phone: phone || "",
        timestamp: new Date().toISOString(),
      }),
    });

    if (!sheetResponse.ok) {
      throw new Error(`Google Sheets respondió con estado ${sheetResponse.status}`);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[RSVP] Error al enviar confirmación:", err);
    return NextResponse.json(
      { ok: false, error: "No se pudo enviar tu confirmación. Intenta de nuevo." },
      { status: 500 }
    );
  }
}
