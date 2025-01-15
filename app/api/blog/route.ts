import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// Define the BlogPost type based on your Prisma model
interface BlogPost {
    id?: number;
    title: string;
    excerpt?: string | " ";
    readTime?: string;
    slug: string;
    thumbnail?: string;
    content: string;
    category?: string;
    createdAt?: string;
    updatedAt?: string;
}

// Handler for POST requests
export async function POST(request: Request) {
    try {
        // Parse the incoming request body
        const body: BlogPost = await request.json();

        // Destructure the necessary properties from the body
        const {
            id,
            title,
            excerpt,
            readTime,
            slug,
            thumbnail,
            content,
            category,
            createdAt,
            updatedAt,
        } = body;

        // Simple validation of required fields
        if (!title || !slug || !content) {
            return new NextResponse(
                JSON.stringify({
                    error: "Title, Slug, and Content are required.",
                }),
                { status: 400 }
            );
        }

        // Log the request body for debugging purposes (optional)
        console.log("Request body data:", body);

        // Create a new blog post in the database using Prisma
        const newPost = await prisma.blog.create({
            data: {
                id,
                title,
                excerpt,
                readTime,
                slug,
                thumbnail,
                content,
                category,
                createdAt,
                updatedAt,
            },
        });

        // Return a successful response
        return new NextResponse(
            JSON.stringify({
                message: "Post created successfully!",
                data: newPost,
            }),
            { status: 201 } // HTTP Status 201: Created
        );
    } catch (error: unknown) {
        // Type the error as unknown to avoid `any`
        if (error instanceof Error) {
            // If the error is an instance of Error, handle it
            console.error("Error creating post:", error.message);
            return new NextResponse(
                JSON.stringify({
                    error: "Internal Server Error",
                    details: error.message,
                }),
                { status: 500 }
            );
        }

        // If the error type is not known, handle it as a generic internal server error
        console.error("Unexpected error:", error);
        return new NextResponse(
            JSON.stringify({
                error: "Internal Server Error",
            }),
            { status: 500 }
        );
    } finally {
        await prisma.$disconnect(); // Ensure Prisma disconnects after operation
    }
}

// Handler for GET requests
export async function GET() {
    try {
        // Fetch all blog posts from the database using Prisma
        const posts = await prisma.blog.findMany();

        // Return posts as JSON response
        return NextResponse.json(posts);
    } catch (error: unknown) {
        // Type the error as unknown to avoid `any`
        if (error instanceof Error) {
            console.error("Error fetching posts:", error.message);
            return new NextResponse(
                JSON.stringify({
                    error: "Internal Server Error",
                    details: error.message,
                }),
                { status: 500 }
            );
        }

        // If the error type is not known, handle it as a generic internal server error
        console.error("Unexpected error:", error);
        return new NextResponse(
            JSON.stringify({
                error: "Internal Server Error",
            }),
            { status: 500 }
        );
    }
}
