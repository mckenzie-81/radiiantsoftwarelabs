"""
Production settings for Radiiant Software Labs
"""

import os
from .settings import *

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY', '_o93)$$!n(f9e3n#5us*aa5yn(^puc%w#0d$z&*g&49cam)f5a')

# Production hosts
ALLOWED_HOSTS = [
    "rslwebsite.onrender.com",
    "radiiantsoftwarelabs.com",
    "www.radiiantsoftwarelabs.com",
]

# Security Settings
SECURE_BROWSER_XSS_FILTER = True
SECURE_CONTENT_TYPE_NOSNIFF = True
X_FRAME_OPTIONS = 'DENY'
SECURE_HSTS_SECONDS = 31536000  # 1 year
SECURE_HSTS_INCLUDE_SUBDOMAINS = True
SECURE_HSTS_PRELOAD = True

# HTTPS Settings (enable when you have SSL certificate)
SECURE_SSL_REDIRECT = True
SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')

# Session Security
SESSION_COOKIE_SECURE = True
SESSION_COOKIE_HTTPONLY = True
SESSION_COOKIE_SAMESITE = 'Strict'

# CSRF Protection
CSRF_COOKIE_SECURE = True
CSRF_COOKIE_HTTPONLY = True
CSRF_COOKIE_SAMESITE = 'Strict'

# CORS Settings (restrict for production)
CORS_ALLOWED_ORIGINS = [
    "https://radiiantsoftwarelabs.vercel.app",
    "https://radiiantsoftwarelabs.com",
    "https://www.radiiantsoftwarelabs.com",
]

CORS_ALLOW_CREDENTIALS = True

# Database (use PostgreSQL in production)
# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.postgresql',
#         'NAME': os.environ.get('DB_NAME', 'radiiant_db'),
#         'USER': os.environ.get('DB_USER', 'radiiant_user'),
#         'PASSWORD': os.environ.get('DB_PASSWORD', ''),
#         'HOST': os.environ.get('DB_HOST', 'localhost'),
#         'PORT': os.environ.get('DB_PORT', '5432'),
#     }
# }

# Static files (use CDN or separate static server in production)
STATIC_ROOT = '/var/www/radiiant/static/'
MEDIA_ROOT = '/var/www/radiiant/media/'

# Logging
LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'handlers': {
        'console': {
            'level': 'INFO',
            'class': 'logging.StreamHandler',
        },
    },
    'loggers': {
        'django': {
            'handlers': ['console'],
            'level': 'INFO',
            'propagate': True,
        },
    },
}

# Admin Security
ADMIN_URL = os.environ.get('ADMIN_URL', 'admin/')  # Change default admin URL 

# Email Configuration (Gmail SMTP)
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_HOST_USER = os.environ.get('GMAIL_USER', 'radiiant.solutions@gmail.com')
EMAIL_HOST_PASSWORD = os.environ.get('GMAIL_APP_PASSWORD', 'your-app-password') 