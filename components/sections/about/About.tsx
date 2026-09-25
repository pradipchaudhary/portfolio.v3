"use client";

import { motion } from "motion/react";
import ResumeDownload from "@/components/ui/ResumeDownload";
import Signature from "@/components/ui/Signature";
import Greetings from "@/components/ui/Greetings";
import { item } from "@/lib/animations";
import Section from "@/components/layout/Section";
import HighlightLink from "./HighlightLink";

/* =========================
   MAIN COMPONENT
========================= */

const About = () => {
  return (
    <Section id="about" aria-label="About Pradip Chaudhary">
      {/* ================= INTRO ================= */}
      <motion.div variants={item} className="flex flex-col items-start mb-7">
        {/* Greeting */}
        <div className="relative group inline-block">
          <div className="relative opacity-80">
            <Greetings />
          </div>
        </div>

        {/* INTRO TEXT */}
        <motion.p variants={item} className="mt-2 text-base leading-relaxed">
          Hi 👋, I’m{" "}
          <HighlightLink href="https://react.dev/">
            {" "}
            React Developer{" "}
          </HighlightLink>{" "}
          passionate about creating performant, responsive, and user-friendly
          web applications.
        </motion.p>

        <motion.p variants={item} className="mt-4">
          I enjoy exploring modern technologies such as{" "}
          <HighlightLink href="https://nextjs.org/">Next.js</HighlightLink>,{" "}
          <HighlightLink href="https://www.typescriptlang.org/">
            TypeScript
          </HighlightLink>
          , and{" "}
          <HighlightLink href="https://tailwindcss.com/">
            Tailwind CSS
          </HighlightLink>{" "}
          to build clean, scalable, and accessible digital products.
        </motion.p>
      </motion.div>

      {/* ================= DESCRIPTION ================= */}
      <motion.div
        variants={item}
        className="space-y-6 text-base leading-relaxed"
      >
        <motion.p variants={item}>
          I’m passionate about transforming ideas into elegant web solutions —
          combining{" "}
          <span className="font-medium text-[var(--foreground)]">
            clean design
          </span>{" "}
          with{" "}
          <span className="font-medium text-[var(--foreground)]">
            efficient, functional code
          </span>
          .
        </motion.p>

        <motion.p variants={item}>
          Beyond coding, I explore <span className="font-semibold">AI</span>,{" "}
          <span className="font-semibold">SEO</span>,{" "}
          <span className="font-semibold">Web Scraping</span>, and data-driven
          projects that deliver real-world value.
        </motion.p>
      </motion.div>

      {/* ================= ACTIONS ================= */}
      <ResumeDownload />

      {/* <ResumeReview /> */}

      {/* ================= SIGNATURE ================= */}
      <Signature />
    </Section>
  );
};

export default About;
