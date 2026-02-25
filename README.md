# Zona Gilreath — Portfolio

## Development

```bash
npm install
npm run dev
```

## Deployment (GitHub Pages)

This repo ships with a GitHub Actions workflow that builds the site and publishes it to the `gh-pages` branch.

If GitHub Pages isn't enabled yet:

1. Repo Settings → **Pages**
2. **Build and deployment** → Source: **Deploy from a branch**
3. Branch: `gh-pages` / folder: `/ (root)`

Then push to `main` (or the current feature branch) and the workflow will deploy.