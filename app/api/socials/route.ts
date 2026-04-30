
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// Get all socials
export async function GET() {
  const socials = await prisma.socialLink.findMany();
  return NextResponse.json(socials);
}

// Create a new social
export async function POST(request: Request) {
  const { name, url } = await request.json();
  const social = await prisma.socialLink.create({
    data: {
      name,
      href: url,
    },
  });
  return NextResponse.json(social);
}