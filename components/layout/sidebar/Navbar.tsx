"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const ACTIVE_COLOR = "#4285f4";

const navItems = [
  { label: "home", href: "/", id: "home" },
  { label: "projects", href: "/projects", id: "projects" },
  { label: "experience", href: "/experience", id: "experience" },
  { label: "blog", href: "/blog", id: "blog" },
  { label: "inspired", href: "/inspired", id: "inspired" },
  { label: "skills", href: "/skills", id: "skills" },
  { label: "components", href: "/components", id: "components" },
  { label: "resume", href: "/resume", id: "resume" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  // ✅ Precompute nav IDs (avoid recalculating on every render)
  const navIds = useMemo(() => navItems.map((item) => item.id), []);

  // ✅ Sync hash (optimized + safe)
  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);

    updateHash(); // initial
    window.addEventListener("hashchange", updateHash);

    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  // ✅ Cleaner active logic
  const isActive = (id: string) => {
    if (hash) {
      const hashId = hash.slice(1); // faster than replace
      if (navIds.includes(hashId)) return id === hashId;
    }

    if (pathname === `/${id}`) return true;

    return id === "home" && pathname === "/" && !hash;
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
      className="mt-6 px-8 w-full"
    >
      {/* Menu Title */}
      <div className="relative pb-1 mb-4">
        <h2 className="text-xs font-medium text-gray-500 uppercase tracking-wider text-center font-mono">
          Menu
        </h2>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-14 h-[1px] bg-gradient-to-r from-gray-200 via-red-400 to-gray-200 rounded-full" />
      </div>

      {/* Nav Items */}
      <div className="flex flex-wrap justify-center">
        {navItems.map((item) => {
          const active = isActive(item.id);
          const activeStyle = active ? { color: ACTIVE_COLOR } : undefined;

          return (
            <Link
              key={item.id} // ✅ better key
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={`group inline-flex items-center text-[13px] transition-colors duration-200 ${active
                ? "font-semibold"
                : "text-gray-500 hover:text-gray-900 pl-1"
                }`}
              style={activeStyle}
            >
              <span
                className={`mr-[0.3px] font-mono ${active
                  ? ""
                  : "text-gray-400 group-hover:text-gray-500"
                  }`}
                style={activeStyle}
              >
                #
              </span>

              <span
                className={`italic tracking-tight ${active ? "" : "group-hover:text-gray-700"
                  }`}
                style={activeStyle}
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