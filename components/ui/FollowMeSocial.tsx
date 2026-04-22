"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaGithub,
  FaYoutube,
} from "react-icons/fa6";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/itspradipchaudhary/",
    icon: FaInstagram,
    hover: "hover:bg-pink-500",
  },
  {
    name: "Twitter",
    href: "https://x.com/itspradipchy",
    icon: FaXTwitter,
    hover: "hover:bg-sky-500",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@iampradipchaudhary",
    icon: FaYoutube,
    hover: "hover:bg-red-500",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/pradipchaudhary/",
    icon: FaLinkedinIn,
    hover: "hover:bg-[#0077B5]",
  },
  {
    name: "GitHub",
    href: "https://github.com/pradipchaudhary",
    icon: FaGithub,
    hover: "hover:bg-gray-800",
  },
];

export default function FollowMeSocial() {
  return (
    <section className="relative flex flex-col items-center gap-3 rounded-xl px-6 py-6 sm:mt-16">

      {/* LABEL */}
      <motion.p
        initial={{ opacity: 0, y: -10, rotate: -10 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        className={`absolute top-0 md:-top-14 left-1/2 -translate-x-1/2 text-base font-semibold text-gray-600 dark:text-gray-600 ${caveat.className}`}
      >
        Follow Me
      </motion.p>

      {/* ARROW */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 20 }}
        animate={{ opacity: 1, scale: 1, rotate: 45 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute top-6 md:-top-10 left-1/2 -translate-x-1/2"
      >
        <svg
          width="70"
          height="70"
          viewBox="0 0 81 84"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.5579 30.5227C22.4725 28.623 28.2492 29.3749 33.4667 31.6508C41.3459 35.0881 47.9522 42.0005 51.8464 48.614C54.2944 52.7702 54.4502 56.7492 55.8651 61.5377"
            stroke="#7F7F7F"
            strokeWidth="0.5"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M57.0873 62.1097C57.0832 62.0921 57.0533 61.9757 57.0388 61.8734C56.9763 61.45 56.9339 60.6847 56.9361 59.7042C56.947 56.4142 57.4643 50.7129 59.6242 47.3C59.7488 47.1031 59.7164 46.8667 59.5524 46.7716C59.3884 46.6764 59.1547 46.7579 59.0301 46.9548C56.7828 50.5058 56.2014 56.4357 56.1908 59.8586C56.1897 60.317 56.1975 60.7315 56.2135 61.0885C55.5902 60.3287 54.9902 59.5491 54.3985 58.7583C52.6959 56.4811 50.6985 54.9884 48.0625 53.8966C47.8867 53.8232 47.6568 53.9314 47.5515 54.1372C47.4454 54.3425 47.5029 54.5697 47.6794 54.6422C50.2161 55.6936 52.1405 57.1294 53.7796 59.3211C54.5532 60.3542 55.342 61.3695 56.1743 62.3467C56.2571 62.444 56.4755 62.6936 56.5123 62.7223C56.7223 62.886 56.9338 62.7112 56.9791 62.6705C57.0011 62.6509 57.2635 62.3944 57.0873 62.1097Z"
            stroke="#7F7F7F"
            strokeWidth="0.5"
            fill="transparent"
          />
        </svg>
      </motion.div>

      {/* SOCIAL ICONS */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="mt-6"
      >
        <div className="flex -space-x-6">
          {socialLinks.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.name}
                whileHover={{ y: -12, scale: 1.08 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 18,
                }}
                style={{ zIndex: index }}
              >
                <Link
                  href={item.href}
                  target="_blank"
                  aria-label={item.name}
                  className={`
                    group relative flex h-11 w-11 items-center justify-center
                    rounded-full bg-white dark:bg-zinc-900
                    border border-neutral-200 dark:border-zinc-800
                    text-neutral-700 dark:text-zinc-400
                    shadow-md transition-all duration-300
                    hover:text-white ${item.hover}
                  `}
                >
                  <Icon size={18} />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}