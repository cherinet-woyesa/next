'use client';

import { useEffect, useRef, useContext, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFileDownload, FaSun, FaMoon, FaTelegram, FaFacebook, FaInstagram } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import type { ThemeContextType } from '../theme/ThemeProvider';
import { ThemeContext } from '../theme/ThemeProvider';

// Typewriter effect hook
function useTypewriter(words: string[], speed = 120, pause = 1200) {
  const [index, setIndex] = useState<number>(0);
  const [subIndex, setSubIndex] = useState<number>(0);
  const [deleting, setDeleting] = useState<boolean>(false);
  const [blink, setBlink] = useState<boolean>(true);
  const [loop, setLoop] = useState<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (loop >= words.length) {
      setLoop(0);
    }
    if (subIndex === words[index].length + 1 && !deleting) {
      timeoutRef.current = setTimeout(() => setDeleting(true), pause);
      return;
    }
    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev: number) => (prev + 1) % words.length);
      setLoop((prev: number) => prev + 1);
      return;
    }
    timeoutRef.current = setTimeout(() => {
      setSubIndex((prev: number) => prev + (deleting ? -1 : 1));
    }, deleting ? speed / 2 : speed);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [subIndex, index, deleting, words, speed, pause, loop]);

  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((v: boolean) => !v), 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return `${words[index].substring(0, subIndex)}${blink ? '|' : ' '}`;
}

const Hero = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext) as ThemeContextType;
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Parallax state
  const [parallax, setParallax] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const bgRef = useRef<HTMLDivElement>(null);

  // Typewriter effect for skills/interests
  const typewriterText = useTypewriter([
    'Full Stack Developer',
    'React Enthusiast',
    'Node.js & Next.js Expert',
    'UI/UX Lover',
    'Open Source Contributor',
  ]);

  useEffect(() => {
    // Parallax effect handler
    const handleMouseMove = (e: MouseEvent) => {
      if (!bgRef.current) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20; // max 10px left/right
      const y = (e.clientY / innerHeight - 0.5) * 20; // max 10px up/down
      setParallax({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/cherinet-woyesa", label: "GitHub" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/cherinet-woyesa", label: "LinkedIn" },
    { icon: <FaTelegram />, url: "https://t.me/Cherishme", label: "Telegram" },
    { icon: <FaFacebook />, url: "https://facebook.com/cherinet_", label: "Facebook" },
    { icon: <FaInstagram />, url: "https://instagram.com/cherinetwoyesa", label: "Instagram" }
  ];

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="home"
    >
      {/* Background Image with Next.js Image component */}
      <div
        className="absolute inset-0 z-0"
        ref={bgRef}
        style={{
          transform: `translate3d(${parallax.x}px, ${parallax.y}px, 0)`,
          transition: 'transform 0.2s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
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

     

      {/* Social Links */}
      <div className="absolute left-6 top-20 z-50 hidden md:flex flex-col gap-4">
        {socialLinks.map((social, index) => (
          <motion.a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/30 transition-colors relative group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={social.label}
            tabIndex={0}
          >
            <span className="text-xl">{social.icon}</span>
            {/* Tooltip */}
            <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
              {social.label}
            </span>
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
          {/* Animated typewriter effect for role/skills */}
          <p className="text-2xl text-gray-600 dark:text-gray-400 mb-8 min-h-[40px] font-mono">
            {typewriterText}
          </p>

          <div className="text-xl md:text-2xl mb-8 min-h-[60px] font-mono">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-block"
            >
              I&apos;m a passionated Full Stack Developer with 2+ years of experience.
            </motion.div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="#contact"
              className="relative bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors duration-300 overflow-hidden group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('contact');
                if (element) {
                  const offset = 80; // Account for navbar height
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              <span className="relative z-10">Contact Me</span>
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </motion.a>
            
            <motion.a
              href="/CHERINET.pdf"
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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        aria-label="Scroll down indicator"
      >
        <svg className="w-7 h-7 text-white animate-bounce-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
        <span className="text-xs text-white mt-1 animate-pulse">Scroll Down</span>
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