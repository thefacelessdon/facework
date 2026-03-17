#!/bin/bash
# Facework Installer — symlinks skills into Claude Code
# Usage: ./install.sh

set -e

SKILL_DIR="$HOME/.claude/skills"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

echo ""
echo "  FACEWORK: A Coherence Practice"
echo "  Installing build primitives..."
echo ""

mkdir -p "$SKILL_DIR"

SKILLS=(
  fw-frequency
  fw-current
  fw-stability
  fw-flow
  fw-resonance
  fw-entropy
  fw-coherence
  fw-diagnostic
)

for skill in "${SKILLS[@]}"; do
  if [ -L "$SKILL_DIR/$skill" ]; then
    rm "$SKILL_DIR/$skill"
  fi
  if [ -d "$SKILL_DIR/$skill" ]; then
    echo "  [skip] $skill already exists as directory — back up and retry if needed"
    continue
  fi
  ln -s "$SCRIPT_DIR/skills/$skill" "$SKILL_DIR/$skill"
  echo "  [ok]   $skill"
done

echo ""
echo "  Installed. Open Claude Code in any project and run:"
echo ""
echo "    /fw-frequency     Extract the irreducible signal"
echo "    /fw-current       Establish direction"
echo "    /fw-stability     Build the foundation"
echo "    /fw-flow          Design adaptive behavior"
echo "    /fw-resonance     Make it transmissible"
echo "    /fw-entropy       Reveal structural weakness"
echo "    /fw-coherence     Integrate into unified whole"
echo "    /fw-diagnostic    Measure and evolve"
echo ""
