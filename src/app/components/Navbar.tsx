'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { FaHome, FaUser, FaCode, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const navItems = [
  { name: 'Home', path: '/', icon: FaHome },
  { name: 'About', path: '/about', icon: FaUser },
  { name: 'Skills', path: '/skills', icon: FaCode },
  { name: 'Projects', path: '/projects', icon: FaProjectDiagram },
  { name: 'Contact', path: '/contact', icon: FaEnvelope },
];


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Scroll progress bar
  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path: string) => {
    const sectionId = path.slice(1); // Remove the leading slash
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      router.push(path);
    }
  };

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`fixed w-full z-50 transition-all duration-300 border-b border-white/20 dark:border-gray-800/60
        ${scrollProgress > 0 ? 'bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl shadow-2xl' : 'bg-white/30 dark:bg-gray-900/30 backdrop-blur-xl'}
      `}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Sticky scroll progress bar */}
      <div className="absolute top-0 left-0 w-full h-1 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-r-full"
          style={{ width: `${scrollProgress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${scrollProgress}%` }}
          transition={{ ease: 'linear', duration: 0.2 }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo with animated glow */}
          <Link href="/" className="flex items-center space-x-2 group focus:outline-none" aria-label="Home">
            <motion.span
              whileHover={{ scale: 1.08 }}
              className="relative text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 select-none"
            >
              <span className="absolute -inset-1 rounded-lg blur-lg opacity-60 group-hover:opacity-90 animate-glow bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></span>
              <span className="relative z-10">Portfolio</span>
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.path}
                  whileHover={{ y: -2 }}
                  className="relative"
                >
                  <Link
                    href={item.path}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(item.path);
                    }}
                    className={`flex items-center space-x-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-md px-2 py-1
                      ${pathname === item.path
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 dark:text-gray-300 dark:hover:text-transparent dark:hover:bg-clip-text dark:hover:bg-gradient-to-r dark:hover:from-blue-400 dark:hover:to-purple-400'}
                    `}
                    aria-current={pathname === item.path ? 'page' : undefined}
                    tabIndex={0}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{item.name}</span>
                  </Link>
                  {pathname === item.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <motion.button
            animate={isOpen ? { rotate: 90 } : { rotate: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 focus:outline-none"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            tabIndex={0}
          >
            <span className="relative block w-6 h-6">
              <span
                className={`absolute left-1/2 top-1/2 w-6 h-0.5 bg-current rounded transition-all duration-300 ${isOpen ? 'rotate-45 translate-x-[-50%] translate-y-[-50%]' : '-translate-y-2.5 -translate-x-1/2'}`}
                style={{ transform: isOpen ? 'translate(-50%, -50%) rotate(45deg)' : 'translate(-50%, -10px)' }}
              />
              <span
                className={`absolute left-1/2 top-1/2 w-6 h-0.5 bg-current rounded transition-all duration-300 ${isOpen ? 'opacity-0' : '-translate-x-1/2'}`}
                style={{ transform: isOpen ? 'translate(-50%, -50%) scaleX(0)' : 'translate(-50%, 0)' }}
              />
              <span
                className={`absolute left-1/2 top-1/2 w-6 h-0.5 bg-current rounded transition-all duration-300 ${isOpen ? '-rotate-45 translate-x-[-50%] translate-y-[-50%]' : 'translate-y-2.5 -translate-x-1/2'}`}
                style={{ transform: isOpen ? 'translate(-50%, -50%) rotate(-45deg)' : 'translate(-50%, 10px)' }}
              />
            </span>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="md:hidden fixed top-0 right-0 w-4/5 max-w-xs h-full bg-white/90 dark:bg-gray-900/95 backdrop-blur-2xl shadow-2xl border-l border-white/20 dark:border-gray-800/60 z-50 flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <div className="flex-1 px-2 pt-6 pb-3 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.path}
                    whileHover={{ x: 5 }}
                    className="relative"
                  >
                    <Link
                      href={item.path}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(item.path);
                        setIsOpen(false);
                      }}
                      className={`flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400
                        ${pathname === item.path
                          ? 'bg-blue-50 text-blue-600 dark:bg-gray-800 dark:text-blue-400'
                          : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-400'}
                      `}
                      aria-current={pathname === item.path ? 'page' : undefined}
                      tabIndex={0}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="hidden xs:inline">{item.name}</span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar; 