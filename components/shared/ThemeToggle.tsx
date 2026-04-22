'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="fixed top-4 right-4 p-2  text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all cursor-pointer "
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5 group-hover:rotate-45 transition-transform" />
      ) : (
        <Sun className="w-5 h-5 group-hover:-rotate-12 transition-transform" />
      )}
    </button>
  );
}
