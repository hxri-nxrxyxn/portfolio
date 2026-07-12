# harinarayan.dev

Personal portfolio — a static SvelteKit site built with [`adapter-static`](https://kit.svelte.dev/docs/adapter-static) and deployed to **GitHub Pages**.

## Tech Stack

| | |
|---|---|
| **Framework** | [SvelteKit](https://kit.svelte.dev/) (Svelte 5 runes) |
| **Language** | TypeScript |
| **Styling** | Bare CSS (no frameworks) |
| **Build** | Vite |
| **Adapter** | `@sveltejs/adapter-static` → `docs/` |
| **Hosting** | GitHub Pages (via `docs/` + `.nojekyll`) |

## Getting Started

```sh
npm install
npm run dev
```

Open [localhost:5173](http://localhost:5173).

## Build

```sh
npm run build
```

Output goes to `docs/` — ready for GitHub Pages.

Preview the production build:

```sh
npm run preview
```

## Structure

```
src/
├── routes/
│   ├── +page.svelte          # Main page
│   ├── +layout.svelte        # Root layout
│   ├── +layout.ts            # Prerender config
│   └── sitemap.xml/          # Sitemap endpoint
└── lib/
    ├── components/
    │   ├── Hero.svelte       # Intro + links
    │   ├── About.svelte
    │   ├── Skills.svelte
    │   ├── Projects.svelte
    │   ├── Experience.svelte
    │   ├── Education.svelte
    │   ├── Achievements.svelte
    │   ├── Contact.svelte
    │   ├── Header.svelte
    │   └── Footer.svelte
    └── design.css            # Design tokens
```

## Deploy

The site auto-deploys via GitHub Pages from the `docs/` directory on `main`.

To force a rebuild:

```sh
npm run build && git add docs/ && git commit -m "build" && git push
```
