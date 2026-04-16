"use client";

import VisitorCounter from "@/components/ui/VisitorCount";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full relative overflow-hidden mt-14 py-10
      text-gray-900 dark:text-gray-100">

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
          className="text-gray-400 dark:text-gray-600 opacity-[0.25]"
          strokeWidth="2"
          animate={{
            pathOffset: [0, 1],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative max-w-5xl mx-auto px-6"
      >

        {/* CONTENT */}
        <div className="flex flex-col gap-7 pt-7">

          {/* DESCRIPTION */}
          <p className="text-sm text-foreground/60 leading-relaxed max-w-xl">
            Built with a focus on clarity, performance, and structured UI systems.
            Exploring the intersection of design and robust architecture.
          </p>

          {/* TECH LINE */}
          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="text-gray-700 dark:text-gray-200 font-medium">Next.js</span>
            <span className="text-gray-300 dark:text-gray-600">•</span>
            <span className="text-gray-700 dark:text-gray-200 font-medium">Tailwind</span>
            <span className="text-gray-300 dark:text-gray-600">•</span>
            <span className="text-gray-700 dark:text-gray-200 font-medium">Framer Motion</span>
            <span className="text-gray-300 dark:text-gray-600">•</span>
            <span className="text-gray-700 dark:text-gray-200 font-medium">Vercel</span>
          </div>

          {/* META ROW */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">

            <div className="text-xs text-gray-500 dark:text-gray-400 leading-none">
              <VisitorCounter />
            </div>

            <p className="text-xs text-gray-400 dark:text-gray-500 leading-none tracking-wide">
              Minimal interface · Intentional design · Real execution
            </p>

          </div>

          <div className="text-center sm:text-left">
            <p className="text-[11px] text-gray-400 dark:text-gray-500">
              © {new Date().getFullYear()} Pradip Chaudhary · Portfolio v3.0
            </p>
          </div>

        </div>
      </motion.div>
    </footer>
  );
}