/**
 * GOOGLE APPS SCRIPT — Recibe las confirmaciones RSVP y las guarda
 * en una hoja de Google Sheets.
 *
 * INSTALACIÓN:
 * 1. Crea una hoja de cálculo nueva en Google Sheets.
 * 2. En la primera fila agrega estos encabezados (columna A a F):
 *    Fecha | Nombre | Teléfono | Asistencia | Acompañantes | Mensaje
 * 3. Ve a Extensiones → Apps Script y pega este código completo
 *    (reemplazando el contenido por defecto).
 * 4. Haz clic en "Implementar" → "Nueva implementación".
 *    - Tipo: Aplicación web
 *    - Ejecutar como: Yo (tu cuenta)
 *    - Quién tiene acceso: Cualquier usuario
 * 5. Copia la URL del Web App generada y pégala como valor de
 *    RSVP_ENDPOINT en tu archivo .env (ver .env.example).
 * 6. Vuelve a implementar cada vez que edites este script
 *    ("Gestionar implementaciones" → editar → nueva versión).
 */

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.name || "",
      data.phone || "",
      data.attendance === "si" ? "Sí asistirá" : "No asistirá",
      data.guests || "1",
      data.message || "",
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ ok: true })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, error: String(err) })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput(
    JSON.stringify({ ok: true, message: "RSVP endpoint activo" })
  ).setMimeType(ContentService.MimeType.JSON);
}
