#!/bin/bash

# Build minified CSS for production
echo "Building CSS for production..."
tailwindcss -i ./assets/styles/input.css -o ./assets/styles/output.css --minify
