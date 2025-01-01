import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        // Await the resolution of params
        const { id } = await params;

        // Validate the 'id'
        console.log("id", id);

        const certification = await prisma.certification.findUnique({
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
export async function PUT(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const { id } = params; // No need to await params, it's already available

        // Validate the 'id'
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

        console.log("Request body:", body); // Debugging log

        // Assuming the body contains the certification data
        const { certificationYear, achieveCertifications } = body;
        console.log("Certification Year:", certificationYear);
        console.log("Achieve Certifications:", achieveCertifications);

        // Validate the body fields (optional)
        if (!certificationYear || !Array.isArray(achieveCertifications)) {
            return NextResponse.json(
                { error: "Missing or invalid data in the request body" },
                { status: 400 }
            );
        }

        // Prisma Update (Uncomment and ensure this is correct)
        // Replace this with actual Prisma code to update the certification in the database
        await prisma.certification.update({
            where: { id: Number(id) },
            data: {
                certificationYear,
                achieveCertifications,
            },
        });

        return NextResponse.json({
            message: "Certification updated successfully",
            // You can include the updated certification data here if needed
        });
    } catch (error) {
        console.error("Error updating certification:", error);
        return NextResponse.json(
            { error: "Failed to update certification" },
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
        // Delete the certification from the database
        await prisma.certification.delete({
            where: { id: Number(id) },
        });

        return NextResponse.json({
            message: "Certification deleted successfully",
        });
    } catch (error) {
        console.error("Error deleting certification:", error);
        return NextResponse.json(
            { error: "Failed to delete certification" },
            { status: 500 }
        );
    }
}
