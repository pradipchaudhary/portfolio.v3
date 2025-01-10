import { projects } from "@/data/projects";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        return NextResponse.json({ projects }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: error }, { status: 500 });
    }
}
