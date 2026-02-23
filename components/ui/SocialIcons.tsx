"use client";

import Link from "next/link";
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
    href: "https://facebook.com/",
    icon: <FaFacebookF size={15} />,
    hoverBg: "hover:bg-blue-500",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/",
    icon: <FaInstagram size={15} />,
    hoverBg: "hover:bg-pink-500",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/",
    icon: <FaXTwitter size={15} />,
    hoverBg: "hover:bg-sky-500",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/",
    icon: <FaLinkedinIn size={15} />,
    hoverBg: "hover:bg-blue-600",
  },
  {
    name: "GitHub",
    href: "https://github.com/",
    icon: <FaGithub size={15} />,
    hoverBg: "hover:bg-gray-800",
  },
  {
    name: "YouTube",
    href: "https://youtube.com/",
    icon: <FaYoutube size={15} />,
    hoverBg: "hover:bg-red-500",
  },
  {
    name: "Website",
    href: "https://example.com/",
    icon: <FaGlobe size={15} />,
    hoverBg: "hover:bg-green-500",
  },
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
            <Link
              key={item.name}
              href={item.href}
              target="_blank"
              aria-label={item.name}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                zIndex: isHovered ? 100 : index, // 🔥 hovered always on top
              }}
              className={`
                relative inline-flex h-11 w-11 items-center justify-center
                rounded-full bg-white
                border border-neutral-200
                shadow-md
                text-neutral-700
                transition-all duration-300
                hover:text-white hover:scale-125
                ${item.hoverBg}
              `}
            >
              {item.icon}
            </Link>
          );
        })}
      </div>
    </div>
  );
}