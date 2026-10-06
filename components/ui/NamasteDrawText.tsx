"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

export interface NamasteDrawTextProps {
  text?: string;
  /** Seconds the outline takes to draw. */
  drawDuration?: number;
  /** Seconds to wait before the animation starts. */
  delay?: number;
  /** Tailwind classes. Size, weight and color come from here. */
  className?: string;
}

// Longer than any single glyph's outline at this size, so every letter starts fully hidden.
const DASH = 300;

export default function NamasteDrawText({
  text = "Namaste",
  drawDuration = 2.8,
  delay = 0.8,
  className = "text-[2.25rem] text-gray-700 font-thin dark:text-zinc-300 transition-colors duration-300 animate-fill",
}: NamasteDrawTextProps) {
  const reduceMotion = useReducedMotion();
  const [run, setRun] = useState(0); // bump to replay

  return (
    <svg
      role="img"
      aria-label={text}
      onMouseEnter={() => setRun((n) => n + 1)}
      className={`${className} h-[1.3em] w-[4.5em] cursor-default select-none overflow-visible`}
    >
      <motion.text
        key={run}
        x="0"
        y="1em"
        fontSize="1em"
        stroke="currentColor"
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="currentColor"
        initial={
          reduceMotion
            ? { fillOpacity: 0 }
            : {
                strokeDasharray: `${DASH} ${DASH}`,
                strokeDashoffset: DASH,
                fillOpacity: 0,
              }
        }
        animate={
          reduceMotion
            ? { fillOpacity: 1 }
            : { strokeDashoffset: 0, fillOpacity: 1 }
        }
        transition={{
          strokeDashoffset: {
            delay,
            duration: drawDuration,
            ease: "easeInOut",
          },
          fillOpacity: {
            delay: reduceMotion ? delay : delay + drawDuration * 0.75,
            duration: 1,
            ease: "easeOut",
          },
        }}
      >
        {text}
      </motion.text>
    </svg>
  );
}
