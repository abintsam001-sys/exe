# FiveM Script Showcase

A dark, terminal/HUD-themed site to showcase your FiveM scripts with links out to
Tebex, Keymaster, or Discord for downloads.

## Features

- **Search** — live filter over script name, description, and framework tags.
- **Stats bar** — total users, resource count, total downloads, and how many
  are online, all computed automatically except total users.
- **Bookmarks** — visitors can save scripts (☆ icon); stored in their browser
  via `localStorage`, so it's per-visitor, not shared.
- **Images per listing** — each script card supports a thumbnail image, with
  an automatic placeholder if none is set.

## Customize it

1. **Your scripts** — edit `public/scripts-data.js`. Each object in the `SCRIPTS`
   array is one card: name, version, status, description, framework tags,
   price, date, and the external link.
2. **Images** — add an `image` value per script, e.g. `"images/dispatch.png"`.
   Drop the actual image files in `public/images/` (create that folder) or
   point to any image URL. Leave `""` to use the generated placeholder.
3. **Total users** — set `SITE_STATS.totalUsers` at the top of
   `public/scripts-data.js`. It's a manual number since it isn't derived from
   the scripts list — wire it to a real backend later if you want it live.
4. **Branding** — replace `YOURTAG` in `public/index.html` (nav + footer) with
   your actual dev tag/name.
5. **Copy** — the hero text, about section, and contact section in
   `public/index.html` are placeholder copy written for a generic FiveM dev.
   Swap in your own words.
6. **Discord/Tebex links** — replace the `https://discord.gg/` and
   `https://tebex.io/` placeholders wherever they appear.
7. **Colors/fonts** — all design tokens (colors, fonts) are CSS variables at
   the top of `public/styles.css` under `:root`.

## Run it locally

```bash
npm install
npm start
```

Then open http://localhost:3000

## Deploy to Railway

1. Push this folder to a GitHub repo (Railway deploys from GitHub).
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. Go to [railway.app](https://railway.app) and sign in with GitHub.
3. **New Project → Deploy from GitHub repo** → select this repo.
4. Railway auto-detects Node.js from `package.json` and runs `npm start`.
   No extra config needed — it also automatically sets the `PORT`
   environment variable, which `server.js` already reads.
5. Once deployed, go to the service's **Settings → Networking** and click
   **Generate Domain** to get a public URL. You can attach a custom domain
   there too.

That's it — every push to `main` will auto-redeploy.
