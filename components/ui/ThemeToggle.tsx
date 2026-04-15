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
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800/80 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all shadow-sm hover:scale-110 active:scale-95 group"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 group-hover:rotate-45 transition-transform" />
      ) : (
        <Moon className="w-4 h-4 group-hover:-rotate-12 transition-transform" />
      )}
    </button>
  );
}
