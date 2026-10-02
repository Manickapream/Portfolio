import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa';

const skillCategories = [
  {
    id: '01',
    title: 'Frontend',
    icon: <FaCode className="text-slate-300" />,
    skills: [
      { name: 'HTML', dotColor: 'bg-purple-500' },
      { name: 'CSS', dotColor: 'bg-purple-500' },
      { name: 'JavaScript', dotColor: 'bg-purple-500' },
      { name: 'Angular', dotColor: 'bg-purple-500' },
      { name: 'React.js', dotColor: 'bg-purple-500' },
      { name: 'Tailwind CSS', dotColor: 'bg-purple-500' },
    ],
  },
  {
    id: '02',
    title: 'Backend',
    icon: <span className="font-bold text-xs text-slate-300">API</span>,
    skills: [
      { name: 'Java', dotColor: 'bg-purple-500' },
      { name: 'Spring Boot', dotColor: 'bg-purple-500' },
      { name: 'Node.js', dotColor: 'bg-purple-500' },
      { name: 'Express.js', dotColor: 'bg-purple-500' },
    ],
  },
  {
    id: '03',
    title: 'Databases',
    icon: <span className="font-bold text-xs text-slate-300">DB</span>,
    skills: [
      { name: 'PostgreSQL', dotColor: 'bg-purple-500' },
      { name: 'MySQL', dotColor: 'bg-purple-500' },
    ],
  },
  {
    id: '04',
    title: 'Tools & Platforms',
    icon: <FaTools className="text-slate-300" />,
    skills: [
      { name: 'Git', dotColor: 'bg-purple-500' },
      { name: 'GitHub', dotColor: 'bg-purple-500' },
      { name: 'VS Code', dotColor: 'bg-purple-500' },
      { name: 'Eclipse IDLE', dotColor: 'bg-purple-500' },
      { name: 'Postman', dotColor: 'bg-purple-500' },
      { name: 'pgAdmin', dotColor: 'bg-purple-500' },
    ],
  },
];

const coreConcepts = [
  'REST API Integration',
  'JWT Authentication',
  'Role-Based Access Control',
  'CRUD Operations',
  'Responsive Web Design',
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
};

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="py-24 bg-surface relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className="bg-surface-2 border border-slate-800 rounded-3xl p-8 shadow-2xl hover:border-primary-500/50 hover:shadow-glow-cyan transition-all duration-300 group"
            >
              {/* Card Header */}
              <div className="flex items-center gap-5 mb-8">
                <div className="w-14 h-14 bg-surface-3 border border-slate-700 rounded-2xl flex items-center justify-center text-xl flex-shrink-0">
                  {cat.icon}
                </div>
                <div>
                  <p className="text-slate-500 text-sm font-semibold tracking-wider mb-1">{cat.id}</p>
                  <h3 className="text-white text-xl font-bold">{cat.title}</h3>
                </div>
              </div>

              {/* Skills Pills */}
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-4 py-2 bg-surface-3 border border-slate-700 rounded-full group-hover:border-primary-500/30 hover:bg-primary-500/10 transition-colors duration-300 cursor-default"
                  >
                    <div className={`w-1.5 h-1.5 rounded-full ${skill.dotColor}`} />
                    <span className="text-slate-300 text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Concepts Card */}
        <motion.div
          variants={cardVariants}
          custom={4}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="bg-surface-2 border border-slate-800 rounded-3xl p-8 shadow-2xl hover:border-primary-500/50 hover:shadow-glow-cyan transition-all duration-300 group"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <p className="text-slate-500 text-xs font-bold tracking-[0.2em] uppercase mb-2">Core Concepts</p>
              <h3 className="text-white text-2xl font-bold">Development fundamentals</h3>
            </div>

            <div className="flex flex-wrap md:justify-end gap-3 flex-1">
              {coreConcepts.map((concept) => (
                <div
                  key={concept}
                  className="px-5 py-2 bg-surface-3 border border-slate-700 rounded-full flex items-center group-hover:border-primary-500/30 hover:bg-primary-500/10 transition-colors duration-300 cursor-default"
                >
                  <span className="text-slate-400 text-sm font-medium">{concept}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
