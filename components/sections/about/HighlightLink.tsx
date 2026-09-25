const HighlightLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        relative inline-block font-bold
        text-[var(--foreground)]
        hover:text-[var(--accent)]
        transition-colors duration-300
      "
    >
      {children}

      {/* underline */}
      <svg
        className="absolute -bottom-[2px] left-0 w-full h-[10px] text-[var(--accent)]/20"
        viewBox="0 0 120 10"
        fill="none"
      >
        <path
          d="M3 7C20 2 50 10 70 4C90 4 110 10 118 5"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinecap="round"
        />
      </svg>
    </a>
  );
};

export default HighlightLink;
