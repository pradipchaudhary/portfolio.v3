"use client";

import {
  Users,
  History,
  Briefcase,
  Newspaper,
  BarChart2,
  Link as LinkIcon,
  Settings,
  LayoutDashboard,
  User,
  Search,
  Sparkles,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoutButton from "../shared/LogoutButton";

export const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: User, label: "Profile", href: "/dashboard/profile" },
  { icon: Search, label: "Meta SEO", href: "/dashboard/meta" },
  { icon: LinkIcon, label: "Social Links", href: "/dashboard/social" },
  { icon: Briefcase, label: "Projects", href: "/dashboard/projects" },
  { icon: Sparkles, label: "Skills", href: "/dashboard/skills" },
  { icon: History, label: "Experience", href: "/dashboard/experience" },
  { icon: Newspaper, label: "Blog", href: "/dashboard/blog" },
  { icon: Users, label: "Users & Comments", href: "/dashboard/users" },
  { icon: BarChart2, label: "Analytics", href: "/dashboard/analytics" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full md:w-2/5 lg:w-[330px] lg:sticky lg:top-0 lg:h-screen flex flex-col justify-between px-6 py-10 border-r border-neutral-200 dark:border-neutral-800">

      {/* LOGO */}
      <div className="flex items-center space-x-3 px-2">
        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
          <Zap className="w-5 h-5 text-primary-foreground" />
        </div>

        <span className="font-bold text-lg text-foreground tracking-tight">
          PORTFOLIO
        </span>
      </div>

      {/* NAV */}
      <div className="flex-1 space-y-6">

        {/* CORE */}
        <div className="px-2">
          <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.2em] mb-4">
            v3.0.0
          </p>

          <nav className="space-y-1">
            {menuItems.slice(0, 3).map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`
                    flex items-center gap-3 px-3 py-2 rounded-lg transition
                    ${isActive
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"}
                  `}
                >
                  <item.icon
                    className={`w-4 h-4 ${isActive
                      ? "text-primary"
                      : "text-muted-foreground group-hover:text-foreground"
                      }`}
                  />

                  <span className="text-sm font-medium">
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* PLATFORM */}
        <div className="px-2">
          <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.2em] mb-4">
            Platform
          </p>

          <nav className="space-y-1">
            {menuItems.slice(3).map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`
                    flex items-center gap-3 px-3 py-2 rounded-lg transition
                    ${isActive
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"}
                  `}
                >
                  <item.icon
                    className={`w-4 h-4 ${isActive
                      ? "text-primary"
                      : "text-muted-foreground group-hover:text-foreground"
                      }`}
                  />

                  <span className="text-sm font-medium">
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* FOOTER */}
      <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800">
        <LogoutButton />
      </div>
    </aside>
  );
}