const path = require('path');
/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const repo = process.env.NEXT_PUBLIC_GH_PAGES_BASE || '';

const nextConfig = {
  output: 'export', // enable static export for GitHub Pages
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Fix workspace root inference when multiple lockfiles exist (Windows/monorepo env)
  outputFileTracingRoot: path.join(__dirname),
  basePath: isProd && repo ? `/${repo}` : '',
  assetPrefix: isProd && repo ? `/${repo}/` : '',
};

module.exports = nextConfig;
