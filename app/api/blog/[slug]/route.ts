import { blogPosts } from "@/data/blog";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    request: NextRequest,
    { params }: { params: { slug: string } }
) {
    try {
        if (
            params &&
            typeof params.slug === "string" &&
            params.slug.trim() !== ""
        ) {
            // Find the index of the blog post matching the slug
            const blogIndex = blogPosts.findIndex(
                (p) => p.slug === params.slug
            );
            console.log("Server : ", blogIndex);

            if (blogIndex !== -1) {
                // Logic when the blog post is found
                const foundBlogPost = blogPosts[blogIndex];
                console.log("Found Blog Post: ", foundBlogPost);
                return NextResponse.json({ foundBlogPost });
            } else {
                console.log("Blog post not found.");
                return NextResponse.json(
                    { message: `Blog ${params.slug} not found` },
                    { status: 404 }
                );
            }
        } else {
            console.log("Invalid or empty slug parameter.");
            return NextResponse.json(
                { message: "Invalid or empty slug parameter" },
                { status: 400 }
            );
        }
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
