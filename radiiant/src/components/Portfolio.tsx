import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Portfolio = () => {
  const clients = [
    {
      name: 'ROC International',
      industry: 'Investment (Minerals)',
      logo: '/Asset 1 ROC 2.svg',
      website: 'https://rocinternational.com',
      blurb: 'Custom CRM and automation tools streamlined their order and customer management.'
    },
    {
      name: 'Pentagon Wifi',
      industry: 'Internet Service Provider',
      logo: '/pentagon-wifi-logo.png',
      website: 'https://pentagonwifi.com',
      blurb: 'Automated registration portal for Mikrotik services and a new website for customer onboarding.'
    },
    {
      name: 'Danso Plaza',
      industry: 'Guest House',
      logo: '/plaza-logo.png',
      website: 'https://dansoplaza.com',
      blurb: 'Modern booking website for seamless guest reservations and management.'
    },
    {
      name: 'Gigi Beauty Bar',
      industry: 'Beauty Bar',
      logo: '/gigi.png',
      website: 'https://gigibeautybar.com',
      blurb: 'Stunning website with integrated booking system for clients.'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Who We’ve Worked With
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real businesses. Real results. Here are some of the companies we’ve helped grow, automate, and stand out online.
          </p>
        </motion.div>

        {/* Clients Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-xl hover:shadow-medium transition-all duration-300 group"
            >
              {/* Logo in circle with light gray background, linked to website */}
              <div className="mb-4 flex items-center justify-center">
                <a href={client.website} target="_blank" rel="noopener noreferrer">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center shadow">
                    <img src={client.logo} alt={client.name + ' logo'} className="w-10 h-10 object-contain" />
                  </div>
                </a>
              </div>
              {/* Name & Industry */}
              <div className="font-medium text-foreground text-lg mb-1 text-center">{client.name}</div>
              <div className="text-sm text-muted-foreground mb-4 text-center">{client.industry}</div>
              {/* Blurb */}
              <p className="text-muted-foreground mb-2 leading-relaxed text-center">
                {client.blurb}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Let’s build your next success story.</h3>
            <p className="text-muted-foreground mb-6">
              Ready for a website, AI integration, or automation? Let’s talk about your goals and build something great together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/contact" className="btn btn-primary">Get Started</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;