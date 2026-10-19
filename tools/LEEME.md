# Disponibilidad automática (sin Airbnb en la web)

La web **no enlaza ni redirige a Airbnb**. Para que el calendario muestre tus fechas ocupadas se usa el
calendario iCal que Airbnb ofrece a los anfitriones (es la vía oficial; no hay que "rascar" su web).

## 1. Consigue tu enlace iCal (1 minuto, lo haces tú con tu cuenta)
Airbnb → **Calendario** → **Disponibilidad** (o ⚙ Ajustes del calendario) → **Conectar calendarios** →
**Exportar calendario** → copia el enlace `https://www.airbnb.es/calendar/ical/53307161.ics?s=...`

Guárdalo en `tools/ical-urls.txt` (una URL por línea; si algún día usas Booking u otro portal, añade su iCal).
Ese enlace es privado: no lo pegues en la web ni lo compartas.

## 2. Sincroniza
```
python3 tools/sync_availability.py            # una vez
python3 tools/sync_availability.py --loop 30  # cada 30 minutos mientras esté abierto
```
Genera `site/data/availability.json` (solo fechas, sin datos de huéspedes). Si falla la descarga, conserva el anterior.

## 3. Automatízalo en producción
- **Hosting estático** (Netlify, Cloudflare Pages, GitHub Pages): ejecuta el script cada 30-60 min con una tarea programada
  (por ejemplo GitHub Actions con `cron: "*/30 * * * *"`, guardando la URL como *secret*) y publica el JSON.
- **En tu Mac**: una tarea `cron`/`launchd` con el comando de arriba.

## Precios (ya configurados)
Airbnb **no entrega precios por iCal**, así que los precios están en `site/js/config.js`, tomados del anuncio el 16/10/2026:
- Noches de domingo a jueves: **663 €**; viernes y sábado: **750 €** (para hasta 6 personas, mínimo 2 noches, sin limpieza).
- Huésped adicional a partir del 7º: **30 € por persona y noche**.
- Descuento por estancia larga (aprox. el de Airbnb): 3 noches −4 %, 4 −6 %, 5 −8 %, 6 −9 %, 7 o más −15 %.
- **Verano (15 jun – 15 sep): 750 € todas las noches**, igual que la noche más cara actual (excluyendo Nochebuena, Navidad, Nochevieja y Año Nuevo). Cámbialo en `config.js` cuando Airbnb publique esas fechas.
- El importe que ve el cliente es **orientativo**; lo confirmas al responder. Airbnb además aplica promociones puntuales que aquí no se copian.

## Evitar dobles reservas
Cuando confirmes una reserva directa, **bloquea esas fechas en el calendario de Airbnb** (y en cualquier otro portal).
Lo ideal más adelante: generar un iCal propio con tus reservas directas e importarlo en Airbnb.
