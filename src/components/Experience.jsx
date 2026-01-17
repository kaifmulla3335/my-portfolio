import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle, Zap } from "lucide-react";
import { FaReact, FaJava, FaGit } from "react-icons/fa";
import {
  SiTypescript,
  SiVite,
  SiSpringboot,
  SiPostgresql,
  SiReactquery,
  SiI18Next,
  SiSwagger,
} from "react-icons/si";

const techStack = [
  { name: "React", icon: <FaReact />, color: "#61DAFB" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { name: "Vite", icon: <SiVite />, color: "#646CFF" },
  { name: "Java", icon: <FaJava />, color: "#007396" },
  { name: "Spring Boot", icon: <SiSpringboot />, color: "#6DB33F" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
  { name: "React Query", icon: <SiReactquery />, color: "#FF4154" },
  { name: "i18next", icon: <SiI18Next />, color: "#26A69A" },
  { name: "Git", icon: <FaGit />, color: "#F05032" },
  { name: "Swagger", icon: <SiSwagger />, color: "#85EA2D" },
];

const workPoints = [
  "Developed and maintained Admin & Super Admin dashboards for a subscription-based SaaS platform",
  "Built responsive, production-ready UIs using React, TypeScript, and Vite",
  "Integrated frontend with Spring Boot REST APIs and handled secure data flow",
  "Migrated state management from Context API to React Query for better performance",
  "Implemented i18n multi-language support for global usability",
];

const impactPoints = [
  "Worked on a live production system for organization, employee, and subscription management",
  "Contributed to real business modules including reports, packages, and admin workflows",
  "Improved frontend scalability, maintainability, and API-driven architecture",
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-4 md:px-6"
    >
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent mb-3 sm:mb-4">
            Work Experience
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '5rem' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" 
          />
        </motion.div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* LEFT BOX - Company Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(6,182,212,0.25)"
            }}
            className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-cyan-500/30 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7 space-y-5 sm:space-y-6 relative overflow-hidden group"
          >
            {/* Animated background glow */}
            <motion.div
              animate={{ 
                opacity: [0.1, 0.2, 0.1],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
            />

            {/* Role Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 relative z-10">
              <div className="flex gap-3 sm:gap-4">
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg flex-shrink-0"
                >
                  <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-1">
                    Junior Software Developer Intern
                  </h3>
                  <p className="text-cyan-400 text-sm sm:text-base">
                    StarSoftech Pvt. Ltd • Product: SalanaPay
                  </p>
                </div>
              </div>

              {/* Currently Working Badge */}
              <motion.div
                whileHover={{ scale: 1.08 }}
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(34,197,94,0.4)",
                    "0 0 14px rgba(34,197,94,0.8)",
                    "0 0 0px rgba(34,197,94,0.4)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-green-500/15 border border-green-500/40 text-green-400 text-xs sm:text-sm font-semibold whitespace-nowrap self-start"
              >
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Currently Working
              </motion.div>
            </div>

            {/* Meta Information */}
            <div className="flex flex-wrap gap-3 sm:gap-4 text-sm text-gray-400 relative z-10">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                <span className="text-xs sm:text-sm">Sept 2025 – Present (11 Months)</span>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center gap-2"
              >
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                <span className="text-xs sm:text-sm">Hubballi, Karnataka</span>
              </motion.div>
            </div>

            {/* Summary */}
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed relative z-10">
              Working on a{" "}
              <span className="text-cyan-400 font-semibold">
                live, production-level SaaS application
              </span>{" "}
              focused on subscription-based organization and employee management,
              contributing to scalable frontend architecture and real-world
              business workflows.
            </p>

            {/* Tech Stack */}
            <div className="relative z-10">
              <p className="text-sm sm:text-base font-bold text-indigo-100 tracking-wide mb-3 sm:mb-4">
                Tech Stack Used in Production
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                {techStack.map((tech, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, type: 'spring', stiffness: 300 }}
                    whileHover={{ 
                      scale: 1.15, 
                      y: -4,
                      boxShadow: `0 10px 20px ${tech.color}40`
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full bg-slate-800/70 border border-cyan-500/25 text-cyan-300 text-xs sm:text-sm cursor-pointer backdrop-blur-sm group"
                  >
                    <span className="text-base sm:text-lg" style={{ color: tech.color }}>
                      {tech.icon}
                    </span>
                    <span className="group-hover:text-white transition-colors">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT BOX - Work Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(6,182,212,0.25)"
            }}
            className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-cyan-500/30 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7 space-y-5 sm:space-y-6 relative overflow-hidden group"
          >
            {/* Animated background glow */}
            <motion.div
              animate={{ 
                opacity: [0.1, 0.2, 0.1],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl"
            />

            {/* Work Points */}
            <div className="space-y-3 sm:space-y-4 relative z-10">
              <h4 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                </motion.div>
                Key Responsibilities
              </h4>
              {workPoints.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ x: 5, backgroundColor: "rgba(6, 182, 212, 0.05)" }}
                  className="flex gap-3 text-sm sm:text-base text-gray-300 p-2 sm:p-3 rounded-lg transition-all duration-300"
                >
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Impact Section */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-slate-900/60 border border-cyan-500/25 rounded-xl sm:rounded-2xl p-4 sm:p-5 relative z-10 overflow-hidden group"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5"
              />
              
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 relative z-10">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                </motion.div>
                <p className="text-base sm:text-lg font-bold text-cyan-300">
                  Impact & Scope
                </p>
              </div>
              <ul className="list-disc list-inside text-sm sm:text-base text-gray-300 space-y-1.5 sm:space-y-2 relative z-10">
                {impactPoints.map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ x: 5, color: "#06B6D4" }}
                    className="transition-all duration-300"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;