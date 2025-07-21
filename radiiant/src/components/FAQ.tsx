import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'How does pricing work?',
      answer: 'Every project is unique, so you only pay for what you need. We’ll give you a clear, custom quote—no hidden fees or surprises.'
    },
    {
      question: 'What services do you offer?',
      answer: 'We build modern websites, AI-powered tools, business management systems, SMS campaign platforms, and more. If you have a digital challenge, we can help.'
    },
    {
      question: 'How do I get started?',
      answer: 'Just reach out through our contact form or email. We’ll set up a free consultation to understand your needs and recommend the best solution.'
    },
    {
      question: 'Can you integrate with my existing tools?',
      answer: 'Absolutely! We specialize in custom integrations—whether it’s APIs, payment gateways, or third-party platforms.'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Most projects go live in days or weeks, not months. We’ll give you a clear timeline after our initial consultation.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We offer ongoing support and are always here to help—before, during, and after your project goes live.'
    },
    {
      question: 'Is my data safe?',
      answer: 'Yes. We use industry-standard security practices to keep your data protected and confidential.'
    },
    {
      question: 'What if I need changes or new features later?',
      answer: 'No problem! Our solutions are built to grow with you. You can request updates, new features, or changes anytime.'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Frequently asked <span className="text-gradient">questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Can't find what you're looking for? Contact our support team.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="glass-card rounded-xl px-6 border-border/50 hover:border-border transition-colors duration-300"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">
              Our team is here to help. Get in touch and we'll get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="/contact" 
                className="btn btn-primary"
              >
                Get Started
              </a>
              <a 
                href="mailto:contact@radiiant.site" 
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                contact@radiiant.site
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;