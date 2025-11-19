'use client';

import { useContext } from 'react';
import { motion } from 'framer-motion';

import { CurrentThemeContext } from '@/app/context/current-theme.context';

const Projects = () => {
  const { currentTheme } = useContext(CurrentThemeContext) ?? {};
  if (!currentTheme) {
    return null;
  }

  return (
    <section id="projects" className="py-12 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span
              className={`bg-gradient-to-r ${currentTheme.primary} bg-clip-text text-transparent`}
            >
              Featured Projects
            </span>
          </motion.h2>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
