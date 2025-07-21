import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Company',
      links: [
        { name: 'About', href: '#about' },
        { name: 'Blog', href: '/blog' },
        { name: 'Careers', href: '/careers' },
        { name: 'Press', href: '/press' },
        { name: 'Contact', href: '/contact' }
      ]
    },
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '#services' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'API Docs', href: '/docs' },
        { name: 'Integrations', href: '/pricing' },
        { name: 'Changelog', href: '/changelog' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '/docs' },
        { name: 'Help Center', href: '/help' },
        { name: 'Community', href: '/community' },
        { name: 'Webinars', href: '/webinars' },
        { name: 'Status', href: '/status' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
        { name: 'GDPR', href: '/gdpr' },
        { name: 'Security', href: '/security' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/Radiiant' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/Radiiant' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/Radiiant' },
    { name: 'Email', icon: Mail, href: 'mailto:contact@radiiant.site' }
  ];

  // Newsletter state and handler
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [newsletterMessage, setNewsletterMessage] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterStatus('loading');
    setNewsletterMessage('');
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/newsletter/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newsletterEmail }),
      });
      if (response.ok) {
        setNewsletterStatus('success');
        setNewsletterMessage('Subscribed! Check your inbox.');
        setNewsletterEmail('');
      } else {
        const data = await response.json();
        setNewsletterStatus('error');
        setNewsletterMessage(data.email?.[0] || 'Subscription failed.');
      }
    } catch {
      setNewsletterStatus('error');
      setNewsletterMessage('Network error. Please try again.');
    }
    setTimeout(() => setNewsletterStatus('idle'), 4000);
  };

  return (
    <footer className="bg-muted/30 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-6 gap-8 mb-12">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gradient">Radiiant</h3>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                Building the future of business tools. Empowering teams to work 
                smarter, move faster, and achieve more together.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors duration-300 group"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-foreground mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: linkIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-border/50"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 Radiiant. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="hidden md:block w-1 h-1 bg-muted-foreground/30 rounded-full" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Newsletter Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="border-t border-border/50 bg-muted/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div>
              <h4 className="font-semibold text-foreground mb-1">Stay updated</h4>
              <p className="text-sm text-muted-foreground">
                Get the latest product updates and announcements.
              </p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex space-x-2 w-full md:w-auto">
              <input
                type="email"
                value={newsletterEmail}
                onChange={e => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 md:w-64 px-3 py-2 text-sm bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                disabled={newsletterStatus === 'loading'}
              />
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200"
                disabled={newsletterStatus === 'loading'}
              >
                {newsletterStatus === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
            {newsletterStatus !== 'idle' && (
              <div className={`text-sm ml-4 ${newsletterStatus === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                {newsletterMessage}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;