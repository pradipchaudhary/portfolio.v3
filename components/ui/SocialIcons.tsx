"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaGithub,
  FaYoutube,
} from "react-icons/fa6";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/itspradipchaudhary/",
    icon: <FaInstagram size={18} />,
    hover: "hover:bg-pink-500",
  },
  {
    name: "Twitter",
    href: "https://x.com/itspradipchy",
    icon: <FaXTwitter size={18} />,
    hover: "hover:bg-sky-500",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@iampradipchaudhary",
    icon: <FaYoutube size={18} />,
    hover: "hover:bg-red-500",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/pradipchaudhary/",
    icon: <FaLinkedinIn size={18} />,
    hover: "hover:bg-[#0077B5]",
  },
  {
    name: "GitHub",
    href: "https://github.com/pradipchaudhary",
    icon: <FaGithub size={18} />,
    hover: "hover:bg-gray-800",
  },
];

export default function SocialIcons() {
  return (
    <div className="flex items-center">
      <div className="flex -space-x-5">
        {socialLinks.map((item, index) => (
          <motion.div
            key={item.name}
            whileHover={{
              y: -14,
              scale: 1.1,
              zIndex: 50,
            }}
            transition={{
              type: "spring",
              stiffness: 320,
              damping: 20,
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
                shadow-md dark:shadow-[0_4px_20px_rgba(0,0,0,0.25)]
                transition-colors duration-300
                hover:text-white
                ${item.hover}
              `}
            >
              {item.icon}
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}