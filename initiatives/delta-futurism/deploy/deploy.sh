#!/usr/bin/env bash
# Deploys the Delta Futurism site to deltafuturism.com (Vercel project "delta-futurism", team facework).
# The only source is examples/face.works/prototype/public/delta-futurism; this copies it to a temp folder,
# adds the routing in vercel.json (/, /built-to-stay, /sources), links the project there and deploys to production.
# Nothing is written into the repo. Usage: initiatives/delta-futurism/deploy/deploy.sh
set -euo pipefail
here="$(cd "$(dirname "$0")" && pwd)"
src="$here/../../../examples/face.works/prototype/public/delta-futurism"
tmp="$(mktemp -d)"
trap 'rm -rf "$tmp"' EXIT
cp -R "$src/." "$tmp/"
cp "$here/vercel.json" "$tmp/vercel.json"
cd "$tmp"
vercel link --yes --project delta-futurism --scope facework >/dev/null
vercel deploy --prod --yes --scope facework
