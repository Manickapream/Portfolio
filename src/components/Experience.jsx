import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaGraduationCap, FaSchool, FaBook, FaCalendarAlt, FaHourglassHalf, FaRocket, FaCog, FaTrophy, FaArrowRight } from 'react-icons/fa';

const experiences = [
  {
    company: 'Woow Local Retail Technologies',
    role: 'React.js Frontend Developer',
    period: '2026 – Present',
    type: 'Internship',
    color: 'from-primary-400 to-primary-600',
    shadow: 'shadow-primary-500/20',
    icon: <FaBriefcase />,
    highlights: [
      'Engineered responsive React.js frontend components for a high-traffic sports retail platform',
      'Integrated secure Razorpay payment gateways with real-time API connections for seamless checkout',
      'Implemented robust user authentication flows and managed complex application state',
      'Collaborated with backend teams to integrate RESTful APIs and ensure real-time data synchronization',
      'Improved application load times and UI performance by 40% through code optimization',
    ],
  },
  {
    company: 'Q-Spiders Training Institute',
    role: 'Java Full-Stack Trainee',
    period: '2023 – 2024',
    type: 'Certification',
    color: 'from-amber-400 to-orange-500',
    shadow: 'shadow-amber-500/20',
    icon: <FaGraduationCap />,
    highlights: [
      'Completed intensive Java programming curriculum',
      'Learned Core Java, OOP, Data Structures & Algorithms',
      'Built projects using Java Spring basics',
      'Earned Q-Spiders Java Certification',
    ],
  },
];

const education = [
  {
    degree: 'Master of Computer Application',
    institution: 'St. Xaviers College, Palayamkottai',
    year: '2024 – 2026',
    grade: 'CGPA: 8.3',
    color: 'from-violet-400 to-purple-600',
    icon: <FaSchool />,
    desc: 'Advanced studies in computer science, focusing on modern software engineering practices, algorithms, and full-stack development methodologies.',
  },
  {
    degree: 'Bachelor of Computer Application',
    institution: 'The M.D.T Hindhu College, Pettai',
    year: '2020 – 2023',
    grade: 'Percentage: 78%',
    color: 'from-emerald-400 to-teal-500',
    icon: <FaBook />,
    desc: 'Foundational degree covering programming basics, database management, and web development fundamentals.',
  },
];

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section id="experience" className="py-24 bg-surface relative overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
      <div className="absolute -left-40 top-40 w-96 h-96 bg-primary-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -right-40 bottom-40 w-96 h-96 bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag mb-4 inline-flex items-center gap-2 border-primary-500/30 bg-primary-500/10 text-primary-400">
            <FaCalendarAlt /> My Journey
          </span>
          <h2 className="section-title text-4xl sm:text-5xl lg:text-6xl mb-6 tracking-tight">
            Experience & <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-violet-400">Education</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A look back at my professional roles and academic background that have shaped my technical foundation.
          </p>
        </motion.div>

        {/* Tab Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="flex p-1.5 bg-surface-2/80 backdrop-blur-md rounded-2xl border border-slate-700/50 shadow-lg">
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${activeTab === 'experience'
                ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
            >
              <FaBriefcase /> Professional Experience
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${activeTab === 'education'
                ? 'bg-violet-500 text-white shadow-lg shadow-violet-500/30'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
            >
              <FaGraduationCap /> Academic Background
            </button>
          </div>
        </motion.div>

        {/* Content Area */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            {activeTab === 'experience' ? (
              <motion.div
                key="experience"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {experiences.map((exp, i) => (
                  <motion.div
                    key={exp.company}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="group relative bg-surface-2/40 backdrop-blur-xl border border-white/5 rounded-3xl p-6 sm:p-8 hover:border-white/10 transition-all duration-500 overflow-hidden isolate"
                  >
                    {/* Contained glow — stays inside the card */}
                    <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 bg-gradient-to-br ${exp.color} blur-md transition-opacity duration-500 -z-10 pointer-events-none`} />

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${exp.color} p-0.5 flex-shrink-0 shadow-lg ${exp.shadow}`}>
                        <div className="w-full h-full bg-surface-2 rounded-[14px] flex items-center justify-center text-2xl text-white">
                          <span className={`bg-gradient-to-br ${exp.color} bg-clip-text text-transparent`}>
                            {exp.icon}
                          </span>
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
                          <div>
                            <h3 className="text-2xl font-display font-bold text-white mb-1">{exp.role}</h3>
                            <p className={`text-lg font-medium bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>{exp.company}</p>
                          </div>
                          <div className="flex flex-col items-start sm:items-end gap-2">
                            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-slate-300 uppercase tracking-wider">
                              {exp.type}
                            </span>
                            <span className="text-sm font-semibold text-slate-400 flex items-center gap-2">
                              <FaCalendarAlt className="text-slate-500" /> {exp.period}
                            </span>
                          </div>
                        </div>

                        <ul className="space-y-3 mt-6">
                          {exp.highlights.map((h, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-slate-300">
                              <span className={`mt-1 flex-shrink-0 text-lg bg-gradient-to-br ${exp.color} bg-clip-text text-transparent`}>
                                <FaArrowRight className="w-3 h-3" />
                              </span>
                              <span className="leading-relaxed">{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="education"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="grid md:grid-cols-2 gap-6"
              >
                {education.map((edu, i) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="group relative bg-surface-2/40 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:border-white/10 transition-all duration-500 flex flex-col h-full overflow-hidden isolate"
                  >
                    {/* Contained glow — stays inside the card */}
                    <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 bg-gradient-to-br ${edu.color} blur-md transition-opacity duration-500 -z-10 pointer-events-none`} />

                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${edu.color} p-0.5 flex-shrink-0 shadow-lg`}>
                        <div className="w-full h-full bg-surface-2 rounded-[14px] flex items-center justify-center text-xl text-white">
                          {edu.icon}
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-slate-300 uppercase tracking-wider ml-auto">
                        {edu.year}
                      </span>
                    </div>

                    <h3 className="text-xl font-display font-bold text-white mb-2 leading-snug">{edu.degree}</h3>
                    <p className={`text-sm font-bold bg-gradient-to-r ${edu.color} bg-clip-text text-transparent mb-4`}>{edu.institution}</p>

                    <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                      {edu.desc}
                    </p>

                    <div className="mt-auto inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-sm font-bold text-white w-max">
                      <FaTrophy className="text-amber-400" /> {edu.grade}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Floating Stats - Moved to bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-16 border-t border-white/5"
        >
          {[
            { value: '2+', label: 'Years Coding', icon: <FaHourglassHalf />, color: 'from-primary-400 to-primary-600' },
            { value: '10+', label: 'Projects Built', icon: <FaRocket />, color: 'from-accent-400 to-accent-600' },
            { value: '5+', label: 'Technologies', icon: <FaCog />, color: 'from-emerald-400 to-emerald-600' },
            { value: '1', label: 'Certification', icon: <FaTrophy />, color: 'from-amber-400 to-amber-600' },
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <div className={`w-12 h-12 mx-auto rounded-full bg-gradient-to-br ${stat.color} p-0.5 mb-3 group-hover:-translate-y-1 transition-transform duration-300`}>
                <div className="w-full h-full bg-surface rounded-full flex items-center justify-center text-lg text-white">
                  {stat.icon}
                </div>
              </div>
              <div className="text-2xl font-display font-black text-white mb-1">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">{stat.label}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
