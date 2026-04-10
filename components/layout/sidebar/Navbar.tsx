"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";


const ACTIVE_COLOR = "#4285f4";

const Navbar = () => {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  const navItems = [
    { label: "home", href: "/", id: "home" },
    { label: "projects", href: "/projects", id: "projects" },
    { label: "experience", href: "/#experience", id: "experience" },
    { label: "blog", href: "/blog", id: "blog" },
    { label: "inspired", href: "/inspired", id: "inspired" },
    { label: "skills", href: "/#skills", id: "skills" },
    { label: "components", href: "/components", id: "components" },
  ];

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);
    updateHash();
    window.addEventListener("hashchange", updateHash);

    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  const isActive = (id: string) => {
    const navIds = navItems.map((item) => item.id);

    // 1️⃣ Hash exists AND matches a nav item
    if (hash) {
      const hashId = hash.replace("#", "");
      if (navIds.includes(hashId) && id === hashId) {
        return true;
      }
    }

    // 2️⃣ Normal page route
    if (pathname === `/${id}`) {
      return true;
    }

    // 3️⃣ Default home when root and no valid hash
    if (id === "home" && pathname === "/" && !hash) {
      return true;
    }

    return false;
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
      className="mt-6 px-8 w-full">
      {/* Menu Title */}
      <div className="relative pb-1 mb-4">
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
                ? "font-semibold"
                : "text-gray-500 hover:text-gray-900 pl-1"
                }`}
              style={active ? { color: ACTIVE_COLOR } : undefined}
            >
              <span
                className={`mr-[0.3px] font-mono ${active
                  ? ""
                  : "text-gray-400 group-hover:text-gray-500"
                  }`}
                style={active ? { color: ACTIVE_COLOR } : undefined}
              >
                #
              </span>

              <span
                className={`italic tracking-tight ${active ? "" : "group-hover:text-gray-700"
                  }`}
                style={active ? { color: ACTIVE_COLOR } : undefined}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
};

export default Navbar;