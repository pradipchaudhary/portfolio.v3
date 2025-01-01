import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        // Safely parse the request body
        const body = await request.json();
        console.log("object", body);

        // Validate the body is an object
        if (!body || typeof body !== "object") {
            return NextResponse.json(
                { error: "Invalid request body" },
                { status: 400 }
            );
        }

        // Destructure the required fields from the body
        const { title, company, companyUrl, period, responsibilities } = body;
        const experience = await prisma.experience.create({
            data: {
                title,
                company,
                companyUrl,
                period,
                responsibilities,
            },
        });

        return NextResponse.json({
            message: "Experience created successfully",
            experience,
        });
    } catch (error) {
        // Generic server error response
        return NextResponse.json(
            { error: "An internal server error occurred" },
            { status: 500 }
        );
    }
}

export async function GET(request: Request) {
    try {
        const experiences = await prisma.experience.findMany();
        return NextResponse.json(experiences);
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json(
            { error: "An error occurred" },
            { status: 500 }
        );
    }
}
