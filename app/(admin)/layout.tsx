"use client";

import { usePathname } from 'next/navigation';
import {
  Home,
  BarChart2,
  Users,
  Settings,
  LogOut,
  Zap,
  Link as LinkIcon,
  PieChart,
  Briefcase,
  Code2,
  History,
  Newspaper,
  Award
} from 'lucide-react';
import Link from 'next/link';
import LogoutButton from '@/components/shared/LogoutButton';
// import LogoutButton from '@/components/auth/LogoutButton';

const menuItems = [
  { icon: Home, label: 'Overview', href: '/' },
  { icon: Users, label: 'Personal Info', href: '/personal-info' },
  { icon: Code2, label: 'Skills', href: '/skills' },
  { icon: History, label: 'Experience', href: '/experience' },
  { icon: Briefcase, label: 'Projects', href: '/projects' },
  { icon: Award, label: 'Certifications', href: '/certifications' },
  { icon: Newspaper, label: 'Blog', href: '/blog' },
  { icon: BarChart2, label: 'Meta Data', href: '/meta-data' },
  { icon: LinkIcon, label: 'Social Links', href: '/social-links' },
  { icon: PieChart, label: 'Analytics', href: '/analytics' },
  { icon: Settings, label: 'Preferences', href: '/preferences' },
];

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="relative z-10 mx-auto min-h-screen max-w-6xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-6">
        {/* Header  */}
        <aside className='w-full md:w-1/2 lg:w-1/2
        lg:sticky lg:top-0
        lg:h-screen
        flex flex-col justify-between
        px-6 py-10 lg:pt-16 lg:pb-4'>
          <div className="flex items-center space-x-3 px-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary-foreground fill-current" />
            </div>
            <span className="font-heading font-bold text-lg text-foreground tracking-tight">PORTFOLIO</span>
          </div>
          <div className="flex-1 space-y-4">
            <div className="px-2">
              <p className="text-[10px] font-bold text-muted-foreground/30 uppercase tracking-[0.2em] mb-4">Core Architecture</p>
              <nav className="space-y-1">
                {menuItems.slice(0, 7).map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-all active:scale-[0.98] group ${isActive
                        ? 'bg-primary/5 text-primary'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                        }`}
                    >
                      <item.icon className={`w-3.5 h-3.5 ${isActive ? 'text-primary' : 'text-muted-foreground/60 group-hover:text-foreground'}`} />
                      <span className="text-sm font-medium">{item.label}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="px-2 pt-4">
              <p className="text-[10px] font-bold text-muted-foreground/30 uppercase tracking-[0.2em] mb-4">Platform Intelligence</p>
              <nav className="space-y-1">
                {menuItems.slice(7).map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-all active:scale-[0.98] group ${isActive
                        ? 'bg-primary/5 text-primary'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                        }`}
                    >
                      <item.icon className={`w-3.5 h-3.5 ${isActive ? 'text-primary' : 'text-muted-foreground/60 group-hover:text-foreground'}`} />
                      <span className="text-sm font-medium">{item.label}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>

          <LogoutButton />
        </aside>

        <main className=" w-full pl-5">
          {/* Header   */}
          Header
          {children}
        </main>
      </div>
    </div>
  )
}
