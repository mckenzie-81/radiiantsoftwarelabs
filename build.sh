#!/bin/bash

echo "🚀 Building Radiiant application..."

# Build React app
cd radiiant
npm run build
cd ..

echo "✅ React build complete!" 