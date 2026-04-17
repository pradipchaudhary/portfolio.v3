"use client";

import React from "react";
import { motion } from "framer-motion";
import ResumeDownload from "@/components/ui/ResumeDownload";
import Signature from "@/components/ui/Signature";
import Greetings from "@/components/ui/Greetings";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const About = () => {
  return (
    <motion.section
      id="about"
      aria-label="About Pradip Chaudhary"
      className="max-w-3xl mx-auto mb-10 pt-20
      text-gray-800 dark:text-gray-200"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {/* === INTRO HEADER === */}
      <motion.div variants={item} className="flex flex-col items-start mb-7">
        {/* Gretting  */}
        <div className="">
          <div className="relative group inline-block">
            <div className="absolute -inset-4 bg-red-500/5 rounded-full blur-2xl opacity-100" />
            <div className="relative opacity-60 ">
              <Greetings />

            </div>
          </div>
        </div>
        {/* <Greetings /> */}
        <motion.p
          variants={item}
          className="text-base leading-relaxed 
          text-gray-700 dark:text-gray-300 mt-2"
        >
          Hi 👋, I’m{" "}
          <a
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block font-bold 
            text-gray-900 dark:text-white
            hover:text-black dark:hover:text-gray-200
            transition-all duration-300"
          >
            React Developer
            <svg
              className="absolute -bottom-[2px] left-0 w-full h-[10px] 
              text-gray-400 dark:text-gray-500"
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
          className="text-base leading-relaxed 
          text-gray-600 dark:text-gray-400 mt-4 max-w-2xl"
        >
          I enjoy exploring modern technologies such as{" "}
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block font-bold 
            text-gray-900 dark:text-white
            hover:text-black dark:hover:text-gray-200
            transition-all duration-300"
          >
            Next.js
            <svg
              className="absolute -bottom-[2px] left-0 w-full h-[10px] 
              text-gray-400 dark:text-gray-500"
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
            className="relative inline-block font-bold 
            text-gray-900 dark:text-white
            hover:text-black dark:hover:text-gray-200
            transition-all duration-300"
          >
            TypeScript
            <svg
              className="absolute -bottom-[2px] left-0 w-full h-[10px] 
              text-gray-400 dark:text-gray-500"
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
            className="relative inline-block font-bold 
            text-gray-900 dark:text-white
            hover:text-black dark:hover:text-gray-200
            transition-all duration-300"
          >
            Tailwind CSS
            <svg
              className="absolute -bottom-[2px] left-0 w-full h-[10px] 
              text-gray-400 dark:text-gray-500"
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
      <motion.div
        variants={item}
        className="space-y-6 text-base leading-relaxed 
        text-gray-700 dark:text-gray-300"
      >
        <motion.p variants={item}>
          I’m passionate about transforming ideas into elegant web solutions — combining{" "}
          <span className="font-medium text-gray-900 dark:text-white">
            clean design
          </span>{" "}
          with{" "}
          <span className="font-medium text-gray-900 dark:text-white">
            efficient, functional code
          </span>.
        </motion.p>

        <motion.p variants={item}>
          Beyond coding, I explore{" "}
          <a
            href="https://openai.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold 
            text-gray-900 dark:text-white
            hover:text-black dark:hover:text-gray-200"
          >
            AI
          </a>
          , <strong>SEO</strong>, <strong>Web Scraping</strong>, and data-driven projects that deliver real-world value.
        </motion.p>
      </motion.div>

      {/* === ACTIONS === */}
      <motion.div variants={item}>
        <ResumeDownload />
      </motion.div>

      {/* Signature */}
      <div className="pt-6">
        <div className="relative group inline-block">
          <div className="absolute -inset-4 bg-red-500/5 rounded-full blur-3xl opacity-100" />
          <div className="relative opacity-60 ">
            <Signature />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;