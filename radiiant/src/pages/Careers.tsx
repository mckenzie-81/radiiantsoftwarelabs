import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Helmet } from 'react-helmet';

interface JobPosting {
  id: number;
  title: string;
  company: string;
  location: string;
  job_type: string;
  experience_level: string;
  department: string;
  description: string;
  requirements: string;
  benefits: string;
  salary_range: string;
  created_at: string;
}

interface JobApplication {
  job_posting: number;
  full_name: string;
  email: string;
  phone: string;
  cover_letter: string;
  portfolio_url: string;
  linkedin_url: string;
  github_url: string;
}

const Careers: React.FC = () => {
  const [jobs, setJobs] = useState<JobPosting[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState<JobPosting | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [application, setApplication] = useState<JobApplication>({
    job_posting: 0,
    full_name: '',
    email: '',
    phone: '',
    cover_letter: '',
    portfolio_url: '',
    linkedin_url: '',
    github_url: '',
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const apiUrl = import.meta.env.VITE_API_URL || '/api';

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await fetch(`${apiUrl}/jobs/`);
      if (response.ok) {
        const data = await response.json();
        setJobs(data);
      }
    } catch (error) {
      console.error('Error fetching jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleJobSelect = (job: JobPosting) => {
    setSelectedJob(job);
    setApplication(prev => ({ ...prev, job_posting: job.id }));
    setShowApplicationForm(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setApplication(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleSubmitApplication = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitMessage('');

    try {
      const formData = new FormData();
      Object.entries(application).forEach(([key, value]) => {
        if (value) formData.append(key, value);
      });
      if (resumeFile) {
        formData.append('resume', resumeFile);
      }

      const response = await fetch(`${apiUrl}/jobs/apply/`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSubmitMessage('Application submitted successfully!');
        setApplication({
          job_posting: 0,
          full_name: '',
          email: '',
          phone: '',
          cover_letter: '',
          portfolio_url: '',
          linkedin_url: '',
          github_url: '',
        });
        setResumeFile(null);
        setShowApplicationForm(false);
      } else {
        const errorData = await response.json();
        setSubmitMessage('Error submitting application. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('Error submitting application. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getJobTypeLabel = (jobType: string) => {
    const labels: { [key: string]: string } = {
      'full-time': 'Full Time',
      'part-time': 'Part Time',
      'contract': 'Contract',
      'internship': 'Internship'
    };
    return labels[jobType] || jobType;
  };

  const getExperienceLabel = (level: string) => {
    const labels: { [key: string]: string } = {
      'entry': 'Entry Level',
      'junior': 'Junior',
      'mid': 'Mid Level',
      'senior': 'Senior',
      'lead': 'Lead'
    };
    return labels[level] || level;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading careers...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Careers | Radiiant Software Labs</title>
        <meta name="description" content="Join the Radiiant Software Labs team. Explore open positions and career opportunities in SaaS, software, and digital solutions." />
        <meta name="keywords" content="Careers, Jobs, Hiring, Software, SaaS, Radiiant, Work With Us, Opportunities" />
        <meta property="og:title" content="Careers | Radiiant Software Labs" />
        <meta property="og:description" content="Join the Radiiant Software Labs team. Explore open positions and career opportunities in SaaS, software, and digital solutions." />
        <meta property="og:url" content="https://radiiantsoftwarelabs.com/careers" />
        <meta property="og:image" content="https://radiiantsoftwarelabs.com/og-image.png" />
        <meta name="twitter:title" content="Careers | Radiiant Software Labs" />
        <meta name="twitter:description" content="Join the Radiiant Software Labs team. Explore open positions and career opportunities in SaaS, software, and digital solutions." />
        <meta name="twitter:image" content="https://radiiantsoftwarelabs.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Radiiant Software Labs",
            "url": "https://radiiantsoftwarelabs.com/careers",
            "logo": "https://radiiantsoftwarelabs.com/logo.png"
          }
        `}</script>
      </Helmet>
      <Navigation />
      
      {/* Header */}
      <div className="bg-white shadow-sm pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're looking for passionate individuals to help us build amazing digital experiences. 
              Explore our open positions and find your next opportunity.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {jobs.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No open positions at the moment</h3>
            <p className="text-gray-600">
              We don't have any open positions right now, but we're always looking for talented people. 
              Feel free to send us your resume for future opportunities.
            </p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Job Listings */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Open Positions</h2>
              <div className="space-y-4">
                {jobs.map((job) => (
                  <div
                    key={job.id}
                    className={`bg-white rounded-lg shadow-sm border-2 p-6 cursor-pointer transition-all hover:shadow-md ${
                      selectedJob?.id === job.id ? 'border-green-500 bg-green-50' : 'border-gray-200'
                    }`}
                    onClick={() => handleJobSelect(job)}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {getJobTypeLabel(job.job_type)}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-2">{job.location}</p>
                    <p className="text-sm text-gray-500 mb-3">{job.department}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {getExperienceLabel(job.experience_level)}
                      </span>
                      <span className="text-sm text-gray-400">
                        Posted {formatDate(job.created_at)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Job Details */}
            <div className="lg:col-span-2">
              {selectedJob ? (
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedJob.title}</h2>
                      <p className="text-xl text-gray-600 mb-4">{selectedJob.company}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>{selectedJob.location}</span>
                        <span>•</span>
                        <span>{getJobTypeLabel(selectedJob.job_type)}</span>
                        <span>•</span>
                        <span>{getExperienceLabel(selectedJob.experience_level)}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => setShowApplicationForm(true)}
                      className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
                    >
                      Apply Now
                    </button>
                  </div>

                  {selectedJob.salary_range && (
                    <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-1">Salary Range</h4>
                      <p className="text-gray-600">{selectedJob.salary_range}</p>
                    </div>
                  )}

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Job Description</h3>
                      <div className="prose max-w-none text-gray-700">
                        {selectedJob.description.split('\n').map((paragraph, index) => (
                          <p key={index} className="mb-3">{paragraph}</p>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Requirements</h3>
                      <div className="prose max-w-none text-gray-700">
                        {selectedJob.requirements.split('\n').map((requirement, index) => (
                          <p key={index} className="mb-2">• {requirement}</p>
                        ))}
                      </div>
                    </div>

                    {selectedJob.benefits && (
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Benefits</h3>
                        <div className="prose max-w-none text-gray-700">
                          {selectedJob.benefits.split('\n').map((benefit, index) => (
                            <p key={index} className="mb-2">• {benefit}</p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
                  <div className="text-gray-400 mb-4">
                    <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Select a position</h3>
                  <p className="text-gray-600">
                    Choose a job posting from the list to view details and apply.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Application Form Modal */}
        {showApplicationForm && selectedJob && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Apply for {selectedJob.title}
                  </h3>
                  <button
                    onClick={() => setShowApplicationForm(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              <form onSubmit={handleSubmitApplication} className="p-6 space-y-6">
                {submitMessage && (
                  <div className={`p-4 rounded-lg ${
                    submitMessage.includes('successfully') 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {submitMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="full_name"
                      value={application.full_name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={application.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={application.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Resume *
                    </label>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cover Letter
                  </label>
                  <textarea
                    name="cover_letter"
                    value={application.cover_letter}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Tell us why you're interested in this position..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Portfolio URL
                    </label>
                    <input
                      type="url"
                      name="portfolio_url"
                      value={application.portfolio_url}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      LinkedIn URL
                    </label>
                    <input
                      type="url"
                      name="linkedin_url"
                      value={application.linkedin_url}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      GitHub URL
                    </label>
                    <input
                      type="url"
                      name="github_url"
                      value={application.github_url}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={() => setShowApplicationForm(false)}
                    className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="px-6 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors disabled:opacity-50"
                  >
                    {submitting ? 'Submitting...' : 'Submit Application'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Careers; 