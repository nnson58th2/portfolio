'use client';
import { motion } from 'framer-motion';

const About = () => {
  const currentTheme = {
    primary: 'from-orange-500 to-red-600',
    secondary: 'from-yellow-400 to-orange-500',
    accent: 'from-red-400 to-pink-500',
  };

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
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
              About Me
            </span>
          </motion.h2>
          <motion.div
            className={`h-2 bg-gradient-to-r ${currentTheme.secondary} mx-auto rounded-full mb-4`}
            initial={{ width: 0 }}
            whileInView={{ width: '150px' }}
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
            Get to know the person behind the{' '}
            <motion.span
              className={`font-bold bg-gradient-to-r ${currentTheme.accent} bg-clip-text text-transparent`}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              code
            </motion.span>
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="lg:hidden mb-12"
        >
          <div className="relative w-full max-w-sm mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 rounded-full blur-3xl opacity-30"></div>
            <img
              src="/avatar.jpg"
              alt="Son Nguyen Avatar"
              className="relative w-full h-auto rounded-2xl border-4 border-white/20 shadow-2xl"
            />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Hello! My name is Son Nguyen, my interests and passion are web
                applications, solving problems in both life and programming. I
                decided to learn JavaScript and my path as a programmer started
                from there!
              </p>
              <p>
                My journey has been all about building impactful, user-focused
                products while tackling challenges from every angle. Whether
                it’s crafting pixel-perfect UIs, optimizing server-side logic.
              </p>
              <p>
                My goal is to bridge the gap between design and development,
                creating seamless user experiences that are both visually
                stunning and highly functional.
              </p>
            </div>
            <div className="flex gap-4 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500">3+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-500">15+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 rounded-full blur-3xl opacity-30" />
              <img
                src="/avatar.jpg"
                alt="Son Nguyen Avatar"
                className="relative w-full h-auto rounded-2xl border-4 border-white/20 shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
