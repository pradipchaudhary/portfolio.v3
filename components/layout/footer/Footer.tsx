"use client";

import VisitorCounter from "@/components/shared/VisitorCount";
import { useAnimation, motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";

export default function Footer() {
  const year = useMemo(() => new Date().getFullYear(), []);
  const svgControls = useAnimation();
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (startAnimation) {
      svgControls.start({
        strokeDashoffset: 0,
        transition: {
          duration: 3,
          ease: "easeInOut",
        },
      });
    }
  }, [startAnimation, svgControls]);

  return (
    <footer className="relative w-full mt-14 py-10 overflow-hidden text-gray-900 dark:text-gray-100">

      {/* TOP SVG DIVIDER */}
      <svg
        className="absolute top-0 left-0 w-full h-14 pointer-events-none"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,70 C120,30 240,110 360,70 C480,30 600,110 720,70 C840,30 960,110 1080,70 C1200,30 1320,100 1440,70"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-gray-400 dark:text-gray-600 opacity-25"
          id="footer-svg-path"

          initial={{
            strokeDasharray: 1454.9981689453125,
            strokeDashoffset: 1454.9981689453125,
          }}

          animate={svgControls}
        />
      </svg>

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative"
      >

        <div className="flex flex-col gap-7 pt-7">
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl">
            Built with clarity, performance, and scalable UI architecture.
            Exploring the intersection of design systems and engineering precision.
          </p>

          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            {["Next.js", "Tailwind", "Framer Motion", "Vercel"].map((tech, i, arr) => (
              <span key={tech} className="font-medium text-gray-700 dark:text-gray-200">
                {tech}
                {i !== arr.length - 1 && (
                  <span className="mx-2 text-gray-300 dark:text-gray-600">•</span>
                )}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">

            <div className="text-xs text-gray-500 dark:text-gray-400 ml-2">
              <VisitorCounter />
            </div>

            <p className="text-xs text-gray-400 dark:text-gray-500 tracking-wide italic">
              Minimal interface · Intentional design · Real execution
            </p>

          </div>

          <p className="text-[11px] text-center sm:text-left text-gray-400 dark:text-gray-500">
            © {year} Pradip Chaudhary · Portfolio v3.0
          </p>

        </div>
      </motion.div>
    </footer>
  );
}