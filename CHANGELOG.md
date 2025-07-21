# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Decoupled Deployment Migration (React on Vercel, Django as API/Admin)

**Planned Steps:**
- [x] 1. Remove Django catch-all route and view for serving React frontend.
- [x] 2. Delete or archive `backend/templates/index.html` (no longer needed).
- [x] 3. Remove React build copy steps from `build.sh` and `backend/build.sh`.
- [x] 4. Clean up any React build files from `backend/static/` and `backend/staticfiles/`.
- [x] 5. Update Django CORS settings to only allow Vercel/frontend domains.
- [x] 6. Ensure React app uses correct API base URL via `.env` and Vercel dashboard.
- [x] 7. Update `DEPLOYMENT.md` to reflect new architecture and deployment steps.
- [x] 8. Double-check Django production security settings (`DEBUG`, `ALLOWED_HOSTS`, secret key, etc.).
- [ ] 9. Test integration: React on Vercel, Django API/admin on backend host, media file access, CORS, etc.
- [ ] 10. Remove any documentation or code referencing single-server or Dockerized full-stack deployment (unless needed for local dev).

**Next Steps:**
- Test the full integration (React on Vercel, Django API/admin, media, CORS).
- Remove or archive any remaining documentation or code referencing single-server or Dockerized full-stack deployment (unless needed for local dev).

- Ongoing improvements and bug fixes.

## [1.0.0] - 2025-07-19
### Added
- Django backend with Django REST Framework for API endpoints.
- React frontend integration, served via Django static files.
- Models and admin for ContactSubmission, NewsletterSubscriber, PortfolioItem, TeamMember, JobPosting, JobApplication.
- API endpoints for all major models, including careers section.
- Newsletter subscription and contact forms connected to backend.
- Dynamic content for Portfolio, Team, Careers, managed from backend.
- Jazzmin admin theme for improved admin UI.
- Security enhancements: no-cache admin middleware, session expiration, CSRF and session cookie settings.
- Static and media file handling for images and uploads.
- Build script for React and Django static integration.
- Deployment and security documentation.

### Fixed
- Static file 404 errors and React asset path issues.
- Pillow installation for image uploads.
- Admin session and cache security issues.

### Changed
- Updated frontend to fetch dynamic data from backend APIs.
- Improved admin UI and navigation.

--- 