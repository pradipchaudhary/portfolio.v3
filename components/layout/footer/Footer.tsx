"use client";

import VisitorCounter from "@/components/shared/VisitorCount";
import {  motion } from "motion/react";
import { useMemo,  } from "react";
import BorderLine from "./BorderLine";

export default function Footer() {
  const year = useMemo(() => new Date().getFullYear(), []);


  return (
    <footer className="relative w-full mt-8 overflow-hidden text-gray-900 dark:text-gray-100">

    {/* Top Border Line */}
      <BorderLine />


      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative mt-10"
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

          <p className="text-[11px] mt-5 text-center sm:text-center text-gray-400 dark:text-gray-500">
            © {year} Pradip Chaudhary
          </p>

        </div>
      </motion.div>
    </footer>
  );
}