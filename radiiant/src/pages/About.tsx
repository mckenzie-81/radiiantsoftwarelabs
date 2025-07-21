import Navigation from '@/components/Navigation';
import About from '@/components/About';
import Team from '@/components/Team';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const AboutPage = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>About Us | Radiiant Software Labs</title>
      <meta name="description" content="Learn about Radiiant Software Labs, our mission, and our journey to empower businesses with smart, scalable solutions." />
      <meta name="keywords" content="About, Radiiant, Software, Team, Mission, Digital Solutions" />
      <meta property="og:title" content="About Us | Radiiant Software Labs" />
      <meta property="og:description" content="Learn about Radiiant Software Labs, our mission, and our journey to empower businesses with smart, scalable solutions." />
      <meta property="og:url" content="https://radiiantsoftwarelabs.com.com/about" />
      <meta property="og:image" content="https://radiiantsoftwarelabs.com.com/og-image.png" />
      <meta name="twitter:title" content="About Us | Radiiant Software Labs" />
      <meta name="twitter:description" content="Learn about Radiiant Software Labs, our mission, and our journey to empower businesses with smart, scalable solutions." />
      <meta name="twitter:image" content="https://radiiantsoftwarelabs.com.com/og-image.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Radiiant Software Labs",
          "url": "https://radiiantsoftwarelabs.com.com/about",
          "logo": "https://radiiantsoftwarelabs.com.com/logo.png"
        }
      `}</script>
    </Helmet>
    <Navigation />
    <About />
    <Team />
    <Footer />
  </div>
);

export default AboutPage; 