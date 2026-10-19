# Villa Mare · web de reserva directa

Web estática (HTML/CSS/JS) en `site/`. Se publica con GitHub Pages desde `.github/workflows/deploy.yml`:
cada `push` a `main` y cada 3 horas se actualiza la disponibilidad desde el iCal (secreto `ICAL_URLS`) y se vuelve a desplegar.

- Contacto y precios: `site/js/config.js`
- Idioma ES/EN: `site/js/i18n.js` y `site/js/en.js`
- Disponibilidad: `tools/sync_availability.py` (ver `tools/LEEME.md`)
- **Antes de abrirla al público:** quitar `noindex` de `site/index.html` y el `Disallow` de `site/robots.txt`.
