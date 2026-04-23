// app/admin/projects/[id]/edit/page.tsx
import { getProjectById } from "@/lib/data";
import { updateProject } from "@/app/actions/project";

export default async function EditPage({ params }: { params: { id: string } }) {
  const project = await getProjectById(params.id);

  if (!project) return <p>Not found</p>;

  return (
    <form
      action={updateProject.bind(null, project.id)}
      className="p-6 space-y-4"
    >
      <input name="title" defaultValue={project.title} />
      <textarea
        name="description"
        defaultValue={project.description}
      />
      <textarea name="content" defaultValue={project.content || ""} />
      <input name="link" defaultValue={project.link || ""} />
      <input name="github" defaultValue={project.github || ""} />
      <input name="image" defaultValue={project.image || ""} />
      <input
        name="tags"
        defaultValue={project.tags.join(",")}
      />

      <button>Update</button>
    </form>
  );
}