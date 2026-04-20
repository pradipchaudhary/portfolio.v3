"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Namaste from "../shared/Namaste";
import SpotlightBackground from "./SpotlightBackground";

export default function LoadingScreen({
  onLoadingComplete,
}: {
  onLoadingComplete: () => void;
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 4000;
    let start: number | null = null;
    let frame: number;

    const animate = (t: number) => {
      if (!start) start = t;

      const p = Math.min(((t - start) / duration) * 100, 100);
      setProgress(p);

      if (p < 100) {
        frame = requestAnimationFrame(animate);
      } else {
        onLoadingComplete();
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background overflow-hidden">

      {/* Spotlight Background */}
      <SpotlightBackground />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-12 text-foreground/20">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: 1.8, delay: 0.3 }}
          >
            <Namaste className="w-80 h-80 sm:w-72 sm:h-72 fill-current text-foreground" />
          </motion.div>
        </motion.div>

        {/* Text */}
        <motion.h1
          initial={{ opacity: 0, y: 20, letterSpacing: "1em" }}
          animate={{ opacity: 1, y: 0, letterSpacing: "0.25em" }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="text-4xl sm:text-6xl font-light italic lowercase text-foreground/60 tracking-[0.25em]"
        >
          Namaste
        </motion.h1>
      </div>

      {/* Progress */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center z-10">

        <div className="text-sm text-zinc-900 dark:text-zinc-50 font-thin">
          {Math.floor(progress)}%
        </div>

        <div className="w-40 h-[1px] bg-accent/10 mt-2 overflow-hidden">
          <div
            className="h-full bg-foreground/30 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>

      </div>
    </div>
  );
}