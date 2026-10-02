import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Scroll to top button
function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(14,165,233,0.4)' }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-full shadow-lg flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

// Loading splash
function LoadingScreen({ done }) {
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-hero-gradient"
        >
          <div className="text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="w-16 h-16 border-4 border-primary-200 border-t-primary-500 rounded-full mx-auto mb-6"
            />
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="font-display font-bold text-xl gradient-text"
            >
              Loading Portfolio...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Prevent browser from restoring previous scroll position
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    // Always start at the top
    window.scrollTo(0, 0);

    const t = setTimeout(() => setLoaded(true), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <LoadingScreen done={loaded} />
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}
