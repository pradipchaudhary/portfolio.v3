// app/admin/projects/page.tsx
import { getProjects } from "@/lib/data";
import { deleteProject } from "@/app/actions/project";
import Link from "next/link";

export default async function AdminProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="p-6 space-y-4">
      <Link href="/admin/projects/create">➕ Create New</Link>

      {projects.map((p) => (
        <div key={p.id} className="border p-4 rounded">
          <h2 className="font-bold">{p.title}</h2>
          <p>{p.description}</p>

          <div className="flex gap-4 mt-2">
            <Link href={`/admin/projects/${p.id}/edit`}>
              Edit
            </Link>

            <form action={deleteProject.bind(null, p.id)}>
              <button className="text-red-500">
                Delete
              </button>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
}