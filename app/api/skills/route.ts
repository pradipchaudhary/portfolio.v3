import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        // Parse the JSON body
        const body = await request.json();
        console.log("object", body);

        // Validate the body is an object
        if (!body || typeof body !== "object") {
            return NextResponse.json(
                { error: "Invalid request body" },
                { status: 400 }
            );
        }

        const { name, percentage, iconUrl, isHighlighted } = body;

        // Validate required fields
        if (
            !name ||
            typeof name !== "string" ||
            percentage === undefined || // Use stricter checks for undefined or null
            typeof percentage !== "number" ||
            typeof isHighlighted !== "boolean" ||
            (iconUrl && typeof iconUrl !== "string")
        ) {
            return NextResponse.json(
                { error: "Invalid or missing required fields" },
                { status: 400 }
            );
        }

        // Create a new skill in the database
        const newSkill = await prisma.skill.create({
            data: {
                name,
                percentage,
                iconUrl: iconUrl || null, // Handle optional fields gracefully
                isHighlighted,
            },
        });

        // Respond with success
        return NextResponse.json(
            {
                message: "Skill created successfully",
                skill: newSkill,
            },
            { status: 201 }
        );
    } catch (error: any) {
        // Log the error for debugging
        console.error("Error occurred in POST /api/skills:", error);

        // Handle Prisma-specific errors (optional, but recommended)
        if (error.code === "P2002") {
            // Example: Duplicate field error in Prisma
            return NextResponse.json(
                { error: "Skill with the same name already exists" },
                { status: 400 }
            );
        }

        // Generic server error response
        return NextResponse.json(
            { error: "An internal server error occurred" },
            { status: 500 }
        );
    }
}

export async function GET(Request: Request) {
    try {
        const skills = await prisma.skill.findMany();
        return NextResponse.json(skills);
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json(
            { error: "An error occurred" },
            { status: 500 }
        );
    }
}
