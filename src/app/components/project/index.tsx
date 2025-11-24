'use client';

import { useContext } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

import { CurrentThemeContext } from '@/app/context/current-theme.context';

const projects = [
  {
    title: 'CAMS-care Mental Health Training Platform',
    description:
      'Comprehensive mental health training platform for suicide prevention serving 60,000+ mental health professionals worldwide.',
    image: '/training-platform-cams-care.webp',
    tech: [
      'TypeScript',
      'React.js',
      'Express.js',
      'Docker',
      'PostgreSQL',
      'Redis',
      'RabbitMQ',
      'AWS',
    ],
    githubLinks: [],
    liveLink: 'https://training.cams-care.com',
    featured: true,
  },
  // {
  //   title: 'Chat App',
  //   description:
  //     'A modern, responsive Chat application using React.js and Tailwind CSS.',
  //   image: '/chat-app.webp',
  //   tech: ['Next.js', 'Tailwind CSS'],
  //   githubLinks: [
  //     'https://github.com/nnson58th2/chat-app-ui',
  //     'https://github.com/nnson58th2/chat-app-backend',
  //   ],
  //   featured: false,
  // },
];

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
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span
              className={`bg-gradient-to-r ${currentTheme.primary} bg-clip-text text-transparent`}
            >
              Featured Projects
            </span>
          </h2>
          <motion.div
            className={`h-2 bg-gradient-to-r ${currentTheme.secondary} mx-auto rounded-full mb-4`}
            initial={{ width: 0 }}
            whileInView={{ width: '200px' }}
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
            A showcase of my{' '}
            <span
              className={`font-bold bg-gradient-to-r ${currentTheme.accent} bg-clip-text text-transparent`}
            >
              creative work
            </span>{' '}
            and technical expertise
          </motion.p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group flex flex-col overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="flex-shrink-0 relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  width={387}
                  height={192}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
              </div>

              <div className="flex flex-col h-full p-6">
                <h3 className="text-xl font-bold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.githubLinks.length > 0 && (
                  <div className="flex flex-wrap gap-3 mt-auto">
                    {project.githubLinks.map((githubLink, githubLinkIndex) => (
                      <a
                        key={githubLinkIndex}
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white rounded-lg transition-all duration-300 hover:scale-105 text-sm font-medium"
                      >
                        <FaGithub />
                        View Code
                      </a>
                    ))}
                  </div>
                )}
                {project.liveLink && (
                  <div className="flex gap-3 mt-auto">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white rounded-lg transition-all duration-300 hover:scale-105 text-sm font-medium"
                    >
                      <FaExternalLinkAlt />
                      View Demo
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
