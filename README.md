# kenlim.site

Personal site + blog: **Astro 7 (TypeScript, strict) + Tailwind v4**, fully static, built for GitHub Pages. Two pages: About (`/` — bio, what I do, full experience) and Writing (`/writing`).

**Code location:** `/Users/kenlim/dev/kenlim-site` on your Mac.

## Daily commands

```bash
cd ~/dev/kenlim-site
npm run dev --port 4321 --background   # local preview (astro dev status/stop/logs to manage)
npm run build                          # static output in dist/
```

## Publish a new post

```bash
npm run post -- "The title of my piece"
```

That creates `src/content/blog/<slug>.mdx` from the template with today's date, in **draft mode** (hidden from the site). Write it, set `draft: false`, push (below). MDX notes: tables are plain markdown; avoid a raw `<` character (write "under" instead); reusable diagrams are components — `PhaseDiagram`, `EvolutionTimeline`, `StartupStackDiagram`, `FlowDiagram` — see `src/content/blog/_template.mdx` for usage.

Then deploy:

```bash
git add -A && git commit -m "post: the title of my piece" && git push
```

## One-time deploy to GitHub Pages

The live site deploys from **https://github.com/kennylim/kennylim.github.io** (public, custom domain kennylim.com via `public/CNAME`). `site: "https://kennylim.com"` is already set in `astro.config.mjs`; no `base` needed.

Pushing to `main` there triggers `.github/workflows/deploy.yml` (GitHub Actions Pages). The kennylim/kennylim-site repo is the private working mirror.

Optional custom domain (`kennylim.com`): add a `CNAME` file with the domain and point DNS at GitHub ([docs](https://docs.github.com/pages/configuration/custom-domain-and-emails)).

## Edit copy

- About page (bio + experience): `src/pages/index.astro`
- What-I-do diagram copy: `src/components/FlowDiagram.astro`
- Layout, nav, theme: `src/layouts/Layout.astro`
- Diagrams: `src/components/*.astro`
- Posts: `src/content/blog/`
