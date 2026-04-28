#!/usr/bin/env bash
# Build static site and push ./out to branch gh-pages (GitHub Pages project site:
# https://<user>.github.io/<repo>/). Same general flow as the oludeniz-fly static site.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
rm -rf "app/(studio)" "app/preview"
export STATIC_GH_PAGES=1
export NEXT_PUBLIC_BASE_PATH="/paragliding-school-copy"
export NEXT_PUBLIC_SITE_URL="https://lisaskyhigh.github.io/paragliding-school-copy"
npm run build
# --nojekyll: GitHub Pages otherwise runs Jekyll and skips folders like _next → no CSS/JS (broken layout).
npx --yes gh-pages@6.1.1 -d out -b gh-pages -f -m "Deploy static site" --nojekyll
git restore "app/(studio)" "app/preview" 2>/dev/null || true
