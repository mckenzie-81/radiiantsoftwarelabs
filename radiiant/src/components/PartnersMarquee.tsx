import { motion } from 'framer-motion';

const PartnersMarquee = () => {
  // Mock partner logos (using text for now, but these would be actual logos)
  const partners = [
    'Vercel', 'Stripe', 'Supabase', 'Figma', 'Linear', 
    'Notion', 'Discord', 'GitHub', 'OpenAI', 'Framer',
    'Shopify', 'Slack', 'Zoom', 'Spotify', 'Netflix'
  ];

  return (
    <section className="py-16 bg-muted/30 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm text-muted-foreground font-medium tracking-wide uppercase">
            Trusted by industry leaders
          </p>
        </motion.div>

        {/* Marquee container */}
        <div className="relative overflow-hidden">
          {/* First row - moving left */}
          <div className="flex space-x-8 animate-marquee">
            {[...partners, ...partners].map((partner, index) => (
              <motion.div
                key={`first-${index}`}
                className="flex-shrink-0 px-6 py-4 rounded-lg glass-card hover:glass transition-all duration-300 group cursor-pointer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-lg font-semibold text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {partner}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Second row - moving right */}
          <div className="flex space-x-8 animate-marquee-reverse mt-4">
            {[...partners.slice().reverse(), ...partners.slice().reverse()].map((partner, index) => (
              <motion.div
                key={`second-${index}`}
                className="flex-shrink-0 px-6 py-4 rounded-lg glass-card hover:glass transition-all duration-300 group cursor-pointer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-lg font-semibold text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {partner}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Gradient overlays */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
        </div>
      </div>
    </section>
  );
};

export default PartnersMarquee;