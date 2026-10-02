import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaLeaf, FaLaptopCode, FaRocket, FaLightbulb, FaHeart } from 'react-icons/fa';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12 relative overflow-hidden">
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-primary-500 via-accent-500 to-coral-500" />

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-4 left-8 text-6xl text-slate-500"><FaReact /></div>
        <div className="absolute top-8 right-12 text-4xl text-slate-500"><FaLeaf /></div>
        <div className="absolute bottom-4 left-1/3 text-5xl text-slate-500"><FaLaptopCode /></div>
        <div className="absolute bottom-8 right-1/4 text-3xl text-slate-500"><FaRocket /></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <motion.div whileHover={{ scale: 1.02 }}>
            <p className="font-display font-black text-2xl">
              <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-coral-400 bg-clip-text text-transparent">
                MP
              </span>
              <span className="text-white">.</span>
            </p>
            <p className="text-slate-400 text-sm mt-1">
              MERN Stack Software Engineer
            </p>
          </motion.div>

          {/* Quote */}
          <div className="text-center">
            <p className="text-slate-400 text-sm italic flex justify-center items-center gap-2">
              "Building innovative solutions, one commit at a time." <FaLightbulb className="text-yellow-400" />
            </p>
          </div>

          {/* Copyright */}
          <div className="text-right text-sm text-slate-500">
            <p>© {year} Manicka Pream</p>
            <p className="mt-0.5 flex items-center justify-end gap-1">Made with <FaHeart className="text-red-500" /> + React + Three.js</p>
          </div>
        </div>

        {/* Bottom nav */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap justify-center gap-x-8 gap-y-2">
          {['Home', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ color: '#38bdf8', y: -1 }}
              className="text-sm text-slate-500 hover:text-primary-400 transition-colors duration-200"
            >
              {item}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
