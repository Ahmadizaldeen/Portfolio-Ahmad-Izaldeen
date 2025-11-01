## Quick orientation for AI copilots

This is a small Create React App single-page portfolio app (React + react-scripts). Use the patterns below to make edits that fit the repository.

- Project roots and commands

  - Run locally: `npm install` then `npm start` (dev server via react-scripts).
  - Build for production: `npm run build` -> outputs `build/` (already committed here).
  - Tests: `npm test` (Create React App test runner).
  - Deployment: `npm run deploy` uses `gh-pages -d build` (see `package.json`).

- Big picture architecture

  - UI: `src/` is the single-page React app. Major folders: `src/components/` (per-component subfolders), `src/assets/` (some images), and `src/hooks/` for small custom hooks.
  - Components are organized by feature (e.g. `Hero`, `Contact`, `Projects`, `Skills`). Each component folder may contain `.jsx`, `.css` or `.module.css` files.
  - There is no TypeScript; keep JS/JSX and follow existing naming conventions.

- Patterns & conventions to follow

  - Styles: both global `.css` and CSS Modules `.module.css` are used. Check the component folder to match the local style (e.g. `Projects.module.css` vs `Hero.css`).
  - Images/assets: two common patterns appear:
    - Public-root images referenced like `/img/...` (these come from `public/img/` and are served at runtime).
    - Some components reference `src/assets/` directly (e.g. `HeroS.jsx` uses `/src/assets/stars1.webp`). Prefer using `public` root paths for static references unless a component imports an asset with an ES import.
  - Forms: there are both controlled and uncontrolled form examples:
    - Controlled: `src/hooks/useContactForm.js` + `src/components/ContactForm/ContactForm.js` (useState-driven).
    - Uncontrolled: `src/components/ContactForm/ContactFormUncontrolled.jsx` (useRef-driven).
    - Keep to the existing style within a component; prefer the hook-based controlled pattern when implementing new contact logic.
  - Direct DOM interactions: `HeroS.jsx` uses many refs and `window.scroll` listeners to implement parallax. If modifying this, preserve the ref logic and remove listeners on cleanup.

- Testing & linting

  - The project relies on Create React App ESLint presets (see `eslintConfig`). Follow the existing JSX/React style and avoid introducing new lint configurations.

- Integration points & deploy

  - Deploy via GitHub Pages: `predeploy` builds and `deploy` uses `gh-pages`. Do not remove `build/` artifacts in PRs that demonstrate production output unless requested.

- Examples to reference when coding

  - Hook-driven form: `src/hooks/useContactForm.js` and `src/components/ContactForm/ContactForm.js`.
  - Uncontrolled form: `src/components/ContactForm/ContactFormUncontrolled.jsx` (shows useRef usage and manual clearing).
  - Parallax hero: `src/components/Hero/HeroS.jsx` (refs + window.scroll handler + inconsistent asset paths — be cautious when changing image paths).

- Safety and merge guidance for AI edits
  - Small, focused edits are preferred (one component or one hook per PR).
  - When changing asset paths, verify in dev server (`npm start`) that images load. Prefer `/img/...` (public) unless switching to ES module import.
  - If adding new dependencies, include them in `package.json` and ensure `npm install` is part of the verification steps.

If anything here is unclear or you want me to include project-specific coding conventions (naming, commit message style, or branching) add that info and I will iterate.
