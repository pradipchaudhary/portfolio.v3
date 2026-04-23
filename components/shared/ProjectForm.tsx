// /components/ProjectForm.tsx
"use client";

import { useState } from "react";

type Props = {
  initialData?: any;
  onSubmit: (data: any) => Promise<void>;
};

export default function ProjectForm({ initialData, onSubmit }: Props) {
  const [form, setForm] = useState(
    initialData || {
      title: "",
      slug: "",
      description: "",
      tags: "",
    }
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await onSubmit({
      ...form,
      tags: form.tags.split(",").map((t: string) => t.trim()),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
      <input
        placeholder="Title"
        value={form.title}
        onChange={(e) =>
          setForm({ ...form, title: e.target.value })
        }
        className="input"
      />

      <input
        placeholder="Slug"
        value={form.slug}
        onChange={(e) =>
          setForm({ ...form, slug: e.target.value })
        }
        className="input"
      />

      <textarea
        placeholder="Description"
        value={form.description}
        onChange={(e) =>
          setForm({ ...form, description: e.target.value })
        }
        className="textarea"
      />

      <input
        placeholder="tags (comma separated)"
        value={form.tags}
        onChange={(e) =>
          setForm({ ...form, tags: e.target.value })
        }
        className="input"
      />

      <button className="btn">Save</button>
    </form>
  );
}