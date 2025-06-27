'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaCode, FaPaintBrush, FaServer, FaMobile, FaBrain, FaRocket, FaQuoteLeft } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const About = () => {
  // Skills data
  const skills = [
    { name: 'Frontend', level: 90, icon: <FaCode className="text-blue-500" /> },
    { name: 'UI/UX Design', level: 85, icon: <FaPaintBrush className="text-purple-500" /> },
    { name: 'Backend', level: 90, icon: <FaServer className="text-green-500" /> },
    { name: 'Mobile Development', level: 80, icon: <FaMobile className="text-yellow-500" /> },
    { name: 'AI/ML', level: 70, icon: <FaBrain className="text-red-500" /> },
    { name: 'DevOps', level: 65, icon: <FaRocket className="text-indigo-500" /> },
  ];

  // Experience timeline
  const experience = [
    {
      year: '2024 - Present',
      role: 'Full Stack Developer',
      company: 'commercial bank of ethiopia',
      description: 'Am working as a full stack developer in commercial bank of ethiopia'
    },
    {
      year: 'june 2023 - september 2024',
      role: 'Full stack developer',
      company: 'science and technology agency',
      description: 'I worked as a intern in science and technology agency'
    },
    {
      year: '2022 - present',
      role: 'web development',
      company: 'freelancer',
      description: 'I worked as a freelancer in web development'
    }
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "I've always been fascinated by the intersection of technology and creativity. His attention to detail and problem-solving skills are remarkable.&apos;",
      author: "Eyob",
      position: "Director of SSTA",
      avatar: "/av.png"
    },
    {
      quote: "Working with Cherinet was a pleasure. He understands business requirements and translates them into perfect technical solutions.&apos;",
      author: "Zeleke",
      position: "Mentor SSTA",
      avatar: "/av.png"
    },
    {
      quote: "Cherinet is a great developer. He is always willing to help and is very patient.&apos;",
      author: "Temesgen",
      position: "client",
      avatar: "/av.png"
    }
    
  ];

  // Tech stack for carousel
  const techStack = [
    { name: 'React', logo: '/react.png' },
    { name: 'Next.js', logo: '/next.png' },
    { name: 'Node.js', logo: '/node.png' },
    { name: 'TypeScript', logo: '/ts.png' },
    { name: 'Tailwind CSS', logo: '/tailwind.png' },
    { name: 'MongoDB', logo: '/mongodb.png' },
    
  ];

  // Client logos
  const clients = [
    '/cbe.jpg',
    '/ssta.jpg'
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Micro-interaction floating shapes */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
        {/* Top left blob */}
        <motion.div
          className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 opacity-20 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
        />
        {/* Bottom right blob */}
        <motion.div
          className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-pink-400 via-blue-400 to-purple-400 opacity-20 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, repeatType: 'reverse' }}
        />
        {/* Center floating dot */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-16 h-16 bg-blue-400 opacity-10 rounded-full blur-2xl"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}
        />
      </div>
      <div className="container mx-auto px-4">
        {/* About Me Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Let me introduce myself and what I&apos;do
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/3 flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-full p-1 animate-spin-slow bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 blur-sm" style={{ zIndex: 1 }} />
              <div className="absolute inset-0 rounded-full p-1 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500" style={{ zIndex: 2, opacity: 0.7 }} />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl z-10">
                <Image
                  src="/pro.jpg"
                  alt="Cherinet Woyesa"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold">Cherinet Woyesa</h3>
                    <p className="text-blue-300">Full Stack Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:w-2/3"
          >
            {/* Bio */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Who am I?</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I&apos;m <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Cherinet Woyesa</span>, a passionated <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Full Stack Developer</span> with <span className="font-bold text-blue-500">2+ years</span> of experience creating digital solutions that matter.<br/>
                I specialize in building <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">responsive</span>, <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">user-friendly</span> web applications with <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400">modern technologies</span>.
              </p>
            </div>

            {/* Skills */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">My Skills</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center mb-2">
                      <div className="mr-3 text-xl">{skill.icon}</div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">{skill.name}</h4>
                      <span className="ml-auto text-gray-600 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <motion.a
                href="/CHERINET.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all"
              >
                Download Resume
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-full font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
              >
                Contact Me
              </motion.a>
            </div>

            {/* Experience Timeline */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Experience</h3>
              <div className="relative pl-6 md:pl-12">
                {/* Vertical line */}
                <div className="absolute left-3 md:left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full opacity-30"></div>
                <div className="space-y-10">
                  {experience.map((exp, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: idx * 0.15 }}
                      viewport={{ once: true }}
                      className="relative flex items-start gap-6"
                    >
                      {/* Dot */}
                      <div className="absolute left-0 md:left-3 top-2 w-5 h-5 flex items-center justify-center">
                        <span className="block w-3 h-3 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 border-2 border-white dark:border-gray-900 shadow-lg"></span>
                      </div>
                      <div className="ml-8 md:ml-12 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 w-full">
                        <div className="flex flex-col md:flex-row md:items-center md:gap-4 mb-2">
                          <span className="text-blue-600 dark:text-blue-400 font-bold text-base md:text-lg">{exp.year}</span>
                          <span className="hidden md:inline text-gray-400">|</span>
                          <span className="text-blue-500 dark:text-blue-400 font-medium">{exp.company}</span>
                        </div>
                        <h4 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-1">{exp.role}</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">{exp.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tech Stack Carousel */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white text-center">Tech Stack</h3>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Swiper
              modules={[Autoplay, Pagination]}
              slidesPerView={3}
              spaceBetween={30}
              loop
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 4 },
                1024: { slidesPerView: 6 },
              }}
              className="!pb-8"
            >
              {techStack.map((tech, idx) => (
                <SwiperSlide key={tech.name}>
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: -6 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center justify-center gap-2 p-4 bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-xl transition-all duration-300 cursor-pointer hover:shadow-2xl"
                    style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)' }}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 2 + idx * 0.1, repeat: Infinity, repeatType: 'reverse' }}
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 relative flex items-center justify-center">
                      <Image
                        src={tech.logo}
                        alt={tech.name}
                        fill
                        className="object-contain drop-shadow-lg"
                        sizes="64px"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-xs font-semibold text-gray-700 dark:text-gray-200 mt-2">{tech.name}</span>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>

        {/* Client Logos */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Companies I&apos;ve Worked With</h3>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="w-32 h-32 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-all"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={client}
                    alt={`Client ${index + 1}`}
                    fill
                    className="object-contain"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white text-center">Testimonials</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -8, boxShadow: '0 8px 32px 0 rgba(31,38,135,0.15)' }}
                className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transition-all duration-300 cursor-pointer hover:shadow-2xl"
              >
                <FaQuoteLeft className="absolute -top-6 left-1/2 -translate-x-1/2 text-3xl text-blue-400 opacity-20" />
                <div className="w-16 h-16 mb-4 rounded-full overflow-hidden border-4 border-blue-200 dark:border-blue-500 shadow-lg">
                  <Image src={t.avatar} alt={t.author} width={64} height={64} className="object-cover" loading="lazy" />
                </div>
                <p className="text-gray-700 dark:text-gray-200 italic mb-4">{t.quote}</p>
                <div className="font-semibold text-blue-600 dark:text-blue-400">{t.author}</div>
                <div className="text-xs text-gray-400">{t.position}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;