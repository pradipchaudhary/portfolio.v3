"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, Github, Linkedin, Facebook, Instagram } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="sm:w-full md:w-1/2 lg:w-1/2 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:min-h-screen lg:flex-col lg:justify-between lg:py-20 lg:pb-8 px-6 bg-red-50">

      {/* === TOP SECTION (Profile + Menu) === */}
      <header className="flex flex-col items-center text-center">
        <div className="relative w-28 h-28">
          <Image
            src="/logo.png"
            alt="Pradip Chaudhary"
            fill
            className="rounded-full border border-gray-300 shadow-sm object-cover"
            sizes="112px"
          />
          <div className="absolute bottom-1 right-1 bg-white rounded-full p-1 border border-gray-200 shadow-md">
            <Check className="w-4 h-4 text-green-500" />
          </div>
        </div>

        <h1 className="mt-4 text-xl font-semibold text-gray-900">
          Pradip Chaudhary
        </h1>
        <p className="text-sm text-gray-500">@pradipchaudhary</p>

        <p className="mt-2 text-sm text-gray-600 max-w-[300px]">
          💻 Full Stack Developer <br /> Building modern web experiences.
        </p>

        <div className="mt-4 flex items-center gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <span className="font-medium text-gray-700">120</span> followers
          </div>
          <div className="flex items-center gap-1">
            <span className="font-medium text-gray-700">90</span> following
          </div>
        </div>

        {/* === Navigation Menu === */}
        <nav className="mt-6 px-8">
          <div className="relative pb-1 mb-4">
            <h2 className="text-xs font-medium text-gray-500 uppercase tracking-wider text-center">
              Menu
            </h2>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-14 h-[1px] bg-gradient-to-r from-gray-200 via-red-400 to-gray-200 rounded-full"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {[
              { label: "home", href: "/" },
              { label: "about", href: "/#about" },
              { label: "projects", href: "/projects" },
              { label: "experience", href: "/#experience" },
              { label: "skills", href: "/#skills" },
              { label: "certifications", href: "/#certifications" },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="group inline-flex items-center text-[13px] text-gray-500 hover:text-gray-900 transition-colors duration-200"
              >
                <span className="text-gray-400 mr-[0.3px] font-mono group-hover:text-gray-500">
                  #
                </span>
                <span className="italic tracking-tight group-hover:text-gray-700 transition-colors duration-200">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </nav>
      </header>

      {/* === BOTTOM SECTION (Follow Me) === */}
      <footer className="mt-10 text-center">
        <div className="relative pb-1 mb-4">
          <h2 className="text-xs font-medium text-gray-500 uppercase tracking-wider text-center">
            Follow Me
          </h2>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-[1px] bg-gradient-to-r from-gray-200 via-red-400 to-gray-200 rounded-full"></div>
        </div>

        <div className="flex justify-center gap-3">
          <Link
            href="https://github.com/pradipchaudhary"
            target="_blank"
            className="text-gray-500 hover:text-gray-900 transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </Link>
          <Link
            href="https://linkedin.com/in/pradipchaudhary"
            target="_blank"
            className="text-gray-500 hover:text-gray-900 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link
            href="https://facebook.com"
            target="_blank"
            className="text-gray-500 hover:text-gray-900 transition-colors duration-200"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            className="text-gray-500 hover:text-gray-900 transition-colors duration-200"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </Link>
        </div>
      </footer>

    </aside>
  );
};

export default Sidebar;
