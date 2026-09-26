"use client";

import { motion } from "motion/react";
import Namaste from "../shared/Namaste";
import { GreetingHandAnimation, letter } from "@/lib/animations";

export default function Greetings() {
  const text = "Namaste";
  return (
    <div className="relative flex flex-col sm:items-center sm:justify-center mb-7 ml-[10px] transform -rotate-1 transition-all duration-300 sm:ml-0 sm:mx-auto">
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
    </div>
  );
}
