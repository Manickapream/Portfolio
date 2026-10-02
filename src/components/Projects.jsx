import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaShoppingBag, FaLeaf, FaGraduationCap, FaClipboardList, FaRocket, FaStar, FaGlobe, FaGithub, FaCode, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'KickCouture Website',
    subtitle: 'MERN Stack E-Commerce',
    description:
      'Full-stack shoe e-commerce platform built with the MERN stack. Features include user authentication, product management, shopping cart, order tracking, and an admin dashboard.',
    tags: ['React.js', 'MongoDB', 'Node.js', 'Express', 'Auth'],
    icon: <FaShoppingBag />,
    color: 'from-sky-400 to-blue-500',
    bgGrad: 'from-sky-50 to-blue-50',
    border: 'border-sky-200',
    demo: 'https://kickcouture.vercel.app',
    github: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'E-Cart for Banana Fiber',
    subtitle: 'PHP/MySQL E-Commerce',
    description:
      'Multi-user e-commerce platform for handmade banana fiber products. Implements dynamic CRUD operations, role-based access control, and a clean shopping experience.',
    tags: ['PHP', 'MySQL', 'Multi-user', 'CRUD'],
    icon: <FaLeaf />,
    color: 'from-emerald-400 to-green-500',
    bgGrad: 'from-emerald-50 to-green-50',
    border: 'border-emerald-200',
    demo: null,
    github: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'Student Portal',
    subtitle: 'React + Node.js',
    description:
      'Comprehensive student management portal with attendance tracking, grade management, announcements, and an intuitive dashboard for both students and faculty.',
    tags: ['React', 'Node.js', 'MongoDB', 'JWT'],
    icon: <FaGraduationCap />,
    color: 'from-violet-400 to-purple-500',
    bgGrad: 'from-violet-50 to-purple-50',
    border: 'border-violet-200',
    demo: null,
    github: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'Task Manager App',
    subtitle: 'Full-Stack CRUD',
    description:
      'Drag-and-drop task management application with real-time updates, category labels, priority sorting, and team collaboration features.',
    tags: ['React', 'Express', 'MySQL', 'REST API'],
    icon: <FaClipboardList />,
    color: 'from-amber-400 to-orange-500',
    bgGrad: 'from-amber-50 to-orange-50',
    border: 'border-amber-200',
    demo: null,
    github: '#',
    featured: false,
  },
];

const filters = ['All', 'MERN', 'PHP', 'React', 'Full-Stack'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.tags.some(t => t.toLowerCase().includes(activeFilter.toLowerCase()))
        || activeFilter === 'MERN' && p.subtitle.includes('MERN')
        || activeFilter === 'Full-Stack' && (p.subtitle.includes('MERN') || p.subtitle.includes('Full'))
        || activeFilter === 'PHP' && p.subtitle.includes('PHP')
        || activeFilter === 'React' && p.tags.includes('React.js') || activeFilter === 'React' && p.tags.includes('React'));

  return (
    <section id="projects" className="py-24 bg-surface relative overflow-hidden">
      {/* Background glowing elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Floating decorative icons */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 left-[10%] text-primary-500/10 text-6xl pointer-events-none hidden md:block"
      >
        <FaReact />
      </motion.div>
      <motion.div
        animate={{ y: [0, 25, 0], rotate: [0, -15, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-40 left-[5%] text-violet-500/10 text-5xl pointer-events-none hidden md:block"
      >
        <FaNodeJs />
      </motion.div>
      <motion.div
        animate={{ y: [0, -30, 0], rotate: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute top-40 right-[10%] text-emerald-500/10 text-7xl pointer-events-none hidden md:block"
      >
        <FaCode />
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -10, 5, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute bottom-20 right-[15%] text-amber-500/10 text-6xl pointer-events-none hidden md:block"
      >
        <FaDatabase />
      </motion.div>
      
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag mb-4 inline-flex items-center gap-2 border-primary-500/30 bg-primary-500/10 text-primary-400">
            <FaRocket /> Portfolio Showcase
          </span>
          <h2 className="section-title text-4xl sm:text-5xl lg:text-6xl mb-6 tracking-tight">
            Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-accent-400">Works</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Explore a selection of my best projects, demonstrating my expertise in crafting scalable, responsive, and innovative web applications.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {filters.map((f) => (
            <motion.button
              key={f}
              onClick={() => setActiveFilter(f)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 backdrop-blur-sm border ${
                activeFilter === f
                  ? 'bg-primary-500/20 text-primary-300 border-primary-500/50 shadow-[0_0_15px_rgba(56,189,248,0.3)]'
                  : 'bg-surface-2/50 text-slate-400 border-slate-700/50 hover:border-slate-500 hover:text-slate-200'
              }`}
            >
              {f}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {filtered.map((project, i) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.5, type: 'spring', stiffness: 100 }}
                className={`group relative rounded-[2rem] overflow-hidden ${
                  i === 0 && filtered.length > 1 ? 'md:col-span-2 md:flex' : ''
                }`}
              >
                {/* Glassmorphism Background */}
                <div className="absolute inset-0 bg-surface-2/40 backdrop-blur-xl border border-white/5 group-hover:border-white/10 transition-colors duration-500" />
                
                {/* Glowing Hover Effect */}
                <div className={`absolute -inset-px opacity-0 group-hover:opacity-100 bg-gradient-to-br ${project.color} blur-xl transition-opacity duration-700 -z-10`} />

                <div className={`relative z-10 p-8 sm:p-10 flex flex-col justify-between h-full ${i === 0 && filtered.length > 1 ? 'md:w-1/2' : ''}`}>
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} p-0.5 shadow-lg flex-shrink-0`}
                      >
                        <div className="w-full h-full bg-surface-2/90 backdrop-blur-sm rounded-[14px] flex items-center justify-center text-3xl">
                          <span className={`bg-gradient-to-br ${project.color} bg-clip-text text-transparent drop-shadow-sm`}>
                            {project.icon}
                          </span>
                        </div>
                      </motion.div>
                      
                      {project.featured && (
                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
                          <FaStar className="text-amber-400 mb-0.5" /> Featured
                        </div>
                      )}
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
                      {project.title}
                    </h3>
                    <p className={`text-sm font-medium uppercase tracking-widest mb-6 bg-gradient-to-r ${project.color} bg-clip-text text-transparent inline-block`}>
                      {project.subtitle}
                    </p>
                    
                    <p className="text-slate-400 text-base leading-relaxed mb-8">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 text-xs font-medium rounded-lg bg-white/5 border border-white/10 text-slate-300">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`flex-1 flex justify-center items-center gap-2 py-3 px-4 text-sm font-bold text-white rounded-xl bg-gradient-to-r ${project.color} shadow-lg shadow-black/20 hover:shadow-xl transition-all relative overflow-hidden group/btn`}
                        >
                          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-in-out" />
                          <span className="relative z-10 flex items-center gap-2"><FaGlobe /> Live Demo</span>
                        </motion.a>
                      )}
                      {/* 
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex justify-center items-center gap-2 py-3 px-4 text-sm font-bold text-slate-200 rounded-xl bg-surface-3/50 backdrop-blur-md border border-slate-700/50 hover:border-slate-400 hover:bg-surface-3 transition-all"
                      >
                        <FaGithub /> Source Code
                      </motion.a>
                      */}
                    </div>
                  </div>
                </div>

                {/* If it's the large first item, we can add a decorative graphic on the right side */}
                {i === 0 && filtered.length > 1 && (
                  <div className="hidden md:flex relative w-1/2 p-8 items-center justify-center bg-gradient-to-br from-surface-3/30 to-transparent border-l border-white/5 overflow-hidden">
                     {/* Decorative background elements */}
                     <motion.div 
                       animate={{ 
                         rotate: [0, 360],
                       }}
                       transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                       className="absolute w-[200%] h-[200%] rounded-full border border-dashed border-white/10"
                     />
                     <motion.div 
                       animate={{ 
                         rotate: [360, 0],
                       }}
                       transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                       className="absolute w-[150%] h-[150%] rounded-full border border-dashed border-white/5"
                     />
                     <div className={`w-48 h-48 rounded-full bg-gradient-to-br ${project.color} opacity-20 blur-3xl`} />
                     <div className="absolute text-[120px] text-white/5 flex items-center justify-center w-full h-full">
                       {project.icon}
                     </div>
                  </div>
                )}
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
