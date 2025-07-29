from django.urls import path
from .views import hello_world, submit_contact, subscribe_newsletter, portfolio_list
from .views import job_listings, job_detail, submit_job_application

urlpatterns = [
    path('hello/', hello_world, name='hello_world'),
    path('contact/', submit_contact, name='submit_contact'),
    path('newsletter/', subscribe_newsletter, name='subscribe_newsletter'),
    path('portfolio/', portfolio_list, name='portfolio_list'),
    path('jobs/', job_listings, name='job_listings'),
    path('jobs/<int:job_id>/', job_detail, name='job_detail'),
    path('jobs/apply/', submit_job_application, name='submit_job_application'),
] 