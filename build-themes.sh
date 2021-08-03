#!/bin/bash

themes=(
  "bold"
  "classic"
  "eco"
)

for theme in "${themes[@]}"; do
  echo ""
  echo "Building CSS for '$theme' theme..."
  tailwindcss build --minify -i "./src/css/global.css" --config "./themes/tailwind.$theme.config.js" --output "./public/css/tailwind.$theme.css"
done
