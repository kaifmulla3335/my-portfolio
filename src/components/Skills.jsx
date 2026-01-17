import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Database, Wrench, Trophy, Star, Award, Sparkles, X, Eye } from 'lucide-react';
import { 
  SiReact, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, 
  SiVite, SiSpring, SiPostgresql, SiMysql, SiGit, 
  SiGithub, SiPostman, SiIntellijidea, SiFigma, SiTypescript
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';
import { TbApi } from 'react-icons/tb';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const skillCategories = [
    {
      id: 'frontend',
      title: 'Frontend',
      icon: Code,
      gradient: 'from-cyan-400 to-blue-500',
      skills: [
        { Icon: SiReact, name: 'React.js', color: '#61DAFB' },
        { Icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
        { Icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
        { Icon: SiHtml5, name: 'HTML5', color: '#E34F26' },
        { Icon: SiCss3, name: 'CSS3', color: '#1572B6' },
        { Icon: SiTailwindcss, name: 'Tailwind CSS', color: '#06B6D4' },
        { Icon: SiVite, name: 'Vite', color: '#646CFF' }
      ]
    },
    {
      id: 'backend',
      title: 'Backend',
      icon: Database,
      gradient: 'from-green-400 to-emerald-500',
      skills: [
        { Icon: FaJava, name: 'Java', color: '#007396' },
        { Icon: SiSpring, name: 'Spring Boot', color: '#6DB33F' },
        { Icon: TbApi, name: 'REST APIs', color: '#FF6C37' },
        { Icon: SiPostgresql, name: 'PostgreSQL', color: '#4169E1' },
        { Icon: SiMysql, name: 'MySQL', color: '#4479A1' }
      ]
    },
    {
      id: 'tools',
      title: 'Tools & Platforms',
      icon: Wrench,
      gradient: 'from-purple-400 to-pink-500',
      skills: [
        { Icon: SiGit, name: 'Git', color: '#F05032' },
        { Icon: SiGithub, name: 'GitHub', color: '#FFFFFF' },
        { Icon: VscCode, name: 'VS Code', color: '#007ACC' },
        { Icon: SiIntellijidea, name: 'IntelliJ IDEA', color: '#7A5CFF' },
        { Icon: SiPostman, name: 'Postman', color: '#FF6C37' },
        { Icon: SiFigma, name: 'Figma', color: '#F24E1E' }
      ]
    }
  ];

  const achievements = [
    { 
      icon: Trophy, 
      title: '2nd Rank', 
      description: 'CodeWizard Competition', 
      color: 'text-yellow-400',
      certificate: '/src/assets/Codewizard Certificate.jpeg'
    },
    { 
      icon: Star, 
      title: '2 Years', 
      description: 'Coding Club Member', 
      color: 'text-cyan-400',
      certificate: '/src/assets/Coding Club Certificate.jpg'
    },
    { 
      icon: Award, 
      title: '36 Hours', 
      description: 'National Hackathon', 
      color: 'text-purple-400',
      certificate: '/src/assets/Hackathon Certificate.jpeg'
    }
  ];

  const allSkills = skillCategories.flatMap(cat => cat.skills);
  const displaySkills = activeCategory === 'all' 
    ? allSkills 
    : skillCategories.find(cat => cat.id === activeCategory)?.skills || [];

  const duplicatedSkills = [...allSkills, ...allSkills, ...allSkills];

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-4 md:px-6">
      {/* Background Effects */}
      <motion.div
        animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)',
        }}
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
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '5rem' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"
          />
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory('all')}
            className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm transition-all ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/50'
                : 'bg-slate-800/60 text-gray-300 hover:bg-slate-800 border border-cyan-500/30'
            }`}
          >
            All Skills
          </motion.button>
          {skillCategories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm transition-all flex items-center gap-1.5 sm:gap-2 ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg`
                  : 'bg-slate-800/60 text-gray-300 hover:bg-slate-800 border border-cyan-500/30'
              }`}
            >
              <category.icon className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">{category.title}</span>
              <span className="sm:hidden">{category.title.split(' ')[0]}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Display */}
        <AnimatePresence mode="wait">
          {activeCategory === 'all' ? (
            // Infinite Horizontal Scroll
            <motion.div
              key="infinite-scroll"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mb-12 sm:mb-16 overflow-hidden py-6 sm:py-8"
            >
              <div className="relative">
                {/* Gradient Overlays */}
                <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />
                
                {/* Scrolling Icons */}
                <motion.div
                  className="flex gap-8 sm:gap-10 md:gap-12 items-center"
                  animate={{ x: [0, -1800] }}
                  transition={{
                    x: { duration: 30, repeat: Infinity, ease: "linear" },
                  }}
                >
                  {duplicatedSkills.map((skill, i) => (
                    <motion.div
                      key={`${skill.name}-${i}`}
                      whileHover={{ 
                        scale: 1.15,
                        y: -8,
                        filter: `drop-shadow(0 15px 30px ${skill.color}60)`
                      }}
                      className="flex-shrink-0 group relative cursor-pointer"
                    >
                      <div className="flex flex-col items-center gap-2 sm:gap-2.5 bg-slate-800/40 backdrop-blur-sm border border-cyan-500/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 hover:border-cyan-500/40 transition-all min-w-[80px] sm:min-w-[100px] md:min-w-[120px]">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <skill.Icon 
                            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" 
                            style={{ color: skill.color }}
                          />
                        </motion.div>
                        <span 
                          className="text-white text-[10px] sm:text-xs md:text-sm font-medium text-center leading-tight"
                          style={{ color: skill.color }}
                        >
                          {skill.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ) : (
            // Grid View
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-8 mb-12 sm:mb-16 py-6 sm:py-8"
            >
              {displaySkills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: i * 0.08, type: 'spring', stiffness: 200 }}
                  whileHover={{ 
                    scale: 1.1,
                    y: -8,
                    filter: `drop-shadow(0 15px 30px ${skill.color}60)`
                  }}
                  className="group relative cursor-pointer"
                >
                  <div className="flex flex-col items-center gap-2 sm:gap-2.5 bg-slate-800/40 backdrop-blur-sm border border-cyan-500/20 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 hover:border-cyan-500/40 transition-all min-w-[90px] sm:min-w-[110px] md:min-w-[130px]">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <skill.Icon 
                        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20" 
                        style={{ color: skill.color }}
                      />
                    </motion.div>
                    <span 
                      className="text-white text-xs sm:text-sm md:text-base font-medium text-center leading-tight"
                      style={{ color: skill.color }}
                    >
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border border-cyan-500/30 shadow-2xl shadow-cyan-500/10 relative overflow-hidden"
        >
          <motion.div
            animate={{
              opacity: [0.05, 0.15, 0.05],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full blur-3xl pointer-events-none"
          />

          <div className="relative z-10">
            <div className="flex items-center gap-2 sm:gap-3 mb-5 sm:mb-6">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg"
              >
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </motion.div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                Achievements & Activities
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {achievements.map((achievement, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-slate-800/40 rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-cyan-500/20 hover:border-cyan-500/40 transition-all cursor-pointer"
                  onClick={() => setSelectedCertificate(achievement)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                      className={`${achievement.color}`}
                    >
                      <achievement.icon className="w-7 h-7 sm:w-8 sm:h-8" />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="p-1.5 sm:p-2 rounded-lg bg-cyan-500/20 border border-cyan-500/40"
                    >
                      <Eye className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                    </motion.div>
                  </div>
                  <h4 className={`${achievement.color} font-bold text-lg sm:text-xl mb-1`}>
                    {achievement.title}
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm mb-2">{achievement.description}</p>
                  <p className="text-cyan-400 text-xs font-semibold">Click to view certificate</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-3 sm:p-4"
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-cyan-500/30 shadow-2xl shadow-cyan-500/20"
            >
              {/* Header */}
              <div className="relative bg-slate-900/80 backdrop-blur-xl border-b border-cyan-500/20 p-4 sm:p-5 md:p-6">
                <motion.div
                  animate={{
                    opacity: [0.1, 0.2, 0.1],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"
                />
                
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg`}
                    >
                      <selectedCertificate.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                    </motion.div>
                    <div>
                      <h3 className={`${selectedCertificate.color} text-xl sm:text-2xl md:text-3xl font-bold mb-1`}>
                        {selectedCertificate.title}
                      </h3>
                      <p className="text-gray-400 text-xs sm:text-sm md:text-base">
                        {selectedCertificate.description}
                      </p>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedCertificate(null)}
                    className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-slate-700/50 border border-cyan-500/30 flex items-center justify-center text-cyan-400 hover:bg-slate-700 transition-all flex-shrink-0"
                  >
                    <X className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  </motion.button>
                </div>
              </div>

              {/* Certificate Image */}
              <div className="relative bg-slate-900/50 p-4 sm:p-6 md:p-8 max-h-[60vh] sm:max-h-[70vh] overflow-auto">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="relative rounded-xl sm:rounded-2xl overflow-hidden border-2 border-cyan-500/30 shadow-2xl"
                >
                  <img
                    src={selectedCertificate.certificate}
                    alt={`${selectedCertificate.title} Certificate`}
                    className="w-full h-auto"
                  />
                  
                  {/* Shimmer effect */}
                  <motion.div
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear', repeatDelay: 2 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
                  />
                </motion.div>
              </div>

              {/* Footer with Actions */}
              <div className="relative bg-slate-900/80 backdrop-blur-xl border-t border-cyan-500/20 p-4 sm:p-5 md:p-6">
                <motion.div
                  animate={{
                    opacity: [0.1, 0.2, 0.1],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10"
                />
                
                <div className="relative">
                  <motion.a
                    href={selectedCertificate.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(6, 182, 212, 0.5)' }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm sm:text-base font-semibold shadow-lg shadow-cyan-500/50 flex items-center justify-center gap-2 relative overflow-hidden group"
                  >
                    <motion.div
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    />
                    <Eye className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" />
                    <span className="relative z-10">Open in New Tab</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Skills;