#!/usr/bin/env bash
# no-noreferrer.sh

set -euo pipefail

DIST_DIR="docs/.vuepress/dist"

[[ -d "$DIST_DIR" ]] || { echo "Directory $DIST_DIR does not exist"; exit 1; }

find "$DIST_DIR" -type f -name "*.html" -print0 |
while IFS= read -r -d '' file; do
    sed -i 's/rel="noopener noreferrer"/rel="noopener"/g' "$file"
done

echo "✅ All HTML files have been fixed"