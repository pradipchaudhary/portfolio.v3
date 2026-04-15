// app/api/visitor/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const visitor = await prisma.visitor.upsert({
    where: { id: 1 },
    update: {
      count: {
        increment: 1, // 🔥 atomic operation
      },
    },
    create: {
      id: 1,
      count: 1,
    },
  });

  return NextResponse.json({ count: visitor.count });
}

