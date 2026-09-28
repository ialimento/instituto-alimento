# Instrucciones para agentes de IA — Sitio del Instituto del Alimento

## Arquitectura
- Sitio estático (HTML/CSS) en GitHub Pages. Sin frameworks ni proceso de compilación.
- Todas las páginas comparten `assets/css/site.css` y `assets/js/site.js` (solo el menú del celular).
- Íconos: Lucide. El juego completo está en `assets/img/icons.svg` y se copia al comienzo del `<body>` de cada página (así funcionan también abriendo el archivo local). Se usan con `<svg class="icon"><use href="#i-NOMBRE"/></svg>`. Para agregar un ícono, sumarlo a `icons.svg` y al bloque de las cinco páginas.
- NO poner estilos ni scripts dentro de cada página. NO usar emojis como íconos.
- Cada página repite el mismo encabezado (`.header`), pie (`.footer`) y botón de WhatsApp (`.wa`). Si se cambia uno, cambiarlo en las cinco páginas.
- Las preguntas frecuentes usan `<details>`/`<summary>` dentro de `.faq`, sin JavaScript.

## Tipografía y color
- Tipografía: Raleway, alojada en `assets/fonts/` (no usar Google Fonts).
- Azul institucional: `#0166cb` (tomado de los logos oficiales). Los colores están como variables al comienzo de `site.css`.
- Logos oficiales en `assets/img/` (versiones positivo y negativo). No redibujarlos ni cambiarles el color.

## Fotos
- Las fotos están en `assets/img/fotos/` en WebP 16:10, cada una en dos tamaños: `NOMBRE-1440.webp` y `NOMBRE-800.webp` (para celulares).
- Para cambiar una foto, generar los dos tamaños con el mismo nombre. No subir fotos sin comprimir.
- Si hace falta un lugar para una foto que todavía no existe, usar `<figure class="foto foto-vacia">`.

## Ubicación
- Link de Google Maps: https://maps.app.goo.gl/gdvkR9NQoEM4VuVJ6. Se usa en el pie, en la sección "Cómo llegar" del inicio y en Renovación.

## Datos de contacto
- Cada departamento muestra su propio contacto y horario en su página. No reemplazar los datos de un área con los de otra.
- Educación y ETA: Teléfono 341-5117495 | Int: 218 · educativo_ia@rosario.gov.ar · Web: rosario.gob.ar
- No modificar mails, teléfonos ni horarios sin confirmación del equipo.
