import Navigation from '@/components/Navigation';
import ServiceCategories from '@/components/ServiceCategories';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const Pricing = () => (
  <>
    <Helmet>
      <title>Pricing | Radiiant Software Labs</title>
      <meta name="description" content="Transparent, flexible pricing for all our SaaS solutions. Find the perfect plan for your business." />
      <meta name="keywords" content="Pricing, SaaS, Software, Plans, Business Solutions, Radiiant" />
      <meta property="og:title" content="Pricing | Radiiant Software Labs" />
      <meta property="og:description" content="Transparent, flexible pricing for all our SaaS solutions. Find the perfect plan for your business." />
      <meta property="og:url" content="https://radiiantsoftwarelabs.com.com/pricing" />
      <meta property="og:image" content="https://radiiantsoftwarelabs.com.com/og-image.png" />
      <meta name="twitter:title" content="Pricing | Radiiant Software Labs" />
      <meta name="twitter:description" content="Transparent, flexible pricing for all our SaaS solutions. Find the perfect plan for your business." />
      <meta name="twitter:image" content="https://radiiantsoftwarelabs.com.com/og-image.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Radiiant Software Labs",
          "url": "https://radiiantsoftwarelabs.com.com/pricing",
          "logo": "https://radiiantsoftwarelabs.com.com/logo.png"
        }
      `}</script>
    </Helmet>
    <div className="min-h-screen bg-background">
      <Navigation />
      <ServiceCategories />
      <Footer />
    </div>
  </>
);

export default Pricing; 