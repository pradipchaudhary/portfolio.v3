"use client";

import { motion, AnimatePresence } from 'framer-motion';
import Namaste from './Namaste';

export default function Greetings() {
  return (
    <div className="relative flex flex-col sm:items-center sm:justify-center mb-7 ml-[10px] p-2.5 transform -rotate-1 transition-all duration-300 sm:ml-0 sm:mx-auto">
      {/*  */}
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md rounded-lg shadow-[0_3px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_6px_16px_rgba(0,0,0,0.4)] border-dotted border-green-500 dark:border-green-400/50 transform rotate-1 hover:rotate-0 transition-all duration-300 overflow-hidden">
      </div>

      {/* Content */}
      <div className="relative flex items-center gap-2 z-10">

        <motion.div
          initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
        >
          <Namaste className="h-13 w-13 fill-current text-foreground text-gray-700 dark:text-zinc-500" />
        </motion.div>

        <span className="text-[2.25rem] text-gray-700 font-thin dark:text-zinc-500 transition-colors duration-300 animate-fill">
          Namaste
        </span>
      </div>

      {/* Top Pin Dot */}
      <div className="absolute top-[5px] right-1 sm:right-1">
        <div className="w-2 h-2 bg-red-500 rounded-full shadow-md relative dark:bg-zinc-400 dark:shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/20 to-transparent dark:from-white/10"></div>
        </div>
      </div>

      {/* Bottom Pin Dot */}
      <div className="absolute bottom-[5px] left-1 sm:left-1">
        <div className="w-2 h-2 bg-red-500 rounded-full shadow-md relative dark:bg-zinc-400 dark:shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/20 to-transparent dark:from-white/10"></div>
        </div>
      </div>

    </div>
  )
}
