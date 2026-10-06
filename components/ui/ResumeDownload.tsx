"use client";

import { item } from "@/lib/animations";
import { motion } from "motion/react";

const ResumeDownload = () => {
  return (
    <motion.div variants={item}>
      <p className="py-8 text-base leading-relaxed">
        Currently open to new roles. See my
        <a
          href="/resume/pradip_chaudhary_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-block font-bold p-1
          hover:text-[var(--accent)]
        transition-colors duration-300
          "
        >
          <span className="underline decoration-[var(--accent)] decoration-2 underline-offset-4">
            resume
          </span>
        </a>{" "}
        or let's chat.
      </p>
    </motion.div>
  );
};

export default ResumeDownload;
