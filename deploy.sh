#!/bin/bash

# Exit if any command fails
set -e

# Temporarily set the homepage for production build
echo "Updating package.json for production..."
sed -i.bak 's/"homepage": "."/"homepage": "https:\/\/nisarg38.github.io\/Portfolio-Website\/"/' package.json

echo "Building React Portfolio..."
npm run build

echo "Restoring package.json..."
mv package.json.bak package.json

echo "Building Astro Blog..."
cd blog && npm run build && cd ..

echo "Creating combined build directory..."
mkdir -p build/blog
cp -r blog/dist/* build/blog/

echo "Deploying to GitHub Pages..."
npx gh-pages -d build

echo "Deployment complete!" 