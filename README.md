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
- Szene für Szene vorwärts: Anfangsszene wählen, Zwischenstand lesen, nächste Szene wählen.
- Thinking Backwards: Schlussszene wählen, Zwischenstand lesen, vorherige Szene wählen.

Nach jeder generierten oder manuell gebauten Reihenfolge erstellt die App automatisch:

- eine Zusammenfassung der Handlung in der erzeugten Reihenfolge,
- eine Interpretation der Entwicklung von Woyzeck und Marie,
- eine Erklärung des Mords abhängig von Position, Vorzeichen und Nachspiel der Montage.

Zusätzlich können Figureninterviews geführt werden. Die Antworten von Franz Woyzeck, Marie, Tambourmajor, Doktor, Hauptmann, Andres, Margreth, Narr, Jude und Wirt beziehen sich jeweils nur auf den aktuell entwickelten Stand der Dramenhandlung.
Neben festen Fragevarianten gibt es ein Freifrage-Feld; die App erkennt daraus grob Themen wie Liebe, Eifersucht, Macht, Armut, Körper, Schuld oder Beziehungen.
Im Browser kann per Sprachsteuerung gesprochen werden: Die Web Speech API transkribiert die Frage in das Freifrage-Feld, und die Speech Synthesis API liest die Antwort vor. Browser ohne diese APIs zeigen einen Hinweis im Statusfeld.
