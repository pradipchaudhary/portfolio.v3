"use client";

import { motion, Variants } from "motion/react";
import ResumeDownload from "@/components/ui/ResumeDownload";
import Signature from "@/components/ui/Signature";
import Greetings from "@/components/ui/Greetings";

/* =========================
   ANIMATION VARIANTS
========================= */

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.25, 0.1, 0.25, 1], // 👈 FIXED (cubic-bezier)
    },
  },
};

/* =========================
   LINK COMPONENT (DRY FIX)
========================= */

const HighlightLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        relative inline-block font-bold
        text-[var(--foreground)]
        hover:text-[var(--accent)]
        transition-colors duration-300
      "
    >
      {children}

      {/* underline */}
      <svg
        className="absolute -bottom-[2px] left-0 w-full h-[10px] text-[var(--foreground)]/40"
        viewBox="0 0 120 10"
        fill="none"
      >
        <path
          d="M3 7C20 2 50 10 70 4C90 -2 110 8 118 3"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    </a>
  );
};

/* =========================
   MAIN COMPONENT
========================= */

const About = () => {
  return (
    <motion.section
      id="about"
      aria-label="About Pradip Chaudhary"
      className="
        max-w-3xl mx-auto mb-10 pt-20
        text-[var(--foreground)]
      "
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {/* ================= INTRO ================= */}
      <motion.div variants={item} className="flex flex-col items-start mb-7">

        {/* Greeting */}
        <div className="relative group inline-block">
          {/* <div className="absolute -inset-4 bg-[var(--accent)]/5 rounded-full blur-3xl" /> */}
          <div className="relative opacity-80">
            <Greetings />
          </div>
        </div>

        {/* INTRO TEXT */}
        <motion.p
          variants={item}
          className="text-base leading-relaxed text-[var(--foreground)]/80 mt-2"
        >
          Hi 👋, I’m{" "}
          <HighlightLink href="https://react.dev/">
            React Developer
          </HighlightLink>{" "}
          passionate about creating performant, responsive, and user-friendly web applications.
        </motion.p>

        <motion.p
          variants={item}
          className="text-base leading-relaxed text-[var(--foreground)]/70 mt-4 max-w-2xl"
        >
          I enjoy exploring modern technologies such as{" "}
          <HighlightLink href="https://nextjs.org/">Next.js</HighlightLink>,{" "}
          <HighlightLink href="https://www.typescriptlang.org/">TypeScript</HighlightLink>, and{" "}
          <HighlightLink href="https://tailwindcss.com/">Tailwind CSS</HighlightLink>{" "}
          to build clean, scalable, and accessible digital products.
        </motion.p>
      </motion.div>

      {/* ================= DESCRIPTION ================= */}
      <motion.div variants={item} className="space-y-6 text-base leading-relaxed">

        <motion.p variants={item} className="text-[var(--foreground)]/80">
          I’m passionate about transforming ideas into elegant web solutions — combining{" "}
          <span className="font-medium text-[var(--foreground)]">
            clean design
          </span>{" "}
          with{" "}
          <span className="font-medium text-[var(--foreground)]">
            efficient, functional code
          </span>.
        </motion.p>

        <motion.p variants={item} className="text-[var(--foreground)]/80">
          Beyond coding, I explore{" "}
          <HighlightLink href="https://openai.com/">AI</HighlightLink>,{" "}
          <span className="font-semibold">SEO</span>,{" "}
          <span className="font-semibold">Web Scraping</span>, and data-driven projects that deliver real-world value.
        </motion.p>

      </motion.div>

      {/* ================= ACTIONS ================= */}
      <motion.div variants={item}>
        <ResumeDownload />
      </motion.div>

      {/* ================= SIGNATURE ================= */}
      <motion.div variants={item} className="pt-6">
        <Signature />
      </motion.div>
    </motion.section>
  );
};

export default About;