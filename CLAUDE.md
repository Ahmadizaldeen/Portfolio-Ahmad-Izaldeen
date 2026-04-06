# CLAUDE.md – Portfolio Ahmad Izaldeen

## Wer bin ich
- Name: Ahmad Izaldeen, Umschüler IT-Fachinformatiker Anwendungsentwicklung
- Standort: Eckernförde, Deutschland
- Ziel: Fullstack/Cloud-Entwickler, praxisorientiert
- Sprache: Deutsch bevorzugt, direkte Antworten ohne Umwege

## Projekt
- React Portfolio (Create React App)
- Repo: https://github.com/Ahmadizaldeen/Portfolio-Ahmad-Izaldeen
- Lokal: C:\Users\ahmad\Dropbox\Meine Projekte\Portofolio\Portfolio-Ahmad-Izaldeen
- Stack: React, CSS Modules, Tailwind (CDN), react-icons, Formspree

## Komponenten-Status
| Komponente | Status | Problem |
|---|---|---|
| HeroS | in Arbeit | Text fehlt noch |
| About | vorhanden | Encoding-Fehler, Farben falsch |
| Skills | vorhanden | Progressbar-Farbe hell |
| Projects | vorhanden | nur 3 Projekte |
| Contact | vorhanden | leerer p-Tag, Duplikat-ID |
| ContactForm | vorhanden | Duplikat id="contact" |
| Navbar | vorhanden | kein Mobile-Menu |
| SideNavbar | fertig | gut implementiert |
| Footer | minimal | keine Social Links |

## Bekannte Bugs
- document.body.style.zoom = "90%" in App.js → entfernen
- Doppelte id="contact" (Contact + ContactForm)
- id Props werden nicht weitergegeben in Komponenten
- Encoding-Fehler in aboutText.js (Emojis kaputt)
- Tailwind via CDN eingebunden (langsam)
- oldCom Ordner mit alten Komponenten → löschen

## Sprint-Plan (1 Tag pro Sprint)
- [x] Sprint 0: Analyse & Planung ✓
- [x] Sprint 1: Bugs & Cleanup
- [x] Sprint 2: Hero Text + Parallax Fade
- [x] Sprint 3: Inhalte & Komponenten
- [x] Sprint 4: Responsive & Polish
- **Aktuell:** Sprint 5 — Deployment & README

## Coding-Regeln
- CSS Modules für neue Komponenten
- Keine neuen Libraries ohne Rückfrage
- Kommentare auf Deutsch
- Kein console.log im finalen Code
- Kein document.body direkt manipulieren

## Nächster Schritt
Sprint 5 abschließen: Live-URL in README (`[LIVE_URL]`) setzen, optional Screenshots ergänzen, deployen (z. B. `npm run deploy` / GitHub Pages).
