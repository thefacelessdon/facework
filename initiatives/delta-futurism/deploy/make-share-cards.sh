#!/usr/bin/env bash
# Makes the Delta Futurism link-preview cards (1200x630) into public/delta-futurism/share/.
# Bump CARD_V in the pages' og:image URLs whenever a card changes, so Slack/iMessage refetch it.
set -euo pipefail
here="$(cd "$(dirname "$0")" && pwd)"
out="$here/../../../examples/face.works/prototype/public/delta-futurism/share"
mkdir -p "$out"
chrome="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
tmp="$(mktemp -d)"; trap 'rm -rf "$tmp"' EXIT
card(){ # slug img name tag
  "$chrome" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 --window-size=1200,630 \
    --virtual-time-budget=4000 --screenshot="$tmp/$1.png" "file://$here/share-card.html?img=$2&name=$3&tag=$4" >/dev/null 2>&1
  sips -s format jpeg -s formatOptions 86 "$tmp/$1.png" --out "$out/$1.jpg" >/dev/null
  echo "share/$1.jpg"
}
card story "pb-mural-2020.jpg" "Delta%20<span>Futurism</span>" "A%20new%20vision%20for%20life%20in%20the%20Delta"
card built-to-stay "solar-aerial-2016.jpg" "Built%20to%20<span>Stay</span>" "A%20Delta%20Futurism%20initiative"
card sources "steamer-capitol-1935.jpg" "Delta%20<span>Futurism</span>" "Sources%20and%20credits"
