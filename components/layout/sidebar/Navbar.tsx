"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

const ACTIVE_COLOR = "#4285f4";

const navItems = [
  { label: "home", href: "/" },
  { label: "projects", href: "/projects" },
  { label: "experience", href: "/experience" },
  { label: "blog", href: "/blog" },
  { label: "inspired", href: "/inspired" },
  { label: "skills", href: "/skills" },
  { label: "components", href: "/components" },
  { label: "resume", href: "/resume" },
];

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <motion.nav
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.1, ease: "easeOut" }}
      className="mt-6 px-8 w-full"
      style={{ ["--active" as any]: ACTIVE_COLOR }}
    >
      {/* HEADER */}
      <div className="flex items-center gap-4 w-full px-2 mb-3">
        <div className="h-px flex-1 bg-foreground/10" />
        <span className="text-xs uppercase tracking-[0.3em] font-semibold text-foreground/30">
          Explore
        </span>
        <div className="h-px flex-1 bg-foreground/10" />
      </div>

      {/* NAV */}
      <div className="flex flex-wrap justify-center gap-x-1 gap-y-1">
        {navItems.map((item) => {
          const active = isActive(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={`
                group inline-flex items-center text-[13px]
                transition-colors duration-200
                hover:text-[color:var(--active)]
              `}
              style={{
                color: active ? ACTIVE_COLOR : "#6b7280",
              }}
            >
              {/* HASH */}
              <span
                className={`
                  font-mono
                  transition-colors duration-200
                  group-hover:text-[color:var(--active)]
                `}
                style={{
                  color: active ? ACTIVE_COLOR : undefined,
                }}
              >
                #
              </span>

              {/* LABEL */}
              <span
                className={`
                  italic tracking-tight
                  transition-colors duration-200
                  group-hover:text-[color:var(--active)]
                `}
                style={{
                  color: active ? ACTIVE_COLOR : undefined,
                }}
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