import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBolt } from 'react-icons/fa';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      // Update active link based on scroll position
      const sections = navLinks.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? 'bg-surface/80 backdrop-blur-xl shadow-card border-b border-slate-800/60'
            : 'bg-transparent'
          }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNav('#home'); }}
              whileHover={{ scale: 1.05 }}
              className="font-display font-black text-xl"
            >
              <span className="gradient-text">MP</span>
              <span className="text-white">.</span>
            </motion.a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                  whileHover={{ y: -1 }}
                  className={`nav-link px-4 py-2 rounded-full text-sm ${active === link.href.slice(1) ? 'text-primary-600 bg-primary-900/30' : ''
                    }`}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="/Mani_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-3 btn-primary text-sm !py-2 !px-5"
              >
                Resume
              </motion.a>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2 rounded-xl hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
                className="block w-6 h-0.5 bg-slate-200 rounded-full origin-center"
              />
              <motion.span
                animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }}
                className="block w-6 h-0.5 bg-slate-200 rounded-full"
              />
              <motion.span
                animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
                className="block w-6 h-0.5 bg-slate-200 rounded-full origin-center"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 right-0 w-72 z-40 bg-surface/95 backdrop-blur-xl shadow-2xl border-l border-slate-800/60"
          >
            <div className="flex flex-col pt-24 px-8 gap-3">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                  className={`py-3 px-4 rounded-xl font-medium text-white hover:text-primary-600 hover:bg-primary-900/30 transition-all ${active === link.href.slice(1) ? 'text-primary-600 bg-primary-900/30' : ''
                    }`}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="/Mani_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navLinks.length * 0.07 }}
                className="mt-4 btn-primary text-center flex items-center justify-center gap-2"
              >
                Resume <FaBolt />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop for mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 z-30 bg-surface/20 backdrop-blur-sm md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}
