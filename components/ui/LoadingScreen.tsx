"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Namaste from "./Namaste";

export default function LoadingScreen({ onLoadingComplete }: { onLoadingComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 4500);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-colors duration-700">
      <div className="flex flex-col items-center gap-12">
        {/* Big Signature - Home Page Style Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <motion.div
            initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          >
            <Namaste className="w-56 h-56 sm:w-72 sm:h-72 fill-current text-foreground" />
          </motion.div>
        </motion.div>

        {/* Big Namaste text in bottom section */}
        <div className="h-20 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20, letterSpacing: "1em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "0.25em" }}
            transition={{
              duration: 1.2,
              delay: 1.8,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="text-4xl sm:text-6xl font-light italic serif text-foreground/60 lowercase tracking-[0.25em]"
          >
            Namaste
          </motion.h1>
        </div>
      </div>

      {/* Subtle Progress Bar */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-foreground/5 overflow-hidden">
        <motion.div
          className="h-full bg-foreground/20"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 4.5, ease: "linear" }}
        />
      </div>
    </div>
  );
}
