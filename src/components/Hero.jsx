import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Mail, Linkedin, Github, Instagram, ExternalLink, 
  Download, ChevronDown, Code, 
  Database, Layers, Server, X, Eye, FileText
} from 'lucide-react';

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'HELLO, I\'M';
  
  const [showResumeModal, setShowResumeModal] = useState(false);
  const mousePosition = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef(null);
  
  // Decrypted text states
  const [decryptedText, setDecryptedText] = useState('');
  const [isDecrypting, setIsDecrypting] = useState(false);
  const softwareDeveloper = 'Software Developer';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

  // Check if mobile for performance
  const isMobile = useRef(false);

  useEffect(() => {
    isMobile.current = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    // Start with scrambled text
    const initialScramble = softwareDeveloper.split('')
      .map(() => characters[Math.floor(Math.random() * characters.length)])
      .join('');
    setDecryptedText(initialScramble);
    
    // Start typing animation
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        // Start decryption animation
        setTimeout(() => {
          setIsDecrypting(true);
          startDecryption();
        }, 300);
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    // Optimized mouse tracking - only on desktop
    if (!isMobile.current) {
      let lastUpdate = 0;
      const updateRate = 16; // ~60fps
      
      const handleMouseMove = (e) => {
        const now = Date.now();
        if (now - lastUpdate >= updateRate) {
          mousePosition.current = { x: e.clientX, y: e.clientY };
          lastUpdate = now;
        }
      };
      
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        clearInterval(typingInterval);
        clearInterval(cursorInterval);
      };
    }

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  const startDecryption = () => {
    let iterations = 0;
    const totalIterations = softwareDeveloper.length;
    
    const interval = setInterval(() => {
      setDecryptedText(prev => 
        softwareDeveloper.split('')
          .map((_, index) => {
            if (index < iterations) {
              return softwareDeveloper[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join('')
      );

      if (iterations >= totalIterations) {
        clearInterval(interval);
        setTimeout(() => {
          setIsDecrypting(false);
        }, 500);
      }
      iterations += 0.5;
    }, 60);
  };

  const techIcons = [
    { Icon: Code, position: 'top-[15%] left-[8%]', delay: 0 },
    { Icon: Database, position: 'top-[25%] right-[12%]', delay: 0.5 },
    { Icon: Layers, position: 'bottom-[30%] left-[10%]', delay: 1 },
    { Icon: Server, position: 'bottom-[25%] right-[8%]', delay: 1.5 },
  ];

  const socialLinks = [
    { Icon: Linkedin, href: 'https://linkedin.com/in/mohammadkaif-mulla', label: 'LinkedIn', color: '#0A66C2' },
    { Icon: Github, href: 'https://github.com/kaifmulla3335', label: 'GitHub', color: '#FFFFFF' },
    { Icon: Mail, href: 'mailto:kaifmulla3335@gmail.com', label: 'Email', color: '#06B6D4' },
    { Icon: Instagram, href: 'https://www.instagram.com/kaif_mulla_3335', label: 'Instagram', color: '#E4405F' }
  ];

  const handleResumeClick = () => setShowResumeModal(true);
  
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/src/assets/Mohammadkaif Mulla Resume.pdf';
    link.download = 'Mohammadkaif_Mulla_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewResume = () => {
    window.open('/src/assets/Mohammadkaif Mulla Resume.pdf', '_blank');
  };

  return (
    <>
      <section 
        id="home" 
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20 px-3 sm:px-4 md:px-6"
      >
        {/* Optimized Background Effects - Reduced on mobile */}
        {!isMobile.current && (
          <>
            {/* Floating Orbs - Reduced intensity */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
                x: [0, 30, 0],
                y: [0, 20, 0],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-10 sm:top-20 left-5 sm:left-10 md:left-20 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-cyan-500/10 rounded-full blur-2xl"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.3, 0.2],
                x: [0, -30, 0],
                y: [0, -20, 0],
              }}
              transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 md:right-20 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-blue-500/10 rounded-full blur-2xl"
            />
          </>
        )}

        {/* Floating Tech Icons - Only on large screens */}
        {!isMobile.current && techIcons.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.2, 0.4, 0.2],
              scale: 1,
              y: [0, -15, 0],
            }}
            transition={{
              opacity: { duration: 4, repeat: Infinity, delay: item.delay },
              scale: { duration: 0.5, delay: item.delay },
              y: { duration: 6, repeat: Infinity, delay: item.delay },
            }}
            className={`hidden xl:block absolute ${item.position} text-cyan-400/40`}
          >
            <item.Icon className="w-8 h-8 lg:w-10 lg:h-10" />
          </motion.div>
        ))}

        {/* Main Content */}
        <motion.div
          style={{ y, opacity, scale }}
          className="relative z-10 text-center w-full max-w-6xl mx-auto"
        >
          {/* Typing Animation Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-3 sm:mb-4 md:mb-6"
          >
            <div className="text-cyan-400 text-xs sm:text-sm md:text-base font-mono tracking-widest">
              {typedText}
              {showCursor && <span className="text-cyan-400 animate-pulse">|</span>}
            </div>
          </motion.div>

          {/* Premium Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 sm:mb-6 md:mb-8 leading-tight relative px-2"
          >
            <motion.span
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              className="inline-block bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-500 bg-[length:200%_auto] bg-clip-text text-transparent font-black tracking-tight"
              style={{
                fontSize: 'clamp(2rem, 8vw, 5rem)',
                textShadow: '0 0 60px rgba(6, 182, 212, 0.2)',
                lineHeight: '1.1',
              }}
            >
              Kaif Mulla
            </motion.span>
            
            {/* Subtle shimmer effect */}
            {!isMobile.current && (
              <motion.div
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear', repeatDelay: 3 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
                style={{
                  maskImage: 'linear-gradient(to right, transparent, black, transparent)',
                }}
              />
            )}
          </motion.h1>

          {/* Attractive Line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-1 mx-auto rounded-full mb-4 sm:mb-6 md:mb-8 max-w-md overflow-hidden group"
          >
            {/* Main animated line */}
            {!isMobile.current && (
              <motion.div
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent z-10"
              />
            )}
            
            {/* Static gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600" />
            
            {/* Subtle glow */}
            <motion.div
              animate={{
                opacity: [0.3, 0.5, 0.3],
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 blur-sm"
            />
          </motion.div>

          {/* Role & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 sm:mb-8 md:mb-10 px-2 min-h-[3rem] sm:min-h-[3.5rem] md:min-h-[4rem]"
          >
            <motion.div 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 md:mb-5 font-mono"
              style={{
                textShadow: isDecrypting 
                  ? '0 0 20px rgba(6, 182, 212, 0.8)' 
                  : '0 0 15px rgba(203, 213, 225, 0.4)',
                transition: 'text-shadow 0.3s ease',
              }}
            >
              <span className={`bg-gradient-to-r from-slate-200 via-slate-50 to-slate-300 bg-clip-text text-transparent ${
                isDecrypting ? 'text-cyan-300' : ''
              }`}>
                {decryptedText}
                {isDecrypting && <span className="text-cyan-400 animate-pulse ml-1">▊</span>}
              </span>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="text-sm sm:text-base md:text-lg text-gray-300 max-w-xl mx-auto"
            >
              Hands-on experience building live, production-level web applications.
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-5 mb-8 sm:mb-10 md:mb-12 px-3"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(6, 182, 212, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm sm:text-base shadow-lg shadow-cyan-500/30 transition-all flex items-center justify-center gap-2 relative overflow-hidden group"
            >
              {!isMobile.current && (
                <motion.div
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
                />
              )}
              <span className="relative z-10">View Projects</span>
              <ExternalLink className="w-4 h-4 relative z-10" />
            </motion.a>
            
            <motion.button
              onClick={handleResumeClick}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(6, 182, 212, 0.08)' }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-full border-2 border-cyan-500/40 text-cyan-400 font-semibold text-sm sm:text-base transition-all flex items-center justify-center gap-2 relative overflow-hidden group backdrop-blur-sm"
            >
              <motion.div
                className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 transition-all"
              />
              <span className="relative z-10">View Resume</span>
              <FileText className="w-4 h-4 relative z-10" />
            </motion.button>
          </motion.div>

          {/* Social Links - UPDATED TO MATCH FOOTER EFFECTS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex items-center justify-center gap-3 sm:gap-4 md:gap-5 flex-wrap mb-8"
          >
            {socialLinks.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + (i * 0.1), type: 'spring', stiffness: 200 }}
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
                    <social.Icon className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6" />
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

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2"
          >
            <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-cyan-400 opacity-70" />
          </motion.div>
        </motion.div>

        {/* Gradient Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 md:h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
      </section>

      {/* Resume Modal */}
      <AnimatePresence>
        {showResumeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm px-3 sm:px-4"
            onClick={() => setShowResumeModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 max-w-sm sm:max-w-md w-full border-2 border-cyan-500/30 shadow-2xl shadow-cyan-500/20 relative"
            >
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowResumeModal(false)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-700/50 border border-cyan-500/30 flex items-center justify-center text-cyan-400 hover:bg-slate-700 transition-all"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>

              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/50"
              >
                <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </motion.div>

              <h3 className="text-xl sm:text-2xl font-bold text-center mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Resume Options
              </h3>
              <p className="text-gray-400 text-center mb-6 sm:mb-8 text-xs sm:text-sm px-2">
                Choose how you'd like to access the resume
              </p>

              <div className="space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: '0 0 25px rgba(6, 182, 212, 0.4)' }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleViewResume}
                  className="w-full px-5 sm:px-6 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm sm:text-base shadow-lg shadow-cyan-500/50 flex items-center justify-center gap-2 sm:gap-3 relative overflow-hidden group"
                >
                  {!isMobile.current && (
                    <motion.div
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
                    />
                  )}
                  <Eye className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" />
                  <span className="relative z-10">View Resume</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(6, 182, 212, 0.08)' }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleDownloadResume}
                  className="w-full px-5 sm:px-6 py-3 sm:py-4 rounded-xl border-2 border-cyan-500/40 text-cyan-400 font-semibold text-sm sm:text-base flex items-center justify-center gap-2 sm:gap-3 hover:bg-cyan-500/10 transition-all"
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Download Resume</span>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hero;