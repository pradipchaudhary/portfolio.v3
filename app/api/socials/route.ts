import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// Get all socials
export async function GET() {
  const socials = await prisma.socialLink.findMany({
    orderBy: {
      order: "asc",
    },
  });

  return NextResponse.json(socials);
}

// Create a new social
export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, url, icon, color, hoverColor, order, isActive } = body;

    const social = await prisma.socialLink.create({
      data: {
        name,
        href: url,
        icon, // ✅ REQUIRED FIX
        color,
        hoverColor,
        order: order ?? 0,
        isActive: isActive ?? true,
      },
    });

    return NextResponse.json(social);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create social link" },
      { status: 500 }
    );
  }
}