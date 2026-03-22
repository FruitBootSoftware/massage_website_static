#!/bin/bash

# Install Tailwind CLI if not already installed
if ! command -v tailwindcss &> /dev/null; then
    echo "Installing Tailwind CSS CLI..."
    npm install -g @tailwindcss/cli
fi

# Watch mode (development)
tailwindcss -i ./assets/styles/input.css -o ./assets/styles/output.css --watch
