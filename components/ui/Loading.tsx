'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const messages = [
  "Initializing System...",
  "Loading Modules...",
  "Optimizing Performance...",
  "Crafting UI Experience...",
  "Almost Ready..."
];

export default function PremiumLoader() {
  const [progress, setProgress] = useState(0);
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);

  // Progress simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setDone(true), 500);
          return 100;
        }
        return prev + 5;
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  // Message switch
  useEffect(() => {
    const msgInterval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 1200);

    return () => clearInterval(msgInterval);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-black"
        >
          <div className="text-center space-y-6 w-[300px]">

            {/* Name / Identity */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xl md:text-2xl font-semibold tracking-wide"
            >
              Pradip Chaudhary
            </motion.h1>

            {/* Role */}
            <p className="text-sm text-gray-500">
              Software Engineer
            </p>

            {/* Dynamic Message */}
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="text-sm"
            >
              {messages[index]}
            </motion.p>

            {/* Progress Bar */}
            <div className="w-full h-[4px] bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-black dark:bg-white"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: 'easeInOut' }}
              />
            </div>

            {/* Percentage */}
            <p className="text-xs text-gray-500">{progress}%</p>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}