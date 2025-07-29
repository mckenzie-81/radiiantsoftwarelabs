from rest_framework import serializers
from .models import ContactSubmission
from .models import NewsletterSubscriber
from .models import PortfolioItem
from .models import TeamMember
from .models import JobPosting
from .models import JobApplication

class ContactSubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactSubmission
        fields = ['id', 'full_name', 'email', 'phone', 'company', 'message', 'submitted_at']

class NewsletterSubscriberSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsletterSubscriber
        fields = ['id', 'email', 'subscribed_at']

class PortfolioItemSerializer(serializers.ModelSerializer):
    logo = serializers.ImageField(read_only=True)
    class Meta:
        model = PortfolioItem
        fields = ['id', 'name', 'industry', 'logo', 'website', 'blurb']

class TeamMemberSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(read_only=True)
    class Meta:
        model = TeamMember
        fields = ['id', 'name', 'role', 'image', 'blurb', 'linkedin']

class JobPostingSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobPosting
        fields = ['id', 'title', 'company', 'location', 'job_type', 'experience_level', 
                 'department', 'description', 'requirements', 'benefits', 'salary_range', 
                 'is_active', 'created_at', 'updated_at']

class JobApplicationSerializer(serializers.ModelSerializer):
    resume = serializers.FileField(read_only=True)
    class Meta:
        model = JobApplication
        fields = ['id', 'job_posting', 'full_name', 'email', 'phone', 'resume', 
                 'cover_letter', 'portfolio_url', 'linkedin_url', 'github_url', 
                 'status', 'applied_at', 'notes'] 