import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          full_name: formData.fullName,
          email: formData.email,
          company: formData.company,
          message: formData.message,
        }),
      });

      if (response.ok) {
    setIsSubmitted(true);
        setFormData({ fullName: '', email: '', company: '', message: '' });
        // Optionally, show a toast or notification here
      } else {
        const errorData = await response.json();
        alert('Submission failed: ' + JSON.stringify(errorData));
      }
    } catch (error) {
      alert('An error occurred: ' + error);
    } finally {
    setIsSubmitting(false);
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Radiiant Software Labs</title>
        <meta name="description" content="Contact Radiiant Software Labs for business inquiries, support, or partnership opportunities. We're here to help you grow." />
        <meta name="keywords" content="Contact, Support, Business Inquiries, Radiiant, Software, SaaS, Help" />
        <meta property="og:title" content="Contact Us | Radiiant Software Labs" />
        <meta property="og:description" content="Contact Radiiant Software Labs for business inquiries, support, or partnership opportunities. We're here to help you grow." />
        <meta property="og:url" content="https://radiiantsoftwarelabs.com/contact" />
        <meta property="og:image" content="https://radiiantsoftwarelabs.com/og-image.png" />
        <meta name="twitter:title" content="Contact Us | Radiiant Software Labs" />
        <meta name="twitter:description" content="Contact Radiiant Software Labs for business inquiries, support, or partnership opportunities. We're here to help you grow." />
        <meta name="twitter:image" content="https://radiiantsoftwarelabs.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{`
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Radiiant Software Labs",
      "url": "https://radiiantsoftwarelabs.com/contact",
      "logo": "https://radiiantsoftwarelabs.com/logo.png",
      "contactPoint": [{
        "@type": "ContactPoint",
        "telephone": "+1-800-123-4567",
        "contactType": "Customer Service",
        "email": "contact@radiiantsoftwarelabs.com"
      }]
    }
  `}</script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navigation />

        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-16 bg-gradient-to-b from-muted/20 to-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Let's build something <span className="text-gradient">together</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Have a question or want to work with us? We'd love to hear from you.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Contact Content */}
          <section className="py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16">
                {/* Left Column - Form */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="glass-card p-8 rounded-2xl shadow-medium">
                    <h2 className="text-2xl font-bold mb-6">Send us a message</h2>

                    {!isSubmitted ? (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">Full Name *</Label>
                          <Input
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            placeholder="John Doe"
                            required
                            className="h-12"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="john@company.com"
                            required
                            className="h-12"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="company">Company</Label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Your Company"
                            className="h-12"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Message *</Label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Tell us about your project or question..."
                            required
                            className="min-h-32 resize-none"
                          />
                        </div>

                        <Button
                          type="submit"
                          size="lg"
                          className="w-full group"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>Sending...</>
                          ) : (
                            <>
                              Send Message
                              <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </>
                          )}
                        </Button>
                      </form>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-center py-8"
                      >
                        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold mb-2">Message sent!</h3>
                        <p className="text-muted-foreground">
                          Thank you for reaching out. We'll get back to you within 24 hours.
                        </p>
                      </motion.div>
                    )}
                  </div>
                </motion.div>

                {/* Right Column - Contact Info */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="space-y-8"
                >
                  {/* Contact Cards */}
                  <div className="space-y-6">
                    {[
                      {
                        icon: Mail,
                        title: 'Email us',
                        description: 'Send us an email anytime',
                        info: 'contact@radiiant.site',
                        action: 'mailto:contact@radiiant.site'
                      },
                      {
                        icon: Phone,
                        title: 'Call us',
                        description: 'Monday to Friday, 9am to 6pm PST',
                        info: '+1 (555) 123-4567',
                        action: 'tel:+15551234567'
                      },
                      {
                        icon: MapPin,
                        title: 'Visit us',
                        description: 'Our headquarters',
                        info: 'San Francisco, CA',
                        action: '#'
                      }
                    ].map((contact, index) => (
                      <motion.a
                        key={index}
                        href={contact.action}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                        className="block glass-card p-6 rounded-xl hover:shadow-medium transition-all duration-300 group"
                      >
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <contact.icon className="h-6 w-6 text-primary-foreground" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground mb-1">
                              {contact.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-2">
                              {contact.description}
                            </p>
                            <p className="text-foreground font-medium">
                              {contact.info}
                            </p>
                          </div>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Additional CTA */}
          <section className="py-16 bg-muted/30">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-4">Prefer to schedule a call?</h2>
                <p className="text-muted-foreground mb-8">
                  Book a 30-minute demo call with our team to see Radiiant in action.
                </p>
                <Button size="lg" variant="outline">
                  Schedule Demo Call
                </Button>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Contact;