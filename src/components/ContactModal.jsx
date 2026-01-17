import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Linkedin, Github } from "lucide-react";

const ContactModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm flex items-center justify-center px-3 sm:px-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.85, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.85, opacity: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-md rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-cyan-500/30 shadow-2xl shadow-cyan-500/20 p-5 sm:p-6 md:p-7 relative overflow-hidden"
        >
          {/* Animated background glow */}
          <motion.div
            animate={{ 
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-20 -right-20 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
          />

          {/* Close Button */}
          <motion.button
            onClick={onClose}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-700/50 border border-cyan-500/30 flex items-center justify-center text-cyan-400 hover:bg-slate-700 transition-all z-20"
          >
            <X className="w-5 h-5 sm:w-5 sm:h-5" />
          </motion.button>

          {/* Content */}
          <div className="relative z-10">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center mb-6 sm:mb-7"
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Let's Work Together
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Open to full-time roles, internships, and freelance work
              </p>
            </motion.div>

            {/* Contact Options */}
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-7">
              <motion.a
                href="mailto:kaifmulla3335@gmail.com"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-slate-800/60 border border-cyan-500/30 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all group"
              >
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-cyan-500/50 transition-shadow"
                >
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </motion.div>
                <span className="text-gray-200 text-sm sm:text-base group-hover:text-cyan-400 transition-colors">
                  kaifmulla3335@gmail.com
                </span>
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/mohammadkaif-mulla"
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-slate-800/60 border border-cyan-500/30 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all group"
              >
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-blue-600/50 transition-shadow"
                >
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </motion.div>
                <span className="text-gray-200 text-sm sm:text-base group-hover:text-cyan-400 transition-colors">
                  LinkedIn Profile
                </span>
              </motion.a>

              <motion.a
                href="https://github.com/kaifmulla3335"
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-slate-800/60 border border-cyan-500/30 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all group"
              >
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-gradient-to-br from-slate-700 to-slate-900 border border-white/20 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-white/20 transition-shadow"
                >
                  <Github className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </motion.div>
                <span className="text-gray-200 text-sm sm:text-base group-hover:text-cyan-400 transition-colors">
                  GitHub Profile
                </span>
              </motion.a>
            </div>

            {/* Status Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center"
            >
              <motion.span 
                animate={{ 
                  boxShadow: [
                    '0 0 0px rgba(34,197,94,0.4)',
                    '0 0 14px rgba(34,197,94,0.8)',
                    '0 0 0px rgba(34,197,94,0.4)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-green-500/20 border border-green-500/40 text-green-400 text-xs sm:text-sm font-semibold"
              >
                <motion.span 
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-green-400"
                />
                Available for Opportunities
              </motion.span>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ContactModal;