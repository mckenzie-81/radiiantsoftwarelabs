# 🚀 Radiiant Deployment Guide (Decoupled Architecture)

## Overview
- **Frontend:** React (Vite) deployed to Vercel
- **Backend:** Django (API + Admin) deployed to Railway/Render/AWS/etc.
- **Integration:** React fetches data from Django API via environment variable

---

## 1. Frontend (React on Vercel)

### Setup
- Push your React code to GitHub/GitLab.
- Connect your repo to Vercel.
- In Vercel dashboard, set environment variable:
  - `VITE_API_URL=https://api.yourdomain.com`
- All API calls in React should use `import.meta.env.VITE_API_URL`.
- Deploy!

---

## 2. Backend (Django API + Admin)

### Setup
- Deploy Django to Railway, Render, DigitalOcean, AWS, etc.
- Set environment variables (in `.env` or platform dashboard):
  - `DJANGO_SECRET_KEY=your-very-secret-key`
  - `DJANGO_DEBUG=False`
  - `DJANGO_ALLOWED_HOSTS=api.yourdomain.com`
  - `DATABASE_URL=...` (your DB connection string)
- In `settings.py`, set:
  ```python
  CORS_ALLOWED_ORIGINS = [
      "https://your-vercel-app.vercel.app",
      "https://www.yourfrontenddomain.com",
  ]
  ```
- Expose `/api/` and `/admin/` endpoints.
- Ensure `/media/` is accessible for uploaded files.
- Use HTTPS in production.

---

## 3. Integration Checklist
- [ ] React `.env` and Vercel env var set to Django API URL
- [ ] Django CORS allows only frontend domains
- [ ] All API calls in React use the env variable
- [ ] Media files (images, uploads) are accessible from frontend
- [ ] Django admin is secured (HTTPS, strong passwords, session settings)

---

## 4. Local Development
- You can still run both locally:
  - Django: `python manage.py runserver`
  - React: `npm run dev` (in `radiiant/`)
  - Set `VITE_API_URL=http://127.0.0.1:8000` in your local `.env`
- Use CORS settings to allow `localhost` for local dev only.

---

## 5. (Optional) Single-Server or Docker for Local Dev
- If you want to run both on one server for local dev, you can use Docker Compose or a build script, but **production should be decoupled** as above.

---

## 6. Troubleshooting
- **CORS errors:** Check allowed origins in Django.
- **API 404s:** Check API URLs and env variables.
- **Media not loading:** Ensure Django serves `/media/` and URLs are correct in React.
- **Admin not secure:** Use HTTPS, strong passwords, and production settings.

---

## 7. Security Checklist
- [ ] `DEBUG = False` in production
- [ ] Strong `SECRET_KEY` in env vars
- [ ] Proper `ALLOWED_HOSTS`
- [ ] HTTPS enabled
- [ ] CORS restricted to frontend domains
- [ ] Database backups and monitoring

---

## 8. Monitoring & Maintenance
- Set up error tracking (Sentry, etc.)
- Monitor server and database performance
- Regularly update dependencies

---

**This guide supersedes previous single-server and Docker full-stack instructions for production.** 