import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/in/mohammadkaif-mulla', label: 'LinkedIn', color: '#0A66C2' },
    { icon: Github, href: 'https://github.com/kaifmulla3335', label: 'GitHub', color: '#FFFFFF' },
    { icon: Mail, href: 'mailto:kaifmulla3335@gmail.com', label: 'Email', color: '#06B6D4' },
    { icon: Instagram, href: 'https://www.instagram.com/kaif_mulla_3335', label: 'Instagram', color: '#E4405F' }
  ];

  return (
    <footer className="relative py-8 sm:py-10 md:py-12 px-3 sm:px-4 md:px-6 bg-slate-900/90 border-t border-cyan-500/20 overflow-hidden mt-auto">
      {/* Animated Background Gradient */}
      <motion.div
        animate={{
          opacity: [0.05, 0.1, 0.05],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 via-blue-500/5 to-transparent pointer-events-none"
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          {/* Name with Gradient Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-5 sm:mb-6"
          >
            <motion.h3 
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-[length:200%_auto] bg-clip-text text-transparent mb-2"
            >
              Mohammadkaif Mulla
            </motion.h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-200 font-medium">Software Developer</p>
          </motion.div>

          {/* Premium Social Links - Hero Style */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-4 sm:gap-5 md:gap-6 mb-6 sm:mb-8 flex-wrap"
          >
            {socialLinks.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, type: 'spring', stiffness: 200 }}
                whileHover={{ 
                  scale: 1.15,
                  y: -8,
                  rotate: 5
                }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                {/* Background Circle with Premium Effect */}
                <motion.div
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: `0 10px 40px ${social.color}60`,
                    borderColor: social.color,
                    backgroundColor: `${social.color}15`
                  }}
                  className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-slate-800/50 border-2 border-cyan-500/30 flex items-center justify-center transition-all duration-300 relative overflow-hidden backdrop-blur-sm"
                >
                  {/* Animated Background Glow */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 1, scale: 2 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 blur-xl"
                    style={{ backgroundColor: `${social.color}30` }}
                  />
                  
                  {/* Icon with Rotation */}
                  <motion.div
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 360,
                      color: social.color
                    }}
                    transition={{ duration: 0.5 }}
                    className="relative z-10 text-gray-400 transition-colors duration-300"
                  >
                    <social.icon className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  </motion.div>
                </motion.div>
                
                {/* Outer Glow Ring on Hover */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1.3 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 rounded-full blur-lg pointer-events-none"
                  style={{ 
                    background: `radial-gradient(circle, ${social.color}40 0%, transparent 70%)` 
                  }}
                />
                
                {/* Premium Tooltip */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="hidden sm:block absolute -bottom-11 md:-bottom-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50"
                >
                  <div 
                    className="px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 rounded-lg bg-slate-900/95 border-2 whitespace-nowrap shadow-xl backdrop-blur-sm"
                    style={{ borderColor: `${social.color}80` }}
                  >
                    <span 
                      className="text-xs sm:text-sm font-semibold"
                      style={{ color: social.color }}
                    >
                      {social.label}
                    </span>
                  </div>
                </motion.div>
              </motion.a>
            ))}
          </motion.div>

          {/* Animated Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent mb-5 sm:mb-6"
          />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-gray-300 text-xs sm:text-sm md:text-base font-medium">
              © {currentYear} Mohammadkaif Mulla. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Corner Decorations */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute -bottom-10 -right-10 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl pointer-events-none"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-10 -left-10 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-2xl pointer-events-none"
      />
    </footer>
  );
};

export default Footer;