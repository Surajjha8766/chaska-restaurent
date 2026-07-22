import React from 'react';
import { motion } from 'motion/react';
import { Utensils } from 'lucide-react';

export const LoadingScreen: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      onAnimationComplete={() => {
        const el = document.getElementById('loading-screen');
        if (el) el.style.display = 'none';
      }}
      id="loading-screen"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#111111] text-white"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative flex items-center justify-center w-24 h-24 mb-6 rounded-full bg-[#1A1A1A] border border-[#FF6B00]/30 shadow-2xl glow-orange"
      >
        <Utensils className="w-10 h-10 text-[#FF6B00]" />
      </motion.div>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-3xl font-serif tracking-widest text-white uppercase"
      >
        CHASKA <span className="text-[#FF6B00]">.</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-2 text-xs tracking-widest uppercase text-gray-400"
      >
        Where Every Bite Creates Memories
      </motion.p>
    </motion.div>
  );
};
