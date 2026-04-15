"use client";

import { useEffect, useState } from "react";

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/visitor")
      .then((res) => res.json())
      .then((data) => setCount(data.count));
  }, []);

  if (!count) return null;

  return (
    <p className="text-xs text-gray-500 dark:text-gray-400 leading-none">
      <span className="text-gray-400 dark:text-gray-500">Visitor</span>

      <span className="mx-2 text-gray-300 dark:text-gray-600">•</span>

      <span className="text-gray-900 dark:text-gray-100 font-medium">
        {count.toLocaleString()}
      </span>
    </p>
  );
}