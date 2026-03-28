"use client";

import React from "react";
import { motion } from "framer-motion";
import ResumeDownload from "@/components/ui/ResumeDownload";
import Nameste from "@/components/ui/Namaste";
import Signature from "@/components/ui/Signature";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25, // more delay between items
      delayChildren: 0.2,    // initial delay
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,        // slower animation
      ease: "easeOut",      // smooth easing
    },
  },
};

const About = () => {
  return (
    <motion.section
      id="about"
      aria-label="About Pradip Chaudhary"
      className="max-w-3xl mx-auto mb-10 text-gray-800 pt-20"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {/* === INTRO HEADER === */}
      <motion.div variants={item} className="flex flex-col items-start mb-7">
        <Nameste />

        <motion.p
          variants={item}
          className="text-base md:text-base leading-relaxed text-gray-700 mt-2"
        >
          Hi 👋, I’m{" "}
          <a
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block font-bold hover:text-gray-900 transition-all duration-300"
          >
            React Developer
            <svg
              className="absolute -bottom-[2px] left-0 w-full h-[10px] text-gray-400"
              viewBox="0 0 120 10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 7C20 2 50 10 70 4C90 -2 110 8 118 3"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </a>{" "}
          passionate about creating performant, responsive, and user-friendly web applications.
        </motion.p>

        <motion.p
          variants={item}
          className="text-base md:text-base leading-relaxed text-gray-600 mt-4 max-w-2xl"
        >
          I enjoy exploring modern technologies such as{" "}
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block font-bold hover:text-gray-900 transition-all duration-300"
          >
            Next.js
            <svg
              className="absolute -bottom-[2px] left-0 w-full h-[10px] text-gray-400"
              viewBox="0 0 120 10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 7C20 2 50 10 70 4C90 -2 110 8 118 3"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </a>
          ,{" "}
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block font-bold hover:text-gray-900 transition-all duration-300"
          >
            TypeScript
            <svg
              className="absolute -bottom-[2px] left-0 w-full h-[10px] text-gray-400"
              viewBox="0 0 120 10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 7C20 2 50 10 70 4C90 -2 110 8 118 3"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </a>
          , and{" "}
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block font-bold hover:text-gray-900 transition-all duration-300"
          >
            Tailwind CSS
            <svg
              className="absolute -bottom-[2px] left-0 w-full h-[10px] text-gray-400"
              viewBox="0 0 120 10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 7C20 2 50 10 70 4C90 -2 110 8 118 3"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </a>{" "}
          to build clean, scalable, and accessible digital products.
        </motion.p>
      </motion.div>

      {/* === DESCRIPTION === */}
      <motion.div variants={item} className="space-y-6 text-base leading-relaxed text-gray-700">
        <motion.p variants={item}>
          I’m passionate about transforming ideas into elegant web solutions — combining{" "}
          <span className="font-medium text-gray-900">clean design</span> with{" "}
          <span className="font-medium text-gray-900">efficient, functional code</span>.
        </motion.p>

        <motion.p variants={item} className="text-gray-700">
          Beyond coding, I explore{" "}
          <a
            href="https://openai.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block font-bold hover:text-gray-900 transition-all duration-300"
          >
            AI
          </a>
          , SEO, Web Scraping, and data-driven projects that deliver real-world value.
        </motion.p>
      </motion.div>

      {/* === ACTIONS === */}
      <motion.div variants={item}>
        <ResumeDownload />
      </motion.div>

      <motion.div variants={item}>
        <Signature />
      </motion.div>
    </motion.section>
  );
};

export default About;