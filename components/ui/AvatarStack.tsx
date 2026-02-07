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
    href: "https://x.com/itspradipchy",
    Icon: Twitter,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@iampradipchaudhary",
    Icon: Youtube,
  },
];

export default function SocialIconStack() {
  return (
    <div className="relative inline-block">
      {/* Social Icons */}
      <div className="flex items-center">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className={`
              group relative
              flex h-11 w-11 items-center justify-center rounded-full
              border border-black/2
              bg-white/[0.02]
              shadow-md
              transition-all duration-300
              hover:z-30 hover:scale-110
              ${index !== 0 ? "-ml-4" : ""}
            `}
          >
            <social.Icon
              className="
                h-5 w-5
                text-gray-400
                transition-colors duration-300
                group-hover:text-black
              "
            />
          </a>
        ))}
      </div>


    </div>
  );
}
