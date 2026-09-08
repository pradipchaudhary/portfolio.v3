export default function Tag({ label }: { label: string }) {
  return (
    <span className="text-xs italic px-1.5 text-[var(--foreground)]/50 group-hover:text-[var(--foreground)]/80 transition-colors">
    {label}
  </span>
  );
}