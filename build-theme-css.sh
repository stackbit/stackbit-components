#!/bin/bash

tailwindcss-cli build -c ./themes/tailwind.light.config.js -o ./public/css/tailwind.light.css
tailwindcss-cli build -c ./themes/tailwind.dark.config.js -o ./public/css/tailwind.dark.css
