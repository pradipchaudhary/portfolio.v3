"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Namaste from "./Namaste";

export default function LoadingScreen({
  onLoadingComplete,
}: {
  onLoadingComplete: () => void;
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 4500; // total time
    const intervalTime = 30; // update frequency

    const increment = 100 / (duration / intervalTime);

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        return next >= 100 ? 100 : next;
      });
    }, intervalTime);

    const timer = setTimeout(() => {
      onLoadingComplete();
    }, duration);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-colors duration-700">
      <div className="flex flex-col items-center gap-12 text-foreground/90">

        {/* Logo */}
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
            <Namaste className="w-80 h-80 sm:w-72 sm:h-72 fill-current text-foreground" />
          </motion.div>
        </motion.div>

        {/* Text  */}
        <div className="h-20 flex flex-col items-center justify-center gap-2">
          <motion.h1
            initial={{ opacity: 0, y: 20, letterSpacing: "1em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "0.25em" }}
            transition={{
              duration: 1.2,
              delay: 1.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-4xl sm:text-6xl font-light italic serif text-foreground/60 lowercase tracking-[0.25em]"
          >
            Namaste
          </motion.h1>


        </div>
      </div>
      {/* Percentage */}
      {/* <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-sm text-foreground/50 tracking-widest mt-20 "
      >


      </motion.span> */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-accent/50 overflow-hidden text-center">
        {/* Percentage */}
        <h1 className="text-foreground/50 tracking-tight text-sm font-thin">
          {Math.floor(progress)}%
        </h1>
        {/* Progress Bar */}
        <div className="w-40 h-[1px] bg-accent/10 overflow-hidden mt-2">
          <motion.div
            className="h-full bg-foreground/20"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 3.5, ease: "linear" }}
          />
        </div>
      </div>

    </div>
  );
}