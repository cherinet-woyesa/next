'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaServer, FaMobile, FaDatabase } from 'react-icons/fa';

type Project = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  category: string;
  github?: string;
  live?: string;
  features: string[];
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [modalProject, setModalProject] = useState<Project | null>(null);

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce platform with real-time inventory management, secure payments, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      image: '/ecom.jpg',
      category: 'fullstack',
      github: 'https://github.com/cherinet-woyesa/modern_ecommerce',
      //live: 'https://ecommerce-demo.com',
      features: [
        'User authentication and authorization',
        'Product search and filtering',
        'Shopping cart functionality',
        'Payment processing with Stripe',
        'Admin dashboard for inventory management'
      ]
    },
    {
      title: 'Lalo',
      description: 'A charity website an online platform designed to promote a nonprofit organization\'s mission, raise awareness about its causes, and encourage donations or volunteer support.',
      technologies: ['React', 'Firebase', 'strapi', ],
      image: '/lalo.jpg',
      category: 'fullstack',
      github: 'https://github.com/cherinet-woyesa/lalo',
      //live: 'https://task-manager-demo.com',
      features: [
        ' Quick and secure donation options',
        'Details of ongoing campaigns or programs',
        'Sign-up form and opportunities',
        'Success stories and testimonials',
        'Contact form, address'
      ]
    },
    {
      title: 'Eagle Consulting Site',
      description: 'A professional consulting website for Eagle Consulting, built with Next.js, Strapi CMS, and PostgreSQL. Features dynamic service pages, blog, and contact integration.',
      technologies: ['Next.js', 'Strapi', 'PostgreSQL'],
      image: '/tegegn',
      category: 'frontend',
      github: '',
      live: '',
      features: [
        'Dynamic service and blog pages powered by Strapi',
        'PostgreSQL database integration',
        'Contact form with backend integration',
        'SEO optimized and responsive design',
        'Admin dashboard for content management'
      ]
    },
    {
      title: 'Human resources management system',
      description: 'A web-based human resources management system designed to streamline and automate the management of employee data, including payroll, benefits, and performance tracking.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: '/hr.jfif',
      category: 'fullstack',
      //github: 'https://github.com/cherinet-woyesa/hr',
      //live: 'https://ai-chat-demo.com',
      features: [
        'Employee management',
        'Payroll processing',
        'Benefits administration',
        'Performance tracking',
        'Chat history management'
      ]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: <FaCode /> },
    { id: 'frontend', label: 'Frontend', icon: <FaMobile /> },
    { id: 'fullstack', label: 'Full Stack', icon: <FaServer /> },
    { id: 'ai', label: 'AI/ML', icon: <FaDatabase /> }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-700 dark:text-blue-400">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore my latest projects and see how I bring ideas to life
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 relative">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`relative flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all border-2 ${
                activeFilter === category.id
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 shadow-md'
                  : 'border-transparent bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.05, boxShadow: '0 2px 8px 0 rgba(37,99,235,0.10)' }}
              whileTap={{ scale: 0.95 }}
              layout
            >
              {category.icon}
              {category.label}
              {activeFilter === category.id && (
                <motion.div
                  layoutId="project-filter-underline"
                  className="absolute left-0 right-0 -bottom-1 h-1 rounded-full bg-blue-500"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredProjects.map((project: Project, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -4, boxShadow: '0 4px 16px 0 rgba(37,99,235,0.10)' }}
              whileTap={{ scale: 0.97 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer"
              onClick={() => setModalProject(project as Project)}
              tabIndex={0}
              role="button"
              aria-label={`Open details for ${project.title}`}
            >
              <div className="relative h-64 overflow-hidden">
                <motion.div
                  className="absolute inset-0 z-10 transition-all duration-300 group-hover:opacity-100 group-hover:bg-black/60 opacity-0 bg-black/40"
                />
                <motion.div
                  className="absolute inset-0 z-0 transition-transform duration-500"
                  whileHover={{ scale: 1.07 }}
                >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </motion.div>
                <div className="absolute bottom-4 left-4 right-4 z-20 transition-all duration-300 group-hover:bottom-8">
                  <motion.h3
                    className="text-2xl font-bold text-white mb-2 drop-shadow-lg"
                    initial={{ opacity: 1, y: 0 }}
                    whileHover={{ opacity: 1, y: -8 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.div
                    className="flex gap-2 flex-wrap"
                    initial={{ opacity: 1, y: 0 }}
                    whileHover={{ opacity: 1, y: -4 }}
                  >
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-600/80 text-white rounded-full text-xs font-medium shadow"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-blue-600/80 text-white rounded-full text-xs font-medium shadow">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </motion.div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {modalProject && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalProject(null)}
              aria-modal="true"
              role="dialog"
            >
              <motion.div
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-lg w-full p-6 relative mx-2"
                initial={{ scale: 0.95, y: 40, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 40, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                onClick={e => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 text-gray-400 hover:text-blue-500 text-2xl font-bold focus:outline-none"
                  onClick={() => setModalProject(null)}
                  aria-label="Close project details"
                >
                  &times;
                </button>
                <div className="w-full h-48 relative rounded-lg overflow-hidden mb-4">
                  <Image
                    src={(modalProject as Project).image}
                    alt={(modalProject as Project).title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                </div>
                <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-2">{(modalProject as Project).title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{(modalProject as Project).description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Key Features:</h4>
                  <ul className="space-y-2">
                    {(modalProject as Project).features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-center text-gray-600 dark:text-gray-300">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-4 mt-4">
                  {(modalProject as Project).github && (
                    <a
                      href={(modalProject as Project).github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      <FaGithub /> Code
                    </a>
                  )}
                  {(modalProject as Project).live && (
                    <a
                      href={(modalProject as Project).live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects; 