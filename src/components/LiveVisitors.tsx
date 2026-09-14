'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users } from 'lucide-react';

export default function LiveVisitors() {
  const [visitors, setVisitors] = useState(12);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Randomize initial visitor count between 8 and 24
    setVisitors(Math.floor(Math.random() * 16) + 8);
    
    // Show badge after 2 seconds
    const initialTimer = setTimeout(() => setIsVisible(true), 2000);

    // Randomly fluctuate the visitor count every 5-15 seconds
    const interval = setInterval(() => {
      setVisitors((prev) => {
        const change = Math.floor(Math.random() * 3) - 1; // -1, 0, or +1
        const newValue = prev + change;
        return newValue < 5 ? 5 : (newValue > 35 ? 35 : newValue);
      });
    }, Math.random() * 10000 + 5000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: -20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-6 left-6 z-40 bg-white shadow-[0_0_30px_rgba(59,130,246,0.15)] border border-slate-100 rounded-full py-2.5 px-4 flex items-center gap-3 cursor-default hover:scale-105 transition-transform"
        >
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </div>
          <p className="text-sm font-semibold text-slate-700 flex items-center gap-2">
            <Users className="w-4 h-4 text-blue-500" />
            {visitors} viewing profile
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
