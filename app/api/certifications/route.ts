import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        // Safely parse the request body
        let body;
        try {
            body = await request.json();
            console.log("object", body);
        } catch (err) {
            // Return 400 Bad Request if the body is invalid or null
            return NextResponse.json(
                { error: "Invalid or missing JSON payload" },
                { status: 400 }
            );
        }

        // Destructure the required fields from the body
        const { certification_year, achieve_certifications } = body;

        console.log("Body submit data from request: ", body);
        console.log("certification_year: ", certification_year);
        console.log("achieve_certifications: ", achieve_certifications);
        // Validate required fields
        if (
            typeof certification_year !== "number" ||
            achieve_certifications.length === 0
        ) {
            return NextResponse.json(
                {
                    error: "Invalid or missing fields: year, certificate",
                },
                { status: 400 }
            );
        }

        // Create a new certification record in the database
        const newCertification = await prisma.certification.create({
            data: {
                certificationYear: certification_year,
                achieveCertifications: achieve_certifications,
            },
        });

        return NextResponse.json(
            {
                message: "Certification created successfully",
                certification: newCertification,
            },
            { status: 201 }
        );
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
        const certificates = await prisma.certification.findMany();
        return NextResponse.json(certificates);
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json(
            { error: "An error occurred" },
            { status: 500 }
        );
    }
}
