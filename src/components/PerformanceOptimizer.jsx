import React, { useEffect } from 'react';

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Detect device type and apply optimizations
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isMobile || prefersReducedMotion) {
      // Add a class to body for CSS optimizations
      document.body.classList.add('performance-mode');
    }

    // Request animation frame for better performance
    let rafId;
    const update = () => {
      // Performance monitoring can go here
      rafId = requestAnimationFrame(update);
    };
    rafId = requestAnimationFrame(update);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      document.body.classList.remove('performance-mode');
    };
  }, []);

  return null;
};

export default PerformanceOptimizer;