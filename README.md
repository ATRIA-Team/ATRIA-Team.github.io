# ATRIA Team Website

A simple Next.js + MDX product page deployed as the ATRIA Team organization
GitHub Pages site.

## Install

```bash
npm install
npm run dev
```

## Edit content

- Main page content: `app/page.mdx`
- Reusable UI blocks: `components/`
- Images: `public/images/`

## Deploy to GitHub Pages

1. Push the project to `ATRIA-Team/ATRIA-Team.github.io`.
2. In GitHub, open **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push to `main` to trigger the deploy workflow.

This site is an **organization page** at `https://atria-team.github.io/`.
Because it is served from the domain root, `basePath` and `assetPrefix` stay
empty in `next.config.mjs`:

```js
basePath: '',
assetPrefix: '',
```

## Replace the placeholder

Swap `public/images/dashboard-placeholder.svg` with your own screenshot and update `app/page.mdx` if needed.
