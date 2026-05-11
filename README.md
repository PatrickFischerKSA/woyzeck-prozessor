# Woyzeck-Prozessor

Statische Unterrichts-App zum Zusammenstellen einer eigenen Woyzeck-Fassung aus einzelnen Szenenkarten.

## Textgrundlage

Die App verweist auf das Büchnerportal:

https://buechnerportal.de/werke/woyzeck/

Wichtig für den Unterricht: `Woyzeck` ist kein abgeschlossen autorisiertes Drama, sondern ein Fragment in mehreren Entwurfshandschriften. Die Karten nutzen deshalb eine schulpraktische Szenenordnung als Montagegrundlage. Sie sollen ausdrücklich zum Vergleichen, Umstellen und Begründen einladen.

## Nutzung

`index.html` im Browser öffnen oder lokal einen kleinen Server im Ordner starten:

```bash
python3 -m http.server 4173
```

Dann im Browser öffnen:

```text
http://localhost:4173/
```

## Kombinationsmodi

- Zufall: alle 27 Szenen werden gemischt.
- Erste Szene festlegen: Anfang fixieren, Rest zufällig.
- Letzte Szene festlegen: Schluss fixieren, Rest zufällig.
- Mehrere Szenen festlegen: beliebige Positionen fixieren, offene Stellen werden zufällig gefüllt.
- Totales Woyzeck-Puzzle: alle Positionen können manuell gesetzt werden.

Nach jeder generierten oder manuell gebauten Reihenfolge erstellt die App automatisch:

- eine Zusammenfassung der Handlung in der erzeugten Reihenfolge,
- eine Interpretation der Entwicklung von Woyzeck und Marie,
- eine Erklärung des Mords abhängig von Position, Vorzeichen und Nachspiel der Montage.
