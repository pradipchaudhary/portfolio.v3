"use client";

import { useEffect, useState } from "react";

type Social = {
  id: string;
  name: string;
  href: string;
  icon: string;
  color: string | null;
  hoverColor: string | null;
  order: number;
  isActive: boolean;
};

export default function SocialAdmin() {
  const [socials, setSocials] = useState<Social[]>([]);
  const [editing, setEditing] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    href: "",
    icon: "",
    color: "",
    hoverColor: "",
    order: 0,
    isActive: true,
  });

  // =========================
  // LOAD DATA
  // =========================
  const load = async () => {
    try {
      const res = await fetch("/api/socials");
      const data = await res.json();
      setSocials(data);
    } catch (err) {
      console.error("Failed to load socials");
    }
  };

  useEffect(() => {
    load();
  }, []);

  // =========================
  // RESET FORM
  // =========================
  const reset = () => {
    setForm({
      name: "",
      href: "",
      icon: "",
      color: "",
      hoverColor: "",
      order: 0,
      isActive: true,
    });
    setEditing(null);
  };

  // =========================
  // SUBMIT (CREATE / UPDATE)
  // =========================
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const url = editing
      ? `/api/socials/${editing}`
      : "/api/socials";

    const method = editing ? "PUT" : "POST";

    try {
      await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          href: form.href,
          icon: form.icon,
          color: form.color || null,
          hoverColor: form.hoverColor || null,
          order: form.order,
          isActive: form.isActive,
        }),
      });

      reset();
      load();
    } catch {
      alert("Something went wrong");
    }

    setLoading(false);
  };

  // =========================
  // DELETE
  // =========================
  const remove = async (id: string) => {
    if (!confirm("Delete this social link?")) return;

    await fetch(`/api/socials/${id}`, {
      method: "DELETE",
    });

    load();
  };

  // =========================
  // EDIT
  // =========================
  const edit = (item: Social) => {
    setForm({
      name: item.name ?? "",
      href: item.href ?? "",
      icon: item.icon ?? "",
      color: item.color ?? "",
      hoverColor: item.hoverColor ?? "",
      order: item.order ?? 0,
      isActive: item.isActive ?? true,
    });

    setEditing(item.id);
  };

  // =========================
  // TOGGLE ACTIVE
  // =========================
  const toggleActive = async (item: Social) => {
    await fetch(`/api/socials/${item.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: item.name,
        href: item.href,
        icon: item.icon,
        color: item.color,
        hoverColor: item.hoverColor,
        order: item.order,
        isActive: !item.isActive,
      }),
    });

    load();
  };

  // =========================
  // UI
  // =========================
  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Social Manager</h1>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          className="border p-2 w-full rounded"
        />

        <input
          placeholder="Href"
          value={form.href}
          onChange={(e) =>
            setForm({ ...form, href: e.target.value })
          }
          className="border p-2 w-full rounded"
        />

        <input
          placeholder="Icon (github)"
          value={form.icon}
          onChange={(e) =>
            setForm({ ...form, icon: e.target.value })
          }
          className="border p-2 w-full rounded"
        />

        <div className="flex gap-2">
          <input
            placeholder="Color (#000)"
            value={form.color}
            onChange={(e) =>
              setForm({ ...form, color: e.target.value })
            }
            className="border p-2 w-full rounded"
          />

          <input
            placeholder="Hover Color (#333)"
            value={form.hoverColor}
            onChange={(e) =>
              setForm({
                ...form,
                hoverColor: e.target.value,
              })
            }
            className="border p-2 w-full rounded"
          />
        </div>

        <input
          type="number"
          placeholder="Order"
          value={form.order}
          onChange={(e) =>
            setForm({
              ...form,
              order: Number(e.target.value),
            })
          }
          className="border p-2 w-full rounded"
        />

        <button
          disabled={loading}
          className="bg-black text-white px-4 py-2 w-full rounded disabled:opacity-50"
        >
          {loading
            ? "Processing..."
            : editing
              ? "Update Social"
              : "Create Social"}
        </button>
      </form>

      {/* LIST */}
      <div className="space-y-3">
        {socials.map((s) => (
          <div
            key={s.id}
            className="border p-3 rounded-lg flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{s.name}</p>
              <p className="text-sm text-zinc-500">{s.href}</p>
              <p className="text-xs">
                Active: {s.isActive ? "Yes" : "No"}
              </p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => toggleActive(s)}
                className="text-blue-500 text-sm"
              >
                Toggle
              </button>

              <button
                onClick={() => edit(s)}
                className="text-green-500 text-sm"
              >
                Edit
              </button>

              <button
                onClick={() => remove(s.id)}
                className="text-red-500 text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}