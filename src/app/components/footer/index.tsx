'use client';

import { motion } from 'framer-motion';
import { FaCode, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { ThemeType } from '@/types';

const footerSocials = [
  {
    icon: FaGithub,
    href: 'https://github.com/nnson58th2',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/son-nguyen98/',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    icon: FaEnvelope,
    href: 'mailto:nnson.dev@gmail.com',
    target: '',
    rel: '',
  },
];

interface FooterProps {
  currentTheme: ThemeType;
}

const Footer = (props: FooterProps) => {
  const { currentTheme } = props;

  return (
    <footer className="py-12 md:py-16 border-t border-white/10 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-center space-y-6 lg:space-y-0">
          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className={`w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r ${currentTheme.primary} flex items-center justify-center shadow-lg`}
              animate={{
                rotate: 360,
                backgroundPosition: ['0% 50%', '50% 50%', '0% 50%'],
                backgroundSize: ['200% 200%', '200% 200%', '200% 200%'],
              }}
              transition={{
                rotate: { duration: 12, repeat: Infinity, ease: 'linear' },
                backgroundPosition: { duration: 6, repeat: Infinity },
              }}
              whileHover={{
                scale: 1.1,
                boxShadow: '0 0 30px rgba(96, 165, 250, 0.5)',
              }}
            >
              <FaCode className="text-white text-xl md:text-2xl" />
            </motion.div>
            <div className="flex flex-col">
              <motion.span
                className={`text-xl md:text-2xl font-bold bg-gradient-to-r ${currentTheme.secondary} bg-clip-text text-transparent`}
                animate={{
                  backgroundPosition: ['0% 50%', '50% 50%', '0% 50%'],
                  backgroundSize: ['200% 200%', '200% 200%', '200% 200%'],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                Son Nguyen
              </motion.span>
              <span className="text-xs md:text-sm text-gray-400 font-medium">
                Full Stack Developer
              </span>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-6 md:space-x-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {footerSocials.map((social) => (
              <motion.a
                key={social.href}
                href={social.href}
                target={social.target || undefined}
                rel={social.rel || undefined}
                className="group relative"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-white/20 transition-all duration-300">
                  <social.icon className="text-xl" />
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-gray-400 text-sm md:text-base">
              © 2025 Son Nguyen
            </p>
            <p className="text-gray-500 text-xs md:text-sm mt-1">
              Crafted with ❤️ and code
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
