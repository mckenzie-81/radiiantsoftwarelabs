import { motion } from 'framer-motion';

const Technologies = () => {
  const techCategories = [
    {
      category: 'Frontend',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite']
    },
    {
      category: 'Backend',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'GraphQL']
    },
    {
      category: 'DevOps',
      technologies: ['Docker', 'Kubernetes', 'AWS', 'Vercel', 'GitHub Actions']
    },
    {
      category: 'Payments',
      technologies: ['Stripe', 'PayPal', 'Plaid', 'Wise', 'Square']
    }
  ];

  // Flatten all technologies for the marquee
  const allTechnologies = techCategories.flatMap(cat => 
    cat.technologies.map(tech => ({ name: tech, category: cat.category }))
  );

  // Mapping from tech name to logo file path (now using online URLs)
  const techLogos = {
    'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    'Tailwind CSS': '/Tailwind_CSS_Logo.svg.png',
    'Framer Motion': '/f-motion.png',
    'Vite': 'https://vitejs.dev/logo.svg',
    'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'Express': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    'Redis': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
    'GraphQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
    'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    'Kubernetes': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
    'AWS': '/aws-logo.png',
    'Vercel': 'https://assets.vercel.com/image/upload/front/assets/design/vercel-triangle-black.svg',
    'GitHub Actions': '/GitHub_(5).png',
    'Stripe': 'https://cdn.worldvectorlogo.com/logos/stripe-4.svg',
    'PayPal': 'https://cdn.worldvectorlogo.com/logos/paypal-3.svg',
    'Square': 'https://cdn.worldvectorlogo.com/logos/square.svg',
    'vscode': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
  };

  return (
    <section className="py-24 bg-muted/30 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Powered by <span className="text-gradient">modern tech</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built with industry-leading technologies for performance, security, and scalability
          </p>
        </motion.div>

        {/* Technology Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {techCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-xl hover:shadow-medium transition-all duration-300"
            >
              <h3 className="text-lg font-semibold mb-4 text-foreground">
                {category.category}
              </h3>
              <div className="space-y-2">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: techIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2 group"
                  >
                    <div className="w-2 h-2 rounded-full bg-muted-foreground/30 group-hover:bg-foreground transition-colors duration-300" />
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {tech}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Moving Tech Marquee */}
        <div className="relative overflow-hidden">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-sm text-muted-foreground mb-8"
          >
            Technologies we love
          </motion.p>
          
          {/* First row - moving left (logos) */}
          <div className="flex space-x-20 animate-marquee mb-4">
            {[...allTechnologies, ...allTechnologies].map((tech, index) => (
              <motion.div
                key={`logo-${index}`}
                className="flex-shrink-0 flex items-center justify-center group cursor-pointer"
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <img
                  src={techLogos[tech.name] || '/static/fallback.svg'}
                  alt={tech.name + ' logo'}
                  className="w-6 h-12 object-contain"
                  title={tech.name}
                />
              </motion.div>
            ))}
          </div>

          {/* Second row - moving right */}
          <div className="flex space-x-6 animate-marquee-reverse">
            {[...allTechnologies.slice().reverse(), ...allTechnologies.slice().reverse()].map((tech, index) => (
              <motion.div
                key={`second-${index}`}
                className="flex-shrink-0 px-4 py-2 rounded-lg bg-card border border-border/50 hover:border-border transition-all duration-300 group cursor-pointer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {tech.name}
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

export default Technologies;