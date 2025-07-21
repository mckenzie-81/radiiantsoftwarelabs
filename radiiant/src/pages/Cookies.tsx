import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const Cookies = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy | Radiiant Software Labs</title>
        <meta name="description" content="Learn how Radiiant Software Labs uses cookies to enhance your experience and protect your privacy." />
        <link rel="canonical" href="https://radiiantsoftwarelabs.com/cookies" />
        {/* Open Graph */}
        <meta property="og:title" content="Cookie Policy | Radiiant Software Labs" />
        <meta property="og:description" content="Learn how Radiiant Software Labs uses cookies to enhance your experience and protect your privacy." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://radiiantsoftwarelabs.com/cookies" />
        <meta property="og:image" content="https://radiiantsoftwarelabs.com/og-image.png" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cookie Policy | Radiiant Software Labs" />
        <meta name="twitter:description" content="Learn how Radiiant Software Labs uses cookies to enhance your experience and protect your privacy." />
        <meta name="twitter:image" content="https://radiiantsoftwarelabs.com/og-image.png" />
        <meta name="twitter:site" content="@Radiiant_saas" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="pt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Cookie <span className="text-gradient">Policy</span>
                </h1>
                <p className="text-muted-foreground">
                  Last updated: January 15, 2024
                </p>
              </div>

              <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
                <section>
                  <h2 className="text-2xl font-bold mb-4">What Are Cookies</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Cookies are small text files that are placed on your device when you visit our website. 
                    They help us provide you with a better experience by remembering your preferences and 
                    improving our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Types of Cookies We Use</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Essential Cookies</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        These cookies are necessary for the website to function properly and cannot be disabled.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Analytics Cookies</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Help us understand how visitors interact with our website by collecting anonymous information.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Preference Cookies</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Remember your preferences and settings to provide a personalized experience.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Managing Cookies</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    You can control and manage cookies in various ways:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Browser settings: Most browsers allow you to control cookies through their settings</li>
                    <li>Third-party tools: Use tools like browser extensions to manage cookies</li>
                    <li>Opt-out links: Use opt-out links provided by advertising networks</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions about our use of cookies, please contact us at{' '}
                    <a href="mailto:privacy@radiiantsoftwarelabs.com" className="text-foreground hover:underline">
                      privacy@radiiantsoftwarelabs.com
                    </a>
                  </p>
                </section>
              </div>
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Cookies;