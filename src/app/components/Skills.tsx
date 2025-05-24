'use client';
import TechVisualizer from './TechVisualizer';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { EffectCoverflow } from 'swiper/modules';
import Image from 'next/image';
import { FaCode, FaServer, FaMobileAlt, FaDatabase, FaCloud, FaChartLine, FaShieldAlt } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const SkillsPage = () => {
  // Skill categories with icons
  const skillCategories = [
    {
      name: 'Frontend Development',
      icon: <FaCode className="text-blue-500 text-4xl" />,
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux']
    },
    {
      name: 'Backend Development',
      icon: <FaServer className="text-purple-500 text-4xl" />,
      skills: ['Node.js', 'Express', 'Django', 'Spring Boot', 'GraphQL']
    },
    {
      name: 'Mobile Development',
      icon: <FaMobileAlt className="text-green-500 text-4xl" />,
      skills: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Ionic']
    },
    {
      name: 'Database',
      icon: <FaDatabase className="text-yellow-500 text-4xl" />,
      skills: ['MongoDB', 'PostgreSQL', 'Firebase', 'MySQL', 'Redis']
    },
    {
      name: 'DevOps & Cloud',
      icon: <FaCloud className="text-red-500 text-4xl" />,
      skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Terraform']
    },
    {
      name: 'Data Science',
      icon: <FaChartLine className="text-indigo-500 text-4xl" />,
      skills: ['Python', 'Pandas', 'TensorFlow', 'PyTorch', 'Tableau']
    },
    {
      name: 'Cybersecurity',
      icon: <FaShieldAlt className="text-teal-500 text-4xl" />,
      skills: ['OWASP', 'Pen Testing', 'JWT', 'OAuth', 'SSL/TLS']
    }
  ];

  // Technology proficiency levels
  const techProficiency = [
    { name: 'React', level: 95, logo: '/tech/react.png' },
    { name: 'Node.js', level: 90, logo: '/tech/nodejs.png' },
    { name: 'TypeScript', level: 88, logo: '/tech/typescript.png' },
    { name: 'Next.js', level: 85, logo: '/tech/nextjs.png' },
    { name: 'MongoDB', level: 83, logo: '/tech/mongodb.png' },
    { name: 'AWS', level: 80, logo: '/tech/aws.png' },
    { name: 'Docker', level: 78, logo: '/tech/docker.png' },
    { name: 'Python', level: 75, logo: '/tech/python.png' }
  ];

  // Certifications
  const certifications = [
    {
      title: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      date: '2023',
      logo: '/certs/aws-certified.png'
    },
    {
      title: 'Google Cloud Professional',
      issuer: 'Google Cloud',
      date: '2022',
      logo: '/certs/google-cloud.png'
    },
    {
      title: 'Microsoft Certified: Azure Developer',
      issuer: 'Microsoft',
      date: '2022',
      logo: '/certs/azure-certified.png'
    },
    {
      title: 'Certified Kubernetes Administrator',
      issuer: 'Cloud Native Computing Foundation',
      date: '2021',
      logo: '/certs/cka.png'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
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
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{category.icon}</div>
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
              >
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 mr-4">
                    <Image
                      src={tech.logo}
                      alt={tech.name}
                      fill
                      className="object-contain"
                      loading="lazy"
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white">{tech.name}</h4>
                  <span className="ml-auto text-gray-600 dark:text-gray-400">{tech.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div
                    className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
                    style={{ width: `${tech.level}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Carousel */}
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
            {certifications.map((cert, index) => (
              <SwiperSlide key={index} className="max-w-xs">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg h-full flex flex-col"
                >
                  <div className="relative w-full h-40 mb-4">
                    <Image
                      src={cert.logo}
                      alt={cert.title}
                      fill
                      className="object-contain"
                      loading="lazy"
                    />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{cert.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-1">Issuer: {cert.issuer}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Earned: {cert.date}</p>
                  <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors self-start">
                    View Credential
                  </button>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Tech Stack Visualizer */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Tech Stack Visualizer</h3>
          <div className="relative h-96 w-full rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700">
            {/* Interactive 3D tech stack visualization would go here */}
            <div className="absolute inset-0 flex items-center justify-center">
              <TechVisualizer />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;