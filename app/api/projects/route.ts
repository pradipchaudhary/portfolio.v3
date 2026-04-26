import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


// Get all projects
export async function GET(){
  const projects = await prisma.project.findMany();

  return NextResponse.json(projects)
}


// CREATE PROJECT (POST)
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      title,
      slug,
      description,
      content,
      link,
      github,
      image,
      tags,
      featured,
      published,
      order,
    } = body;

    const project = await prisma.project.create({
      data: {
        title,
        slug,
        description,
        content,
        link,
        github,
        image,
        tags,
        featured,
        published,
        order,
      },
    });

    return NextResponse.json(
      { success: true, project },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: error.message || "Failed to create project",
      },
      { status: 500 }
    );
  }
}