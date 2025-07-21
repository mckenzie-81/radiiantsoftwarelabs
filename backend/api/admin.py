from django.contrib import admin
from .models import ContactSubmission
from .models import NewsletterSubscriber
from .models import PortfolioItem, TeamMember
from .models import JobPosting, JobApplication

@admin.register(ContactSubmission)
class ContactSubmissionAdmin(admin.ModelAdmin):
    list_display = ("full_name", "email", "company", "submitted_at")
    search_fields = ("full_name", "email", "company", "message")
    list_filter = ("submitted_at",)
    readonly_fields = ("submitted_at",)

@admin.register(NewsletterSubscriber)
class NewsletterSubscriberAdmin(admin.ModelAdmin):
    list_display = ("email", "subscribed_at")
    search_fields = ("email",)
    list_filter = ("subscribed_at",)
    readonly_fields = ("subscribed_at",)

@admin.register(PortfolioItem)
class PortfolioItemAdmin(admin.ModelAdmin):
    list_display = ("name", "industry", "website")
    search_fields = ("name", "industry", "website", "blurb")
    list_filter = ("industry",)

@admin.register(TeamMember)
class TeamMemberAdmin(admin.ModelAdmin):
    list_display = ("name", "role", "linkedin")
    search_fields = ("name", "role", "linkedin", "blurb")
    list_filter = ("role",)

@admin.register(JobPosting)
class JobPostingAdmin(admin.ModelAdmin):
    list_display = ("title", "company", "location", "job_type", "experience_level", "department", "is_active", "created_at")
    search_fields = ("title", "company", "location", "department", "description", "requirements")
    list_filter = ("job_type", "experience_level", "department", "is_active", "created_at")
    readonly_fields = ("created_at", "updated_at")
    list_editable = ("is_active",)

@admin.register(JobApplication)
class JobApplicationAdmin(admin.ModelAdmin):
    list_display = ("full_name", "job_posting", "email", "status", "applied_at")
    search_fields = ("full_name", "email", "job_posting__title")
    list_filter = ("status", "applied_at", "job_posting")
    readonly_fields = ("applied_at",)
    list_editable = ("status",)
