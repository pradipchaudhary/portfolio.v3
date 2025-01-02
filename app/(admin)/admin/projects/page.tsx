import Link from "next/link";

export default function ProjectsPage() {
    return (
        <>
            <section id="projects">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-400">
                    📂 Projects
                </h2>
                <Link href="/admin/projects/new">Create New</Link>
            </section>
        </>
    );
}
