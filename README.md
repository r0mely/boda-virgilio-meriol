# Boda Virgilio & Meriol 💛

Invitación de boda digital premium construida con **Next.js 15**, **Tailwind CSS** y **Framer Motion**.

Incluye:

- Sobre 3D animado con sello de cera que se rompe al hacer clic/tap
- Portada con nombres, fecha y cuenta regresiva en vivo
- Historia de la pareja en línea de tiempo
- Galería de fotos con visor a pantalla completa
- Mapa de Google Maps integrado (ceremonia y recepción)
- Código QR con la dirección del evento
- Botón "Agregar al calendario" (Google Calendar + archivo .ics para Apple/Outlook)
- Formulario RSVP conectado a Google Sheets
- Reproductor de música de fondo (dejado preparado)
- Diseño 100% responsive, paleta blanco / champán / dorado

---

## 1. Instalación

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

---

## 2. Personalizar el contenido

Casi todo el texto, fechas y enlaces se editan en un solo archivo:

```
lib/config.ts
```

Ahí puedes cambiar: nombres, fecha y hora, historia, ubicación, dress code, enlace de Google Maps, etc.

---

## 3. Fotos y música

- **Fotos:** reemplaza los archivos en `public/images/gallery-1.jpg` … `gallery-6.jpg` por tus propias fotos (mismo nombre o actualiza las rutas en `lib/config.ts`). Puedes agregar más fotos añadiendo nuevas entradas al arreglo `gallery`.
- **Música:** coloca tu archivo de audio en `public/music/wedding-song.mp3`. El reproductor ya está conectado; solo falta el archivo. Por políticas de los navegadores, el audio empieza a sonar con la primera interacción (al abrir el sobre) o al pulsar el botón flotante inferior derecho.

---

## 4. Conectar el RSVP a Google Sheets

El formulario RSVP envía los datos a `/api/rsvp`, que a su vez los reenvía a un **Google Apps Script Web App** conectado a una hoja de cálculo.

### Paso a paso

1. Crea una **Google Sheet** nueva. En la fila 1 agrega los encabezados:
   `Fecha | Nombre | Teléfono | Asistencia | Acompañantes | Mensaje`
2. Ve a **Extensiones → Apps Script**.
3. Borra el contenido por defecto y pega el código que está en
   `google-apps-script/Code.gs` (incluido en este proyecto).
4. Haz clic en **Implementar → Nueva implementación**:
   - Tipo: **Aplicación web**
   - Ejecutar como: **Yo**
   - Quién tiene acceso: **Cualquier usuario**
5. Copia la URL que te entrega (termina en `/exec`).
6. Crea un archivo `.env.local` en la raíz del proyecto (usa `.env.example` como base):

   ```
   RSVP_ENDPOINT=https://script.google.com/macros/s/XXXXXXXX/exec
   ```

7. Reinicia `npm run dev`. Ya cada confirmación se guardará como una fila nueva en tu hoja.

> Mientras `RSVP_ENDPOINT` no esté configurado, el formulario seguirá funcionando en modo de prueba (simula el envío exitoso) para que puedas revisar el diseño sin bloquear el flujo.

---

## 5. Google Maps

El mapa usa un iframe público de Google Maps (no requiere API key). Si prefieres usar la API de Google Maps con más control (marcadores personalizados, estilos, etc.), puedes reemplazar el `<iframe>` en `components/MapSection.tsx` por `@react-google-maps/api` y agregar tu propia API key.

Para cambiar la ubicación, edita en `lib/config.ts`:

```ts
mapEmbedQuery: "Nombre o dirección del lugar",
mapsShareUrl: "https://www.google.com/maps/search/?api=1&query=...",
mapAddress: "Dirección completa para el QR y el calendario",
```

---

## 6. Despliegue

El proyecto está listo para desplegarse en **Vercel**:

```bash
npm run build
```

En Vercel, agrega la variable de entorno `RSVP_ENDPOINT` en el panel del proyecto (Settings → Environment Variables) con la misma URL que usaste en `.env.local`.

---

## 7. Estructura del proyecto

```
boda-virgilio-meriol/
├── app/
│   ├── api/rsvp/route.ts     # Endpoint que reenvía el RSVP a Google Sheets
│   ├── layout.tsx            # Fuentes y metadata
│   ├── page.tsx              # Orquesta el sobre + todas las secciones
│   └── globals.css
├── components/
│   ├── Envelope.tsx           # Sobre 3D + sello de cera (pantalla de apertura)
│   ├── Hero.tsx                # Portada con nombres y fecha
│   ├── Countdown.tsx           # Cuenta regresiva en vivo
│   ├── Story.tsx                # Línea de tiempo de la historia
│   ├── Gallery.tsx              # Galería con visor modal
│   ├── MapSection.tsx           # Google Maps + QR
│   ├── QRCodeBlock.tsx          # Código QR reutilizable
│   ├── AddToCalendar.tsx        # Google Calendar / .ics
│   ├── Details.tsx              # Dress code, regalos, calendario
│   ├── RSVPForm.tsx / RSVPSection.tsx
│   ├── MusicPlayer.tsx          # Reproductor flotante
│   └── Footer.tsx
├── lib/config.ts               # Toda la configuración editable de la boda
├── google-apps-script/Code.gs  # Script para Google Sheets
├── public/images/              # Fotos de la galería (placeholders incluidos)
└── public/music/               # Coloca aquí tu canción
```

---

Hecho con 💛 para Virgilio & Meriol — 19 de septiembre de 2026.
