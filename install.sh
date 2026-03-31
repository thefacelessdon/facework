#!/bin/bash
# Facework Installer — symlinks skills into Claude Code
# Usage: ./install.sh

set -e

SKILL_DIR="$HOME/.claude/skills"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

echo ""
echo "  FACEWORK: A Coherence Practice"
echo "  Installing canonical skills..."
echo ""

"$SCRIPT_DIR/bin/install-skills"

echo ""
echo "  Facework skill set installed."
echo ""

# gstack detection
GSTACK_GLOBAL="$SKILL_DIR/gstack"
GSTACK_LOCAL="$SCRIPT_DIR/.claude/skills/gstack"

if [ -d "$GSTACK_GLOBAL" ] || [ -d "$GSTACK_LOCAL" ]; then
  echo "  gstack detected. Companion tooling available."
  echo ""
else
  echo "  Optional: install gstack for strategic review + engineering pressure testing."
  echo "  gstack provides /plan-ceo-review, /plan-eng-review, /browse, /qa, and more."
  echo ""
  read -p "  Install gstack? [y/N] " -n 1 -r
  echo ""
  if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "  Installing gstack..."
    git clone https://github.com/garrytan/gstack.git "$GSTACK_GLOBAL" 2>/dev/null || {
      echo "  [skip] gstack clone failed — install manually:"
      echo "         git clone https://github.com/garrytan/gstack.git $GSTACK_GLOBAL"
      echo "         cd $GSTACK_GLOBAL && ./setup"
    }
    if [ -d "$GSTACK_GLOBAL" ] && [ -f "$GSTACK_GLOBAL/setup" ]; then
      cd "$GSTACK_GLOBAL" && ./setup
      echo "  [ok]   gstack installed"
    fi
    echo ""
  fi
fi

echo "  Ready. Open Claude Code in any project and run:"
echo ""
echo "    /fw-semantics     Extract meaning           (Phase 1)"
echo "    /fw-field         Map cultural physics       (Phase 2)"
echo "    /fw-taste         Set quality bar            (Phase 3)"
echo "    /fw-frequency     Extract the signal         (Phase 4)"
echo "    /fw-current       Establish direction        (Phase 4)"
echo "    /fw-flow          Design adaptive behavior   (Phase 5)"
echo "    /fw-stability     Build the foundation       (Phase 5)"
echo "    /fw-resonance     Make it transmissible      (Phase 6)"
echo "    /fw-entropy       Reveal structural weakness (Phase 7)"
echo "    /fw-sovereignty   Enforce control boundaries (Phase 7)"
echo "    /fw-consonance    Verify alignment           (Phase 7)"
echo "    /fw-coherence     Integrate + diagnostic     (Phase 8)"
echo ""

echo "  Verify install:"
echo "    $SCRIPT_DIR/bin/facework-doctor"
echo ""
echo "  Check for updates anytime:"
echo "    $SCRIPT_DIR/bin/facework-update"
echo ""
