import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const mobileAvatars = [
  { src: '/hero-item2.png', alt: 'Richard', style: { left: '10%', bottom: '30%' } },
  { src: '/rightonhero.png', alt: 'Darline', style: { right: '10%', bottom: '45%' } },
  // { src: '/static/team_photos/kojo.png', alt: 'Kojo', style: { left: '50%', bottom: '5%' } },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      {/* Dark background with subtle dotted texture */}
      <div className="absolute inset-0 z-0 bg-black">
        {/* Dotted overlay */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }} />
        {/* Hero vector SVG as full-screen background */}
        <img
          src="/hero-vector.svg"
          alt="Hero vector"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none select-none"
          style={{ filter: 'blur(2px)' }}
        />
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-black/70 z-10" />
      </div>
      
      {/* Decorative PNGs in arc pattern, desktop only */}
      <div className="hidden md:block absolute inset-0 pointer-events-none z-20 ">
        <img
          src="/rightonhero.png"
          alt="Right on hero"
          aria-hidden="true"
          className="absolute top-12 left-12 w-40 opacity-80"
          style={{ transform: 'rotate(-12deg)' }}
        />
        <img
          src="/hero-item2.png"
          alt="Hero item 2"
          aria-hidden="true"
          className="absolute top-40 right-8 w-60 opacity-80"
          style={{ transform: 'rotate(12deg)' }}
        />
      </div>

      {/* Animated floating avatars for mobile only */}
      <div className="md:hidden absolute inset-0 pointer-events-none z-20">
        {mobileAvatars.map((avatar, idx) => (
          <motion.img
            key={avatar.alt}
            src={avatar.src}
            alt={avatar.alt}
            className="w-16 h-16 shadow-lg absolute"
            style={avatar.style}
            initial={{ y: 0 }}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5 + idx, repeat: Infinity, repeatType: "loop" }}
          />
        ))}
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden md:inline-flex items-center px-4 py-2 rounded-full glass-card text-sm font-medium"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Smart Solutions. Real Growth.
          </motion.div>

          {/* Main headline */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white"
            style={{ textShadow: '0 4px 32px rgba(255,255,255,0.7), 0 2px 8px rgba(0,0,0,0.4)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="text-white">Build faster.</span>
            <br />
            <span className="text-white">Scale smarter.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Radiiant helps businesses streamline operations, boost engagement, and grow with smart tools and automation.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <a href="/contact" className="inline-block">
              <Button size="lg" className="shadow-strong group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {[
              { value: "Launch in days, not months", label: "" },
              { value: "Fully customizable", label: "" },
              { value: "AI-powered automation", label: "" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">
                  {stat.value}
                </div>
                {stat.label && (
                  <div className="text-sm text-white/80">
                    {stat.label}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;