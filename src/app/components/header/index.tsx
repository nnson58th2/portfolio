'use client';

import { useContext } from 'react';
import { FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

import { CurrentThemeContext } from '@/app/context/current-theme.context';
import Navbar from '@/app/components/navbar';

const Header = () => {
  const { currentTheme } = useContext(CurrentThemeContext) ?? {};
  if (!currentTheme) {
    return null;
  }

  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-[9999] backdrop-blur-md bg-black/20 border-b border-white/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-3 cursor-pointer group"
        >
          <motion.div
            className={`w-12 h-12 rounded-full bg-gradient-to-r ${currentTheme.primary} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
            animate={{
              rotate: 360,
            }}
            transition={{
              rotate: { duration: 8, repeat: Infinity, ease: 'linear' },
            }}
            whileHover={{ scale: 1.1 }}
          >
            <FaCode className="text-white text-xl" />
          </motion.div>
          <div className="flex flex-col">
            <motion.span
              className={`text-xl font-bold bg-gradient-to-r ${currentTheme.secondary} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}
            >
              Son Nguyen
            </motion.span>
            <span className="text-xs text-gray-400 font-medium">
              Software Engineer
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Navbar />
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
