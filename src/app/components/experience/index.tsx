'use client';

import { motion } from 'framer-motion';

const Experience = () => {
  const currentTheme = {
    primary: 'from-orange-500 to-red-600',
    secondary: 'from-yellow-400 to-orange-500',
    accent: 'from-red-400 to-pink-500',
  };

  return (
    <section id="experience" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6"
            animate={{
              backgroundPosition: ['0% 50%', '50% 50%', '0% 50%'],
              backgroundSize: ['200% 200%', '200% 200%', '200% 200%'],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <span
              className={`bg-gradient-to-r ${currentTheme.primary} bg-clip-text text-transparent`}
            >
              Experience
            </span>
          </motion.h2>
          <motion.div
            className={`h-2 bg-gradient-to-r ${currentTheme.secondary} mx-auto rounded-full mb-4`}
            initial={{ width: 0 }}
            whileInView={{ width: '250px' }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            My professional journey in{' '}
            <motion.span
              className={`font-bold bg-gradient-to-r ${currentTheme.accent} bg-clip-text text-transparent`}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              software development
            </motion.span>
          </motion.p>
        </motion.div>

        {/* Experience Items */}
      </div>
    </section>
  );
};

export default Experience;
