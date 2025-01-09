import { blogPosts } from "@/data/blog";

export async function GET() {
    try {
        // Return all blog posts as JSON
        return new Response(JSON.stringify(blogPosts), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error: any) {
        return new Response("Failed to fetch all posts", { status: 500 });
    }
}
