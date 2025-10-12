'use client';

import {
  FaGitAlt,
  FaJsSquare,
  FaNodeJs,
  FaReact,
  FaVuejs,
} from 'react-icons/fa';
import { DiRedis } from 'react-icons/di';
import {
  SiDocker,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNuxtdotjs,
  SiPostgresql,
  SiRabbitmq,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { motion } from 'framer-motion';

const technicalSkills = [
  {
    name: 'JavaScript',
    icon: <FaJsSquare className="text-5xl" />,
    color: 'from-yellow-400 to-orange-500',
    iconColor: '#f7df1e',
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript className="text-5xl" />,
    color: 'from-cyan-800 to-cyan-900',
    iconColor: '#3178c6',
  },
  {
    name: 'React',
    icon: <FaReact className="text-5xl" />,
    color: 'from-cyan-400 to-cyan-600',
    iconColor: '#61dafb',
  },
  {
    name: 'Next.js',
    icon: <SiNextdotjs className="text-5xl" />,
    color: 'from-slate-400 to-white',
    iconColor: '#ffffff',
  },
  {
    name: 'Vue.js',
    icon: <FaVuejs className="text-5xl" />,
    color: 'from-green-200 to-emerald-300',
    iconColor: '#4fc08d',
  },
  {
    name: 'Nuxt.js',
    icon: <SiNuxtdotjs className="text-5xl" />,
    color: 'from-green-200 to-emerald-300',
    iconColor: '#00c58e',
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss className="text-5xl" />,
    color: 'from-teal-400 to-teal-600',
    iconColor: '#06b6d4',
  },
  {
    name: 'Node.js',
    icon: <FaNodeJs className="text-5xl" />,
    color: 'from-green-500 to-emerald-600',
    iconColor: '#339933',
  },
  {
    name: 'Express.js',
    icon: <SiExpress className="text-5xl" />,
    color: 'from-black to-black',
    iconColor: '#000000',
  },
  {
    name: 'Nest.js',
    icon: <SiNestjs className="text-5xl" />,
    color: 'from-red-500 to-red-700',
    iconColor: '#e0234e',
  },
  {
    name: 'RabbitMQ',
    icon: <SiRabbitmq className="text-5xl" />,
    color: 'from-orange-500 to-orange-700',
    iconColor: '#ff6600',
  },
  {
    name: 'Docker',
    icon: <SiDocker className="text-5xl" />,
    color: 'from-cyan-700 to-cyan-900',
    iconColor: '#2496ed',
  },
  {
    name: 'PostgreSQL',
    icon: <SiPostgresql className="text-5xl" />,
    color: 'from-cyan-600 to-cyan-800',
    iconColor: '#31648c',
  },
  {
    name: 'MySQL',
    icon: <SiMysql className="text-5xl" />,
    color: 'from-cyan-500 to-cyan-700',
    iconColor: '#00758f',
  },
  {
    name: 'MongoDB',
    icon: <SiMongodb className="text-5xl" />,
    color: 'from-green-500 to-emerald-600',
    iconColor: '#47a248',
  },
  {
    name: 'Redis',
    icon: <DiRedis className="text-5xl" />,
    color: 'from-red-500 to-red-700',
    iconColor: '#d63d2e',
  },
  {
    name: 'Git',
    icon: <FaGitAlt className="text-5xl" />,
    color: 'from-orange-500 to-orange-700',
    iconColor: '#f05032',
  },
];

const stats = [
  { label: 'Technologies', value: '12+', icon: '🛠️' },
  { label: 'Projects', value: '15+', icon: '🚀' },
  { label: 'Experience', value: '3+', icon: '⚡' },
  { label: 'Coffee Cups', value: '∞', icon: '☕' },
];

export default function Skills() {
  const currentTheme = {
    primary: 'from-orange-500 to-red-600',
    secondary: 'from-yellow-400 to-orange-500',
    accent: 'from-red-400 to-pink-500',
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
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
              Skills & Technologies
            </span>
          </motion.h2>
          <motion.div
            className={`h-2 bg-gradient-to-r ${currentTheme.secondary} mx-auto rounded-full mb-4`}
            initial={{ width: 0 }}
            whileInView={{ width: '300px' }}
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
            The magical tools I use to bring{' '}
            <motion.span
              className={`font-bold bg-gradient-to-r ${currentTheme.accent} bg-clip-text text-transparent`}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ideas to life
            </motion.span>
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technicalSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.1,
              }}
              className="group relative cursor-pointer"
            >
              <motion.div
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 h-full flex flex-col items-center justify-center relative overflow-hidden"
                whileHover={{
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                  borderColor: 'rgba(255,255,255,0.3)',
                }}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  whileHover={{ opacity: 0.2 }}
                />

                <motion.div
                  className="mb-4 relative z-10 text-5xl transition-all duration-300"
                  style={{ color: skill.iconColor }}
                  animate={{
                    y: [0, -3, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.3,
                    ease: 'easeInOut',
                  }}
                  whileHover={{
                    scale: 1.15,
                    filter:
                      'drop-shadow(0 0 15px currentColor) brightness(1.3)',
                  }}
                >
                  {skill.icon}
                </motion.div>

                <motion.span
                  className="text-sm font-medium text-white/90 group-hover:text-white transition-colors relative z-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {skill.name}
                </motion.span>

                <motion.div
                  className="absolute top-2 right-2 text-yellow-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.1,
                  }}
                >
                  ✨
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                y: { duration: 2, repeat: Infinity, delay: index * 0.2 },
              }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <motion.div
                className={`text-2xl font-bold bg-gradient-to-r ${currentTheme.primary} bg-clip-text text-transparent`}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
