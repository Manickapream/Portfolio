import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import ThreeBackground from './ThreeBackground';

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/Manickapream',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },

  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/manicka-pream-p-62084226a',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-surface"
    >
      {/* Three.js animated background */}
      <ThreeBackground />

      {/* Decorative center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 flex flex-col items-center justify-center min-h-screen text-center">

        {/* Floating Background Badges */}
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute hidden lg:flex top-40 left-32 glass-card rounded-2xl px-5 py-3 shadow-card border border-white/5 backdrop-blur-md"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">⚛️</span>
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-wider text-slate-400">Expertise</p>
              <p className="text-sm font-bold text-white tracking-wide">React.js</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute hidden lg:flex bottom-48 left-40 glass-card rounded-2xl px-5 py-3 shadow-card border border-white/5 backdrop-blur-md"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">☕</span>
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-wider text-slate-400">Language</p>
              <p className="text-sm font-bold text-white tracking-wide">Java</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, -15, 0], x: [0, -15, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute hidden lg:flex top-52 right-32 glass-card rounded-2xl px-5 py-3 shadow-card border border-white/5 backdrop-blur-md"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">🟨</span>
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-wider text-slate-400">Runtime</p>
              <p className="text-sm font-bold text-white tracking-wide">Node.js</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 25, 0], x: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute hidden lg:flex bottom-56 right-40 glass-card rounded-2xl px-5 py-3 shadow-card border border-white/5 backdrop-blur-md"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">🌿</span>
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-wider text-slate-400">Database</p>
              <p className="text-sm font-bold text-white tracking-wide">MongoDB</p>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center z-10 w-full"
        >
          {/* Badge */}
          {/* <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 mb-8 bg-emerald-500/10 backdrop-blur-md border border-emerald-500/30 px-6 py-2.5 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all cursor-default"
          >
            <span className="relative flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
            </span>
            <span className="text-sm font-bold tracking-widest uppercase text-emerald-400 drop-shadow-sm">
              Open to Work & New Opportunities
            </span>
          </motion.div> */}

          {/* Greeting */}
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-primary-400 font-semibold mb-4 tracking-wider uppercase">
            Hello, World! I am
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-black text-6xl sm:text-7xl lg:text-[7rem] text-white leading-[1.1] mb-6 tracking-tight drop-shadow-2xl"
          >
            Manicka <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-primary-500 bg-clip-text text-transparent">Pream</span>
          </motion.h1>

          {/* Typed role */}
          <motion.div variants={itemVariants} className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-300 mb-8 min-h-[3rem] lg:min-h-[4rem]">
            <span className="text-slate-500 mr-2">I build</span>
            <TypeAnimation
              sequence={[
                'Scalable Web Apps', 2000,
                'Modern User Interfaces', 2000,
                'Robust Backend APIs', 2000,
                'Full-Stack Solutions', 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-white drop-shadow-md"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12"
          >
            A passionate software engineer specialized in the MERN stack. I transform complex problems into elegant, user-centric digital experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-5 justify-center w-full max-w-md mx-auto mb-14"
          >
            <motion.a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 py-4 px-8 rounded-full bg-white text-black font-bold text-lg hover:bg-slate-200 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)]"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 py-4 px-8 rounded-full bg-surface-3 border border-slate-600 text-white font-bold text-lg hover:border-white transition-colors"
            >
              Let's Talk
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex flex-col items-center gap-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">Connect with me</span>
            <div className="flex gap-4">
              {socialLinks.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={s.label}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-surface-2 border border-slate-700/50 text-slate-300
                    hover:text-white hover:border-white/50 hover:bg-white/10 shadow-lg transition-all duration-300 backdrop-blur-sm"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer"
          onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-[10px] text-slate-500 font-bold tracking-[0.3em] uppercase">Scroll Down</span>
          {/* <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-2 bg-primary-500 rounded-full" />
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
}
