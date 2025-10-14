# Project Context

This document captures key decisions, configuration, and rules to maintain and evolve this project smoothly.

## Stack & Purpose
- Framework: Next.js 15 (Pages Router, static export)
- Language: TypeScript (strict)
- UI: Tailwind CSS
- Animations: Framer Motion
- Icons: React Icons
- Forms: react-hook-form + zod
- Dates: date-fns
- Cookies: js-cookie (consent management)
- Hosting: GitHub Pages (static export via `next export`)

## Architecture
- `pages/`: routes (`/_app.tsx`, `index.tsx`, `404.tsx`, `privacy.tsx`). SPA-style by section anchors.
- `components/`: UI modules (layout, header, footer, cookie banner, tracking, hero, gallery, scheduler, contact form).
- `hooks/`: reusable hooks (`useCookieConsent`).
- `lib/`: utility modules (`googleDrive.ts`).
- `styles/`: Tailwind globally in `styles/globals.css`.
- `public/`: static assets (e.g., `robots.txt`).
- `instrumentation.ts`: Next.js instrumentation hook (stub) for compatibility and future telemetry.

## Environment Variables
Add into `.env.local` for local dev and set as Actions secrets for CI:
- `NEXT_PUBLIC_GOOGLE_API_KEY`: Google API key with Drive API enabled.
- `NEXT_PUBLIC_GOOGLE_DRIVE_FOLDER_ID`: Public Drive folder ID containing images.
- `NEXT_PUBLIC_META_PIXEL_ID`: Optional, Meta Pixel ID. Pixel injects only after cookie consent.
- `NEXT_PUBLIC_GH_PAGES_BASE`: Repo name for GitHub Pages basePath (set during CI).

## Google Drive Gallery
- Lists images using Drive v3 Files API. Requires folder shared as "Anyone with the link".
- Query filters `mimeType contains 'image/' and trashed=false`.
- Image URL fallback order: `thumbnailLink` -> `thumbnail?id=ID&sz=w1000` -> `uc?export=view&id=ID` -> `webContentLink`.
- Grid uses fixed aspect ratio with `object-cover` for consistent thumbnails.

## Cookies & Tracking
- Consent states: `granted | denied | unset` stored in `js-cookie` (180 days).
- Pixel (Meta) rendered only when consent is `granted` and `NEXT_PUBLIC_META_PIXEL_ID` is set.

## Build & Deploy
- `next.config.js` uses `output: 'export'`, `trailingSlash`, `images.unoptimized`.
- GitHub Actions workflow `.github/workflows/deploy.yml` builds and exports to `out/` and deploys to Pages.
- For Pages, `NEXT_PUBLIC_GH_PAGES_BASE` is set to repo name to configure `basePath`/`assetPrefix`.

## Development Commands
- Start dev: `npm run dev`
- Type check: `npm run type-check`
- Build: `npm run build`
- Export: `npm run export`

## Branching & Workflow Rules
- ALWAYS create a new branch for new requirements or tasks. Suggested naming: `feat/…`, `fix/…`, `chore/…`.
  - Example: `git switch -c feat/politica-privacidad-link`
- Use small, descriptive commits; prefer conventional commit messages.
- PRs should describe user-facing changes and any config or env impacts.

## Maintenance Notes
- If images fail to load from Drive, verify folder sharing and API enablement. Check browser console for detailed error (we log response snippet).
- If upgrading Next.js, keep `instrumentation.ts` to satisfy instrumentation aliases.
- For GitHub Pages, ensure Settings > Pages source is GitHub Actions.

## Future Enhancements
- Optionally migrate to App Router (`app/`) and add server actions for Google Photos OAuth flow.
- Add unit tests (React Testing Library), E2E (Playwright), and basic CI checks.
- Add local image fallback for gallery if Drive is unavailable.
