from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ContactSubmissionSerializer
from .models import ContactSubmission
from rest_framework import status
from .serializers import NewsletterSubscriberSerializer
from .models import NewsletterSubscriber
from .serializers import PortfolioItemSerializer, TeamMemberSerializer
from .models import PortfolioItem, TeamMember
from .serializers import JobPostingSerializer, JobApplicationSerializer
from .models import JobPosting, JobApplication
import os
from django.core.mail import send_mail

# Create your views here.

@api_view(["GET"])
def hello_world(request):
    return Response({"message": "Hello from Django API!"})

@api_view(["POST"])
def submit_contact(request):
    serializer = ContactSubmissionSerializer(data=request.data)
    if serializer.is_valid():
        contact = serializer.save()
        
        # Send email notification
        try:
            subject = f"New Contact Form Submission from {contact.full_name}"
            message = f"""
New contact form submission received:

Name: {contact.full_name}
Email: {contact.email}
Phone: {contact.phone}
Company: {contact.company}
Message: {contact.message}

Submitted at: {contact.submitted_at}
            """
            
            # Send email to admin
            send_mail(
                subject=subject,
                message=message,
                from_email=os.environ.get('GMAIL_USER', 'radiiant.solutions@gmail.com'),
                recipient_list=[os.environ.get('ADMIN_EMAIL', 'richardbrightasiedu@gmail.com')],
                fail_silently=False,
            )
            
            return Response({"success": True, "message": "Submission received and notification sent."}, status=status.HTTP_201_CREATED)
            
        except Exception as e:
            # If email fails, still save the contact but log the error
            print(f"Email sending failed: {e}")
            return Response({"success": True, "message": "Submission received. Email notification failed."}, status=status.HTTP_201_CREATED)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(["POST"])
def subscribe_newsletter(request):
    serializer = NewsletterSubscriberSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"success": True, "message": "Subscribed successfully."}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(["GET"])
def portfolio_list(request):
    items = PortfolioItem.objects.all()
    serializer = PortfolioItemSerializer(items, many=True, context={"request": request})
    return Response(serializer.data)

@api_view(["GET"])
def job_listings(request):
    jobs = JobPosting.objects.filter(is_active=True)
    serializer = JobPostingSerializer(jobs, many=True)
    return Response(serializer.data)

@api_view(["GET"])
def job_detail(request, job_id):
    try:
        job = JobPosting.objects.get(id=job_id, is_active=True)
        serializer = JobPostingSerializer(job)
        return Response(serializer.data)
    except JobPosting.DoesNotExist:
        return Response({"error": "Job not found"}, status=status.HTTP_404_NOT_FOUND)

@api_view(["POST"])
def submit_job_application(request):
    serializer = JobApplicationSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"success": True, "message": "Application submitted successfully."}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
