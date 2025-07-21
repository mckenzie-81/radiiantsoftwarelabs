#!/bin/bash

echo "🚀 Building Django static and media files..."

# Activate virtual environment
source venv/bin/activate

# Collect static files for Django admin/media
python manage.py collectstatic --noinput

echo "✅ Django static/media build complete!" 