# Ahmad Izaldeen – Portfolio

Persönliches Portfolio als React-Webanwendung.

🔗 **Live:** [https://Ahmadizaldeen.github.io/Portfolio-Ahmad-Izaldeen](https://Ahmadizaldeen.github.io/Portfolio-Ahmad-Izaldeen)

---

## Tech-Stack

- **React 19** (Create React App)
- **CSS Modules** für Komponenten-Styling
- **Tailwind CSS** für globale Utilities
- **react-icons** für Icons
- **Formspree** für das Kontaktformular
- **GitHub Pages** für das Deployment

---

## Sections

| Section | Beschreibung |
|---|---|
| **Hero** | Parallax-Hintergrund mit animierten Tech-Icons |
| **Über mich** | Dreisprachig – Deutsch, Arabisch, Englisch |
| **Skills** | Animierte Fortschrittsbalken mit Intersection Observer |
| **Projekte** | Eigene Projekte mit GitHub-Links und Tech-Tags |
| **Kontakt** | Formular via Formspree mit Status-Feedback |
| **Footer** | Social Links, Impressum & Datenschutz als Dark-Modal |

---

## Projektstruktur

```
src/
├── components/
│   ├── Hero/            # Parallax Hero + Tech-Icons
│   ├── Navbar/          # Navigation + SideNavbar
│   ├── About/           # Mehrsprachiger Über-mich-Text
│   ├── Skills/          # Animierte Skill-Balken
│   ├── Projects/        # Projekt-Cards im Grid
│   ├── ContactForm/     # Kontaktformular (Formspree)
│   ├── Footer/          # Footer + Impressum/Datenschutz Modal
│   └── ProfilePhoto/    # Profilbild-Komponente
├── pages/
│   └── legal/           # Impressum.jsx, Datenschutz.jsx
├── hooks/               # useContactForm
└── styles/              # Globale Styles
```

---

## Lokale Entwicklung

```bash
npm install
npm start
```

## Deployment

```bash
npm run deploy
```

Deployed automatisch auf GitHub Pages via `gh-pages`.

---

## Status & Roadmap

### ✅ Abgeschlossen
- Hero mit Parallax + animierten Tech-Icons
- Über-mich Sektion (DE / AR / EN)
- Skills mit animierten Fortschrittsbalken
- Projekte-Grid mit GitHub-Links
- Kontaktformular via Formspree
- Footer mit Social Links (GitHub, LinkedIn, E-Mail)
- Impressum & Datenschutz als dunkle Modal-Popups (DSGVO-konform)

### 🚧 In Arbeit – Nächster Schritt
**KI-Assistent via Ollama**
- Integration eines lokalen KI-Chatbots direkt im Portfolio
- Technologie: [Ollama](https://ollama.com) (lokal laufendes Sprachmodell)
- Branch: `feat/custom-agent`
- Geplante Features: Chat-Interface, Kontextbewusstsein über das Portfolio, DSGVO-konforme Datenschutzhinweise

---

## Kontakt

📧 [ahmad@izaldeen.de](mailto:ahmad@izaldeen.de)
🐙 [github.com/Ahmadizaldeen](https://github.com/Ahmadizaldeen)
💼 [linkedin.com/in/ahmad-izaldeen](https://www.linkedin.com/in/ahmad-izaldeen)