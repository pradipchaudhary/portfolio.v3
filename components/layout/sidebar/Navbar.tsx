"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { navigation } from "@/data/navigation";

const ACTIVE_COLOR = "#4285f4";

const Navbar = () => {
  const [activeId, setActiveId] = useState<string>("home");

  useEffect(() => {
    const sectionIds = navigation.map((item) => item.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry most visible in the viewport
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        // Triggers when section is roughly in the middle of the viewport
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const isActive = (href: string) => href.replace("#", "") === activeId;

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
        {navigation.map((item) => {
          const active = isActive(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className="group inline-flex items-center text-[13px] transition-colors duration-200 hover:text-[color:var(--active)]"
              style={{ color: active ? ACTIVE_COLOR : "#6b7280" }}
            >
              <span
                className="font-mono transition-colors duration-200 group-hover:text-[color:var(--active)]"
                style={{ color: active ? ACTIVE_COLOR : undefined }}
              >
                #
              </span>
              <span
                className="italic tracking-tight transition-colors duration-200 group-hover:text-[color:var(--active)]"
                style={{ color: active ? ACTIVE_COLOR : undefined }}
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
