import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Code, Briefcase, Award } from 'lucide-react';
import profileImg from "../assets/my_pic.jpg";


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const About = () => {
  // Calculate internship experience automatically - returns just the number
  const calculateExperience = useMemo(() => {
    const startDate = new Date(2025, 8, 1); // Sep 1, 2025 (month is 0-indexed)
    const endDate = new Date(2026, 6, 31); // July 31, 2026

    const today = new Date();
    const currentDate = today < endDate ? today : endDate; // Cap at end date

    const diffTime = Math.abs(currentDate - startDate);
    const diffMonths = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30.44)); // Average month length

    return diffMonths;
  }, []);

  const stats = [
    {
      icon: Code,
      value: '8+',
      label: 'Technologies Used',
      color: 'from-cyan-500 to-blue-500',
      showPlus: true
    },
    {
      icon: Briefcase,
      value: calculateExperience,
      label: 'Industry Experience',
      color: 'from-blue-500 to-indigo-500',
      showPlus: true,
      smallLabel: true // This will trigger the small "Months" display
    },
    {
      icon: Award,
      value: '3+',
      label: 'Achievements',
      color: 'from-indigo-500 to-purple-500',
      showPlus: true
    },
  ];

  return (
    <section
      id="about"
      className="relative py-8 sm:py-10 md:py-12 lg:py-16 px-3 sm:px-4 md:px-6"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '4rem' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 w-16 sm:w-20 mx-auto bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 md:gap-6 lg:gap-8">
          {/* IMAGE - Optimized to reduce blank space */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 flex justify-center"
          >
            <div className="relative w-full max-w-[220px] sm:max-w-[260px] md:max-w-[280px] lg:max-w-[320px]">
              {/* Rotating Gradient Background */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-2 sm:-inset-2.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 blur-lg opacity-50"
              />

              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="relative rounded-xl sm:rounded-2xl overflow-hidden border-2 border-cyan-500/40 shadow-xl shadow-cyan-500/30"
              >
                <div className="relative overflow-hidden aspect-[3/4]">
                  <img
                    src={profileImg}
                    alt="Kaif Mulla"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center 25%' }}
                  />

                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
                </div>

                {/* STATUS Badge */}
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                  <motion.div
                    className="relative overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 shadow-lg"
                    whileHover={{ scale: 1.04 }}
                  >
                    <motion.span
                      animate={{ x: ['-120%', '120%'] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
                      className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    />
                    <div className="relative flex items-center gap-2 sm:gap-2.5">
                      <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                        <span className="relative inline-flex h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-green-500" />
                      </span>
                      <div className="leading-tight">
                        <p className="text-xs font-semibold text-white">
                          Available for Work
                        </p>
                        <p className="text-[10px] text-cyan-300/90">
                          Open to new opportunities
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-3 flex flex-col gap-3 sm:gap-4"
          >
            {/* ABOUT Text - Reduced padding */}
            <motion.div
              variants={item}
              whileHover={{ scale: 1.005, boxShadow: '0 8px 30px rgba(6, 182, 212, 0.15)' }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-xl sm:rounded-xl p-4 sm:p-5 md:p-6 border border-cyan-500/25 shadow-lg relative overflow-hidden group"
            >
              {/* Hover glow effect */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/8 to-blue-500/0 transition-opacity duration-500"
              />

              <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed relative z-10">
                Final-year <span className="text-cyan-400 font-semibold">B.Tech Computer Science</span> student and{' '}
                <span className="text-blue-400 font-semibold">Software Developer</span> with hands-on experience
                building and maintaining live, production-level web applications. Currently working as a{' '}
                <span className="text-indigo-400 font-semibold">Junior Software Developer Intern</span> at{' '}
                <span className="text-cyan-400 font-semibold">StarSoftech Pvt. Ltd.</span>, contributing to an
                industry-grade product using{' '}
                <span className="text-cyan-400 font-semibold">
                  React, TypeScript, Java, Spring Boot, and PostgreSQL
                </span>. Strong in frontend development, API integration, and writing clean, scalable code, with a quick
                learning mindset and solid problem-solving and teamwork skills.
              </p>
            </motion.div>

            {/* STATS - Made more compact */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  variants={item}
                  whileHover={{ y: -3, scale: 1.04 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-lg sm:rounded-lg px-3.5 sm:px-4 py-3 sm:py-3.5 border border-cyan-500/20 shadow-md relative overflow-hidden group"
                >
                  {/* Hover effect */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-transparent"
                  />

                  <div className="relative z-10 flex items-center gap-2 sm:gap-2.5">
                    <motion.div
                      className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-md sm:rounded-md bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-md`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <stat.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                    </motion.div>
                    <div>
                      {/* Check if this is the experience stat with small label */}
                      {stat.smallLabel ? (
                        <div>
                          <div className="flex items-baseline gap-0.5">
                            <span className="text-base sm:text-lg md:text-xl font-semibold text-white">
                              {stat.value}
                            </span>
                            <span className="text-base sm:text-lg md:text-xl font-semibold text-white">+</span>
                          </div>
                          <p className="text-[10px] sm:text-[11px] text-gray-400 leading-tight mt-0.5">
                            Months Industry Experience
                          </p>
                        </div>
                      ) : (
                        <div>
                          <p className="text-base sm:text-lg md:text-xl font-semibold text-white leading-tight">
                            {stat.value}
                          </p>
                          <p className="text-xs text-gray-400 leading-tight mt-0.5">
                            {stat.label}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CONTACT INFO - Made more compact */}
            <motion.div variants={item} className="flex flex-col gap-2.5 sm:gap-3">
              {/* Location */}
              <motion.div
                whileHover={{ scale: 1.015, x: 3 }}
                className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-lg sm:rounded-lg px-4 py-2.5 sm:py-3 border border-cyan-500/20 relative overflow-hidden group"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-blue-500/0"
                />

                <div className="relative z-10 flex items-center gap-2.5 sm:gap-3">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                  </motion.div>
                  <p className="text-sm sm:text-base text-white break-words">
                    Kolhapur, Maharashtra, India
                  </p>
                </div>
              </motion.div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                <motion.div
                  whileHover={{ scale: 1.015, y: -2 }}
                  className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-lg sm:rounded-lg px-4 py-2.5 sm:py-3 border border-cyan-500/20 relative overflow-hidden group"
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-blue-500/0"
                  />

                  <div className="relative z-10 flex items-center gap-2.5 sm:gap-3">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                    </motion.div>
                    <p className="text-sm sm:text-base text-white break-all">
                      +91 8624913335
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.015, y: -2 }}
                  className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-lg sm:rounded-lg px-4 py-2.5 sm:py-3 border border-cyan-500/20 relative overflow-hidden group"
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-blue-500/0"
                  />

                  <div className="relative z-10 flex items-center gap-2.5 sm:gap-3">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                    </motion.div>
                    <p className="text-xs sm:text-sm text-white break-all">
                      kaifmulla3335@gmail.com
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;