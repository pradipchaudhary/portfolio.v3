import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        // Await the resolution of params
        const { id } = await params;

        const skill = await prisma.skill.findUnique({
            where: { id: Number(id) },
        });
        if (!skill) {
            throw new Error("Skill not found");
        }

        // Return the found skill in JSON format
        return NextResponse.json({ skill });
    } catch (error) {
        console.error("Error fetching skill:", error);
        return NextResponse.json(
            { error: "Failed to fetch skill" },
            { status: 500 }
        );
    }
}

export async function PUT(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        // Await the `params` object
        const { id } = await params;

        // Validate the `id`
        if (!id || isNaN(Number(id))) {
            return NextResponse.json(
                { error: "Invalid or missing ID in request parameters" },
                { status: 400 }
            );
        }

        // Parse the request body
        const body = await request.json();
        if (!body || typeof body !== "object") {
            return NextResponse.json(
                { error: "Invalid or missing request body" },
                { status: 400 }
            );
        }
        console.log("Request body:", body);

        // Extract fields from the request body
        const { name, percentage, iconUrl, isHighlighted } = body;

        // Validate and build the update data object dynamically
        const updateData: { [key: string]: any } = {};

        if (name && typeof name === "string") updateData.name = name;
        if (percentage !== undefined && !isNaN(Number(percentage))) {
            updateData.percentage = Number(percentage); // Ensure it's a number
        }
        if (iconUrl && typeof iconUrl === "string")
            updateData.iconUrl = iconUrl;
        if (isHighlighted !== undefined && typeof isHighlighted === "boolean") {
            updateData.isHighlighted = isHighlighted;
        }

        // Ensure at least one valid field is provided for the update
        if (Object.keys(updateData).length === 0) {
            return NextResponse.json(
                { error: "No valid fields provided for update" },
                { status: 400 }
            );
        }

        // Perform the database update
        const updatedSkill = await prisma.skill.update({
            where: { id: Number(id) },
            data: updateData,
        });

        // Respond with the updated record
        return NextResponse.json({
            message: "Skill updated successfully",
            skill: updatedSkill,
        });
    } catch (error: any) {
        console.error("Error updating skill:", error);

        // Handle Prisma-specific errors (optional)
        if (error.code === "P2025") {
            return NextResponse.json(
                { error: "Skill not found for the given ID" },
                { status: 404 }
            );
        }

        // Generic server error response
        return NextResponse.json(
            { error: "Failed to update skill" },
            { status: 500 }
        );
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        // Await and fetch the id from params
        const { id } = await params;
        // Delete the skill from the database
        await prisma.skill.delete({
            where: { id: Number(id) },
        });

        return NextResponse.json({ message: "Skill deleted successfully" });
    } catch (error) {
        console.error("Error deleting skill:", error);
        return NextResponse.json(
            { error: "Failed to delete skill" },
            { status: 500 }
        );
    }
}
