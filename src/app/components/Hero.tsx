'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaFileDownload, FaSun, FaMoon, FaTelegram, FaFacebook, FaInstagram } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    // Check for dark mode preference
    if (typeof window !== 'undefined') {
      setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  useEffect(() => {
    // Check for dark mode preference
    setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/cherinet-woyesa" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/cherinet-woyesa" },
    { icon: <FaTelegram />, url: "https://t.me/Cherishme" },
    { icon: <FaFacebook />, url: "https://facebook.com/cherinet_" },
    { icon: <FaInstagram />, url: "https://instagram.com/cherinetwoyesa" }
  ];

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="home"
    >
      {/* Background Image with Next.js Image component */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/prof.jpg"
          alt="Background"
          fill
          className="object-cover"
          quality={80}
          priority={inView}
          loading={inView ? 'eager' : 'lazy'}
          sizes="100vw"
        />
        <div className={`absolute inset-0 ${darkMode ? 'bg-gray-900/70' : 'bg-blue-600/70'} mix-blend-multiply`}></div>
      </div>

      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="absolute top-6 right-6 z-50 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all"
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {darkMode ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
      </button>

      {/* Language Selector */}
      <div className="absolute top-6 left-6 z-50">
        <select 
          className="bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-white/50"
          onChange={(e) => console.log('Language changed to:', e.target.value)}
        >
          <option value="en" className="bg-gray-800 text-white">English</option>
          <option value="am" className="bg-gray-800 text-white">Amharic</option>
        
        </select>
      </div>

      {/* Social Links */}
      <div className="absolute left-6 top-20 z-50 hidden md:flex flex-col gap-4">
        {socialLinks.map((social, index) => (
          <motion.a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/30 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="text-xl">{social.icon}</span>
          </motion.a>
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Hi, I&apos;m <span className="text-yellow-300 bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">Cherinet Woyesa</span>
          </h1>
          
          <p className="text-2xl text-gray-600 dark:text-gray-400 mb-8">Full Stack Developer</p>


          <div className="text-xl md:text-2xl mb-8 min-h-[60px] font-mono">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-block"
            >
              I&apos;m a passionate Full Stack Developer with 2+ years of experience.
            </motion.div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="#contact"
              className="relative bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors duration-300 overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Contact Me</span>
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </motion.a>
            
            <motion.a
              href="/resume.pdf"
              download="Cherinet_Woyesa_Resume.pdf"
              className="relative border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center gap-2">
                <span className="relative z-10">Download Resume</span>
                <FaFileDownload className="relative z-10" />
              </div>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>

      {/* Micro-interaction elements */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white opacity-10 pointer-events-none"
          initial={{
            x: Math.random() * 100,
            y: Math.random() * 100,
            width: Math.random() * 20 + 5,
            height: Math.random() * 20 + 5,
          }}
          animate={{
            x: Math.random() * 100,
            y: Math.random() * 100,
            transition: {
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse'
            }
          }}
        />
      ))}
    </section>
  );
};

export default Hero;