import Link from "next/link";
import React from "react";

/**
 * PlainLink Component
 * -------------------
 * Clean, accessible, and consistent link styling.
 */
const PlainLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-blue-600 hover:text-blue-800 hover:underline underline-offset-2 transition-colors duration-150"
    >
      {children}
    </Link>
  );
};

export default PlainLink;
