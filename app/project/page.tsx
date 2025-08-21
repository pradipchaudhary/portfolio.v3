import { prisma } from "@/lib/prisma";

export default async function AdminPage() {
    const projects = await prisma.project.findMany({ orderBy: { createdAt: "desc" } });
    

    return(
        <ul className="space-y-2">
          {projects.map((p) => (
            <li key={p.id} className="flex justify-between rounded-lg border p-3">
              <div>
                <div className="font-medium">{p.title}</div>
                <div className="text-sm text-gray-500">{p.description}</div>
              </div>
              <form action={`/api/projects/${p.id}`} method="post">
                <button
                  name="_action"
                  value="delete"
                  className="rounded bg-red-500 px-3 py-1 text-white"
                >
                  Delete
                </button>
              </form>
            </li>
          ))}
        </ul>
    )
}