#!/bin/zsh
set -euo pipefail

ROOT="/Users/matthewbishop/BishopTech.dev/bishoptech-skills"
CRON_CMD="0 */2 * * * $ROOT/cron/run-bishoptech-skills.sh"

( crontab -l 2>/dev/null | grep -v "$ROOT/cron/run-bishoptech-skills.sh" ; echo "$CRON_CMD" ) | crontab -
echo "Installed cron: $CRON_CMD"
