# stone-sales-website

A local-preview website for selling natural stone near Champion, Pennsylvania.

## What is set up

- Vite-based local development server
- Responsive landing page for stone inventory and quote requests
- Quote form that opens a ready-to-send email draft for testing
- GitHub Actions workflow for GitHub Pages deployment

## Run locally

Open a terminal in the project folder and run:

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite, typically:

- http://localhost:4173/

## Build locally

```bash
npm run build
```

## Deploy with GitHub Pages

This repo now includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml` that builds the site and deploys the `dist/` output to GitHub Pages.

### One-time GitHub setup

1. Push this repository to GitHub.
2. In GitHub, open **Settings** → **Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Make sure your default branch is the one you want to publish from. The workflow is currently set to deploy on pushes to `main`.
5. Push to `main`, or manually run the **Deploy GitHub Pages** workflow from the **Actions** tab.

### Notes

- The Vite config uses a relative asset base so the site works cleanly on GitHub Pages project URLs.
- If your default branch is not `main`, update `.github/workflows/deploy-pages.yml` to match.
- The workflow does not publish from your machine; GitHub builds and publishes for you after you push.

## Next production steps

- Replace placeholder phone, email, and inventory details
- Add real product photos
- Connect the quote flow to your preferred inbox, CRM, or payment system
