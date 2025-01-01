import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        // Await the resolution of params
        const { id } = await params;

        // Validate the 'id'
        console.log("id", id);

        const certification = await prisma.experience.findUnique({
            where: { id: Number(id) },
        });
        if (!certification) {
            throw new Error("certification not found");
        }

        // Return the found certification in JSON format
        return NextResponse.json({ certification });
    } catch (error) {
        console.error("Error fetching certification:", error);
        return NextResponse.json(
            { error: "Failed to fetch certification" },
            { status: 500 }
        );
    }
}
