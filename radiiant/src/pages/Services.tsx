import Navigation from '@/components/Navigation';
import WhatWeDo from '@/components/WhatWeDo';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const Services = () => (
  <>
    <Helmet>
      <title>Services | Radiiant Software Labs</title>
      <meta name="description" content="Explore our smart business management, automation, and web solutions for modern companies." />
      <meta name="keywords" content="Services, Business Management, Automation, Web Solutions, SaaS, AI, CRM, Radiiant" />
      <meta property="og:title" content="Services | Radiiant Software Labs" />
      <meta property="og:description" content="Explore our smart business management, automation, and web solutions for modern companies." />
      <meta property="og:url" content="https://radiiantsoftwarelabs.com.com/services" />
      <meta property="og:image" content="https://radiiantsoftwarelabs.com.com/og-image.png" />
      <meta name="twitter:title" content="Services | Radiiant Software Labs" />
      <meta name="twitter:description" content="Explore our smart business management, automation, and web solutions for modern companies." />
      <meta name="twitter:image" content="https://radiiantsoftwarelabs.com.com/og-image.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <script type="application/ld+json">{`
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Radiiant Software Labs",
      "url": "https://radiiantsoftwarelabs.com.com/services",
      "logo": "https://radiiantsoftwarelabs.com.com/logo.png"
    }
  `}</script>
    </Helmet>
    <div className="min-h-screen bg-background">
      <Navigation />
      <WhatWeDo />
      <CTABanner />
      <Footer />
    </div>
  </>
);

export default Services; 