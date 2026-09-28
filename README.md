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

1. Set your URL in `astro.config.mjs` — replace `https://USERNAME.github.io` with e.g. `https://kenlim.github.io` (user site) or `https://kenlim.github.io/repo-name` (project site; also add `base: "/repo-name"`).
2. Create the repo and push:
   ```bash
   cd ~/dev/kenlim-site
   git init && git add -A && git commit -m "site"
   gh repo create kenlim.github.io --public --source=. --push
   ```
3. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**. The workflow at `.github/workflows/deploy.yml` then builds and publishes on every push (~1 minute).

Optional custom domain (`kennylim.com`): add a `CNAME` file with the domain and point DNS at GitHub ([docs](https://docs.github.com/pages/configuration/custom-domain-and-emails)).

## Edit copy

- About page (bio + experience): `src/pages/index.astro`
- What-I-do diagram copy: `src/components/FlowDiagram.astro`
- Layout, nav, theme: `src/layouts/Layout.astro`
- Diagrams: `src/components/*.astro`
- Posts: `src/content/blog/`
