#!/bin/zsh
set -euo pipefail

ROOT="/Users/matthewbishop/BishopTech.dev/bishoptech-skills"
LOG_DIR="$ROOT/cron/logs"
mkdir -p "$LOG_DIR"

cd "$ROOT"
# Generates BishopTech-enhanced skills, exports website metadata, then commits/pushes new changes.
/usr/bin/env npm run skills:run >> "$LOG_DIR/skills-run.log" 2>> "$LOG_DIR/skills-run.error.log"
