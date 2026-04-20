"use client";

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

  const isActive = (href: string) => pathname === href;

  return (
    <motion.nav
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.1, ease: "easeOut" }}
      className="mt-6 px-8 w-full"
    >
      {/* HEADER */}
      <div className="flex items-center gap-4 w-full px-2 mb-3">
        <div className="h-px flex-1 bg-foreground/10" />
        <span className="text-xs uppercase tracking-[0.3em] font-semibold text-foreground/30">
          Explore
        </span>
        <div className="h-px flex-1 bg-foreground/10" />
      </div>

      {/* NAV ITEMS */}
      <div className="flex flex-wrap justify-center gap-y-1 gap-x-1">
        {navItems.map((item) => {
          const active = isActive(item.href);

          return (
            <Link
              key={item.id}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={`
                group inline-flex items-center text-[13px]
                transition-colors duration-200
                ${active ? "font-semibold" : "text-gray-500 hover:text-gray-900"}
              `}
              style={active ? { color: ACTIVE_COLOR } : undefined}
            >
              <span
                className={`
                  font-mono transition-colors
                  ${active ? "" : "text-gray-400 group-hover:text-gray-500"}
                `}
                style={active ? { color: ACTIVE_COLOR } : undefined}
              >
                #
              </span>

              <span
                className={`
                  italic tracking-tight transition-colors
                  ${active ? "" : "group-hover:text-gray-700"}
                `}
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