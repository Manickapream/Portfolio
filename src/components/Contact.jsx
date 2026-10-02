import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaRocket } from 'react-icons/fa';

const contactInfo = [
  { icon: <FaEnvelope />, label: 'Email', value: 'piramanayagam96@gmail.com', href: 'mailto:piramanayagam90@gmail.com' },
  // { icon: <FaPhone />, label: 'Phone', value: '+91 XXXXX XXXXX', href: 'tel:+91XXXXXXXXXX' },
  { icon: <FaMapMarkerAlt />, label: 'Location', value: 'Tirunelveli, Tamil Nadu', href: null },
  { icon: <FaLinkedin />, label: 'LinkedIn', value: 'linkedin.com', href: 'https://www.linkedin.com/in/manicka-pream-p-62084226a' },
];

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setSending(true);

    // Construct Email
    const myEmail = 'piramanayagam96@gmail.com';
    const emailSubject = form.subject || 'New Contact from Portfolio';
    const body = `Name: ${form.name}\nReply-to: ${form.email}\n\nMessage:\n${form.message}`;

    // Open default mail client
    window.location.href = `mailto:${myEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(body)}`;

    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl border text-slate-300 text-sm placeholder-slate-400 bg-surface-2 border-slate-800 backdrop-blur-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-400 ${errors[field] ? 'border-coral-400 bg-red-50/50' : 'border-slate-200 hover:border-slate-300'
    }`;

  return (
    <section id="contact" className="py-24 bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-coral-200 to-transparent" />

      {/* Decorative blobs */}
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-primary-100/60 blob blur-3xl pointer-events-none" />
      <div className="absolute top-20 -left-10 w-56 h-56 bg-accent-100/40 blob blur-3xl pointer-events-none" style={{ animationDelay: '4s' }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag mb-4 inline-flex items-center gap-2"><FaEnvelope /> Contact</span>
          <h2 className="section-title text-4xl sm:text-5xl mb-4">
            Let's{' '}
            <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
            Drop me a message and I'll get back within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="glass-card rounded-3xl p-6 border border-primary-100">
              <h3 className="font-display font-bold text-xl text-white mb-6">
                <span className="flex items-center gap-2"><FaEnvelope /> Get in Touch</span>
              </h3>

              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-4 py-3 border-b border-slate-100 last:border-0 group"
                >
                  <div className="w-10 h-10 bg-primary-900/30 rounded-xl flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-semibold text-slate-300 hover:text-primary-600 transition-colors truncate block"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-slate-300">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Availability card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="glass-card rounded-3xl p-6 border border-emerald-500/30 bg-emerald-500/5 hover:border-emerald-500/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                </span>
                <span className="font-bold text-white uppercase tracking-wider text-sm">Open to Work</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                I'm currently available for freelance projects, internships, and full-time roles.
                Let's build something amazing together! <FaRocket className="inline text-lg text-emerald-400 ml-1" />
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-primary-100">
              {sent ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="text-7xl mb-4"
                  >
                    🎉
                  </motion.div>
                  <h3 className="font-display font-bold text-2xl text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-500 mb-6">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => setSent(false)}
                    className="btn-primary"
                  >
                    Send Another ✉️
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3 className="font-display font-bold text-xl text-white mb-6">
                    ✉️ Send a Message
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        placeholder="Manicka Pream"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={inputClass('name')}
                      />
                      {errors.name && <p className="text-xs text-coral-500 mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={inputClass('email')}
                      />
                      {errors.email && <p className="text-xs text-coral-500 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      placeholder="Project Collaboration / Job Offer"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className={inputClass('subject')}
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      placeholder="Tell me about your project or opportunity..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`${inputClass('message')} resize-none`}
                    />
                    {errors.message && <p className="text-xs text-coral-500 mt-1">{errors.message}</p>}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={sending}
                    whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(14,165,233,0.4)' }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {sending ? (
                      <>
                        <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <span className="flex items-center gap-2">
                        <FaRocket /> Send Message
                      </span>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
