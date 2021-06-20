#!/bin/bash

themes=(
  "light"
  "dark"
)

for theme in "${themes[@]}"; do
  echo ""
  echo "Building CSS for '$theme' theme..."
  tailwindcss build --minify --config "./themes/tailwind.$theme.config.js" --output "./public/css/tailwind.$theme.css"
done
