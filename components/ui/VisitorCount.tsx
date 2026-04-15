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
    <p className="text-xs text-gray-500 leading-none">
      <span className="text-gray-400">Visitor</span>
      <span className="mx-2 text-gray-300">•</span>
      <span className="text-gray-900 font-medium">
        {count.toLocaleString()}
      </span>
    </p>
  );
}