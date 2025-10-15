#!/usr/bin/env node
/* Generate a simple sitemap.xml for static export and GitHub Pages. */
const fs = require('fs');
const path = require('path');

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || '';
if (!BASE_URL) {
  console.warn('NEXT_PUBLIC_BASE_URL is not set; sitemap will use relative URLs.');
}

const routes = [
  '/',
  '/privacy/',
  '/#home',
  '/#about',
  '/#skills',
  '/#experience',
  '/#projects',
  '/#gallery',
  '/#schedule',
  '/#contact',
];

const url = (r) => (BASE_URL ? `${BASE_URL}${r}` : r);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((r) => `  <url><loc>${url(r)}</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>`)
  .join('\n')}
</urlset>`;

const outDir = path.join(process.cwd(), 'out');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);
fs.writeFileSync(path.join(outDir, 'sitemap.xml'), xml);
console.log('sitemap.xml generated at out/sitemap.xml');
