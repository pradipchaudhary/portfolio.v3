"use client";

import { useEffect, useState } from "react";

export default function SpotlightBackground() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () =>
      setIsDark(document.documentElement.classList.contains("dark"));

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        background: isDark
          ? `
            radial-gradient(
              circle at center,
              rgba(255, 255, 255, 0.06) 0%,
              rgba(255, 255, 255, 0.02) 25%,
              rgba(0, 0, 0, 0) 60%
            )
          `
          : `
            radial-gradient(
              circle at center,
              rgba(0, 0, 0, 0.06) 0%,
              rgba(0, 0, 0, 0.02) 25%,
              rgba(255, 255, 255, 0) 60%
            )
          `,
      }}
    />
  );
}