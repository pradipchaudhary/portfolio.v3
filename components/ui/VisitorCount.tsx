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
    <p className="text-sm text-gray-500 italic py-1">{"You're the "}<span className="text-black">{count.toLocaleString()}<sup>th</sup></span> visitor</p>
  );
}