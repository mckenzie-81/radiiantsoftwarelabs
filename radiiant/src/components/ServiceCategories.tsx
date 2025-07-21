import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Crown, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServiceCategories = () => {
  // Service category cards
  const serviceCategories = [
    {
      name: 'Websites',
      icon: Zap,
      description: 'Modern, conversion-focused websites with booking, e-commerce, and more.',
      buttonText: 'Get a Quote',
      href: '/contact',
    },
    {
      name: 'AI Solutions',
      icon: Crown,
      description: 'AI-powered chatbots, automations, and smart integrations.',
      buttonText: 'Get a Quote',
      href: '/contact',
    },
    {
      name: 'Business Systems',
      icon: Building,
      description: 'Custom CRM, POS, inventory, and workflow systems for your business.',
      buttonText: 'Get a Quote',
      href: '/contact',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Simple, Transparent Pricing
        </h2>
        <p className="text-xl text-muted-foreground mb-10">
          Only pay for what you need. No hidden fees, no rigid packages—just solutions tailored to your business.
        </p>
        <div className="grid gap-6 mb-10">
          <div className="grid md:grid-cols-3 gap-8">
            {serviceCategories.map((cat, index) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-8 transition-all duration-300 hover:shadow-strong"
              >
                <div className="text-center mb-6">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl gradient-primary flex items-center justify-center">
                    <cat.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{cat.name}</h3>
                  <p className="text-muted-foreground">{cat.description}</p>
                </div>
                <a href={cat.href} className="btn btn-primary w-full mt-4">Get Started</a>
              </motion.div>
            ))}
          </div>
        </div>
        <p className="text-lg text-muted-foreground mb-10">
          We believe great solutions shouldn’t come with hidden costs or one-size-fits-all pricing. Let’s build what you need—together.
        </p>
        <a href="/contact" className="btn btn-primary text-lg px-8 py-4">Get Started</a>
      </div>
    </section>
  );
};

export default ServiceCategories;