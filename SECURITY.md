# 🔒 Security Checklist for Radiiant Software Labs

## Admin Panel Security

### ✅ Current Security Measures
- [x] **Authentication Required** - Admin panel requires login
- [x] **CSRF Protection** - Enabled via middleware
- [x] **Session Management** - Proper session handling
- [x] **Password Validation** - Strong password requirements
- [x] **XSS Protection** - Browser XSS filter enabled
- [x] **Content Type Sniffing** - Disabled for security
- [x] **Clickjacking Protection** - X-Frame-Options set to DENY
- [x] **HSTS Headers** - HTTP Strict Transport Security enabled

### 🔧 Development Security
- [x] **Allowed Hosts** - Restricted to localhost/127.0.0.1
- [x] **Session Cookies** - HttpOnly and SameSite enabled
- [x] **CSRF Cookies** - Secure settings applied

### 🚀 Production Security Checklist

#### Environment Variables
- [ ] Set `DJANGO_SECRET_KEY` in environment
- [ ] Set `ADMIN_URL` to change default admin path
- [ ] Set database credentials via environment variables

#### HTTPS & SSL
- [ ] Enable `SECURE_SSL_REDIRECT = True`
- [ ] Set `SECURE_PROXY_SSL_HEADER`
- [ ] Enable `SESSION_COOKIE_SECURE = True`
- [ ] Enable `CSRF_COOKIE_SECURE = True`

#### Host Security
- [ ] Update `ALLOWED_HOSTS` with your domain
- [ ] Restrict `CORS_ALLOWED_ORIGINS` to your domains
- [ ] Set `DEBUG = False`

#### Database Security
- [ ] Use PostgreSQL instead of SQLite
- [ ] Set strong database passwords
- [ ] Enable database connection encryption

#### Admin User Security
- [ ] Change default admin URL (e.g., `/radiiant-admin/`)
- [ ] Use strong admin passwords
- [ ] Enable two-factor authentication (optional)
- [ ] Regular password rotation

#### Server Security
- [ ] Use HTTPS only
- [ ] Set up proper firewall rules
- [ ] Regular security updates
- [ ] Monitor access logs
- [ ] Set up intrusion detection

## Quick Security Commands

### Create Superuser
```bash
python manage.py createsuperuser
```

### Change Admin URL
```bash
# Set environment variable
export ADMIN_URL="radiiant-admin/"
```

### Check Admin Users
```bash
python manage.py shell -c "from django.contrib.auth.models import User; print('Admin users:', User.objects.filter(is_superuser=True).count())"
```

### Production Settings
```bash
# Use production settings
export DJANGO_SETTINGS_MODULE=core.production_settings
python manage.py runserver
```

## Security Best Practices

1. **Never commit secrets** to version control
2. **Use environment variables** for sensitive data
3. **Regular security audits** of admin access
4. **Monitor failed login attempts**
5. **Keep Django and dependencies updated**
6. **Use strong, unique passwords**
7. **Enable logging** for security events
8. **Regular backups** of admin data

## Emergency Security Actions

If admin panel is compromised:
1. **Immediately change admin passwords**
2. **Review access logs**
3. **Check for unauthorized changes**
4. **Update Django and dependencies**
5. **Consider changing admin URL**
6. **Review server security**

## Monitoring

- Monitor `/admin/` access logs
- Check for failed login attempts
- Review admin user activity
- Monitor file uploads in admin
- Track database changes

---

**Remember**: Security is an ongoing process, not a one-time setup! 