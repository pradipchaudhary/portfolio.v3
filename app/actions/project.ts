// /actions/project.actions.ts
"use server";

import { prisma } from "@/lib/prisma";
import { projectSchema } from "@/lib/validations";
import { revalidatePath } from "next/cache";

export async function createProject(data: unknown) {
  const parsed = projectSchema.parse(data);

  await prisma.project.create({ data: parsed });

  revalidatePath("/admin/projects");
}

export async function updateProject(id: string, data: unknown) {
  const parsed = projectSchema.parse(data);

  await prisma.project.update({
    where: { id },
    data: parsed,
  });

  revalidatePath("/admin/projects");
}

export async function deleteProject(id: string) {
  await prisma.project.delete({
    where: { id },
  });

  revalidatePath("/admin/projects");
}

export async function getProjects() {
  return prisma.project.findMany({
    orderBy: { order: "asc" },
  });
}

export async function getProject(id: string) {
  return prisma.project.findUnique({
    where: { id },
  });
}