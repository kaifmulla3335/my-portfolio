import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Zap } from 'lucide-react';
import { SiReact, SiTailwindcss, SiHtml5, SiCss3, SiJavascript, SiPhp, SiMysql } from 'react-icons/si';

const Projects = () => {
  const projects = [
    {
      title: 'AI Chatbot Using Google Gemini API',
      description: 'AI-powered chatbot similar to ChatGPT with real-time query handling and intelligent responses. Features include context-aware conversations, multi-turn dialogue support, and seamless API integration.',
      tech: [
        { name: 'React', Icon: SiReact, color: '#61DAFB' },
        { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4' }
      ],
      gradient: 'from-cyan-500 to-blue-600',
      liveLink: '#',
      githubLink: '#',
      features: ['Real-time Responses', 'Context Awareness', 'Modern UI']
    },
    {
      title: 'Tours & Travels Management',
      description: 'Responsive web application for destination browsing and tour booking with smooth user navigation. Includes destination gallery, booking system, and user dashboard with booking history.',
      tech: [
        { name: 'HTML5', Icon: SiHtml5, color: '#E34F26' },
        { name: 'CSS3', Icon: SiCss3, color: '#1572B6' },
        { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
        { name: 'PHP', Icon: SiPhp, color: '#777BB4' },
        { name: 'MySQL', Icon: SiMysql, color: '#4479A1' }
      ],
      gradient: 'from-green-500 to-emerald-600',
      liveLink: '#',
      githubLink: '#',
      features: ['Booking System', 'User Dashboard', 'Gallery View']
    }
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-4 md:px-6 relative overflow-hidden">
      {/* Background effects */}
      <motion.div
        animate={{ 
          opacity: [0.05, 0.1, 0.05],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl"
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.span
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-[length:200%_auto] bg-clip-text text-transparent"
            >
              Projects
            </motion.span>
          </motion.h2>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '4rem' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"
          />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-xl rounded-2xl sm:rounded-3xl overflow-hidden border border-cyan-500/30 shadow-xl relative group"
            >
              {/* Animated Glow */}
              <motion.div
                animate={{
                  opacity: [0.1, 0.25, 0.1],
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 8, repeat: Infinity }}
                className={`absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-br ${project.gradient} opacity-20 rounded-full blur-3xl pointer-events-none`}
              />

              <div className="relative z-10 p-5 sm:p-6 md:p-7">
                {/* Title */}
                <motion.h3 
                  className="text-xl sm:text-2xl md:text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-3 sm:mb-4"
                  whileHover={{ x: 5 }}
                >
                  {project.title}
                </motion.h3>

                {/* Description */}
                <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-5">
                  {project.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-5">
                  {project.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.3 + i * 0.08, type: 'spring', stiffness: 300 }}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 text-xs sm:text-sm font-medium backdrop-blur-sm"
                    >
                      <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      {feature}
                    </motion.div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="mb-5 sm:mb-6">
                  <p className="text-xs sm:text-sm text-gray-400 mb-2 sm:mb-3 font-semibold">Tech Stack</p>
                  <div className="flex flex-wrap gap-3 sm:gap-4">
                    {project.tech.map((tech, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          delay: index * 0.15 + 0.5 + i * 0.08,
                          type: 'spring',
                          stiffness: 300
                        }}
                        whileHover={{ 
                          scale: 1.15,
                          y: -5,
                          boxShadow: `0 10px 25px ${tech.color}40`
                        }}
                        className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-800/60 border border-cyan-500/25 hover:border-cyan-500/50 transition-all group/tech cursor-pointer"
                      >
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.2 }}
                          transition={{ duration: 0.5 }}
                          className="flex-shrink-0"
                        >
                          <tech.Icon 
                            className="w-5 h-5 sm:w-6 sm:h-6" 
                            style={{ color: tech.color }}
                          />
                        </motion.div>
                        <span 
                          className="text-sm sm:text-base font-medium text-cyan-300 group-hover/tech:text-white transition-colors whitespace-nowrap"
                        >
                          {tech.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.a
                    href={project.liveLink}
                    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(6, 182, 212, 0.5)' }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm sm:text-base font-semibold shadow-lg shadow-cyan-500/50 flex items-center justify-center gap-2 relative overflow-hidden group"
                  >
                    <motion.div
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    />
                    <span className="relative z-10">View Live</span>
                    <ExternalLink className="w-4 h-4 relative z-10" />
                  </motion.a>

                  <motion.a
                    href={project.githubLink}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(6, 182, 212, 0.1)' }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl border-2 border-cyan-500/50 text-cyan-400 text-sm sm:text-base font-semibold flex items-center justify-center gap-2 backdrop-blur-sm hover:border-cyan-500 transition-all"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </motion.a>
                </div>
              </div>

              {/* Hover border glow */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className={`absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${project.gradient} opacity-0 blur-xl pointer-events-none`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;