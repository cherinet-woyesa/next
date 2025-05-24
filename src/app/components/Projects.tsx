'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaServer, FaMobile, FaDatabase } from 'react-icons/fa';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce platform with real-time inventory management, secure payments, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux', 'Stripe'],
      image: '/project1.jpg',
      category: 'fullstack',
      github: 'https://github.com/yourusername/ecommerce',
      live: 'https://ecommerce-demo.com',
      features: [
        'User authentication and authorization',
        'Product search and filtering',
        'Shopping cart functionality',
        'Payment processing with Stripe',
        'Admin dashboard for inventory management'
      ]
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration, and progress tracking.',
      technologies: ['React', 'Firebase', 'Material-UI', 'Redux Toolkit'],
      image: '/project2.jpg',
      category: 'frontend',
      github: 'https://github.com/yourusername/task-manager',
      live: 'https://task-manager-demo.com',
      features: [
        'Real-time task updates',
        'Team collaboration features',
        'Task assignment and tracking',
        'Progress visualization',
        'Email notifications'
      ]
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects and skills with smooth animations.',
      technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
      image: '/project3.jpg',
      category: 'frontend',
      github: 'https://github.com/yourusername/portfolio',
      live: 'https://your-portfolio.com',
      features: [
        'Responsive design',
        'Dark mode support',
        'Smooth animations',
        'Project showcase',
        'Contact form integration'
      ]
    },
    {
      title: 'AI Chat Application',
      description: 'An AI-powered chat application with natural language processing and real-time responses.',
      technologies: ['Python', 'TensorFlow', 'React', 'WebSocket'],
      image: '/project4.jpg',
      category: 'ai',
      github: 'https://github.com/yourusername/ai-chat',
      live: 'https://ai-chat-demo.com',
      features: [
        'Natural language processing',
        'Real-time chat interface',
        'Context-aware responses',
        'Multi-language support',
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
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore my latest projects and see how I bring ideas to life
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.icon}
              {category.label}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <div className="flex gap-2">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
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
      </div>
    </section>
  );
};

export default Projects; 