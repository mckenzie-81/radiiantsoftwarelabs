import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import PartnersMarquee from '@/components/PartnersMarquee';
import Technologies from '@/components/Technologies';
import Portfolio from '@/components/Portfolio';
import FAQ from '@/components/FAQ';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Radiiant - Premium SaaS Solutions for Modern Business</title>
        <meta name="description" content="Radiiant helps businesses streamline operations, boost engagement, and grow with smart tools and automation." />
        <meta name="keywords" content="Radiiant, SaaS, Software, Automation, Web Development, AI, CRM, Booking, Business Solutions, Digital Transformation, Team, Portfolio, Careers, Pricing, Contact" />
        <meta property="og:title" content="Radiiant - Premium SaaS Solutions for Modern Business" />
        <meta property="og:description" content="Radiiant helps businesses streamline operations, boost engagement, and grow with smart tools and automation." />
        <meta property="og:url" content="https://radiiantsoftwarelabs.com/" />
        <meta property="og:image" content="https://radiiantsoftwarelabs.com/og-image.png" />
        <meta name="twitter:title" content="Radiiant - Premium SaaS Solutions for Modern Business" />
        <meta name="twitter:description" content="Radiiant helps businesses streamline operations, boost engagement, and grow with smart tools and automation." />
        <meta name="twitter:image" content="https://radiiantsoftwarelabs.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Radiiant Software Labs",
            "url": "https://radiiantsoftwarelabs.com/",
            "logo": "https://radiiantsoftwarelabs.com/logo.png"
          }
        `}</script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navigation />
        <Hero />
        <PartnersMarquee />
        <Technologies />
        <Portfolio />
        <FAQ />
        <CTABanner />
        <Footer />
      </div>
    </>
  );
};

export default Index;
