#!/usr/bin/env python3
"""Genera site/data/availability.json a partir de uno o varios calendarios iCal (Airbnb, Booking, etc.).

Uso:
  python3 tools/sync_availability.py              # lee las URLs de tools/ical-urls.txt (una por línea)
  python3 tools/sync_availability.py --url URL    # una URL suelta
  python3 tools/sync_availability.py --file x.ics # un fichero local (para probar)
  python3 tools/sync_availability.py --loop 30    # repite cada 30 minutos

La URL del iCal es privada: guárdala solo en tools/ical-urls.txt (no se sube a la web).
Si falla la descarga, se conserva el último availability.json y el script termina con error.
"""
import argparse, datetime as dt, json, os, re, sys, time, urllib.error, urllib.request

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, '..', 'site', 'data', 'availability.json')
URLS = os.path.join(HERE, 'ical-urls.txt')


def fetch(src):
    if os.path.exists(src):
        return open(src, encoding='utf-8', errors='replace').read()
    req = urllib.request.Request(src, headers={'User-Agent': 'VillaMare-availability-sync/1.0'})
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            return r.read().decode('utf-8', errors='replace')
    except urllib.error.URLError as ex:
        # Python de macOS sin certificados instalados: usar curl, que sí usa los del sistema
        if 'CERTIFICATE_VERIFY_FAILED' not in str(ex):
            raise
        import subprocess
        return subprocess.run(['curl', '-fsSL', '--max-time', '30', src], check=True,
                              capture_output=True).stdout.decode('utf-8', errors='replace')


def parse_ics(text):
    """Devuelve lista de (inicio, fin) como date; 'fin' es exclusivo (día de salida)."""
    text = re.sub(r'\r?\n[ \t]', '', text)  # desplegar líneas largas
    events, cur = [], None
    for line in text.splitlines():
        if line == 'BEGIN:VEVENT':
            cur = {}
        elif line == 'END:VEVENT':
            if cur and 'DTSTART' in cur:
                events.append(cur)
            cur = None
        elif cur is not None and ':' in line:
            k, v = line.split(':', 1)
            cur[k.split(';')[0].upper()] = v.strip()
    out = []
    for e in events:
        if e.get('STATUS', '').upper() == 'CANCELLED':
            continue
        s = _d(e['DTSTART'])
        en = _d(e['DTEND']) if 'DTEND' in e else s + dt.timedelta(days=1)
        if en <= s:
            en = s + dt.timedelta(days=1)
        out.append((s, en))
    return out


def _d(v):
    return dt.date(int(v[0:4]), int(v[4:6]), int(v[6:8]))


def merge(ranges):
    ranges = sorted(ranges)
    res = []
    for s, e in ranges:
        if res and s <= res[-1][1]:
            res[-1] = (res[-1][0], max(res[-1][1], e))
        else:
            res.append((s, e))
    return res


def run(sources):
    today = dt.date.today()
    all_r = []
    for src in sources:
        all_r += parse_ics(fetch(src))
    booked = [(s, e) for s, e in merge(all_r) if e > today]
    data = {
        'updated': dt.datetime.now(dt.timezone.utc).isoformat(timespec='seconds'),
        'booked': [[s.isoformat(), e.isoformat()] for s, e in booked],
    }
    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    tmp = OUT + '.tmp'
    with open(tmp, 'w') as f:
        json.dump(data, f, indent=1)
    os.replace(tmp, OUT)  # escritura atómica
    print(f"{data['updated']}  {len(booked)} bloques no disponibles -> {os.path.normpath(OUT)}")


def sources_from_args(a):
    if a.url:
        return [a.url]
    if a.file:
        return [a.file]
    env = os.environ.get('ICAL_URLS', '').strip()
    if env:  # GitHub Actions: secreto ICAL_URLS (una URL por línea)
        return [l.strip() for l in env.splitlines() if l.strip() and not l.startswith('#')]
    if os.path.exists(URLS):
        return [l.strip() for l in open(URLS) if l.strip() and not l.startswith('#')]
    sys.exit('Falta la URL del calendario: crea tools/ical-urls.txt (ver tools/LEEME.md) o usa --url.')


if __name__ == '__main__':
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument('--url'); ap.add_argument('--file'); ap.add_argument('--loop', type=int, metavar='MIN')
    a = ap.parse_args()
    srcs = sources_from_args(a)
    while True:
        try:
            run(srcs)
        except Exception as ex:
            print('ERROR sincronizando (se conserva el archivo anterior):', ex, file=sys.stderr)
            if not a.loop:
                sys.exit(1)
        if not a.loop:
            break
        time.sleep(a.loop * 60)
