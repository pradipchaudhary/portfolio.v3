"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateHash = () => setHash(window.location.hash);
      updateHash();
      window.addEventListener("hashchange", updateHash);
      return () => window.removeEventListener("hashchange", updateHash);
    }
  }, []);

  const navItems = [
    { label: "home", href: "/", id: "home" },
    { label: "projects", href: "/projects", id: "projects" },
    { label: "experience", href: "/#experience", id: "experience" },
    { label: "blog", href: "/#blog", id: "blog" },
  ];

  const isActive = (id: string) => {
    if (id === "home" && pathname === "/" && !hash) return true;
    if (hash === `#${id}`) return true;
    return false;
  };

  return (
    <nav className="mt-6 px-8 w-full">
      {/* Menu Title */}
      <div className="relative pb-1 mb-4 ">
        <h2 className="text-xs font-medium text-gray-500 uppercase tracking-wider text-center font-mono">
          Menu
        </h2>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-14 h-[1px] bg-gradient-to-r from-gray-200 via-red-400 to-gray-200 rounded-full"></div>
      </div>

      {/* Nav Items */}
      <div className="flex flex-wrap justify-center">
        {navItems.map((item, i) => {
          const active = isActive(item.id);
          return (
            <Link
              key={i}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={`group inline-flex items-center text-[13px] transition-colors duration-200 ${active
                ? "text-gray-900 font-semibold"
                : "text-gray-500 hover:text-gray-900 pl-1"
                }`}
            >
              <span
                className={`mr-[0.3px] font-mono ${active ? "text-gray-800" : "text-gray-400 group-hover:text-gray-500"
                  }`}
              >
                #
              </span>
              <span
                className={`italic tracking-tight ${active ? "text-gray-800" : "group-hover:text-gray-700"
                  }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;