# Arslan Khan — Portfolio (React + Vite)

A full-stack developer portfolio built with React and Vite. Single source of content
in `src/data.js`, component-per-section structure, animated "stack" hero visual,
scroll reveals, and auto-rotating project screenshot galleries.

## Before you deploy

Open `src/data.js` and replace the two placeholder URLs at the top:

```js
linkedin: "https://linkedin.com/in/REPLACE_ME",
github: "https://github.com/REPLACE_ME",
```

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

This outputs a static site to `dist/`.

## Deploy on Netlify

**Option A — Netlify CLI**
```bash
npm install -g netlify-cli
netlify deploy --prod
```

**Option B — Netlify dashboard / Git**
1. Push this project to a GitHub/GitLab/Bitbucket repo.
2. In Netlify: **Add new site → Import an existing project**, pick the repo.
3. Build command: `npm run build` — Publish directory: `dist` (already set in `netlify.toml`, so Netlify should detect these automatically).
4. Deploy. To use a custom domain, go to **Site settings → Domain management → Add a domain**.

## Project structure

```
src/
  data.js               ← all content lives here (profile, skills, experience, projects)
  styles.css            ← theme tokens + all animation/transition rules
  App.jsx
  components/
    Nav.jsx, Hero.jsx, About.jsx, Skills.jsx, Experience.jsx,
    Projects.jsx, ProjectGallery.jsx, EducationCta.jsx, Contact.jsx,
    Reveal.jsx (scroll-reveal wrapper), Icons.jsx (inline SVG icon set)
  hooks/
    useTypedText.js, useReveal.js, useActiveSection.js
public/
  assets/project1, project2, project3   ← project screenshots
```
