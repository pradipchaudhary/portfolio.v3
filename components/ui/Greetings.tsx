"use client";

import { motion } from "motion/react";
import Namaste from "../shared/Namaste";
import { GreetingHandAnimation, letter } from "@/lib/animations";

export default function Greetings() {
  const text = "Namaste";
  return (
    <div className="relative flex flex-col sm:items-center sm:justify-center mb-7 ml-[10px] p-2.5 transform -rotate-1 transition-all duration-300 sm:ml-0 sm:mx-auto">
      {/*  */}
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-white/90 dark:bg-white/[0.02] backdrop-blur-md rounded-lg shadow-[0_3px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_5px_10px_rgba(0,0,0,0.4)] border-dotted border-green-500 dark:border-green-400/50 transform rotate-1 hover:rotate-0 transition-all duration-300 overflow-hidden"></div>

      {/* Content */}
      <div className="relative flex items-center gap-2 z-10">
        <motion.div
          variants={GreetingHandAnimation}
          initial="hidden"
          animate="visible"
        >
          <Namaste className="h-13 w-13 fill-current text-foreground" />
        </motion.div>

        <motion.h1
          className="text-[2.25rem] text-gray-700 font-thin dark:text-zinc-300 transition-colors duration-300 animate-fill"
          aria-label={text}
        >
          {text}
        </motion.h1>
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
  );
}
