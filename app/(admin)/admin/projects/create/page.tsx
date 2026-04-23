// app/admin/projects/create/page.tsx
import { createProject } from "@/app/actions/project";

export default function CreatePage() {
  return (
    <form action={createProject} className="p-6 space-y-4">
      <input name="title" placeholder="Title" required />
      <textarea name="description" placeholder="Description" />
      <textarea name="content" placeholder="Full Content" />
      <input name="link" placeholder="Live URL" />
      <input name="github" placeholder="GitHub URL" />
      <input name="image" placeholder="Image URL" />
      <input name="tags" placeholder="react,nextjs,ts" />

      <button>Create Project</button>
    </form>
  );
}