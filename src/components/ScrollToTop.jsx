import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isNearFooter, setIsNearFooter] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show button after scrolling 500px (increased for better UX)
      setIsVisible(scrolled > 500);
      
      // Check if near footer (within 150px of bottom)
      const distanceFromBottom = documentHeight - (scrolled + windowHeight);
      setIsNearFooter(distanceFromBottom < 150);
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          toggleVisibility();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            y: 0,
            bottom: isNearFooter ? '120px' : '30px' // Smarter positioning
          }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ 
            type: 'spring', 
            stiffness: 300, 
            damping: 25,
            duration: 0.3
          }}
          whileHover={{ 
            scale: 1.1, 
            y: -5,
            boxShadow: '0 10px 30px rgba(6, 182, 212, 0.4)'
          }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          style={{ 
            position: 'fixed',
            right: '25px',
            zIndex: 9998, // Lower than navbar
          }}
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-cyan-500/90 to-blue-600/90 text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 flex items-center justify-center group relative overflow-hidden backdrop-blur-sm border border-cyan-400/30"
          aria-label="Scroll to top"
        >
          {/* Subtle background shimmer */}
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          />
          
          {/* Arrow icon with subtle bounce */}
          <motion.div
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 relative z-10" />
          </motion.div>
          
          {/* Pulsing ring - subtle effect */}
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0, 0.3]
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="absolute inset-0 rounded-full border border-cyan-300/50"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;