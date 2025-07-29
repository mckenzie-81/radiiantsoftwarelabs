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
import emailjs from '@emailjs/browser';

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
      // EmailJS configuration
      const templateParams = {
        name: formData.fullName,
        email: formData.email,
        company: formData.company,
        message: formData.message,
        time: new Date().toLocaleString()
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        templateParams,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      if (result.status === 200) {
        setIsSubmitted(true);
        setFormData({ fullName: '', email: '', company: '', message: '' });
      } else {
        alert('Email sending failed. Please try again.');
      }
    } catch (error) {
      console.error('Email error:', error);
      alert('An error occurred while sending the email. Please try again.');
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
        <meta property="og:url" content="https://radiiantsoftwarelabs.com.com/contact" />
        <meta property="og:image" content="https://radiiantsoftwarelabs.com.com/og-image.png" />
        <meta name="twitter:title" content="Contact Us | Radiiant Software Labs" />
        <meta name="twitter:description" content="Contact Radiiant Software Labs for business inquiries, support, or partnership opportunities. We're here to help you grow." />
        <meta name="twitter:image" content="https://radiiantsoftwarelabs.com.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{`
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Radiiant Software Labs",
      "url": "https://radiiantsoftwarelabs.com.com/contact",
      "logo": "https://radiiantsoftwarelabs.com.com/logo.png",
      "contactPoint": [{
        "@type": "ContactPoint",
        "telephone": "+1-800-555-0199",
        "contactType": "customer service",
        "areaServed": "US",
        "availableLanguage": "en"
      },{
        "@type": "ContactPoint",
        "telephone": "+233-54-387-6146",
        "contactType": "customer service",
        "areaServed": "GH",
        "availableLanguage": ["en", "Twi"]
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
                  {/* Contact Info Header */}
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Our Offices</h2>
                    <p className="text-muted-foreground">
                      Find our team at our international headquarters.
                    </p>
                  </div>

                  {/* Office Locations */}
                  <div className="space-y-6">
                    {/* US Office */}
                    <div className="glass-card p-6 rounded-xl">
                      <h3 className="font-bold text-lg mb-4 text-gradient">United States</h3>
                      <div className="space-y-4">
                        <a href="tel:+16469725340" className="flex items-start space-x-4 group">
                          <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <Phone className="h-5 w-5 text-primary-foreground" />
                          </div>
                          <div>
                            <p className="font-semibold text-foreground">Phone</p>
                            <p className="text-muted-foreground text-sm">+1 (646) 972-5340</p>
                          </div>
                        </a>
                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                            <MapPin className="h-5 w-5 text-primary-foreground" />
                          </div>
                          <div>
                            <p className="font-semibold text-foreground">Address</p>
                            <p className="text-muted-foreground text-sm">2080 Lafontaine Avenue, Bronx NY 10457</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Ghana Office */}
                    <div className="glass-card p-6 rounded-xl">
                      <h3 className="font-bold text-lg mb-4 text-gradient">Ghana</h3>
                      <div className="space-y-4">
                        <a href="tel:+233543876146" className="flex items-start space-x-4 group">
                          <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <Phone className="h-5 w-5 text-primary-foreground" />
                          </div>
                          <div>
                            <p className="font-semibold text-foreground">Phone</p>
                            <p className="text-muted-foreground text-sm">+233 (54) 387-6146</p>
                          </div>
                        </a>
                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                            <MapPin className="h-5 w-5 text-primary-foreground" />
                          </div>
                          <div>
                            <p className="font-semibold text-foreground">Address</p>
                            <p className="text-muted-foreground text-sm">East Legon, Accra</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* General Contact */}
                  <div>
                    <h2 className="text-2xl font-bold mb-4 pt-4">General Inquiries</h2>
                    <a href="mailto:contact@radiiantsoftwarelabs.com" className="block glass-card p-6 rounded-xl hover:shadow-medium transition-all duration-300 group">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Mail className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Email us</h3>
                          <p className="text-sm text-muted-foreground mb-2">For general questions or support</p>
                          <p className="text-foreground font-medium">contact@radiiantsoftwarelabs.com</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Contact;