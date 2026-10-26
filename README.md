# WRSPL Season 3 — Official Group Draw

Static React + TypeScript + Vite app for the Westfalen Royals Premier Softball League 2026 group draw.

## Run locally

```bash
npm install
npm run dev
```

Build with `npm run build`; test with `npm test`.

## Conduct the draw

Review or edit the ten teams on the setup screen, start the draw, and use **Draw Next Team** (or Space/Enter). The fixed slot order is G1-T1, G2-T1, G1-T2, G2-T2, and so on. Refreshing the page restores the state from browser localStorage. This storage is device/browser-specific and is not synced between captains.

When complete, use CSV, JSON, WhatsApp text, or PNG export. Lock the draw after the captains confirm it. Reset requires explicit confirmation.

## Configuration and deployment

The default teams are in `src/fixtures.ts`. An optional tournament logo can be added to `public/` and referenced from the header if desired. The official fixtures are kept separately in the same file so match order and times are easy to edit.

Vite uses a relative base path, so the build works at a GitHub Pages repository URL. A GitHub Actions workflow can run `npm ci` and `npm run build`, then publish `dist/` using the official Pages actions.
