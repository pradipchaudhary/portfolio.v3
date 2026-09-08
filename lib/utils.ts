// lib/utils.ts
export function generateSlug(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

// Format title by replacing hyphens, underscores, and dots with spaces and capitalizing the first letter of each word
export function formatTitle(title: string): string {
  return title
    .replace(/[-_.]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}
