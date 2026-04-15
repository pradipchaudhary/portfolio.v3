"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Link from "next/link";

export default function Username({
  name,
  username,
}: {
  name: string;
  username: string;
}) {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      // First animation (fade + slide)
      await controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      });

      // Small delay after first animation
      await new Promise((resolve) => setTimeout(resolve, 200));

      // Second animation (shake)
      await controls.start({
        rotate: [-1, 1, -1],
        transition: {
          duration: 0.4,
          repeat: 3,
          ease: "easeInOut",
        },
      });
    };

    sequence();
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
    >
      <motion.div
        whileHover={{
          rotate: 0,
          transition: { type: "spring", stiffness: 200, damping: 20 },
        }}
      >
        <Link href="#" className="hover:opacity-80 transition">
          <h1 className="text-xl font-semibold text-gray-900 -mt-4 dark:text-zinc-50">
            {name}
          </h1>
          <p className="text-sm text-gray-500 dark:text-zinc-500 font-sans -mt-2">
            @{username}
          </p>
        </Link>
      </motion.div>
    </motion.div>
  );
}