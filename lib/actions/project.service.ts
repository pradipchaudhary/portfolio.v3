import { prisma } from "@/lib/prisma";
import { ProjectStats } from "@/types";

export async function getProjectsWithStats() {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
  });

  // ✅ Aggregate ONCE (O(n))
  const stats: ProjectStats = projects.reduce(
    (acc, p) => {
      acc.total++;
      if (p.featured) acc.featured++;
      if (p.published) acc.published++;
      return acc;
    },
    { total: 0, featured: 0, published: 0 }
  );

  return { projects, stats };
}