import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Star } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'Bachelor of Technology (B.Tech)',
      field: 'Computer Science & Engineering',
      institution: 'D. Y. Patil Agriculture & Technical University, Kolhapur',
      duration: 'Nov 2022 – Sep 2026',
      status: 'Pursuing',
      grade: 'Current CGPA: 8.63',
      gradient: 'from-cyan-500 to-blue-600',
      achievements: ['Dean\'s List', 'Top 10% of Class']
    },
    {
      degree: 'Higher Secondary Education',
      field: 'Science (PCM + Electronics)',
      institution: 'New Model Junior College, Kolhapur',
      duration: 'Aug 2020 – Mar 2022',
      status: 'Completed',
      grade: 'Grade: A+',
      gradient: 'from-blue-500 to-indigo-600',
      achievements: ['Excellence in Mathematics', 'Science Fair Winner']
    },
    {
      degree: 'Secondary School (SSC)',
      field: 'General Education',
      institution: 'Ideal English School, Shiroli (P.U.), Kolhapur',
      duration: 'Jun 2009 – Mar 2020',
      status: 'Completed',
      grade: 'Grade: A+',
      gradient: 'from-indigo-500 to-purple-600',
      achievements: ['Academic Excellence', 'Sports Captain']
    }
  ];

  return (
    <section id="education">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none" />
      
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
              Education
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

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Timeline Line - Desktop */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="hidden md:block absolute left-1/2 top-0 w-1 bg-gradient-to-b from-cyan-500 via-blue-500 to-indigo-600 transform -translate-x-1/2 rounded-full"
          >
            <motion.div
              animate={{ 
                opacity: [0.5, 1, 0.5],
                boxShadow: ['0 0 10px rgba(6, 182, 212, 0.5)', '0 0 20px rgba(6, 182, 212, 1)', '0 0 10px rgba(6, 182, 212, 0.5)']
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-full bg-gradient-to-b from-cyan-500 via-blue-500 to-indigo-600"
            />
          </motion.div>

          {/* Mobile Timeline Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="md:hidden absolute left-4 sm:left-6 top-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-indigo-600 rounded-full"
          />

          {/* Education Cards */}
          <div className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex items-start md:items-center ${
                  index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                }`}
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.2, type: 'spring', stiffness: 200 }}
                  className="absolute left-4 sm:left-6 md:left-1/2 transform md:-translate-x-1/2 z-20"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br ${edu.gradient} flex items-center justify-center shadow-2xl relative`}
                  >
                    <motion.div
                      animate={{ 
                        scale: [1, 1.4, 1],
                        opacity: [0.5, 0, 0.5]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className={`absolute inset-0 rounded-full border-2 md:border-4 bg-gradient-to-br ${edu.gradient} opacity-50`}
                    />
                    <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white relative z-10" />
                  </motion.div>
                </motion.div>

                {/* Card */}
                <motion.div
                  whileHover={{ 
                    scale: 1.02, 
                    y: -5,
                    boxShadow: '0 20px 40px -12px rgba(6, 182, 212, 0.3)'
                  }}
                  className={`w-full md:w-[calc(50%-3rem)] ml-14 sm:ml-20 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-6 lg:pr-10' : 'md:ml-auto md:pl-6 lg:pl-10'
                  }`}
                >
                  <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-7 border border-cyan-500/30 shadow-2xl relative overflow-hidden group">
                    {/* Animated background */}
                    <motion.div
                      animate={{ 
                        opacity: [0.1, 0.25, 0.1],
                        scale: [1, 1.15, 1],
                        rotate: [0, 45, 0]
                      }}
                      transition={{ duration: 6, repeat: Infinity }}
                      className={`absolute ${index % 2 === 0 ? '-right-20' : '-left-20'} -top-20 w-40 sm:w-48 h-40 sm:h-48 bg-gradient-to-br ${edu.gradient} opacity-20 rounded-full blur-3xl pointer-events-none`}
                    />

                    <div className="relative z-10">
                      {/* Status and Year Badge */}
                      <div className="flex items-center justify-between mb-3 sm:mb-4 flex-wrap gap-2">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold ${
                            edu.status === 'Pursuing' 
                              ? 'bg-green-500/20 border-2 border-green-500/50 text-green-400 shadow-lg shadow-green-500/20'
                              : 'bg-blue-500/20 border-2 border-blue-500/50 text-blue-400 shadow-lg shadow-blue-500/20'
                          }`}
                        >
                          {edu.status === 'Pursuing' && (
                            <motion.div
                              animate={{ scale: [1, 1.3, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400 shadow-lg shadow-green-400/50"
                            />
                          )}
                          {edu.status}
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.15 + 0.3 }}
                          className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-gradient-to-r ${edu.gradient} text-white text-xs sm:text-sm font-bold`}
                        >
                          {edu.duration}
                        </motion.div>
                      </div>

                      {/* Title */}
                      <motion.h3 
                        className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1.5 sm:mb-2 group-hover:text-cyan-400 transition-colors"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.15 + 0.3 }}
                      >
                        {edu.degree}
                      </motion.h3>
                      
                      <motion.p 
                        className={`text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4 bg-gradient-to-r ${edu.gradient} bg-clip-text text-transparent`}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.15 + 0.4 }}
                      >
                        {edu.field}
                      </motion.p>

                      {/* Info Grid */}
                      <div className="space-y-2.5 sm:space-y-3 mb-4 sm:mb-5">
                        <motion.div 
                          className="flex items-start gap-2.5 sm:gap-3 text-sm sm:text-base group/item"
                          whileHover={{ x: 3 }}
                        >
                          <div className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg bg-gradient-to-br ${edu.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-gray-400 text-xs mb-0.5">Institution</p>
                            <p className="text-gray-200 font-medium leading-snug">{edu.institution}</p>
                          </div>
                        </motion.div>

                        <motion.div 
                          className="flex items-start gap-2.5 sm:gap-3 text-sm sm:text-base group/item"
                          whileHover={{ x: 3 }}
                        >
                          <div className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg bg-gradient-to-br ${edu.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-gray-400 text-xs mb-0.5">Duration</p>
                            <p className="text-gray-200 font-medium">{edu.duration}</p>
                          </div>
                        </motion.div>

                        <motion.div 
                          className="flex items-start gap-2.5 sm:gap-3 text-sm sm:text-base group/item"
                          whileHover={{ x: 3 }}
                        >
                          <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-gray-400 text-xs mb-0.5">Performance</p>
                            <p className="text-yellow-400 font-bold">{edu.grade}</p>
                          </div>
                        </motion.div>
                      </div>

                      {/* Achievements */}
                      <div className="pt-3 sm:pt-4 border-t border-cyan-500/20">
                        <p className="text-xs sm:text-sm text-gray-400 font-semibold mb-2 sm:mb-3 flex items-center gap-2">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                          >
                            ⭐
                          </motion.div>
                          Key Achievements
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {edu.achievements.map((achievement, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0, rotate: -90 }}
                              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.15 + 0.5 + i * 0.08, type: 'spring', stiffness: 150 }}
                              whileHover={{ scale: 1.05, y: -2 }}
                              className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-gradient-to-r ${edu.gradient} bg-opacity-20 border border-cyan-500/40 text-cyan-400 text-xs sm:text-sm font-semibold shadow-lg backdrop-blur-sm`}
                            >
                              {achievement}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;