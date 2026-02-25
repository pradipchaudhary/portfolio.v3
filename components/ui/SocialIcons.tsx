"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaGithub,
  FaYoutube,
  FaGlobe,
} from "react-icons/fa6";

type SocialLink = {
  name: string;
  href: string;
  icon: React.ReactNode;
  hoverBg: string;
};

const socialLinks: SocialLink[] = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/itspradipchaudhary/",
    icon: <FaFacebookF size={15} />,
    hoverBg: "hover:bg-blue-500",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/itspradipchaudhary/",
    icon: <FaInstagram size={15} />,
    hoverBg: "hover:bg-pink-500",
  },
  {
    name: "Twitter",
    href: "https://x.com/itspradipchy",
    icon: <FaXTwitter size={15} />,
    hoverBg: "hover:bg-sky-500",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@iampradipchaudhary",
    icon: <FaYoutube size={15} />,
    hoverBg: "hover:bg-red-500",
  },

  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/pradipchaudhary/",
    icon: <FaLinkedinIn size={15} />,
    hoverBg: "hover:bg-[#0077B5]",
  },
  {
    name: "GitHub",
    href: "https://github.com/pradipchaudhary",
    icon: <FaGithub size={15} />,
    hoverBg: "hover:bg-gray-800",
  },
  // {
  //   name: "YouTube",
  //   href: "https://www.youtube.com/@iampradipchaudhary",
  //   icon: <FaYoutube size={15} />,
  //   hoverBg: "hover:bg-red-500",
  // },
  // {
  //   name: "Website",
  //   href: "https://pradipchaudhary.com",
  //   icon: <FaGlobe size={15} />,
  //   hoverBg: "hover:bg-green-500",
  // },
];

const MAX_VISIBLE = 6;

export default function SocialIcons() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const visibleLinks = socialLinks.slice(0, MAX_VISIBLE);

  return (
    <div className="flex items-center gap-5">
      <div className="flex -space-x-6 relative">
        {visibleLinks.map((item, index) => {
          const isHovered = hoveredIndex === index;

          return (
            <motion.div
              key={item.name}
              layout
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              animate={{
                y: isHovered ? -12 : 0,
                scale: isHovered ? 1.12 : 1, // subtle premium zoom
                zIndex: isHovered ? 100 : index,
              }}
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 22,
              }}
              className="relative"
            >
              <Link
                href={item.href}
                target="_blank"
                aria-label={item.name}
                className={`
                  inline-flex h-11 w-11 items-center justify-center
                  rounded-full bg-white
                  border border-neutral-200
                  shadow-md
                  text-neutral-700
                  transition-colors duration-300
                  hover:text-white
                  ${item.hoverBg}
                `}
              >
                {item.icon}
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}