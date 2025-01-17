import { BlogPost } from "@/types";

// app/server-component-example/page.jsx
async function getData() {
    const res = await fetch("https://pradipchaudhary.com.np/api/post", {
        next: { revalidate: 60 }, // Revalidates every 60 seconds
    });
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}

export default async function Page() {
    const data = await getData();

    return (
        <div>
            <h1>Server Component Data Fetching</h1>
            <ul>
                {data.slice(0, 5).map((post: BlogPost) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}
