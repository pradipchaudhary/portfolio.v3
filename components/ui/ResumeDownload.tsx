"use client";

import { item } from "@/lib/animations";
import { motion } from "motion/react";

const ResumeDownload = () => {
  return (
    <motion.div variants={item}>
      <p className="py-8 text-gray-800 dark:text-gray-300">
        Review my{" "}
        <a
          href="/resume/pradip_chaudhary_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-block font-bold p-1
          text-gray-900 dark:text-white
          hover:text-[var(--accent)]
        transition-colors duration-300
          "
        >
          <span>resume</span>
          {/* Decorative underline */}
          <svg
            className="absolute -bottom-[2px] left-0 w-full h-[10px] text-[var(--accent)]"
            viewBox="0 0 120 10"
            fill="none"
          >
            <path
              d="M3 7C20 2 50 10 70 4C90 4 110 10 118 5"
              stroke="currentColor"
              strokeWidth="1.1"
              strokeLinecap="round"
            />
          </svg>
        </a>{" "}
        for hiring consideration.
      </p>
    </motion.div>
  );
};

export default ResumeDownload;
