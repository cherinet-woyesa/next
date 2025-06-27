'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaCode, FaServer, FaMobileAlt, FaDatabase, FaCloud } from 'react-icons/fa';

const SkillsPage = () => {
  // Skill categories with icons
  const skillCategories = [
    {
      name: 'Frontend Development',
      icon: <FaCode className="text-blue-500 text-4xl" />,
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
    },
    {
      name: 'Backend Development',
      icon: <FaServer className="text-purple-500 text-4xl" />,
      skills: ['Node.js', 'Express', 'Django', 'Spring Boot']
    },
    {
      name: 'Mobile Development',
      icon: <FaMobileAlt className="text-green-500 text-4xl" />,
      skills: ['React Native', 'Flutter']
    },
    {
      name: 'Database',
      icon: <FaDatabase className="text-yellow-500 text-4xl" />,
      skills: ['MongoDB', 'PostgreSQL', 'Firebase', 'MySQL']
    },
    {
      name: 'DevOps & Cloud',
      icon: <FaCloud className="text-red-500 text-4xl" />,
      skills: ['Docker']
    }
    
  ];

  // Technology proficiency levels
  const techProficiency = [
    { name: 'React', level: 95, logo: '/react.png' },
    { name: 'Node.js', level: 90, logo: '/node.png' },
    { name: 'TypeScript', level: 92, logo: '/ts.png' },
    { name: 'Next.js', level: 85, logo: '/next.png' },
    { name: 'MongoDB', level: 83, logo: '/mongodb.png' },
    { name: 'Python', level: 75, logo: '/py.jfif' }
  ];

  // const certifications = [
  //   {
  //     title: 'Certified Web Developer',
  //     image: '/CHERINET.pdf', // Use a PDF icon or a certificate image if available
  //     url: '/CHERINET.pdf',
  //   },
  //   // Add more certifications as needed
  // ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header with subtle entrance animation */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My technical expertise and the tools I work with
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.05, y: -4, boxShadow: '0 4px 16px 0 rgba(37,99,235,0.10)' }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="flex flex-col items-center text-center">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  className="mb-4 transition-transform duration-200"
                >
                  {category.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">{category.name}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Proficiency */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Technology Proficiency</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techProficiency.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
                whileHover={{ scale: 1.05, y: -4, boxShadow: '0 4px 16px 0 rgba(37,99,235,0.10)' }}
                whileTap={{ scale: 0.97 }}
              >
                <div className="flex items-center mb-4">
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    className="relative w-12 h-12 mr-4 transition-transform duration-200"
                  >
                    <Image
                      src={tech.logo}
                      alt={tech.name}
                      fill
                      className="object-contain"
                      loading="lazy"
                    />
                  </motion.div>
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white">{tech.name}</h4>
                  <span className="ml-auto text-gray-600 dark:text-gray-400">{tech.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <motion.div
                    className="h-3 rounded-full bg-blue-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.level}%` }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Carousel (commented out for now) */}
        {/**
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Certifications</h3>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {certifications.length > 0 ? certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                className="swiper-slide flex flex-col items-center justify-center bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-xl p-8 mx-4 min-w-[260px] max-w-xs border border-blue-100 dark:border-blue-900"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <a href={cert.url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                  <div className="w-24 h-32 mb-4 relative flex items-center justify-center">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-contain rounded-lg group-hover:scale-105 transition-transform duration-300 shadow-lg"
                    />
                  </div>
                  <span className="text-lg font-semibold text-blue-600 dark:text-blue-400 text-center group-hover:underline">{cert.title}</span>
                </a>
              </motion.div>
            )) : (
              <div className="swiper-slide flex flex-col items-center justify-center bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-xl p-8 mx-4 min-w-[260px] max-w-xs border border-blue-100 dark:border-blue-900">
                <span className="text-gray-400">No certifications yet.</span>
              </div>
            )}
          </Swiper>
        </div>
        */}
      </div>
    </section>
  );
};

export default SkillsPage;