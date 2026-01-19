"use client";

import {
  Github,
  Linkedin,
  Twitter,
  Youtube,
  Globe,
} from "lucide-react";

type Social = {
  name: string;
  href: string;
  Icon: React.ElementType;
};

const socials: Social[] = [
  {
    name: "Website",
    href: "https://www.pradipchaudhary.com.np",
    Icon: Globe,
  },
  {
    name: "GitHub",
    href: "https://github.com/pradipchaudhary",
    Icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/pradipchaudhary",
    Icon: Linkedin,
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    Icon: Twitter,
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    Icon: Youtube,
  },
];

export default function SocialIconStack() {
  return (
    <div className="relative inline-block">
      {/* Social Icons */}
      <div className="flex items-center pr-4">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className="
              group relative -mr-3
              flex h-10 w-10 items-center justify-center rounded-full
              border border-black/10
              bg-black/[0.04]
              shadow-[0_1px_2px_rgba(0,0,0,0.06)]
              transition-all duration-300
              hover:z-30 hover:scale-105
              dark:border-white/15 dark:bg-white/[0.08]
            "
          >
            <social.Icon
              className="
                h-5 w-5
                text-gray-700
                transition-colors duration-300
                group-hover:text-black
                dark:text-gray-300
                dark:group-hover:text-white
              "
            />
          </a>
        ))}
      </div>

      {/* Decorative Line */}
      <div
        className="
          absolute -bottom-1.5 left-[-16px]
          h-px w-[calc(100%+32px)]
          bg-gradient-to-r from-black/20 via-black/20 to-transparent
          dark:from-white/20 dark:via-white/20
        "
      />
    </div>
  );
}
