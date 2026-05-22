# Next.js + MDX + GitHub Pages starter

A minimal starter for a simple product page where technical users edit content directly in MDX.

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

1. Push the project to a GitHub repository.
2. In GitHub, open **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push to `main` to trigger the deploy workflow.

The `next.config.mjs` file derives the repository name automatically from `GITHUB_REPOSITORY`, then applies `basePath` and `assetPrefix` in production.

### User / organization pages

The default config targets a **project page** at `https://<user>.github.io/<repo>/`. If you are deploying a **user or organization page** (`https://<user>.github.io/`), the site is served from the domain root, so `basePath` and `assetPrefix` must stay empty. In that case, clear them in `next.config.mjs`:

```js
basePath: '',
assetPrefix: '',
```

## Replace the placeholder

Swap `public/images/dashboard-placeholder.svg` with your own screenshot and update `app/page.mdx` if needed.
