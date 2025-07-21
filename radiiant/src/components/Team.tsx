import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Team = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/team/`)
      .then(res => res.json())
      .then(data => setTeam(data));
  }, []);

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
          Meet the <span className="text-gradient">Radiiant Team</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A passionate group of builders, designers, and innovators dedicated to your success.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-10">
          {team.map((member, idx) => (
          <a
              key={member.id}
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-xl text-center hover:shadow-medium transition-all duration-300 group-hover:shadow-lg group-hover:border-primary/60 border-2 border-transparent"
            >
              <div className="flex items-center justify-center mb-6">
                <img
                    src={member.image || 'https://unavatar.io/github/identicon'}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-primary/30 shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">{member.name}</div>
              <div className="text-sm text-primary font-semibold mb-2">{member.role}</div>
              <p className="text-muted-foreground text-base leading-relaxed">{member.blurb}</p>
            </motion.div>
          </a>
        ))}
      </div>
    </div>
  </section>
);
};

export default Team; 