import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CursorEffect() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [dots, setDots] = useState([]);
  
  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) return;
    
    let positions = [];
    const dotCount = 8;
    
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      setMousePos({ x, y });
      
      positions.unshift({ x, y });
      if (positions.length > dotCount) {
        positions = positions.slice(0, dotCount);
      }
      setDots([...positions]);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) return null;
  
  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {dots.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-cyan-500"
          initial={{ x: pos.x, y: pos.y, opacity: 0 }}
          animate={{ 
            x: pos.x - 4, 
            y: pos.y - 4,
            opacity: 1 - (i / dots.length) * 0.8
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          style={{
            width: 8,
            height: 8,
            filter: 'blur(0.5px)',
            boxShadow: '0 0 10px rgba(6, 182, 212, 0.5)',
          }}
        />
      ))}
    </div>
  );
}