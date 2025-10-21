'use client';

import {
  FaArrowDown,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaStar,
} from 'react-icons/fa';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ThemeType } from '@/types';

const homeSocials = [
  {
    icon: FaGithub,
    href: 'https://github.com/nnson58th2',
  },
  {
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/son-nguyen98/',
  },
  {
    icon: FaEnvelope,
    href: 'mailto:nnson.dev@gmail.com',
  },
];

interface HomeProps {
  currentTheme: ThemeType;
}

const Home = (props: HomeProps) => {
  const { currentTheme } = props;

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-24 md:pt-32"
    >
      <motion.div
        className="max-w-6xl mx-auto text-center"
        style={{ y, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <motion.div
            className={`inline-block p-1 rounded-full bg-gradient-to-r ${currentTheme.primary} mb-6`}
            animate={{
              boxShadow: [
                '0 0 20px rgba(59, 130, 246, 0.5)',
                '0 0 40px rgba(139, 92, 246, 0.7)',
                '0 0 20px rgba(59, 130, 246, 0.5)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="bg-black/90 rounded-full px-6 py-3 flex items-center gap-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              >
                <FaStar className="text-yellow-400" />
              </motion.div>
              <span className="text-sm font-medium">
                Welcome to my universe
              </span>
            </div>
          </motion.div>

          <div className="relative">
            <motion.h1
              className="text-5xl md:text-8xl font-bold mb-6 leading-tight cursor-default select-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <motion.span
                className={`bg-gradient-to-r ${currentTheme.secondary} bg-clip-text text-transparent cursor-default`}
                animate={{
                  backgroundPosition: ['0% 50%', '50% 50%', '0% 50%'],
                  backgroundSize: ['200% 200%', '200% 200%', '200% 200%'],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                Full Stack Developer
              </motion.span>
            </motion.h1>

            <motion.div
              className={`h-2 bg-gradient-to-r ${currentTheme.primary} mx-auto rounded-full`}
              initial={{ width: 0 }}
              animate={{ width: '200px' }}
              transition={{ duration: 1, delay: 1.2 }}
            />
          </div>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed cursor-default select-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            I craft{' '}
            <motion.span
              className={`font-bold bg-gradient-to-r ${currentTheme.secondary} bg-clip-text text-transparent`}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              beautiful
            </motion.span>
            ,{' '}
            <motion.span
              className={`font-bold bg-gradient-to-r ${currentTheme.accent} bg-clip-text text-transparent`}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              interactive
            </motion.span>{' '}
            web experiences with modern technologies.
            <br />
            Passionate about clean code, stunning designs, and seamless user
            experiences and high performance.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.a
            href="./cv.pdf"
            target="_blank"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white/20 transition-all duration-300 flex items-center gap-3"
            whileHover={{
              scale: 1.05,
              y: -2,
              borderColor: 'rgba(255,255,255,0.5)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              📄
            </motion.div>
            Download CV
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="flex justify-center space-x-8"
        >
          {homeSocials.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-primary transition-all duration-200 relative"
              whileHover={{ scale: 1.3, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                y: [0, -5, 0],
                rotate: [0, 5, 0, -5, 0],
              }}
              transition={{
                y: { duration: 2, repeat: Infinity, delay: index * 0.2 },
                rotate: { duration: 4, repeat: Infinity, delay: index * 0.3 },
              }}
            >
              <social.icon />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{
            y: [0, 15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className={`text-3xl bg-gradient-to-r ${currentTheme.primary} bg-clip-text text-transparent cursor-pointer`}
        >
          <FaArrowDown />
        </motion.div>
        <motion.div
          className={`mt-2 text-sm bg-gradient-to-r ${currentTheme.secondary} bg-clip-text text-transparent`}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll to explore
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
