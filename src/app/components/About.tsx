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
    { name: 'Backend', level: 80, icon: <FaServer className="text-green-500" /> },
    { name: 'Mobile Dev', level: 75, icon: <FaMobile className="text-yellow-500" /> },
    { name: 'AI/ML', level: 70, icon: <FaBrain className="text-red-500" /> },
    { name: 'DevOps', level: 65, icon: <FaRocket className="text-indigo-500" /> },
  ];

  // Experience timeline
  const experience = [
    {
      year: '2022 - Present',
      role: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      description: 'Leading development teams and architecting scalable web applications.'
    },
    {
      year: '2019 - 2022',
      role: 'Frontend Developer',
      company: 'Digital Solutions Ltd.',
      description: 'Built responsive UIs and implemented state management solutions.'
    },
    {
      year: '2017 - 2019',
      role: 'Junior Developer',
      company: 'StartUp Ventures',
      description: 'Contributed to various projects and learned modern web technologies.'
    }
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "Cherinet delivered exceptional work on our project. His attention to detail and problem-solving skills are remarkable.",
      author: "Sarah Johnson",
      position: "CEO, Tech Innovations Inc.",
      avatar: "/client1.jpg"
    },
    {
      quote: "Working with Cherinet was a pleasure. He understands business requirements and translates them into perfect technical solutions.",
      author: "Michael Chen",
      position: "CTO, Digital Solutions Ltd.",
      avatar: "/client2.jpg"
    },
    {
      quote: "One of the most professional developers I've worked with. Always delivers on time and exceeds expectations.",
      author: "Emily Rodriguez",
      position: "Product Manager, StartUp Ventures",
      avatar: "/client3.jpg"
    }
  ];

  // Tech stack for carousel
  const techStack = [
    { name: 'React', logo: '/tech/react.png' },
    { name: 'Next.js', logo: '/tech/nextjs.png' },
    { name: 'Node.js', logo: '/tech/nodejs.png' },
    { name: 'TypeScript', logo: '/tech/typescript.png' },
    { name: 'Tailwind CSS', logo: '/tech/tailwind.png' },
    { name: 'MongoDB', logo: '/tech/mongodb.png' },
    { name: 'GraphQL', logo: '/tech/graphql.png' },
    { name: 'Docker', logo: '/tech/docker.png' },
  ];

  // Client logos
  const clients = [
    '/clients/tech-innovations.png',
    '/clients/digital-solutions.png',
    '/clients/startup-ventures.png',
    '/clients/global-tech.png',
    '/clients/creative-labs.png'
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
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
            Let me introduce myself and what I do
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
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl">
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
                I'm Cherinet Woyesa, a passionate Full Stack Developer with 5+ years of experience creating digital solutions that matter. 
                I specialize in building responsive, user-friendly web applications with modern technologies.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                When I'm not coding, you can find me contributing to open-source projects, mentoring junior developers, 
                or exploring the latest tech trends. I believe in continuous learning and pushing the boundaries of what's possible.
              </p>
            </div>

            {/* Skills */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">My Skills</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center mb-2">
                      <div className="mr-3 text-xl">{skill.icon}</div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">{skill.name}</h4>
                      <span className="ml-auto text-gray-600 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all"
              >
                Download Resume
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-full font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">My Experience</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600"></div>
            
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`mb-8 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
              >
                <div className={`w-1/2 px-8 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h4 className="text-xl font-bold text-gray-800 dark:text-white">{exp.role}</h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">{exp.year}</p>
                    <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                  </div>
                </div>
                <div className="w-1/2 px-8 flex justify-center">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 border-4 border-white dark:border-gray-800 shadow-md"></div>
                </div>
                <div className={`w-1/2 px-8 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                  <h4 className="text-2xl font-bold text-gray-800 dark:text-white">{exp.year}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech Stack Carousel */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">My Tech Stack</h3>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Swiper
              slidesPerView={2}
              spaceBetween={20}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 4,
                },
                1024: {
                  slidesPerView: 5,
                },
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
            >
              {techStack.map((tech, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex flex-col items-center justify-center h-40 hover:shadow-lg transition-shadow">
                    <div className="relative w-16 h-16 mb-3">
                      <Image
                        src={tech.logo}
                        alt={tech.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{tech.name}</h4>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>

        {/* Client Logos */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Companies I've Worked With</h3>
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
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">What Clients Say</h3>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg max-w-4xl mx-auto"
                >
                  <FaQuoteLeft className="text-blue-500 text-3xl mb-4" />
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 dark:text-white">{testimonial.author}</h4>
                      <p className="text-blue-600 dark:text-blue-400 text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default About;