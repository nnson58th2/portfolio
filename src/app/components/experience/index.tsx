'use client';

import { useContext } from 'react';
import { motion } from 'framer-motion';

import { CurrentThemeContext } from '@/app/context/current-theme.context';

const experienceList = [
  {
    company: 'Screen1 Technologies',
    title: 'Software Engineer',
    startDate: '05/2022',
    endDate: 'Present',
    responsibilities: [
      'Clarifying analyzing requirements, and applying best practices to implement feature tasks.',
      'Refactored the backend codebase, database queries for better performance.',
      'Refining and debugging application issues to enhance functionality and performance.',
      'Optimized the existing User Certificate feature with <strong>Redis</strong> and <strong>RabbitMQ</strong> resulting in a <strong>70%</strong> performance improvement.',
      'Integrated <strong>Stripe API</strong> to accept customer order payments.',
      'Mentor and guide <strong>1 Fresher & 3 Junior Developers</strong> on Fullstack Development.',
    ],
    projects: [
      {
        name: 'Training Platform',
        link: 'https://training.cams-care.com',
      },
      {
        name: 'Listen Layer',
        link: 'https://www.listenlayer.com',
      },
    ],
    technologies: [
      'Node.js',
      'React.js',
      'TypeScript',
      'PostgreSQL',
      'Redis',
      'RabbitMQ',
      'AWS',
    ],
  },
  {
    company: 'Platfox/OTB',
    title: 'Full Stack Developer',
    startDate: '10/2020',
    endDate: '05/2022',
    responsibilities: [
      'Help retailers in the <strong>Print On Demand</strong> with optimizations qualified products.',
      'Responsible for the entire front-end part according to the work assigned by the team leader.',
      `Implementing public APIs for sellers to build their own systems reduces the team's work by <strong>35%</strong>.`,
      'Optimize responsive design and optimize seamless user experience.',
    ],
    projects: [
      {
        name: 'OTB Fulfillment',
        link: 'https://dashboard.otbzone.com',
      },
    ],
    technologies: [
      'Node.js',
      'Vue.js',
      'Nuxt.js',
      'TypeScript',
      'MySQL',
      'MongoDB',
      'Redis',
    ],
  },
  {
    company: '9thWonder',
    title: 'Front End Developer',
    startDate: '12/2019',
    endDate: '06/2020',
    responsibilities: [
      'The hospital appointment booking system supports online purchase and payment.',
      'Develop and fix the application’s defects based on requirements. Develop medium modules of the system.',
    ],
    projects: [
      {
        name: 'Advanced Derm',
        link: 'https://advancedderm.com',
      },
    ],
    technologies: ['HTML', 'SCSS', 'JavaScript', 'jQuery'],
  },
];

const Experience = () => {
  const { currentTheme } = useContext(CurrentThemeContext) ?? {};

  if (!currentTheme) {
    return null;
  }

  return (
    <section id="experience" className="py-12 md:py-24 relative">
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

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {experienceList.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.02, y: -5 }}
                viewport={{ once: true }}
                className={`relative md:pl-20 group ${
                  index !== experienceList.length - 1 ? 'pb-8 md:pb-12' : ''
                }`}
              >
                <motion.div
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-8 hover:bg-white/10 transition-all duration-300 relative overflow-hidden h-full flex flex-col"
                  whileHover={{
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                    borderColor: 'rgba(255,255,255,0.3)',
                  }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${
                      index % 2 === 0
                        ? currentTheme.primary
                        : currentTheme.secondary
                    } opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  <h3
                    className={`text-lg md:text-2xl font-bold mb-2 bg-gradient-to-r ${currentTheme.primary} bg-clip-text text-transparent relative z-10`}
                  >
                    {experience.title}
                  </h3>

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 relative z-10">
                    <span
                      className={`text-base md:text-lg font-semibold bg-gradient-to-r ${currentTheme.secondary} bg-clip-text text-transparent mb-1 md:mb-0`}
                    >
                      {experience.company}
                    </span>
                    <span className="text-gray-400 text-sm md:text-base">
                      {experience.startDate} - {experience.endDate}
                    </span>
                  </div>

                  <ul className="space-y-3 text-gray-300 relative z-10">
                    {experience.responsibilities.map(
                      (responsibility, responsibilityIdx) => (
                        <li
                          key={responsibilityIdx}
                          className="flex items-start md:items-start"
                        >
                          <span
                            className={`hidden md:block text-sm mr-3 mt-1.5 w-2 h-2 bg-gradient-to-r ${currentTheme.accent} rounded-full flex-shrink-0`}
                          />
                          <span
                            className="group-hover:text-white transition-colors duration-300 md:ml-0"
                            dangerouslySetInnerHTML={{ __html: responsibility }}
                          />
                        </li>
                      )
                    )}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-6 relative z-10">
                    {experience.projects.map((project, projectIdx) => (
                      <a
                        key={projectIdx}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm underline text-gray-300 hover:text-white transition-all duration-300"
                      >
                        {project.name}
                      </a>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-6 relative z-10">
                    {experience.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-medium text-gray-300 hover:bg-white/20 hover:text-white transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
