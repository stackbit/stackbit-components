#!/bin/bash

themes=(
  "bold"
  "classic"
  "eco"
)

command=("./node_modules/.bin/concurrently" "--kill-others-on-fail" "--names")

names=""
for theme in "${themes[@]}"; do
  names+="$theme,"
done
names+="storybook"
command+=(names)

for theme in "${themes[@]}"; do
  command+=("npx tailwindcss -c ./themes/tailwind.$theme.config.js -o ./public/css/tailwind.$theme.css --watch")
done
command+=("./node_modules/.bin/start-storybook -s ./public -p 6006")

"${command[@]}"
