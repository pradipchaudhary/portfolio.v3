// lib/data.ts
import { cache } from "react";
import { prisma } from "./prisma";

export const getProjects = cache(async () => {
  return prisma.project.findMany({
    orderBy: { order: "asc" },
  });
});

export const getProjectById = cache(async (id: string) => {
  return prisma.project.findUnique({
    where: { id },
  });
});

export const getPublishedProjects = cache(async () => {
  return prisma.project.findMany({
    where: { published: true },
    orderBy: { order: "asc" },
  });
});