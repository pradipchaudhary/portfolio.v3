"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useId } from "react";
import SocialIcons from "./SocialIcons";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function FollowMeSocial() {
  const [mounted, setMounted] = useState(false);
  const clipId = useId();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <section className="relative flex flex-col items-center gap-2 rounded-xl px-6 py-6 sm:mt-16">
      {/* Added sm:mt-16 → pushes down only on small devices */}

      {/* Follow Me Text */}
      <motion.p
        initial={{ opacity: 0, y: -20, rotate: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className={`absolute -top-14 left-1/2 -translate-x-1/2 text-base font-semibold tracking-wide text-gray-600 text-center ${caveat.className}`}
      >
        Follow Me
      </motion.p>

      {/* Arrow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 25 }}
        animate={{ opacity: 1, scale: 1, rotate: 45 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute -top-10 left-1/2 -translate-x-1/2"
      >
        <svg
          width="70"
          height="70"
          viewBox="0 0 81 84"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath={`url(#${clipId})`}>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.5579 30.5227C22.4725 28.623 28.2492 29.3749 33.4667 31.6508C41.3459 35.0881 47.9522 42.0005 51.8464 48.614C54.2944 52.7702 54.4502 56.7492 55.8651 61.5377C55.9225 61.7316 56.1293 61.8068 56.3272 61.7054C56.5245 61.6049 56.6391 61.3648 56.5811 61.1718C55.1497 56.3272 54.9774 52.3095 52.5011 48.1044C48.5525 41.3988 41.8496 34.3948 33.8601 30.9088C28.4988 28.57 22.5574 27.8153 16.4791 29.7675C16.2743 29.8332 16.1259 30.0549 16.1476 30.2634C16.1694 30.472 16.3531 30.5884 16.5579 30.5227Z"
              stroke="#7F7F7F"
              strokeWidth="0.5"
              fill="transparent"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M57.0873 62.1097C57.0832 62.0921 57.0533 61.9757 57.0388 61.8734C56.9763 61.45 56.9339 60.6847 56.9361 59.7042C56.947 56.4142 57.4643 50.7129 59.6242 47.3C59.7488 47.1031 59.7164 46.8667 59.5524 46.7716C59.3884 46.6764 59.1547 46.7579 59.0301 46.9548C56.7828 50.5058 56.2014 56.4357 56.1908 59.8586C56.1897 60.317 56.1975 60.7315 56.2135 61.0885C55.5902 60.3287 54.9902 59.5491 54.3985 58.7583C52.6959 56.4811 50.6985 54.9884 48.0625 53.8966C47.8867 53.8232 47.6568 53.9314 47.5515 54.1372C47.4454 54.3425 47.5029 54.5697 47.6794 54.6422C50.2161 55.6936 52.1405 57.1294 53.7796 59.3211C54.5532 60.3542 55.342 61.3695 56.1743 62.3467C56.2571 62.444 56.4755 62.6936 56.5123 62.7223C56.7223 62.886 56.9338 62.7112 56.9791 62.6705C57.0011 62.6509 57.2635 62.3944 57.0873 62.1097Z"
              stroke="#7F7F7F"
              strokeWidth="0.5"
              fill="transparent"
            />
          </g>
          <defs>
            <clipPath id={clipId}>
              <rect
                width="64.5423"
                height="52.3374"
                fill="white"
                transform="translate(0 51.8329) rotate(-53.4256)"
              />
            </clipPath>
          </defs>
        </svg>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="mt-10"
      >
        <SocialIcons />
      </motion.div>
    </section>
  );
}