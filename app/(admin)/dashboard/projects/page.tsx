import ProjectsClient from "./ProjectsClient";
import { Project } from "@/types";

async function getProjects(): Promise<Project[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`, {
    cache: "no-store", // always fresh (or use revalidate)
  });

  if (!res.ok) throw new Error("Failed to fetch");

  return res.json();
}

export default async function Page() {
  const projects = await getProjects();

  return <ProjectsClient projects={projects} />;
}