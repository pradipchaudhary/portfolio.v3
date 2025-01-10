import { projects } from "@/data/projects";
import { NextResponse } from "next/server";

export async function GET(
    request: Request,
    { params }: { params: { slug: string } }
) {
    try {
        // Find the project by slug
        const project = projects.find((p) => p.slug === params.slug);

        // If the project is not found, return a 404 response
        if (!project) {
            return NextResponse.json(
                { message: `Project with slug "${params.slug}" not found.` },
                { status: 404 }
            );
        }

        // Return the found project with a 200 status
        return NextResponse.json({ project }, { status: 200 });
    } catch (error: any) {
        // Handle unexpected errors
        return NextResponse.json(
            {
                message: "An error occurred while fetching the project.",
                details: error.message || error,
            },
            { status: 500 }
        );
    }
}
