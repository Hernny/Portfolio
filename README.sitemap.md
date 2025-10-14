Sitemap generation

This project now generates a simple sitemap.xml suitable for GitHub Pages and static export.

- Script: scripts/generate-sitemap.cjs
- Output: out/sitemap.xml

How it works
- Uses NEXT_PUBLIC_BASE_URL to build absolute URLs. If not provided, URLs will be relative (still valid for many crawlers on GitHub Pages).
- Includes the home page, privacy page, and anchor sections for SPA-style navigation.

Usage
1. Ensure you set NEXT_PUBLIC_BASE_URL in your environment or GitHub Actions. Example: https://hernnymalaver.github.io/portfolio
2. Build the site. The sitemap will be generated automatically after build (postbuild script).

Locally:
- npm run build

CI (GitHub Pages):
- The workflow runs the sitemap step automatically after build (postbuild) if NEXT_PUBLIC_BASE_URL is set via env.

Notes
- For GH Pages under a project site, NEXT_PUBLIC_BASE_URL should be https://<user>.github.io/<repo>
- For a custom domain, set it to https://your.domain
