import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Radiiant Software Labs</title>
        <meta name="description" content="Read our privacy policy to learn how Radiiant Software Labs protects your data and privacy." />
        <link rel="canonical" href="https://radiiantsoftwarelabs.com/privacy" />
        {/* Open Graph */}
        <meta property="og:title" content="Privacy Policy | Radiiant Software Labs" />
        <meta property="og:description" content="Read our privacy policy to learn how Radiiant Software Labs protects your data and privacy." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://radiiantsoftwarelabs.com/privacy" />
        <meta property="og:image" content="https://radiiantsoftwarelabs.com/og-image.png" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy | Radiiant Software Labs" />
        <meta name="twitter:description" content="Read our privacy policy to learn how Radiiant Software Labs protects your data and privacy." />
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
                  Privacy <span className="text-gradient">Policy</span>
                </h1>
                <p className="text-muted-foreground">
                  Last updated: January 15, 2024
                </p>
              </div>

              <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
                <section>
                  <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We collect information you provide directly to us, such as when you create an account, 
                    use our services, or contact us for support. This may include your name, email address, 
                    and other contact information.
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Account information (name, email, company)</li>
                    <li>Usage data and analytics</li>
                    <li>Device and browser information</li>
                    <li>Communication preferences</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We use the information we collect to provide, maintain, and improve our services, 
                    process transactions, and communicate with you.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Information Sharing</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We do not sell, trade, or rent your personal information to third parties. 
                    We may share your information in certain limited circumstances as outlined in this policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Data Security</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We implement appropriate security measures to protect your personal information 
                    against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions about this Privacy Policy, please contact us at{' '}
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

export default Privacy;