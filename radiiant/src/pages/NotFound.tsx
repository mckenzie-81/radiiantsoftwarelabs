import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>404 Not Found | Radiiant Software Labs</title>
        <meta name="description" content="Sorry, the page you are looking for does not exist on Radiiant Software Labs." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://radiiantsoftwarelabs.com/" />
        {/* Open Graph */}
        <meta property="og:title" content="404 Not Found | Radiiant Software Labs" />
        <meta property="og:description" content="Sorry, the page you are looking for does not exist on Radiiant Software Labs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://radiiantsoftwarelabs.com/" />
        <meta property="og:image" content="https://radiiantsoftwarelabs.com/og-image.png" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="404 Not Found | Radiiant Software Labs" />
        <meta name="twitter:description" content="Sorry, the page you are looking for does not exist on Radiiant Software Labs." />
        <meta name="twitter:image" content="https://radiiantsoftwarelabs.com/og-image.png" />
        <meta name="twitter:site" content="@Radiiant_saas" />
      </Helmet>
      <div className="min-h-screen bg-background flex flex-col">
        <Navigation />
        
        <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Animated 404 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <h1 className="text-8xl md:text-9xl font-bold text-gradient opacity-50">
                  404
                </h1>
                
                {/* Floating elements */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-4 right-4 w-8 h-8 rounded-lg gradient-primary opacity-30"
                />
                
                <motion.div
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute bottom-8 left-8 w-6 h-6 rounded-full bg-muted-foreground/20"
                />
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6"
              >
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Oops! Page not found
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-md mx-auto">
                    The page you're looking for doesn't exist or has been moved. 
                    Let's get you back on track.
                  </p>
                </div>

                {/* Current path display */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="glass-card p-4 rounded-lg max-w-md mx-auto"
                >
                  <p className="text-sm text-muted-foreground">
                    Requested URL: <code className="text-foreground">{location.pathname}</code>
                  </p>
                </motion.div>
              </motion.div>

              {/* Action buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Button asChild size="lg" className="group">
                  <a href="/">
                    <Home className="mr-2 h-4 w-4" />
                    Back to Home
                  </a>
                </Button>
                
                <Button variant="outline" size="lg" className="group" onClick={() => window.history.back()}>
                  <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  Go Back
                </Button>
              </motion.div>

              {/* Helpful links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="pt-8"
              >
                <p className="text-sm text-muted-foreground mb-4">
                  Or try one of these popular pages:
                </p>
                
                <div className="flex flex-wrap items-center justify-center gap-3">
                  {[
                    { name: 'Features', href: '/#services' },
                    { name: 'Pricing', href: '/#pricing' },
                    { name: 'About', href: '/#about' },
                    { name: 'Contact', href: '/contact' }
                  ].map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-4 py-2 text-sm rounded-lg glass-card hover:shadow-medium transition-all duration-300 text-muted-foreground hover:text-foreground"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Search suggestion */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="pt-8 border-t border-border/50"
              >
                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                  <Search className="h-4 w-4" />
                  <span>Still can't find what you're looking for?</span>
                  <a 
                    href="/contact" 
                    className="text-foreground hover:underline font-medium"
                  >
                    Contact support
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </main>
      </div>
    </>
  );
};

export default NotFound;
